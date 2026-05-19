/**
 * frontend/script.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Onboarding Slider — pure Vanilla JS.
 * All image data is read from SLIDER_CONFIG defined in ../config/config.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
  "use strict";

  /* ── Read config ─────────────────────────────────────────────────────────── */
  const images            = SLIDER_CONFIG.images;
  const INTERVAL_MS       = SLIDER_CONFIG.autoplayInterval;
  const TRANSITION_MS     = SLIDER_CONFIG.transitionDuration;
  const TOTAL             = images.length;

  /* ── State ───────────────────────────────────────────────────────────────── */
  let current     = 0;
  let isHovering  = false;
  let isPlaying   = true;
  let timer       = null;
  let progressAnim = null;

  /* ── DOM refs ────────────────────────────────────────────────────────────── */
  const stage         = document.getElementById("slider-stage");
  const slidesWrapper = document.getElementById("slides-wrapper");
  const dotsWrapper   = document.getElementById("dots");
  const stepCounter   = document.getElementById("step-counter");
  const caption       = document.getElementById("caption");
  const progressFill  = document.getElementById("progress-fill");
  const pauseBadge    = document.getElementById("pause-badge");
  const btnPrev       = document.getElementById("btn-prev");
  const btnNext       = document.getElementById("btn-next");
  const toggleBtn     = document.getElementById("toggle-play");

  /* ── Build slides dynamically using loop ─────────────────────────────────── */
  images.forEach(function (imgData, idx) {
    const slide = document.createElement("div");
    slide.className = "slide" + (idx === 0 ? " active" : "");
    slide.setAttribute("role", "tabpanel");
    slide.setAttribute("aria-label", imgData.caption);

    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.caption;
    img.draggable = false;

    slide.appendChild(img);
    slidesWrapper.appendChild(slide);
  });

  /* ── Build dot indicators dynamically using loop ─────────────────────────── */
  images.forEach(function (_, idx) {
    const dot = document.createElement("button");
    dot.className = "dot" + (idx === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (idx + 1));
    dot.addEventListener("click", function () { goTo(idx); });
    dotsWrapper.appendChild(dot);
  });

  /* ── Helper: get all slide/dot elements ──────────────────────────────────── */
  function getSlides() { return slidesWrapper.querySelectorAll(".slide"); }
  function getDots()   { return dotsWrapper.querySelectorAll(".dot"); }

  /* ── Navigate to a specific slide ───────────────────────────────────────── */
  function goTo(index) {
    const slides = getSlides();
    const dots   = getDots();
    const prev   = current;

    // direction for exit animation
    const goingForward = index > prev || (prev === TOTAL - 1 && index === 0);

    // Exit current slide
    slides[prev].classList.remove("active");
    slides[prev].classList.add(goingForward ? "exit-left" : "");
    if (!goingForward) slides[prev].style.transform = "translateX(60px)";

    // Small delay so exit starts before enter
    setTimeout(function () {
      slides[prev].classList.remove("exit-left");
      slides[prev].style.transform = "";
    }, TRANSITION_MS);

    current = index;

    // Enter new slide
    slides[current].classList.add("active");
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });

    // Update counter & caption
    stepCounter.textContent =
      "Step " + (current + 1) + " of " + TOTAL;
    caption.textContent = images[current].caption;

    // Restart progress bar
    restartProgress();
  }

  function next() { goTo((current + 1) % TOTAL); }
  function prev() { goTo((current - 1 + TOTAL) % TOTAL); }

  /* ── Progress bar ────────────────────────────────────────────────────────── */
  function restartProgress() {
    if (progressAnim) clearTimeout(progressAnim);
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";

    // Force reflow
    void progressFill.offsetWidth;

    if (isPlaying && !isHovering) {
      progressFill.style.transition =
        "width " + INTERVAL_MS + "ms linear";
      progressFill.style.width = "100%";
    }
  }

  /* ── Autoplay ────────────────────────────────────────────────────────────── */
  function startAutoplay() {
    stopAutoplay();
    if (!isPlaying || isHovering) return;
    timer = setInterval(next, INTERVAL_MS);
    restartProgress();
  }

  function stopAutoplay() {
    clearInterval(timer);
    timer = null;
    // Freeze progress bar width
    const computed = getComputedStyle(progressFill).width;
    const parentW  = progressFill.parentElement.offsetWidth;
    const pct      = parentW ? (parseFloat(computed) / parentW * 100) : 0;
    progressFill.style.transition = "none";
    progressFill.style.width = pct + "%";
  }

  /* ── Hover — pause & resume ──────────────────────────────────────────────── */
  stage.addEventListener("mouseenter", function () {
    isHovering = true;
    stopAutoplay();
    if (isPlaying) pauseBadge.classList.add("visible");
  });

  stage.addEventListener("mouseleave", function () {
    isHovering = false;
    pauseBadge.classList.remove("visible");
    if (isPlaying) startAutoplay();
  });

  /* ── Button controls ─────────────────────────────────────────────────────── */
  btnPrev.addEventListener("click", function () { prev(); if (!isHovering && isPlaying) startAutoplay(); });
  btnNext.addEventListener("click", function () { next(); if (!isHovering && isPlaying) startAutoplay(); });

  /* ── Play / Pause toggle ─────────────────────────────────────────────────── */
  toggleBtn.addEventListener("click", function () {
    isPlaying = !isPlaying;
    toggleBtn.innerHTML = isPlaying
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg> Pause'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play';
    if (isPlaying) { startAutoplay(); }
    else           { stopAutoplay();  }
  });

  /* ── Keyboard navigation ─────────────────────────────────────────────────── */
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft")  { prev(); if (!isHovering && isPlaying) startAutoplay(); }
    if (e.key === "ArrowRight") { next(); if (!isHovering && isPlaying) startAutoplay(); }
    if (e.key === " ")          { toggleBtn.click(); e.preventDefault(); }
  });

  /* ── Touch / swipe support ───────────────────────────────────────────────── */
  let touchStartX = 0;
  stage.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
      if (!isHovering && isPlaying) startAutoplay();
    }
  }, { passive: true });

  /* ── Init ────────────────────────────────────────────────────────────────── */
  stepCounter.textContent = "Step 1 of " + TOTAL;
  caption.textContent     = images[0].caption;
  startAutoplay();

})();
