import{r as e,a as r,d as t,m as o,R as a}from"./vendor-eyA1-zKh.js";import{u as i}from"./animations-B5ZpCBli.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var n={exports:{}},s={},l=e,d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,p=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,t){var o,a={},i=null,n=null;for(o in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(n=r.ref),r)m.call(r,o)&&!g.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:d,type:e,key:i,ref:n,props:a,_owner:p.current}}s.Fragment=c,s.jsx=h,s.jsxs=h,n.exports=s;var x=n.exports,f={},u=r;f.createRoot=u.createRoot,f.hydrateRoot=u.hydrateRoot;const b=t.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${e=>e.hide?"-100%":"0"});
`,v=t.nav`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=t.a`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '⚡';
    -webkit-text-fill-color: initial;
  }
`,w=t.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({isOpen:e})=>e?"flex":"none"};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-dark);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
`,j=t.a`
  font-weight: 500;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--text-color);
    &:after {
      width: 100%;
    }
  }
`,k=t.a`
  padding: 0.5rem 1rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }
`,O=t.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--primary-color);
  }
`;function z(){const[r,t]=e.useState(!1),[o,a]=e.useState(!1),[i,n]=e.useState(0);return e.useEffect((()=>{const e=()=>{const e=window.scrollY;a(e>i&&e>80),n(e)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[i]),x.jsx(b,{hide:o,children:x.jsxs(v,{children:[x.jsx(y,{href:"#home",children:"Alvin Gawai"}),x.jsx(O,{onClick:()=>t(!r),children:r?"×":"☰"}),x.jsxs(w,{isOpen:r,children:[x.jsx(j,{href:"#about",children:"About"}),x.jsx(j,{href:"#skills",children:"Skills"}),x.jsx(j,{href:"#projects",children:"Projects"}),x.jsx(k,{href:"#contact",children:"Contact Me"})]})]})})}o`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;const S=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,P=o`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,E=t.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  background: var(--background-dark);
`,N=t.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, 
    rgba(99, 102, 241, 0.15) 0%,
    rgba(99, 102, 241, 0.05) 25%,
    rgba(15, 23, 42, 0) 50%
  );
  z-index: 0;
`,Y=t.div`
  text-align: center;
  max-width: 1000px;
  width: 90%;
  position: relative;
  z-index: 1;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,L=t.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    300deg,
    #6366f1 0%,
    #818cf8 25%,
    #4f46e5 50%,
    #6366f1 75%,
    #818cf8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  max-width: 1000px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  opacity: 0;
  animation: ${S} 2s ease-out forwards;
  padding: 0.1em 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,D=t.p`
  font-size: 1.25rem;
  color: var(--text-color-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${S} 2s ease-out forwards;
  animation-delay: 0.5s;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`,$=t.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${S} 2s ease-out forwards, ${P} 3s ease-in-out infinite;
  animation-delay: 1s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,C=t.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 16px;
  margin-top: 3rem;
  text-align: left;
  border: 1px solid var(--border-color);
  opacity: 0;
  animation: ${S} 2s ease-out forwards;
  animation-delay: 1.5s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25), 
              inset 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 0.75rem;
    margin-top: 2rem;
  }
`,R=t.pre`
  color: var(--text-color);
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;

  .comment { color: #6b7280; }
  .keyword { color: #818cf8; }
  .string { color: #34d399; }
  .function { color: #60a5fa; }

  @media (max-width: 768px) {
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.4;
  }
`;function _(){const{ref:e,inView:r}=i({threshold:.1,triggerOnce:!0});return x.jsxs(E,{id:"home",ref:e,children:[x.jsx(N,{}),x.jsxs(Y,{children:[x.jsx(L,{children:"Building Digital Experiences"}),x.jsx(D,{children:"Full Stack Engineer crafting modern web and mobile solutions with code and creativity"}),x.jsx($,{href:"#projects",children:"View My Work"}),x.jsx(C,{children:x.jsxs(R,{children:[x.jsx("span",{className:"comment",children:"// Welcome to my portfolio"}),"\n",x.jsx("span",{className:"keyword",children:"const"})," developer = ","{","\n","  ","name: ",x.jsx("span",{className:"string",children:'"Alvin Gawai"'}),",","\n","  ","role: ",x.jsx("span",{className:"string",children:'"Full Stack Engineer"'}),",","\n","  ","skills: [",x.jsx("span",{className:"string",children:'"React"'}),", ",x.jsx("span",{className:"string",children:'"Node.js"'}),", ",x.jsx("span",{className:"string",children:'"TypeScript"'}),"],","\n","  ",x.jsx("span",{className:"function",children:"code"}),": () ","=>"," ",x.jsx("span",{className:"string",children:'"Building the future"'}),"\n","}",";"]})})]})]})}const M=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,F=t.section`
  padding: 5rem 2rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent-gradient);
  }
`,T=t.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,I=t.div`
  opacity: 0;
  animation: ${M} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
`,A=t.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: var(--accent-gradient);
  }
`,B=t.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
`,V=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,W=t.div`
  font-size: 1.1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
  }
`,q=t.div`
  position: relative;
  opacity: 0;
  animation: ${M} 0.6s ease-out forwards;
  animation-delay: 0.3s;
  border-radius: 12px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    z-index: -1;
  }
`,G=t.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
  transform: scale(.85);
  
  
  &:hover {
    transform: scale(.84);
    box-shadow: 12px 12px 12px  var(--primary-color);
  }
`,H=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.2) 0%,
    rgba(99, 102, 241, 0) 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function Q(){const{ref:e,inView:r}=i({threshold:.3,triggerOnce:!0});return x.jsx(F,{id:"about",ref:e,children:x.jsxs(T,{children:[x.jsxs(I,{delay:"0.2s",children:[x.jsx(A,{children:"About Me"}),x.jsx(B,{children:"I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. With a keen eye for detail and a love for clean, efficient code, I specialize in creating seamless web applications that deliver exceptional user experiences."}),x.jsx(B,{children:"My journey in software development has equipped me with a diverse skill set and the ability to tackle complex challenges with innovative solutions."}),x.jsxs(V,{children:[x.jsx(W,{children:"Full Stack Development"}),x.jsx(W,{children:"Modern Web Technologies"}),x.jsx(W,{children:"Responsive Design"}),x.jsx(W,{children:"Problem Solving"})]})]}),x.jsxs(q,{children:[x.jsx(H,{}),x.jsx(G,{src:"/profile-placeholder.jpg",alt:"Professional headshot",onError:e=>{e.target.src="https://via.placeholder.com/500x600"}})]})]})})}const U=o`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,X=t.section`
  padding: 5rem 2rem;
  background-color: var(--light-gray);
`,J=t.div`
  max-width: 1200px;
  margin: 0 auto;
`,K=t.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
`,Z=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`,ee=t.div`
  opacity: 0;
  animation: ${U} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay}s;
`,re=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,te=t.ul`
  list-style: none;
`,oe=t.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`,ae=t.span`
  flex: 1;
  font-weight: 500;
`,ie=t.div`
  flex: 2;
  height: 8px;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${e=>e.progress}%;
    background-color: var(--primary-color);
    border-radius: 4px;
    transition: width 1s ease-out;
  }
`,ne={"Frontend Development":[{name:"React.js",level:90},{name:"JS/TS",level:85},{name:"HTML5/CSS3",level:95},{name:"Redux",level:80}],"Backend Development":[{name:"Node.js",level:85},{name:"Python",level:80},{name:"SQL/NoSQL",level:75},{name:"RESTful APIs",level:90}],"DevOps & Tools":[{name:"Git",level:85},{name:"Docker",level:75},{name:"AWS",level:70},{name:"CI/CD",level:80}]};function se(){const{ref:e,inView:r}=i({threshold:.1,triggerOnce:!0});return x.jsx(X,{id:"skills",ref:e,children:x.jsxs(J,{children:[x.jsx(K,{children:"Skills & Expertise"}),x.jsx(Z,{children:Object.entries(ne).map((([e,t],o)=>x.jsxs(ee,{delay:.2*o,children:[x.jsx(re,{children:e}),x.jsx(te,{children:t.map((e=>x.jsxs(oe,{children:[x.jsx(ae,{children:e.name}),x.jsx(ie,{progress:r?e.level:0})]},e.name)))})]},e)))})]})})}var le={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},de=a.createContext&&a.createContext(le),ce=["attr","size","title"];function me(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},pe.apply(this,arguments)}function ge(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function he(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ge(Object(t),!0).forEach((function(r){xe(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function xe(e,r,t){var o;return(r="symbol"==typeof(o=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"))?o:o+"")in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function fe(e){return e&&e.map(((e,r)=>a.createElement(e.tag,he({key:r},e.attr),fe(e.child))))}function ue(e){return r=>a.createElement(be,pe({attr:he({},e.attr)},r),fe(e.child))}function be(e){var r=r=>{var t,{attr:o,size:i,title:n}=e,s=me(e,ce),l=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",pe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,s,{className:t,style:he(he({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&a.createElement("title",null,n),e.children)};return void 0!==de?a.createElement(de.Consumer,null,(e=>r(e))):r(le)}function ve(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}const ye=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,we=t.section`
  padding: 5rem 2rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent-gradient);
  }
