/**
 * ====================================================================
 * SACRED UNION — RAHUL & RIYA
 * Ultra-Luxury Wedding Invitation Interactive Engine
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modular components
  initOpeningExperience();
  initParticleCanvas();
  initNavigation();
  initCountdown();
  initMusicAtmosphere();
  initGalleryAndLightbox();
  initCarousel();
  initEventsAndCalendar();
  initRSVPForm();
  initFAQAccordion();
  initScrollReveal();
});

/* ====================================================================
   01. OPENING EXPERIENCE (ROYAL SEAL & INVITATION REVEAL)
   =================================================================== */
function initOpeningExperience() {
  const openingScreen = document.getElementById("opening-experience");
  const openBtn = document.getElementById("btn-open-invitation");
  const seal = document.querySelector(".opening-monogram-badge");

  if (!openingScreen) return;

  function revealInvitation() {
    openingScreen.classList.add("revealed");
    document.body.style.overflow = "auto";

    // Play subtle opening audio if enabled and not already playing
    if (window.royalAudioEngine && !window.royalAudioEngine.isPlaying) {
      window.royalAudioEngine.start();
    }

    // Trigger hero entrance
    const heroElements = document.querySelectorAll("#hero .reveal-on-scroll");
    heroElements.forEach((el, index) => {
      setTimeout(() => el.classList.add("revealed"), index * 200);
    });
  }

  if (openBtn) {
    openBtn.addEventListener("click", revealInvitation);
  }
  if (seal) {
    seal.addEventListener("click", revealInvitation);
  }

  // Prevent background scrolling while opening screen is active
  document.body.style.overflow = "hidden";
}

/* ====================================================================
   02. FLOATING GOLD PARTICLE CANVAS SYSTEM
   =================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particleCount = window.innerWidth < 768 ? 35 : 75;
  const particles = [];

  class GoldParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.6;
      this.speedY = -(Math.random() * 0.45 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.7 + 0.2;
      this.fadeSpeed = Math.random() * 0.008 + 0.003;
      this.color = Math.random() > 0.3 ? "243, 229, 179" : "197, 160, 89";
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeSpeed;

      if (this.opacity <= 0 || this.y < 0) {
        this.reset();
        this.y = height + 10;
        this.opacity = Math.random() * 0.7 + 0.2;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new GoldParticle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(render);
  }

  render();
}

/* ====================================================================
   14. FLOATING LUXURY NAVIGATION & SCROLL SPY
   =================================================================== */
function initNavigation() {
  const header = document.getElementById("main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const sections = document.querySelectorAll("section[id]");

  // Header background blur on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy for active link
    let currentSectionId = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("open");
        navMenu.classList.remove("open");
      });
    });
  }
}

/* ====================================================================
   03. LIVE WEDDING COUNTDOWN TIMER
   =================================================================== */
function initCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");
  const elapsedMsg = document.getElementById("countdown-elapsed");
  const gridEl = document.querySelector(".countdown-grid");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDateStr =
    (window.WEDDING_CONFIG && window.WEDDING_CONFIG.countdownTarget) ||
    "2026-12-12T18:00:00";
  const targetTime = new Date(targetDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (gridEl) gridEl.style.display = "none";
      if (elapsedMsg) {
        elapsedMsg.style.display = "block";
        elapsedMsg.textContent = "The celebration has begun! Shubh Vivah!";
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  update();
  setInterval(update, 1000);
}

/* ====================================================================
   13. PROCEDURAL ROYAL MUSIC & ATMOSPHERE (WEB AUDIO API + MP3 FALLBACK)
   =================================================================== */
function initMusicAtmosphere() {
  const musicBtn = document.getElementById("music-toggle-btn");
  const equalizer = document.querySelector(".music-equalizer");
  const btnText = document.getElementById("music-btn-text");

  // Web Audio Procedural Ambient Sitar / Raga Drone Synthesizer
  class RoyalAudioEngine {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.masterGain = null;
      this.oscillators = [];
      this.externalAudio = null;

      // Check if external mp3 exists in config
      if (
        window.WEDDING_CONFIG &&
        window.WEDDING_CONFIG.music &&
        window.WEDDING_CONFIG.music.externalMp3Url
      ) {
        this.externalAudio = new Audio(
          window.WEDDING_CONFIG.music.externalMp3Url
        );
        this.externalAudio.loop = true;
      }
    }

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        }
      }
    }

    start() {
      if (this.isPlaying) return;

      if (this.externalAudio) {
        this.externalAudio
          .play()
          .then(() => {
            this.isPlaying = true;
            this.updateUI(true);
          })
          .catch((e) => {
            console.log("External audio fallback to synth raga");
            this.startProceduralSynth();
          });
        return;
      }

      this.startProceduralSynth();
    }

    startProceduralSynth() {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      // Meditative Tanpura / Sitar harmonic drone frequencies (Sa-Pa drone in Indian classical music: D2, A2, D3, A3, F#3)
      const freqs = [73.42, 110.0, 146.83, 220.0, 277.18, 370.0];
      this.oscillators = [];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Warm triangle and sine waves for a rich meditative acoustic drone
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Gentle undulating LFO modulation to simulate plucked string resonance
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(2.5, this.ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        // Individual volume balance
        const vol = 0.08 / (idx + 1);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start();
        this.oscillators.push(osc);
      });

      this.isPlaying = true;
      this.updateUI(true);
    }

    stop() {
      if (!this.isPlaying) return;

      if (this.externalAudio) {
        this.externalAudio.pause();
      }

      if (this.oscillators.length > 0) {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {}
        });
        this.oscillators = [];
      }

      this.isPlaying = false;
      this.updateUI(false);
    }

    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }

    updateUI(playing) {
      if (equalizer) {
        if (playing) {
          equalizer.classList.add("playing");
        } else {
          equalizer.classList.remove("playing");
        }
      }
      if (btnText) {
        btnText.textContent = playing ? "Music: On" : "Music: Off";
      }
    }
  }

  window.royalAudioEngine = new RoyalAudioEngine();

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      window.royalAudioEngine.toggle();
    });
  }
}

