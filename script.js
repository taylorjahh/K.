/* =================================================================
   FOR YOU, WITH LOVE — script.js
   -----------------------------------------------------------------
   Everything you're likely to want to change lives in the CONFIG
   object right below. You shouldn't need to touch anything past
   the "DO NOT NEED TO EDIT BELOW THIS LINE" marker.
   ================================================================= */

const CONFIG = {

  /* ✏️ PASSWORD — numbers only */
  password: "270306",

  /* ✏️ NAMES shown in the navbar logo, e.g. "Y&M" */
  namesShort: "K.",

  /* ✏️ BIRTHDAY DATE — the countdown target. Format: "YYYY-MM-DDTHH:mm:ss" */
  birthdayDate: "2027-03-27T00:00:00",

  /* ✏️ WELCOME SECTION TEXT */
  welcome: {
    title: "Welcome to your little corner of memories ♡",
    subtext: "A tiny website made with lots of love, just for you.",
  },

  /* ✏️ MEMORY GALLERY — add, remove, or reorder freely.
     Put your own images in assets/images/ and update the "src" below. */
  memories: [
    { src: "assets/images/memory1.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory2.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory3.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory4.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory5.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory6.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory7.jpg", caption: "My favorite person, every time♡" },
    { src: "assets/images/memory8.jpg", caption: "My favorite person, every time♡" },
  ],

  /* ✏️ THE LETTER — one object per page. Add or remove pages freely. */
  letterPages: [
 {
  title: "Dear Kaila...",
  text: "Web yang aku buat ini bukan nunjukin kalo aku jago ngoding atau mau pamer kata-kata. Tapi karena aku pengen ada sesuatu yang bisa kamu buka kapan aja pas lagi senang, pas lagi sedih, atau pas lagi butuh diingetin kalau kamu itu orang yang berarti buat aku. You deserve a whole library written about how beautiful you really are. Isi dari webnya sangat campur aduk ada cerita, ada ucapan, ada best memories.\n\nDi tiap halaman ada kata-kata yang pengen aku bilang langsung ke kamu, cuma kali ini aku tulis biar kamu bisa baca ulang kapan pun. Semoga tiap barisnya ngingetin kamu kalau kamu itu istimewa selalu punya tempat hangat buat orang-orang di sekitar kamu. Aku ga tau apa yang lagi kamu jalanin atau apa yang kamu tahan sendiri. Tapi aku selalu berharap hatimu kuat, dan semoga langkahmu tetap tegak meski banyak hal yang ga kamu bagi ke orang lain, Tapi disisi lain aku mau banget jadi orang yang kamu cari pertama kali disaat kamu butuh apapun bahkan untuk hal-hal kecil apapun itu. Aku juga suka ketika kamu datang lalu mengadu dan bercerita tentang lelahnya hari ini, dan itu buat aku merasa ternyata keberadaan ku sangat dihargai, please turunin gengsi kamu ke aku. Jangan ragu buat cerita ke aku ya, Janji?"
},

{
  title: "Kenal kamu...",
  text: "Kadang, hidup punya cara lucu untuk ngenalin kita sama orang-orang yang nantinya akan punya tempat khusus di hati. Ada yang datang tiba-tiba, ada yang pelan-pelan, ada juga yang awalnya cuma “orang random” tapi lama-lama jadi bagian penting dari cerita hidup kita. Waktu berjalan, dan setiap ketemu kamu, aku makin sadar kalau “kenal” itu ternyata bukan cuma tau nama, umur, atau tinggal dimana. Kenal yang dimaksud itu ngerti gimana kamu ketawa sampe matamu menyipit, tau kalau kamu suka asbun, lawak, dan hal random lainnya dan sadar kalau di balik semua energi yang kamu tunjukin, ada sisi kamu yang suka nyimpen cerita sendiri.\n\nLucunya, aku ga pernah ngerencanain untuk jadi sedeket ini sama kamu. Semua kayak ngalir aja. Kenal kamu itu kayak nemu lagu yang langsung pas di telinga. Ga butuh waktu lama buat suka, tapi makin lama didenger, makin kerasa artinya. Dan sekarang, kalau ditanya hal apa yang paling berharga dari pertemuan kita, jawabannya sederhana: Kenal Kamu."
},

{
  title: "Perjalanan masing-masing...",
  text: "Kadang hidup punya jalannya sendiri untuk ngebawa kita ke tempat yang ga pernah kita sangka sebelumnya. Aku dan kamu sama-sama punya mimpi dan jalannya masing-masing dan walaupun sekarang kita ada di kota dan kampus yang berbeda. Kamu, dengan semangat dan perjuangan kamu ke unj. Dari awal aku udah tau kalau kamu punya power yang kuat buat ngejar apa yang kamu mau. unj sekarang jadi rumah kamu tumbuh, belajar, dan nemuin sisi-sisi baru dari dirimu sendiri. Aku bangga banget sama kamu. Tetap sehat-sehat ya disana.\n\nPerjalanan kita mungkin beda rute, beda suasana, bahkan beda cerita sehari-harinya. Aku dengan rutinitas macetnya di Dramaga, kamu dengan rutinitas panasnya Rawamangun wkwkwkwk. Tapi yang bikin aku seneng, meskipun kepisah jarak, kita ga pernah benar-benar jauh. Kita masih saling update, saling dukung, dan saling ngingetin kalau kita ga sendiri buat ngejalanin semua ini. Salam dari Dramaga, yg di Rawamangun sekarang lagi apa?..."
},

{
  title: "Harapan untuk kamu...",
  text: "Kamu udah melangkah sejauh ini, dari titik kita pertama kenal sampai sekarang masing-masing sibuk di kampus dan jalannya sendiri. Aku tau, ga semua hari itu indah. Ada capeknya, ada bingungnya, ada hari-hari di mana rasanya mau nyerah. Tapi aku yakin kamu pasti berhasil buat survive, dan itu bikin aku yakin kalau kamu punya kekuatan yang kadang bahkan kamu sendiri ga sadari.\n\nHarapan aku... Semoga semua mimpi yang kamu simpan pelan-pelan jadi nyata. Semoga kamu selalu ketemu orang-orang baik yang dukung kamu, yang bikin kamu ngerasa dihargai dan dicintai. Semoga kamu ga pernah kehilangan semangat buat terus maju, dan semoga setiap langkah kamu selalu ditemani rasa bahagia yang besar maupun kecil. I wanna see you win, with or without me. get everything that you deserve. become the person you wanna be. i wanna see you on top, living your best life, and being the person you told me you wanted to be. i'll always be proud of you.\n\nSelamat ulang tahun, Kai."
},

{
  title: "Terima kasih...",
  text: "Terima kasih udah mau kenal sama aku, bahkan ketika awalnya kita cuma dua orang biasa yang ketemu tanpa rencana. Terima kasih udah ngasih waktu, tawa, cerita, dan perhatian. Terima kasih udah bikin aku ngerasa dihargai, meskipun kita ga selalu intens ngobrol setiap hari.\n\nTerima kasih juga karena udah jadi bagian dari proses perjalanan aku. Dari kamu, aku belajar banyak hal tentang sabar, tentang komunikasi, tentang rasa sayang, dan tentang rasanya dicintai. Yang perlu kamu tau you mean everything to me and i'been trying to live my life without you, but i can't. i love you, always."
},

{
  title: "Coming Soon...",
  text: "Ditunggu update web di ulang tahun mu di 27 Maret 2027!!! Sampai ketemu di ucapan selanjutnya."
},
  ],

  /* ✏️ PLAYLIST — 15 songs, using Spotify's official embedded player
     (an <iframe> from open.spotify.com/embed/track/…), so songs play
     right here on the page instead of redirecting to Spotify.

     spotifyId is just the code at the end of a Spotify track link:
     https://open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX
                                     └────────── this part ─────────┘
     To swap a song: open it on Spotify → Share → Copy Song Link → paste
     the ID here. The IDs below already point to the correct songs. */
  playlist: [
    { title: "K.", artist: "Cigarettes After Sex", spotifyId: "2xGjfbXZnI8uQDhukoQURQ" },
    { title: "About You", artist: "The 1975", spotifyId: "3hEfpBHxgieRLz4t3kLNEg" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", spotifyId: "5XeFesFbtLpXzIVDNQP22n" },
    { title: "Lover", artist: "Taylor Swift", spotifyId: "44v9m12y9b5KhhBcfvZqOB" },
    { title: "Apocalypse", artist: "Cigarettes After Sex", spotifyId: "0yc6Gst2xkRu0eMLeRMGCX" },
    { title: "ZOOM", artist: "Jessi", spotifyId: "4IaxDf2FixiQXq0mW7key9" },
    { title: "All Too Well (10 Minute Version) (Taylor's Version)", artist: "Taylor Swift", spotifyId: "5enxwA8aAbwZbf5qCHORXi" },
    { title: "Heaven", artist: "Bryan Adams", spotifyId: "4LOgi2TAAoKU9ImfzRrCPO" },
    { title: "Radio", artist: "Lana Del Rey", spotifyId: "0ArwEweHsm1zP9KcgV7Q10" },
    { title: "august", artist: "Taylor Swift", spotifyId: "3hUxzQpSfdDqwM3ZTFQY0K" },
    { title: "Angel Baby", artist: "Troye Sivan", spotifyId: "7Lmc3T8BZNoDhoC3K9BxFE" },
    { title: "Unconditionally", artist: "Katy Perry", spotifyId: "009ImBOrIUlWgla8U05RAC" },
    { title: "Like I Can", artist: "Sam Smith", spotifyId: "2TeLIzFBe3hxkPR5FIQZut" },
    { title: "Infinity", artist: "Jaymes Young", spotifyId: "1TLwVV7m4TFZJrsG9qGVXh" },
    { title: "As It Was", artist: "Harry Styles", spotifyId: "4Dvkj6JhhA12EX05fT7y2e" },
  ],
};

/* =================================================================
   DO NOT NEED TO EDIT BELOW THIS LINE
   ================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initPasswordScreen();
  initNavbar();
  initReveal();
  initCountdown();
  initGallery();
  initBook();
  initPlaylist();
  initReduceMotion();
  initBackToTop();
});

/* ---------------------------------------------------------------
   PARTICLES — floating hearts / petals / sparkles in the background
   --------------------------------------------------------------- */
function initParticles() {
  const layer = document.getElementById("particle-layer");
  if (!layer) return;

  const symbols = ["♡", "❀", "✿", "✦", "✧", "•"];
  const count = window.innerWidth < 600 ? 14 : 24;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = 0.8 + Math.random() * 1.4;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 14;
    const delay = Math.random() * 14;
    const drift = (Math.random() * 80 - 40) + "px";

    el.style.left = left + "vw";
    el.style.bottom = "-5vh";
    el.style.fontSize = size + "rem";
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delay + "s";
    el.style.setProperty("--drift", drift);

    layer.appendChild(el);
  }
}

