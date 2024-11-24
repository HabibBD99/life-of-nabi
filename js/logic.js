 /*-------------------------------
       Loader Animation Works
 -----------_--------------------*/ 
var Time = setTimeout(function MyLoad(){
var Show = document.getElementById("showDiv").style.display="block";
var Hide = document.getElementById("myLoader").style.display="none";

 },1000);
 

 function NabiListItems(){
  var Adam = document.querySelector(".Adam");
      Adam.style.display="block";
  
  var MainCard = document.querySelector(".Main_Card");
      MainCard.style.display="none";
      
  var HeaderStatus = document.querySelector(".Header_Status");  
      HeaderStatus.style.display="none";
      
 }


 /*-------------------------------
       Back Button Works
 -----------_--------------------*/
function BackButton(){  
 var MainCard = document.querySelector(".Main_Card");
     MainCard.style.display="block";
 
 var HeaderStatus = document.querySelector(".Header_Status");  
     HeaderStatus.style.display="block";
 
     var backButton = document.querySelectorAll(".Subject_Of_Nabi").length;     
     for(var j=0; j<backButton; j++){
     var NabiSubject = document.querySelectorAll(".Subject_Of_Nabi")[j];
         NabiSubject.style.display="none";
     
   }
     
}
  
  /*-------------------------------
      Details Back Button Works
   -----------_--------------------*/
   function AdamDetailsButton(){    
     var Adam = document.querySelector(".Adam");
         Adam.style.display="block";
     
    
     var MainCard = document.querySelector(".Main_Card");
         MainCard.style.display="none";
     
     var HeaderStatus = document.querySelector(".Header_Status");  
         HeaderStatus.style.display="none";
          
     var DetailsBtn = document.querySelectorAll(".Details_Of_Nabi").length;     
          for(var i=0; i<DetailsBtn; i++){     
              var DetailsNabi = document.querySelectorAll(".Details_Of_Nabi")[i];
                  DetailsNabi.style.display="none";
              
          }
          
     } 