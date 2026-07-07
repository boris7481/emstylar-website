// EMSTYLAR — Modale "Laisser un témoignage" (ouverture, fermeture, piège à
// focus, validation). Validation appuyée sur les contraintes HTML5 natives ;
// ce module se contente d'afficher visuellement les champs invalides au
// moment de la soumission (aucun envoi réel tant que l'URL Formspree n'est
// pas définitive — voir contact-form.js pour le même principe).

export function initTestimonialModal() {
  const openButton = document.getElementById("testimonial-open-btn");
  const modal = document.getElementById("testimonial-modal");
  if (!openButton || !modal) return;

  const closeTargets = Array.from(modal.querySelectorAll("[data-modal-close]"));
  const closeButton = modal.querySelector(".modal__close");
  const form = modal.querySelector(".testimonial-form");
  const focusable = Array.from(
    modal.querySelectorAll(
      "a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex='-1'])"
    )
  );

  let lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("has-modal-open");
    closeButton?.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("has-modal-open");
    lastFocused?.focus();
  }

  openButton.addEventListener("click", open);
  closeTargets.forEach((target) => target.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      close();
    } else if (event.key === "Tab") {
      trapFocus(event, focusable);
    }
  });

  if (form) initFormValidation(form);
}

function initFormValidation(form) {
  const simpleFields = Array.from(form.querySelectorAll(".form-input, .form-textarea"));
  const ratingGroup = form.querySelector(".star-rating");
  const ratingInputs = ratingGroup ? Array.from(ratingGroup.querySelectorAll(".star-rating__input")) : [];

  simpleFields.forEach((field) => {
    field.addEventListener("input", () => field.classList.remove("is-invalid"));
  });
  ratingInputs.forEach((input) => {
    input.addEventListener("change", () => ratingGroup.classList.remove("is-invalid"));
  });

  form.addEventListener("submit", (event) => {
    if (form.checkValidity()) return;

    event.preventDefault();

    let firstInvalid = null;
    simpleFields.forEach((field) => {
      const isValid = field.checkValidity();
      field.classList.toggle("is-invalid", !isValid);
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    if (ratingGroup) {
      const hasRating = ratingInputs.some((input) => input.checked);
      ratingGroup.classList.toggle("is-invalid", !hasRating);
      if (!hasRating && !firstInvalid) firstInvalid = ratingInputs[ratingInputs.length - 1];
    }

    firstInvalid?.focus();
  });
}

// EMSTYLAR — Bouton "Voir plus de témoignages"
// Affiche les témoignages supplémentaires (déjà présents dans le HTML,
// masqués via l'attribut natif `hidden`). Chaque carte porte aussi
// `data-reveal` : l'apparition en fondu est donc gérée automatiquement par
// l'observer déjà actif de reveal.js (aucune animation dupliquée ici).
export function initShowMoreTestimonials() {
  const button = document.getElementById("testimonials-more-btn");
  const grid = document.querySelector(".testimonial-grid");
  if (!button || !grid) return;

  const extraCards = Array.from(grid.querySelectorAll("[data-testimonial-extra]"));
  if (!extraCards.length) return;

  button.addEventListener("click", () => {
    extraCards.forEach((card) => {
      card.hidden = false;
    });

    button.hidden = true;

    const firstNewName = extraCards[0].querySelector(".testimonial-card__name");
    if (firstNewName) {
      firstNewName.setAttribute("tabindex", "-1");
      firstNewName.focus();
    }
  });
}

function trapFocus(event, elements) {
  if (elements.length === 0) return;

  const first = elements[0];
  const last = elements[elements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTestimonialModal();
  initShowMoreTestimonials();
});
