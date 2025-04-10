import EN from "./Lang/translateEn.json";
import KH from "./Lang/translateKh.json";

export const translateLauguage = (lang) => {
  let language = JSON.parse(JSON.stringify(EN));
  if (lang === "kh") {
    language = JSON.parse(JSON.stringify(KH));
  }

  const t = (e) => {
    return language[e];
  };

  return { t };
};
