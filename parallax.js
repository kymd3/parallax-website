//right side menu
(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; 
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });

  //smooth scroll
  $(function () {
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - 200;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      {
        $nav.removeClass(open);
      }
      return false;
    });
  });

  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

//ScrollMagic controller作成
var controller = new ScrollMagic.Controller();

//left side menu
new ScrollMagic.Scene({
  triggerElement: "#classtoggle1",
  duration: 800,
})
  .setClassToggle("#high1", "active")
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#classtoggle2",
  duration: 800,
})
  .setClassToggle("#high2", "active")
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#classtoggle3",
  duration: 800,
})
  .setClassToggle("#high3", "active")
  .addTo(controller);

//Titles
$(".effect-fade").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $(".effect-fade").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 100) {
      $(this).addClass("fadeInDown");
    }
  });
});

//Subtitle1
new ScrollMagic.Scene({
  triggerElement: "#scroll-trriger",
  triggerHook: 0.9,
  duration: 400,
  offset: 50,
})
  .setClassToggle("#effect1", "visible")
  .addTo(controller);

//Subtitle2
new ScrollMagic.Scene({
  triggerElement: "#fadetrigger",
  duration: 100,
})
  .setTween("#effect2", { scale: 1.5 })
  .addTo(controller);

//Subtitle3
var tween = new TimelineMax()
  .from("#effect3", 1.5, { rotationY: 100, scale: 0.7, opacity: 0 })
  .to("#effect3", 1.5, { rotationY: 100, scale: 0.7, opacity: 0, delay: 7 });

new ScrollMagic.Scene({
  triggerElement: "#effect3",
  triggerHook: "onEnter",
  duration: "60%",
  offset: 50,
})
  .setTween(tween)
  .addTo(controller);

//「SCROLL」
new ScrollMagic.Scene({ triggerElement: "#scrolltrriger" })
  .setVelocity("#scroll-navi", { opacity: 0 }, { duration: 100 })
  .addTo(controller);
