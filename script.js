var time = 500;
var timeout = 2500;
var button_active = $(".buttons_valut_active");
var gif_slide;
var i = 0;
var $newdiv_text__01__type = $("<div id='text__01__type'></div>");
var $newdiv_text__02__type = $("<div id='text__02__type'></div>");
var $newdiv_text__01__string = $(
  "<div id='text__01__string'><p>Цена приближается<br />к линии поддержки</p></div>"
);
var $newdiv_text__02__string = $(
  "<div id='text__02__string'><p><br><br>Выгодное время<br>купить актив</p></div>"
);
var typed__text__01;
var typed__text__02;

function display_none(a) {
  $(a).css({ display: "none" });
}
function display_block(a) {
  $(a).css({ display: "block" });
}

function transition_slide_2() {
  display_none("#slide_01_block_top");
  display_none("#slide_01_block_bot");
  display_block("#slide_02");

  $("#slide_02").animate(
    {
      opacity: 1,
      top: "20%"
    },
    time
  );

  setTimeout(function() {
    display_block("#pop-up");
    $("#pop-up").animate({ opacity: 1 }, time);

    display_block("#text__01");
    typed__text__01 = new Typed("#text__01__type", {
      stringsElement: "#text__01__string",
      typeSpeed: 30,
      showCursor: false,
      onComplete: function() {
        setTimeout(function() {
          display_block("#text__02");

          typed__text__02 = new Typed("#text__02__type", {
            stringsElement: "#text__02__string",
            typeSpeed: 30,
            showCursor: false,
            onComplete: function() {
              display_block("#button__buy");
              display_block("#button__sell");
              setTimeout(function() {
                $("#button__buy").animate({ opacity: 1 }, time);
              }, 0);
              setTimeout(function() {
                $("#button__sell").animate({ opacity: 1 }, time);
              }, 250);
            }
          });
        }, time);
      }
    });
  }, timeout);
}

function transition_slide_4() {
  display_block("#slide_04_container");
  $("#slide_04_container").animate({ opacity: 1 }, { 
    duration: time,
    complete: function(){
      display_block("#button__reset");
      $("#button__reset").animate({ opacity: 1 }, time);
    }
   });
}

function transition_slide_5() {
  display_block("#slide_05_container");

  $("#slide_05_container").animate({ opacity: 1 }, { duration: time });
  setTimeout(function() {
    $("#slide_05_container").animate({ opacity: 0 }, { duration: time });
    display_block("#slide_06_container");
    $("#slide_06_container").animate(
      { opacity: 1 },
      {
        duration: time,
        complete: function() {
          display_block("#button_demo");
          $("#button_demo").animate({ opacity: 1 }, { duration: time });
        }
      }
    );
  }, 2000);
}

button_active.click(function(event) {
  button_active.attr("class", "buttons_valut_noactive");
  $("#text__01").append($newdiv_text__01__type);
  $("#text__02").append($newdiv_text__02__type);
  $("#block_pop-up_content_top").append($newdiv_text__01__string);
  $("#block_pop-up_content_top").append($newdiv_text__02__string);

  if (i == 0) {
    var t = event.target;
    if (t.id == "button_01") {
      var b_pos = "-250px";
      var op1 = "#button_02";
      var op2 = "#button_03";
      gif_slide = "usd";
      $("#gif__1").css({
        "background-image": "url(img/GIF_768/USDRUB-DOWN.gif)"
      });
    } else if (t.id == "button_02") {
      var b_pos = "-420px";
      var op1 = "#button_01";
      var op2 = "#button_03";
      gif_slide = "bit";
      $("#gif__1").css({
        "background-image": "url(img/GIF_768/BTCUSD-DOWN.gif)"
      });
    } else if (t.id == "button_03") {
      var b_pos = "-590px";
      var op1 = "#button_01";
      var op2 = "#button_02";
      gif_slide = "spx";
      $("#gif__1").css({
        "background-image": "url(img/GIF_768/SPX500-DOWN.gif)"
      });
    } else {
    }

    $(op1)
      .add(op2)
      .add("#slide_01_block_bot, #slide_01_block_top")
      .animate({ opacity: 0 }, time / 2);

    $("#slide_01_block_top").animate(
      { top: "-40%" },
      {
        duration: time,
        queue: false,
        complete: function() {
          display_none(op1);
          display_none(op2);
          transition_slide_2();
        }
      }
    );

    button_active.animate(
      { top: "4%" },
      {
        duration: time,
        queue: false
      }
    );
  } else {
  }

  i++;
});

$(".button__2slide").click(function(event) {
  $("#slide_03").css({ top: "20%" });
  display_block("#slide_03");
  $("#pop-up").animate(
    { opacity: 0 },
    {
      duration: time,
      complete: function() {
        typed__text__01.destroy();
        typed__text__02.destroy();
        display_none("#pop-up");
      }
    }
  );

  if (gif_slide == "usd") {
    $("#gif__2").css({ "background-image": "url(img/GIF_768/USDRUB-UP.gif)" });
  } else if (gif_slide == "bit") {
    $("#gif__2").css({ "background-image": "url(img/GIF_768/BTCUSD-UP.gif)" });
  } else if (gif_slide == "spx") {
    $("#gif__2").css({ "background-image": "url(img/GIF_768/SPX500-UP.gif)" });
  } else {
  }

  $("#slide_02").animate(
    {
      opacity: 0,
      display: "none"
    },
    time
  );

  $("#slide_03").animate(
    {
      opacity: 1
    },
    time
  );

  setTimeout(function() {
    $("#slide_03").animate(
      {
        opacity: 0
      },
      time
    );
  }, timeout);

  var t = event.target;
  setTimeout(function() {
    button_active.animate(
      {
        top: "-60%",
        opacity: 0
      },
      {
        duration: time,
        complete: function() {
          display_none(button_active);
        }
      }
    );

    if (t.id == "button__buy") {
      transition_slide_5();
    } else if (t.id == "button__sell") {
      transition_slide_4();
    } else {
    }
  }, timeout);
});

$("#button__reset").click(function() {
  $("#slide_04_container").animate(
    { opacity: 0 },
    {
      duration: time,
      complete: function() {
        i = 0;
        $("#gif__1").css({ "background-image": "none" });
        $("#gif__2").css({ "background-image": "none" });
        $(".buttons_valut_noactive").attr("class", "buttons_valut_active");
        $("*").removeAttr("style");
        $("#slide_01").css({ opacity: 0 });
        $("#slide_01").animate({ opacity: 1 }, time);
      }
    }
  );
});
