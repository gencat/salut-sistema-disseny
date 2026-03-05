import{x as e}from"./iframe-CdZ_4rdx.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const i=`
  .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .wrapper {
            display: block;
            width: 400px;
            max-width: 400px;
    }
`,h={title:"Components/Item List",argTypes:{numItems:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDate:{name:"Mostrar data",control:{type:"boolean"}},date:{name:"Data",control:{type:"text"},if:{arg:"showDate",truthy:!0}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconState:{name:"Decorative Icon Estat",control:{type:"select"},options:["default","success","error","info"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Action Icon variant",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Badge Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}},showChip:{name:"Mostrar chip",control:{type:"boolean"}},chipText:{name:"Chip Label",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipIcon:{name:"Chip icona",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipSelected:{name:"Chip seleccionat",control:{type:"boolean"},if:{arg:"showChip",truthy:!0}},showCriticity:{name:"Mostrar criticitat",control:{type:"boolean"}},criticityLabel:{name:"Criticitat Label",control:{type:"text"},if:{arg:"showCriticity",truthy:!0}},criticity:{name:"Criticitat Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showCriticity",truthy:!0}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev"}},args:{numItems:3,title:"Títol",subtitle:"Subtítol",showDate:!0,date:"20/03/2024",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconState:"default",showCriticity:!1,criticity:"danger-high",criticityLabel:"Critic",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct",showChip:!1,chipText:"Chip",chipIcon:"add_box",chipSelected:!1,disabled:!1},render:t=>{const p=Array.from({length:t.numItems});return e`
      <div style="width:500px">
        <dss-item-list>
                    ${p.map(()=>e`
                            <dss-item-list-base
                                titleText="${t.title}"
                                subtitle="${t.subtitle}"
                                date="${t.showDate?t.date:""}"
                                decorativeIcon="${t.showDecorativeIcon?t.decorativeIcon:""}"
                                decorativeIconState="${t.showDecorativeIcon?t.decorativeIconState:""}"
                                criticity="${t.showCriticity?t.criticity:""}"
                                criticityLabel="${t.showCriticity?t.criticityLabel:""}"
                                ?disabled="${t.disabled}"
                            >
                                ${t.showBadge?e`
                                    <dss-badge 
                                        text="${t.badgeText}"
                                        size="${t.badgeSize?t.badgeSize:"sm"}"
                                        state="${t.badgeState?t.badgeState:"undeterminated"}"
                                        ?disabled="${t.disabled}"
                                    >
                                    </dss-badge>
                                `:""}

                                ${t.showChip?e`
                                    <dss-chip 
                                        size="sm" 
                                        icon=${t.chipIcon}
                                        label="${t.chipText}" 
                                        disableSelect
                                        ?selected=${t.chipSelected}
                                        ?disabled="${t.disabled}"

                                    ></dss-chip>
                                `:""}
                                
                                ${t.showActionIcon?e`
                                    <dss-icon-button 
                                        size="md" 
                                        icon="${t.actionIcon}" 
                                        label="Action" 
                                        variant="${t.actionIconType}"
                                        ?disabled="${t.disabled}"
                                    >
                                    </dss-icon-button>
                                `:""}
                                
                            </dss-item-list-base>
                        `)} 
                </dss-item-list>
      </div>
    `}},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-default-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base titleText="Títol" subtitle="Default" decorativeIcon="add_box"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Success" decorativeIcon="add_box" decorativeIconState="success"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Error" decorativeIcon="add_box" decorativeIconState="error"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Info" decorativeIcon="add_box" decorativeIconState="info"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Disabled" decorativeIcon="add_box" decorativeIconState="info" decorativeIconDisabled></dss-item-list-base>
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-decorative-icon-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="moderate-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high" criticityDisabled></dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-criticity-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="danger" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="danger" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-icon-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-chip-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="sm" state="correct"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="md" state="moderate-high"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="lg" state="danger-high"></dss-badge>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-badge-style")]},b={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" criticity="danger-high" interactive>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Interactiu</dss-typography>
                    <dss-icon-button icon="add_box" label="Label"></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" criticity="slight" interactive disabled>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Deshabilitat</dss-typography>
                    <dss-icon-button icon="add_box" label="Label" disabled></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip disabled></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" criticity="slight" criticityDisabled interactive>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Descartat</dss-typography>
                    <dss-icon-button icon="add_box" label="Label"></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-interactive-style")]},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-item-list widget>
                    ${y(3)}
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-selectable-style")]},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-item-list widget>
                    ${g(3)}
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-widget-style")]},g=t=>Array.from({length:t},()=>e`
        <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
            <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
            <dss-icon icon="add_box"></dss-icon>
            <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
            <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
            <dss-chip icon="add_box" size="xs"></dss-chip>
            <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
        </dss-item-list-base>
    `),y=t=>Array.from({length:t},()=>e`
        <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high" selectable>
            <dss-form-checkbox slot="selector" label="Selecciona item" hideLabel value="item-id"></dss-form-checkbox>
            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
        </dss-item-list-base>
        `);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev'
    }
  },
  args: {
    numItems: 3,
    title: 'Títol',
    subtitle: 'Subtítol',
    showDate: true,
    date: '20/03/2024',
    showDecorativeIcon: 'true',
    decorativeIcon: 'add_box',
    decorativeIconState: 'default',
    showCriticity: false,
    criticity: 'danger-high',
    criticityLabel: 'Critic',
    showActionIcon: true,
    actionIcon: 'add_box',
    actionIconType: 'primary',
    showBadge: false,
    badgeText: 'Text',
    badgeSize: 'sm',
    badgeState: 'correct',
    showChip: false,
    chipText: 'Chip',
    chipIcon: 'add_box',
    chipSelected: false,
    disabled: false
  },
  render: (args: any) => {
    const items = Array.from({
      length: args.numItems
    });
    return html\`
      <div style="width:500px">
        <dss-item-list>
                    \${items.map(() => html\`
                            <dss-item-list-base
                                titleText="\${args.title}"
                                subtitle="\${args.subtitle}"
                                date="\${args.showDate ? args.date : ''}"
                                decorativeIcon="\${args.showDecorativeIcon ? args.decorativeIcon : ''}"
                                decorativeIconState="\${args.showDecorativeIcon ? args.decorativeIconState : ''}"
                                criticity="\${args.showCriticity ? args.criticity : ''}"
                                criticityLabel="\${args.showCriticity ? args.criticityLabel : ''}"
                                ?disabled="\${args.disabled}"
                            >
                                \${args.showBadge ? html\`
                                    <dss-badge 
                                        text="\${args.badgeText}"
                                        size="\${args.badgeSize ? args.badgeSize : 'sm'}"
                                        state="\${args.badgeState ? args.badgeState : 'undeterminated'}"
                                        ?disabled="\${args.disabled}"
                                    >
                                    </dss-badge>
                                \` : ''}

                                \${args.showChip ? html\`
                                    <dss-chip 
                                        size="sm" 
                                        icon=\${args.chipIcon}
                                        label="\${args.chipText}" 
                                        disableSelect
                                        ?selected=\${args.chipSelected}
                                        ?disabled="\${args.disabled}"

                                    ></dss-chip>
                                \` : ''}
                                
                                \${args.showActionIcon ? html\`
                                    <dss-icon-button 
                                        size="md" 
                                        icon="\${args.actionIcon}" 
                                        label="Action" 
                                        variant="\${args.actionIconType}"
                                        ?disabled="\${args.disabled}"
                                    >
                                    </dss-icon-button>
                                \` : ''}
                                
                            </dss-item-list-base>
                        \`)} 
                </dss-item-list>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Subtítol"></dss-item-list-base>
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-default-style')]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base titleText="Títol" subtitle="Default" decorativeIcon="add_box"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Success" decorativeIcon="add_box" decorativeIconState="success"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Error" decorativeIcon="add_box" decorativeIconState="error"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Info" decorativeIcon="add_box" decorativeIconState="info"></dss-item-list-base>
                    <dss-item-list-base titleText="Títol" subtitle="Disabled" decorativeIcon="add_box" decorativeIconState="info" decorativeIconDisabled></dss-item-list-base>
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-decorative-icon-style')]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="moderate-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high"></dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high" criticityDisabled></dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-criticity-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="danger" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="danger" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-icon-style')]
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-chip-style')]
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="sm" state="correct"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="md" state="moderate-high"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="lg" state="danger-high"></dss-badge>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-badge-style')]
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base titleText="Títol" criticity="danger-high" interactive>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Interactiu</dss-typography>
                    <dss-icon-button icon="add_box" label="Label"></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" criticity="slight" interactive disabled>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Deshabilitat</dss-typography>
                    <dss-icon-button icon="add_box" label="Label" disabled></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip disabled></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" criticity="slight" criticityDisabled interactive>
                    <dss-typography tag="p" variant="body-3" fontweight="regular">Descartat</dss-typography>
                    <dss-icon-button icon="add_box" label="Label"></dss-icon-button>
                    <dss-icon-button icon="more_vert" label="Menu" hideTooltip></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-interactive-style')]
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-item-list widget>
                    \${renderItemListBaseSelectable(3)}
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-selectable-style')]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-item-list widget>
                    \${renderItemListBase(3)}
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-widget-style')]
}`,...u.parameters?.docs?.source}}};const v=["Playground","ByDefault","DecorativeIcon","Criticity","ActionSlotIcon","ActionSlotChip","ActionSlotBadge","Interactive","Selectable","Widget"],S=Object.freeze(Object.defineProperty({__proto__:null,ActionSlotBadge:n,ActionSlotChip:c,ActionSlotIcon:r,ByDefault:o,Criticity:l,DecorativeIcon:d,Interactive:b,Playground:a,Selectable:m,Widget:u,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{r as A,o as B,l as C,d as D,b as I,a as P,S,u as W,n as a,c as b,m as c};
