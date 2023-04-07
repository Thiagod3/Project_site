function atualizarImagem() {
    // Solicita a lista de imagens no Google Drive
    fetch('https://www.googleapis.com/drive/v3/files?q=mimeType%3D%27image%2Fjpeg%27%20or%20mimeType%3D%27image%2Fpng%27&fields=files(id%2Cname%2CwebContentLink)&orderBy=createdTime%20desc&key=AIzaSyC2igx3OKvYRl2855iat7eMlyr9VfZDwCo')
      .then(response => response.json())
      .then(data => {
        // Seleciona uma imagem aleatória da lista
        const randomImage = data.files[Math.floor(Math.random() * data.files.length)];
        
        // Define a URL da imagem selecionada no elemento <img> da página HTML
        const imageElement = document.getElementById('random-image');
        imageElement.src = randomImage.webContentLink;
      });
  }