import"./lit-element-DhY7bShc.js";import{x as s}from"./lit-html-B2eaWknC.js";import"./alert-DzPjPEry.js";const P={title:"Components/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"Your message, short and clear.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button"},render:e=>{let i=!1,c=!1;switch(e.show){case"Close Icon":i=!0,c=!1;break;case"Button":i=!1,c=!0;break;default:i=!1,c=!1;break}return s`
        <dss-alert 
          state="${e.state}" 
          size="${e.size}" 
          message="${e.text}"
          ?hasCloseIcon=${i}
          ?hasButton=${c}
          .buttonLabel="${e.buttonLabel}"
          >
        </dss-alert>
      `}},r={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},t={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},o={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="sm" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},n={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="error" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},l={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="warning" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},d={tags:["!dev"],render:()=>s`
     <div class="demo-wrapper">
    <dss-alert state="success" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `},m={tags:["!dev"],render:()=>s`
     <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev'
    }
  },
  args: {
    text: 'Your message, short and clear.',
    size: 'lg',
    state: 'error',
    show: 'Cap',
    buttonLabel: 'Button'
  } as AlertArgs,
  render: (args: AlertArgs) => {
    let _hasCloseIcon = false;
    let _hasButton = false;
    switch (args.show) {
      case 'Close Icon':
        _hasCloseIcon = true;
        _hasButton = false;
        break;
      case 'Button':
        _hasCloseIcon = false;
        _hasButton = true;
        break;
      default:
        _hasCloseIcon = false;
        _hasButton = false;
        break;
    }
    return html\`
        <dss-alert 
          state="\${args.state}" 
          size="\${args.size}" 
          message="\${args.text}"
          ?hasCloseIcon=\${_hasCloseIcon}
          ?hasButton=\${_hasButton}
          .buttonLabel="\${args.buttonLabel}"
          >
        </dss-alert>
      \`;
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var p,z,L;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(L=(z=r.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var b,v,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var Y,w,C;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="sm" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var I,B,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="error" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,_,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="warning" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(y=(_=l.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var x,$,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
    <dss-alert state="success" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var k,E,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  }
}`,...(M=(E=m.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const F=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info"],j=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:n,Info:m,Playground:a,SizeLg:r,SizeMd:t,SizeSm:o,Success:d,Warning:l,__namedExportsOrder:F,default:P},Symbol.toStringTag,{value:"Module"}));export{j as A,n as E,m as I,a as P,r as S,l as W,t as a,o as b,d as c};