/* ---------------------------------------------------------------
   PASSWORD SCREEN
   --------------------------------------------------------------- */
function initPasswordScreen() {
  const form = document.getElementById("password-form");
  const input = document.getElementById("password-input");
  const errorEl = document.getElementById("password-error");
  const card = document.querySelector(".password-card");
  const passwordScreen = document.getElementById("password-screen");
  const mainSite = document.getElementById("main-site");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (value === CONFIG.password) {
      unlockSite(passwordScreen, mainSite);
    } else {
      errorEl.textContent = "Ayo masa kamu gatau, Try again!";
      card.classList.remove("shake");
      // force reflow so the animation can replay
      void card.offsetWidth;
      card.classList.add("shake");
      input.value = "";
      input.focus();
    }
  });
}

function unlockSite(passwordScreen, mainSite) {
  const overlay = document.createElement("div");
  overlay.className = "unlock-overlay";
  overlay.innerHTML = "Opening Your Surprise♡";
  document.body.appendChild(overlay);

  setTimeout(() => {
    passwordScreen.style.display = "none";
    mainSite.hidden = false;
    document.body.style.overflow = "";
    // re-run reveal check now that the main site is visible
    checkReveals();
  }, 500);

  setTimeout(() => {
    overlay.remove();
  }, 1400);
}

