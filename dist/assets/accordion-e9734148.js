import{f as v,b}from"./moment-36213c16.js";import{a as t,o as s,b as r,f as n,w as l,F as p,e as _,i as g,d as u,t as i,n as k,u as f,g as w,q as y}from"./index-5fceaf5e.js";const B={class:"demo-collapse"},C={class:"text-[20px] text-color1 pl-5"},N={class:"flex flex-wrap gap-2 p-5"},V={key:0,class:"w-4 h-4 bg-red-600 inline-block absolute rotate-45 -top-2"},z={__name:"accordion",props:{data:Array},setup(d){return(D,F)=>{const m=t("el-popover"),x=t("el-collapse-item"),h=t("el-collapse");return s(),r("div",B,[n(h,{accordion:""},{default:l(()=>[(s(!0),r(p,null,_(d.data,(o,c)=>(s(),g(x,{name:c,key:c,class:"mt-2"},{title:l(()=>{var e,a;return[u("span",C,i(c+1+". "+((e=o==null?void 0:o.student)==null?void 0:e.first_name)+" "+((a=o==null?void 0:o.student)==null?void 0:a.last_name)),1)]}),default:l(()=>[u("div",N,[(s(!0),r(p,null,_(o==null?void 0:o.attendance,(e,a)=>(s(),r("div",{key:a,class:k(["w-[50px] text-center py-1 text-[14px] text-color1 border border-color1 rounded-md hover:bg-color1/10 cursor-pointer relative overflow-hidden",{"bg-transparent/30":e==null?void 0:e.pass}])},[n(m,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:f(v)(e==null?void 0:e.date)},{reference:l(()=>[w(i(f(b)(e==null?void 0:e.date)),1)]),_:2},1032,["content"]),e!=null&&e.description?(s(),r("span",V)):y("",!0)],2))),128))])]),_:2},1032,["name"]))),128))]),_:1})])}}};export{z as _};
