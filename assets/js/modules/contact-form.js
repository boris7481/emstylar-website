// EMSTYLAR — Formulaire de contact
// Validation appuyée sur les contraintes HTML5 natives (required, type=email...) ;
// ce module se contente d'afficher visuellement les champs invalides au moment
// de la soumission. L'envoi réel (Formspree) sera activé une fois l'URL définitive
// renseignée dans l'attribut action du formulaire.

export function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const fields = Array.from(form.querySelectorAll(".form-input, .form-textarea, .form-select"));

  fields.forEach((field) => {
    field.addEventListener("input", () => field.classList.remove("is-invalid"));
    field.addEventListener("blur", () => {
      field.classList.toggle("is-invalid", !field.checkValidity());
    });
  });

  form.addEventListener("submit", (event) => {
    if (form.checkValidity()) return;

    event.preventDefault();

    let firstInvalid = null;
    fields.forEach((field) => {
      const isValid = field.checkValidity();
      field.classList.toggle("is-invalid", !isValid);
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    firstInvalid?.focus();
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);
