import"./lit-element-Dloa6E9d.js";import{x as e}from"./lit-html-D6a8R3xZ.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
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
`,X={title:"Components/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}},buttonBottom:{name:"Posició inferior del botó.",control:{type:"boolean"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"Your message, short and clear.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button",buttonBottom:!1},render:r=>{let p=!1,h=!1;switch(r.show){case"Close Icon":p=!0,h=!1;break;case"Button":p=!1,h=!0;break;default:p=!1,h=!1;break}return e`
        <dss-alert 
          state="${r.state}" 
          size="${r.size}" 
          message="${r.text}"
          ?hasCloseIcon=${p}
          ?hasButton=${h}
          .buttonLabel="${r.buttonLabel}"
                    ?buttonBottom=${r.buttonBottom}
          >
        </dss-alert>
      `}},o={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-size-lg-style")]},l={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-size-md-style")]},d={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="info" size="sm" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="sm" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-size-sm-style")]},n={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="error" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="error" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="error" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-status-error-style")]},m={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="warning" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="warning" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="warning" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-status-warning-style")]},i={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
    <dss-alert state="success" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="success" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="success" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-status-success-style")]},c={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
    <dss-alert state="info" size="lg" message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
    <dss-alert state="info" size="lg" hasButton message="Your message, short and clear." buttonLabel="Button"></dss-alert>
    <dss-alert state="info" size="lg" hasCloseIcon message="Your message, short and clear. Two lines restriction has been removed. Lorem ipsum dolor sit amae. Lorem ipsum dolor sit amae. Lorem ipsum dolor."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-status-info-style")]},u={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="Your message, short and clear."></dss-alert>
                </div>
            </div>
    `,decorators:[s(a,"alert-full-width-style")]},g={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" message="Your message, short and clear." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    `,decorators:[s(a,"alert-button-bottom-style")]};var w,b,z;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    buttonLabel: 'Button',
    buttonBottom: false
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
                    ?buttonBottom=\${args.buttonBottom}
          >
        </dss-alert>
      \`;
  }
}`,...(z=(b=t.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var v,f,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var Y,y,B;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var S,C,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var x,T,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,k,A;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,F,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,M,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var O,j,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" message="Your message, short and clear." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-button-bottom-style')]
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const G=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info","FullWidth","ButtonBottom"],U=Object.freeze(Object.defineProperty({__proto__:null,ButtonBottom:g,ErrorState:n,FullWidth:u,Info:c,Playground:t,SizeLg:o,SizeMd:l,SizeSm:d,Success:i,Warning:m,__namedExportsOrder:G,default:X},Symbol.toStringTag,{value:"Module"}));export{g as B,n as E,u as F,c as I,t as P,U as S,m as W,o as a,l as b,d as c,i as d};
