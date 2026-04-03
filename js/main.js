document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
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