`,je=t.div`
  max-width: 1200px;
  margin: 0 auto;
`,ke=t.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: var(--accent-gradient);
  }
`,Oe=t.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
  margin-bottom: 3rem;
`,ze=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Se=t.div`
  background: var(--background-dark);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${ye} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay};
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
  }
`,Pe=t.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--border-color);
`,Ee=t.div`
  padding: 1.5rem;
`,Ne=t.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`,Ye=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
`,Le=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,De=t.span`
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid var(--border-color);
`,$e=t.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`,Ce=t.a`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  ${e=>e.primary?"\n    background: var(--accent-gradient);\n    color: white;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  ":"\n    background: rgba(99, 102, 241, 0.1);\n    color: var(--text-color);\n    border: 1px solid var(--border-color);\n  "}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }

  svg {
    font-size: 1.1em;
  }
`,Re=[{title:"Project 1",description:"A modern web application built with React and Node.js",image:"https://via.placeholder.com/400x200",tags:["React","Node.js","MongoDB"],liveLink:"#",githubLink:"#"},{title:"Project 2",description:"Mobile-first e-commerce platform with real-time updates",image:"https://via.placeholder.com/400x200",tags:["Vue.js","Firebase","Tailwind"],liveLink:"#",githubLink:"#"},{title:"Project 3",description:"AI-powered data visualization dashboard",image:"https://via.placeholder.com/400x200",tags:["Python","TensorFlow","D3.js"],liveLink:"#",githubLink:"#"}];function _e(){const{ref:e,inView:r}=i({threshold:.1,triggerOnce:!0});return x.jsx(we,{id:"projects",ref:e,children:x.jsxs(je,{children:[x.jsx(ke,{children:"Featured Projects"}),x.jsx(Oe,{children:"Here are some of my recent projects that showcase my skills and experience."}),x.jsx(ze,{children:Re.map(((e,r)=>x.jsxs(Se,{delay:.2+.1*r+"s",children:[x.jsx(Pe,{src:e.image,alt:e.title}),x.jsxs(Ee,{children:[x.jsx(Ne,{children:e.title}),x.jsx(Ye,{children:e.description}),x.jsx(Le,{children:e.tags.map(((e,r)=>x.jsx(De,{children:e},r)))}),x.jsxs($e,{children:[x.jsx(Ce,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",primary:!0,children:"Live Demo"}),x.jsxs(Ce,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:[x.jsx(ve,{})," GitHub"]})]})]})]},r)))})]})})}const Me=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Fe=t.section`
  padding: 5rem 2rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent-gradient);
  }