/* ---------------------------------------------------------------
   NAVBAR — hamburger menu + smooth scroll close
   --------------------------------------------------------------- */
function initNavbar() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------------
   SCROLL REVEAL — fade/slide elements in as they enter view
   --------------------------------------------------------------- */
let revealObserver;
function initReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  checkReveals();
}
function checkReveals() {
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
    revealObserver.observe(el);
  });
}

/* ---------------------------------------------------------------
   COUNTDOWN — real-time countdown to CONFIG.birthdayDate
   --------------------------------------------------------------- */
function initCountdown() {
  const target = new Date(CONFIG.birthdayDate).getTime();
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");
  const grid = document.getElementById("countdown-grid");
  const celebration = document.getElementById("countdown-celebration");

  if (!daysEl) return;

  function tick() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      grid.hidden = true;
      celebration.hidden = false;
      spawnCelebrationBurst();
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  tick();
  const timer = setInterval(tick, 1000);
}

function spawnCelebrationBurst() {
  const layer = document.getElementById("particle-layer");
  if (!layer) return;
  const symbols = ["♡", "✦", "✧", "❀", "✿"];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-5vh";
    el.style.fontSize = 1 + Math.random() * 1.6 + "rem";
    el.style.animationDuration = 4 + Math.random() * 4 + "s";
    el.style.animationDelay = Math.random() * 2 + "s";
    el.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");
    layer.appendChild(el);
  }
}

