import{g as a,D as i}from"./download_button-C2QBDdyI.js";function o({data:e,key:t}){return`
        <div
            key={${t}}
            data-key="${t}"
            class="drop-shadow-xl m-1 flex flex-row md:pl-5 pl-2 pr-2 md:pr-5 pt-2 pb-2 cursor-pointer items-center border border-black rounded-2xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <p class="inter-bold md:text-lg text-sm text-black">${d(e.time)}</p>
            <p class="inter-regular md:text-lg text-sm text-black md:ml-2 ml-1">${e.title}</p>
        </div>
    `}function d(e){let t=Math.floor(e/60),r=e%60;return`${t}:${r<10?"0"+r:r}`}const s=new URLSearchParams(window.location.search),n=s.get("v"),l=a(n||"INTRO");document.querySelector("#videoWrapper").innerHTML=`
    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
        Lernvideo ${l.index}
    </h4>
    <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-5">
        ${l.title}
    </h3>

    <h4 class="inter-sm text-black md:leading-8 leading-6 text-center md:text-xl text-lg mt-2">
        ${l.sub}
    </h4>

    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
            <iframe
                src=${l.href}
                title="Google Drive video"
                loading="lazy"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin"
                class="w-full h-full"
                allowfullscreen
            />
        </div>
    </div>
`;l.timestamps.length>0&&(document.querySelector("#timestampWrapper").innerHTML=`
        <h3 class="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-12">
            Zeitstempel
        </h3>
        <div class="mt-5 w-[90%] md:w-[80%] flex flex-row flex-wrap">
            ${l.timestamps.map((e,t)=>o({data:e,key:t.toString()})).join("")}
        </div>
    `);document.querySelectorAll("#_download").forEach((e,t)=>{const r={title:e.attributes.getNamedItem("title")?.value||"",href:l.transcript_href,icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=i({data:r,key:t.toString()})});
