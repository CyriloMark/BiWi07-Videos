(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const d={HOME:{id:0,title:"Lernvideos",href:"#learn"},EXAM:{id:1,title:"Prüfungsanforderungen",href:"#exam"},TRANSCRIPT:{id:2,title:"Transkript",href:"#transcript"}};function c(){return`<div class="pl-5 pr-5 pt-2 pb-2 bg-white border border-[#f2b705] rounded-4xl drop-shadow-2xl z-20 flex md:flex-row flex-col justify-center items-center">
            ${Object.values(d).map((e,r)=>`<div
                    key={${r}}
                    class="flex md:flex-row flex-col justify-center items-center">
                    <a href="${e.href}">
                        <p class="text-black inter-sm text-lg">${e.title}</p>
                    </a>

                    ${e.id!==Object.values(d).length-1?'<div class="md:w-px md:h-6 md:ml-2 md:mr-2 w-32 h-px mt-1 mb-1 bg-black opacity-40" />':""}
                </div>`)}
        </div>`}const n="/BiWi07-Videos/assets/IMG_5500-H7IIrrqH.png",a={INTRO:{id:"INTRO",title:"Einstieg und Vorstellung",href:"https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",key:"intro",icon:n,index:1},DEF:{id:"DEF",title:"Definitionen",href:"https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",key:"def",icon:n,index:2},MEANING:{id:"MEANING",title:"Bedeutung für Menschen und Lernende",href:"https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",key:"meaning",icon:n,index:3},IMPLEMENTATION:{id:"IMPLEMENTATION",title:"Technische Umsetzung",href:"",key:"implementation",icon:n,index:4},DISCUSSION:{id:"DISCUSSION",title:"Diskussion, Pro und Contra",href:"",key:"discussion",icon:n,index:5},OUTRO:{id:"OUTRO",title:"Fazit",href:"",key:"outro",icon:n,index:6}};function u({video:e}){return`
        <a href="/video.html?v=${e.id}">
            <div class="flex flex-col w-72 items-center justify-center cursor-pointer drop-shadow-2xl">
                <div class="w-full aspect-3/2 rounded-4xl border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                    <img src="${e.icon}" alt={${e.title}} />
                </div>
                <p class="inter-regular leading-4 text-sm text-black mt-1 text-center">
                    ${e.title}
                </p>
            </div>
        </a>
    `}function f({data:e,key:r}){return`
        <a
            key={${r}}
            href="${e.href}"
            target="_blank"
            rel="noopener noreferrer">
            <div class="w-full flex flex-row justify-between drop-shadow-2xl items-center pl-5 pr-5 pt-2 pb-2 border border-black rounded-3xl bg-white">
                <div class="flex flex-row items-center>
                    ${e.icon?'<div class="w-12 aspect-square bg-amber-500"></div>':""}
                    <p
                        class={"inter-regular text-lg text-black ${e.icon?"ml-2":""}"}>
                        ${e.title}
                    </p>
                </div>

                <div class="w-12 p-1 aspect-square">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={${e.href}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 122.88">
                            <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm10,50.74A3.31,3.31,0,0,1,76,55.47L63.44,67.91a3.31,3.31,0,0,1-4.65,0L46.38,55.65A3.32,3.32,0,0,1,51,50.92l6.83,6.77.06-23.84a3.32,3.32,0,0,1,6.64.06l-.07,23.65,6.9-6.82ZM35,81.19l0-13a3.32,3.32,0,0,1,6.64.06l0,9.45q19.76,0,39.5,0l0-9.51a3.32,3.32,0,1,1,6.64.06l0,12.91h0a3.32,3.32,0,0,1-3.29,3.17q-23.08,0-46.15,0A3.32,3.32,0,0,1,35,81.19ZM99.44,23.44a53.74,53.74,0,1,0,15.74,38,53.58,53.58,0,0,0-15.74-38Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </a>
    `}document.querySelector("#menuSelect").innerHTML=c();document.querySelector("#videoWrapper").innerHTML=Object.values(a).map((e,r)=>`<div key=${r} class="md:m-5 m-2">
                    ${u({video:e})}
                </div>`).join("");document.querySelectorAll("#_download").forEach((e,r)=>{const o={title:e.attributes.getNamedItem("title")?.value||"",href:e.attributes.getNamedItem("url")?.value||"",icon:e.attributes.getNamedItem("icon")?.value};e.innerHTML=f({data:o,key:r.toString()})});
