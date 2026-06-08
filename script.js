const root = document.documentElement;
const siteHeader = document.querySelector(".site-header");

const updateHeaderOffset = () => {
  if (!siteHeader) return;
  const height = Math.ceil(siteHeader.getBoundingClientRect().height);
  root.style.setProperty("--header-offset", `${height}px`);
};

updateHeaderOffset();
window.addEventListener("load", updateHeaderOffset);
window.addEventListener("resize", updateHeaderOffset);

if (siteHeader && "ResizeObserver" in window) {
  new ResizeObserver(updateHeaderOffset).observe(siteHeader);
}

document.querySelectorAll(".site-header img").forEach((image) => {
  image.addEventListener("load", updateHeaderOffset);
});

const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0.1, 0.25, 0.5],
  }
);

sections.forEach((section) => observer.observe(section));

const copyButton = document.querySelector("[data-copy-citation]");
const citation = document.querySelector("#citation");

if (copyButton && citation) {
  copyButton.addEventListener("click", async () => {
    const text = citation.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1400);
    } catch {
      copyButton.textContent = "Select BibTeX";
    }
  });
}