/* ====================================================================
   06. PREMIUM PHOTO GALLERY & LIGHTBOX
   =================================================================== */
function initGalleryAndLightbox() {
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption-text");
  const lightboxCounter = document.querySelector(".lightbox-counter");
  const closeBtn = document.querySelector(".lightbox-btn-close");
  const prevBtn = document.querySelector(".lightbox-nav-prev");
  const nextBtn = document.querySelector(".lightbox-nav-next");

  // Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "block";
          setTimeout(() => (item.style.opacity = "1"), 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });

  // Lightbox Data & Navigation
  let currentIdx = 0;
  const visiblePhotos = [];

  function collectPhotos() {
    visiblePhotos.length = 0;
    galleryItems.forEach((item) => {
      if (item.style.display !== "none") {
        const img = item.querySelector("img");
        const caption =
          item.querySelector(".gallery-item-caption")?.textContent || "";
        visiblePhotos.push({
          src: img ? img.src : "",
          caption: caption
        });
      }
    });
  }

  function openLightbox(index) {
    collectPhotos();
    if (visiblePhotos.length === 0) return;
    currentIdx = index;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  function updateLightbox() {
    const photo = visiblePhotos[currentIdx];
    if (!photo) return;
    lightboxImg.src = photo.src;
    lightboxCaption.textContent = photo.caption;
    lightboxCounter.textContent = `${currentIdx + 1} of ${visiblePhotos.length}`;
  }

  function nextPhoto() {
    if (visiblePhotos.length <= 1) return;
    currentIdx = (currentIdx + 1) % visiblePhotos.length;
    updateLightbox();
  }

  function prevPhoto() {
    if (visiblePhotos.length <= 1) return;
    currentIdx = (currentIdx - 1 + visiblePhotos.length) % visiblePhotos.length;
    updateLightbox();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextPhoto);
  if (prevBtn) prevBtn.addEventListener("click", prevPhoto);

  // Close when clicking outside image
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (
        e.target === lightbox ||
        e.target.classList.contains("lightbox-content-wrap")
      ) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  });

  // Mobile Touch Swipe for Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    lightbox.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
          if (diff < 0) nextPhoto();
          else prevPhoto();
        }
      },
      { passive: true }
    );
  }
}

/* ====================================================================
   07. INTERACTIVE PHOTO CAROUSEL
   =================================================================== */
function initCarousel() {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-arrow-prev");
  const nextBtn = document.querySelector(".carousel-arrow-next");
  const dotsContainer = document.querySelector(".carousel-pagination");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;

  // Create pagination dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    dot.setAttribute("aria-label", `Slide ${idx + 1}`);
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dot");

  function goToSlide(idx) {
    currentIndex = idx;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Autoplay with hover pause
  function startAutoplay() {
    stopAutoplay();
    autoPlayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  track.parentElement.addEventListener("mouseenter", stopAutoplay);
  track.parentElement.addEventListener("mouseleave", startAutoplay);

  // Mobile Touch Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) nextSlide();
        else prevSlide();
      }
      startAutoplay();
    },
    { passive: true }
  );

  startAutoplay();
}

