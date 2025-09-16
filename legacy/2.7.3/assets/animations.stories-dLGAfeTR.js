import"./lit-element-Dloa6E9d.js";import{x as n}from"./lit-html-D6a8R3xZ.js";var d=Object.freeze,I=Object.defineProperty,s=(r,M)=>d(I(r,"raw",{value:d(r.slice())})),c,l,p,m,g;const _={title:"Foundations/Animations"},e={tags:["!dev"],render:()=>n(c||(c=s([`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .overlay{
          position:absolute;
          inset:0;
          opacity:0;
          pointer-events:none;
          transition: opacity var(--animation-delay) ease-out;
          z-index: 100;
        }
        .overlay.active{
          opacity: 1;
          pointer-events: all;
        }
      </style>
      <script>
        const onFade=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        onFade('#toggle-fade','onClick',()=>document.getElementById('fade-overlay').classList.toggle('active'));
      <\/script>
      <dss-button id="toggle-fade" size="sm" label="Mostra animació"></dss-button>
      <div class="demo-wrapper">
        <div id="fade-overlay" class="overlay">
          <dss-tile 
            type="button" 
            icon="add_box" 
            tiletitle="Tile Title"
            description="Lorem ipsume dolor sit amae."
          ></dss-tile>
        </div>
      </div>
    `])))},t={tags:["!dev"],render:()=>n(l||(l=s([`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .modal{
          position:absolute;
          top: 50%;
          left: 50%;
          transform:translate(-50%,-50%) scale(.9);
          width:min(90%, 400px);
          background:#fff;
          border-radius:1rem;
          box-shadow:0 8px 24px rgba(0,0,0,.1);
          opacity:0;
          transition: transform var(--animation-delay) ease-out, opacity var(--animation-delay) ease-out;
          padding: 1.5rem;
          z-index: 100;
          display:flex;
          flex-direction:column;
        }
        .modal.active{
          transform:translate(-50%,-50%) scale(1);
          opacity:1;
        }
        .modal dss-icon-button{
          align-self:flex-end;
          background:none;
          color:#111827;
          font-size:1.25rem;
        }
      </style>
      <script>
        const onScale=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const openModal=()=>{
          document.getElementById('modal').classList.add('active');
          document.getElementById('modal-backdrop').classList.add('active');
        };
        const closeModal=()=>{
          document.getElementById('modal').classList.remove('active');
          document.getElementById('modal-backdrop').classList.remove('active');
        };
        onScale('#open-modal','onClick', openModal);

        // on('#open-modal','click',openModal);
        onScale('#close-modal','click',closeModal);
        onScale('#modal-backdrop','click',closeModal);
      <\/script>
      <dss-button id="open-modal" size="sm" label="Obre modal"></dss-button>
      <div class="demo-wrapper">
        <div id="modal-backdrop" class="overlay"></div>
        <div id="modal" class="modal">
          <dss-icon-button id="close-modal" icon="close" size="sm" label="Tancar modal"></dss-icon-button>
          <p>Sóc un modal amb animació d'escalat.</p>
        </div>
      </div>
    `])))},a={tags:["!dev"],render:()=>n(p||(p=s([`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .accordion-trigger{
          width:100%;
          text-align:left;
          background:var(--color-primary-50);
          border:none;
          color:var(--color-primary-700);
          padding: var(--dss-spacing-xxs) var(--dss-spacing-xs);
          border-radius: var(--dss-radius-xs);
          cursor:pointer;
        }
        .accordion{
          max-height:0;
          font-size: 14px;
          overflow:hidden;
          transition: max-height var(--animation-delay) ease-in-out, padding var(--animation-delay) ease-in-out;
          padding: 0;
        }
        .accordion.open{
          padding:1rem 0;
        }
      </style>
      <script>
        const onAccordion=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const toggleAccordion=()=>{
          const acc=document.querySelector('.accordion');
          const open=acc.classList.toggle('open');
          acc.style.maxHeight=open?'100px':'';
        }
        onAccordion('.accordion-trigger','click',toggleAccordion);
      <\/script>
      <div class="demo-wrapper">
        <button class="accordion-trigger">Secció 1</button>
        <div class="accordion">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula.</p>
        </div>
      </div>
    `])))},o={tags:["!dev"],render:()=>n(m||(m=s([`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .demo-wrapper--page {
          height: 210px !important;
        }
        .demo-controls {
          display: flex;
          gap: 8px;
        }
        #page-container{
          position:relative;
          overflow:hidden;
          border:2px dashed #d1d5db;
          height:200px;
        }
        .page{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          gap: 16px;
          align-items:center;
          justify-content:center;
          font-size:1.5rem;
          background:#fff;
          transform:translateX(100%);
          opacity:0;
          transition:transform var(--animation-delay) ease-in-out, opacity var(--animation-delay) ease-in-out;
        }
        .page-current{
          transform:translateX(0);
          opacity:1;
        }
      </style>
      <script>
        let next = true;
        const onTransition=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const buttonNext=document.getElementById('to-page-b');
        const buttonBack=document.getElementById('back-page-a');
        buttonBack.setAttribute('disabled', true);
        const pageA=document.getElementById('page-a');
        const pageB=document.getElementById('page-b');
        onTransition('#to-page-b','onClick',()=>{
          pageA.classList.remove('page-current');
          pageB.classList.add('page-current');
          buttonBack.removeAttribute('disabled');
          buttonNext.setAttribute('disabled', true);
        });
        onTransition('#back-page-a','onClick',()=>{
          pageB.classList.remove('page-current');
          pageA.classList.add('page-current');
          buttonNext.removeAttribute('disabled');
          buttonBack.setAttribute('disabled', true);

        });
      <\/script>
      <div class="demo-controls">
        <dss-button id="back-page-a" size="sm" label="Torna a Pàgina A"></dss-button>
        <dss-button id="to-page-b" size="sm" label="Ves a Pàgina B"></dss-button>
      </div>
      <div class="demo-wrapper demo-wrapper--page">
        <div id="page-container">
          <div id="page-a" class="page page-current">Pàgina A</div>
          <div id="page-b" class="page">Pàgina B</div>
        </div>
      </div>
    `])))},i={tags:["!dev"],render:()=>n(g||(g=s([`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .demo-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          gap: 8px;
          font-size: 14px;
        }
        .overlay-bg{
          position:absolute;
          inset:0;
          opacity:0;
          pointer-events:none;
          background: rgba(0,0,0,0);
          transition: background var(--animation-delay) ease-out, opacity var(--animation-delay) ease-out;
          z-index: 100;
        }
        .overlay-bg.active{
          background: rgba(0,0,0,.5);
          opacity: 1;
          pointer-events: all;
        }
      </style>
      <script>
        const onOverlay=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        onOverlay('#toggle-overlay','onClick',()=>document.getElementById('overlay-bg').classList.toggle('active'));
      <\/script>
      <dss-button id="toggle-overlay" size="sm" label="Mostra animació"></dss-button>
      <div class="demo-wrapper">
        <div class="demo-content">
          <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
          Lorem ipsum
        </div>
        <div id="overlay-bg" class="overlay-bg"></div>
      </div>
    `])))};var v,u,b;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .overlay{
          position:absolute;
          inset:0;
          opacity:0;
          pointer-events:none;
          transition: opacity var(--animation-delay) ease-out;
          z-index: 100;
        }
        .overlay.active{
          opacity: 1;
          pointer-events: all;
        }
      </style>
      <script>
        const onFade=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        onFade('#toggle-fade','onClick',()=>document.getElementById('fade-overlay').classList.toggle('active'));
      <\/script>
      <dss-button id="toggle-fade" size="sm" label="Mostra animació"></dss-button>
      <div class="demo-wrapper">
        <div id="fade-overlay" class="overlay">
          <dss-tile 
            type="button" 
            icon="add_box" 
            tiletitle="Tile Title"
            description="Lorem ipsume dolor sit amae."
          ></dss-tile>
        </div>
      </div>
    \`;
  }
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,x,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .modal{
          position:absolute;
          top: 50%;
          left: 50%;
          transform:translate(-50%,-50%) scale(.9);
          width:min(90%, 400px);
          background:#fff;
          border-radius:1rem;
          box-shadow:0 8px 24px rgba(0,0,0,.1);
          opacity:0;
          transition: transform var(--animation-delay) ease-out, opacity var(--animation-delay) ease-out;
          padding: 1.5rem;
          z-index: 100;
          display:flex;
          flex-direction:column;
        }
        .modal.active{
          transform:translate(-50%,-50%) scale(1);
          opacity:1;
        }
        .modal dss-icon-button{
          align-self:flex-end;
          background:none;
          color:#111827;
          font-size:1.25rem;
        }
      </style>
      <script>
        const onScale=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const openModal=()=>{
          document.getElementById('modal').classList.add('active');
          document.getElementById('modal-backdrop').classList.add('active');
        };
        const closeModal=()=>{
          document.getElementById('modal').classList.remove('active');
          document.getElementById('modal-backdrop').classList.remove('active');
        };
        onScale('#open-modal','onClick', openModal);

        // on('#open-modal','click',openModal);
        onScale('#close-modal','click',closeModal);
        onScale('#modal-backdrop','click',closeModal);
      <\/script>
      <dss-button id="open-modal" size="sm" label="Obre modal"></dss-button>
      <div class="demo-wrapper">
        <div id="modal-backdrop" class="overlay"></div>
        <div id="modal" class="modal">
          <dss-icon-button id="close-modal" icon="close" size="sm" label="Tancar modal"></dss-icon-button>
          <p>Sóc un modal amb animació d'escalat.</p>
        </div>
      </div>
    \`;
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,k,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .accordion-trigger{
          width:100%;
          text-align:left;
          background:var(--color-primary-50);
          border:none;
          color:var(--color-primary-700);
          padding: var(--dss-spacing-xxs) var(--dss-spacing-xs);
          border-radius: var(--dss-radius-xs);
          cursor:pointer;
        }
        .accordion{
          max-height:0;
          font-size: 14px;
          overflow:hidden;
          transition: max-height var(--animation-delay) ease-in-out, padding var(--animation-delay) ease-in-out;
          padding: 0;
        }
        .accordion.open{
          padding:1rem 0;
        }
      </style>
      <script>
        const onAccordion=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const toggleAccordion=()=>{
          const acc=document.querySelector('.accordion');
          const open=acc.classList.toggle('open');
          acc.style.maxHeight=open?'100px':'';
        }
        onAccordion('.accordion-trigger','click',toggleAccordion);
      <\/script>
      <div class="demo-wrapper">
        <button class="accordion-trigger">Secció 1</button>
        <div class="accordion">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula.</p>
        </div>
      </div>
    \`;
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var B,L,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .demo-wrapper--page {
          height: 210px !important;
        }
        .demo-controls {
          display: flex;
          gap: 8px;
        }
        #page-container{
          position:relative;
          overflow:hidden;
          border:2px dashed #d1d5db;
          height:200px;
        }
        .page{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          gap: 16px;
          align-items:center;
          justify-content:center;
          font-size:1.5rem;
          background:#fff;
          transform:translateX(100%);
          opacity:0;
          transition:transform var(--animation-delay) ease-in-out, opacity var(--animation-delay) ease-in-out;
        }
        .page-current{
          transform:translateX(0);
          opacity:1;
        }
      </style>
      <script>
        let next = true;
        const onTransition=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        const buttonNext=document.getElementById('to-page-b');
        const buttonBack=document.getElementById('back-page-a');
        buttonBack.setAttribute('disabled', true);
        const pageA=document.getElementById('page-a');
        const pageB=document.getElementById('page-b');
        onTransition('#to-page-b','onClick',()=>{
          pageA.classList.remove('page-current');
          pageB.classList.add('page-current');
          buttonBack.removeAttribute('disabled');
          buttonNext.setAttribute('disabled', true);
        });
        onTransition('#back-page-a','onClick',()=>{
          pageB.classList.remove('page-current');
          pageA.classList.add('page-current');
          buttonNext.removeAttribute('disabled');
          buttonBack.setAttribute('disabled', true);

        });
      <\/script>
      <div class="demo-controls">
        <dss-button id="back-page-a" size="sm" label="Torna a Pàgina A"></dss-button>
        <dss-button id="to-page-b" size="sm" label="Ves a Pàgina B"></dss-button>
      </div>
      <div class="demo-wrapper demo-wrapper--page">
        <div id="page-container">
          <div id="page-a" class="page page-current">Pàgina A</div>
          <div id="page-b" class="page">Pàgina B</div>
        </div>
      </div>
    \`;
  }
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,z,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        #root-inner {
          display: grid;
          gap: 16px;
        }
        .demo-wrapper {
          position: relative;
          height: 100px;
          width: 500px;
        }
        .demo-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          gap: 8px;
          font-size: 14px;
        }
        .overlay-bg{
          position:absolute;
          inset:0;
          opacity:0;
          pointer-events:none;
          background: rgba(0,0,0,0);
          transition: background var(--animation-delay) ease-out, opacity var(--animation-delay) ease-out;
          z-index: 100;
        }
        .overlay-bg.active{
          background: rgba(0,0,0,.5);
          opacity: 1;
          pointer-events: all;
        }
      </style>
      <script>
        const onOverlay=(sel,ev,fn)=>document.querySelector(sel).addEventListener(ev,fn);
        onOverlay('#toggle-overlay','onClick',()=>document.getElementById('overlay-bg').classList.toggle('active'));
      <\/script>
      <dss-button id="toggle-overlay" size="sm" label="Mostra animació"></dss-button>
      <div class="demo-wrapper">
        <div class="demo-content">
          <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
          Lorem ipsum
        </div>
        <div id="overlay-bg" class="overlay-bg"></div>
      </div>
    \`;
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const T=["Fade","Scale","Accordion","Transition","Overlay"],P=Object.freeze(Object.defineProperty({__proto__:null,Accordion:a,Fade:e,Overlay:i,Scale:t,Transition:o,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{a as A,e as F,i as O,P as S,o as T,t as a};
