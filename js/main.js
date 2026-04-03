document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const animatedSections = [
    document.getElementById("usluge"),
    document.getElementById("kako"),
  ].filter(Boolean);

  if (animatedSections.length > 0 && window.IntersectionObserver) {
    // threshold 0.5 je na uskim ekranima često nemoguć (sekcija je viša od viewporta),
    // pa is-visible nikad ne legne — kartice ostaju nevidljive.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "60px 0px 80px 0px",
      },
    );
    animatedSections.forEach((section) => observer.observe(section));
  } else {
    animatedSections.forEach((section) => section.classList.add("is-visible"));
  }

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName");
      const emailAddress = document.getElementById("emailAddress");
      const messageText = document.getElementById("messageText");

      if (!fullName || !emailAddress || !messageText) return;

      const nameValue = fullName.value.trim();
      const emailValue = emailAddress.value.trim();
      const messageValue = messageText.value.trim();

      if (!nameValue || !emailValue || !messageValue) {
        alert("Popunite sva polja u kontakt formi.");
        return;
      }

      const subject = encodeURIComponent(`Upit sa sajta - ${nameValue}`);
      const body = encodeURIComponent(
        `Ime i prezime: ${nameValue}\n` +
          `E-mail: ${emailValue}\n\n` +
          `Poruka:\n${messageValue}`,
      );

      window.location.href = `mailto:djoletehnoauto@yahoo.com?subject=${subject}&body=${body}`;
    });
  }
});
