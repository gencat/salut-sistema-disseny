import"./lit-element-Dloa6E9d.js";import{x as n}from"./lit-html-D6a8R3xZ.js";import{w as lt}from"./storybook-decorators-DSS85Rnr.js";const ut=`
    .wrapper--dark {
        display: flex;
        gap: 24px;
        background-color: black;
        padding: 25px;
    }
`,ct={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},variant:{name:"variant",description:"Variant de botó",control:{type:"select"},options:["primary","secondary","subtle","error","warning","success","info","link","alternative-light","alternative-dark"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:B=>{const x=t=>t.showIcon?t.onlyIcon?n`
                        <dss-button
                            ?onlyIcon=${t.onlyIcon}
                            variant="${t.variant}"
                            label="${t.label}"
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
            `;return B.variant==="alternative-light"?n`
                <div style="background-color: black; padding: 8px 12px;">
                    ${x(B)}
                </div>
            `:x(B)}},o={tags:["!dev"],render:()=>n`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    `},d={tags:["!dev"],render:()=>n`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},a={tags:["!dev"],render:()=>n`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},e={tags:["!dev"],render:()=>n`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},i={tags:["!dev"],render:()=>n`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},b={tags:["!dev"],render:()=>n`
      <dss-button variant="secondary" size="md" label="Button"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},r={tags:["!dev"],render:()=>n`
        <dss-button variant="subtle" size="md" label="Button"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},l={tags:["!dev"],render:()=>n`
      <dss-button variant="error" size="md" label="Button"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="error" disabled size="md" label="Button"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},u={tags:["!dev"],render:()=>n`
      <dss-button variant="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},c={tags:["!dev"],render:()=>n`
      <dss-button variant="success" size="md" label="Button"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="success" disabled size="md" label="Button"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},m={tags:["!dev"],render:()=>n`
      <dss-button variant="info" size="md" label="Button"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="info" disabled size="md" label="Button"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},v={tags:["!dev"],render:()=>n`
        <dss-button variant="link" size="md" label="Button"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="link" disabled size="md" label="Button"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},z={tags:["!dev"],render:()=>n`
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
    `,decorators:[lt(ut,"button-dark-style")]},g={tags:["!dev"],render:()=>n`
      <dss-button variant="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `};var _,p,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev'
    }
  },
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
    const getButton = (args: any) => {
      if (args.showIcon) {
        const template = args.onlyIcon ? html\`
                        <dss-button
                            ?onlyIcon=\${args.onlyIcon}
                            variant="\${args.variant}"
                            label="\${args.label}"
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
    };
    if (args.variant === 'alternative-light') {
      return html\`
                <div style="background-color: black; padding: 8px 12px;">
                    \${getButton(args)}
                </div>
            \`;
    }
    return getButton(args);
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var h,I,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var k,f,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,$,T;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(T=($=a.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var A,L,E;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(E=(L=e.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var C,D,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,N,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,j,q;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(j=r.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,V,G;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var Q,R,U;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var Y,Z,tt;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(tt=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var nt,st,ot;v.parameters={...v.parameters,docs:{...(nt=v.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-button variant="link" size="md" label="Button"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="link" disabled size="md" label="Button"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...(ot=(st=v.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var dt,at,et;z.parameters={...z.parameters,docs:{...(dt=z.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'button-dark-style')]
}`,...(et=(at=z.parameters)==null?void 0:at.docs)==null?void 0:et.source}}};var it,bt,rt;g.parameters={...g.parameters,docs:{...(it=g.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(rt=(bt=g.parameters)==null?void 0:bt.docs)==null?void 0:rt.source}}};const mt=["Playground","Size","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","Link","AltLight","AltDark"],xt=Object.freeze(Object.defineProperty({__proto__:null,AltDark:g,AltLight:z,ErrorState:l,IconNoText:e,Info:m,Link:v,Playground:s,Primary:i,Secondary:b,Size:o,Subtle:r,Success:c,TextIcon:a,TextNoIcon:d,Warning:u,__namedExportsOrder:mt,default:ct},Symbol.toStringTag,{value:"Module"}));export{z as A,l as E,e as I,v as L,s as P,xt as S,d as T,u as W,o as a,a as b,i as c,b as d,r as e,c as f,m as g,g as h};
