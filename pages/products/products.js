document.addEventListener("DOMContentLoaded", function () {
  var modalElems = document.querySelectorAll(".modal");
  var modalInstances = M.Modal.init(modalElems, {
    onOpenEnd: bindThumbnailClicks,
  });
});

/* function changeImage(newSrc) {
  document.getElementById("main-product-image").src = newSrc;
} */

function bindThumbnailClicks() {
  const thumbnails = [...document.querySelectorAll(".thumb")];
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      document.getElementById("main-product-image").src = thumbnail.src;
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });

  var tabsElems = document.querySelectorAll(".tabs");
  var tabsInstances = M.Tabs.init(tabsElems);
}

/* document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  $(".dropdown-trigger").dropdown();
}); */
