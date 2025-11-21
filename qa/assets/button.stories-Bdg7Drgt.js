import"./lit-element-BL4lq474.js";import{x as t}from"./lit-html-D6cejpwM.js";import{w as vt}from"./storybook-decorators-DSS85Rnr.js";const zt=`
    .wrapper--dark {
        display: flex;
        gap: 24px;
        background-color: black;
        padding: 25px;
    }
`,gt={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},variant:{name:"variant",description:"Variant de botó",control:{type:"select"},options:["primary","secondary","subtle","error","warning","success","info","link","alternative-light","alternative-dark"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:x=>{const _=n=>n.showIcon?n.onlyIcon?t`
                        <dss-button
                            ?onlyIcon=${n.onlyIcon}
                            variant="${n.variant}"
                            label="${n.label}"
                            size="${n.size}"
                            icon="${n.icon}"
                            ?disabled=${n.disabled}
                        >
                        </dss-button>
                    `:t`
                        <dss-button
                                variant="${n.variant}"
                                size="${n.size}"
                                icon="${n.icon}"
                                iconPosition="${n.side}"
                                label="${n.label}"
                                ?disabled=${n.disabled}
                            >
                            </dss-button>
                     `:t`
                <dss-button label="${n.label}" size="${n.size}" variant="${n.variant}" ?disabled=${n.disabled}></dss-button>
            `;return x.variant==="alternative-light"?t`
                <div style="background-color: black; padding: 8px 12px;">
                    ${_(x)}
                </div>
            `:_(x)}},o={tags:["!dev"],render:()=>t`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    `},d={tags:["!dev"],render:()=>t`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},a={tags:["!dev"],render:()=>t`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},e={tags:["!dev"],render:()=>t`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},i={tags:["!dev"],render:()=>t`
      <dss-button size="md" label="Button"></dss-button>
      <dss-button size="md" label="Button" icon="add_box"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button disabled size="md" label="Button"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},b={tags:["!dev"],render:()=>t`
      <dss-button variant="secondary" size="md" label="Button"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="secondary" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},r={tags:["!dev"],render:()=>t`
        <dss-button variant="subtle" size="md" label="Button"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},l={tags:["!dev"],render:()=>t`
      <dss-button variant="error" size="md" label="Button"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="error" disabled size="md" label="Button"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="error" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},u={tags:["!dev"],render:()=>t`
      <dss-button variant="warning" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="warning" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},c={tags:["!dev"],render:()=>t`
      <dss-button variant="success" size="md" label="Button"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="success" disabled size="md" label="Button"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="success" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},m={tags:["!dev"],render:()=>t`
      <dss-button variant="info" size="md" label="Button"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="info" disabled size="md" label="Button"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="info" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},v={tags:["!dev"],render:()=>t`
        <dss-button variant="link" size="md" label="Button"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="link" disabled size="md" label="Button"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="link" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},z={tags:["!dev"],render:()=>t`
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
    `,decorators:[vt(zt,"button-dark-style")]},g={tags:["!dev"],render:()=>t`
      <dss-button variant="alternative-dark" size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="alternative-dark" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},B={tags:["!dev"],render:()=>t`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        `,decorators:[vt(zt,"button-max-width-style")]};var p,y,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var I,P,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...(k=(P=o.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var f,w,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var $,T,A;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var L,M,E;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(E=(M=e.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var C,D,W;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var F,N,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,q,H;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(q=r.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=l.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var V,G,Q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var R,U,Y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Y=(U=c.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,tt,nt;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(nt=(tt=m.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var st,ot,dt;v.parameters={...v.parameters,docs:{...(st=v.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(dt=(ot=v.parameters)==null?void 0:ot.docs)==null?void 0:dt.source}}};var at,et,it;z.parameters={...z.parameters,docs:{...(at=z.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(it=(et=z.parameters)==null?void 0:et.docs)==null?void 0:it.source}}};var bt,rt,lt;g.parameters={...g.parameters,docs:{...(bt=g.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(lt=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var ut,ct,mt;B.parameters={...B.parameters,docs:{...(ut=B.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...(mt=(ct=B.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};const Bt=["Playground","Size","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","Link","AltLight","AltDark","MaxWidth"],ht=Object.freeze(Object.defineProperty({__proto__:null,AltDark:g,AltLight:z,ErrorState:l,IconNoText:e,Info:m,Link:v,MaxWidth:B,Playground:s,Primary:i,Secondary:b,Size:o,Subtle:r,Success:c,TextIcon:a,TextNoIcon:d,Warning:u,__namedExportsOrder:Bt,default:gt},Symbol.toStringTag,{value:"Module"}));export{z as A,l as E,e as I,v as L,B as M,s as P,ht as S,d as T,u as W,o as a,a as b,i as c,b as d,r as e,c as f,m as g,g as h};
