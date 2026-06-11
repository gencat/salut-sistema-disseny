import{x as e}from"./iframe-PL0KlCAr.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,T={title:"Components/Badge",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:"Modificar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"type",eq:"Informació"}},showIcon:{name:"Mostra Icona (Per mida sm)",control:{type:"boolean"},if:{arg:"size",eq:"sm"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",modifyIcon:!1,text:"12345",icon:"person",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,tooltipPosition:"top"},render:s=>{const P=s.type==="Criticitat"?s.stateCritic:s.stateInfo;return e`
    ${s.showTooltip?s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${P}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${P}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon}>
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${P}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${P}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} >
              </dss-badge>
            `}
    `}},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345"></dss-badge>
        <dss-badge size="md" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
      </div>
    `,decorators:[a(d,"badge-size-style")]},r={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="ideal" label="12345" disabled></dss-badge>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-badge size="lg" status="ideal" label="Label truncat lorem ipsum">
                </dss-badge>
                <dss-badge size="lg" status="ideal" label="12345">
                    <dss-tooltip slot="tooltip">
                        Indicar info
                    </dss-tooltip>
                </dss-badge>
            </div>
    `},g={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="correct" icon="home" label="12345">
      </dss-badge>
    `},b={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="ideal" label="12345" hideIcon></dss-badge>
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-high-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger" label="12345"></dss-badge>
        <dss-badge size="md" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-style")]},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-low-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-high" label="12345" ></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-moderate-high-style")]},m={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="moderate" label="12345"></dss-badge>
      <dss-badge size="md" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345"></dss-badge>
      <dss-badge size="xl" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345" dot></dss-badge>
    </div>  
    `,decorators:[a(d,"badge-moderate-style")]},p={tags:["!dev"],render:()=>e`
    <div class="wrapper">
        <dss-badge size="sm" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-moderate-low-style")]},z={tags:["!dev"],render:()=>e`
    <div class="wrapper">
    <dss-badge size="sm" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="md" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="xl" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345" dot></dss-badge>
  </div>
    `,decorators:[a(d,"badge-slight-high-style")]},h={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="slight" label="12345"></dss-badge>
        <dss-badge size="md" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-slight-style")]},w={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="md" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-slight-low-style")]},v={tags:["!dev"],render:()=>e`
      <div class="wrapper">
    <dss-badge size="sm" status="correct" label="12345"></dss-badge>
    <dss-badge size="md" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345"></dss-badge>
    <dss-badge size="xl" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345" dot></dss-badge>
  </div>
    `,decorators:[a(d,"badge-correct-style")]},y={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="md" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="xl" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345" dot></dss-badge>
    </div>
    `,decorators:[a(d,"badge-undeterminated-style")]},f={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" dot ></dss-badge>
            </div>
            <br/>
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" outlined></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" outlined ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" outlined ></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345" outlined></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" outlined dot ></dss-badge>
      </div>
    `,decorators:[a(d,"badge-ideal-style")]},S={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" ></dss-badge>
      <dss-badge size="md" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" dot></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" outlined></dss-badge>
      <dss-badge size="md" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[a(d,"badge-critic-style")]},x={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[a(d,"badge-alert-style")]},I={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345"></dss-badge>
      <dss-badge size="md" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="info" label="12345" outlined></dss-badge>
      <dss-badge size="lg" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" outlined dot></dss-badge>
    </div>
    `,decorators:[a(d,"badge-info-style")]},$={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" outlined></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" outlined dot ></dss-badge>
    </div>
    `,decorators:[a(d,"badge-info-alt-style")]},C={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345"></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345"></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" dot></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" outlined></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" outlined dot></dss-badge>
    </div>
    `,decorators:[a(d,"badge-neutral-style")]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.modifyIcon ? html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} >
              </dss-badge>
            \`}
    \`;
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345"></dss-badge>
        <dss-badge size="md" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-size-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="ideal" label="12345" disabled></dss-badge>
    \`;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge size="lg" status="ideal" label="Label truncat lorem ipsum">
                </dss-badge>
                <dss-badge size="lg" status="ideal" label="12345">
                    <dss-tooltip slot="tooltip">
                        Indicar info
                    </dss-tooltip>
                </dss-badge>
            </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="correct" icon="home" label="12345">
      </dss-badge>
    \`;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="ideal" label="12345" hideIcon></dss-badge>
    \`;
  }
}`,...b.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-high-style')]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="danger" label="12345"></dss-badge>
        <dss-badge size="md" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-style')]
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-danger-low-style')]
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-high" label="12345" ></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-high-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="moderate" label="12345"></dss-badge>
      <dss-badge size="md" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345"></dss-badge>
      <dss-badge size="xl" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345" dot></dss-badge>
    </div>  
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
        <dss-badge size="sm" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-moderate-low-style')]
}`,...p.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <dss-badge size="sm" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="md" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="xl" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345" dot></dss-badge>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-high-style')]
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="slight" label="12345"></dss-badge>
        <dss-badge size="md" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-style')]
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="md" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345" dot></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-slight-low-style')]
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-badge size="sm" status="correct" label="12345"></dss-badge>
    <dss-badge size="md" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345"></dss-badge>
    <dss-badge size="xl" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345" dot></dss-badge>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-correct-style')]
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="md" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="xl" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345" dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-undeterminated-style')]
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" dot ></dss-badge>
            </div>
            <br/>
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" outlined></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" outlined ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" outlined ></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345" outlined></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" outlined dot ></dss-badge>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-ideal-style')]
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" ></dss-badge>
      <dss-badge size="md" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" dot></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" outlined></dss-badge>
      <dss-badge size="md" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-critic-style')]
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-alert-style')]
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345"></dss-badge>
      <dss-badge size="md" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="info" label="12345" outlined></dss-badge>
      <dss-badge size="lg" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" outlined dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-style')]
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" dot ></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" outlined></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" outlined dot ></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-alt-style')]
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345"></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345"></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" dot></dss-badge>
        </div>
        <br/>
        <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" outlined></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345" outlined ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" outlined dot></dss-badge>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-neutral-style')]
}`,...C.parameters?.docs?.source}}};const D=["Playground","Sizes","Disabled","Tooltip","CustomIcon","HideIcon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],A=Object.freeze(Object.defineProperty({__proto__:null,Alert:x,Correct:v,Critic:S,CustomIcon:g,Danger:n,DangerHigh:o,DangerLow:u,Disabled:r,HideIcon:b,Ideal:f,Info:I,InfoAlt:$,Moderate:m,ModerateHigh:c,ModerateLow:p,Neutral:C,Playground:t,Sizes:l,Slight:h,SlightHigh:z,SlightLow:w,Tooltip:i,Undeterminated:y,__namedExportsOrder:D,default:T},Symbol.toStringTag,{value:"Module"}));export{x as A,g as C,r as D,b as H,f as I,c as M,C as N,t as P,A as S,i as T,y as U,l as a,o as b,n as c,u as d,m as e,p as f,z as g,h,w as i,v as j,S as k,I as l,$ as m};
