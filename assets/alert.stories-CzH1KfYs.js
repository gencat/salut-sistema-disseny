import"./lit-element-Dloa6E9d.js";import{x as s}from"./lit-html-D6a8R3xZ.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const a=`
    .demo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        max-width: 400px;
    }
    .demo-wrapper--full-width {
        width: 700px;
        max-width: 700px;
    }
    .dss-wrapper-column {
        width: 100%;
    }
`,D={title:"Components/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"Your message, short and clear.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button"},render:r=>{let g=!1,p=!1;switch(r.show){case"Close Icon":g=!0,p=!1;break;case"Button":g=!1,p=!0;break;default:g=!1,p=!1;break}return s`
        <dss-alert 
          state="${r.state}" 
          size="${r.size}" 
          message="${r.text}"
          ?hasCloseIcon=${g}
          ?hasButton=${p}
          .buttonLabel="${r.buttonLabel}"
          >
        </dss-alert>
      `}},o={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-size-lg-style")]},l={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-size-md-style")]},d={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="info" size="sm" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-size-sm-style")]},n={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="error" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-status-error-style")]},m={tags:["!dev"],render:()=>s`
    <div class="demo-wrapper">
    <dss-alert state="warning" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-status-warning-style")]},i={tags:["!dev"],render:()=>s`
     <div class="demo-wrapper">
    <dss-alert state="success" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-status-success-style")]},c={tags:["!dev"],render:()=>s`
     <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[e(a,"alert-status-info-style")]},u={tags:["!dev"],render:()=>s`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
                </div>
            </div>
    `,decorators:[e(a,"alert-full-width-style")]};var h,w,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(w=t.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var f,v,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-lg-style')]
}`,...(L=(v=o.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var b,Y,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-md-style')]
}`,...(y=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:y.source}}};var S,C,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="sm" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-sm-style')]
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var B,x,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-error-style')]
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var _,$,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-warning-style')]
}`,...(k=($=m.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var A,E,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-success-style')]
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,M,P;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-info-style')]
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,O,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-full-width-style')]
}`,...(j=(O=u.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const H=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info","FullWidth"],G=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:n,FullWidth:u,Info:c,Playground:t,SizeLg:o,SizeMd:l,SizeSm:d,Success:i,Warning:m,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{n as E,u as F,c as I,t as P,G as S,m as W,o as a,l as b,d as c,i as d};
