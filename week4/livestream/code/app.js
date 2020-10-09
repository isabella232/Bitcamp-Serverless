const APIController = (function() {
    const clientId = "";
    const clientSecret = "";

    //private methods

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: 'grant_type=client_credentials',
            headers: {
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const data = await result.json();
        return data.access_token;
    }

    const _getNewReleases = async (token, limit) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.albums.items;
    }

    const _getAlbumTracks = async (token, albumId, limit) => {
        const result = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

    return {
        getToken() {
            return _getToken();
        },
        getNewReleases(token, limit) {
            return _getNewReleases(token, limit);
        },
        getAlbumTracks(token, albumId, limit) {
            return _getAlbumTracks(token, albumId, limit);
        }
    }
})();

const UIController = (function() {
    const DOMElements = {
        albumList: '#album-list',
        songList: '#song-list',
    }

    return {
        inputField: {
            albums: document.querySelector(DOMElements.albumList),
            songs: document.querySelector(DOMElements.songList)
        },

        createAlbumDetail(album) {
            const detailDiv = document.querySelector(DOMElements.albumList)
    
            const html = 
            `
            <div id=${album.id} class="album-detail">
                <img src="${album.images[2].url}" alt="">              
                ${album.name}
                <br />
                ${album.artists[0].name}
                
            </div> 
            
            `;

            detailDiv.insertAdjacentHTML('beforeend', html)
            detailDiv.insertAdjacentHTML('beforeend', '<br />')
        },

        createTrackDetail(track){
            const detailDiv = document.querySelector(DOMElements.songList)
    
            const html = 
            `
            <div data-id=${track.id} class="song-detail">           
                ${track.name}
         
            </div> 
            
            `;

            detailDiv.insertAdjacentHTML('beforeend', html)
        },

        clearTrackDetail(){
            document.querySelector(DOMElements.songList).innerHTML = '';
        }
    }
})();

//album.images[2].url, album.name, album.artists[0].name
const APPController = (function(APICtrl, UICtrl) {
    const DOMInputs = UICtrl.inputField;

    const loadNewReleases = async () =>  {
        const token = await APICtrl.getToken();
        const albums = await APICtrl.getNewReleases(token, 10);
        albums.forEach(album => UICtrl.createAlbumDetail(album))
    }

        // create song selection click event listener
    DOMInputs.albums.addEventListener('click', async (e) => {
        // prevent page reset
        e.preventDefault();
        UICtrl.clearTrackDetail();
        const token = await APICtrl.getToken();

        // get the album id
        const id = e.target.id;

        const tracks = await APICtrl.getAlbumTracks(token, id, 10);
        tracks.forEach(track => UICtrl.createTrackDetail(track))

    }); 

    return {
        init() {
            console.log('starting...')
            loadNewReleases();
        }
    }

})(APIController, UIController);

APPController.init();