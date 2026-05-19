/**
 * config/config.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Central configuration for the Onboarding Slider.
 * To add more images later, simply push more entries to the `images` array.
 * Paths are relative to frontend/index.html
 * ─────────────────────────────────────────────────────────────────────────────
 */
const SLIDER_CONFIG = {
  images: [
    { src: "../image1.png", caption: "Step 1 — Welcome to the Platform" },
    { src: "../image2.png", caption: "Step 2 — Setting Up Your Profile" },
    { src: "../image3.png", caption: "Step 3 — Exploring the Dashboard" },
    { src: "../image4.png", caption: "Step 4 — Navigating the Menu" },
    { src: "../image5.png", caption: "Step 5 — Creating Your First Task" },
    { src: "../image6.png", caption: "Step 6 — Collaborating with Your Team" },
    { src: "../image7.png", caption: "Step 7 — Managing Notifications" },
    { src: "../image8.png", caption: "Step 8 — Customising Your Settings" },
    { src: "../image9.png", caption: "Step 9 — You're All Set! 🎉" },
  ],

  /** Auto-slide interval in milliseconds */
  autoplayInterval: 3000,

  /** Slide transition duration in ms — must match CSS variable --transition-dur */
  transitionDuration: 600,
};
