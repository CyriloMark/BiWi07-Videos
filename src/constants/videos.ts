import img_1 from "../img/1.png";
import img_2 from "../img/2.png";
import img_3 from "../img/3.png";
import img_4 from "../img/4.png";
import img_5 from "../img/5.png";
import img_6 from "../img/6.png";

export type Video = {
    id: string;
    title: string;
    sub: string;
    href: string;
    key: string;
    icon: string;
    index: number;
    transcript_href: string;
    timestamps:
        | {
              time: number;
              title: string;
          }[]
        | [];
};

export const learn_videos = {
    INTRO: {
        id: "INTRO",
        title: "Einstieg und Vorstellung",
        sub: "Einführung - Warum befassen wir uns mit Videobeiträgen?",
        href: "https://drive.google.com/file/d/1-Wf2No83pPapLaEv2MfACeyF21Iwabh2/preview",
        key: "intro",
        icon: img_1,
        index: 1,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fqYhwZp1SZYXajpXopQMl0q5XeBY0ZZ7",
        timestamps: [
            {
                time: 0,
                title: "Einleitung",
            },
            {
                time: 101,
                title: "Stand der Dinge",
            },
        ],
    },
    DEF: {
        id: "DEF",
        title: "Definitionen",
        sub: "Definitionen einer Kulturtechnik und Videobeiträgen",
        href: "https://drive.google.com/file/d/1LPmep_GVhj3PJAbl5hpM3RZBZcgjvaBg/preview",
        key: "def",
        icon: img_2,
        index: 2,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1FddhEGlA4cVmxGHwN6PTE2ab6qKXbnyO",
        timestamps: [
            {
                time: 0,
                title: "Einleitung",
            },
            {
                time: 24,
                title: 'Def: "Kulturtechnik"',
            },
            {
                time: 70,
                title: 'Def: "Technik"/"technisch"',
            },
        ],
    },
    MEANING: {
        id: "MEANING",
        title: "Bedeutung für Menschen und Lernende",
        sub: "Bedeutung für Schülerinnen und Schüler - Bedeutung für Jugendliche - Bedeutung für Menschen",
        href: "https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",
        key: "meaning",
        icon: img_3,
        index: 3,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        timestamps: [],
    },
    IMPLEMENTATION: {
        id: "IMPLEMENTATION",
        title: "Technische Umsetzung",
        sub: "Erklärvideos - Einsatzmöglichkeiten im Unterricht - Umsetzung von Erklärvideos - Gute vs. schlechte Lernvideos",
        href: "https://drive.google.com/file/d/1ZuvYeagUajdIXCEzCwwGmxdTBce7dige/preview",
        key: "implementation",
        icon: img_4,
        index: 4,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1uINA8q2HqCkATV68dYhPZcZbH_TDMOHL",
        timestamps: [
            {
                time: 0,
                title: "Einleitung",
            },
            {
                time: 20,
                title: "Videotypen",
            },
            {
                time: 51,
                title: "Def: Erklärvideo",
            },
            {
                time: 112,
                title: "Screencast/Slidecast",
            },
            {
                time: 164,
                title: "Legetechnik",
            },
            {
                time: 214,
                title: "Whiteboard-/Tafelaufnahme",
            },
            {
                time: 352,
                title: "Einsatzmöglichkeiten im Unterricht",
            },
            {
                time: 412,
                title: "Einsatz vorgefertigter Erklärvideos",
            },
            {
                time: 560,
                title: "Eigene Erklärvideos produzieren",
            },
            {
                time: 640,
                title: "Technische Umsetzung",
            },
            {
                time: 919,
                title: "Gute vs. schlechte Erklärvideos",
            },
        ],
    },
    DISCUSSION: {
        id: "DISCUSSION",
        title: "Pro und Contra",
        sub: "Vor- und Nachteile für den Unterricht - Falschinformationen - Vorgefertigte Meinungen und Identitäten - Aufmerksamkeit",
        href: "",
        key: "discussion",
        icon: img_5,
        index: 5,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        timestamps: [
            {
                time: 1,
                title: "okjdf",
            },
        ],
    },
    OUTRO: {
        id: "OUTRO",
        title: "Fazit",
        sub: "Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",
        href: "https://drive.google.com/file/d/1FrS5KUr7pKwgrK9s8twSBy1Oe56SMAlB/preview",
        key: "outro",
        icon: img_6,
        index: 6,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=130-yQ2jqiOmjwwQvQo_Y3guHvGo9lGqJ",
        timestamps: [
            {
                time: 0,
                title: "Definition vom Anfang",
            },
            {
                time: 25,
                title: "Videobeiträge",
            },
            {
                time: 80,
                title: "Vergleich: Wortsprache/Bilder",
            },
            {
                time: 143,
                title: "Bewusstmachen von Mechanismen",
            },
            {
                time: 191,
                title: "Schlussfolgerung",
            },
        ],
    },
} as const satisfies Record<string, Video>;

export type VideoKey = keyof typeof learn_videos;
export type VideoType = (typeof learn_videos)[VideoKey];

export function getVideo(video: VideoKey) {
    const item = learn_videos[video];
    console.log(item.title);
    return item;
}
