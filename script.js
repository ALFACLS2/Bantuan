async function loadFAQ(btn) {
  try {
    const res = await fetch("./faq.html");
    const html = await res.text();

    const page = document.getElementById("faqPage");
    page.innerHTML = html;
    page.classList.add("active");

  } catch {
    alert("FAQ gagal dimuat 😏");
  }
}

function closeFAQ() {
  document.getElementById("faqPage").classList.remove("active");
}
