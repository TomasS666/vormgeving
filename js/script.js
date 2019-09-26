window.onload = function(){

/*
   Hieronder de Download microinteractie, helemaal zelf gemaakt alleen info over de setup om te kunnen tekenen op de canvas
   en hoe je een circel geraadpleegd op https://www.w3schools.com/tags/canvas_arc.asp
*/



//
//    var downloadButton = document.querySelector(".download");
//    downloadButton.addEventListener("click", startDownload);
//
//    var timesClicked = 0;
//    var counter = 0,
//    counterDisplay = document.querySelector(".counter");
//    counterDisplay.textContent = "Download";
//
//    function startDownload(){
//       console.log("startDownload");
//
//       counterDisplay.textContent = "Download";
//
//       timesClicked++;
//
//       function circleUp(){
//
//             if(counter < 100){
//                counter++;
//                counterDisplay.textContent = counter + "%";
//             }
//
//             if (counter == 100){
//                downloadButton.classList.add("active");
//                counterDisplay.textContent = "Verwijder";
//                clearInterval(intervalID);
//             }
//          }
//       }
//
//       if(timesClicked % 2 == 0){
//          console.log("haha");
//          clearInterval(intervalID);
//          counter = 0;
//          counterDisplay.textContent = "Download";
//          downloadButton.classList.remove("active");
//       }
//
//       else{
//          var intervalID = setInterval(circleUp, 200);
//       }
//
// };
//
//










   var button = document.querySelector(".download");
   var downloadButton = document.querySelector("canvas");
   downloadButton.addEventListener("click", startDownload);

   var timesClicked = 0;
   var counter = 0,
   counterDisplay = document.querySelector(".counter");
   counterDisplay.textContent = "Download";

   function startDownload(){

      var c = document.getElementById("myCanvas"),
      ctx = c.getContext("2d");
      var progress = -.5;

      counterDisplay.textContent = "Download";

      timesClicked++;
      console.log(timesClicked);


      function circleUp(){
         if(progress < 1.5 ){

            if(counter < 100){
               counter++;
               counterDisplay.textContent = counter + "%";
            }

            if (counter == 100){
               button.classList.add("active");
               counterDisplay.textContent = "Verwijder";
               clearInterval(intervalID);
            }

            progress += (2 / 100);

            ctx.beginPath();
            ctx.strokeStyle = "#00D66B";
            ctx.lineWidth = 3;
            ctx.arc(30, 31, 25, -.5 * Math.PI, progress * Math.PI);
            ctx.stroke();
            console.log(progress);
         }
      }

      if(timesClicked % 2 == 0){
         clearInterval(intervalID);
         console.log("off " + progress);
         counter = 0;
         ctx.clearRect(0, 0, c.width, c.height);
         counterDisplay.textContent = "Download";
         button.classList.remove("active");
      }

      else{
         console.log("on");
         var intervalID = setInterval(circleUp, 20);
      }
   }


   if(document.querySelector("button.download")){
      var buttons = document.querySelectorAll("button.download");
      var modal = document.querySelector("div.modal-background");
      var dialog = document.querySelector("dialog");
      var closeBtn = document.querySelector('button[data-button-type="close"]');

      buttons.forEach((e)=>{
         e.addEventListener("click", (event)=>{
            modal.classList.add("active");
            dialog.show();
         })
      });

      closeBtn.addEventListener("click", ()=>{
         modal.classList.remove("active");
         dialog.close();
      })
   }






};
