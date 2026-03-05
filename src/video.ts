import DownloadButton from "./components/download_button";
import TimestampButton from "./components/timestamp_button";
import { getVideoGroup, type VideoGroupKey } from "./constants/videos";

const params = new URLSearchParams(window.location.search);
const v = params.get("v") as VideoGroupKey;
const video = getVideoGroup(v || "INTRO");

document.querySelector<HTMLDivElement>("#videoWrapper")!.innerHTML = `
    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
        Lernvideo ${video.videos[0].index}
    </h4>
    <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-5">
        ${video.videos[0].title}
    </h3>

    <h4 class="inter-sm text-black md:leading-8 leading-6 text-center md:text-xl text-lg mt-2">
        ${video.videos[0].sub}
    </h4>

    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
            <iframe
                src=${video.videos[0].href}
                title="Google Drive video"
                loading="lazy"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin"
                class="w-full h-full"
                allowfullscreen
            />
        </div>
    </div>
`;

if (video.videos[0].timestamps.length > 0) {
    document.querySelector<HTMLDivElement>("#timestampWrapper")!.innerHTML = `
        <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-12">
            Zeitstempel
        </h3>
        <div class="mt-5 w-[90%] md:w-[80%] flex flex-row flex-wrap">
            ${video.videos[0].timestamps
                .map((s, key) =>
                    TimestampButton({
                        data: s,
                        key: key.toString(),
                    }),
                )
                .join("")}
        </div>
    `;
}

document.querySelectorAll<HTMLDivElement>("#_download")!.forEach((e, k) => {
    const data = {
        title: e.attributes.getNamedItem("title")?.value || "",
        // href: e.attributes.getNamedItem("url")?.value || "",
        href: video.transcript_href,
        icon: e.attributes.getNamedItem("icon")?.value,
    };
    e.innerHTML = DownloadButton({ data: data, key: k.toString() });
});
