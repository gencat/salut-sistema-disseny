import"./lit-element-Dloa6E9d.js";import{x as s}from"./lit-html-D6a8R3xZ.js";import"./alert-BWwOAevA.js";const O={title:"Components/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"Your message, short and clear.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button"},render:e=>{let c=!1,u=!1;switch(e.show){case"Close Icon":c=!0,u=!1;break;case"Button":c=!1,u=!0;break;default:c=!1,u=!1;break}return s`
        <dss-alert 
          state="${e.state}" 
          size="${e.size}" 
          message="${e.text}"
          ?hasCloseIcon=${c}
          ?hasButton=${u}
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
    `},i={tags:["!dev"],render:()=>s`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
                </div>
            </div>
    `};var g,h,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var z,v,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var L,f,b;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var Y,C,I;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var B,S,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,y,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,A,k;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var E,F,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,P,q;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
                </div>
            </div>
    \`;
  }
}`,...(q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const j=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info","FullWidth"],K=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:n,FullWidth:i,Info:m,Playground:a,SizeLg:r,SizeMd:t,SizeSm:o,Success:d,Warning:l,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{K as A,n as E,i as F,m as I,a as P,r as S,l as W,t as a,o as b,d as c};
