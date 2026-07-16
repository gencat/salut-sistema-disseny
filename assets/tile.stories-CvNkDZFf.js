import{x as e}from"./iframe-_r7gOCbv.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
 .innerZoomElementWrapper {
    display:block;
  }
  .innerZoomElementWrapper > div {
    display: block !important;
  }
  .tiles-wrapper {
    display: flex;
    gap: 16px;
  }
  .tile-wrapper {
    width: 320px;
  }
`,y={title:"Collections/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["informative","button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"informative",title:"Títol",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Descripció breu per complementar.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:t=>e`
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
                  <dss-toggle size="md" slot="action" label="Toggle" hideLabel checked>
                  </dss-toggle>
                `:t.action==="Icon Buttons"?e`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:t.buttonNumber},()=>e`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="md"
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
      `},r={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
        <dss-tile 
          icon="add_box"
          tileTitle="Títol informatiu" 
          description="Descripció breu per complementar."
        >
        </dss-tile>
        <dss-tile 
          variant="informative"
          highlighted
          icon="add_box"
          tileTitle="Títol informatiu ressaltat" 
          description="Descripció breu per complementar."
        >
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-type-default-style")]},l={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
        <dss-tile 
          type="button"
          icon="add_box"
          tileTitle="Títol de botó" 
          description="Descripció breu per complementar.">
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-type-button-style")]},a={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
        <dss-tile 
          type="selector"
          icon="ads_click"
          tileTitle="Títol de selector" 
          description="Descripció breu per complementar.">
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-type-selector-style")]},c={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <dss-toggle size="md" label="My toggle" hidelabel="" slot="action"></dss-toggle>
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-action-switch-style")]},d={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <div class="dss-tile-action-group" slot="action">
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
          </div>
        </dss-tile>
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <div class="dss-tile-action-group" slot="action">
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
          </div>
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-action-icon-button-style")]},n={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
            <dss-checkbox label="My checkbox" hideLabel slot="action"></dss-checkbox>
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-action-checkbox-style")]},p={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
        <dss-tile 
          hasLogo
          logoURL="https://placehold.jp/48x48.png"
          type="button"
          tileTitle="Títol amb logo" 
          description="Descripció breu per complementar.">
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-logo-style")]},b={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-disabled-button-style")]},m={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
        <dss-tile 
          disabled
          type="action"
          icon="settings"
          tileTitle="Tile deshabilitat" 
          description="Descripció breu per complementar.">
          <dss-toggle disabled size="md" slot="action" label="My toggle" hideLabel></dss-toggle>
        </dss-tile>
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Només acció deshabilitada" 
          description="Descripció breu per complementar.">
          <dss-toggle disabled size="md" slot="action" label="My toggle" hideLabel></dss-toggle>
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-disabled-action-switch-style")]},u={tags:["!dev"],render:()=>e`
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
                size="md"
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
                size="md"
                variant="primary"
                disabled>
              </dss-icon-button>
            </div>
        </dss-tile>
      </div>
    `,decorators:[i(s,"tile-disabled-action-icon-button-style")]},g={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-disabled-action-checkbox-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
  args: {
    type: 'informative',
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
                  <dss-toggle size="md" slot="action" label="Toggle" hideLabel checked>
                  </dss-toggle>
                \` : args.action === 'Icon Buttons' ? html\`
                  <div class="dss-tile-action-group" slot="action">
                    \${Array.from({
      length: args.buttonNumber
    }, () => html\`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="md"
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
        <dss-tile 
          icon="add_box"
          tileTitle="Títol informatiu" 
          description="Descripció breu per complementar."
        >
        </dss-tile>
        <dss-tile 
          variant="informative"
          highlighted
          icon="add_box"
          tileTitle="Títol informatiu ressaltat" 
          description="Descripció breu per complementar."
        >
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-default-style')]
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
        <dss-tile 
          type="button"
          icon="add_box"
          tileTitle="Títol de botó" 
          description="Descripció breu per complementar.">
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
          tileTitle="Títol de selector" 
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
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <dss-toggle size="md" label="My toggle" hidelabel="" slot="action"></dss-toggle>
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-switch-style')]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <div class="dss-tile-action-group" slot="action">
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
          </div>
        </dss-tile>
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
          <div class="dss-tile-action-group" slot="action">
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
            <dss-icon-button 
              label="Action name"
              icon="add_box"
              size="md"
              variant="primary">
            </dss-icon-button>
          </div>
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-icon-button-style')]
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Títol d'acció" 
          description="Descripció breu per complementar.">
            <dss-checkbox label="My checkbox" hideLabel slot="action"></dss-checkbox>
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-checkbox-style')]
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
        <dss-tile 
          hasLogo
          logoURL="https://placehold.jp/48x48.png"
          type="button"
          tileTitle="Títol amb logo" 
          description="Descripció breu per complementar.">
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-logo-style')]
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <dss-toggle disabled size="md" slot="action" label="My toggle" hideLabel></dss-toggle>
        </dss-tile>
        <dss-tile 
          type="action"
          icon="settings"
          tileTitle="Només acció deshabilitada" 
          description="Descripció breu per complementar.">
          <dss-toggle disabled size="md" slot="action" label="My toggle" hideLabel></dss-toggle>
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-switch-style')]
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
          <div class="dss-tile-action-group" slot="action">
            <dss-icon-button 
                label="Action name"
                icon="add_box"
                size="md"
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
                size="md"
                variant="primary"
                disabled>
              </dss-icon-button>
            </div>
        </dss-tile>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-icon-button-style')]
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
}`,...g.parameters?.docs?.source}}};const h=["Playground","TypeInformative","TypeButton","TypeSelector","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],T=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:n,ActionIconButton:d,ActionSwitch:c,DisabledActionCheckbox:g,DisabledActionIconButton:u,DisabledActionSwitch:m,DisabledButton:b,Logo:p,Playground:o,TypeButton:l,TypeInformative:r,TypeSelector:a,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{c as A,b as D,p as L,o as P,T as S,r as T,l as a,a as b,d as c,n as d,m as e,u as f,g};
