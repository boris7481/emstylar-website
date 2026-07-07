// EMSTYLAR — Configuration globale du site (source unique de vérité)

import { company } from "./company.js";

export const site = {
  projectName: `${company.name} — Site vitrine officiel`,
  version: "v0.11.0",
  environment: "development",
  copyrightHolder: company.name,
  year: new Date().getFullYear(),
};

export default site;
