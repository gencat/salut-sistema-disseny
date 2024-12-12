import{x as t}from"./lit-html-B2eaWknC.js";import{n as Ss}from"./toast-ChTcsFcR.js";const{useArgs:ws}=__STORYBOOK_MODULE_PREVIEW_API__,bs={title:"Components/Toast",argTypes:{showToast:{name:"Mostrar",description:"Mostra o tanca el toast.",control:{type:"boolean"}},state:{name:"Estat",description:"Estil que mostrarà el component en funció del nivell de criticitat. Pot ser: info, success, warning o error.",control:{type:"radio"},options:["info","success","warning","error"]},icon:{name:"Icona",description:"Icona que es mostrarà en el toast. Si no s'especifica, es mostrarà la icona per defecte de l'estat.",control:{type:"text"}},position:{name:"Posició",description:"Posició on es mostrarà el toast. Pot ser: top-left, top-right, bottom-left o bottom-right.",control:{type:"radio"},options:["top-left","top-right","bottom-left","bottom-right"]},text:{name:"Text",description:"El text que es mostrarà en el toast. Per fer salt de línia, utilitza '\\n'.",control:{type:"text"}},hasIcon:{name:"Amb icona",description:"Amb l'icona del estat.",control:{type:"boolean"}},hasButton:{name:"Amb botó",description:"Mostrar un botó en el toast.",control:{type:"boolean"},if:{arg:"hasButtonClose",eq:!1}},buttonLabel:{name:"Text del botó",description:"Text que mostrarà en el botó del toast.",control:{type:"text"},if:{arg:"hasButton",eq:!0}},hasButtonClose:{name:"Amb botó tancar",description:"Mostrar el botó d'icona per tancar el toast.",control:{type:"boolean"},if:{arg:"hasButton",eq:!1}},duration:{name:"Duració",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}}}},e={args:{showToast:!0,state:"info",position:"bottom-left",icon:"",text:"Your message, short and clear.",hasIcon:!0,hasButton:!1,buttonLabel:"Button",hasButtonClose:!1,duration:0},parameters:{layout:"centered"},render:s=>{const[Ys,gs]=ws(),w=()=>gs({...s,showToast:!1});return t`
      <div class="exemple-container-toast-canvas">
        ${Ss(s.hasButton,()=>t`<dss-toast ?isShow=${s.showToast} state="${s.state}" position="${s.position}" icon="${s.icon}" text="${s.text}" ?hasIcon=${s.hasIcon} ?hasButton=${s.hasButton} buttonLabel="${s.buttonLabel}" ?hasButtonClose=${s.hasButtonClose} duration=${s.duration} @onClose=${w}></dss-toast>`,()=>t`<dss-toast ?isShow=${s.showToast} state="${s.state}" position="${s.position}" icon="${s.icon}" text="${s.text}" ?hasIcon=${s.hasIcon} ?hasButtonClose=${s.hasButtonClose} duration=${s.duration} @onClose=${w}></dss-toast>`)}
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
    `},m={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    `},h={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    `},p={tags:["!dev"],render:()=>t`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    `},v={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},x={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="success" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},g={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="warning" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `},S={tags:["!dev"],render:()=>t`
      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButtonClose duration="0"></dss-toast>
      </div>

      <div class="exemple-container">
        <dss-toast isShow state="error" text="Your message, short and clear." hasButton buttonLabel="Button" duration="0"></dss-toast>
      </div>
    `};var b,B,Y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  parameters: {
    layout: 'centered'
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
}`,...(Y=(B=e.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var f,$,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var I,L,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var T,y,A;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var P,E,M;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var q,D,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var O,R,W;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="10000"></dss-toast>
      </div>
    \`;
  }
}`,...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,z,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(K=(z=c.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var U,V,k;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container">
        <dss-toast isShow state="info" text="Your message, short and clear.\\\\nYour message, short and clear." duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-left" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="top-right" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ss,ts;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-left" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(ts=(ss=h.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var es,as,os;p.parameters={...p.parameters,docs:{...(es=p.parameters)==null?void 0:es.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="exemple-container-toast-canvas">
        <dss-toast isShow state="info" text="Your message, short and clear." position="bottom-right" duration="0"></dss-toast>
      </div>
    \`;
  }
}`,...(os=(as=p.parameters)==null?void 0:as.docs)==null?void 0:os.source}}};var ns,rs,ds;v.parameters={...v.parameters,docs:{...(ns=v.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
}`,...(ds=(rs=v.parameters)==null?void 0:rs.docs)==null?void 0:ds.source}}};var is,cs,ls;x.parameters={...x.parameters,docs:{...(is=x.parameters)==null?void 0:is.docs,source:{originalSource:`{
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
}`,...(ls=(cs=x.parameters)==null?void 0:cs.docs)==null?void 0:ls.source}}};var us,ms,hs;g.parameters={...g.parameters,docs:{...(us=g.parameters)==null?void 0:us.docs,source:{originalSource:`{
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
}`,...(hs=(ms=g.parameters)==null?void 0:ms.docs)==null?void 0:hs.source}}};var ps,vs,xs;S.parameters={...S.parameters,docs:{...(ps=S.parameters)==null?void 0:ps.docs,source:{originalSource:`{
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
  }
}`,...(xs=(vs=S.parameters)==null?void 0:vs.docs)==null?void 0:xs.source}}};const Bs=["Playground","NoAction","NoIcon","Icon","ButtonClose","Button","Duration","NoDuration","Multiline","TopLeft","TopRight","BottomLeft","BottomRight","Info","Success","WarningState","ErrorState"],Cs=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:h,BottomRight:p,Button:d,ButtonClose:r,Duration:i,ErrorState:S,Icon:n,Info:v,Multiline:l,NoAction:a,NoDuration:c,NoIcon:o,Playground:e,Success:x,TopLeft:u,TopRight:m,WarningState:g,__namedExportsOrder:Bs,default:bs},Symbol.toStringTag,{value:"Module"}));export{r as B,i as D,S as E,n as I,l as M,o as N,e as P,x as S,Cs as T,g as W,a,d as b,c,u as d,m as e,h as f,p as g,v as h};
