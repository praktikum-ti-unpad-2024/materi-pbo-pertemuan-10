import{d,u as p,a as _,c as m,b as u,r as h,o as n,e as l,f as t,t as s,g as r,F as f,h as g,n as v,i as b,j as x,k as y,l as k,m as N,_ as P}from"./index-f9d27795.js";import{N as w}from"./NoteDisplay-ca1c6e5f.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(A){p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),_({title:`Notes - ${m.title}`});const i=u(()=>h.map(a=>{var o;return(o=a.meta)==null?void 0:o.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,o)=>(n(),l("div",{id:"page-root",style:v(r(b))},[t("div",V,[t("div",L,[t("h1",S,s(r(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(r(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),o[0]||(o[0]=t("div",{class:"flex-auto"},null,-1))])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),l("hr",j)):N("v-if",!0)]))),128))])],4))}}),F=P(z,[["__file","E:/Kuliah/AsPrak/materi/materi-pbo-pertemuan-10/node_modules/.pnpm/@slidev+client@0.43.15_post_e502cc99b48fd3ea55c277115f9446c2/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{F as default};