/* ---------------------------------------------------------------
   MEMORY GALLERY — swipe / drag / buttons carousel
   --------------------------------------------------------------- */
function initGallery() {
  const track = document.getElementById("gallery-track");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  const dotsWrap = document.getElementById("gallery-dots");
  if (!track) return;

  // Render slides from CONFIG.memories
  track.innerHTML = CONFIG.memories
    .map((m, i) => {
      const tilt = i % 2 === 0 ? "-2deg" : "2deg";
      return `
        <li class="gallery-slide">
          <div class="polaroid" style="--tilt:${tilt}">
            <img src="${m.src}" alt="${m.caption}" loading="lazy"
                 onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23FFD9E8%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23C77E98%22 font-family=%22sans-serif%22 font-size=%2222%22%3EAdd a photo ♡%3C/text%3E%3C/svg%3E'" />
            <p class="polaroid-caption">${m.caption}</p>
          </div>
        </li>`;
    })
    .join("");

  const slides = Array.from(track.children);
  let index = 0;
  let startX = 0;
  let currentX = 0;
  let dragging = false;

  // Dots
  dotsWrap.innerHTML = slides.map((_, i) => `<span class="gallery-dot${i === 0 ? " active" : ""}"></span>`).join("");
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));

  // Pointer-based drag (works for touch + mouse)
  track.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    currentX = 0;
    track.classList.add("dragging");
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    currentX = e.clientX - startX;
    track.style.transform = `translateX(calc(-${index * 100}% + ${currentX}px))`;
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    track.classList.remove("dragging");
    if (currentX < -60) goTo(index + 1);
    else if (currentX > 60) goTo(index - 1);
    else goTo(index);
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointerleave", endDrag);
  track.addEventListener("pointercancel", endDrag);

  goTo(0);
  window.addEventListener("resize", () => goTo(index));
}

/* ---------------------------------------------------------------
   LETTER BOOK — cover open + page flip (swipe/drag/click/keyboard)
   --------------------------------------------------------------- */
