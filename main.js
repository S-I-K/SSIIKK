$(() => {
  /* header fix */
  $(".gnb").scrollToGiveClass({
    baseline: 90,
    class: "fixed",
  });
  /* slide scroll event */
  $(".banner").bxSlider({
    auto: "true",
    controls: false,
    pause: 3000,
  });
  /* season item event */
  $(".season-title-wrap").scrollToGiveClass({
    baseline: "bottom",
  });
  $(".content").scrollToGiveClass({
    baseline: "bottom",
  });
  $(".season-item").scrollToGiveClass({
    baseline: "bottom",
  });
  /* product item scroll event */
  $(".product-wrap .title-wrap").scrollToGiveClass({
    baseline: "bottom",
  });
  $(".product-wrap label").scrollToGiveClass({
    baseline: "bottom",
  });
  $(".product-wrap .content-wrap .item-box").scrollToGiveClass({
    baseline: "bottom",
  });
});
