import en from "@constants/en.json";
import es from "@constants/es.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};
export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...es, ...en };
  return es;
};
