import{x as s}from"./lit-html-D6cejpwM.js";import"./toast-Dtxsyf8f.js";import{n as bt}from"./when-BR7zwNJC.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const{useArgs:ft}=__STORYBOOK_MODULE_PREVIEW_API__,o=`
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
`,yt={title:"Components/Toast",argTypes:{showToast:{name:"Mostrar",description:"Mostra o tanca el toast.",control:{type:"boolean"}},state:{name:"Estat",description:"Estil que mostrarà el component en funció del nivell de criticitat. Pot ser: info, success, warning o error.",control:{type:"radio"},options:["info","success","warning","error"]},icon:{name:"Icona",description:"Icona que es mostrarà en el toast. Si no s'especifica, es mostrarà la icona per defecte de l'estat.",control:{type:"text"}},position:{name:"Posició",description:"Posició on es mostrarà el toast. Pot ser: top-left, top-right, bottom-left o bottom-right.",control:{type:"radio"},options:["top-left","top-right","bottom-left","bottom-right"]},text:{name:"Text",description:"El text que es mostrarà en el toast. Per fer salt de línia, utilitza '\\n'.",control:{type:"text"}},hasIcon:{name:"Amb icona",description:"Amb l'icona del estat.",control:{type:"boolean"}},hasButton:{name:"Amb botó",description:"Mostrar un botó en el toast.",control:{type:"boolean"},if:{arg:"hasButtonClose",eq:!1}},buttonLabel:{name:"Text del botó",description:"Text que mostrarà en el botó del toast.",control:{type:"text"},if:{arg:"hasButton",eq:!0}},hasButtonClose:{name:"Amb botó tancar",description:"Mostrar el botó d'icona per tancar el toast.",control:{type:"boolean"},if:{arg:"hasButton",eq:!1}},duration:{name:"Duració",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}}}},a={parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev"}},args:{showToast:!0,state:"info",position:"bottom-left",icon:"",text:"Your message, short and clear.",hasIcon:!0,hasButton:!1,buttonLabel:"Button",hasButtonClose:!1,duration:0},render:t=>{const[Yt,St]=ft(),f=()=>St({...t,showToast:!1});return s`
      <div class="exemple-container-toast-canvas">
        ${bt(t.hasButton,()=>s`<dss-toast ?isShow=${t.showToast} state="${t.state}" position="${t.position}" icon="${t.icon}" text="${t.text}" ?hasIcon=${t.hasIcon} ?hasButton=${t.hasButton} buttonLabel="${t.buttonLabel}" ?hasButtonClose=${t.hasButtonClose} duration=${t.duration} @onClose=${f}></dss-toast>`,()=>s`<dss-toast ?isShow=${t.showToast} state="${t.state}" position="${t.position}" icon="${t.icon}" text="${t.text}" ?hasIcon=${t.hasIcon} ?hasButtonClose=${t.hasButtonClose} duration=${t.duration} @onClose=${f}></dss-toast>`)}
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
    `,decorators:[e(o,"toast-error-style")]};var y,B,Y;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(Y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var $,C,I;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,_,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var A,P,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var q,D,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,O,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var z,F,W;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-duration-style')]
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var k,K,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-no-duration-style')]
}`,...(j=(K=u.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var H,J,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-multiline-style')]
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var U,V,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-top-left-style')]
}`,...(G=(V=h.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var Q,Z,tt;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-top-right-style')]
}`,...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var st,et,ot;v.parameters={...v.parameters,docs:{...(st=v.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-bottom-left-style')]
}`,...(ot=(et=v.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var at,rt,nt;x.parameters={...x.parameters,docs:{...(at=x.parameters)==null?void 0:at.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toast-bottom-right-style')]
}`,...(nt=(rt=x.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var dt,it,ct;g.parameters={...g.parameters,docs:{...(dt=g.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ct=(it=g.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,mt;w.parameters={...w.parameters,docs:{...(lt=w.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=w.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var ht,pt,vt;S.parameters={...S.parameters,docs:{...(ht=S.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(vt=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var xt,gt,wt;b.parameters={...b.parameters,docs:{...(xt=b.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(wt=(gt=b.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};const Bt=["Playground","NoAction","NoIcon","Icon","ButtonClose","Button","Duration","NoDuration","Multiline","TopLeft","TopRight","BottomLeft","BottomRight","Info","Success","WarningState","ErrorState"],_t=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:v,BottomRight:x,Button:c,ButtonClose:i,Duration:l,ErrorState:b,Icon:d,Info:g,Multiline:m,NoAction:r,NoDuration:u,NoIcon:n,Playground:a,Success:w,TopLeft:h,TopRight:p,WarningState:S,__namedExportsOrder:Bt,default:yt},Symbol.toStringTag,{value:"Module"}));export{i as B,l as D,b as E,d as I,m as M,n as N,a as P,_t as S,h as T,S as W,r as a,c as b,u as c,p as d,v as e,x as f,g,w as h};
