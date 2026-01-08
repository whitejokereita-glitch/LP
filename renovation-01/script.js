// スムーススクロール（#anchor）
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  if (!id || id === "#") return;

  const el = document.querySelector(id);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// フォーム疑似送信（デモ）
// 実案件では action を Formspree / Googleフォーム等に変える
const form = document.getElementById("inquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name")?.value?.trim();
    const area = form.querySelector("#area")?.value?.trim();
    const msg  = form.querySelector("#msg")?.value?.trim();

    if (!name || !area || !msg) {
      alert("必須項目を入力してください。");
      return;
    }

    alert("送信デモ：内容を受け付けました！\n（実運用ではフォーム送信先を設定します）");
    form.reset();
  });
}
