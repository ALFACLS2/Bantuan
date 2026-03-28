async function loadFAQ() {
  const page = document.getElementById("faqPage");

  const res = await fetch("./faq.html?v=10");
  const html = await res.text();

  page.innerHTML = html;
  page.classList.add("active");
}

function closeFAQ() {
  const page = document.getElementById("faqPage");
  page.classList.remove("active");

  setTimeout(() => {
    page.innerHTML = "";
  }, 300);
}

function toggleFAQ(el) {
  const item = el.parentElement;
  item.classList.toggle("active");
}
