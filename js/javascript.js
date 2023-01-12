//mobile menubar opening and closing
const closeMenu = document.querySelector(".main-menubar .menu-close-btn"),
  mobileMenu = document.querySelector(".main-menubar");
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hide");
});
const openMenu = document.querySelector(".main-navbar .menu-bar-btn");
openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hide");
});

//mobile menu dropdown
function dropDown(dropBar) {
  let subMenu = document.querySelector(`${dropBar}`).nextElementSibling,
    dropdownIcon = document.querySelectorAll(`${dropBar} .dropdown-btn i`);

  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
    dropdownIcon[1].classList.remove("hide");
    dropdownIcon[0].classList.add("hide");
    let dexScendaryMenu = document.querySelectorAll(".scendary-menu");
    if (dropBar == ".articles") {
      dexScendaryMenu[0].style.left = "110px";
    } else if (dropBar == ".publications") {
      dexScendaryMenu[1].style.left = "240px";
    } else if (dropBar == ".activites") {
      dexScendaryMenu[2].style.left = "370px";
    }
  } else {
    subMenu.classList.add("hide");
    dropdownIcon[0].classList.remove("hide");
    dropdownIcon[1].classList.add("hide");
  }

  //if click ones menu then automatic close all others menu
  function closeDropMenu(dropBar2) {
    let allSiblings = document.querySelector(`${dropBar2}`).parentElement
      .children;
    var siblingsMenu = [];
    for (let i = 0; i < allSiblings.length; i++) {
      if (
        allSiblings[i].classList.contains("have-drop") &&
        !allSiblings[i].classList.contains(`${dropBar2.slice(1)}`)
      ) {
        siblingsMenu.push(`.${allSiblings[i].classList[0]}`);
      }
    }
    console.log("siblings menu", siblingsMenu);

    siblingsMenu.forEach((element) => {
      dropBar2 = `${element}`;
      let subMenu = document.querySelector(`${dropBar2}`).nextElementSibling,
        dropdownIcon = document.querySelectorAll(`${dropBar2} .dropdown-btn i`);
      subMenu.classList.add("hide");
      dropdownIcon[0].classList.remove("hide");
      dropdownIcon[1].classList.add("hide");
    });
  }
  closeDropMenu(dropBar);
}

//end mobile menu section
