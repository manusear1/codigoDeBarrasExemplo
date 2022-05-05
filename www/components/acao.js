window.onload = function(){
      document.querySelector("#scan").addEventListener('click', function(){

        cordova.plugins.barcodeScanner.scan(
      function (result) {
         if(result.text == '1234'){
            document.querySelector("#dados") .innerHTML = "<h1> Achou o produto </h1>";
         }else{
            document.querySelector("#dados") .innerHTML = "<h1> Produto não encontrado </h1>";
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
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  
      });
}