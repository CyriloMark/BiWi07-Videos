import type { Video } from "../constants/videos";

export function VideoPreview({ video }: { video: Video }) {
    return `
        <a href="./video.html?v=${video.id}">
            <div class="flex flex-col w-72 items-center justify-center cursor-pointer drop-shadow-2xl">
                <div class="w-full aspect-3/2 rounded-4xl border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                    <img src="${video.icon}" alt={${video.title}} />
                </div>
                <p class="inter-regular leading-4 text-sm text-black mt-1 text-center">
                    ${video.title}
                </p>
            </div>
        </a>
    `;
}
