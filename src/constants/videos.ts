import img_0 from "../img/IMG_5500.png";

export type Video = {
    id: string;
    title: string;
    href: string;
    key: string;
    icon: string;
    index: number;
};

export const learn_videos = {
    INTRO: {
        id: "INTRO",
        title: "Einstieg und Vorstellung",
        href: "https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",
        key: "intro",
        icon: img_0,
        index: 1,
    },
    DEF: {
        id: "DEF",
        title: "Definitionen",
        href: "https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",
        key: "def",
        icon: img_0,
        index: 2,
    },
    MEANING: {
        id: "MEANING",
        title: "Bedeutung für Menschen und Lernende",
        href: "https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",
        key: "meaning",
        icon: img_0,
        index: 3,
    },
    IMPLEMENTATION: {
        id: "IMPLEMENTATION",
        title: "Technische Umsetzung",
        href: "",
        key: "implementation",
        icon: img_0,
        index: 4,
    },
    DISCUSSION: {
        id: "DISCUSSION",
        title: "Diskussion, Pro und Contra",
        href: "",
        key: "discussion",
        icon: img_0,
        index: 5,
    },
    OUTRO: {
        id: "OUTRO",
        title: "Fazit",
        href: "",
        key: "outro",
        icon: img_0,
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
