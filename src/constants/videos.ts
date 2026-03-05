import img_1 from "../img/1.png";
import img_2 from "../img/2.png";
import img_3 from "../img/3.png";
import img_4 from "../img/4.png";
import img_5 from "../img/5.png";
import img_6 from "../img/6.png";

export type Video = {
    index: number;
    key: string;
    title: string;
    sub: string;
    href: string;
    timestamps:
        | {
              time: number;
              title: string;
          }[]
        | [];
};

export type VideoGroup = {
    id: string;
    key: string;
    index: number;
    title: string;
    icon: string;
    transcript_href: string;
    videos: Video[];
};

export const learn_video_groups = {
    INTRO: {
        id: "INTRO",
        key: "intro",
        index: 1,
        title: "Einstieg und Vorstellung",
        icon: img_1,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fqYhwZp1SZYXajpXopQMl0q5XeBY0ZZ7",
        videos: [
            {
                index: 1,
                key: "vid_1.1",
                title: "Einstieg und Vorstellung",
                sub: "Einführung - Warum befassen wir uns mit Videobeiträgen?",
                href: "https://drive.google.com/file/d/1-Wf2No83pPapLaEv2MfACeyF21Iwabh2/preview",
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
        ],
    },
    DEF: {
        id: "DEF",
        key: "def",
        index: 2,
        title: "Definitionen",
        icon: img_2,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1FddhEGlA4cVmxGHwN6PTE2ab6qKXbnyO",
        videos: [
            {
                index: 1,
                key: "vid_2.1",
                title: "Was sind eigentlich Kulturtechniken?",
                sub: "Definitionen einer Kulturtechnik und Videobeiträgen",
                href: "https://drive.google.com/file/d/1LPmep_GVhj3PJAbl5hpM3RZBZcgjvaBg/preview",
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
        ],
    },
    MEANING: {
        id: "MEANING",
        key: "meaning",
        index: 3,
        title: "Bedeutung für Menschen und Lernende",
        icon: img_3,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        videos: [
            {
                index: 1,
                key: "vid_3.1",
                title: "Bedeutung für Menschen und Lernende",
                sub: "Bedeutung für Schülerinnen und Schüler - Bedeutung für Jugendliche - Bedeutung für Menschen",
                href: "https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",
                timestamps: [],
            },
        ],
    },
    IMPLEMENTATION: {
        id: "IMPLEMENTATION",
        key: "implementation",
        index: 4,
        title: "Technische Umsetzung",
        icon: img_4,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1uINA8q2HqCkATV68dYhPZcZbH_TDMOHL",
        videos: [
            {
                index: 1,
                key: "vid_4.1",
                title: "Technische Umsetzung",
                sub: "Erklärvideos - Einsatzmöglichkeiten im Unterricht - Umsetzung von Erklärvideos - Gute vs. schlechte Lernvideos",
                href: "https://drive.google.com/file/d/1ZuvYeagUajdIXCEzCwwGmxdTBce7dige/preview",
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
        ],
    },
    DISCUSSION: {
        id: "DISCUSSION",
        key: "discussion",
        index: 5,
        title: "Pro und Contra",
        icon: img_5,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e",
        videos: [
            {
                index: 1,
                key: "vid_5.1",
                title: "Pro und Contra",
                sub: "Vor- und Nachteile für den Unterricht - Falschinformationen - Vorgefertigte Meinungen und Identitäten - Aufmerksamkeit",
                href: "https://drive.google.com/file/d/1ghXex3elyzSOZMv_7Wqkegv40J5uDCfz/preview",
                timestamps: [
                    {
                        time: 0,
                        title: "Einführung",
                    },
                ],
            },
            {
                index: 2,
                key: "vid_5.2",
                title: "Risiken und Konsequenzen für Lehrpersonen",
                sub: "Risiken und Konsequenzen für Lehrpersonen",
                href: "https://drive.google.com/file/d/1YRGr-JXExU4Qp7wVykYlxYWjQVacSUds/preview",
                timestamps: [
                    {
                        time: 0,
                        title: "Einführung",
                    },
                    {
                        time: 1,
                        title: "test",
                    },
                ],
            },
        ],
    },
    OUTRO: {
        id: "OUTRO",
        key: "outro",
        index: 6,
        title: "Fazit",
        icon: img_6,
        transcript_href:
            "https://drive.google.com/uc?export=download&id=130-yQ2jqiOmjwwQvQo_Y3guHvGo9lGqJ",
        videos: [
            {
                index: 1,
                key: "vid_6.1",
                title: "Fazit",
                sub: "Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",
                href: "https://drive.google.com/file/d/1FrS5KUr7pKwgrK9s8twSBy1Oe56SMAlB/preview",
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
        ],
    },
} as const satisfies Record<string, VideoGroup>;

export type VideoGroupKey = keyof typeof learn_video_groups;
export type VideoGroupType = (typeof learn_video_groups)[VideoGroupKey];

export function getVideoGroup(video: VideoGroupKey) {
    const item = learn_video_groups[video];
    return item;
}
