type DownloadButtonData = {
    title: string;
    href: string;
};

export default function DownloadButton({
    data,
    key,
}: {
    data: DownloadButtonData;
    key?: string;
}) {
    return `
        <div
            key={${key}}
            class="w-full drop-shadow-2xl items-center border border-black rounded-3xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <a
                class="w-full flex pl-5 pr-5 pt-2 pb-2 rounded-3xl"
                href="${data.href}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <div class="flex flex-col w-full">
                    <p class="inter-regular text-lg text-black">
                        ${data.title}
                    </p>

                    <p class="inter-regular italic text-gray-400 -mt-1 truncate w-full">
                        ${data.href}
                    </p>
                </div>
            </a>
        </a>
    `;
}
