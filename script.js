const CLIENT_ID = '349911634958-o9uai4bcnrr7b8s0bb31hhs0ki7ca2ee.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC2igx3OKvYRl2855iat7eMlyr9VfZDwCo';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';

let imageIndex = 0;
let images = [];

function atualizarImagem() {
  // Autenticação e obtenção do token de acesso
  gapi.load('client:auth2', function () {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    }).then(function () {
      return gapi.auth2.getAuthInstance().signIn();
    }).then(function () {
      const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
      
      // Obtenção da lista de arquivos de imagem do Google Drive
      fetch(`https://www.googleapis.com/drive/v3/files?q=mimeType%3D%27image%2Fjpeg%27%20or%20mimeType%3D%27image%2Fpng%27&fields=files(id%2Cname%2CwebContentLink)&orderBy=createdTime%20desc&key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        images = data.files;
        imageIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[imageIndex].webContentLink;
        const imageElement = document.getElementById('image');
        imageElement.src = imageUrl;
        imageElement.alt = images[imageIndex].name;
      });
    });
  });
}
