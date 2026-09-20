document.addEventListener("DOMContentLoaded", () => {
  const g = document.querySelector("#projects-grid");
  if (!g) return;
  const bs = document.querySelectorAll(".filter-btn");
  function render(f = "All") {
    const a =
      f === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category.includes(f));
    g.innerHTML = a.length
      ? a
          .map(
            (p) =>
              `<article class="card project-card"><div class="project-media"><span>${p.imageLabel}</span></div><div class="project-body"><div class="meta">${p.status} · ${p.category}</div><h3>${p.title}</h3><p>${p.description}</p><div class="tag-list">${p.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div><div class="project-actions">${p.github ? `<a class="btn-secondary" href="${p.github}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>` : ""}${p.demo ? `<a class="btn-primary" href="${p.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ""}</div></div></article>`,
          )
          .join("")
      : '<div class="empty-state">No projects in this category yet.</div>';
  }
  bs.forEach((b) =>
    b.addEventListener("click", () => {
      bs.forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.filter);
    }),
  );
  render();
});
