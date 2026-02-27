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
        href: "https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",
        key: "intro",
        icon: img_1,
        index: 1,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        timestamps: [],
    },
    DEF: {
        id: "DEF",
        title: "Definitionen",
        sub: "Definitionen einer Kulturtechnik und Videobeiträgen",
        href: "https://drive.google.com/file/d/1dQaAQSCpltFzJjkSQ_CXhzYY5Iqs0qTw/preview",
        key: "def",
        icon: img_2,
        index: 2,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
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
        sub: "Technische Umsetzung - Videobeiträge im Kontext Lernen - Einsatzmöglichkeiten - Gute vs. schlechte Lernvideos",
        href: "",
        key: "implementation",
        icon: img_4,
        index: 4,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        timestamps: [],
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
        timestamps: [],
    },
    OUTRO: {
        id: "OUTRO",
        title: "Fazit",
        sub: "Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",
        href: "",
        key: "outro",
        icon: img_6,
        index: 6,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        timestamps: [],
    },
} as const satisfies Record<string, Video>;

export type VideoKey = keyof typeof learn_videos;
export type VideoType = (typeof learn_videos)[VideoKey];

export function getVideo(video: VideoKey) {
    const item = learn_videos[video];
    console.log(item.title);
    return item;
}
