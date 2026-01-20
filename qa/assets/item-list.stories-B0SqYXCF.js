import{x as e}from"./lit-html-D6cejpwM.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const i=`
  .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .wrapper {
            display: block;
            width: 400px;
            max-width: 400px;
    }
`,G={title:"Components/Item List",argTypes:{numItems:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDate:{name:"Mostrar data",control:{type:"boolean"}},date:{name:"Data",control:{type:"text"},if:{arg:"showDate",truthy:!0}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconState:{name:"Decorative Icon Estat",control:{type:"select"},options:["default","success","error","info"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Action Icon variant",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Badge Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}},showChip:{name:"Mostrar chip",control:{type:"boolean"}},chipText:{name:"Chip Label",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipIcon:{name:"Chip icona",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipSelected:{name:"Chip seleccionat",control:{type:"boolean"},if:{arg:"showChip",truthy:!0}},showCriticity:{name:"Mostrar criticitat",control:{type:"boolean"}},criticityLabel:{name:"Criticitat Label",control:{type:"text"},if:{arg:"showCriticity",truthy:!0}},criticity:{name:"Criticitat Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showCriticity",truthy:!0}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev"}},args:{numItems:3,title:"Title",subtitle:"Subtitle",showDate:!0,date:"20/03/2024",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconState:"default",showCriticity:!1,criticity:"danger-high",criticityLabel:"Critic",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct",showChip:!1,chipText:"Chip",chipIcon:"add_box",chipSelected:!1,disabled:!1},render:t=>{const M=Array.from({length:t.numItems});return e`
      <div style="width:500px">
        <dss-item-list>
                    ${M.map(()=>e`
                            <dss-item-list-base
                                title="${t.title}"
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
    `}},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-default-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base title="Títol" subtitle="Default" decorativeIcon="add_box"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Success" decorativeIcon="add_box" decorativeIconState="success"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Error" decorativeIcon="add_box" decorativeIconState="error"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Info" decorativeIcon="add_box" decorativeIconState="info"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Disabled" decorativeIcon="add_box" decorativeIconState="info" disabled></dss-item-list-base>
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-decorative-icon-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="moderate-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high" disabled></dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-criticity-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="error" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="error" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-icon-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-chip-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="sm" state="correct"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="md" state="moderate-high"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="lg" state="danger-high"></dss-badge>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    `,decorators:[s(i,"item-list-action-slot-badge-style")]},b={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-item-list widget>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                </dss-item-list>
            </div>
    `,decorators:[s(i,"item-list-widget-style")]};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev'
    }
  },
  args: {
    numItems: 3,
    title: 'Title',
    subtitle: 'Subtitle',
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
                                title="\${args.title}"
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,p,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol"></dss-item-list-base>
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-default-style')]
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var S,v,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list>
                    <dss-item-list-base title="Títol" subtitle="Default" decorativeIcon="add_box"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Success" decorativeIcon="add_box" decorativeIconState="success"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Error" decorativeIcon="add_box" decorativeIconState="error"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Info" decorativeIcon="add_box" decorativeIconState="info"></dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Disabled" decorativeIcon="add_box" decorativeIconState="info" disabled></dss-item-list-base>
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-decorative-icon-style')]
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,I,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="moderate-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high"></dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="slight-high" disabled></dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-criticity-style')]
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var f,_,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="error" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    <dss-icon-button variant="error" icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-icon-style')]
}`,...(z=(_=r.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var $,A,C;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-chip-style')]
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var D,L,B;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="sm" state="correct"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="md" state="moderate-high"></dss-badge>
                </dss-item-list-base>
                <dss-item-list-base title="Títol" subtitle="Subtítol">
                    <dss-badge text="Text" size="lg" state="danger-high"></dss-badge>
                </dss-item-list-base>
            </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-slot-badge-style')]
}`,...(B=(L=n.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var O,P,E;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-item-list widget>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                    <dss-item-list-base title="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
                        <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
                        <dss-icon icon="add_box"></dss-icon>
                        <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined></dss-icon-badge>
                        <dss-chip icon="add_box" size="xs"></dss-chip>
                        <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
                        <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                    </dss-item-list-base>
                </dss-item-list>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-widget-style')]
}`,...(E=(P=b.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const F=["Playground","ByDefault","DecorativeIcon","Criticity","ActionSlotIcon","ActionSlotChip","ActionSlotBadge","Widget"],j=Object.freeze(Object.defineProperty({__proto__:null,ActionSlotBadge:n,ActionSlotChip:c,ActionSlotIcon:r,ByDefault:a,Criticity:l,DecorativeIcon:d,Playground:o,Widget:b,__namedExportsOrder:F,default:G},Symbol.toStringTag,{value:"Module"}));export{r as A,a as B,l as C,d as D,o as P,j as S,b as W,n as a,c as b};
