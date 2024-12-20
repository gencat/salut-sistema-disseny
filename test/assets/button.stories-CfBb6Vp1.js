import"./lit-element-DhY7bShc.js";import{x as s}from"./lit-html-B2eaWknC.js";import"./button-DoKF2nNJ.js";const tt={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},type:{name:"type",description:"Tipus de botó",control:{type:"select"},options:["primary","secondary","subtle","error","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},n={args:{label:"Button",type:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>t.showIcon?t.onlyIcon?s`
          <dss-button
            ?onlyIcon=${t.onlyIcon}
            type="${t.type}"
            size="${t.size}"
            icon="${t.icon}"
            ?disabled=${t.disabled}
          >
          </dss-button>
        `:s`
          <dss-button
              type="${t.type}"
              size="${t.size}"
              icon="${t.icon}"
              iconPosition="${t.side}"
              label="${t.label}"
              ?disabled=${t.disabled}
            >
            </dss-button>
         `:s`
      <dss-button label="${t.label}" size="${t.size}" type="${t.type}" ?disabled=${t.disabled}></dss-button>
    `},o={tags:["!dev"],render:()=>s`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    `},d={tags:["!dev"],render:()=>s`
      <dss-button size="sm" label="Small button" icon="add_box"></dss-button>
      <dss-button size="sm" label="Small button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box"></dss-button>
      <dss-button size="md" label="Medium button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box"></dss-button>
      <dss-button size="lg" label="Large button" icon="add_box" iconPosition="right"></dss-button>
    `},e={tags:["!dev"],render:()=>s`
      <dss-button size="sm" icon="add_box" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" onlyIcon></dss-button>
    `},i={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},b={tags:["!dev"],render:()=>s`
      <dss-button type="secondary" size="md" label="Button"></dss-button>
      <dss-button type="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="secondary" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="secondary" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},a={tags:["!dev"],render:()=>s`
        <dss-button type="subtle" size="md" label="Button"></dss-button>
        <dss-button type="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="subtle" size="md" icon="add_box" onlyIcon></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="subtle" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},u={tags:["!dev"],render:()=>s`
      <dss-button type="error" size="md" label="Button"></dss-button>
      <dss-button type="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="error" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="error" disabled size="md" label="Button"></dss-button>
      <dss-button type="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="error" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},l={tags:["!dev"],render:()=>s`
      <dss-button type="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="warning" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="warning" disabled size="md" label="Button"></dss-button>
      <dss-button type="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="warning" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},r={tags:["!dev"],render:()=>s`
      <dss-button type="success" size="md" label="Button"></dss-button>
      <dss-button type="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="success" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="success" disabled size="md" label="Button"></dss-button>
      <dss-button type="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="success" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},c={tags:["!dev"],render:()=>s`
      <dss-button type="info" size="md" label="Button"></dss-button>
      <dss-button type="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="info" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="info" disabled size="md" label="Button"></dss-button>
      <dss-button type="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="info" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `},m={tags:["!dev"],render:()=>s`
      <div class="wrapper--dark">
        <dss-button type="alternative-light" size="md" label="Button"></dss-button>
        <dss-button type="alternative-light" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="alternative-light" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="alternative-light" size="md" icon="add_box" onlyIcon></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button"></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="alternative-light" disabled size="md" icon="add_box" onlyIcon></dss-button>
      </div>
    `},p={tags:["!dev"],render:()=>s`
      <dss-button type="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button type="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="alternative-dark" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" icon="add_box" onlyIcon></dss-button>
    `};var y,z,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    type: 'primary',
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
    type: string;
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
            type="\${args.type}"
            size="\${args.size}"
            icon="\${args.icon}"
            ?disabled=\${args.disabled}
          >
          </dss-button>
        \` : html\`
          <dss-button
              type="\${args.type}"
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
      <dss-button label="\${args.label}" size="\${args.size}" type="\${args.type}" ?disabled=\${args.disabled}></dss-button>
    \`;
  }
}`,...(g=(z=n.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};var x,_,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var h,I,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(I=d.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var P,f,S;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(S=(f=e.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var $,w,k;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,M,L;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="secondary" size="md" label="Button"></dss-button>
      <dss-button type="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="secondary" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="secondary" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(L=(M=b.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var A,E,N;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-button type="subtle" size="md" label="Button"></dss-button>
        <dss-button type="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="subtle" size="md" icon="add_box" onlyIcon></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="subtle" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(N=(E=a.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var C,D,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="error" size="md" label="Button"></dss-button>
      <dss-button type="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="error" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="error" disabled size="md" label="Button"></dss-button>
      <dss-button type="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="error" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var W,j,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="warning" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="warning" disabled size="md" label="Button"></dss-button>
      <dss-button type="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="warning" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,G,H;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="success" size="md" label="Button"></dss-button>
      <dss-button type="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="success" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="success" disabled size="md" label="Button"></dss-button>
      <dss-button type="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="success" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(H=(G=r.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="info" size="md" label="Button"></dss-button>
      <dss-button type="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="info" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="info" disabled size="md" label="Button"></dss-button>
      <dss-button type="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="info" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper--dark">
        <dss-button type="alternative-light" size="md" label="Button"></dss-button>
        <dss-button type="alternative-light" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="alternative-light" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="alternative-light" size="md" icon="add_box" onlyIcon></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button"></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button type="alternative-light" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button type="alternative-light" disabled size="md" icon="add_box" onlyIcon></dss-button>
      </div>
    \`;
  }
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button type="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button type="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="alternative-dark" size="md" icon="add_box" onlyIcon></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button type="alternative-dark" disabled size="md" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const st=["Playground","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","AltLight","AltDark"],it=Object.freeze(Object.defineProperty({__proto__:null,AltDark:p,AltLight:m,ErrorState:u,IconNoText:e,Info:c,Playground:n,Primary:i,Secondary:b,Subtle:a,Success:r,TextIcon:d,TextNoIcon:o,Warning:l,__namedExportsOrder:st,default:tt},Symbol.toStringTag,{value:"Module"}));export{m as A,it as B,u as E,e as I,n as P,b as S,o as T,l as W,d as a,i as b,a as c,r as d,c as e,p as f};
