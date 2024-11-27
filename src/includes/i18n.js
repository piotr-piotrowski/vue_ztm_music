import { createI18n } from "vue-i18n"
import en from "@/locales/en"
import pl from "@/locales/pl"

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    pl,
  },
})
