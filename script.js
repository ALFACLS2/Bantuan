async function loadFAQ(btn) {
  btn.style.background = "linear-gradient(90deg, #ff7a18, #ff3d81)";

  setTimeout(async () => {
    const res = await fetch("faq.html");
    const html = await res.text();

    const page = document.getElementById("faqPage");
    page.innerHTML = html;
    page.classList.add("active");

  }, 200);
}

function closeFAQ() {
  document.getElementById("faqPage").classList.remove("active");
}
