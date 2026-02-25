import{g as a,D as i}from"./download_button-BxD3IZVF.js";const d=new URLSearchParams(window.location.search),r=d.get("v"),e=a(r||"INTRO");document.querySelector("#videoWrapper").innerHTML=`
    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
        Lernvideo ${e.index}
    </h4>
    <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-5">
        ${e.title}
    </h3>

    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg mt-2">
        ${e.sub}
    </h4>

    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
            <iframe
                src=${e.href}
                title="Google Drive video"
                loading="lazy"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin"
                class="w-full h-full"
            />
        </div>
    </div>
`;document.querySelectorAll("#_download").forEach((t,l)=>{const o={title:t.attributes.getNamedItem("title")?.value||"",href:e.transcript_href,icon:t.attributes.getNamedItem("icon")?.value};t.innerHTML=i({data:o,key:l.toString()})});
