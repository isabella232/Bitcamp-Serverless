//spotify api call
const APIController = (function() {
    
    const clientId = config.CLIENT_ID;
    const clientSecret = config.CLIENT_SECRET;

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const _getTracks = async (token, tracksEndPoint, limit) => {
        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

    const _getRecommendations = async(token, tracksArray, limit) => {
        console.log('getting recommendations...')

        let seedTracks = tracksArray.map(a => a.track.id) 
    
        const emotion = document.querySelector('#hiddenemotion').value;
        let minValence = 0;
        let maxValence = 1;


        if (emotion < .33){
            maxValence = .33;
        }
        else if (emotion > .66){
            minValence = .66;
        }
        else{
            minValence = .3;
            maxValence = .7;
        }

        let payload = new URLSearchParams({
            'min_popularity': '70',
            'limit': `${limit}`,
            'seed_tracks': `${seedTracks}`,
            'min_valence': `${minValence}`,
            'max_valence': `${maxValence}`,
        })
  
        const result = await fetch
        (`https://api.spotify.com/v1/recommendations?` + payload.toString(), {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
   
        const data = await result.json();
        return data.tracks[0];
    }

    return {
        getToken() {
            return _getToken();
        },
        getTracks(token, tracksEndPoint, limit) {
            return _getTracks(token, tracksEndPoint, limit);
        },
        getRecommendations(token, trackEndPoint, limit){
            return _getRecommendations(token, trackEndPoint, limit);
        }
    }
})();


// UI Module
const UIController = (function() {

    //object to hold references to html selectors
    const DOMElements = {
        buttonSubmit: '#songbutton',
        divSongDetail: '#song-detail',
        hfToken: '#hidden_token'
    }

    //public methods
    return {

        //method to get input fields
        inputField() {
            return {
                submit: document.querySelector(DOMElements.buttonSubmit),
                songDetail: document.querySelector(DOMElements.divSongDetail)
            }
        },
     
        // need method to create the song detail
        createTrackDetail(img, title, artist) {
            const detailDiv = document.querySelector(DOMElements.divSongDetail)

            // any time user clicks a new song, we need to clear out the song detail div
            detailDiv.innerHTML = '';

            const html = 
            `
            <div class="songdisplay">
                <img src="${img}" alt="">        
            </div>
            <div class="songdisplay">
                <label for="Genre" class="form-label col-sm-12">${title}</label>
            </div>
            <div class="display">
                <label for="artist" class="form-label col-sm-12">By: ${artist}</label>
            </div> 
            `;

            detailDiv.insertAdjacentHTML('beforeend', html)
        }

    }

})();

const APPController = (function(UICtrl, APICtrl) {

    // get input field object ref
    const DOMInputs = UICtrl.inputField();

    // create submit button click event listener
    DOMInputs.submit.addEventListener('click', async (e) => {
        // prevent page reset
        e.preventDefault();
        
        //get the token
        const token = await APICtrl.getToken(); 
           
        // set the track endpoint
        const tracksEndpoint = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks"
        
        // get the list of tracks
        const tracks = await APICtrl.getTracks(token, tracksEndpoint, 5);

        const recommendedTrack = await APICtrl.getRecommendations(token, tracks, 1);
        UICtrl.createTrackDetail(recommendedTrack.album.images[2].url, 
            recommendedTrack.name, recommendedTrack.artists[0].name);
    });

})(UIController, APIController);