function initBook() {
  const cover = document.getElementById("book-cover");
  const book = document.getElementById("book");
  const openBtn = document.getElementById("open-book-btn");
  const closeBtn = document.getElementById("book-close");
  const pagesWrap = document.getElementById("book-pages");
  const prevBtn = document.getElementById("page-prev");
  const nextBtn = document.getElementById("page-next");
  const indicator = document.getElementById("page-indicator");
  if (!book) return;

  pagesWrap.innerHTML = CONFIG.letterPages
    .map(
      (p, i) => `
      <article class="book-page${i === 0 ? " current" : " next-page"}" data-index="${i}">
        <div class="book-page-inner">
          <p class="page-title">${p.title}</p>
          <p class="page-text">${p.text}</p>
        </div>
      </article>`
    )
    .join("");

  const pages = Array.from(pagesWrap.children);
  let current = 0;

  function render() {
    pages.forEach((p, i) => {
      p.classList.remove("current", "next-page", "prev-page");
      if (i === current) p.classList.add("current");
      else if (i < current) p.classList.add("prev-page");
      else p.classList.add("next-page");
    });
    indicator.textContent = `${current + 1} / ${pages.length}`;
  }

  function goTo(i) {
    current = Math.max(0, Math.min(pages.length - 1, i));
    render();
  }

  openBtn.addEventListener("click", () => {
    cover.classList.add("hidden-cover");
    book.hidden = false;
    render();
  });
  closeBtn.addEventListener("click", () => {
    book.hidden = true;
    cover.classList.remove("hidden-cover");
  });

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  document.addEventListener("keydown", (e) => {
    if (book.hidden) return;
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "Escape") {
      book.hidden = true;
      cover.classList.remove("hidden-cover");
    }
  });

  // swipe / drag on the book pages
  let startX = 0;
  let dragging = false;
  pagesWrap.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    pagesWrap.setPointerCapture(e.pointerId);
  });
  pagesWrap.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    const delta = e.clientX - startX;
    if (delta < -50) goTo(current + 1);
    else if (delta > 50) goTo(current - 1);
  });

  render();
}

/* ---------------------------------------------------------------
   PLAYLIST — renders the track list and plays songs right on the
   page using Spotify's own official embedded player (an iframe
   pointed at open.spotify.com/embed/track/…). This is Spotify's
   legitimate embed mechanism, so nothing is downloaded or streamed
   through an unofficial route — it's the same player Spotify
   provides for embedding tracks on any website.
   --------------------------------------------------------------- */
function initPlaylist() {
  const listEl = document.getElementById("playlist-list");
  const embedFrame = document.getElementById("spotify-embed");
  const prevBtn = document.getElementById("player-prev");
  const nextBtn = document.getElementById("player-next");
  if (!listEl || !embedFrame) return;

  listEl.innerHTML = CONFIG.playlist
    .map(
      (song, i) => `
      <li class="playlist-item" data-index="${i}" tabindex="0">
        <span class="playlist-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="playlist-titles">
          <span class="playlist-title">${song.title}</span><br/>
          <span class="playlist-artist">${song.artist}</span>
        </span>
        <span class="playlist-play-icon">♪</span>
      </li>`
    )
    .join("");

  const items = Array.from(listEl.children);
  let currentIndex = 0;

  function setActive(i, autoplay) {
    currentIndex = ((i % CONFIG.playlist.length) + CONFIG.playlist.length) % CONFIG.playlist.length;
    const song = CONFIG.playlist[currentIndex];
    items.forEach((el, ei) => el.classList.toggle("active", ei === currentIndex));
    const autoplayParam = autoplay ? "&autoplay=1" : "";
    embedFrame.src = `https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0${autoplayParam}`;
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => setActive(i, true));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(i, true);
      }
    });
  });

  prevBtn.addEventListener("click", () => setActive(currentIndex - 1, true));
  nextBtn.addEventListener("click", () => setActive(currentIndex + 1, true));

  // Load the first song into the player without autoplaying
  // (browsers block audio autoplay before the person interacts anyway).
  setActive(0, false);
}

/* ---------------------------------------------------------------
   REDUCE MOTION TOGGLE
   --------------------------------------------------------------- */
function initReduceMotion() {
  const checkbox = document.getElementById("reduce-motion-checkbox");
  if (!checkbox) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    checkbox.checked = true;
    document.body.classList.add("reduce-motion");
  }

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("reduce-motion", checkbox.checked);
  });
}

/* ---------------------------------------------------------------
   BACK TO TOP / BEGINNING
   --------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
