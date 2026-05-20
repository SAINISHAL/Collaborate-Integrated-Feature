/* ============================================================
   INTEGRATED PORTAL – script.js
   Single-page dynamic navigation, slider, tax portal, AI chatbot
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
  const btnHome        = document.getElementById("btn-home");
  const btnTutorialNav = document.getElementById("btn-tutorial-nav");
  const btnTaxNav      = document.getElementById("btn-tax-nav");
  const btnHelp        = document.getElementById("btn-help");
  const mobileMenuBtn  = document.getElementById("mobile-menu-btn");
  const navLinks       = document.getElementById("nav-links");

  // Home CTA
  const cardTutorial = document.getElementById("card-tutorial");
  const cardTax      = document.getElementById("card-tax");

  // Modal
  const helpModal        = document.getElementById("help-modal");
  const modalClose       = document.getElementById("modal-close");
  const modalBtnTutorial = document.getElementById("modal-btn-tutorial");
  const modalBtnTax      = document.getElementById("modal-btn-tax");
  const modalBtnChat     = document.getElementById("modal-btn-chat");

  // Tutorial
  const sliderTrack       = document.getElementById("slider-track");
  const sliderDots        = document.getElementById("slider-dots");
  const sliderPrev        = document.getElementById("slider-prev");
  const sliderNext        = document.getElementById("slider-next");
  const slideCurrent      = document.getElementById("slide-current");
  const slideTotal        = document.getElementById("slide-total");
  const autoplayBtn       = document.getElementById("autoplay-btn");
  const autoplayIconPause = document.getElementById("autoplay-icon-pause");
  const autoplayIconPlay  = document.getElementById("autoplay-icon-play");
  const autoplayLabel     = document.getElementById("autoplay-label");
  const tutorialBackBtn   = document.getElementById("tutorial-back-btn");

  // Tax
  const taxNav             = document.getElementById("tax-nav");
  const taxContentInner    = document.getElementById("tax-content-inner");
  const taxSearch          = document.getElementById("tax-search");
  const taxBackBtn         = document.getElementById("tax-back-btn");
  const taxMobileToggle    = document.getElementById("tax-mobile-toggle");
  const taxSidebar         = document.getElementById("tax-sidebar");
  const taxSidebarBackdrop = document.getElementById("tax-sidebar-backdrop");
  const taxLayout          = document.getElementById("tax-layout");

  // Chatbot
  const chatbotOverlay  = document.getElementById("chatbot-overlay");
  const chatbotClose    = document.getElementById("chatbot-close");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotTyping   = document.getElementById("chatbot-typing");
  const chatbotInput    = document.getElementById("chatbot-input");
  const chatbotSend     = document.getElementById("chatbot-send");

  /* ── PORTAL INIT ───────────────────────────────────────── */
  function initPortal() {
    if (typeof PORTAL_CONFIG !== "undefined") {
      const navTitle = document.getElementById("nav-title");
      const navSub   = document.getElementById("nav-sub");
      const navLogo  = document.getElementById("nav-logo");
      if (navTitle) navTitle.textContent = PORTAL_CONFIG.title;
      if (navSub)   navSub.textContent   = PORTAL_CONFIG.subtitle;
      // Skip textContent on logo if it is now an <img>
      if (navLogo && navLogo.tagName !== "IMG") navLogo.textContent = PORTAL_CONFIG.logo;
    }

    buildSlider();
    buildTaxSidebar(TAX_SECTIONS);
    if (TAX_SECTIONS.length) showTaxSection(TAX_SECTIONS[0].id);
    attachListeners();
    showView("home");
    initChatbot();
    initReadAloud();
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ── MODAL ─────────────────────────────────────────────── */
  function openModal() {
    helpModal.removeAttribute("hidden");
    btnHelp.setAttribute("aria-expanded", "true");
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
      const el = document.createElement("div");
      el.className = "slide";
      el.setAttribute("role", "tabpanel");
      el.setAttribute("aria-roledescription", "slide");
      el.setAttribute("aria-label", `${slide.badge}: ${slide.title}`);
      el.innerHTML = `<img src="${slide.image}" class="full-slide-image" alt="${slide.title} slide" />`;
      sliderTrack.appendChild(el);

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
          <p>${sec.title.replace(/^Section [^:]+:\s*/i, "")}</p>
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

    taxNav.querySelectorAll(".section-item").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-id") === id);
    });

    taxContentInner.style.opacity   = "0";
    taxContentInner.style.transform = "translateY(10px)";

    setTimeout(() => {
      const contentTitle = document.getElementById("contentTitle");
      if (contentTitle) contentTitle.textContent = sec.title;

      taxContentInner.innerHTML = buildTaxHTML(sec);
      taxContentInner.style.transition = "opacity .35s ease, transform .35s ease";
      taxContentInner.style.opacity    = "1";
      taxContentInner.style.transform  = "translateY(0)";
    }, 200);

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

    if (filtered.length) {
      const stillActive = filtered.find((s) => s.id === activeTaxId);
      showTaxSection(stillActive ? stillActive.id : filtered[0].id);
    }
  }

  /* ── TAX MOBILE SIDEBAR ────────────────────────────────── */
  function openTaxSidebar() {
    taxSidebar.classList.add("open");
    taxLayout.classList.add("sidebar-open");
    taxSidebarBackdrop.style.opacity     = "1";
    taxSidebarBackdrop.style.pointerEvents = "all";
    taxMobileToggle.setAttribute("aria-expanded", "true");
  }

  function closeTaxSidebar() {
    taxSidebar.classList.remove("open");
    taxLayout.classList.remove("sidebar-open");
    taxSidebarBackdrop.style.opacity     = "0";
    taxSidebarBackdrop.style.pointerEvents = "none";
    taxMobileToggle.setAttribute("aria-expanded", "false");
  }

  /* ══════════════════════════════════════════════════════════
     AI CHATBOT MODULE
     ══════════════════════════════════════════════════════════ */
  const FLASK_URL = "http://localhost:5000/chat";

  /* Seed the welcome message once */
  function initChatbot() {
    appendBotMessage(
      "👋 Hi! I'm your Collaborate Help Assistant.\n\n" +
      "Ask me anything about the onboarding process, form submissions, " +
      "document uploads, or how to navigate the portal. I'm here to help!"
    );
  }

  function openChatbot() {
    chatbotOverlay.removeAttribute("hidden");
    chatbotInput.focus();
    document.addEventListener("keydown", handleChatbotKey);
  }

  function closeChatbot() {
    chatbotOverlay.setAttribute("hidden", "");
    document.removeEventListener("keydown", handleChatbotKey);
  }

  function handleChatbotKey(e) {
    if (e.key === "Escape") closeChatbot();
  }

  /* ── Render a bot bubble (+ optional video) ─────────────── */
  function appendBotMessage(text, videoPath) {
    const row = document.createElement("div");
    row.className = "chat-row chat-row--bot";

    const avatar = document.createElement("div");
    avatar.className = "chat-row__avatar";
    avatar.textContent = "🤖";
    avatar.setAttribute("aria-hidden", "true");

    const wrap = document.createElement("div");
    wrap.style.cssText = "max-width:78%;display:flex;flex-direction:column;gap:8px;";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble--bot";
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");
    wrap.appendChild(bubble);

    if (videoPath) {
      const label = document.createElement("p");
      label.className = "chat-video-label";
      label.textContent = "🎬 Onboarding Tutorial Video";

      const videoWrap = document.createElement("div");
      videoWrap.className = "chat-video-wrap";

      const video = document.createElement("video");
      video.controls = true;
      video.setAttribute("preload", "metadata");

      const source = document.createElement("source");
      source.src  = `http://localhost:5000/${videoPath}`;
      source.type = "video/mp4";
      video.appendChild(source);

      videoWrap.appendChild(video);
      wrap.appendChild(label);
      wrap.appendChild(videoWrap);
    }

    row.appendChild(avatar);
    row.appendChild(wrap);
    chatbotMessages.appendChild(row);
    scrollChatBottom();
  }

  /* ── Render a user bubble ───────────────────────────────── */
  function appendUserMessage(text) {
    const row = document.createElement("div");
    row.className = "chat-row chat-row--user";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble--user";
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");

    row.appendChild(bubble);
    chatbotMessages.appendChild(row);
    scrollChatBottom();
  }

  /* ── Render an error bubble ─────────────────────────────── */
  function appendErrorMessage(text) {
    const row = document.createElement("div");
    row.className = "chat-row chat-row--bot";

    const avatar = document.createElement("div");
    avatar.className = "chat-row__avatar";
    avatar.textContent = "⚠️";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble--bot";
    bubble.style.borderColor = "rgba(239,68,68,0.25)";
    bubble.style.color       = "#dc2626";
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");

    row.appendChild(avatar);
    row.appendChild(bubble);
    chatbotMessages.appendChild(row);
    scrollChatBottom();
  }

  function showTyping() {
    chatbotTyping.removeAttribute("hidden");
    chatbotTyping.setAttribute("aria-hidden", "false");
    scrollChatBottom();
  }

  function hideTyping() {
    chatbotTyping.setAttribute("hidden", "");
    chatbotTyping.setAttribute("aria-hidden", "true");
  }

  function scrollChatBottom() {
    setTimeout(() => { chatbotMessages.scrollTop = chatbotMessages.scrollHeight; }, 50);
  }

  /* ── Send user message → Flask → render response ────────── */
  async function sendMessage() {
    const text = chatbotInput.value.trim();
    if (!text) return;

    chatbotInput.value = "";
    chatbotInput.style.height = "auto";
    chatbotSend.disabled = true;

    appendUserMessage(text);
    showTyping();

    try {
      const res = await fetch(FLASK_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Server error ${res.status}`);
      }

      const data = await res.json();
      hideTyping();
      appendBotMessage(data.response, data.video || null);
    } catch (err) {
      hideTyping();
      appendErrorMessage(
        "⚠️ Could not reach the assistant.\n\n" +
        "Please make sure the Flask backend is running:\n\n" +
        "cd HelpmeBot && python ai.py"
      );
      console.error("Chatbot fetch error:", err);
    } finally {
      chatbotSend.disabled = false;
      chatbotInput.focus();
    }
  }

  /* ── Sanitise user text to prevent XSS ─────────────────── */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ── Auto-grow textarea ─────────────────────────────────── */
  function autoResizeTextarea() {
    chatbotInput.style.height = "auto";
    chatbotInput.style.height = Math.min(chatbotInput.scrollHeight, 120) + "px";
  }

  /* ── EVENT LISTENERS ───────────────────────────────────── */
  function attachListeners() {
    // Navbar
    btnHome.addEventListener("click", () => showView("home"));
    btnTutorialNav.addEventListener("click", () => showView("tutorial"));
    btnTaxNav.addEventListener("click", () => showView("tax"));
    btnHelp.addEventListener("click", openChatbot);

    // Mobile menu
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("open");
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          mobileMenuBtn.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    // Home CTAs
    cardTutorial.addEventListener("click", () => showView("tutorial"));
    cardTax.addEventListener("click",      () => showView("tax"));
    cardTutorial.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") showView("tutorial"); });
    cardTax.addEventListener("keydown",      (e) => { if (e.key === "Enter" || e.key === " ") showView("tax"); });

    // Help modal
    modalClose.addEventListener("click", closeModal);
    helpModal.addEventListener("click", (e) => { if (e.target === helpModal) closeModal(); });
    modalBtnTutorial.addEventListener("click", () => { closeModal(); showView("tutorial"); });
    modalBtnTax.addEventListener("click",      () => { closeModal(); showView("tax"); });
    if (modalBtnChat) {
      modalBtnChat.addEventListener("click", () => { closeModal(); openChatbot(); });
    }

    // Slider controls
    sliderPrev.addEventListener("click", () => { pauseAutoplay(); prevSlide(); if (isAutoplay) startAutoplay(); });
    sliderNext.addEventListener("click", () => { pauseAutoplay(); nextSlide(); if (isAutoplay) startAutoplay(); });
    autoplayBtn.addEventListener("click", toggleAutoplay);
    tutorialBackBtn.addEventListener("click", () => showView("home"));

    // Contact support button in tutorial
    const btnContactSupport = document.getElementById("btn-contact-support");
    if (btnContactSupport) btnContactSupport.addEventListener("click", openChatbot);

    // Keyboard: arrow keys for slider, Escape handled per-modal
    document.addEventListener("keydown", (e) => {
      if (!views.tutorial.classList.contains("view--active")) return;
      if (e.key === "ArrowRight") { pauseAutoplay(); nextSlide(); if (isAutoplay) startAutoplay(); }
      if (e.key === "ArrowLeft")  { pauseAutoplay(); prevSlide(); if (isAutoplay) startAutoplay(); }
    });

    // Tax section
    taxBackBtn.addEventListener("click", () => showView("home"));
    taxSearch.addEventListener("input",  (e) => filterTaxSections(e.target.value));
    taxMobileToggle.addEventListener("click", openTaxSidebar);
    taxSidebarBackdrop.addEventListener("click", closeTaxSidebar);
    window.addEventListener("resize", () => { if (window.innerWidth > 768) closeTaxSidebar(); });

    // ── Chatbot ──────────────────────────────────────────────
    chatbotClose.addEventListener("click", closeChatbot);
    chatbotOverlay.addEventListener("click", (e) => { if (e.target === chatbotOverlay) closeChatbot(); });
    chatbotSend.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    chatbotInput.addEventListener("input", autoResizeTextarea);
  }

  /* ── BOOT ──────────────────────────────────────────────── */

  /* ══════════════════════════════════════════════════════════
     READ ALOUD ACCESSIBILITY MODULE
     ══════════════════════════════════════════════════════════ */
  let readAloudBtn = null;
  let currentSelectionText = "";

  function initReadAloud() {
    document.addEventListener("mouseup", handleTextSelection);
    document.addEventListener("keyup", handleTextSelection); // Handle keyboard selection
    
    // Hide button when clicking elsewhere or selection is cleared
    document.addEventListener("mousedown", (e) => {
      if (readAloudBtn && !readAloudBtn.contains(e.target)) {
        removeReadAloudBtn();
      }
    });

    // Special case: clicking outside should stop speech too if desired
    window.addEventListener("click", (e) => {
      if (!readAloudBtn || !readAloudBtn.contains(e.target)) {
        window.speechSynthesis.cancel();
      }
    });
  }

  function handleTextSelection(e) {
    // Small delay to ensure selection is complete
    setTimeout(() => {
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      if (selectedText.length > 0) {
        currentSelectionText = selectedText;
        showReadAloudBtn(selection);
      } else {
        removeReadAloudBtn();
      }
    }, 10);
  }

  function showReadAloudBtn(selection) {
    removeReadAloudBtn(); // Clear previous

    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    readAloudBtn = document.createElement("button");
    readAloudBtn.className = "read-aloud-btn";
    readAloudBtn.innerHTML = `<span>🔊</span> Read Aloud`;
    readAloudBtn.setAttribute("aria-label", "Read selected text aloud");

    // Position the button above the selection
    const btnTop = rect.top + window.scrollY - 45;
    const btnLeft = rect.left + window.scrollX + (rect.width / 2) - 60;

    readAloudBtn.style.top = `${btnTop}px`;
    readAloudBtn.style.left = `${btnLeft}px`;

    readAloudBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      speakText(currentSelectionText);
      removeReadAloudBtn();
    });

    document.body.appendChild(readAloudBtn);
  }

  function removeReadAloudBtn() {
    if (readAloudBtn) {
      readAloudBtn.remove();
      readAloudBtn = null;
    }
  }

  function speakText(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Optional: refine voice settings
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
  }

  document.addEventListener("DOMContentLoaded", initPortal);
})();
