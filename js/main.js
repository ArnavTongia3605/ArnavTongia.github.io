(function () {

  var NAV_HEIGHT = 70;

  // ----- Loader -----
  function initLoader() {
    var loader = document.getElementById("loader");
    var body = document.body;
    if (!loader || !body) return;

    body.classList.add("loading");

    function hideLoader() {
      body.classList.remove("loading");
      body.classList.add("loaded");
    }

    if (document.readyState === "complete") {
      setTimeout(hideLoader, 60);
    } else {
      window.addEventListener("load", function () {
        setTimeout(hideLoader, 60);
      });
    }
  }

  // ----- Header scroll -----
  function initHeaderScroll() {
    var header = document.querySelector(".header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > NAV_HEIGHT * 0.5) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ----- Mobile nav toggle -----
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var navList = document.querySelector(".nav-list");
    if (!toggle || !navList) return;

    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ----- Smooth scroll for anchor links -----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (href === "#" || !href) return;

      anchor.addEventListener("click", function (e) {
        var id = href.slice(1);
        var target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  // ----- Scroll reveal -----
  function initReveal() {
    var sections = document.querySelectorAll(".section, .hero-desc, .btn");
    if (!sections.length) return;

    sections.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.1
      }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // ----- Run on DOM ready -----
  function init() {
    initLoader();
    initHeaderScroll();
    initNavToggle();
    initSmoothScroll();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
