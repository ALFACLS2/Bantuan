async function loadFAQ() {
  const page = document.getElementById("faqPage");

  try {
    const res = await fetch("./faq.html");
    const html = await res.text();

    page.innerHTML = html;
    page.classList.add("active");

  } catch {
    alert("FAQ gagal dimuat 😏");
  }
}

function closeFAQ() {
  const page = document.getElementById("faqPage");

  page.classList.remove("active");

  setTimeout(() => {
    page.innerHTML = "";
  }, 300);
}
