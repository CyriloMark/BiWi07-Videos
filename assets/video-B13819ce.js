import{g as a,D as i}from"./download_button-EFRGMsCh.js";const d=new URLSearchParams(window.location.search),r=d.get("v"),t=a(r||"INTRO");document.querySelector("#videoWrapper").innerHTML=`
    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
        Lernvideo ${t.index}
    </h4>
    <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-2">
        ${t.title}
    </h3>

    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
            <iframe
                src=${t.href}
                title="Google Drive video"
                loading="lazy"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin"
                class="w-full h-full"
            />
        </div>
    </div>
`;document.querySelectorAll("#_download").forEach((e,l)=>{const o={title:e.attributes.getNamedItem("title")?.value||"",href:e.attributes.getNamedItem("url")?.value||"",icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=i({data:o,key:l.toString()})});
