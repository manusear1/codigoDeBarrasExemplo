window.onload = function(){
      document.querySelector("#scan").addEventListener('click', function(){

        cordova.plugins.barcodeScanner.scan(
      function (result) {
         if(result.text == '280720550'){
             document.querySelector('#foto').src = "imagem1.jpg";

            document.querySelector("#dados") .innerHTML = "<h1> Nome do produto:</h1><h3>IPad Mini WI-FI 64GB - Cinza Espacial </h3><h2> Valor: R$ 3.499,00<br> Descrição:</h2> Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 Integrado<br> Sistema operacional IOS<br> Tamanho de tela 7.9<br> Tecnologia WI-FI<br> Resolução da câmera - Câmera traseira: 8MP - Câmera frontal: 7MP <br> GPS:Sim<br> Grava vídeos:Sim<br> Câmera traseira:Sim<br> Cãmera frontal:Sim<br> Memória Flash: 64GB<br> Funciona como celular:Não";
         
         }else if (result.text == '989895555'){
            document.querySelector('#dados') .src = "imagem2.jpg";
           document.querySelector('#dados') .innerHTML = "<h1> Nome do produto: </h1><h3> Samsung Galaxy J8 Dual Chip 4g 64GV Tela 6</h3><h2> Valor: R$1.888,00<br> Descição:</h2>Velocidade do Processador: 1.8GHz<br> Tipo de Processador:Octa Core<br> Tamnho(tela principal): 1480 x 720 (HD+)<br> Cãmera Resolução - Cãmera Traseira: 16.0 MP + 5.0 MP<br> Memória RAM(GB): 4 GB<br> Memória Total Interna(GB) - 64GB<br>Memória Disponível(GB) - 50.6 GB";

         } else if(result.text == '85236987'){
             document.querySelector('#dados') .src = "imagem3.jpg";
             document.querySelector('#dados') .innerHTML = "<h1>Nome do produto</h1><h3> Motorola One XT1941 Branco 64GB</h3><h2>Valor: ...<br> Sistema Operacional Android 8.1 Oreo</h2><br>Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz<br> RAM 4GB<br> Tecnologia G5M, 3g E 4G<br> Memória Interna 64GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados<br>Cor Branco<br>Características Gerais:<br>- Tela Max Vision e design ao máximo<br>-Cãmera dupla e armazenamento ilimitado<br>-Android One: primeiro do Brasil, atualizado e seguro<br>-Carregameto ultrarrápido TurboPower<br>-Últimas inovações do Google incorporadas<br>-Leitor Biométrico(Impressão Digital)";

         } else if (result.text == '85369877444'){
             document.querySelector('#dados') .src = "imagem4.jpg";
             document.querySelector('#dados') .innerHTML = "<h1> Produto: Asus Zenfone Max Pro M1</h1><h3> Valor: R$1.199,00</h3><h2>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache<br> Sistema Operacional: Android 8.1 Oreo</h2><br> Memória RAM: 4GB <br> Memória Interna: 64GB<br> Memória Expansiva: 2TB Sd<br> Tela:6,0 Led Baclight Ips panel(1080x2160)<br> Tipo de Chip: Nano - Dual Chip: Sim<br> Conectividade:3G, 4G, WI-FI<br> Câmera Frontal: 8MP<br> Câmera Traseira: 16-5MP ";

         } else { 
             document.querySelector('#dados').innerHTML = "<h1>Produto não encontrado</h1>"
      }
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  
      });
}