`,Te=t.div`
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  animation: ${Me} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
`,Ie=t.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: var(--accent-gradient);
  }
`,Ae=t.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
  margin-bottom: 3rem;
`,Be=t.form`
  display: grid;
  gap: 1.5rem;
  background: var(--background-dark);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
  }
`,Ve=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,We=t.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color-secondary);
`,qe=t.input`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: rgba(99, 102, 241, 0.1);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::placeholder {
    color: var(--text-color-secondary);
    opacity: 0.5;
  }
`,Ge=t(qe).attrs({as:"textarea"})`
  min-height: 150px;
  resize: vertical;
`,He=t.button`
  padding: 1rem 2rem;
  background: var(--accent-gradient);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Qe=t.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Ue=t.div`
  text-align: center;
  color: #10b981;
  font-size: 1.1rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  margin-bottom: 1rem;
`;function Xe(){const[r,t]=e.useState({name:"",email:"",message:""}),[o,a]=e.useState({}),[n,s]=e.useState(!1),[l,d]=e.useState(!1),{ref:c,inView:m}=i({threshold:.3,triggerOnce:!0}),p=e=>{const{name:r,value:i}=e.target;t((e=>({...e,[r]:i}))),o[r]&&a((e=>({...e,[r]:""})))};return x.jsx(Fe,{id:"contact",ref:c,children:x.jsxs(Te,{delay:"0.2s",children:[x.jsx(Ie,{children:"Get in Touch"}),x.jsx(Ae,{children:"Have a question or want to work together? Drop me a message!"}),l&&x.jsx(Ue,{children:"Thank you for your message! I'll get back to you soon."}),x.jsxs(Be,{onSubmit:async e=>{e.preventDefault();const o=(()=>{const e={};return r.name.trim()||(e.name="Name is required"),r.email.trim()?/\S+@\S+\.\S+/.test(r.email)||(e.email="Email is invalid"):e.email="Email is required",r.message.trim()||(e.message="Message is required"),e})();if(0===Object.keys(o).length){s(!0);try{await new Promise((e=>setTimeout(e,1500))),d(!0),t({name:"",email:"",message:""})}catch(i){a({submit:"Failed to send message. Please try again."})}finally{s(!1)}}else a(o)},children:[x.jsxs(Ve,{children:[x.jsx(We,{htmlFor:"name",children:"Name"}),x.jsx(qe,{type:"text",id:"name",name:"name",value:r.name,onChange:p,placeholder:"Your name"}),o.name&&x.jsx(Qe,{children:o.name})]}),x.jsxs(Ve,{children:[x.jsx(We,{htmlFor:"email",children:"Email"}),x.jsx(qe,{type:"email",id:"email",name:"email",value:r.email,onChange:p,placeholder:"your.email@example.com"}),o.email&&x.jsx(Qe,{children:o.email})]}),x.jsxs(Ve,{children:[x.jsx(We,{htmlFor:"message",children:"Message"}),x.jsx(Ge,{id:"message",name:"message",value:r.message,onChange:p,placeholder:"Your message here..."}),o.message&&x.jsx(Qe,{children:o.message})]}),x.jsx(He,{type:"submit",disabled:n,children:n?"Sending...":"Send Message"}),o.submit&&x.jsx(Qe,{children:o.submit})]})]})})}const Je=t.div`
  font-family: 'Poppins', sans-serif;
`;function Ke(){return x.jsxs(Je,{children:[x.jsx(z,{}),x.jsx(_,{}),x.jsx(Q,{}),x.jsx(se,{}),x.jsx(_e,{}),x.jsx(Xe,{})]})}f.createRoot(document.getElementById("root")).render(x.jsx(a.StrictMode,{children:x.jsx(Ke,{})}));
//# sourceMappingURL=index-pIiR2v1z.js.map
