type TimestampButtonData = {
    time: number;
    title: string;
};

export default function TimestampButton({
    data,
    key,
}: {
    data: TimestampButtonData;
    key?: string;
}) {
    return `
        <div
            key={${key}}
            data-key="${key}"
            class="drop-shadow-xl m-1 flex flex-row md:pl-5 pl-2 pr-2 md:pr-5 pt-2 pb-2 cursor-pointer items-center border border-black rounded-2xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <p class="inter-bold md:text-lg text-sm text-black">${getTime(data.time)}</p>
            <p class="inter-regular md:text-lg text-sm text-black md:ml-2 ml-1">${data.title}</p>
        </div>
    `;
}

function getTime(time: number) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}
