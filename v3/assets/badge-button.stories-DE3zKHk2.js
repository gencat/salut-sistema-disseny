import{x as t}from"./iframe-CdZ_4rdx.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`,A={title:"Components/Badge Button",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:" Modificar icon",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"type",eq:"Informació"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",modifyIcon:!1,label:"Label",icon:"add_box",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,action:"dropdown"},render:e=>{const T=e.type==="Criticitat"?e.stateCritic:e.stateInfo;return t`
    ${e.showTooltip?e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}"
                            size="${e.size}" 
                            state="${T}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined}
                            ?hideIcon=${e.hideIcon} 
                            icon="${e.icon}"
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${T}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${T}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon} 
                            icon="${e.icon}"
                            action="${e.action}">
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${T}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                        </dss-badge-button>
                    `}
    `}},o={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-sizes-style")]},b={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    `},l={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    `},n={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    `},r={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="ideal" label="12345" hideIcon></dss-badge-button>
    `},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="lg" state="alert" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="details"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="external"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-action-style")]},g={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-high-style")]},u={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-style")]},c={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-low" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-low-style")]},m={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="moderate-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-moderate-high-style")]},p={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate" label="12345"></dss-badge-button>
        </div>  
    `,decorators:[s(a,"badge-button-moderate-style")]},z={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate-low" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-moderate-low-style")]},h={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="slight-high" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-slight-high-style")]},w={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight" label="12345"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-slight-style")]},v={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight-low" label="12345"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-slight-low-style")]},y={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="correct" label="12345"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-correct-style")]},f={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="undeterminated" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-undeterminated-style")]},S={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="md" state="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="sm" state="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="md" state="ideal" label="12345" outlined ></dss-badge-button>
                <dss-badge-button size="lg" state="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="xl" state="ideal" label="12345" outlined></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-ideal-style")]},x={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="critic" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="md" state="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="critic" label="12345" outlined ></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-critic-style")]},$={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="alert" label="12345" outlined ></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-alert-style")]},I={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="info" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="info" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" state="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="info" label="12345" outlined ></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-info-style")]},C={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="info-alt" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="sm" state="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="info-alt" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="xl" state="info-alt" label="12345" outlined></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-info-alt-style")]},L={tags:["!dev"],render:()=>t`
    <div class="wrapper">
      <dss-badge-button size="sm" state="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="md" state="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="lg" state="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="sm" state="neutral" label="12345" outlined ></dss-badge-button>
      <dss-badge-button size="md" state="neutral" label="12345" outlined></dss-badge-button>
      <dss-badge-button size="lg" state="neutral" label="12345" outlined ></dss-badge-button>
      <dss-badge-button size="xl" state="neutral" label="12345" outlined ></dss-badge-button>
    </div>
    `,decorators:[s(a,"badge-button-neutral-style")]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev'
    }
  },
  args: {
    size: 'lg',
    modifyIcon: false,
    label: 'Label',
    icon: 'add_box',
    type: 'Criticitat',
    stateCritic: 'danger-high',
    stateInfo: 'critical',
    disabled: false,
    outlined: false,
    hideIcon: false,
    showTooltip: false,
    action: 'dropdown'
  },
  render: (args: any) => {
    const state = args.type === 'Criticitat' ? args.stateCritic : args.stateInfo;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}"
                            size="\${args.size}" 
                            state="\${state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined}
                            ?hideIcon=\${args.hideIcon} 
                            icon="\${args.icon}"
                            action="\${args.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}
                            action="\${args.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : args.modifyIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon} 
                            icon="\${args.icon}"
                            action="\${args.action}">
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge-button size="sm" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-sizes-style')]
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="ideal" label="12345" hideIcon></dss-badge-button>
    \`;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="lg" state="alert" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="details"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="external"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-action-style')]
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-high" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-high-style')]
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-style')]
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-low" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-low-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge-button size="sm" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="moderate-high" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-high-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate" label="12345"></dss-badge-button>
        </div>  
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-style')]
}`,...p.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate-low" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-low-style')]
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="slight-high" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-high-style')]
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-style')]
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight-low" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-low-style')]
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="correct" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-correct-style')]
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="undeterminated" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-undeterminated-style')]
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" state="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="md" state="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="sm" state="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="md" state="ideal" label="12345" outlined ></dss-badge-button>
                <dss-badge-button size="lg" state="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="xl" state="ideal" label="12345" outlined></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-ideal-style')]
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="critic" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="md" state="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="critic" label="12345" outlined ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-critic-style')]
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="alert" label="12345" outlined ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-alert-style')]
}`,...$.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="info" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" state="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="sm" state="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="info" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" state="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" state="info" label="12345" outlined ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-info-style')]
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="info-alt" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="sm" state="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" state="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" state="info-alt" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="xl" state="info-alt" label="12345" outlined></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-info-alt-style')]
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge-button size="sm" state="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="md" state="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="lg" state="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="sm" state="neutral" label="12345" outlined ></dss-badge-button>
      <dss-badge-button size="md" state="neutral" label="12345" outlined></dss-badge-button>
      <dss-badge-button size="lg" state="neutral" label="12345" outlined ></dss-badge-button>
      <dss-badge-button size="xl" state="neutral" label="12345" outlined ></dss-badge-button>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-neutral-style')]
}`,...L.parameters?.docs?.source}}};const D=["Playground","Sizes","Disabled","Tooltip","Icon","HideIcon","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],_=Object.freeze(Object.defineProperty({__proto__:null,Action:i,Alert:$,Correct:y,Critic:x,Danger:u,DangerHigh:g,DangerLow:c,Disabled:b,HideIcon:r,Icon:n,Ideal:S,Info:I,InfoAlt:C,Moderate:p,ModerateHigh:m,ModerateLow:z,Neutral:L,Playground:d,Sizes:o,Slight:w,SlightHigh:h,SlightLow:v,Tooltip:l,Undeterminated:f,__namedExportsOrder:D,default:A},Symbol.toStringTag,{value:"Module"}));export{i as A,y as C,b as D,r as H,n as I,m as M,L as N,d as P,_ as S,l as T,f as U,o as a,g as b,u as c,c as d,p as e,z as f,h as g,w as h,v as i,S as j,x as k,$ as l,I as m,C as n};
