import{l as i,D as a}from"./download_button-BziyS8TB.js";const r={HOME:{id:0,title:"Lernvideos",href:"#learn"},EXAM:{id:1,title:"Prüfungsanforderungen",href:"#exam"},TRANSCRIPT:{id:2,title:"Transkript",href:"#transcript"}};function n(){return`<div class="pl-5 pr-5 pt-2 pb-2 bg-white border border-[#f2b705] rounded-4xl drop-shadow-2xl z-20 flex md:flex-row flex-col justify-center items-center">
            ${Object.values(r).map((e,t)=>`<div
                    key={${t}}
                    class="flex md:flex-row flex-col justify-center items-center">
                    <a href="${e.href}" class="text-black">
                        <p class="text-black inter-sm text-lg">${e.title}</p>
                    </a>
                    ${e.id!==Object.values(r).length-1?'<div class="md:w-px md:h-6 md:ml-2 md:mr-2 w-32 h-px mt-1 mb-1 bg-black opacity-40"></div>':""}
                </div>
                `).join("")}
        </div>`}function d({video:e}){return`
        <a href="./video.html?v=${e.id}">
            <div class="flex flex-col w-72 items-center justify-center cursor-pointer drop-shadow-2xl">
                <div class="w-full aspect-3/2 rounded-4xl border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                    <img src="${e.icon}" alt={${e.title}} />
                </div>
                <p class="inter-regular leading-4 text-sm text-black mt-1 text-center">
                    ${e.title}
                </p>
            </div>
        </a>
    `}document.querySelector("#menuSelect").innerHTML=n();document.querySelector("#videoWrapper").innerHTML=Object.values(i).map((e,t)=>`<div key=${t} class="md:m-5 m-2">
                    ${d({video:e})}
                </div>`).join("");document.querySelectorAll("#_download").forEach((e,t)=>{const l={title:e.attributes.getNamedItem("title")?.value||"",href:e.attributes.getNamedItem("url")?.value||"",icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=a({data:l,key:t.toString()})});
