import{x as e}from"./iframe-DHQWIC1_.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,D={title:"Components/Badge",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:"Modificar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},criticStatus:{name:"Estats criticitat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"]},infoStatus:{name:"Estats informació",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"}},showIcon:{name:"Mostra Icona (Per mida sm)",control:{type:"boolean"},if:{arg:"size",eq:"sm"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},l={name:"Playground - Criticitat",argTypes:{infoStatus:{table:{disable:!0}},outlined:{table:{disable:!0}},hideIcon:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",modifyIcon:!1,text:"12345",icon:"person",criticStatus:"danger-high",disabled:!1,showTooltip:!1,tooltipPosition:"top"},render:s=>{const t=s.criticStatus;return e`
    ${s.showTooltip?s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon}>
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} >
              </dss-badge>
            `}
    `}},i={name:"Playground - Informació",argTypes:{criticStatus:{table:{disable:!0}},hideIcon:{name:"Amaga icona",control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",modifyIcon:!1,text:"12345",icon:"person",infoStatus:"ideal",disabled:!1,outlined:!0,hideIcon:!1,showTooltip:!1},render:s=>{const t=s.infoStatus;return e`
    ${s.showTooltip?s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon}>
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s.modifyIcon?e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} icon="${s.icon}">
              </dss-badge>
            `:e`
              <dss-badge label="${s.text}" size="${s.size}" status="${t}" ?disabled=${s.disabled} ?outlined=${s.outlined} ?hideIcon=${s.hideIcon} >
              </dss-badge>
            `}
    `}},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345"></dss-badge>
        <dss-badge size="md" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
      </div>
    `,decorators:[a(d,"badge-size-style")]},o={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="ideal" label="12345" disabled></dss-badge>
    `},g={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-badge size="lg" status="ideal" label="Label truncat lorem ipsum">
                </dss-badge>
                <dss-badge size="lg" status="ideal" label="12345">
                    <dss-tooltip slot="tooltip">
                        Indicar info
                    </dss-tooltip>
                </dss-badge>
            </div>
    `},b={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="correct" icon="home" label="12345">
      </dss-badge>
    `},n={tags:["!dev"],render:()=>e`
      <dss-badge size="lg" status="ideal" label="12345" hideIcon></dss-badge>
    `},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-high" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-high-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger" label="12345"></dss-badge>
        <dss-badge size="md" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-style")]},p={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="md" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="danger-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="danger-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-danger-low-style")]},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-high" label="12345" ></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-high" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-high" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-moderate-high-style")]},z={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="moderate" label="12345"></dss-badge>
      <dss-badge size="md" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345"></dss-badge>
      <dss-badge size="xl" status="moderate" label="12345"></dss-badge>
      <dss-badge size="lg" status="moderate" label="12345" dot></dss-badge>
    </div>  
    `,decorators:[a(d,"badge-moderate-style")]},h={tags:["!dev"],render:()=>e`
    <div class="wrapper">
        <dss-badge size="sm" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="md" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="moderate-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="moderate-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-moderate-low-style")]},w={tags:["!dev"],render:()=>e`
    <div class="wrapper">
    <dss-badge size="sm" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="md" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="xl" status="slight-high" label="12345"></dss-badge>
    <dss-badge size="lg" status="slight-high" label="12345" dot></dss-badge>
  </div>
    `,decorators:[a(d,"badge-slight-high-style")]},v={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="slight" label="12345"></dss-badge>
        <dss-badge size="md" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-slight-style")]},y={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-badge size="sm" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="md" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="xl" status="slight-low" label="12345"></dss-badge>
        <dss-badge size="lg" status="slight-low" label="12345" dot></dss-badge>
      </div>
    `,decorators:[a(d,"badge-slight-low-style")]},f={tags:["!dev"],render:()=>e`
      <div class="wrapper">
    <dss-badge size="sm" status="correct" label="12345"></dss-badge>
    <dss-badge size="md" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345"></dss-badge>
    <dss-badge size="xl" status="correct" label="12345"></dss-badge>
    <dss-badge size="lg" status="correct" label="12345" dot></dss-badge>
  </div>
    `,decorators:[a(d,"badge-correct-style")]},$={tags:["!dev"],render:()=>e`
    <div class="wrapper">
      <dss-badge size="sm" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="md" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="xl" status="undeterminated" label="12345"></dss-badge>
      <dss-badge size="lg" status="undeterminated" label="12345" dot></dss-badge>
    </div>
    `,decorators:[a(d,"badge-undeterminated-style")]},S={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-badge size="sm" status="ideal" label="12345" outlined></dss-badge>
                <dss-badge size="md" status="ideal" label="12345" outlined ></dss-badge>
                <dss-badge size="lg" status="ideal" label="12345" outlined ></dss-badge>
                <dss-badge size="xl" status="ideal" label="12345" outlined></dss-badge>
                <dss-badge size="lg" status="ideal" label="12345" outlined dot ></dss-badge>
            </div>
            <br/>
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" dot ></dss-badge>
            </div>
    `,decorators:[a(d,"badge-ideal-style")]},I={tags:["!dev"],render:()=>e`
        <div class="wrapper">
            <dss-badge size="sm" status="critical" label="12345" outlined></dss-badge>
            <dss-badge size="md" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="critical" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" ></dss-badge>
      <dss-badge size="md" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" dot></dss-badge>
        </div>
    `,decorators:[a(d,"badge-critic-style")]},x={tags:["!dev"],render:()=>e`
        <div class="wrapper">
            <dss-badge size="sm" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="alert" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" dot ></dss-badge>
        </div>
    `,decorators:[a(d,"badge-alert-style")]},P={tags:["!dev"],render:()=>e`
        <div class="wrapper">
            <dss-badge size="sm" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="info" label="12345" outlined></dss-badge>
            <dss-badge size="lg" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info" label="12345" outlined dot></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345"></dss-badge>
      <dss-badge size="md" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" dot ></dss-badge>
        </div>
    `,decorators:[a(d,"badge-info-style")]},T={tags:["!dev"],render:()=>e`
        <div class="wrapper">
            <dss-badge size="sm" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info-alt" label="12345" outlined></dss-badge>
            <dss-badge size="xl" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info-alt" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" dot ></dss-badge>
        </div>
    `,decorators:[a(d,"badge-info-alt-style")]},C={tags:["!dev"],render:()=>e`
        <div class="wrapper">
            <dss-badge size="sm" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="neutral" label="12345" outlined></dss-badge>
            <dss-badge size="lg" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="neutral" label="12345" outlined dot></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345"></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345"></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" dot></dss-badge>
        </div>
    `,decorators:[a(d,"badge-neutral-style")]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground - Criticitat',
  argTypes: {
    infoStatus: {
      table: {
        disable: true
      }
    },
    outlined: {
      table: {
        disable: true
      }
    },
    hideIcon: {
      table: {
        disable: true
      }
    }
  },
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
    criticStatus: 'danger-high',
    disabled: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    const status = args.criticStatus;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.modifyIcon ? html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} >
              </dss-badge>
            \`}
    \`;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Playground - Informació',
  argTypes: {
    criticStatus: {
      table: {
        disable: true
      }
    },
    hideIcon: {
      name: 'Amaga icona',
      control: {
        type: 'boolean'
      }
    }
  },
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
    infoStatus: 'ideal',
    disabled: false,
    outlined: true,
    hideIcon: false,
    showTooltip: false
  },
  render: (args: any) => {
    const status = args.infoStatus;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.modifyIcon ? html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge label="\${args.text}" size="\${args.size}" status="\${status}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} >
              </dss-badge>
            \`}
    \`;
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="ideal" label="12345" disabled></dss-badge>
    \`;
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="correct" icon="home" label="12345">
      </dss-badge>
    \`;
  }
}`,...b.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" status="ideal" label="12345" hideIcon></dss-badge>
    \`;
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-badge size="sm" status="ideal" label="12345" outlined></dss-badge>
                <dss-badge size="md" status="ideal" label="12345" outlined ></dss-badge>
                <dss-badge size="lg" status="ideal" label="12345" outlined ></dss-badge>
                <dss-badge size="xl" status="ideal" label="12345" outlined></dss-badge>
                <dss-badge size="lg" status="ideal" label="12345" outlined dot ></dss-badge>
            </div>
            <br/>
      <div class="wrapper">
        <dss-badge size="sm" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="md" status="ideal" label="12345" ></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345"></dss-badge>
        <dss-badge size="xl" status="ideal" label="12345"></dss-badge>
        <dss-badge size="lg" status="ideal" label="12345" dot ></dss-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-ideal-style')]
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge size="sm" status="critical" label="12345" outlined></dss-badge>
            <dss-badge size="md" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="critical" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="critical" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="critical" label="12345" ></dss-badge>
      <dss-badge size="md" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" ></dss-badge>
      <dss-badge size="xl" status="critical" label="12345" ></dss-badge>
      <dss-badge size="lg" status="critical" label="12345" dot></dss-badge>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-critic-style')]
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge size="sm" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="alert" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="alert" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="alert" label="12345" ></dss-badge>
      <dss-badge size="md" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" ></dss-badge>
      <dss-badge size="xl" status="alert" label="12345" ></dss-badge>
      <dss-badge size="lg" status="alert" label="12345" dot ></dss-badge>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-alert-style')]
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge size="sm" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="info" label="12345" outlined></dss-badge>
            <dss-badge size="lg" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="info" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info" label="12345" outlined dot></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="info" label="12345"></dss-badge>
      <dss-badge size="md" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" ></dss-badge>
      <dss-badge size="xl" status="info" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info" label="12345" dot ></dss-badge>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-style')]
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge size="sm" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info-alt" label="12345" outlined></dss-badge>
            <dss-badge size="xl" status="info-alt" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="info-alt" label="12345" outlined dot ></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="md" status="info-alt" label="12345" ></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="xl" status="info-alt" label="12345"></dss-badge>
      <dss-badge size="lg" status="info-alt" label="12345" dot ></dss-badge>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-info-alt-style')]
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge size="sm" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="md" status="neutral" label="12345" outlined></dss-badge>
            <dss-badge size="lg" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="xl" status="neutral" label="12345" outlined ></dss-badge>
            <dss-badge size="lg" status="neutral" label="12345" outlined dot></dss-badge>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge size="sm" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="md" status="neutral" label="12345" ></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345"></dss-badge>
      <dss-badge size="xl" status="neutral" label="12345"></dss-badge>
      <dss-badge size="lg" status="neutral" label="12345" dot></dss-badge>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-neutral-style')]
}`,...C.parameters?.docs?.source}}};const A=["PlaygroundCritic","PlaygroundInfo","Sizes","Disabled","Tooltip","CustomIcon","HideIcon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],F=Object.freeze(Object.defineProperty({__proto__:null,Alert:x,Correct:f,Critic:I,CustomIcon:b,Danger:c,DangerHigh:u,DangerLow:p,Disabled:o,HideIcon:n,Ideal:S,Info:P,InfoAlt:T,Moderate:z,ModerateHigh:m,ModerateLow:h,Neutral:C,PlaygroundCritic:l,PlaygroundInfo:i,Sizes:r,Slight:v,SlightHigh:w,SlightLow:y,Tooltip:g,Undeterminated:$,__namedExportsOrder:A,default:D},Symbol.toStringTag,{value:"Module"}));export{x as A,b as C,o as D,n as H,S as I,m as M,C as N,F as S,g as T,$ as U,r as a,u as b,c,p as d,z as e,h as f,w as g,v as h,y as i,f as j,I as k,P as l,T as m};
