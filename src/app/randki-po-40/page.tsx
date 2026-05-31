import { keywordsForPath } from "@/lib/keywords-routes";
import { buildMetadata } from "@/lib/seo";
import { SegmentPage } from "../_components/SegmentPage";

export const metadata = buildMetadata({
  title: "Randki po 40 — portal randkowy dla dojrzałych singli | Randki40",
  description:
    "Randki po 40 online — poznaj dojrzałego partnera w swoim wieku. Tysiące singli 35–55 w całej Polsce. Darmowa rejestracja, pełna dyskrecja. 18+.",
  path: "/randki-po-40",
  keywords: keywordsForPath("/randki-po-40"),
});

export default function RandkiPo40Page() {
  return (
    <SegmentPage
      path="/randki-po-40"
      badge="Randki 40+"
      h1="Randki po 40 — poznaj dojrzałego partnera online"
      subtitle="Masz 40+ lat i wiesz, czego szukasz. Tu nie ma miejsca na gry — tylko realny kontakt z osobami w Twoim wieku i sytuacji życiowej."
      ctaLabel="Dołącz za darmo"
      stats={[
        { value: "5K+", label: "singli 35–55 online" },
        { value: "16", label: "miast w Polsce" },
        { value: "100%", label: "dyskrecji" },
        { value: "24/7", label: "aktywnych" },
      ]}
      benefits={[
        {
          icon: "🧭",
          title: "Jasność intencji",
          text: "Po 40-tce wiesz, czego chcesz. Tu nie chodzi o zbieranie matchów — chodzi o realny kontakt z kimś w podobnym miejscu w życiu.",
        },
        {
          icon: "👥",
          title: "Baza 35–55 lat",
          text: "Filtry wiekowe działają. Widzisz tylko osoby w Twoim przedziale wiekowym — w całej Polsce, z możliwością filtrowania po mieście.",
        },
        {
          icon: "🔒",
          title: "Dyskrecja i powaga",
          text: "Bez wystawiania się na widoku internetu. Kontaktujesz się tylko z tymi, których sam wybierzesz. Profil anonimowy do momentu, gdy sam zdecydujesz.",
        },
      ]}
      testimonials={[
        {
          quote: "Wróciłem do randkowania po 3 latach przerwy. Nie spodziewałem się, że tak szybko znajdę kogoś w moim wieku z głową na karku.",
          author: "Marcin",
          meta: "43 lata, Wrocław",
        },
        {
          quote: "Inne portale pełne są dwudziestolatków. Tu trafiałam wyłącznie na osoby w podobnej sytuacji życiowej. Mniej gierek, więcej konkretów.",
          author: "Ewa",
          meta: "46 lat, Kraków",
        },
        {
          quote: "Zależy mi na dyskrecji i poważnym podejściu. Tu jest i jedno, i drugie — bez zbędnych formalności.",
          author: "Andrzej",
          meta: "49 lat, Warszawa",
        },
      ]}
      faq={[
        {
          q: "Które portale randkowe są najlepsze dla osób po 40?",
          a: "Randki40.pl to własny portal 40+ z rejestracją i Premium przez Stripe. Alternatywy to Sympatia.pl i Edarling — bazy 35–55 lat. Kluczem jest wybór platformy z odpowiednią bazą wiekową.",
        },
        {
          q: "Jak napisać profil randkowy po 40, żeby przyciągnąć właściwe osoby?",
          a: "Kluczowe są aktualne zdjęcia i konkretny opis — co lubisz, czego szukasz, jak wygląda Twój tydzień. Unikaj frazesów. Osoby po 40 cenią bezpośredniość.",
        },
        {
          q: "Czy warto szukać partnera przez internet mając 40+?",
          a: "Zdecydowanie. Ponad 30% par w Polsce zawieranych w przedziale 35–55 lat zaczęło się online. Kluczem jest wybór platformy z odpowiednią bazą wiekową i jasne komunikowanie oczekiwań.",
        },
        {
          q: "Jak rozmawiać na randkach po długiej przerwie?",
          a: "Bądź naturalny — masz za sobą lata doświadczeń, to atut. Zaproponuj krótkie spotkanie (kawa, spacer) szybko, nie przeciągaj fazy pisania.",
        },
        {
          q: "Czy na Randki40 są osoby tylko z dużych miast?",
          a: "Nie — obsługujemy 16 polskich miast, od Warszawy i Krakowa po Rzeszów, Białystok i Bydgoszcz. Randki po 40 są dostępne niezależnie od miejsca zamieszkania.",
        },
      ]}
      finalTitle="Twój następny rozdział zaczyna się teraz"
      finalSubtitle="Tysiące dojrzałych singli online. Dołącz za darmo i zacznij rozmawiać — dyskretnie, bez zobowiązań, w swoim tempie."
    />
  );
}
