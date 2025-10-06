/* ======================================================
 🌀 ANIMATED ROWS
====================================================== */
const rows = [
  { el: document.getElementById("row1"), dir: -1, speed: 0.4 },
  { el: document.getElementById("row2"), dir: -1, speed: 0.2 },
  { el: document.getElementById("row3"), dir: -1, speed: 0.3 },
];
const offsets = [0, 0, 0];

function animateRows() {
  rows.forEach((row, i) => {
    if (!row.el) return;
    offsets[i] += row.speed * row.dir;
    row.el.style.transform = `translateX(${offsets[i]}px)`;

    const width = row.el.scrollWidth / 2;
    if (Math.abs(offsets[i]) >= width) offsets[i] = 0;
  });
  requestAnimationFrame(animateRows);
}
animateRows();

/* ======================================================
 🔁 TAB SWITCHING
====================================================== */
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) =>
        t.classList.remove(
          "active-tab",
          "text-pink-400",
          "border-b-2",
          "border-pink-400"
        )
      );
      tab.classList.add(
        "active-tab",
        "text-pink-400",
        "border-b-2",
        "border-pink-400"
      );

      contents.forEach((c) => c.classList.add("hidden"));
      const target = document.querySelector(`#tab-${tab.dataset.tab}`);
      if (target) target.classList.remove("hidden");

      if (tab.dataset.tab === "github") initializePortfolioRepos();
      if (tab.dataset.tab === "design") initializePortfolioImages();
      if (tab.dataset.tab === "motion") initializePortfolioVideos();
    });
  });
}

/* ======================================================
 💻 REPOSITORIES
====================================================== */
function initializePortfolioRepos() {
  const repos = [
    {
      name: "UsekaiWeb",
      description: "Website untuk aplikasi Usekai, menggunakan Blade.",
      url: "https://github.com/nakzuwu/UsekaiWeb",
      language: "Laravel",
    },
    {
      name: "VisionAidBackend",
      description: "Backend untuk aplikasi VisionAid, menggunakan Python.",
      url: "https://github.com/nakzuwu/VisionAidBackend",
      language: "Python",
    },
    {
      name: "VisionAidFrontend",
      description: "Frontend untuk aplikasi VisionAid, menggunakan Dart.",
      url: "https://github.com/nakzuwu/VisionAidFrontend",
      language: "Flutter",
    },
    {
      name: "Reika-Bot-Discord",
      description: "Discord bot yang dibuat dengan Python.",
      url: "https://github.com/nakzuwu/Reika-Bot-Discord",
      language: "Python",
    },
    {
      name: "WarisanBiru",
      description: "Sebuah Game Pembelajaran mengenai Terumbu Karang.",
      url: "https://github.com/nakzuwu/WarisanBiru",
      language: "C#",
    },
  ];

  const container = document.querySelector(".portfolio-repos");
  container.innerHTML = "";

  repos.forEach((repo) => {
    const card = document.createElement("div");
    card.className =
      "bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full";
    card.innerHTML = `
      <div class="p-4">
        <h4 class="text-lg font-semibold text-pink-400 mb-1">${repo.name}</h4>
        <p class="text-gray-400 text-sm mb-3">${repo.description}</p>
        <p class="text-xs text-gray-500 mb-2">Language: ${repo.language}</p>
        <a href="${repo.url}" target="_blank"
           class="block text-center bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 transition-colors duration-300 rounded-md">
           View on GitHub
        </a>
      </div>`;
    container.appendChild(card);
  });
}

/* ======================================================
 🖼️ DESIGN IMAGES
====================================================== */
function initializePortfolioImages() {
  const images = [
    "images/ALTAIR 2.png",
    "images/Daiyan @nkzdzn.png",
    "images/Reika Wallpaper 16x9.png",
    "images/Rhea Wallpaper 16x9.png",
    "images/Surtr - nkzdzn.png",
    "images/ajam posting.png",
    "images/apex.png",
    "images/banner gform.png",
    "images/banner.png",
    "images/edit 101logo.png",
    "images/ff16.png",
    "images/hayasuki banner.png",
    "images/hg arpg.png",
    "images/hg jrpg.png",
    "images/hg minecraft.png",
    "images/holo.png",
    "images/holosimp gamer.png",
    "images/holosimp gamer2.png",
    "images/horizon3.png",
    "images/ironman.png",
    "images/kimi.png",
    "images/kimiofcl.png",
    "images/logo shelter2 text.png",
    "images/miyabi.png",
    "images/monody no wm.png",
    "images/moral.png",
    "images/nilaou.png",
    "images/payment.png",
    "images/phsmo.png",
    "images/poster 1.png",
    "images/poster 2.png",
    "images/poster 3.png",
    "images/poster 4.png",
    "images/poster 5.png",
    "images/pubg.jpg",
    "images/rappa.png",
    "images/reika banner facebook.png",
    "images/shelter wm.png",
    "images/sparrwo.png",
    "images/tes apex.png",
  ];

  const container = document.querySelector(".portfolio-images");
  container.innerHTML = "";
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Design preview";
    img.className =
      "rounded-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105 mb-4";
    container.appendChild(img);
  });
}

/* ======================================================
 🎞️ MOTION VIDEOS
====================================================== */
function initializePortfolioVideos() {
  const videos = [
    "videos/Closing.mp4",
    "videos/brb.mp4",
    "videos/intro.mp4",
    "videos/makaine_2.mp4",
    "videos/opening.mp4",
    "videos/sato.mp4",
  ];

  const container = document.querySelector(".portfolio-videos");
  container.innerHTML = "";
  videos.forEach((src) => {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.className =
      "rounded-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105 mb-4";
    container.appendChild(video);
  });
}

/* ======================================================
 🚀 INIT
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initializePortfolioRepos();
});

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100; // semakin kecil = muncul lebih cepat

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
