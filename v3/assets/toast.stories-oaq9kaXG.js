import{n as B,x as s}from"./iframe-DLVb3rJw.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const{useArgs:Y}=__STORYBOOK_MODULE_PREVIEW_API__,o=`
    .exemple-container {
        display: block;
        width: 100%;
    }

    .exemple-container + .exemple-container {
        margin-top: 20px;
    }

    .exemple-container .dss-toast,
    .exemple-container dss-toast {
        position: relative;
        right: 0px;
        bottom: 0px;
        left: 0px;
        top: 0px;
    }

    .exemple-container-toast-canvas {
        width: 600px;
        height: 300px;
        position: relative;
        overflow: hidden;
    }
`,$={title:"Components/Toast",argTypes:{showToast:{name:"Mostrar",description:"Mostra o tanca el toast.",control:{type:"boolean"}},state:{name:"Estat",description:"Estil que mostrarà el component en funció del nivell de criticitat. Pot ser: info, success, warning o error.",control:{type:"radio"},options:["info","success","warning","error"]},icon:{name:"Icona",description:"Icona que es mostrarà en el toast. Si no s'especifica, es mostrarà la icona per defecte de l'estat.",control:{type:"text"}},position:{name:"Posició",description:"Posició on es mostrarà el toast. Pot ser: top-left, top-right, bottom-left o bottom-right.",control:{type:"radio"},options:["top-left","top-right","bottom-left","bottom-right"]},text:{name:"Text",description:"El text que es mostrarà en el toast. Per fer salt de línia, utilitza '\\n'.",control:{type:"text"}},hasIcon:{name:"Amb icona",description:"Amb l'icona del estat.",control:{type:"boolean"}},hasButton:{name:"Amb botó",description:"Mostrar un botó en el toast.",control:{type:"boolean"},if:{arg:"hasButtonClose",eq:!1}},buttonLabel:{name:"Text del botó",description:"Text que mostrarà en el botó del toast.",control:{type:"text"},if:{arg:"hasButton",eq:!0}},hasButtonClose:{name:"Amb botó tancar",description:"Mostrar el botó d'icona per tancar el toast.",control:{type:"boolean"},if:{arg:"hasButton",eq:!1}},duration:{name:"Duració",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}}}},a={parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev"}},args:{showToast:!0,state:"info",position:"bottom-left",icon:"",text:"Your message, short and clear.",hasIcon:!0,hasButton:!1,buttonLabel:"Button",hasButtonClose:!1,duration:0},render:t=>{const[I,y]=Y(),f=()=>y({...t,showToast:!1});return s`
      <div class="exemple-container-toast-canvas">
        ${B(t.hasButton,()=>s`<dss-toast ?isShow=${t.showToast} state="${t.state}" position="${t.position}" icon="${t.icon}" text="${t.text}" ?hasIcon=${t.hasIcon} ?hasButton=${t.hasButton} buttonLabel="${t.buttonLabel}" ?hasButtonClose=${t.hasButtonClose} duration=${t.duration} @onClose=${f}></dss-toast>`,()=>s`<dss-toast ?isShow=${t.showToast} state="${t.state}" position="${t.position}" icon="${t.icon}" text="${t.text}" ?hasIcon=${t.hasIcon} ?hasButtonClose=${t.hasButtonClose} duration=${t.duration} @onClose=${f}></dss-toast>`)}
      </div>
    `}},r={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-no-action-style")]},n={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-no-icon-style")]},d={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-icon-style")]},i={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-button-close-style")]},c={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-button-style")]},l={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-duration-style")]},u={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-no-duration-style")]},m={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-multiline-style")]},h={tags:["!dev"],render:()=>s`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-top-left-style")]},p={tags:["!dev"],render:()=>s`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-top-right-style")]},v={tags:["!dev"],render:()=>s`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-bottom-left-style")]},x={tags:["!dev"],render:()=>s`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-bottom-right-style")]},g={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-info-style")]},w={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-success-style")]},S={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-warning-style")]},b={tags:["!dev"],render:()=>s`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `,decorators:[e(o,"toast-error-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev'
    }
  },
  args: {
    showToast: true,
    state: 'info',
    position: 'bottom-left',
    icon: '',
    text: 'Your message, short and clear.',
    hasIcon: true,
    hasButton: false,
    buttonLabel: 'Button',
    hasButtonClose: false,
    duration: 0
  },
  render: (args: any) => {
    const [_, updateArgs] = useArgs();
    const onClose = () => updateArgs({
      ...args,
      showToast: false
    });
    return html\`
      <div class="exemple-container-toast-canvas">
        \${when(args.hasButton, () => html\`<dss-toast ?isShow=\${args.showToast} state="\${args.state}" position="\${args.position}" icon="\${args.icon}" text="\${args.text}" ?hasIcon=\${args.hasIcon} ?hasButton=\${args.hasButton} buttonLabel="\${args.buttonLabel}" ?hasButtonClose=\${args.hasButtonClose} duration=\${args.duration} @onClose=\${onClose}></dss-toast>\`, () => html\`<dss-toast ?isShow=\${args.showToast} state="\${args.state}" position="\${args.position}" icon="\${args.icon}" text="\${args.text}" ?hasIcon=\${args.hasIcon} ?hasButtonClose=\${args.hasButtonClose} duration=\${args.duration} @onClose=\${onClose}></dss-toast>\`)}
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-no-action-style')]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasIcon="false" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-no-icon-style')]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." icon="add_box" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-icon-style')]
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-button-close-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-button-style')]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-duration-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-no-duration-style')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-multiline-style')]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-top-left-style')]
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-top-right-style')]
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-bottom-left-style')]
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-bottom-right-style')]
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-info-style')]
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-success-style')]
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-warning-style')]
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-error-style')]
}`,...b.parameters?.docs?.source}}};const C=["Playground","NoAction","NoIcon","Icon","ButtonClose","Button","Duration","NoDuration","Multiline","TopLeft","TopRight","BottomLeft","BottomRight","Info","Success","WarningState","ErrorState"],T=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:v,BottomRight:x,Button:c,ButtonClose:i,Duration:l,ErrorState:b,Icon:d,Info:g,Multiline:m,NoAction:r,NoDuration:u,NoIcon:n,Playground:a,Success:w,TopLeft:h,TopRight:p,WarningState:S,__namedExportsOrder:C,default:$},Symbol.toStringTag,{value:"Module"}));export{i as B,l as D,b as E,d as I,m as M,n as N,a as P,T as S,h as T,S as W,r as a,c as b,u as c,p as d,v as e,x as f,g,w as h};
