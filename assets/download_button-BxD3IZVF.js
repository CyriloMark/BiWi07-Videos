(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="/BiWi07-Videos/assets/1-efrXUBf6.png",c="/BiWi07-Videos/assets/2-2pRM_yeV.png",l="/BiWi07-Videos/assets/3-B6FtAcBy.png",u="/BiWi07-Videos/assets/4-BoiCLB2N.png",a="/BiWi07-Videos/assets/5-rmagQ2xf.png",f="/BiWi07-Videos/assets/6-LZiZghyr.png",p={INTRO:{id:"INTRO",title:"Einstieg und Vorstellung",sub:"Einführung - Warum befassen wir uns mit Videobeiträgen?",href:"https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",key:"intro",icon:d,index:1,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"},DEF:{id:"DEF",title:"Definitionen",sub:"Definitionen einer Kulturtechnik und Videobeiträgen",href:"https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",key:"def",icon:c,index:2,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"},MEANING:{id:"MEANING",title:"Bedeutung für Menschen und Lernende",sub:"Bedeutung für Schülerinnen und Schüler - Bedeutung für Jugendliche - Bedeutung für Menschen",href:"https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",key:"meaning",icon:l,index:3,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"},IMPLEMENTATION:{id:"IMPLEMENTATION",title:"Technische Umsetzung",sub:"Technische Umsetzung - Videobeiträge im Kontext Lernen - Einsatzmöglichkeiten - Gute vs. schlechte Lernvideos",href:"",key:"implementation",icon:u,index:4,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"},DISCUSSION:{id:"DISCUSSION",title:"Pro und Contra",sub:"Vor- und Nachteile für den Unterricht - Falschinformationen - Vorgefertigte Meinungen und Identitäten - Aufmerksamkeit",href:"",key:"discussion",icon:a,index:5,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"},OUTRO:{id:"OUTRO",title:"Fazit",sub:"Sind Videos eine neue Kulturtechnik oder eine Ergänzung?",href:"",key:"outro",icon:f,index:6,transcript_href:"https://drive.google.com/uc?export=download&id=1fj-qbj8hPWtv9apZAn_kNhIuQ-p6qE_e"}};function h(n){const i=p[n];return console.log(i.title),i}function g({data:n,key:i}){return`
        <div
            key={${i}}
            class="w-full drop-shadow-2xl items-center border border-black rounded-3xl bg-white scale-100 hover:scale-[1.01] hover:border-2 transition-all duration-200"
        >
            <a
                class="w-full flex pl-5 pr-5 pt-2 pb-2 rounded-3xl"
                href="${n.href}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <div class="flex flex-col w-full">
                    <p class="inter-regular text-lg text-black">
                        ${n.title}
                    </p>

                    <p class="inter-regular italic text-gray-400 -mt-1 truncate w-full">
                        ${n.href}
                    </p>
                </div>
            </a>
        </a>
    `}export{g as D,h as g,p as l};
