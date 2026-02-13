import{x as t}from"./iframe-DLVb3rJw.js";import{w as y}from"./storybook-decorators-DSS85Rnr.js";const h=`
    .wrapper--dark {
        display: flex;
        gap: 24px;
        background-color: black;
        padding: 25px;
    }
`,I={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"label",description:"Text del botó"},variant:{name:"variant",description:"Variant de botó",control:{type:"select"},options:["primary","secondary","subtle","danger","warning","success","info","link","alternative-light","alternative-dark"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:_=>{const p=n=>n.showIcon?n.onlyIcon?t`
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
      <dss-button variant="danger" size="md" label="Button"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
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
    `,decorators:[y(h,"button-dark-style")]},g={tags:["!dev"],render:()=>t`
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
        `,decorators:[y(h,"button-max-width-style")]},x={tags:["!dev"],render:()=>t`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" label="Small button"></dss-button>
      <dss-button size="md" label="Medium button"></dss-button>
      <dss-button size="lg" label="Large button"></dss-button>
    \`;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button variant="danger" size="md" label="Button"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="danger" size="md" label="Button" icon="add_box" onlyIcon></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box" iconPosition="right"></dss-button>
      <dss-button variant="danger" disabled size="md" label="Button" icon="add_box" onlyIcon></dss-button>
    \`;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    \`;
  }
}`,...x.parameters?.docs?.source}}};const P=["Playground","Size","TextNoIcon","TextIcon","IconNoText","Primary","Secondary","Subtle","ErrorState","Warning","Success","Info","Link","AltLight","AltDark","MaxWidth","Loading"],w=Object.freeze(Object.defineProperty({__proto__:null,AltDark:g,AltLight:z,ErrorState:l,IconNoText:e,Info:m,Link:v,Loading:x,MaxWidth:B,Playground:s,Primary:i,Secondary:b,Size:o,Subtle:r,Success:c,TextIcon:a,TextNoIcon:d,Warning:u,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{z as A,l as E,e as I,v as L,B as M,s as P,w as S,d as T,u as W,o as a,a as b,i as c,b as d,r as e,c as f,m as g,g as h,x as i};
