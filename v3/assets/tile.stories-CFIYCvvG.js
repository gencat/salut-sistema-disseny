import{x as t}from"./iframe-DLVb3rJw.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
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
`,h={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"button",title:"Tile Title",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Lorem ipsume dolor sit amae.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:e=>t`
        <dss-tile 
          type="${e.type}"
          icon="${e.icon}"
          ?hasLogo=${e.showLogo}
          logoURL="${e.logoURL}"
          tileTitle="${e.title}" 
          description="${e.description}" 
          ?disabled=${e.disabled}
          ?selected=${e.selected}
          >
          ${e.type==="action"?t`
              ${e.action==="Switch"?t`
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
                `:e.action==="Icon Buttons"?t`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:e.buttonNumber},()=>t`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=${e.disabled}>
                          </dss-icon-button>
                        `)}
                  </div>
                `:e.action==="Checkbox"?t`
                      <dss-checkbox slot="action">
                        <input type="checkbox" slot="input" aria-label="tile-checkbox" ?disabled=${e.disabled} />
                      </dss-checkbox>
                `:null}
            `:null}
        </dss-tile>
      `},l={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-button-style")]},a={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-selector-style")]},r={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-action-style")]},n={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-action-switch-style")]},c={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
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
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
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
    `,decorators:[i(s,"tile-action-icon-button-style")]},d={tags:["!dev"],render:()=>t`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-action-checkbox-style")]},p={tags:["!dev"],render:()=>t`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-logo-style")]},m={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Type Button" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Type Selector" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-button-style")]},u={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-action-switch-style")]},b={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
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
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
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
    `,decorators:[i(s,"tile-disabled-action-icon-button-style")]},y={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-action-checkbox-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
  args: {
    type: 'button',
    title: 'Tile Title',
    icon: 'add_box',
    showLogo: false,
    logoURL: 'https://placehold.jp/48x48.png',
    showDescription: true,
    description: 'Lorem ipsume dolor sit amae.',
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
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
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
                      <dss-checkbox slot="action">
                        <input type="checkbox" slot="input" aria-label="tile-checkbox" ?disabled=\${args.disabled} />
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
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-button-style')]
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-selector-style')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-action-style')]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-switch-style')]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
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
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-checkbox-style')]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-logo-style')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Type Button" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Type Selector" 
    description="Lorem ipsum dolor sit amaet.">
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
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-switch-style')]
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
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
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-checkbox-style')]
}`,...y.parameters?.docs?.source}}};const g=["Playground","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],T=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:d,ActionIconButton:c,ActionSwitch:n,DisabledActionCheckbox:y,DisabledActionIconButton:b,DisabledActionSwitch:u,DisabledButton:m,Logo:p,Playground:o,TypeAction:r,TypeButton:l,TypeSelector:a,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{n as A,m as D,p as L,o as P,T as S,l as T,a,r as b,c,d,u as e,b as f,y as g};
