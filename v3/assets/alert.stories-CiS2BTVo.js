import{x as e}from"./iframe-CdZ_4rdx.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
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
`,h={title:"Components/Alert",component:"dss-alert",argTypes:{text:{name:"Missatge",control:{type:"text"}},size:{name:"Mides",control:{type:"radio"},options:["lg","md","sm"]},state:{name:"Estat",control:{type:"radio"},options:["error","warning","success","info"]},show:{name:"Mostrar",control:{type:"radio"},options:["Cap","Close Icon","Button"]},buttonLabel:{name:"Text del botó.",control:{type:"text"},if:{arg:"show",eq:"Button"}},buttonBottom:{name:"Posició inferior del botó.",control:{type:"boolean"},if:{arg:"show",eq:"Button"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=191-2839&m=dev"}},args:{text:"El teu missatge aquí.",size:"lg",state:"error",show:"Cap",buttonLabel:"Button",buttonBottom:!1},render:t=>{let p=!1,v=!1;switch(t.show){case"Close Icon":p=!0,v=!1;break;case"Button":p=!1,v=!0;break;default:p=!1,v=!1;break}return e`
        <dss-alert 
          state="${t.state}" 
          size="${t.size}" 
          message="${t.text}"
          ?hasCloseIcon=${p}
          ?hasButton=${v}
          .buttonLabel="${t.buttonLabel}"
                    ?buttonBottom=${t.buttonBottom}
          >
        </dss-alert>
      `}},o={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="info" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-size-lg-style")]},l={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="El teu missatge aquí."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="El teu missatge aquí."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
  </div>
    `,decorators:[s(a,"alert-size-md-style")]},n={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="info" size="sm" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-size-sm-style")]},i={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="error" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="error" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon message="Aquesta és una alerta d'error que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-status-error-style")]},d={tags:["!dev"],render:()=>e`
    <div class="demo-wrapper">
            <dss-alert state="warning" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="warning" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon message="Aquesta és una alerta d'advertència que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-status-warning-style")]},u={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
            <dss-alert state="success" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="success" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon message="Aquesta és una alerta d'èxit que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-status-success-style")]},m={tags:["!dev"],render:()=>e`
     <div class="demo-wrapper">
            <dss-alert state="info" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    `,decorators:[s(a,"alert-status-info-style")]},c={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
                </div>
            </div>
    `,decorators:[s(a,"alert-full-width-style")]},g={tags:["!dev"],render:()=>e`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" message="El teu missatge aquí." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            <dss-alert state="warning" size="lg" message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    `,decorators:[s(a,"alert-button-bottom-style")]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            <dss-alert state="info" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-lg-style')]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
    <dss-alert state="info" size="md" message="El teu missatge aquí."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="El teu missatge aquí."></dss-alert>
    <dss-alert state="info" size="md" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-md-style')]
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="info" size="sm" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="sm" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-size-sm-style')]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="error" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="error" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="error" size="lg" hasCloseIcon message="Aquesta és una alerta d'error que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-error-style')]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="demo-wrapper">
            <dss-alert state="warning" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="warning" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="warning" size="lg" hasCloseIcon message="Aquesta és una alerta d'advertència que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-warning-style')]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
            <dss-alert state="success" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="success" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="success" size="lg" hasCloseIcon message="Aquesta és una alerta d'èxit que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-success-style')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
            <dss-alert state="info" size="lg" message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
            <dss-alert state="info" size="lg" hasButton message="El teu missatge aquí." buttonLabel="Button"></dss-alert>
            <dss-alert state="info" size="lg" hasCloseIcon message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia."></dss-alert>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-status-info-style')]
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper demo-wrapper--full-width">
                <div class="dss-wrapper-column">
                    <dss-alert fullWidth state="info" size="lg" hasCloseIcon message="El teu missatge aquí."></dss-alert>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-full-width-style')]
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-wrapper ">
            <dss-alert state="warning" size="lg" message="El teu missatge aquí." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            <dss-alert state="warning" size="lg" message="Aquesta és una alerta informativa que conté un missatge una mica més llarg del normal. Serveix per comprovar com es comporta el component quan el text ocupa diverses línies i s’ha de truncar després de la tercera línia." hasButton buttonLabel="Button" buttonBottom></dss-alert>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'alert-button-bottom-style')]
}`,...g.parameters?.docs?.source}}};const q=["Playground","SizeLg","SizeMd","SizeSm","ErrorState","Warning","Success","Info","FullWidth","ButtonBottom"],z=Object.freeze(Object.defineProperty({__proto__:null,ButtonBottom:g,ErrorState:i,FullWidth:c,Info:m,Playground:r,SizeLg:o,SizeMd:l,SizeSm:n,Success:u,Warning:d,__namedExportsOrder:q,default:h},Symbol.toStringTag,{value:"Module"}));export{g as B,i as E,c as F,m as I,r as P,z as S,d as W,o as a,l as b,n as c,u as d};
