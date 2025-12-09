import"./lit-element-BL4lq474.js";import{x as t}from"./lit-html-D6cejpwM.js";import{w as xt}from"./storybook-decorators-DSS85Rnr.js";const _t=`
    .wrapper--dark {
        display: flex;
        gap: 24px;
        background-color: black;
        padding: 25px;
    }
`,pt={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},variant:{name:"variant",description:"Variant de botó",control:{type:"select"},options:["primary","secondary","subtle","error","warning","success","info","link","alternative-light","alternative-dark"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:_=>{const p=n=>n.showIcon?n.onlyIcon?t`
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
            `;return _.variant==="alternative-light"?t`
                <div style="background-color: black; padding: 8px 12px;">
                    ${p(_)}
                </div>
            `:p(_)}},o={tags:["!dev"],render:()=>t`
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
    `},l={tags:["!dev"],render:()=>t`
        <dss-button variant="subtle" size="md" label="Button"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
        <dss-button variant="subtle" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    `},r={tags:["!dev"],render:()=>t`
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
    `,decorators:[xt(_t,"button-dark-style")]},g={tags:["!dev"],render:()=>t`
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
        `,decorators:[xt(_t,"button-max-width-style")]},x={tags:["!dev"],render:()=>t`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="secondary" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="secondary" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="subtle" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="subtle" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="error" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="error" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="warning" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="warning" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="success" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="success" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="info" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="info" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="link" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="link" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="alternative-light" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="alternative-light" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="alternative-dark" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="alternative-dark" onlyIcon loading></dss-button>
    `};var y,h,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var k,P,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var w,S,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...($=(S=d.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var T,A,L;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(L=(A=a.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,E,C;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(C=(E=e.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var D,W,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(W=i.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var N,O,j;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,H,J;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,V;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(X=r.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var G,Q,R;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,Y,Z;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,nt,st;m.parameters={...m.parameters,docs:{...(tt=m.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(st=(nt=m.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var ot,dt,at;v.parameters={...v.parameters,docs:{...(ot=v.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(dt=v.parameters)==null?void 0:dt.docs)==null?void 0:at.source}}};var et,it,bt;z.parameters={...z.parameters,docs:{...(et=z.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(bt=(it=z.parameters)==null?void 0:it.docs)==null?void 0:bt.source}}};var lt,rt,ut;g.parameters={...g.parameters,docs:{...(lt=g.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ut=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:ut.source}}};var ct,mt,vt;B.parameters={...B.parameters,docs:{...(ct=B.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...(vt=(mt=B.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var zt,gt,Bt;x.parameters={...x.parameters,docs:{...(zt=x.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="secondary" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="secondary" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="subtle" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="subtle" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="error" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="error" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="warning" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="warning" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="success" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="success" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="info" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="info" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="link" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="link" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="alternative-light" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="alternative-light" onlyIcon loading></dss-button>
            <dss-button size="md" label="Button" icon="add_box" variant="alternative-dark" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" variant="alternative-dark" onlyIcon loading></dss-button>
    \`;
  }
}`,...(Bt=(gt=x.parameters)==null?void 0:gt.docs)==null?void 0:Bt.source}}};const yt=["Playground","Size","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","Link","AltLight","AltDark","MaxWidth","Loading"],ft=Object.freeze(Object.defineProperty({__proto__:null,AltDark:g,AltLight:z,ErrorState:r,IconNoText:e,Info:m,Link:v,Loading:x,MaxWidth:B,Playground:s,Primary:i,Secondary:b,Size:o,Subtle:l,Success:c,TextIcon:a,TextNoIcon:d,Warning:u,__namedExportsOrder:yt,default:pt},Symbol.toStringTag,{value:"Module"}));export{z as A,r as E,e as I,v as L,B as M,s as P,ft as S,d as T,u as W,o as a,a as b,i as c,b as d,l as e,c as f,m as g,g as h,x as i};
