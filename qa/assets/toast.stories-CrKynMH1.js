import{x as t}from"./lit-html-D6a8R3xZ.js";import"./toast-0r6aQCiU.js";import{n as ws}from"./when-BR7zwNJC.js";const{useArgs:Ss}=__STORYBOOK_MODULE_PREVIEW_API__,bs={title:"Components/Toast",argTypes:{showToast:{name:"Mostrar",description:"Mostra o tanca el toast.",control:{type:"boolean"}},state:{name:"Estat",description:"Estil que mostrarà el component en funció del nivell de criticitat. Pot ser: info, success, warning o error.",control:{type:"radio"},options:["info","success","warning","error"]},icon:{name:"Icona",description:"Icona que es mostrarà en el toast. Si no s'especifica, es mostrarà la icona per defecte de l'estat.",control:{type:"text"}},position:{name:"Posició",description:"Posició on es mostrarà el toast. Pot ser: top-left, top-right, bottom-left o bottom-right.",control:{type:"radio"},options:["top-left","top-right","bottom-left","bottom-right"]},text:{name:"Text",description:"El text que es mostrarà en el toast. Per fer salt de línia, utilitza '\\n'.",control:{type:"text"}},hasIcon:{name:"Amb icona",description:"Amb l'icona del estat.",control:{type:"boolean"}},hasButton:{name:"Amb botó",description:"Mostrar un botó en el toast.",control:{type:"boolean"},if:{arg:"hasButtonClose",eq:!1}},buttonLabel:{name:"Text del botó",description:"Text que mostrarà en el botó del toast.",control:{type:"text"},if:{arg:"hasButton",eq:!0}},hasButtonClose:{name:"Amb botó tancar",description:"Mostrar el botó d'icona per tancar el toast.",control:{type:"boolean"},if:{arg:"hasButton",eq:!1}},duration:{name:"Duració",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}}}},e={parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev"}},args:{showToast:!0,state:"info",position:"bottom-left",icon:"",text:"Your message, short and clear.",hasIcon:!0,hasButton:!1,buttonLabel:"Button",hasButtonClose:!1,duration:0},render:s=>{const[Bs,xs]=Ss(),S=()=>xs({...s,showToast:!1});return t`
      <div class="exemple-container-toast-canvas">
        ${ws(s.hasButton,()=>t`<dss-toast ?isShow=${s.showToast} state="${s.state}" position="${s.position}" icon="${s.icon}" text="${s.text}" ?hasIcon=${s.hasIcon} ?hasButton=${s.hasButton} buttonLabel="${s.buttonLabel}" ?hasButtonClose=${s.hasButtonClose} duration=${s.duration} @onClose=${S}></dss-toast>`,()=>t`<dss-toast ?isShow=${s.showToast} state="${s.state}" position="${s.position}" icon="${s.icon}" text="${s.text}" ?hasIcon=${s.hasIcon} ?hasButtonClose=${s.hasButtonClose} duration=${s.duration} @onClose=${S}></dss-toast>`)}
      </div>
    `}},a={tags:["!dev"],render:()=>t`
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
    `},o={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
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
    `},r={tags:["!dev"],render:()=>t`
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
    `},d={tags:["!dev"],render:()=>t`
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
    `},i={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    `},c={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    `},l={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    `},u={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    `},h={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    `},m={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    `},g={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    `},p={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},v={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},x={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},w={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear. lñkasdg kaks gjahs dgja sdgkj asdkjgh asdjg askjdgh asdgk jaskjdgh askjdg haskdjg askjd gkjasdg akjsd aksjdg haskjdg kajsd gkajsdh gakjsdgh aksjdgh asdkjg haskdjg hasdkjg haskjdh askjdhgaskjdgkjasdhg. sdajkdg akjs dgkjahsd gkjash dgkjasd gkjasd gaskd g" hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `};var b,f,B;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(f=e.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var Y,k,j;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
  }
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var $,C,I;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,T,_;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var y,A,P;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  }
}`,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var E,q,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  }
}`,...(D=(q=d.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var M,N,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    \`;
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,z,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var W,K,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(H=(K=l.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var J,X,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(U=(X=u.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var V,G,Q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,ss,ts;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(ts=(ss=m.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var es,as,os;g.parameters={...g.parameters,docs:{...(es=g.parameters)==null?void 0:es.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(os=(as=g.parameters)==null?void 0:as.docs)==null?void 0:os.source}}};var ns,rs,ds;p.parameters={...p.parameters,docs:{...(ns=p.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
  }
}`,...(ds=(rs=p.parameters)==null?void 0:rs.docs)==null?void 0:ds.source}}};var is,cs,ls;v.parameters={...v.parameters,docs:{...(is=v.parameters)==null?void 0:is.docs,source:{originalSource:`{
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
  }
}`,...(ls=(cs=v.parameters)==null?void 0:cs.docs)==null?void 0:ls.source}}};var us,hs,ms;x.parameters={...x.parameters,docs:{...(us=x.parameters)==null?void 0:us.docs,source:{originalSource:`{
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
  }
}`,...(ms=(hs=x.parameters)==null?void 0:hs.docs)==null?void 0:ms.source}}};var gs,ps,vs;w.parameters={...w.parameters,docs:{...(gs=w.parameters)==null?void 0:gs.docs,source:{originalSource:`{
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
        <dss-toast isShow state="error" text="Your message, short and clear. lñkasdg kaks gjahs dgja sdgkj asdkjgh asdjg askjdgh asdgk jaskjdgh askjdg haskdjg askjd gkjasdg akjsd aksjdg haskjdg kajsd gkajsdh gakjsdgh aksjdgh asdkjg haskdjg hasdkjg haskjdh askjdhgaskjdgkjasdhg. sdajkdg akjs dgkjahsd gkjash dgkjasd gkjasd gaskd g" hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(vs=(ps=w.parameters)==null?void 0:ps.docs)==null?void 0:vs.source}}};const fs=["Playground","NoAction","NoIcon","Icon","ButtonClose","Button","Duration","NoDuration","Multiline","TopLeft","TopRight","BottomLeft","BottomRight","Info","Success","WarningState","ErrorState"],$s=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:m,BottomRight:g,Button:d,ButtonClose:r,Duration:i,ErrorState:w,Icon:n,Info:p,Multiline:l,NoAction:a,NoDuration:c,NoIcon:o,Playground:e,Success:v,TopLeft:u,TopRight:h,WarningState:x,__namedExportsOrder:fs,default:bs},Symbol.toStringTag,{value:"Module"}));export{r as B,i as D,w as E,n as I,l as M,o as N,e as P,v as S,$s as T,x as W,a,d as b,c,u as d,h as e,m as f,g,p as h};
