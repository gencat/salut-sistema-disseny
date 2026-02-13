import{x as s}from"./iframe-DLVb3rJw.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,T={title:"Components/Badge",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:"Modificar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"type",eq:"Informació"}},showIcon:{name:"Mostra Icona (Per mida sm)",control:{type:"boolean"},if:{arg:"size",eq:"sm"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",modifyIcon:!1,text:"12345",icon:"person",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,tooltipPosition:"top"},render:e=>{const P=e.type==="Criticitat"?e.stateCritic:e.stateInfo;return s`
    ${e.showTooltip?e.modifyIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon}>
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e.modifyIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} >
              </dss-badge>
            `}
    `}},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345"></dss-badge>
        <dss-badge size="md" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="xl" state="ideal" text="12345"></dss-badge>
      </div>
    `,decorators:[t(d,"badge-size-style")]},i={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    `},o={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="ideal" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    `},g={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="correct" icon="home" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    `},l={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="ideal" text="12345" hideIcon></dss-badge>
    `},n={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-high-style")]},b={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger" text="12345"></dss-badge>
        <dss-badge size="md" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-style")]},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-low-style")]},m={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-high" text="12345" ></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-moderate-high-style")]},p={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="moderate" text="12345"></dss-badge>
      <dss-badge size="md" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345" dot></dss-badge>
    </div>  
    `,decorators:[t(d,"badge-moderate-style")]},u={tags:["!dev"],render:()=>s`
    <div class="wrapper">
        <dss-badge size="sm" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-low" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-moderate-low-style")]},x={tags:["!dev"],render:()=>s`
    <div class="wrapper">
    <dss-badge size="sm" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="md" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345" dot></dss-badge>
  </div>
    `,decorators:[t(d,"badge-slight-high-style")]},z={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="slight" text="12345"></dss-badge>
        <dss-badge size="md" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-slight-style")]},h={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="md" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-slight-low-style")]},w={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-badge size="sm" state="correct" text="12345"></dss-badge>
    <dss-badge size="md" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345" dot></dss-badge>
  </div>
    `,decorators:[t(d,"badge-correct-style")]},v={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="md" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345" dot></dss-badge>
    </div>
    `,decorators:[t(d,"badge-undeterminated-style")]},y={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345" ></dss-badge>
        <dss-badge size="md" state="ideal" text="12345" ></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" dot ></dss-badge>
        <dss-badge size="sm" state="ideal" text="12345" outlined></dss-badge>
        <dss-badge size="md" state="ideal" text="12345" outlined ></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" outlined></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" outlined dot ></dss-badge>
      </div>
    `,decorators:[t(d,"badge-ideal-style")]},f={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="critic" text="12345" ></dss-badge>
      <dss-badge size="md" state="critic" text="12345" ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" dot></dss-badge>
      <dss-badge size="sm" state="critic" text="12345" outlined></dss-badge>
      <dss-badge size="md" state="critic" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[t(d,"badge-critic-style")]},S={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="alert" text="12345" ></dss-badge>
      <dss-badge size="md" state="alert" text="12345" ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[t(d,"badge-alert-style")]},I={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="info" text="12345"></dss-badge>
      <dss-badge size="md" state="info" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="info" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="info" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="info" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" outlined dot></dss-badge>
    </div>
    `,decorators:[t(d,"badge-info-style")]},$={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="info-alt" text="12345"></dss-badge>
      <dss-badge size="md" state="info-alt" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345"></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="info-alt" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="info-alt" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[t(d,"badge-info-alt-style")]},C={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="neutral" text="12345" ></dss-badge>
      <dss-badge size="md" state="neutral" text="12345" ></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345"></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" dot></dss-badge>
      <dss-badge size="sm" state="neutral" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="neutral" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" outlined dot></dss-badge>
    </div>
    `,decorators:[t(d,"badge-neutral-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev'
    }
  },
  args: {
    size: 'lg',
    modifyIcon: false,
    text: '12345',
    icon: 'person',
    type: 'Criticitat',
    stateCritic: 'danger-high',
    stateInfo: 'critical',
    disabled: false,
    outlined: false,
    hideIcon: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    const state = args.type === 'Criticitat' ? args.stateCritic : args.stateInfo;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.modifyIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} >
              </dss-badge>
            \`}
    \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345"></dss-badge>
        <dss-badge size="md" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="xl" state="ideal" text="12345"></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-size-style')]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    \`;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="ideal" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    \`;
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="correct" icon="home" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    \`;
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="ideal" text="12345" hideIcon></dss-badge>
    \`;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-high-style')]
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="danger" text="12345"></dss-badge>
        <dss-badge size="md" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-style')]
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-low-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-high" text="12345" ></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-high-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="moderate" text="12345"></dss-badge>
      <dss-badge size="md" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345" dot></dss-badge>
    </div>  
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-style')]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
        <dss-badge size="sm" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-low" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-low-style')]
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <dss-badge size="sm" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="md" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345" dot></dss-badge>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-high-style')]
}`,...x.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="slight" text="12345"></dss-badge>
        <dss-badge size="md" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-style')]
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="md" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-low-style')]
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-badge size="sm" state="correct" text="12345"></dss-badge>
    <dss-badge size="md" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345" dot></dss-badge>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-correct-style')]
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="md" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345" dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-undeterminated-style')]
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345" ></dss-badge>
        <dss-badge size="md" state="ideal" text="12345" ></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" dot ></dss-badge>
        <dss-badge size="sm" state="ideal" text="12345" outlined></dss-badge>
        <dss-badge size="md" state="ideal" text="12345" outlined ></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" outlined></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345" outlined dot ></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-ideal-style')]
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="critic" text="12345" ></dss-badge>
      <dss-badge size="md" state="critic" text="12345" ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" dot></dss-badge>
      <dss-badge size="sm" state="critic" text="12345" outlined></dss-badge>
      <dss-badge size="md" state="critic" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="critic" text="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-critic-style')]
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="alert" text="12345" ></dss-badge>
      <dss-badge size="md" state="alert" text="12345" ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="alert" text="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-alert-style')]
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="info" text="12345"></dss-badge>
      <dss-badge size="md" state="info" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="info" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="info" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="info" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="info" text="12345" outlined dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-style')]
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="info-alt" text="12345"></dss-badge>
      <dss-badge size="md" state="info-alt" text="12345" ></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345"></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" dot ></dss-badge>
      <dss-badge size="sm" state="info-alt" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="info-alt" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="info-alt" text="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-alt-style')]
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" state="neutral" text="12345" ></dss-badge>
      <dss-badge size="md" state="neutral" text="12345" ></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345"></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" dot></dss-badge>
      <dss-badge size="sm" state="neutral" text="12345" outlined ></dss-badge>
      <dss-badge size="md" state="neutral" text="12345" outlined></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" outlined ></dss-badge>
      <dss-badge size="lg" state="neutral" text="12345" outlined dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-neutral-style')]
}`,...C.parameters?.docs?.source}}};const D=["Playground","Sizes","Disabled","Tooltip","CustomIcon","HideIcon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],A=Object.freeze(Object.defineProperty({__proto__:null,Alert:S,Correct:w,Critic:f,CustomIcon:g,Danger:b,DangerHigh:n,DangerLow:c,Disabled:i,HideIcon:l,Ideal:y,Info:I,InfoAlt:$,Moderate:p,ModerateHigh:m,ModerateLow:u,Neutral:C,Playground:a,Sizes:r,Slight:z,SlightHigh:x,SlightLow:h,Tooltip:o,Undeterminated:v,__namedExportsOrder:D,default:T},Symbol.toStringTag,{value:"Module"}));export{S as A,g as C,i as D,l as H,y as I,m as M,C as N,a as P,A as S,o as T,v as U,r as a,n as b,b as c,c as d,p as e,u as f,x as g,z as h,h as i,w as j,f as k,I as l,$ as m};
