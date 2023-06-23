(function($){
    
new WOW().init();

}(jQuery))

// lightGallery(document.getElementById('lightgallery');


// console.log(document.getElementsByClassName("ready"));

// function print_rating(star_rating,name1){
//     console.log(star_rating);

//     for(let i=1; i<=star_rating;i++){
//         var fill_color = document.querySelector(`#stars span:nth-child(${i})`);
//         fill_color.style.color="yellow";
//         console.log(`${fill_color} id hai ${i}` );

//     }
//     console.log(name1);
// }



//     var text=document.querySelector('#views-exposed-form-our-menu-block-1').id
//     if(text.includes("world"))
//     function hello(){
//     document.querySelector('#edit-field-category-target-id ul li:nth-child(1) a').innerHTML="All";
//     }

// console.log(child1);



// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


jQuery(window).scroll(function() {
    var windscroll = jQuery(window).scrollTop();
    /*
    Since an average page height is not more than 720px so if windscroll >= 360 then let div appear.
    */
    if (windscroll >= 360) {
     
    jQuery('#header').css('background-color','rgba(0,0,0,0.3)');
    
    } else {
    
    jQuery('#header').css('background-color','transeparent');
    }
 
})

let mybutton = document.getElementById("myBtn");
let nav=document.getElementsByClassName('region-header')[0];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  
  } else {
    mybutton.style.display = "none";
    
  }
  if(document.documentElement.scrollTop> 900){
    nav.style.background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)";
  }
  else{
    nav.style.background="transparent";
  }
  document.querySelector('#views-exposed-form-our-menu-block-1 ul li:nth-child(1) a').innerHTML="All"; 
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// adding a menu img



var menu_img = document.createElement("img");
menu_img.src = "https://pngset.com/images/navigation-drawer-icon-logo-symbol-text-pill-transparent-png-1105201.png";
menu_img.setAttribute("style", "position:absolute; top:10px;left:140px; width:40px; height:40px; border-radius:50%");

var div = document.getElementById("block-bookatable-2");
div.appendChild(menu_img);
div.setAttribute("style", "text-align:center");




var col_menu=document.querySelector("#block-bookatable-2 img");
col_menu.addEventListener("click", menuClick);





function menuClick() {
  var menu=document.querySelector("#block-mainnavigation");
  
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

}