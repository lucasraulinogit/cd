const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;

function get_data() {
  $.get(url, function (data) {
    const events = data.events;
    const random = events[Math.floor(Math.random() * events.length)];
    $("#info").html(random.text);
    $("#year").html(random.year);
    if (random.year >= 2020) {
      $("#box").attr("style", "font-family: 'Inter', sans-serif");
    } else if (random.year >= 2010) {
      $("#box").attr("style", "font-family: 'Montserrat', sans-serif");
    } else if (random.year >= 2000) {
      $("#box").attr("style", "font-family: 'Orbitron', sans-serif");
    } else if (random.year >= 1990) {
      $("#box").attr("style", "font-family: 'VT323', sans-serif");
    } else if (random.year >= 1980) {
      $("#box").attr("style", "font-family: 'Press Start 2P', sans-serif");
    } else if (random.year >= 1970) {
      $("#box").attr("style", "font-family: 'Bungee Shade', sans-serif");
    } else {
      $("#box").attr("style", "font-family: 'Monoton', sans-serif");
    }
  });
}

function myFunction(x) {
  if (x.matches) {
    $("#cd").hide();
    $("#year").hide();
    $("#info").hide();
  } else {
    get_data();

    setInterval(() => {
      get_data();
    }, 5000);

    $("#gif").on("click", function () {
      window.open(
        "https://archive.org/details/in.ernet.dli.2015.458601/mode/2up",
        "_blank",
      );
    });
  }
}

var x = window.matchMedia("(max-width: 1270px)");

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});
