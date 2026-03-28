async function loadFAQ(btn) {
  btn.classList.add("clicked");

  setTimeout(async () => {
    try {
      const res = await fetch("./faq.html");
      const html = await res.text();

      const page = document.getElementById("faqPage");
      page.innerHTML = html;
      page.classList.add("active");

    } catch (err) {
      alert("FAQ gagal dimuat 😏");
    }

    btn.classList.remove("clicked");
  }, 150);
}

function closeFAQ() {
  document.getElementById("faqPage").classList.remove("active");
}
