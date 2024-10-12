export const languages: Record<string, { code: string; name: string }> = {
  en: { code: "en", name: "English" },
  es: { code: "es", name: "Español" },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.index": "Inicio",
    "nav.rooms": "Habitaciones",
    "nav.about": "Acerca de",
    "nav.experiences": "Experiencias",
  },
  en: {
    "nav.index": "Home",
    "nav.rooms": "All Rooms",
    "nav.about": "About Us",
    "nav.experiences": "Experiences",
  },
} as const;

export const routes = {
  en: {
    index: "home",
    rooms: "rooms",
    about: "about",
    experiences: "experiences",
  },
  es: {
    index: "home",
    rooms: "rooms",
    about: "about",
    experiences: "experiences",
  },
};
