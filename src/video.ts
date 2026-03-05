import DownloadButton from "./components/download_button";
import TimestampButton from "./components/timestamp_button";
import { getVideoGroup, type VideoGroupKey } from "./constants/videos";

const params = new URLSearchParams(window.location.search);
const v = params.get("v") as VideoGroupKey;
const videoGroup = getVideoGroup(v || "INTRO");

document.querySelector<HTMLDivElement>("#videoWrapper")!.innerHTML =
    videoGroup.videos
        .map(
            video =>
                `
                <div key="${video.key}" class="w-full flex flex-col justify-center items-center z-20 mt-5">
                    ${video.index >= 2 ? `<div class="md:w-[20%] w-[50%] h-0.5 bg-black mt-5 mb-5"></div>` : ""}

                    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
                        Lernvideo ${videoGroup.videos.length === 1 ? video.index : `${videoGroup.index}.${video.index}`}
                    </h4>

                    <h3 class="max-w-[90%] inter-bold italic text-black text-center md:leading-8 leading-6 md:text-3xl text-xl mt-5">
                        ${video.title}
                    </h3>

                    <h4 class="max-w-[90%] inter-sm text-black md:leading-8 leading-6 text-center md:text-xl text-lg mt-2">
                        ${video.sub}
                    </h4>

                    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
                        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
                                <iframe
                                src=${video.href}
                                title="Google Drive video"
                                loading="eager"
                                allow="autoplay"
                                sandbox="allow-scripts allow-same-origin"
                                class="w-full h-full"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>

                    <div class="w-full flex flex-col items-center z-20">
                        <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-12">
                            Zeitstempel
                        </h3>

                        <div class="mt-5 w-[90%] md:w-[80%] justify-start flex flex-row flex-wrap">
                            ${video.timestamps
                                .map((s, key) =>
                                    TimestampButton({
                                        data: s,
                                        key: key.toString(),
                                    }),
                                )
                                .join("")}
                        </div>
                    </div>
                </div>
            `,
        )
        .join("");

document.querySelectorAll<HTMLDivElement>("#_download")!.forEach((e, k) => {
    const data = {
        title: e.attributes.getNamedItem("title")?.value || "",
        // href: e.attributes.getNamedItem("url")?.value || "",
        href: videoGroup.transcript_href,
        icon: e.attributes.getNamedItem("icon")?.value,
    };
    e.innerHTML = DownloadButton({ data: data, key: k.toString() });
});
