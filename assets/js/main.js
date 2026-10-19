(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  // "auto" follows the OS setting; "light"/"dark" override it.
  var MODES = ["auto", "light", "dark"];
  var ICONS = {
    auto: "fa-circle-half-stroke",
    light: "fa-sun",
    dark: "fa-moon"
  };

  function stored() {
    try {
      var v = localStorage.getItem("theme");
      return MODES.indexOf(v) === -1 ? "auto" : v;
    } catch (e) {
      return "auto";
    }
  }

  function apply(mode) {
    if (mode === "auto") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", mode);
    }
    if (toggle) {
      var icon = toggle.querySelector("i");
      if (icon) icon.className = "fa-solid " + ICONS[mode];
      toggle.title = "Theme: " + mode;
      toggle.setAttribute("aria-label", "Theme: " + mode + ". Click to change.");
    }
  }

  apply(stored());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = MODES[(MODES.indexOf(stored()) + 1) % MODES.length];
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      apply(next);
    });
  }

  // Publication tag filter
  var filters = document.getElementById("pub-filters");
  var pubs = document.querySelectorAll("#pub-list .pub");
  var empty = document.getElementById("pub-empty");

  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;

      filters.querySelectorAll(".filter").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });

      var tag = btn.dataset.tag;
      var shown = 0;
      pubs.forEach(function (pub) {
        var tags = (pub.dataset.tags || "").split(/\s+/);
        var match = tag === "*" || tags.indexOf(tag) !== -1;
        pub.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
