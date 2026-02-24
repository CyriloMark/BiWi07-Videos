import img_1 from "../img/IMG_5500.png";
import img_2 from "../img/IMG_5500.png";
import img_3 from "../img/IMG_5500.png";
import img_4 from "../img/IMG_5500.png";
import img_5 from "../img/IMG_5500.png";
import img_6 from "../img/IMG_5500.png";

export type Video = {
    id: string;
    title: string;
    sub: string;
    href: string;
    key: string;
    icon: string;
    index: number;
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
    },
    DEF: {
        id: "DEF",
        title: "Definitionen",
        sub: "Definitionen einer Kulturtechnik und Videobeiträgen",
        href: "https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",
        key: "def",
        icon: img_2,
        index: 2,
    },
    MEANING: {
        id: "MEANING",
        title: "Bedeutung für Menschen und Lernende",
        sub: "Bedeutung für Schülerinnen und Schüler - Bedeutung für Jugendliche - Bedeutung für Menschen",
        href: "https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",
        key: "meaning",
        icon: img_3,
        index: 3,
    },
    IMPLEMENTATION: {
        id: "IMPLEMENTATION",
        title: "Technische Umsetzung",
        sub: "Technische Umsetzung - Videobeiträge im Kontext Lernen - Einsatzmöglichkeiten - Gute vs. schlechte Lernvideos",
        href: "",
        key: "implementation",
        icon: img_4,
        index: 4,
    },
    DISCUSSION: {
        id: "DISCUSSION",
        title: "Diskussion, Pro und Contra",
        sub: "Vor- und Nachteile für den Unterricht - Falschinformationen - Vorgefertigte Meinungen und Identitäten - Aufmerksamkeit",
        href: "",
        key: "discussion",
        icon: img_5,
        index: 5,
    },
    OUTRO: {
        id: "OUTRO",
        title: "Fazit",
        sub: "Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",
        href: "",
        key: "outro",
        icon: img_6,
        index: 6,
    },
} as const satisfies Record<string, Video>;

export type VideoKey = keyof typeof learn_videos;
export type VideoType = (typeof learn_videos)[VideoKey];

export function getVideo(video: VideoKey) {
    const item = learn_videos[video];
    console.log(item.title);
    return item;
}
