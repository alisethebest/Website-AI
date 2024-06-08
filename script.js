document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]'); // Select all links with hashes
  links.forEach((link) => link.addEventListener("click", smoothScroll));

  function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});
