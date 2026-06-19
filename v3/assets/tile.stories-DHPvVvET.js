import{x as e}from"./iframe-CqPuVMaj.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .innerZoomElementWrapper {
    display:block;
  }
  .innerZoomElementWrapper > div {
    display: block !important;
  }
  .tiles-wrapper {
    display: flex;
    gap: 20px;
  }
  .tile-wrapper {
    width: 320px;
  }
`,h={title:"Collections/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["default","button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"default",title:"Títol",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Descripció breu per complementar.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:t=>e`
        <dss-tile 
          type="${t.type}"
          icon="${t.icon}"
          ?hasLogo=${t.showLogo}
          logoURL="${t.logoURL}"
          tileTitle="${t.title}" 
          description="${t.description}" 
          ?disabled=${t.disabled}
          ?selected=${t.selected}
          >
          ${t.type==="action"?e`
              ${t.action==="Switch"?e`
                  <dss-toggle size="lg" slot="action" label="Toggle" hideLabel checked>
                  </dss-toggle>
                `:t.action==="Icon Buttons"?e`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:t.buttonNumber},()=>e`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=${t.disabled}>
                          </dss-icon-button>
                        `)}
                  </div>
                `:t.action==="Checkbox"?e`
                      <dss-checkbox slot="action" label="Checkbox label" ?disabled=${t.disabled} hideLabel>
                      </dss-checkbox>
                `:null}
            `:null}
        </dss-tile>
      `},l={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-type-default-style")]},r={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-type-button-style")]},a={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-type-selector-style")]},c={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-type-action-style")]},n={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-toggle size="lg" label="My toggle" hidelabel="" slot="action"></dss-toggle>
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-action-switch-style")]},d={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-action-icon-button-style")]},p={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-checkbox label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-action-checkbox-style")]},b={tags:["!dev"],render:()=>e`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[s(i,"tile-logo-style")]},m={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Botó deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Selector deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
</div>
    `,decorators:[s(i,"tile-disabled-button-style")]},u={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
    <dss-toggle disabled size="lg" slot="action" label="My toggle" hideLabel></dss-toggle>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
    <dss-toggle disabled size="lg" slot="action" label="My toggle" hideLabel></dss-toggle>
  </dss-tile>
</div>
    `,decorators:[s(i,"tile-disabled-action-switch-style")]},g={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
     <div class="dss-tile-action-group" slot="action">
      <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
     <div class="dss-tile-action-group" slot="action">
        <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
</div>
    `,decorators:[s(i,"tile-disabled-action-icon-button-style")]},y={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
      <dss-checkbox disabled label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
      <dss-checkbox disabled label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
</div>
    `,decorators:[s(i,"tile-disabled-action-checkbox-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
  args: {
    type: 'default',
    title: 'Títol',
    icon: 'add_box',
    showLogo: false,
    logoURL: 'https://placehold.jp/48x48.png',
    showDescription: true,
    description: 'Descripció breu per complementar.',
    action: 'Switch',
    buttonNumber: 1,
    disabled: false,
    selected: false
  },
  render: (args: any) => {
    return html\`
        <dss-tile 
          type="\${args.type}"
          icon="\${args.icon}"
          ?hasLogo=\${args.showLogo}
          logoURL="\${args.logoURL}"
          tileTitle="\${args.title}" 
          description="\${args.description}" 
          ?disabled=\${args.disabled}
          ?selected=\${args.selected}
          >
          \${args.type === 'action' ? html\`
              \${args.action === 'Switch' ? html\`
                  <dss-toggle size="lg" slot="action" label="Toggle" hideLabel checked>
                  </dss-toggle>
                \` : args.action === 'Icon Buttons' ? html\`
                  <div class="dss-tile-action-group" slot="action">
                    \${Array.from({
      length: args.buttonNumber
    }, () => html\`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=\${args.disabled}>
                          </dss-icon-button>
                        \`)}
                  </div>
                \` : args.action === 'Checkbox' ? html\`
                      <dss-checkbox slot="action" label="Checkbox label" ?disabled=\${args.disabled} hideLabel>
                      </dss-checkbox>
                \` : null}
            \` : null}
        </dss-tile>
      \`;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-default-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-button-style')]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-selector-style')]
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-action-style')]
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-toggle size="lg" label="My toggle" hidelabel="" slot="action"></dss-toggle>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-switch-style')]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-icon-button-style')]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-checkbox label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-checkbox-style')]
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-logo-style')]
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Botó deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Selector deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-button-style')]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
    <dss-toggle disabled size="lg" slot="action" label="My toggle" hideLabel></dss-toggle>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
    <dss-toggle disabled size="lg" slot="action" label="My toggle" hideLabel></dss-toggle>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-switch-style')]
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
     <div class="dss-tile-action-group" slot="action">
      <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
     <div class="dss-tile-action-group" slot="action">
        <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-icon-button-style')]
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
      <dss-checkbox disabled label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
      <dss-checkbox disabled label="My checkbox" hideLabel slot="action"></dss-checkbox>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-checkbox-style')]
}`,...y.parameters?.docs?.source}}};const v=["Playground","TypeDefault","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],x=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:p,ActionIconButton:d,ActionSwitch:n,DisabledActionCheckbox:y,DisabledActionIconButton:g,DisabledActionSwitch:u,DisabledButton:m,Logo:b,Playground:o,TypeAction:c,TypeButton:r,TypeDefault:l,TypeSelector:a,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{n as A,m as D,b as L,o as P,x as S,l as T,r as a,a as b,d as c,p as d,u as e,g as f,y as g};
