// EMSTYLAR — Liaison de la configuration centralisée (config/) au DOM
// Le HTML garde toujours un contenu correct par défaut (fallback statique,
// visible même sans JavaScript et lisible par les robots d'indexation) ; ce
// module se contente de le resynchroniser avec config/ au chargement, pour
// qu'un futur changement (téléphone, adresse, horaires...) ne nécessite
// qu'une seule modification, dans config/, au lieu d'une recherche dans
// chaque page HTML.

import { company } from "../../../config/company.js";
import { contact } from "../../../config/contact.js";
import { social } from "../../../config/social.js";
import { maps } from "../../../config/maps.js";
import { seo } from "../../../config/seo.js";
import { form } from "../../../config/form.js";
import { site } from "../../../config/site.js";

const CONFIG = { company, contact, social, maps, seo, form, site };

function resolve(path) {
  return path.split(".").reduce((value, key) => value?.[key], CONFIG);
}

export function applyConfig() {
  document.querySelectorAll("[data-config-text]").forEach((el) => {
    const value = resolve(el.dataset.configText);
    if (value !== undefined && value !== null) el.textContent = String(value);
  });

  document.querySelectorAll("[data-config-attr]").forEach((el) => {
    const [attr, path] = el.dataset.configAttr.split(":").map((part) => part.trim());
    const value = resolve(path);
    if (typeof value === "string") el.setAttribute(attr, value);
  });

  // Boutons WhatsApp avec message pré-rempli : le numéro vient toujours de
  // config/contact.js, seul le texte du message (propre à chaque page/carte)
  // reste dans le HTML.
  document.querySelectorAll("[data-whatsapp-message]").forEach((el) => {
    el.setAttribute("href", contact.buildWhatsAppLink(el.dataset.whatsappMessage));
  });
}

document.addEventListener("DOMContentLoaded", applyConfig);
