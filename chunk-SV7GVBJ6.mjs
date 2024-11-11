import './polyfills.server.mjs';
import{A as z,B as P1,C as E1,D as k,E as D1,F as R1,G as B1,H as r,I as z2,J as H2,K as S,L as U,N as I1,Q as H1,T as O1,U as U1,W as q1,X as _1,Y as W1,Z as G1,a as d1,aa as j1,b as I2,c as h1,d as N2,e as b,ea as V1,f as x1,g as g1,ga as X1,h as b2,ha as Y1,i as N1,j as b1,k as S2,l as S1,m as k1,n as w1,o as o2,p as y1,q as d,r as P,s as v1,t as A1,u as T1,v,w as F1,x as O,y as f,z as t}from"./chunk-RD5MDMKD.mjs";import{a as m,b as N}from"./chunk-5XUXGTUW.mjs";var $1=(()=>{class c{title="TarjetaBoda";static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-root"]],standalone:!0,features:[S],decls:1,vars:0,template:function(e,s){e&1&&z(0,"router-outlet")},dependencies:[V1]})}return c})();var K1=(()=>{class c{router;audio=new Audio;isPlaying=!1;currentTime=0;duration=0;constructor(a){this.router=a,typeof window<"u"&&this.iniciarSonido()}iniciarSonido(){this.audio=new Audio("/audio.mp3"),this.audio.play()}siguientepagina(){this.router.navigateByUrl("segundaParte")}static \u0275fac=function(e){return new(e||c)(P(X1))};static \u0275cmp=b({type:c,selectors:[["app-inicio"]],standalone:!0,features:[S],decls:9,vars:0,consts:[["audioElement",""],[1,"colorTerceroFuente","taCenter","mlMobile","TextoUno"],[1,"taCenter","mlMobile","Texto-Secundario"],[1,"Container"],[1,"BtnPrincipal","mlMobile",3,"click"],["allow","autoplay"]],template:function(e,s){if(e&1){let n=P1();f(0,"div",1),r(1,` Bienvenidos a la invitacion de Mila y Gus
`),t(),f(2,"div",2),r(3,` la musica de fondo es parte de la experiencia
`),t(),f(4,"div",3)(5,"button",4),k("click",function(){return N1(n),b1(s.siguientepagina())}),r(6," Ingresar "),t()(),z(7,"audio",5,0)}}})}return c})();var Q1="/img/img1.jpg",J1="/img/anillos.png",Z1="/img/img2.jpg",c3="/img/img3.jpg",l3="/img/img4.jpg";var s3=(()=>{class c{fecha="05.07.2025";imgNovios=Q1;static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-nombres"]],standalone:!0,features:[S],decls:15,vars:2,consts:[[1,"image-container"],["alt","esta es  la  uno",1,"Imagen",3,"src"],[1,"Hr1"],[1,"TextoImagen"],[1,"Hr2"],[1,"NombresDos","NombresNovio"],[1,"NombresDos","NombreAnd"],[1,"NombresDos","NombresNovia"],[1,"Hr3"],[1,"NombresDos","fsXL65","fsTbl34","Leyenda"]],template:function(e,s){e&1&&(f(0,"div",0),z(1,"img",1)(2,"hr",2),f(3,"div",3),r(4),t(),z(5,"hr",4),f(6,"div",5),r(7," Gustavo "),t(),f(8,"div",6),r(9," & "),t(),f(10,"div",7),r(11," Camila "),t(),z(12,"hr",8),f(13,"div",9),r(14," Todos somos mortales, hasta el primer beso y la segunda copa "),t()()),e&2&&(d(),v("src",s.imgNovios,o2),d(3),z2(s.fecha))}})}return c})();var e3=(()=>{class c{zone;timeLeft;tiempoRestante;interval;constructor(a){this.zone=a,N2(I1).isStable.pipe(d1(s=>s)).subscribe(()=>{this.interval=setInterval(()=>{this.zone.run(()=>{let s=new Date("2025-07-05T14:30:00");this.tiempoRestante=this.calcularTiempoRestante(s)})},1e3)})}calcularTiempoRestante(a){let e=new Date,s=a.getTime()-e.getTime(),n=Math.floor(s/(1e3*60*60*24)),o=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(s%(1e3*60*60)/(1e3*60)),L=Math.floor(s%(1e3*60)/1e3);return{dias:n,horas:o,minutos:i,segundos:L}}static \u0275fac=function(e){return new(e||c)(P(S1))};static \u0275cmp=b({type:c,selectors:[["app-falta"]],standalone:!0,features:[S],decls:34,vars:4,consts:[[1,"SeparacionUno"],[1,"colorSecundarioFondo","FranjaFaltan"],[1,"fs30","fs55","NombreFalta","fsXL89"],[1,"ContainerFalta"],[1,"taCenter","fsTbl34","fsXL65","numero"],["for",""],[1,"linea"]],template:function(e,s){e&1&&(f(0,"div"),z(1,"div",0),f(2,"div",1)(3,"div",2),r(4,"Falta"),t(),f(5,"div",3)(6,"div",4)(7,"span",5),r(8),t(),z(9,"br"),f(10,"span"),r(11,"Dias"),t()(),z(12,"div",6),f(13,"div",4)(14,"span",5),r(15),t(),z(16,"br"),f(17,"span"),r(18,"Hs"),t()(),z(19,"div",6),f(20,"div",4)(21,"span",5),r(22),t(),z(23,"br"),f(24,"span"),r(25,"Min"),t()(),z(26,"div",6),f(27,"div",4)(28,"span",5),r(29),t(),z(30,"br"),f(31,"span"),r(32,"Seg"),t()()()(),z(33,"div",0),t()),e&2&&(d(8),z2(s.tiempoRestante==null?null:s.tiempoRestante.dias),d(7),H2("",s.tiempoRestante==null?null:s.tiempoRestante.horas," "),d(7),H2("",s.tiempoRestante==null?null:s.tiempoRestante.minutos," "),d(7),z2(s.tiempoRestante==null?null:s.tiempoRestante.segundos))}})}return c})();var a3=(()=>{class c{event=new S2;Modal(a,e){this.event.emit({valor:a,seccionH:e})}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-ceremonia"]],outputs:{event:"event"},standalone:!0,features:[S],decls:27,vars:0,consts:[[1,"taCenter"],[1,"colorSecundarioFondo","Hr4"],[1,"fs55","TextoCeremonia","fsXL89"],[1,"Indicacion","fsTbl34"],[1,"InfoValor","fsTbl31","fsXL65"],[1,"BtnDatos",3,"click"],[1,"BtnDatos","BtnDatos2",3,"click"]],template:function(e,s){e&1&&(f(0,"div")(1,"div",0),z(2,"hr",1),f(3,"div",2),r(4,"Ceremonia & Celebraci\xF3n"),t(),z(5,"hr",1)(6,"br")(7,"br"),f(8,"div",3),r(9,"DIA"),t(),f(10,"div",4),r(11," Sabado 5 de julio - 14:30 Hrs"),t(),f(12,"button",5),k("click",function(){return s.Modal(!0,1)}),r(13,"GUARDAR FECHA"),t(),f(14,"div",3),r(15,"LUGAR"),t(),f(16,"div",4),r(17,"Centro de eventos chicaque"),t(),f(18,"button",6),k("click",function(){return s.Modal(!0,2)}),r(19,"CONFIRMAR ASISTENCIA"),t(),f(20,"div",3),r(21,"DIRECCI\xD3N"),t(),f(22,"div",4),r(23,"kilometro 34 via melgar"),t(),f(24,"button",5),k("click",function(){return s.Modal(!0,3)}),r(25,"C\xD3MO LLEGAR?"),t(),z(26,"div"),t()())}})}return c})();var n3=()=>{},o1={},A3={},T3=null,F3={mark:n3,measure:n3};try{typeof window<"u"&&(o1=window),typeof document<"u"&&(A3=document),typeof MutationObserver<"u"&&(T3=MutationObserver),typeof performance<"u"&&(F3=performance)}catch{}var{userAgent:o3=""}=o1.navigator||{},Y=o1,x=A3,i3=T3,k2=F3,U6=!!Y.document,G=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",P3=~o3.indexOf("MSIE")||~o3.indexOf("Trident/"),g="classic",E3="duotone",A="sharp",T="sharp-duotone",w4=[g,E3,A,T],y4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},t3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},v4=["kit"],A4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,T4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,F4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},E4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},D4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},R4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},B4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},D3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},I4=["solid","regular","light","thin","duotone","brands"],R3=[1,2,3,4,5,6,7,8,9,10],H4=R3.concat([11,12,13,14,15,16,17,18,19,20]),M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O4=[...Object.keys(D4),...I4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY].concat(R3.map(c=>"".concat(c,"x"))).concat(H4.map(c=>"w-".concat(c))),U4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},q4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},f3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_="___FONT_AWESOME___",j2=16,B3="fa",I3="svg-inline--fa",s2="data-fa-i2svg",V2="data-fa-pseudo-element",W4="data-fa-pseudo-element-pending",i1="data-prefix",t1="data-icon",r3="fontawesome-i2svg",G4="async",j4=["HTML","HEAD","STYLE","SCRIPT"],H3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),O3=[g,A,T];function x2(c){return new Proxy(c,{get(l,a){return a in l?l[a]:l[g]}})}var U3=m({},D3);U3[g]=m(m(m({},D3[g]),t3.kit),t3["kit-duotone"]);var c2=x2(U3),X2=m({},B4);X2[g]=m(m(m({},X2[g]),f3.kit),f3["kit-duotone"]);var d2=x2(X2),Y2=m({},R4);Y2[g]=m(m({},Y2[g]),_4.kit);var l2=x2(Y2),$2=m({},E4);$2[g]=m(m({},$2[g]),q4.kit);var V4=x2($2),X4=A4,q3="fa-layers-text",Y4=T4,$4=m({},y4),q6=x2($4),K4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U2=M2,f2=new Set;Object.keys(d2[g]).map(f2.add.bind(f2));Object.keys(d2[A]).map(f2.add.bind(f2));Object.keys(d2[T]).map(f2.add.bind(f2));var Q4=[...v4,...O4],C2=Y.FontAwesomeConfig||{};function J4(c){var l=x.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Z4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[a,e]=l,s=Z4(J4(a));s!=null&&(C2[e]=s)});var _3={styleDefault:"solid",familyDefault:"classic",cssPrefix:B3,replacementClass:I3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C2.familyPrefix&&(C2.cssPrefix=C2.familyPrefix);var r2=m(m({},_3),C2);r2.autoReplaceSvg||(r2.observeMutations=!1);var p={};Object.keys(_3).forEach(c=>{Object.defineProperty(p,c,{enumerable:!0,set:function(l){r2[c]=l,u2.forEach(a=>a(p))},get:function(){return r2[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){r2.cssPrefix=c,u2.forEach(l=>l(p))},get:function(){return r2.cssPrefix}});Y.FontAwesomeConfig=p;var u2=[];function c0(c){return u2.push(c),()=>{u2.splice(u2.indexOf(c),1)}}var V=j2,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l0(c){if(!c||!G)return;let l=x.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let a=x.head.childNodes,e=null;for(let s=a.length-1;s>-1;s--){let n=a[s],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return x.head.insertBefore(l,e),c}var s0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function h2(){let c=12,l="";for(;c-- >0;)l+=s0[Math.random()*62|0];return l}function m2(c){let l=[];for(let a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function f1(c){return c.classList?m2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function W3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e0(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,'="').concat(W3(c[a]),'" '),"").trim()}function T2(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,": ").concat(c[a].trim(),";"),"")}function r1(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function a0(c){let{transform:l,containerWidth:a,iconWidth:e}=c,s={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),L={transform:"".concat(n," ").concat(o," ").concat(i)},M={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:L,path:M}}function n0(c){let{transform:l,width:a=j2,height:e=j2,startCentered:s=!1}=c,n="";return s&&P3?n+="translate(".concat(l.x/V-a/2,"em, ").concat(l.y/V-e/2,"em) "):s?n+="translate(calc(-50% + ".concat(l.x/V,"em), calc(-50% + ").concat(l.y/V,"em)) "):n+="translate(".concat(l.x/V,"em, ").concat(l.y/V,"em) "),n+="scale(".concat(l.size/V*(l.flipX?-1:1),", ").concat(l.size/V*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var o0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function G3(){let c=B3,l=I3,a=p.cssPrefix,e=p.replacementClass,s=o0;if(a!==c||e!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");s=s.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(i,".".concat(e))}return s}var m3=!1;function q2(){p.autoAddCss&&!m3&&(l0(G3()),m3=!0)}var i0={mixout(){return{dom:{css:G3,insertCss:q2}}},hooks(){return{beforeDOMElementCreation(){q2()},beforeI2svg(){q2()}}}},W=Y||{};W[_]||(W[_]={});W[_].styles||(W[_].styles={});W[_].hooks||(W[_].hooks={});W[_].shims||(W[_].shims=[]);var B=W[_],j3=[],V3=function(){x.removeEventListener("DOMContentLoaded",V3),v2=1,j3.map(c=>c())},v2=!1;G&&(v2=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),v2||x.addEventListener("DOMContentLoaded",V3));function t0(c){G&&(v2?setTimeout(c,0):j3.push(c))}function g2(c){let{tag:l,attributes:a={},children:e=[]}=c;return typeof c=="string"?W3(c):"<".concat(l," ").concat(e0(a),">").concat(e.map(g2).join(""),"</").concat(l,">")}function z3(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var f0=function(l,a){return function(e,s,n,o){return l.call(a,e,s,n,o)}},_2=function(l,a,e,s){var n=Object.keys(l),o=n.length,i=s!==void 0?f0(a,s):a,L,M,C;for(e===void 0?(L=1,C=l[n[0]]):(L=0,C=e);L<o;L++)M=n[L],C=i(C,l[M],M,l);return C};function r0(c){let l=[],a=0,e=c.length;for(;a<e;){let s=c.charCodeAt(a++);if(s>=55296&&s<=56319&&a<e){let n=c.charCodeAt(a++);(n&64512)==56320?l.push(((s&1023)<<10)+(n&1023)+65536):(l.push(s),a--)}else l.push(s)}return l}function K2(c){let l=r0(c);return l.length===1?l[0].toString(16):null}function m0(c,l){let a=c.length,e=c.charCodeAt(l),s;return e>=55296&&e<=56319&&a>l+1&&(s=c.charCodeAt(l+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function L3(c){return Object.keys(c).reduce((l,a)=>{let e=c[a];return!!e.icon?l[e.iconName]=e.icon:l[a]=e,l},{})}function Q2(c,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=a,s=L3(l);typeof B.hooks.addPack=="function"&&!e?B.hooks.addPack(c,L3(l)):B.styles[c]=m(m({},B.styles[c]||{}),s),c==="fas"&&Q2("fa",l)}var{styles:Z,shims:z0}=B,L0={[g]:Object.values(l2[g]),[A]:Object.values(l2[A]),[T]:Object.values(l2[T])},m1=null,X3={},Y3={},$3={},K3={},Q3={},M0={[g]:Object.keys(c2[g]),[A]:Object.keys(c2[A]),[T]:Object.keys(c2[T])};function p0(c){return~Q4.indexOf(c)}function C0(c,l){let a=l.split("-"),e=a[0],s=a.slice(1).join("-");return e===c&&s!==""&&!p0(s)?s:null}var J3=()=>{let c=e=>_2(Z,(s,n,o)=>(s[o]=_2(n,e,{}),s),{});X3=c((e,s,n)=>(s[3]&&(e[s[3]]=n),s[2]&&s[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),Y3=c((e,s,n)=>(e[n]=n,s[2]&&s[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),Q3=c((e,s,n)=>{let o=s[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});let l="far"in Z||p.autoFetchSvg,a=_2(z0,(e,s)=>{let n=s[0],o=s[1],i=s[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});$3=a.names,K3=a.unicodes,m1=F2(p.styleDefault,{family:p.familyDefault})};c0(c=>{m1=F2(c.styleDefault,{family:p.familyDefault})});J3();function z1(c,l){return(X3[c]||{})[l]}function u0(c,l){return(Y3[c]||{})[l]}function X(c,l){return(Q3[c]||{})[l]}function Z3(c){return $3[c]||{prefix:null,iconName:null}}function d0(c){let l=K3[c],a=z1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function $(){return m1}var L1=()=>({prefix:null,iconName:null,rest:[]});function F2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=g}=l,e=c2[a][c],s=d2[a][c]||d2[a][e],n=c in B.styles?c:null;return s||n||null}var h0={[g]:Object.keys(l2[g]),[A]:Object.keys(l2[A]),[T]:Object.keys(l2[T])};function P2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=l,e={[g]:"".concat(p.cssPrefix,"-").concat(g),[A]:"".concat(p.cssPrefix,"-").concat(A),[T]:"".concat(p.cssPrefix,"-").concat(T)},s=null,n=g,o=w4.filter(L=>L!==E3);o.forEach(L=>{(c.includes(e[L])||c.some(M=>h0[L].includes(M)))&&(n=L)});let i=c.reduce((L,M)=>{let C=C0(p.cssPrefix,M);if(Z[M]?(M=L0[n].includes(M)?V4[n][M]:M,s=M,L.prefix=M):M0[n].indexOf(M)>-1?(s=M,L.prefix=F2(M,{family:n})):C?L.iconName=C:M!==p.replacementClass&&!o.some(h=>M===e[h])&&L.rest.push(M),!a&&L.prefix&&L.iconName){let h=s==="fa"?Z3(L.iconName):{},u=X(L.prefix,L.iconName);h.prefix&&(s=null),L.iconName=h.iconName||u||L.iconName,L.prefix=h.prefix||L.prefix,L.prefix==="far"&&!Z.far&&Z.fas&&!p.autoFetchSvg&&(L.prefix="fas")}return L},L1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===A&&(Z.fass||p.autoFetchSvg)&&(i.prefix="fass",i.iconName=X(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===T&&(Z.fasds||p.autoFetchSvg)&&(i.prefix="fasds",i.iconName=X(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||s==="fa")&&(i.prefix=$()||"fas"),i}var J2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,a=new Array(l),e=0;e<l;e++)a[e]=arguments[e];let s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(n=>{this.definitions[n]=m(m({},this.definitions[n]||{}),s[n]),Q2(n,s[n]);let o=l2[g][n];o&&Q2(o,s[n]),J3()})}reset(){this.definitions={}}_pullDefinitions(l,a){let e=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(e).map(s=>{let{prefix:n,iconName:o,icon:i}=e[s],L=i[2];l[n]||(l[n]={}),L.length>0&&L.forEach(M=>{typeof M=="string"&&(l[n][M]=i)}),l[n][o]=i}),l}},M3=[],i2={},t2={},x0=Object.keys(t2);function g0(c,l){let{mixoutsTo:a}=l;return M3=c,i2={},Object.keys(t2).forEach(e=>{x0.indexOf(e)===-1&&delete t2[e]}),M3.forEach(e=>{let s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(n=>{typeof s[n]=="function"&&(a[n]=s[n]),typeof s[n]=="object"&&Object.keys(s[n]).forEach(o=>{a[n]||(a[n]={}),a[n][o]=s[n][o]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(o=>{i2[o]||(i2[o]=[]),i2[o].push(n[o])})}e.provides&&e.provides(t2)}),a}function Z2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),s=2;s<a;s++)e[s-2]=arguments[s];return(i2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function e2(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];(i2[c]||[]).forEach(n=>{n.apply(null,a)})}function K(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return t2[c]?t2[c].apply(null,l):void 0}function c1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,a=c.prefix||$();if(l)return l=X(a,l)||l,z3(c4.definitions,a,l)||z3(B.styles,a,l)}var c4=new J2,N0=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,e2("noAuto")},b0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(e2("beforeI2svg",c),K("pseudoElements2svg",c),K("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,t0(()=>{k0({autoReplaceSvgRoot:l}),e2("watch",c)})}},S0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=F2(c[0]);return{prefix:a,iconName:X(a,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(X4))){let l=P2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||$(),iconName:X(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=$();return{prefix:l,iconName:X(l,c)||c}}}},F={noAuto:N0,config:p,dom:b0,parse:S0,library:c4,findIconDefinition:c1,toHtml:g2},k0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=x}=c;(Object.keys(B.styles).length>0||p.autoFetchSvg)&&G&&p.autoReplaceSvg&&F.dom.i2svg({node:l})};function E2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>g2(a))}}),Object.defineProperty(c,"node",{get:function(){if(!G)return;let a=x.createElement("div");return a.innerHTML=c.html,a.children}}),c}function w0(c){let{children:l,main:a,mask:e,attributes:s,styles:n,transform:o}=c;if(r1(o)&&a.found&&!e.found){let{width:i,height:L}=a,M={x:i/L/2,y:.5};s.style=T2(N(m({},n),{"transform-origin":"".concat(M.x+o.x/16,"em ").concat(M.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:l}]}function y0(c){let{prefix:l,iconName:a,children:e,attributes:s,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(p.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(m({},s),{id:o}),children:e}]}]}function M1(c){let{icons:{main:l,mask:a},prefix:e,iconName:s,transform:n,symbol:o,title:i,maskId:L,titleId:M,extra:C,watchable:h=!1}=c,{width:u,height:w}=a.found?a:l,j=e==="fak",J=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(n2=>C.classes.indexOf(n2)===-1).filter(n2=>n2!==""||!!n2).concat(C.classes).join(" "),E={children:[],attributes:N(m({},C.attributes),{"data-prefix":e,"data-icon":s,class:J,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(w)})},H=j&&!~C.classes.indexOf("fa-fw")?{width:"".concat(u/w*16*.0625,"em")}:{};h&&(E.attributes[s2]=""),i&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(M||h2())},children:[i]}),delete E.attributes.title);let y=N(m({},E),{prefix:e,iconName:s,main:l,mask:a,maskId:L,transform:n,symbol:o,styles:m(m({},H),C.styles)}),{children:D,attributes:a2}=a.found&&l.found?K("generateAbstractMask",y)||{children:[],attributes:{}}:K("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=D,y.attributes=a2,o?y0(y):w0(y)}function p3(c){let{content:l,width:a,height:e,transform:s,title:n,extra:o,watchable:i=!1}=c,L=N(m(m({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});i&&(L[s2]="");let M=m({},o.styles);r1(s)&&(M.transform=n0({transform:s,startCentered:!0,width:a,height:e}),M["-webkit-transform"]=M.transform);let C=T2(M);C.length>0&&(L.style=C);let h=[];return h.push({tag:"span",attributes:L,children:[l]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function v0(c){let{content:l,title:a,extra:e}=c,s=N(m(m({},e.attributes),a?{title:a}:{}),{class:e.classes.join(" ")}),n=T2(e.styles);n.length>0&&(s.style=n);let o=[];return o.push({tag:"span",attributes:s,children:[l]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:W2}=B;function l1(c){let l=c[0],a=c[1],[e]=c.slice(4),s=null;return Array.isArray(e)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(U2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(U2.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(U2.PRIMARY),fill:"currentColor",d:e[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:a,icon:s}}var A0={found:!1,width:512,height:512};function T0(c,l){!H3&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function s1(c,l){let a=l;return l==="fa"&&p.styleDefault!==null&&(l=$()),new Promise((e,s)=>{if(a==="fa"){let n=Z3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&W2[l]&&W2[l][c]){let n=W2[l][c];return e(l1(n))}T0(c,l),e(N(m({},A0),{icon:p.showMissingIcons&&c?K("missingIconAbstract")||{}:{}}))})}var C3=()=>{},e1=p.measurePerformance&&k2&&k2.mark&&k2.measure?k2:{mark:C3,measure:C3},p2='FA "6.6.0"',F0=c=>(e1.mark("".concat(p2," ").concat(c," begins")),()=>l4(c)),l4=c=>{e1.mark("".concat(p2," ").concat(c," ends")),e1.measure("".concat(p2," ").concat(c),"".concat(p2," ").concat(c," begins"),"".concat(p2," ").concat(c," ends"))},p1={begin:F0,end:l4},w2=()=>{};function u3(c){return typeof(c.getAttribute?c.getAttribute(s2):null)=="string"}function P0(c){let l=c.getAttribute?c.getAttribute(i1):null,a=c.getAttribute?c.getAttribute(t1):null;return l&&a}function E0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function D0(){return p.autoReplaceSvg===!0?y2.replace:y2[p.autoReplaceSvg]||y2.replace}function R0(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function B0(c){return x.createElement(c)}function s4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?R0:B0}=l;if(typeof c=="string")return x.createTextNode(c);let e=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(s4(n,{ceFn:a}))}),e}function I0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var y2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(a=>{l.parentNode.insertBefore(s4(a),l)}),l.getAttribute(s2)===null&&p.keepOriginalSource){let a=x.createComment(I0(l));l.parentNode.replaceChild(a,l)}else l.remove()},nest:function(c){let l=c[0],a=c[1];if(~f1(l).indexOf(p.replacementClass))return y2.replace(c);let e=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let n=a[0].attributes.class.split(" ").reduce((o,i)=>(i===p.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let s=a.map(n=>g2(n)).join(`
`);l.setAttribute(s2,""),l.innerHTML=s}};function d3(c){c()}function e4(c,l){let a=typeof l=="function"?l:w2;if(c.length===0)a();else{let e=d3;p.mutateApproach===G4&&(e=Y.requestAnimationFrame||d3),e(()=>{let s=D0(),n=p1.begin("mutate");c.map(s),n(),a()})}}var C1=!1;function a4(){C1=!0}function a1(){C1=!1}var A2=null;function h3(c){if(!i3||!p.observeMutations)return;let{treeCallback:l=w2,nodeCallback:a=w2,pseudoElementsCallback:e=w2,observeMutationsRoot:s=x}=c;A2=new i3(n=>{if(C1)return;let o=$();m2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!u3(i.addedNodes[0])&&(p.searchPseudoElements&&e(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&p.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&u3(i.target)&&~K4.indexOf(i.attributeName))if(i.attributeName==="class"&&P0(i.target)){let{prefix:L,iconName:M}=P2(f1(i.target));i.target.setAttribute(i1,L||o),M&&i.target.setAttribute(t1,M)}else E0(i.target)&&a(i.target)})}),G&&A2.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function H0(){A2&&A2.disconnect()}function O0(c){let l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce((e,s)=>{let n=s.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),a}function U0(c){let l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=P2(f1(c));return s.prefix||(s.prefix=$()),l&&a&&(s.prefix=l,s.iconName=a),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=u0(s.prefix,c.innerText)||z1(s.prefix,K2(c.innerText))),!s.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function q0(c){let l=m2(c.attributes).reduce((s,n)=>(s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s),{}),a=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return p.autoA11y&&(a?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||h2()):(l["aria-hidden"]="true",l.focusable="false")),l}function _0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:e,rest:s}=U0(c),n=q0(c),o=Z2("parseNodeAttributes",{},c),i=l.styleParser?O0(c):[];return m({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:i,attributes:n}},o)}var{styles:W0}=B;function n4(c){let l=p.autoReplaceSvg==="nest"?x3(c,{styleParser:!1}):x3(c);return~l.extra.classes.indexOf(q3)?K("generateLayersText",c,l):K("generateSvgReplacementMutation",c,l)}var I=new Set;O3.map(c=>{I.add("fa-".concat(c))});Object.keys(c2[g]).map(I.add.bind(I));Object.keys(c2[A]).map(I.add.bind(I));Object.keys(c2[T]).map(I.add.bind(I));I=[...I];function g3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();let a=x.documentElement.classList,e=C=>a.add("".concat(r3,"-").concat(C)),s=C=>a.remove("".concat(r3,"-").concat(C)),n=p.autoFetchSvg?I:O3.map(C=>"fa-".concat(C)).concat(Object.keys(W0));n.includes("fa")||n.push("fa");let o=[".".concat(q3,":not([").concat(s2,"])")].concat(n.map(C=>".".concat(C,":not([").concat(s2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=m2(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),s("complete");else return Promise.resolve();let L=p1.begin("onTree"),M=i.reduce((C,h)=>{try{let u=n4(h);u&&C.push(u)}catch(u){H3||u.name==="MissingIcon"&&console.error(u)}return C},[]);return new Promise((C,h)=>{Promise.all(M).then(u=>{e4(u,()=>{e("active"),e("complete"),s("pending"),typeof l=="function"&&l(),L(),C()})}).catch(u=>{L(),h(u)})})}function G0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;n4(c).then(a=>{a&&e4([a],l)})}function j0(c){return function(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:c1(l||{}),{mask:s}=a;return s&&(s=(s||{}).icon?s:c1(s||{})),c(e,N(m({},a),{mask:s}))}}var V0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=R,symbol:e=!1,mask:s=null,maskId:n=null,title:o=null,titleId:i=null,classes:L=[],attributes:M={},styles:C={}}=l;if(!c)return;let{prefix:h,iconName:u,icon:w}=c;return E2(m({type:"icon"},c),()=>(e2("beforeDOMElementCreation",{iconDefinition:c,params:l}),p.autoA11y&&(o?M["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||h2()):(M["aria-hidden"]="true",M.focusable="false")),M1({icons:{main:l1(w),mask:s?l1(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:m(m({},R),a),symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:M,styles:C,classes:L}})))},X0={mixout(){return{icon:j0(V0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=g3,c.nodeCallback=G0,c}}},provides(c){c.i2svg=function(l){let{node:a=x,callback:e=()=>{}}=l;return g3(a,e)},c.generateSvgReplacementMutation=function(l,a){let{iconName:e,title:s,titleId:n,prefix:o,transform:i,symbol:L,mask:M,maskId:C,extra:h}=a;return new Promise((u,w)=>{Promise.all([s1(e,o),M.iconName?s1(M.iconName,M.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[J,E]=j;u([l,M1({icons:{main:J,mask:E},prefix:o,iconName:e,transform:i,symbol:L,maskId:C,title:s,titleId:n,extra:h,watchable:!0})])}).catch(w)})},c.generateAbstractIcon=function(l){let{children:a,attributes:e,main:s,transform:n,styles:o}=l,i=T2(o);i.length>0&&(e.style=i);let L;return r1(n)&&(L=K("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),a.push(L||s.icon),{children:a,attributes:e}}}},Y0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=l;return E2({type:"layer"},()=>{e2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(s=>{Array.isArray(s)?s.map(n=>{e=e.concat(n.abstract)}):e=e.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...a].join(" ")},children:e}]})}}}},$0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:e=[],attributes:s={},styles:n={}}=l;return E2({type:"counter",content:c},()=>(e2("beforeDOMElementCreation",{content:c,params:l}),v0({content:c.toString(),title:a,extra:{attributes:s,styles:n,classes:["".concat(p.cssPrefix,"-layers-counter"),...e]}})))}}}},K0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=R,title:e=null,classes:s=[],attributes:n={},styles:o={}}=l;return E2({type:"text",content:c},()=>(e2("beforeDOMElementCreation",{content:c,params:l}),p3({content:c,transform:m(m({},R),a),title:e,extra:{attributes:n,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...s]}})))}}},provides(c){c.generateLayersText=function(l,a){let{title:e,transform:s,extra:n}=a,o=null,i=null;if(P3){let L=parseInt(getComputedStyle(l).fontSize,10),M=l.getBoundingClientRect();o=M.width/L,i=M.height/L}return p.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,p3({content:l.innerHTML,width:o,height:i,transform:s,title:e,extra:n,watchable:!0})])}}},Q0=new RegExp('"',"ug"),N3=[1105920,1112319],b3=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},P4),F4),U4),n1=Object.keys(b3).reduce((c,l)=>(c[l.toLowerCase()]=b3[l],c),{}),J0=Object.keys(n1).reduce((c,l)=>{let a=n1[l];return c[l]=a[900]||[...Object.entries(a)][0][1],c},{});function Z0(c){let l=c.replace(Q0,""),a=m0(l,0),e=a>=N3[0]&&a<=N3[1],s=l.length===2?l[0]===l[1]:!1;return{value:K2(s?l[0]:l),isSecondary:e||s}}function c6(c,l){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),s=isNaN(e)?"normal":e;return(n1[a]||{})[s]||J0[a]}function S3(c,l){let a="".concat(W4).concat(l.replace(":","-"));return new Promise((e,s)=>{if(c.getAttribute(a)!==null)return e();let o=m2(c.children).filter(u=>u.getAttribute(V2)===l)[0],i=Y.getComputedStyle(c,l),L=i.getPropertyValue("font-family"),M=L.match(Y4),C=i.getPropertyValue("font-weight"),h=i.getPropertyValue("content");if(o&&!M)return c.removeChild(o),e();if(M&&h!=="none"&&h!==""){let u=i.getPropertyValue("content"),w=c6(L,C),{value:j,isSecondary:J}=Z0(u),E=M[0].startsWith("FontAwesome"),H=z1(w,j),y=H;if(E){let D=d0(j);D.iconName&&D.prefix&&(H=D.iconName,w=D.prefix)}if(H&&!J&&(!o||o.getAttribute(i1)!==w||o.getAttribute(t1)!==y)){c.setAttribute(a,y),o&&c.removeChild(o);let D=_0(),{extra:a2}=D;a2.attributes[V2]=l,s1(H,w).then(n2=>{let S4=M1(N(m({},D),{icons:{main:n2,mask:L1()},prefix:w,iconName:y,extra:a2,watchable:!0})),B2=x.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(B2,c.firstChild):c.appendChild(B2),B2.outerHTML=S4.map(k4=>g2(k4)).join(`
`),c.removeAttribute(a),e()}).catch(s)}else e()}else e()})}function l6(c){return Promise.all([S3(c,"::before"),S3(c,"::after")])}function s6(c){return c.parentNode!==document.head&&!~j4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(V2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function k3(c){if(G)return new Promise((l,a)=>{let e=m2(c.querySelectorAll("*")).filter(s6).map(l6),s=p1.begin("searchPseudoElements");a4(),Promise.all(e).then(()=>{s(),a1(),l()}).catch(()=>{s(),a1(),a()})})}var e6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=k3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:a=x}=l;p.searchPseudoElements&&k3(a)}}},w3=!1,a6={mixout(){return{dom:{unwatch(){a4(),w3=!0}}}},hooks(){return{bootstrap(){h3(Z2("mutationObserverCallbacks",{}))},noAuto(){H0()},watch(c){let{observeMutationsRoot:l}=c;w3?a1():h3(Z2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},y3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,e)=>{let s=e.toLowerCase().split("-"),n=s[0],o=s.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},l)},n6={mixout(){return{parse:{transform:c=>y3(c)}}},hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-transform");return a&&(c.transform=y3(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:a,transform:e,containerWidth:s,iconWidth:n}=l,o={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),L="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),M="rotate(".concat(e.rotate," 0 0)"),C={transform:"".concat(i," ").concat(L," ").concat(M)},h={transform:"translate(".concat(n/2*-1," -256)")},u={outer:o,inner:C,path:h};return{tag:"g",attributes:m({},u.outer),children:[{tag:"g",attributes:m({},u.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),u.path)}]}]}}}},G2={x:0,y:0,width:"100%",height:"100%"};function v3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function o6(c){return c.tag==="g"?c.children:[c]}var i6={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-mask"),e=a?P2(a.split(" ").map(s=>s.trim())):L1();return e.prefix||(e.prefix=$()),c.mask=e,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:a,attributes:e,main:s,mask:n,maskId:o,transform:i}=l,{width:L,icon:M}=s,{width:C,icon:h}=n,u=a0({transform:i,containerWidth:C,iconWidth:L}),w={tag:"rect",attributes:N(m({},G2),{fill:"white"})},j=M.children?{children:M.children.map(v3)}:{},J={tag:"g",attributes:m({},u.inner),children:[v3(m({tag:M.tag,attributes:m(m({},M.attributes),u.path)},j))]},E={tag:"g",attributes:m({},u.outer),children:[J]},H="mask-".concat(o||h2()),y="clip-".concat(o||h2()),D={tag:"mask",attributes:N(m({},G2),{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},a2={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:o6(h)},D]};return a.push(a2,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(H,")")},G2)}),{children:a,attributes:e}}}},t6={provides(c){let l=!1;Y.matchMedia&&(l=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],e={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:N(m({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=N(m({},s),{attributeName:"opacity"}),o={tag:"circle",attributes:N(m({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:N(m({},s),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(m({},n),{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:N(m({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:N(m({},n),{values:"1;0;0;0;0;1;"})}]}),l||a.push({tag:"path",attributes:N(m({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(m({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},f6={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-symbol"),e=a===null?!1:a===""?!0:a;return c.symbol=e,c}}}},r6=[i0,X0,Y0,$0,K0,e6,a6,n6,i6,t6,f6];g0(r6,{mixoutsTo:F});var _6=F.noAuto,o4=F.config,W6=F.library,i4=F.dom,t4=F.parse,G6=F.findIconDefinition,j6=F.toHtml,f4=F.icon,V6=F.layer,m6=F.text,z6=F.counter;var L6=["*"],M6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},p6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},C6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(a=>l[a]?a:null).filter(a=>a)},u1=new WeakSet,r4="fa-auto-css";function u6(c,l){if(!l.autoAddCss||u1.has(c))return;if(c.getElementById(r4)!=null){l.autoAddCss=!1,u1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",r4),a.innerHTML=i4.css();let e=c.head.childNodes,s=null;for(let n=e.length-1;n>-1;n--){let o=e[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=o)}c.head.insertBefore(a,s),l.autoAddCss=!1,u1.add(c)}var d6=c=>c.prefix!==void 0&&c.iconName!==void 0,h6=(c,l)=>d6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},x6=(()=>{let l=class l{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){o4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};l.\u0275fac=function(s){return new(s||l)},l.\u0275prov=I2({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),g6=(()=>{let l=class l{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let n of s.icon[2])typeof n=="string"&&(this.definitions[s.prefix][n]=s)}}addIconPacks(...e){for(let s of e){let n=Object.keys(s).map(o=>s[o]);this.addIcons(...n)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}};l.\u0275fac=function(s){return new(s||l)},l.\u0275prov=I2({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),N6=(()=>{let l=class l{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};l.\u0275fac=function(s){return new(s||l)},l.\u0275dir=g1({type:l,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[b2]});let c=l;return c})(),b6=(()=>{let l=class l{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};l.\u0275fac=function(s){return new(s||l)(P(v1),P(k1))},l.\u0275cmp=b({type:l,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[b2,S],ngContentSelectors:L6,decls:1,vars:0,template:function(s,n){s&1&&(D1(),R1(0))},encapsulation:2});let c=l;return c})(),D2=(()=>{let l=class l{constructor(e,s,n,o,i){this.sanitizer=e,this.config=s,this.iconLibrary=n,this.stackItem=o,this.document=N2(U1),i!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){p6();return}if(e){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let n=this.buildParams();u6(this.document,this.config);let o=f4(s,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(o.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=h6(e,this.config.defaultPrefix);if("icon"in s)return s;let n=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return n??(M6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?t4.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:C6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};l.\u0275fac=function(s){return new(s||l)(P(W1),P(x6),P(g6),P(N6,8),P(b6,8))},l.\u0275cmp=b({type:l,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,n){s&2&&(E1("innerHTML",n.renderedIconHTML,w1),T1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[b2,S],decls:0,vars:0,template:function(s,n){},encapsulation:2});let c=l;return c})();var R2=(()=>{let l=class l{};l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=x1({type:l}),l.\u0275inj=h1({});let c=l;return c})();var z4={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]};var L4={prefix:"fas",iconName:"camera-retro",icon:[512,512,[128247],"f083","M220.6 121.2L271.1 96 448 96l0 96-114.8 0c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24L64 192l0-64 128 0c9.9 0 19.7-2.3 28.6-6.8zM0 128L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L271.1 32c-9.9 0-19.7 2.3-28.6 6.8L192 64l-32 0 0-16c0-8.8-7.2-16-16-16L80 32c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"]};var M4={prefix:"fas",iconName:"shirt",icon:[640,512,[128085,"t-shirt","tshirt"],"f553","M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"]};var p4={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]};var C4={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]};function S6(c,l){if(c&1&&z(0,"img",10),c&2){let a=l.$implicit,e=l.index;B1("alt","Ima",e+1,""),v("src",a.src,o2)}}var u4=(()=>{class c{faCoffee=L4;images=[{src:Z1},{src:c3},{src:l3}];currentIndex=0;transform="translateX(0)";next(){this.currentIndex=(this.currentIndex+1)%this.images.length,this.transform=`translateX(-${this.currentIndex*100}%)`}prev(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length,this.transform=`translateX(-${this.currentIndex*100}%)`}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-carrusel"]],standalone:!0,features:[S],decls:14,vars:4,consts:[[1,"colorSecundarioFondo","FranjaFaltan"],[1,"taCenter","fs55","letraRetrato","fsXL89"],[1,"taCenter","fsTbl34","mensajeRetrato","fsXL65"],[1,"colorTerceroFuente","taCenter","fs34","fs65","fsXL89","iconRetrato"],[3,"icon"],[1,"carousel"],[1,"carousel-inner"],["class","imgCardCarru",3,"src","alt",4,"ngFor","ngForOf"],[1,"btn","fs50","fsXL89","left-button",3,"click"],[1,"btn","fs50","fsXL89","right-button",3,"click"],[1,"imgCardCarru",3,"src","alt"]],template:function(e,s){e&1&&(f(0,"div",0)(1,"div",1),r(2,"Retratos de Nuestro Amor"),t(),f(3,"div",2),r(4,"Un minutio, un segundo, un instante que queda en la eternidad"),t(),f(5,"div",3),z(6,"fa-icon",4),t(),f(7,"div",5)(8,"div",6),A1(9,S6,1,3,"img",7),t(),f(10,"button",8),k("click",function(){return s.prev()}),r(11,"\u276E"),t(),f(12,"button",9),k("click",function(){return s.next()}),r(13,"\u276F"),t()()()),e&2&&(d(6),v("icon",s.faCoffee),d(2),F1("transform",s.transform),d(),v("ngForOf",s.images))},dependencies:[R2,D2,q1]})}return c})();var d4=(()=>{class c{faMusic=C4;fashirt=M4;faClipBoard=z4;faImages=p4;event=new S2;Modal(a,e){this.event.emit({valor:a,seccionH:e})}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-tener-encuenta"]],outputs:{event:"event"},standalone:!0,features:[S],decls:67,vars:4,consts:[[1,"taCenter"],[1,"fs55","TextoCeremonia","fsXL89","marginfinal"],[1,"Indicacion","fsTbl31","IndicacionDos","fsXL65"],[1,"card","colorSecundarioFondo"],[1,"colorPrincipalFuente","fs30","fs50","fsXL89"],[1,"colorTerceroFuente","taCenter","fs34","fs65","iconRetrato","fsXL89"],[3,"icon"],[1,"colorTerceroFuente","mensajeMusica","fsTbl31","fsXL65"],[1,"BtnDatos",3,"click"]],template:function(e,s){e&1&&(f(0,"div",0)(1,"div",1),r(2,"Fiesta"),t(),f(3,"div",2),r(4,"Hagamos junto s una fiesta \xE9pica. Aqui algunos detalles a tener en cuenta"),t(),f(5,"div",3),z(6,"br")(7,"br"),f(8,"div",4),r(9,"Musica "),t(),z(10,"br"),f(11,"div",5),z(12,"fa-icon",6),t(),f(13,"div",7),r(14,"\xBFCu\xE1l es la canci\xF3n que no debe faltar en la PlayList de la fiesta? "),t(),f(15,"button",8),k("click",function(){return s.Modal(!0,4)}),r(16,"SUGERIR CANCI\xD3N"),t(),z(17,"br")(18,"br"),t(),z(19,"br")(20,"br"),f(21,"div",3),z(22,"br")(23,"br"),f(24,"div",4),r(25,"Dress Code"),t(),z(26,"br"),f(27,"div",5),z(28,"fa-icon",6),t(),f(29,"div",7),r(30,"Una orientaci\xF3n para tu vestuario "),t(),f(31,"button",8),k("click",function(){return s.Modal(!0,5)}),r(32,"VER MAS"),t(),z(33,"br")(34,"br"),t(),z(35,"br")(36,"br"),f(37,"div",3),z(38,"br")(39,"br"),f(40,"div",4),r(41,"Trae tu foto"),t(),z(42,"br"),f(43,"div",5),z(44,"fa-icon",6),t(),f(45,"div",7),r(46,"Trae una foto de algun momento que compartimos "),t(),f(47,"button",8),k("click",function(){return s.Modal(!0,6)}),r(48,"VER MAS"),t(),z(49,"br")(50,"br"),t(),z(51,"br")(52,"br"),f(53,"div",3),z(54,"br")(55,"br"),f(56,"div",4),r(57,"Tips y Notas"),t(),z(58,"br"),f(59,"div",5),z(60,"fa-icon",6),t(),f(61,"div",7),r(62,"Informaci\xF3n adicional para tener en cuenta. "),t(),f(63,"button",8),k("click",function(){return s.Modal(!0,7)}),r(64,"VER MAS"),t(),z(65,"br")(66,"br"),t()()),e&2&&(d(12),v("icon",s.faMusic),d(16),v("icon",s.fashirt),d(16),v("icon",s.faImages),d(16),v("icon",s.faClipBoard))},dependencies:[R2,D2]})}return c})();var h4=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-final"]],standalone:!0,features:[S],decls:8,vars:0,consts:[[1,"taCenter"],[1,"cardFinal","colorSecundarioFondo","paddingFinal"],[1,"bordeCardFinal"],[1,"colorPrincipalFuente","fs30","fs50","fsXL89","paddingFinal"],[1,"colorPrincipalFuente","fsTbl31","fsXL65"]],template:function(e,s){e&1&&(f(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),r(4,"Gustavo y camila"),t(),f(5,"div",4),r(6,"\xA1Los esperamos!"),t(),z(7,"br"),t()()())}})}return c})();var Q=c=>({display:c}),x4=(()=>{class c{interval;modal=!1;seccion=0;imgAnillos=J1;constructor(){}ngOnDestroy(){clearInterval(this.interval)}Modal(a){this.modal=a.valor,this.seccion=a.seccionH}ModalSegunda(a,e){this.Modal({valor:a,seccionH:e})}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=b({type:c,selectors:[["app-segundaparte"]],standalone:!0,features:[S],decls:76,vars:33,consts:[[3,"event"],[1,"modal"],[1,"close",3,"click"],[1,"colorSecundarioFondo","taCenter","modal-content"],["alt","\xCDcono de anillos",3,"src"],[1,"modal-body"],["href","https://calendar.google.com/calendar/render?action=TEMPLATE&text=BodaMilayGus&dates=05-07-2024/05-07-2024&details=boda&location=chicaque&sf=true&trp=false"],[1,"fsTbl34","fsXL44","AsistenciaBoda"],[1,"options"],["type","radio","name","asistencia","value","si"],["type","radio","name","asistencia","value","no"],["type","text","placeholder","Ingrese nombre completo",1,"colorSecundarioFondo","colorTerceroFuente","fsTbl34","fsXL44","InfomodalForm"],[1,"colorSecundarioFondo","colorTerceroFuente","fsTbl34","fsXL44","InfomodalForm"],[1,"fsTbl34","fsXL44","BtnModalEnviar"],["src",y1`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.83047695894!2d-74.32024829999999!3d4.6016133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f739879a69be7%3A0xacc0490c2cca43!2sChicaque%2C%20San%20Antonio%20Del%20Tequendama%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1730756343136!5m2!1ses-419!2sco`,"width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade","title","mapalugar",2,"border","0"],["type","text","placeholder","Tu nombre",1,"colorSecundarioFondo","colorTerceroFuente","fsTbl34","fsXL44","InfomodalForm"],["type","text","placeholder","Nombre de la cancion y autor",1,"colorSecundarioFondo","colorTerceroFuente","fsTbl34","fsXL44","InfomodalForm"],["type","text","placeholder","Url de youtube, spotify, etc.",1,"colorSecundarioFondo","colorTerceroFuente","fsTbl34","fsXL44","InfomodalForm"]],template:function(e,s){e&1&&(z(0,"app-nombres")(1,"app-falta"),f(2,"app-ceremonia",0),k("event",function(o){return s.Modal(o)}),t(),z(3,"br")(4,"app-carrusel")(5,"br"),f(6,"app-tener-encuenta",0),k("event",function(o){return s.Modal(o)}),t(),z(7,"app-final"),f(8,"div",1)(9,"span",2),k("click",function(){return s.ModalSegunda(!1,0)}),r(10,"\xD7"),t(),f(11,"div",3),z(12,"img",4),f(13,"div",5)(14,"div")(15,"h2"),r(16,"Guardar fecha"),t(),f(17,"a",6),r(18,"Agregar Evento"),t()(),f(19,"div",7)(20,"h2"),r(21,"\xBFAsites a la ceremonia?"),t(),f(22,"div",8)(23,"label"),z(24,"input",9),r(25," S\xED, confirmo!"),t(),f(26,"label"),z(27,"input",10),r(28," No puedo "),t()(),z(29,"br"),f(30,"div"),z(31,"input",11),t(),z(32,"br"),f(33,"div")(34,"textarea",12),r(35," Ingrese algun comentario"),t()(),z(36,"br"),f(37,"button",13),r(38,"Enviar"),t(),z(39,"br"),t(),f(40,"div")(41,"h2"),r(42,"Ubicacion"),t(),z(43,"iframe",14),t(),f(44,"div",7)(45,"h2"),r(46,"Sugerir canci\xF3n"),t(),z(47,"input",15),f(48,"div"),z(49,"input",16),t(),f(50,"div"),z(51,"input",17),t(),z(52,"br"),f(53,"button",13),r(54,"Sugerir canci\xF3n"),t(),z(55,"br"),t(),f(56,"div",7)(57,"h2"),r(58,"Dress code"),t(),f(59,"p"),r(60," Vestimenta formal"),t(),f(61,"p"),r(62,"Outfir ideas"),t()(),f(63,"div",7)(64,"h2"),r(65,"Trae tu foto"),t(),f(66,"p"),r(67," Trae una foto de algun momento que compartimos"),t(),f(68,"p"),r(69,"Ideas de ejemplo"),t()(),f(70,"div",7)(71,"h2"),r(72,"Tips y Notas"),t(),f(73,"p"),r(74," Informaci\xF3n adicional para tener en cuenta"),t()(),z(75,"br"),t()()()),e&2&&(d(8),O(U(17,Q,s.modal?"block":"none")),d(4),v("src",s.imgAnillos,o2),d(2),O(U(19,Q,s.seccion===1?"block":"none")),d(5),O(U(21,Q,s.seccion===2?"block":"none")),d(21),O(U(23,Q,s.seccion===3?"block":"none")),d(4),O(U(25,Q,s.seccion===4?"block":"none")),d(12),O(U(27,Q,s.seccion===5?"block":"none")),d(7),O(U(29,Q,s.seccion===6?"block":"none")),d(7),O(U(31,Q,s.seccion===7?"block":"none")))},dependencies:[s3,e3,a3,u4,d4,h4]})}return c})();var g4=[{path:"",component:K1},{path:"segundaParte",component:x4}];var N4={providers:[H1({eventCoalescing:!0}),Y1(g4),G1()]};var k6={providers:[j1()]},b4=O1(N4,k6);var w6=()=>_1($1,b4),W8=w6;export{W8 as a};