/* ====================================================================
   08. EVENTS & ADD TO CALENDAR INTEGRATION
   =================================================================== */
function initEventsAndCalendar() {
  const calendarBtns = document.querySelectorAll(".btn-calendar");

  calendarBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const eventTitle = btn.getAttribute("data-title") || "Wedding Celebration";
      const eventDetails =
        btn.getAttribute("data-details") ||
        "Wedding ceremony of Rahul & Riya at Udaipur";
      const eventLocation =
        btn.getAttribute("data-location") ||
        "The Oberoi Udaivilas, Udaipur, Rajasthan";
      const startDateStr = btn.getAttribute("data-start") || "20261212T180000";
      const endDateStr = btn.getAttribute("data-end") || "20261212T230000";

      // Build standard Google Calendar URL
      const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventTitle
      )}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(
        eventDetails
      )}&location=${encodeURIComponent(eventLocation)}`;

      window.open(googleCalUrl, "_blank");
    });
  });
}

/* ====================================================================
   10. RSVP EXPERIENCE & INTERACTIVE SUBMISSION
   =================================================================== */
function initRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const attendanceCards = document.querySelectorAll(".attendance-radio-card");
  const successBox = document.getElementById("rsvp-success-message");
  const submitBtn = document.querySelector(".btn-rsvp-submit");

  if (!form) return;

  // Attendance radio custom interaction
  attendanceCards.forEach((card) => {
    card.addEventListener("click", () => {
      attendanceCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      const input = card.querySelector("input[type='radio']");
      if (input) input.checked = true;
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic Validation
    const nameInput = document.getElementById("guest-name");
    const guestsCount = document.getElementById("guest-count");
    const attendingSelected = document.querySelector(
      "input[name='attending']:checked"
    );

    if (!nameInput || !nameInput.value.trim()) {
      alert("Kindly enter your full name.");
      nameInput.focus();
      return;
    }

    if (!attendingSelected) {
      alert("Kindly let us know if you will be joining us.");
      return;
    }

    // Collect Data
    const formData = {
      name: nameInput.value.trim(),
      email: document.getElementById("guest-email")?.value.trim() || "",
      phone: document.getElementById("guest-phone")?.value.trim() || "",
      guestCount: guestsCount?.value || "1",
      attending: attendingSelected.value,
      events: Array.from(
        document.querySelectorAll("input[name='events']:checked")
      ).map((cb) => cb.value),
      dietary: document.getElementById("guest-dietary")?.value || "None",
      message: document.getElementById("guest-message")?.value.trim() || "",
      submittedAt: new Date().toISOString()
    };

    // Button loading state
    submitBtn.classList.add("loading");
    submitBtn.innerHTML = `<span>Securing Your Blessing...</span>`;

    setTimeout(() => {
      // Save locally to simulate live functional persistence
      try {
        const storedRSVPs = JSON.parse(
          localStorage.getItem("wedding_rsvps") || "[]"
        );
        storedRSVPs.push(formData);
        localStorage.setItem("wedding_rsvps", JSON.stringify(storedRSVPs));
      } catch (err) {
        console.warn("Could not save to localStorage", err);
      }

      // Hide form & show luxury confirmation
      form.style.display = "none";
      if (successBox) {
        successBox.style.display = "block";
      }

      // Trigger festive golden sparkle animation
      triggerConfetti();
    }, 1200);
  });

  // Festive golden sparkles
  function triggerConfetti() {
    const confettiColors = ["#c5a059", "#fae8b6", "#b88f3e", "#FAF7F2", "#11382d"];
    const container = document.getElementById("rsvp");
    if (!container) return;

    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = Math.random() * 8 + 4 + "px";
      confetti.style.height = Math.random() * 8 + 4 + "px";
      confetti.style.backgroundColor =
        confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.left = Math.random() * 80 + 10 + "%";
      confetti.style.top = "60%";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "100";
      confetti.style.opacity = "1";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.transition = "all 2s ease-out";

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.style.transform = `translate(${(Math.random() - 0.5) * 300}px, -${
          Math.random() * 250 + 100
        }px) rotate(${Math.random() * 720}deg)`;
        confetti.style.opacity = "0";
      }, 50);

      setTimeout(() => confetti.remove(), 2100);
    }
  }
}

/* ====================================================================
   12. WEDDING FAQ ACCORDION
   =================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question-btn");
    const panel = item.querySelector(".faq-answer-panel");

    if (!questionBtn || !panel) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other panels
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          const otherPanel = other.querySelector(".faq-answer-panel");
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current panel
      if (!isActive) {
        item.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        panel.style.maxHeight = null;
      }
    });
  });
}

/* ====================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
