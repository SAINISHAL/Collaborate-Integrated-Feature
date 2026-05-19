/* ============================================================
   INTEGRATED PORTAL – script.js
   Single-page dynamic navigation, slider, tax portal
   ============================================================ */

(function () {
  "use strict";

  /* ── DOM REFS ──────────────────────────────────────────── */
  const views = {
    home: document.getElementById("view-home"),
    tutorial: document.getElementById("view-tutorial"),
    tax: document.getElementById("view-tax"),
  };

  // Navbar buttons
  const btnHome       = document.getElementById("btn-home");
  const btnTutorialNav= document.getElementById("btn-tutorial-nav");
  const btnTaxNav     = document.getElementById("btn-tax-nav");
  const btnHelp       = document.getElementById("btn-help");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks      = document.getElementById("nav-links");

  // Home CTA
  const cardTutorial    = document.getElementById("card-tutorial");
  const cardTax         = document.getElementById("card-tax");

  // Modal
  const helpModal      = document.getElementById("help-modal");
  const modalClose     = document.getElementById("modal-close");
  const modalBtnTutorial = document.getElementById("modal-btn-tutorial");
  const modalBtnTax    = document.getElementById("modal-btn-tax");

  // Tutorial
  const sliderTrack  = document.getElementById("slider-track");
  const sliderDots   = document.getElementById("slider-dots");
  const sliderPrev   = document.getElementById("slider-prev");
  const sliderNext   = document.getElementById("slider-next");
  const slideCurrent = document.getElementById("slide-current");
  const slideTotal   = document.getElementById("slide-total");
  const autoplayBtn  = document.getElementById("autoplay-btn");
  const autoplayIconPause = document.getElementById("autoplay-icon-pause");
  const autoplayIconPlay  = document.getElementById("autoplay-icon-play");
  const autoplayLabel     = document.getElementById("autoplay-label");
  const tutorialBackBtn   = document.getElementById("tutorial-back-btn");

  // Tax
  const taxNav         = document.getElementById("tax-nav");
  const taxContentInner= document.getElementById("tax-content-inner");
  const taxSearch      = document.getElementById("tax-search");
  const taxBackBtn     = document.getElementById("tax-back-btn");
  const taxMobileToggle= document.getElementById("tax-mobile-toggle");
  const taxSidebar     = document.getElementById("tax-sidebar");
  const taxSidebarBackdrop = document.getElementById("tax-sidebar-backdrop");
  const taxLayout      = document.getElementById("tax-layout");

  /* ── PORTAL INIT ───────────────────────────────────────── */
  function initPortal() {
    // Populate nav from config
    if (typeof PORTAL_CONFIG !== "undefined") {
      const navTitle = document.getElementById("nav-title");
      const navSub   = document.getElementById("nav-sub");
      const navLogo  = document.getElementById("nav-logo");
      if (navTitle) navTitle.textContent = PORTAL_CONFIG.title;
      if (navSub)   navSub.textContent   = PORTAL_CONFIG.subtitle;
      if (navLogo)  navLogo.textContent  = PORTAL_CONFIG.logo;
    }

    buildSlider();
    buildTaxSidebar(TAX_SECTIONS);
    if (TAX_SECTIONS.length) showTaxSection(TAX_SECTIONS[0].id);
    attachListeners();
    showView("home");
  }

  /* ── VIEW SWITCHING ────────────────────────────────────── */
  function showView(viewName) {
    Object.keys(views).forEach((key) => {
      const el = views[key];
      if (key === viewName) {
        el.removeAttribute("hidden");
        el.classList.add("view--active");
        el.style.display = "block";
      } else {
        el.setAttribute("hidden", "");
        el.classList.remove("view--active");
        el.style.display = "none";
      }
    });
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ── MODAL ─────────────────────────────────────────────── */
  function openModal() {
    helpModal.removeAttribute("hidden");
    btnHelp.setAttribute("aria-expanded", "true");
    // Trap focus
    setTimeout(() => modalClose.focus(), 50);
    document.addEventListener("keydown", handleModalKey);
  }

  function closeModal() {
    helpModal.setAttribute("hidden", "");
    btnHelp.setAttribute("aria-expanded", "false");
    btnHelp.focus();
    document.removeEventListener("keydown", handleModalKey);
  }

  function handleModalKey(e) {
    if (e.key === "Escape") closeModal();
  }

  /* ── SLIDER ────────────────────────────────────────────── */
  let currentSlide = 0;
  let autoplayInterval = null;
  let isAutoplay = true;

  function buildSlider() {
    sliderTrack.innerHTML = "";
    sliderDots.innerHTML  = "";

    TUTORIAL_SLIDES.forEach((slide, idx) => {
      // Build slide
      const el = document.createElement("div");
      el.className = "slide";
      el.setAttribute("role", "tabpanel");
      el.setAttribute("aria-roledescription", "slide");
      el.setAttribute("aria-label", `${slide.badge}: ${slide.title}`);
      el.innerHTML = `<img src="${slide.image}" class="full-slide-image" alt="${slide.title} slide" />`;
      sliderTrack.appendChild(el);

      // Build dot
      const dot = document.createElement("button");
      dot.className = "dot" + (idx === 0 ? " active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
      dot.setAttribute("aria-selected", idx === 0 ? "true" : "false");
      dot.addEventListener("click", () => goToSlide(idx));
      sliderDots.appendChild(dot);
    });

    slideTotal.textContent = TUTORIAL_SLIDES.length;
    goToSlide(0, false);
    startAutoplay();

    // Pause on hover
    const container = document.getElementById("slider-container");
    container.addEventListener("mouseenter", pauseAutoplay);
    container.addEventListener("mouseleave", () => { if (isAutoplay) startAutoplay(); });
  }

  function goToSlide(idx, animate = true) {
    const total = TUTORIAL_SLIDES.length;
    currentSlide = (idx + total) % total;

    if (!animate) {
      sliderTrack.style.transition = "none";
      requestAnimationFrame(() => {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        requestAnimationFrame(() => { sliderTrack.style.transition = ""; });
      });
    } else {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update dots
    const dots = sliderDots.querySelectorAll(".dot");
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentSlide);
      d.setAttribute("aria-selected", i === currentSlide ? "true" : "false");
    });

    slideCurrent.textContent = currentSlide + 1;
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function pauseAutoplay() {
    clearInterval(autoplayInterval);
  }

  function toggleAutoplay() {
    isAutoplay = !isAutoplay;
    if (isAutoplay) {
      startAutoplay();
      autoplayIconPause.style.display = "";
      autoplayIconPlay.style.display  = "none";
      autoplayLabel.textContent = "Pause";
      autoplayBtn.setAttribute("aria-pressed", "true");
    } else {
      pauseAutoplay();
      autoplayIconPause.style.display = "none";
      autoplayIconPlay.style.display  = "";
      autoplayLabel.textContent = "Play";
      autoplayBtn.setAttribute("aria-pressed", "false");
    }
  }

  /* ── TAX SIDEBAR ───────────────────────────────────────── */
  function buildTaxSidebar(sections) {
    taxNav.innerHTML = "";
    sections.forEach((sec) => {
      const btn = document.createElement("button");
      btn.className = "section-item";
      btn.setAttribute("data-id", sec.id);
      btn.setAttribute("type", "button");
      btn.setAttribute("aria-label", sec.title);
      btn.innerHTML = `
        <span class="icon">${sec.icon}</span>
        <div>
          <h3>${sec.id}</h3>
          <p>${sec.title.replace(/^Section [^:]+:\s*/i,"")}</p>
        </div>
      `;
      btn.addEventListener("click", () => {
        showTaxSection(sec.id);
        closeTaxSidebar();
      });
      taxNav.appendChild(btn);
    });
  }

  let activeTaxId = "";

  function showTaxSection(id) {
    const sec = TAX_SECTIONS.find((s) => s.id === id);
    if (!sec) return;

    activeTaxId = id;

    // Update sidebar active state
    taxNav.querySelectorAll(".section-item").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-id") === id);
    });

    // Fade out then in
    taxContentInner.style.opacity = "0";
    taxContentInner.style.transform = "translateY(10px)";

    setTimeout(() => {
      // Set contentTitle
      const contentTitle = document.getElementById("contentTitle");
      if (contentTitle) contentTitle.textContent = sec.title;

      taxContentInner.innerHTML = buildTaxHTML(sec);
      taxContentInner.style.transition = "opacity .35s ease, transform .35s ease";
      taxContentInner.style.opacity = "1";
      taxContentInner.style.transform = "translateY(0)";
    }, 200);

    // Scroll content to top
    const taxContent = document.getElementById("tax-content");
    if (taxContent) taxContent.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildTaxHTML(sec) {
    const renderCardHeading = (title, subtitle) => `
      <div class="section-heading">
        <h3>${title}</h3>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
    `;

    const renderList = (title, items) => {
      if (!items || !items.length) return "";
      return `
        <div class="content-section">
          ${renderCardHeading(title)}
          <ul class="bullet-list">
            ${items.map((i) => `<li>${i}</li>`).join("")}
          </ul>
        </div>`;
    };

    return `
      <div class="content-card">
        <div class="status-banner">Clear and friendly guide for ${sec.id} deductions</div>
        
        <div class="content-section">
          ${renderCardHeading("Introduction", sec.intro)}
          <p class="section-text">${sec.overview}</p>
        </div>
        
        <div class="content-section info-grid">
          <div class="info-card">
            <h4>Maximum deduction</h4>
            <p class="section-text">${sec.maxDeduction}</p>
          </div>
          <div class="info-card">
            <h4>Who can claim</h4>
            <p class="section-text">${sec.whoCanClaim}</p>
          </div>
        </div>
        
        ${renderList("Eligible investments / expenses", sec.eligibleItems)}
        ${renderList("Eligibility conditions", sec.eligibility)}
        
        <div class="content-section">
          ${renderCardHeading("Example explanation")}
          <p class="section-text">${sec.example}</p>
        </div>
        
        ${renderList("Important notes", sec.notes)}
        ${renderList("Key benefits", sec.benefits)}
        ${renderList("Documents required", sec.documents)}
        
        <div class="content-section">
          ${renderCardHeading("Beginner explanation")}
          <p class="section-text">${sec.beginnerExplanation}</p>
        </div>
      </div>
    `;
  }

  /* ── TAX SEARCH ────────────────────────────────────────── */
  function filterTaxSections(query) {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? TAX_SECTIONS.filter(
          (s) =>
            s.id.toLowerCase().includes(q) ||
            s.title.toLowerCase().includes(q)
        )
      : TAX_SECTIONS;

    buildTaxSidebar(filtered);

    // Keep current active or show first
    if (filtered.length) {
      const stillActive = filtered.find((s) => s.id === activeTaxId);
      showTaxSection(stillActive ? stillActive.id : filtered[0].id);
    }
  }

  /* ── TAX MOBILE SIDEBAR ────────────────────────────────── */
  function openTaxSidebar() {
    taxSidebar.classList.add("open");
    taxLayout.classList.add("sidebar-open");
    taxSidebarBackdrop.style.opacity = "1";
    taxSidebarBackdrop.style.pointerEvents = "all";
    taxMobileToggle.setAttribute("aria-expanded", "true");
  }

  function closeTaxSidebar() {
    taxSidebar.classList.remove("open");
    taxLayout.classList.remove("sidebar-open");
    taxSidebarBackdrop.style.opacity = "0";
    taxSidebarBackdrop.style.pointerEvents = "none";
    taxMobileToggle.setAttribute("aria-expanded", "false");
  }

  /* ── EVENT LISTENERS ───────────────────────────────────── */
  function attachListeners() {
    // Navbar
    btnHome.addEventListener("click", () => showView("home"));
    btnTutorialNav.addEventListener("click", () => showView("tutorial"));
    btnTaxNav.addEventListener("click", () => showView("tax"));
    btnHelp.addEventListener("click", openModal);

    // Mobile Navbar toggle
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("open");
        navLinks.classList.toggle("open");
      });

      // Close mobile menu on nav link click
      const navButtons = navLinks.querySelectorAll(".nav-btn");
      navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          mobileMenuBtn.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    // Home CTAs
    cardTutorial.addEventListener("click", () => showView("tutorial"));
    cardTax.addEventListener("click", () => showView("tax"));
    cardTutorial.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") showView("tutorial"); });
    cardTax.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") showView("tax"); });

    // Modal
    modalClose.addEventListener("click", closeModal);
    helpModal.addEventListener("click", (e) => { if (e.target === helpModal) closeModal(); });
    modalBtnTutorial.addEventListener("click", () => { closeModal(); showView("tutorial"); });
    modalBtnTax.addEventListener("click", () => { closeModal(); showView("tax"); });

    // Slider
    sliderPrev.addEventListener("click", () => { pauseAutoplay(); prevSlide(); if (isAutoplay) startAutoplay(); });
    sliderNext.addEventListener("click", () => { pauseAutoplay(); nextSlide(); if (isAutoplay) startAutoplay(); });
    autoplayBtn.addEventListener("click", toggleAutoplay);
    tutorialBackBtn.addEventListener("click", () => showView("home"));

    // Need Help Support Button
    const btnContactSupport = document.getElementById("btn-contact-support");
    if (btnContactSupport) {
      btnContactSupport.addEventListener("click", openModal);
    }

    // Keyboard slider
    document.addEventListener("keydown", (e) => {
      if (!views.tutorial.classList.contains("view--active")) return;
      if (e.key === "ArrowRight") { pauseAutoplay(); nextSlide(); if (isAutoplay) startAutoplay(); }
      if (e.key === "ArrowLeft")  { pauseAutoplay(); prevSlide(); if (isAutoplay) startAutoplay(); }
    });

    // Tax
    taxBackBtn.addEventListener("click", () => showView("home"));
    taxSearch.addEventListener("input", (e) => filterTaxSections(e.target.value));
    taxMobileToggle.addEventListener("click", openTaxSidebar);
    taxSidebarBackdrop.addEventListener("click", closeTaxSidebar);

    // Responsive
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeTaxSidebar();
    });
  }

  /* ── BOOT ──────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", initPortal);
})();
