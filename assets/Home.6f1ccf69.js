import{f as e,u as a,g as t,h as s,i as l,o as i,c as o,b as r,e as n,t as c,_ as v,p as u,j as f,F as d,r as m,w as p,k as h,l as k}from"./app.044db66b.js";u("data-v-e065f044");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const u=a(),f=t(),d=s((()=>f.value.heroImage||m.value||h.value||_.value)),m=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||u.value.title)),h=s((()=>null!==f.value.tagline)),k=s((()=>f.value.tagline||u.value.description)),_=s((()=>f.value.actionLink&&f.value.actionText)),I=s((()=>f.value.altActionLink&&f.value.altActionText));return(e,a)=>l(d)?(i(),o("header",x,[e.$frontmatter.heroImage?(i(),o("figure",y,[r("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):n("v-if",!0),l(m)?(i(),o("h1",g,c(l(p)),1)):n("v-if",!0),l(h)?(i(),o("p",$,c(l(k)),1)):n("v-if",!0),l(_)?(i(),o(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("v-if",!0),l(I)?(i(),o(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});_.__scopeId="data-v-e065f044",u("data-v-9c9c2344");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},w={key:1,class:"details"};f();var j=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),u=s((()=>a.value.features?a.value.features:[]));return(e,a)=>l(v)?(i(),o("div",I,[r("div",T,[r("div",b,[r("div",A,[(i(!0),o(d,null,m(l(u),((e,a)=>(i(),o("section",{key:a,class:"feature"},[e.title?(i(),o("h2",L,c(e.title),1)):n("v-if",!0),e.details?(i(),o("p",w,c(e.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});j.__scopeId="data-v-9c9c2344";const B={},C=p();u("data-v-44324124");const F={key:0,class:"footer"},q={class:"container"},z={class:"text"};f();const D=C(((e,a)=>e.$frontmatter.footer?(i(),o("footer",F,[r("div",q,[r("p",z,c(e.$frontmatter.footer),1)])])):n("v-if",!0)));B.render=D,B.__scopeId="data-v-44324124",u("data-v-1fd43058");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};f();var H=e({expose:[],setup:e=>(e,a)=>{const t=h("Content");return i(),o("main",E,[r(_),k(e.$slots,"hero",{},void 0,!0),r(j),r("div",G,[r(t)]),k(e.$slots,"features",{},void 0,!0),r(B),k(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-1fd43058";export default H;
