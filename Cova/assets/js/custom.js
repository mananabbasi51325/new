jQuery(document).ready(function ($) {
    $(".business-hours").click(function () {
      $(".business-hours").toggleClass("open");
      $(".business-hours-list").toggleClass("active");
    });
  });