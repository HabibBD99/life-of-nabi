 /*-------------------------------------------
         Menu Slider Works
 ----------------------------------------------*/

  function MenuFunc(){
    var Slider = document.querySelector(".Slider");
        Slider.style.display="block";
        Slider.style.position="relative";  
        Slider.style.left="10px";
        Slider.style.zIndex="1";
  };
 
 
 var CloseSlider = document.getElementByTagName("body");
     CloseSlider.addEventsListener("click",function(){
 var Slider = document.querySelector(".Slider");
       if(Slider.style.left="10px"){
         Slider.style.display="none";
       
       }
 });   
      