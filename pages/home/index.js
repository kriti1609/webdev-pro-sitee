(function () {
  const tabElements = document.querySelectorAll(".tabs");
  tabElements.forEach((tabElement) => {
    const instance = M.Tabs.init(tabElement, {});
  });

  const sidenav = document.querySelector(".sidenav");
  const instances = M.Sidenav.init(sidenav, {
    edge: "right",
  });

  const elems = document.querySelectorAll(".carousel");
  const carouselInstances = M.Carousel.init(elems, {
    
  });
  const productCarousel = carouselInstances.find((e) =>
    e.el.classList.contains("pro duct-carousel")
  );
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  prevButton.addEventListener("click", () => productCarousel.prev());
  nextButton.addEventListener("click", () => productCarousel.next());

})();
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      pagination:true,
      navigation:false,
      navigationText:["",""],
      slideSpeed:1000,
      singleItem:true,
      autoPlay:true
  });
});

