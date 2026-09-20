document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar"),
    toggle = document.querySelector(".menu-toggle");
  if (toggle && nav)
    toggle.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
      const e = nav.classList.contains("mobile-open");
      toggle.setAttribute("aria-expanded", e);
      toggle.innerHTML = e
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
  const typing = document.getElementById("typing-text");
  if (typing) {
    const roles = [
      "Software Developer",
      "Full-Stack Developer",
      "AI/ML Enthusiast",
      "Data Science Learner",
    ];
    let r = 0,
      p = 0,
      d = false;
    const tick = () => {
      const w = roles[r];
      typing.textContent = d ? w.slice(0, --p) : w.slice(0, ++p);
      let t = d ? 55 : 85;
      if (!d && p === w.length) {
        t = 1300;
        d = true;
      } else if (d && p === 0) {
        d = false;
        r = (r + 1) % roles.length;
        t = 300;
      }
      setTimeout(tick, t);
    };
    tick();
  }
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
  const f = document.querySelector("#contact-form");
  if (f)
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const n = f.querySelector("[name=name]").value.trim(),
        m = f.querySelector("[name=email]").value.trim(),
        s = f.querySelector("[name=subject]").value.trim(),
        b = f.querySelector("[name=message]").value.trim();
      if (!n || !m || !s || !b) return alert("Please fill in all fields.");
      location.href = `mailto:rushikesh.sawale24@vit.edu?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(`Name: ${n}
Email: ${m}

${b}`)}`;
    });
});
