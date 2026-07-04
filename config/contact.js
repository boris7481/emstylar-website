// EMSTYLAR — Coordonnées de contact (source unique de vérité)
// Le numéro de téléphone/WhatsApp, l'email et les horaires ne doivent exister
// qu'ici. Un changement futur ne se fait qu'à cet endroit.

export const contact = {
  phone: "+237 696 02 36 73",
  phoneHref: "tel:+237696023673",
  whatsappNumber: "237696023673",
  whatsappBaseUrl: "https://wa.me/237696023673",
  // Placeholder — adresse email à confirmer avec l'atelier.
  email: "Emostyvimlarissa@gmail.com",
  emailHref: "mailto:Emostyvimlarissa@gmail.com",
  // Horaires provisoires, à confirmer (voir badge "Placeholder" affiché sur le site).
  hoursPlaceholder: true,
  hours: [
    { days: "Lundi – Vendredi", hours: "8h00 – 18h00" },
    { days: "Samedi", hours: "9h00 – 16h00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  // Construit un lien wa.me avec un message pré-rempli optionnel.
  buildWhatsAppLink(message) {
    return message
      ? `${this.whatsappBaseUrl}?text=${encodeURIComponent(message)}`
      : this.whatsappBaseUrl;
  },
  // Formate chaque créneau en une ligne "Jours : Horaires" (ex. pour l'atelier-card de about.html).
  get hoursLines() {
    return this.hours.map((entry) => `${entry.days} : ${entry.hours}`);
  },
};

export default contact;
