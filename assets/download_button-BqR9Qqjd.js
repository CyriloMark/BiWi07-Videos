(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o="/BiWi07-Videos/assets/IMG_5500-H7IIrrqH.png",c={INTRO:{id:"INTRO",title:"Einstieg und Vorstellung",href:"https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",key:"intro",icon:o,index:1},DEF:{id:"DEF",title:"Definitionen",href:"https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",key:"def",icon:o,index:2},MEANING:{id:"MEANING",title:"Bedeutung für Menschen und Lernende",href:"https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",key:"meaning",icon:o,index:3},IMPLEMENTATION:{id:"IMPLEMENTATION",title:"Technische Umsetzung",href:"",key:"implementation",icon:o,index:4},DISCUSSION:{id:"DISCUSSION",title:"Diskussion, Pro und Contra",href:"",key:"discussion",icon:o,index:5},OUTRO:{id:"OUTRO",title:"Fazit",href:"",key:"outro",icon:o,index:6}};function d(r){const i=c[r];return console.log(i.title),i}function u({data:r,key:i}){return`
        <a
            key={${i}}
            href="${r.href}"
            target="_blank"
            rel="noopener noreferrer">
            <div class="w-full flex flex-row justify-between drop-shadow-2xl items-center pl-5 pr-5 pt-2 pb-2 border border-black rounded-3xl bg-white">
                <div class="flex flex-row items-center>
                    ${r.icon?'<div class="w-12 aspect-square bg-amber-500"></div>':""}
                    <p
                        class={"inter-regular text-lg text-black ${r.icon?"ml-2":""}"}>
                        ${r.title}
                    </p>
                </div>

                <div class="w-12 p-1 aspect-square">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={${r.href}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 122.88">
                            <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm10,50.74A3.31,3.31,0,0,1,76,55.47L63.44,67.91a3.31,3.31,0,0,1-4.65,0L46.38,55.65A3.32,3.32,0,0,1,51,50.92l6.83,6.77.06-23.84a3.32,3.32,0,0,1,6.64.06l-.07,23.65,6.9-6.82ZM35,81.19l0-13a3.32,3.32,0,0,1,6.64.06l0,9.45q19.76,0,39.5,0l0-9.51a3.32,3.32,0,1,1,6.64.06l0,12.91h0a3.32,3.32,0,0,1-3.29,3.17q-23.08,0-46.15,0A3.32,3.32,0,0,1,35,81.19ZM99.44,23.44a53.74,53.74,0,1,0,15.74,38,53.58,53.58,0,0,0-15.74-38Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </a>
    `}export{u as D,d as g,c as l};
