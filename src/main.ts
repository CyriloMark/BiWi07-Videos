import "./styles/style.css";
import { MenuSelect } from "./components/menu_select";
import { learn_video_groups } from "./constants/videos";
import { VideoPreview } from "./components/video_preview";
import DownloadButton from "./components/download_button";

document.querySelector<HTMLDivElement>("#menuSelect")!.innerHTML = MenuSelect();
document.querySelector<HTMLDivElement>("#videoWrapper")!.innerHTML =
    Object.values(learn_video_groups)
        .map(
            (v, k) =>
                `<div key=${k} class="md:m-5 m-2">
                    ${VideoPreview({ video: v })}
                </div>`,
        )
        .join("");

document.querySelectorAll<HTMLDivElement>("#_download")!.forEach((e, k) => {
    const data = {
        title: e.attributes.getNamedItem("title")?.value || "",
        href: e.attributes.getNamedItem("url")?.value || "",
        icon: e.attributes.getNamedItem("icon")?.value,
    };
    e.innerHTML = DownloadButton({ data: data, key: k.toString() });
});
