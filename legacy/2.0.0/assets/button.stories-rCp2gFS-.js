import"./lit-element-DhY7bShc.js";import{x as n}from"./lit-html-B2eaWknC.js";import"./button-Ds9k7BCR.js";const tt={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},variant:{name:"variant",description:"Variant de botó",control:{type:"select"},options:["primary","secondary","subtle","error","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},s={args:{label:"Button",variant:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>t.showIcon?t.onlyIcon?n`
          <dss-button
            ?onlyIcon=${t.onlyIcon}
            variant="${t.variant}"
            size="${t.size}"
            icon="${t.icon}"
            ?disabled=${t.disabled}
          >
          </dss-button>
        `:n`
          <dss-button
                            variant="${t.variant}"
              size="${t.size}"
              icon="${t.icon}"
              iconPosition="${t.side}"
              label="${t.label}"
              ?disabled=${t.disabled}
            >
            </dss-button>
         `:n`
      <dss-button label="${t.label}" size="${t.size}" variant="${t.variant}" ?disabled=${t.disabled}></dss-button>
    `},o={tags:["!dev"],render:()=>n`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    `},d={tags:["!dev"],render:()=>n`
      <dss-button size="sm" label="Small button" icon="add_box"></dss-button>
      <dss-button size="sm" label="Small button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box" iconPosition="right"></dss-button>
    `},a={tags:["!dev"],render:()=>n`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},e={tags:["!dev"],render:()=>n`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},i={tags:["!dev"],render:()=>n`
      <dss-button variant="secondary" size="md" label="Button"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},b={tags:["!dev"],render:()=>n`
        <dss-button variant="subtle" size="md" label="Button"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},r={tags:["!dev"],render:()=>n`
      <dss-button variant="error" size="md" label="Button"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="error" disabled size="md" label="Button"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},l={tags:["!dev"],render:()=>n`
      <dss-button variant="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},u={tags:["!dev"],render:()=>n`
      <dss-button variant="success" size="md" label="Button"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="success" disabled size="md" label="Button"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},c={tags:["!dev"],render:()=>n`
      <dss-button variant="info" size="md" label="Button"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="info" disabled size="md" label="Button"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},m={tags:["!dev"],render:()=>n`
      <div class="wrapper--dark">
        <dss-button variant="alternative-light" size="md" label="Button"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      </div>
    `},v={tags:["!dev"],render:()=>n`
      <dss-button variant="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `};var z,B,g;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    showIcon: false,
    side: 'left',
    onlyIcon: false,
    icon: 'add_box',
    disabled: false
  },
  render: (args: {
    disabled: unknown;
    label: string;
    variant: string;
    size: string;
    showIcon: boolean;
    side: string;
    onlyIcon: boolean;
    iconType: string;
    icon: string;
  }) => {
    if (args.showIcon) {
      const template = args.onlyIcon ? html\`
          <dss-button
            ?onlyIcon=\${args.onlyIcon}
            variant="\${args.variant}"
            size="\${args.size}"
            icon="\${args.icon}"
            ?disabled=\${args.disabled}
          >
          </dss-button>
        \` : html\`
          <dss-button
                            variant="\${args.variant}"
              size="\${args.size}"
              icon="\${args.icon}"
              iconPosition="\${args.side}"
              label="\${args.label}"
              ?disabled=\${args.disabled}
            >
            </dss-button>
         \`;
      return template;
    }
    return html\`
      <dss-button label="\${args.label}" size="\${args.size}" variant="\${args.variant}" ?disabled=\${args.disabled}></dss-button>
    \`;
  }
}`,...(g=(B=s.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var x,_,p;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...(p=(_=o.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};var y,h,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button" icon="add_box"></dss-button>
      <dss-button size="sm" label="Small button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(I=(h=d.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var P,f,S;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var $,w,k;e.parameters={...e.parameters,docs:{...($=e.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(k=(w=e.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,M,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="secondary" size="md" label="Button"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(L=(M=i.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var A,E,N;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-button variant="subtle" size="md" label="Button"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(N=(E=b.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var C,D,O;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="error" size="md" label="Button"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="error" disabled size="md" label="Button"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(O=(D=r.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var W,j,V;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="success" size="md" label="Button"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="success" disabled size="md" label="Button"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="info" size="md" label="Button"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="info" disabled size="md" label="Button"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,U;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper--dark">
        <dss-button variant="alternative-light" size="md" label="Button"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="alternative-light" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="alternative-light" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      </div>
    \`;
  }
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const nt=["Playground","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","AltLight","AltDark"],et=Object.freeze(Object.defineProperty({__proto__:null,AltDark:v,AltLight:m,ErrorState:r,IconNoText:a,Info:c,Playground:s,Primary:e,Secondary:i,Subtle:b,Success:u,TextIcon:d,TextNoIcon:o,Warning:l,__namedExportsOrder:nt,default:tt},Symbol.toStringTag,{value:"Module"}));export{m as A,et as B,r as E,a as I,s as P,i as S,o as T,l as W,d as a,e as b,b as c,u as d,c as e,v as f};
