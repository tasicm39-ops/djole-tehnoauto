const MAP_EMBED_GOOGLE =
  "https://www.google.com/maps?q=43.4488825,21.7413246&z=17&output=embed";
/** OpenStreetMap — često radi u WebView-u (Messenger) gde Google iframe biva blokiran. */
const MAP_EMBED_OSM =
  "https://www.openstreetmap.org/export/embed.html?bbox=21.728%2C43.442%2C21.754%2C43.456&layer=mapnik&marker=43.4488825%2C21.7413246";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const mapEmbed = document.getElementById("map-embed");
  if (mapEmbed) {
    const mq = window.matchMedia("(max-width: 900px)");
    const applyMapSrc = () => {
      mapEmbed.src = mq.matches ? MAP_EMBED_OSM : MAP_EMBED_GOOGLE;
    };
    applyMapSrc();
    mq.addEventListener("change", applyMapSrc);
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
