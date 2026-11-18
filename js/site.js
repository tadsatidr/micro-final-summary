(function () {
  var pages = [
    ["index.html", "Overview", "ภาพรวม"],
    ["ch10.html", "10 Monopoly", "10 ผูกขาด"],
    ["ch11.html", "11 Pricing", "11 การตั้งราคา"],
    ["ch12.html", "12 Oligopoly", "12 ผู้ขายน้อยราย"],
    ["ch13.html", "13 Games", "13 ทฤษฎีเกม"],
    ["ch14.html", "14 Factors", "14 ปัจจัยการผลิต"],
    ["ch16.html", "16 Equilibrium", "16 ดุลยภาพทั่วไป"],
    ["ch17.html", "17 Information", "17 ข้อมูลอสมมาตร"],
    ["ch18.html", "18 Externalities", "18 ผลกระทบภายนอก"],
    ["formulas.html", "Formula sheet", "สูตรรวม"],
    ["exam.html", "2025 Exam", "ข้อสอบ 2025"]
  ];

  function currentLang() {
    return document.documentElement.getAttribute("data-lang") === "th" ? "th" : "en";
  }

  function apply(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang === "th" ? "th" : "en";
    try { localStorage.setItem("micro-lang", lang); } catch (e) {}
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-set-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
  }

  function buildNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var here = (location.pathname.split("/").pop() || "index.html");
    nav.innerHTML = pages.map(function (p) {
      var current = here === p[0];
      return '<a href="' + p[0] + '"' + (current ? ' class="is-current" aria-current="page"' : "") +
        '><span class="en">' + p[1] + '</span><span class="th">' + p[2] + "</span></a>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildNav();
    apply(currentLang());
    if (new URLSearchParams(location.search).has("lang")) {
      history.replaceState(null, "", location.pathname + location.hash);
    }
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-set-lang"));
      });
    });
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  });
})();
