import{g as r,D as i}from"./download_button-CRzSymdI.js";function d({data:e,key:t}){return`
        <div
            key={${t}}
            data-key="${t}"
            class="drop-shadow-xl m-1 flex flex-row md:pl-5 pl-2 pr-2 md:pr-5 pt-2 pb-2 cursor-pointer items-center border border-black rounded-2xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <p class="inter-bold md:text-lg text-sm text-black">${o(e.time)}</p>
            <p class="inter-regular md:text-lg text-sm text-black md:ml-2 ml-1">${e.title}</p>
        </div>
    `}function o(e){let t=Math.floor(e/60),l=e%60;return`${t}:${l<10?"0"+l:l}`}const s=new URLSearchParams(window.location.search),n=s.get("v"),a=r(n||"INTRO");document.querySelector("#videoWrapper").innerHTML=a.videos.map(e=>`
                <div key="${e.key}" class="w-full flex flex-col justify-center items-center z-20 mt-5">
                    ${e.index>=2?'<div class="md:w-[20%] w-[50%] h-0.5 bg-black mt-5 mb-5"></div>':""}

                    <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
                        Lernvideo ${a.videos.length===1?e.index:`${a.index}.${e.index}`}
                    </h4>

                    <h3 class="max-w-[90%] inter-bold italic text-black text-center md:leading-8 leading-6 md:text-3xl text-xl mt-5">
                        ${e.title}
                    </h3>

                    <h4 class="max-w-[90%] inter-sm text-black md:leading-8 leading-6 text-center md:text-xl text-lg mt-2">
                        ${e.sub}
                    </h4>

                    <div class="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
                        <div class="w-full aspect-video bg-white rounded-3xl overflow-hidden">
                                <iframe
                                src=${e.href}
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
                            ${e.timestamps.map((t,l)=>d({data:t,key:l.toString()})).join("")}
                        </div>
                    </div>
                </div>
            `).join("");document.querySelectorAll("#_download").forEach((e,t)=>{const l={title:e.attributes.getNamedItem("title")?.value||"",href:a.transcript_href,icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=i({data:l,key:t.toString()})});
