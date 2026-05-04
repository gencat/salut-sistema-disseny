import{x as e}from"./iframe-DIl293iJ.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const s=`
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
`,x={title:"Collections/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}},buttonBottom:{name:"Posició inferior del botó.",control:{type:"boolean"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"El teu missatge aquí.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button",buttonBottom:!1},render:a=>{let g=!1,v=!1;switch(a.show){case"Close Icon":g=!0,v=!1;break;case"Button":g=!1,v=!0;break;default:g=!1,v=!1;break}return e`
        <dss-alert 
          state="${a.state}" 
          size="${a.size}" 
          message="${a.text}"
          ?hasCloseIcon=${g}
          ?hasButton=${v}
          .buttonLabel="${a.buttonLabel}"
                    ?buttonBottom=${a.buttonBottom}
          >
        </dss-alert>
      `}},o={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="info" size="lg" titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="lg" hasButton titleText="Títol missatge" buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-size-lg-style")]},l={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" titleText="Títol missatge"></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon titleText="Títol missatge"></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        <dss-alert state="info" size="md" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
  </div>
    `,decorators:[t(s,"alert-size-md-style")]},n={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="info" size="sm" titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-size-sm-style")]},i={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="error" size="lg" titleText="Títol missatge d´error"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon titleText="Títol missatge d´error"></dss-alert>
            <dss-alert state="error" size="lg" hasButton titleText="Títol missatge d´error" buttonLabel="Button"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'error que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-status-error-style")]},d={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="warning" size="lg" titleText="Títol missatge d´alerta"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon titleText="Títol missatge d´alerta"></dss-alert>
            <dss-alert state="warning" size="lg" hasButton titleText="Títol missatge d´alerta" buttonLabel="Button"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'advertència que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-status-warning-style")]},c={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
            <dss-alert state="success" size="lg" titleText="Títol missatge d´èxit"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon titleText="Títol missatge d´èxit"></dss-alert>
            <dss-alert state="success" size="lg" hasButton titleText="Títol missatge d´èxit" buttonLabel="Button"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'èxit que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-status-success-style")]},m={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
            <dss-alert state="info" size="lg" titleText="Títol missatge d´informació"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Títol missatge d´informació"></dss-alert>
            <dss-alert state="info" size="lg" hasButton titleText="Títol missatge d´informació" buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[t(s,"alert-status-info-style")]},u={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon titleText="El teu missatge aquí."></dss-alert>
                </div>
            </div>
    `,decorators:[t(s,"alert-full-width-style")]},p={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" titleText="El teu missatge aquí." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            <dss-alert state="warning" size="lg" titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    `,decorators:[t(s,"alert-button-bottom-style")]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev'
    }
  },
  args: {
    text: 'El teu missatge aquí.',
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="info" size="lg" titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="lg" hasButton titleText="Títol missatge" buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-lg-style')]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" titleText="Títol missatge"></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon titleText="Títol missatge"></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        <dss-alert state="info" size="md" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-md-style')]
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="info" size="sm" titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon titleText="Títol missatge"></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." description="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-sm-style')]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="error" size="lg" titleText="Títol missatge d´error"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon titleText="Títol missatge d´error"></dss-alert>
            <dss-alert state="error" size="lg" hasButton titleText="Títol missatge d´error" buttonLabel="Button"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'error que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-error-style')]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="warning" size="lg" titleText="Títol missatge d´alerta"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon titleText="Títol missatge d´alerta"></dss-alert>
            <dss-alert state="warning" size="lg" hasButton titleText="Títol missatge d´alerta" buttonLabel="Button"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'advertència que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-warning-style')]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
            <dss-alert state="success" size="lg" titleText="Títol missatge d´èxit"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon titleText="Títol missatge d´èxit"></dss-alert>
            <dss-alert state="success" size="lg" hasButton titleText="Títol missatge d´èxit" buttonLabel="Button"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon titleText="Aquesta és una alerta d'èxit que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-success-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
            <dss-alert state="info" size="lg" titleText="Títol missatge d´informació"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Títol missatge d´informació"></dss-alert>
            <dss-alert state="info" size="lg" hasButton titleText="Títol missatge d´informació" buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-info-style')]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon titleText="El teu missatge aquí."></dss-alert>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-full-width-style')]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" titleText="El teu missatge aquí." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            <dss-alert state="warning" size="lg" titleText="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-button-bottom-style')]
}`,...p.parameters?.docs?.source}}};const h=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info","FullWidth","ButtonBottom"],q=Object.freeze(Object.defineProperty({__proto__:null,ButtonBottom:p,ErrorState:i,FullWidth:u,Info:m,Playground:r,SizeLg:o,SizeMd:l,SizeSm:n,Success:c,Warning:d,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{p as B,i as E,u as F,m as I,r as P,q as S,d as W,o as a,l as b,n as c,c as d};
