(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const c="/BiWi07-Videos/assets/1-efrXUBf6.png",l="/BiWi07-Videos/assets/2-2pRM_yeV.png",d="/BiWi07-Videos/assets/3-B6FtAcBy.png",u="/BiWi07-Videos/assets/4-BoiCLB2N.png",a="/BiWi07-Videos/assets/5-BKuDknMz.png",f="/BiWi07-Videos/assets/6-LZiZghyr.png",g={INTRO:{id:"INTRO",title:"Einstieg und Vorstellung",sub:"Einführung - Warum befassen wir uns mit Videobeiträgen?",href:"https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",key:"intro",icon:c,index:1},DEF:{id:"DEF",title:"Definitionen",sub:"Definitionen einer Kulturtechnik und Videobeiträgen",href:"https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",key:"def",icon:l,index:2},MEANING:{id:"MEANING",title:"Bedeutung für Menschen und Lernende",sub:"Bedeutung für Schülerinnen und Schüler - Bedeutung für Jugendliche - Bedeutung für Menschen",href:"https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",key:"meaning",icon:d,index:3},IMPLEMENTATION:{id:"IMPLEMENTATION",title:"Technische Umsetzung",sub:"Technische Umsetzung - Videobeiträge im Kontext Lernen - Einsatzmöglichkeiten - Gute vs. schlechte Lernvideos",href:"",key:"implementation",icon:u,index:4},DISCUSSION:{id:"DISCUSSION",title:"Diskussion, Pro und Contra",sub:"Vor- und Nachteile für den Unterricht - Falschinformationen - Vorgefertigte Meinungen und Identitäten - Aufmerksamkeit",href:"",key:"discussion",icon:a,index:5},OUTRO:{id:"OUTRO",title:"Fazit",sub:"Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",href:"",key:"outro",icon:f,index:6}};function h(t){const n=g[t];return console.log(n.title),n}function p({data:t,key:n}){return`
        <a
            key={${n}}
            href="${t.href}"
            target="_blank"
            rel="noopener noreferrer">
            <div class="w-full flex flex-row justify-between drop-shadow-2xl items-center pl-5 pr-5 pt-2 pb-2 border border-black rounded-3xl bg-white">
                <div class="flex flex-row items-center>
                    ${t.icon?'<div class="w-12 aspect-square bg-amber-500"></div>':""}
                    <p
                        class={"inter-regular text-lg text-black ${t.icon?"ml-2":""}"}>
                        ${t.title}
                    </p>
                </div>

                <div class="w-12 p-1 aspect-square">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={${t.href}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 122.88">
                            <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm10,50.74A3.31,3.31,0,0,1,76,55.47L63.44,67.91a3.31,3.31,0,0,1-4.65,0L46.38,55.65A3.32,3.32,0,0,1,51,50.92l6.83,6.77.06-23.84a3.32,3.32,0,0,1,6.64.06l-.07,23.65,6.9-6.82ZM35,81.19l0-13a3.32,3.32,0,0,1,6.64.06l0,9.45q19.76,0,39.5,0l0-9.51a3.32,3.32,0,1,1,6.64.06l0,12.91h0a3.32,3.32,0,0,1-3.29,3.17q-23.08,0-46.15,0A3.32,3.32,0,0,1,35,81.19ZM99.44,23.44a53.74,53.74,0,1,0,15.74,38,53.58,53.58,0,0,0-15.74-38Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </a>
    `}export{p as D,h as g,g as l};
