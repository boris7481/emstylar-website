// EMSTYLAR — Identité de l'entreprise (source unique de vérité)
// Toute autre partie du site (HTML, autres fichiers config/) doit lire ces
// valeurs plutôt que de les recopier en dur.

const identity = {
  name: "EMSTYLAR",
  slogan: "L'œil du Design",
  city: "Yaoundé",
  district: "Nkolbisson",
  landmark: "Usine des Eaux",
  country: "Cameroun",
  logoAlt: "Logo EMSTYLAR",
};

export const company = {
  ...identity,
  // Composée à partir des champs ci-dessus : ne jamais réécrire cette phrase
  // en dur ailleurs, modifier les champs sources suffit.
  tagline: `Atelier de mode, couture et stylisme à ${identity.district} (${identity.landmark}), ${identity.city} — ${identity.country}.`,
};

export default company;
