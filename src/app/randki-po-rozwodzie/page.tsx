import { buildMetadata } from "@/lib/seo";
import { SegmentPage } from "../_components/SegmentPage";

export const metadata = buildMetadata({
  title: "Randki po rozwodzie — portal randkowy dla singli po rozstaniu | Randki40",
  description:
    "Randki po rozwodzie online — nowy rozdział bez pośpiechu. Portal dla dojrzałych singli, którzy wracają do randkowania po rozstaniu. Dyskrecja, poważne intencje. 18+.",
  path: "/randki-po-rozwodzie",
  keywords: [
    "randki po rozwodzie",
    "portal randkowy po rozwodzie",
    "singli po rozstaniu",
    "randki 40+ po rozwodzie",
    "poznaj kogoś po rozwodzie",
    "randki dojrzałe po separacji",
  ],
});

export default function RandkiPoRozwodzePage() {
  return (
    <SegmentPage
      path="/randki-po-rozwodzie"
      badge="Po rozwodzie · nowy rozdział"
      h1="Randki po rozwodzie — zacznij nowy rozdział"
      subtitle="Wracasz do randkowania po rozstaniu? Tu nie ma miejsca na pośpiech ani ocenianie. Tylko spokojne poznawanie dojrzałych osób w podobnej sytuacji życiowej."
      ctaLabel="Dołącz za darmo"
      stats={[
        { value: "Dyskrecja", label: "gwarantowana" },
        { value: "35–55", label: "lat — baza wiekowa" },
        { value: "18", label: "miast w Polsce" },
        { value: "Gratis", label: "rejestracja" },
      ]}
      benefits={[
        {
          icon: "🤝",
          title: "Bez oceniania",
          text: "Każdy tu ma swoją historię. Rozwód to nie porażka — to decyzja. Randki40 to środowisko bez zbędnych komentarzy, skupione na przyszłości.",
        },
        {
          icon: "🔒",
          title: "Pełna dyskrecja",
          text: "Profil anonimowy do momentu, gdy sam zdecydujesz się ujawnić. Nikt z Twojego otoczenia nie musi wiedzieć, że szukasz kogoś nowego.",
        },
        {
          icon: "💬",
          title: "Poważne intencje",
          text: "Baza 35–55 lat, wyłącznie dojrzałe osoby z jasnymi oczekiwaniami. Bez Tindera, bez swipe'ów — spokojne poznawanie przez rozmowę.",
        },
      ]}
      testimonials={[
        {
          quote: "Po 12 latach małżeństwa i 2 latach samotności w końcu odważyłam się spróbować. Nie spodziewałam się, że znajdę kogoś tak bliskiego mi duchowo.",
          author: "Monika",
          meta: "47 lat, Warszawa",
        },
        {
          quote: "Bałem się powrotu do randkowania. Na Randki40 trafiłem wyłącznie na osoby po przejściach — rozmowy były inne, głębsze. Bez gier.",
          author: "Robert",
          meta: "51 lat, Poznań",
        },
        {
          quote: "Anonimowość jest tu prawdziwa. Zaczęłam pisać dyskretnie, bez presji. I właśnie to mi odpowiadało — mogłam działać w swoim tempie.",
          author: "Dorota",
          meta: "44 lata, Gdańsk",
        },
      ]}
      faq={[
        {
          q: "Czy można wrócić do randkowania po 40 po długim małżeństwie?",
          a: "Oczywiście — i jest to coraz powszechniejsze. Wiele osób po 40 wraca do randkowania po rozstaniu i szybko odkrywa, że wiedza o sobie i jasne intencje są ogromnym atutem, nie przeszkodą.",
        },
        {
          q: "Jak długo czekać po rozwodzie, żeby zacząć randkować?",
          a: "Nie ma jednej odpowiedzi. Kiedy czujesz, że jesteś gotowy/a — nie za wcześnie, nie za późno. Randki40 daje Ci przestrzeń bez presji. Możesz zacząć od przeglądania profili, bez angażowania się.",
        },
        {
          q: "Czy ludzie na portalu wiedzą, że jestem po rozwodzie?",
          a: "Tylko jeśli sam to napiszesz w profilu. Informacje udostępniasz według własnego uznania. Profil jest anonimowy do momentu, gdy sam zdecydujesz się ujawnić więcej.",
        },
        {
          q: "Jak rozmawiać na pierwszej randce po długiej przerwie?",
          a: "Bądź naturalny — zaproponuj krótkie, nieformalne spotkanie (kawa, spacer). Nie musisz od razu tłumaczyć się z całego życiorysu. Doświadczenie i dojrzałość to atut, nie bagaż.",
        },
        {
          q: "Czy w bazie Randki40 są osoby konkretnie po rozwodzie?",
          a: "Tak. Randki40 skupia singli 35–55 lat, a znaczna część użytkowników to osoby po rozstaniu lub w separacji. Cel randki możesz ustawić w profilu — relacja, towarzystwo lub poważne plany.",
        },
      ]}
      finalTitle="Nowy rozdział zaczyna się tutaj"
      finalSubtitle="Tysiące dojrzałych singli po przejściach. Dołącz dyskretnie, bez zobowiązań — w swoim tempie."
    />
  );
}
