const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const menu_item = document.querySelectorAll(".menu-item");

burger.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("items-end");
    menu.classList.add("justify-end");
    menu.classList.add("flex");
    menu.classList.add("flex-col");
  } else {
    menu.classList.add("hidden");
  }
});


// var len_items = menu_item.length

// for(var i=0; i < len_items; i++){
//     menu_item[i].addEventListener('click', function(){
//         console.log(menu_item)
//         is_active = menu_item[i].classList.add("active");
//         if (menu_item[i].classList.contains("active")) {
//           menu_item[i].classList.add("border-r-4");
//           menu_item[i].classList.add("border-primary");
//         } else {
//           menu_item[i].classList.remove("border-r-4");
//           menu_item[i].classList.remove("border-primary");
//         }
//     })
// }

$("#menu li a").click(function () {
  $(this)
    .closest("li")
    .addClass("border-r-4")
    .addClass("border-primary")
    .siblings()
    .removeClass("border-primary")
    .removeClass("border-r-4");
  return false; // no default behavior from clicking on the link
});

// menu_item.addEventListener("click", function () {
//     is_active = menu_item.classList.add("active");
//     if(menu_item.classList.contains('active')){
//         menu_item.classList.add("border-r-4");
//         menu_item.classList.add("border-primary");
//     }else{
//         menu_item.classList.remove("border-r-4");
//         menu_item.classList.remove("border-primary");
//     }
  
// });
