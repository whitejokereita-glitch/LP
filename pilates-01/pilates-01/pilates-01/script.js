document.getElementById("year").textContent = String(new Date().getFullYear());

const accordion = document.querySelector("[data-accordion]");
if (accordion) {
  const buttons = accordion.querySelectorAll(".faq__q");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      buttons.forEach((b) => b.setAttribute("aria-expanded", "false"));
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });
}
