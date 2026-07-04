// EMSTYLAR — Configuration du formulaire de contact (source unique de vérité)
// L'endpoint Formspree est un placeholder tant que le compte Formspree réel
// n'est pas créé : ne jamais coder l'URL en dur ailleurs que dans ce fichier.

export const form = {
  // Placeholder — à remplacer par l'endpoint Formspree définitif.
  endpoint: "https://formspree.io/f/xxxxxxxx",
  method: "POST",
  validation: {
    // Validation HTML5 native (required, type="email", etc.) sur les champs du formulaire.
    native: true,
  },
  messages: {
    success: "Merci ! Votre message a bien été envoyé, nous revenons vers vous rapidement.",
    error:
      "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter sur WhatsApp.",
    invalid: "Merci de vérifier les champs indiqués avant d'envoyer le formulaire.",
  },
};

export default form;
