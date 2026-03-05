import{g as r,D as d}from"./download_button-CItuZRGO.js";function i({data:e,key:t}){return`
        <div
            key={${t}}
            data-key="${t}"
            class="drop-shadow-xl m-1 flex flex-row md:pl-5 pl-2 pr-2 md:pr-5 pt-2 pb-2 cursor-pointer items-center border border-black rounded-2xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <p class="inter-bold md:text-lg text-sm text-black">${s(e.time)}</p>
            <p class="inter-regular md:text-lg text-sm text-black md:ml-2 ml-1">${e.title}</p>
        </div>
    `}function s(e){let t=Math.floor(e/60),l=e%60;return`${t}:${l<10?"0"+l:l}`}const n=new URLSearchParams(window.location.search),o=n.get("v"),a=r(o||"INTRO");document.querySelector("#titleWrapper").innerHTML=`
    <h2 class="inter-bold text-black md:leading-32 md:text-5xl text-3xl text-center">
        ${a.title}
    </h2>

    <div class="md:w-[60%] w-[90%] flex flex-col mt-5">
        <h4 class="inter-sm text-black md:leading-8 leading-6 md:text-xl text-lg">Auf dieser Seite:</h4>

        <div class="w-full flex flex-row md:justify-start justify-between flex-wrap mt-2">
            ${a.videos.map(e=>`
                    <a class="md:m-2 m-1" href="#${e.key}" key="${e.key}">
                        <div class="md:w-64 w-44 bg-grad-bluegreen aspect-3/2 justify-center items-center md:rounded-4xl rounded-3xl p-5 border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                            <h4 class="inter-sm text-black md:leading-4 leading-2 md:text-lg text-sm">
                                Lernvideo ${a.index}.${e.index}
                            </h4>

                            <h3 class="max-w-[90%] inter-bold italic text-black md:leading-7 leading-5 md:line-clamp-4 line-clamp-3 md:text-2xl text-xl mt-2">
                                ${e.title}
                            </h3>
                        </div>
                    </a>
                `).join("")}

                 <a class="md:m-2 m-1" href="#transcript">
                        <div class="md:w-64 w-44 bg-grad-orange aspect-3/2 justify-center items-center md:rounded-4xl rounded-3xl p-5 border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                            <h4 class="inter-sm text-black md:leading-4 leading-2 md:text-lg text-sm">
                                Zusatz
                            </h4>
                            <h3 class="max-w-[90%] inter-bold italic text-black md:leading-7 leading-5 line-clamp-3 md:text-2xl text-xl mt-2">
                                Das Transkript zum Video
                            </h3>
                        </div>
                    </a>
        </div>
    </div>
`;document.querySelector("#videoWrapper").innerHTML=`
        ${a.videos.map(e=>`
                        <section key="${e.key}" id="${e.key}" class="w-full flex flex-col justify-center items-center z-20 mt-5">
                            <div class="md:w-[20%] w-[50%] h-0.5 bg-black mt-5 mb-5"></div>

                            <h4 class="inter-sm text-black md:leading-8 md:text-xl text-lg">
                                Lernvideo ${a.index}.${e.index}
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
                                    ${e.timestamps.map((t,l)=>i({data:t,key:l.toString()})).join("")}
                                </div>
                            </div>
                        </section>
                    `).join("")}
`;document.querySelectorAll("#_download").forEach((e,t)=>{const l={title:e.attributes.getNamedItem("title")?.value||"",href:a.transcript_href,icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=d({data:l,key:t.toString()})});
