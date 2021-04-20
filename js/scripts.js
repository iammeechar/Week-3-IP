$(document).ready(function () {
    $(".img1").click(function () {
      $(".img1").toggle(function () {
        $(".para1", ).show(function () {
          $("#h3a").css('font-weight', 'bold');
        });
      });
    });
  
    $(".img2").click(function () {
      $(".img2").toggle(function () {
        $(".para2").show(function () {
          $("#h3b").css('font-weight', 'bold');
        });
      });
    });
  
    $(".img3").click(function () {
      $(".img3").toggle(function () {
        $(".para3").show(function () {
          $("#h3c").css('font-weight', 'bold');
        });
      });
    });
  
    $(".para1").click(function () {
      $(".para1").toggle(function () {
        $(".img1").show(function () {
          $("#h3a").css('font-weight', 'normal');
        });
      });
    });
  
    $(".para2").click(function () {
      $(".para2").toggle(function () {
        $(".img2").show(function () {
          $("#h3b").css('font-weight', 'normal');
        });
      });
    });
  
    $(".para3").click(function () {
      $(".para3").toggle(function () {
        $(".img3").show(function () {
          $("#h3c").css('font-weight', 'normal');
        });
      });
    });
    $("#contact").submit(function (e) {

        var user = document.getElementById("name").value;
        alert(user + " your message has been recieved successfully and thanks for keeping in touch");
    
      });
});    