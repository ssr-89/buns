"use strict"
document.addEventListener("DOMContentLoaded", function () {
  // accordion
  // const accordOther = document.getElementById("accord");
  // accordOther.addEventListener("click", change);
  const accordions = document.querySelectorAll(".accord");
  accordions.forEach((e) => {
    e.addEventListener("click", change);

    function change(event) {
      const targ = event.target;
      if (targ.tagName !== "H3") return;
      if (targ.classList.contains("select-spoller")) {
        hideAll();
      } else {
        hideAll();
        targ.classList.add("select-spoller");
        showText(targ.nextElementSibling);
      }
    }
    function hideAll() {
      const accordTitle = e.querySelectorAll(".accord__title");
      const accordContent = e.querySelectorAll(".accord-content");
      for (let i = 0; i < accordTitle.length; i++) {
        accordTitle[i].classList.remove("select-spoller");
      }
      for (let i = 0; i < accordContent.length; i++) {
        accordContent[i].style.height = "0";
      }
    }
    function showText(textEl) {
      textEl.style.height = textEl.scrollHeight + "px";
    }
  });


  /* burger */
  const headerNav = document.getElementById("header-nav");
  const headerBurger = document.getElementById("header-burger");
  // const headerNavLinks = document.querySelectorAll(".header-menu__link");

  function openHeaderMenu() {
    if (headerBurger.classList.contains("open-menu")) {
      headerNav.classList.add("open-menu");
    } else {
      headerNav.classList.remove("open-menu");
    }
    // headerNavLinks.forEach(function (el) {
    //   el.addEventListener("click", function () {
    //     headerBurger.classList.remove("open-menu");
    //     headerNav.classList.remove("open-menu");
    //   });
    // });
    document.addEventListener("click", (element) => {
      if (!element.target.closest(".header-burger, .header-menu")) {
        headerBurger.classList.remove("open-menu");
        headerNav.classList.remove("open-menu");
      }
    });
    headerBurger.addEventListener("click", () => {
      headerBurger.classList.toggle("open-menu");
      headerNav.classList.toggle("open-menu");
    });
  }
  openHeaderMenu();

  /*  */
  const anchors = document.querySelectorAll('.js-scroll-link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };
});
