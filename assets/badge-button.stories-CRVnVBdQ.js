import{x as s}from"./iframe-DHQWIC1_.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,D={title:"Components/Badge Button",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:" Modificar icon",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},criticStatus:{name:"Estats criticitat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"]},infoStatus:{name:"Estats informació",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},o={name:"Playground - Criticitat",argTypes:{infoStatus:{table:{disable:!0}},outlined:{table:{disable:!0}},hideIcon:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",modifyIcon:!1,label:"Label",icon:"add_box",criticStatus:"danger-high",disabled:!1,showTooltip:!1,action:"dropdown"},render:t=>{const d=t.criticStatus;return s`
    ${t.showTooltip?t.modifyIcon?s`
                        <dss-badge-button 
                            label="${t.label}"
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            icon="${t.icon}"
                            action="${t.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            action="${t.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:t.modifyIcon?s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            icon="${t.icon}"
                            action="${t.action}">
                        </dss-badge-button>
                    `:s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            action="${t.action}">
                        </dss-badge-button>
                    `}
    `}},b={name:"Playground - Informació",argTypes:{criticStatus:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",modifyIcon:!1,label:"Label",icon:"add_box",infoStatus:"ideal",disabled:!1,outlined:!0,hideIcon:!1,showTooltip:!1,action:"dropdown"},render:t=>{const d=t.infoStatus;return s`
    ${t.showTooltip?t.modifyIcon?s`
                        <dss-badge-button 
                            label="${t.label}"
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            ?outlined=${t.outlined}
                            ?hideIcon=${t.hideIcon} 
                            icon="${t.icon}"
                            action="${t.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            ?outlined=${t.outlined} 
                            ?hideIcon=${t.hideIcon}
                            action="${t.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:t.modifyIcon?s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            ?outlined=${t.outlined} 
                            ?hideIcon=${t.hideIcon} 
                            icon="${t.icon}"
                            action="${t.action}">
                        </dss-badge-button>
                    `:s`
                        <dss-badge-button 
                            label="${t.label}" 
                            size="${t.size}" 
                            status="${d}" 
                            ?disabled=${t.disabled} 
                            ?outlined=${t.outlined} 
                            ?hideIcon=${t.hideIcon}
                            action="${t.action}">
                        </dss-badge-button>
                    `}
    `}},n={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge-button size="sm" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" status="ideal" label="12345"></dss-badge-button>
      </div>
    `,decorators:[e(a,"badge-button-sizes-style")]},l={tags:["!dev"],render:()=>s`
            <dss-badge-button size="lg" status="ideal" label="12345" disabled></dss-badge-button>
    `},r={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-badge-button size="lg" status="ideal" label="Label truncat lorem ipsum">
                </dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345">
                    <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                </dss-badge-button>
            </div>
    `},u={tags:["!dev"],render:()=>s`
      <dss-badge-button size="lg" status="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    `},i={tags:["!dev"],render:()=>s`
      <dss-badge-button size="lg" status="ideal" label="12345" hideIcon></dss-badge-button>
    `},g={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="lg" status="alert" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="alert" label="12345" action="details"></dss-badge-button>
                <dss-badge-button size="lg" status="alert" label="12345" action="external"></dss-badge-button>
            </div>
    `,decorators:[e(a,"badge-button-action-style")]},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[e(a,"badge-button-danger-high-style")]},m={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger" label="12345"></dss-badge-button>
      </div>
    `,decorators:[e(a,"badge-button-danger-style")]},p={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger-low" label="12345"></dss-badge-button>
      </div>
    `,decorators:[e(a,"badge-button-danger-low-style")]},z={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge-button size="sm" status="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" status="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" status="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" status="moderate-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[e(a,"badge-button-moderate-high-style")]},h={tags:["!dev"],render:()=>s`
    <div class="wrapper">
            <dss-badge-button size="sm" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="moderate" label="12345"></dss-badge-button>
        </div>  
    `,decorators:[e(a,"badge-button-moderate-style")]},w={tags:["!dev"],render:()=>s`
    <div class="wrapper">
            <dss-badge-button size="sm" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="moderate-low" label="12345"></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-moderate-low-style")]},v={tags:["!dev"],render:()=>s`
    <div class="wrapper">
            <dss-badge-button size="sm" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="slight-high" label="12345"></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-slight-high-style")]},y={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="slight" label="12345"></dss-badge-button>
            </div>
    `,decorators:[e(a,"badge-button-slight-style")]},f={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="slight-low" label="12345"></dss-badge-button>
            </div>
    `,decorators:[e(a,"badge-button-slight-low-style")]},$={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-badge-button size="sm" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="correct" label="12345"></dss-badge-button>
            </div>
    `,decorators:[e(a,"badge-button-correct-style")]},S={tags:["!dev"],render:()=>s`
    <div class="wrapper">
            <dss-badge-button size="sm" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="undeterminated" label="12345"></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-undeterminated-style")]},x={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-badge-button size="sm" status="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="md" status="ideal" label="12345" outlined ></dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="xl" status="ideal" label="12345" outlined></dss-badge-button>
            </div>
            <br/>
      <div class="wrapper">
                <dss-badge-button size="sm" status="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="md" status="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="ideal" label="12345"></dss-badge-button>
            </div>
    `,decorators:[e(a,"badge-button-ideal-style")]},I={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-badge-button size="sm" status="critic" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="md" status="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="critic" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="critic" label="12345" ></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-critic-style")]},L={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-badge-button size="sm" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="alert" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="alert" label="12345" ></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-alert-style")]},T={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-badge-button size="sm" status="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="info" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" status="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="info" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="info" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="info" label="12345" ></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-info-style")]},F={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-badge-button size="sm" status="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="info-alt" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="xl" status="info-alt" label="12345" outlined></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="info-alt" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="info-alt" label="12345"></dss-badge-button>
        </div>
    `,decorators:[e(a,"badge-button-info-alt-style")]},A={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-badge-button size="sm" status="neutral" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="neutral" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" status="neutral" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="neutral" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge-button size="sm" status="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="md" status="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="lg" status="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" status="neutral" label="12345"></dss-badge-button>
    </div>
    `,decorators:[e(a,"badge-button-neutral-style")]},C={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const d=document.querySelector("#manual-focus-demo");d&&d.focus()}} variant="secondary"></dss-button>
                <dss-badge-button 
                    id="manual-focus-demo"
                    state="slight-high"
                    label="Badge Button"
                    size="md"
                ></dss-badge-button>
            </div>
        `,decorators:[e(a,"button-focus-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev'
    }
  },
  args: {
    size: 'lg',
    modifyIcon: false,
    label: 'Label',
    icon: 'add_box',
    criticStatus: 'danger-high',
    disabled: false,
    showTooltip: false,
    action: 'dropdown'
  },
  render: (args: any) => {
    const state = args.criticStatus;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}"
                            size="\${args.size}" 
                            status="\${state}" 
                            ?disabled=\${args.disabled} 
                            icon="\${args.icon}"
                            action="\${args.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            status="\${state}" 
                            ?disabled=\${args.disabled} 
                            action="\${args.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : args.modifyIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            status="\${state}" 
                            ?disabled=\${args.disabled} 
                            icon="\${args.icon}"
                            action="\${args.action}">
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            status="\${state}" 
                            ?disabled=\${args.disabled} 
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Playground - Informació',
  argTypes: {
    criticStatus: {
      table: {
        disable: true
      }
    }
  },
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
    infoStatus: 'ideal',
    disabled: false,
    outlined: true,
    hideIcon: false,
    showTooltip: false,
    action: 'dropdown'
  },
  render: (args: any) => {
    const state = args.infoStatus;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}"
                            size="\${args.size}" 
                            status="\${state}" 
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
                            status="\${state}" 
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
                            status="\${state}" 
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
                            status="\${state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...b.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge-button size="sm" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" status="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" status="ideal" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-sizes-style')]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" status="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-badge-button size="lg" status="ideal" label="Label truncat lorem ipsum">
                </dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345">
                    <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                </dss-badge-button>
            </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" status="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" status="ideal" label="12345" hideIcon></dss-badge-button>
    \`;
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="lg" status="alert" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="alert" label="12345" action="details"></dss-badge-button>
                <dss-badge-button size="lg" status="alert" label="12345" action="external"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-action-style')]
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger-high" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-high-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="danger-low" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-danger-low-style')]
}`,...p.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-badge-button size="sm" status="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" status="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" status="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" status="moderate-high" label="12345"></dss-badge-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-high-style')]
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="moderate" label="12345"></dss-badge-button>
        </div>  
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-style')]
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="moderate-low" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-moderate-low-style')]
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="slight-high" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-high-style')]
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="slight" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-style')]
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="slight-low" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-slight-low-style')]
}`,...f.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-badge-button size="sm" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="md" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" status="correct" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="correct" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-correct-style')]
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-badge-button size="sm" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" status="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="undeterminated" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-undeterminated-style')]
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-badge-button size="sm" status="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="md" status="ideal" label="12345" outlined ></dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345" outlined></dss-badge-button>
                <dss-badge-button size="xl" status="ideal" label="12345" outlined></dss-badge-button>
            </div>
            <br/>
      <div class="wrapper">
                <dss-badge-button size="sm" status="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="md" status="ideal" label="12345" ></dss-badge-button>
                <dss-badge-button size="lg" status="ideal" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" status="ideal" label="12345"></dss-badge-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-ideal-style')]
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge-button size="sm" status="critic" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="md" status="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="critic" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="critic" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="critic" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="critic" label="12345" ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-critic-style')]
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge-button size="sm" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="alert" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="alert" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="md" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="alert" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="alert" label="12345" ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-alert-style')]
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge-button size="sm" status="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="info" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" status="info" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="info" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="info" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="info" label="12345" ></dss-badge-button>
            <dss-badge-button size="xl" status="info" label="12345" ></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-info-style')]
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge-button size="sm" status="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="info-alt" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="lg" status="info-alt" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="xl" status="info-alt" label="12345" outlined></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
            <dss-badge-button size="sm" status="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="md" status="info-alt" label="12345" ></dss-badge-button>
            <dss-badge-button size="lg" status="info-alt" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" status="info-alt" label="12345"></dss-badge-button>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-info-alt-style')]
}`,...F.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-badge-button size="sm" status="neutral" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="md" status="neutral" label="12345" outlined></dss-badge-button>
            <dss-badge-button size="lg" status="neutral" label="12345" outlined ></dss-badge-button>
            <dss-badge-button size="xl" status="neutral" label="12345" outlined ></dss-badge-button>
        </div>
        <br/>
    <div class="wrapper">
      <dss-badge-button size="sm" status="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="md" status="neutral" label="12345" ></dss-badge-button>
      <dss-badge-button size="lg" status="neutral" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" status="neutral" label="12345"></dss-badge-button>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'badge-button-neutral-style')]
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus} variant="secondary"></dss-button>
                <dss-badge-button 
                    id="manual-focus-demo"
                    state="slight-high"
                    label="Badge Button"
                    size="md"
                ></dss-badge-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-focus-style')]
}`,...C.parameters?.docs?.source}}};const H=["PlaygroundCritic","PlaygroundInfo","Sizes","Disabled","Tooltip","Icon","HideIcon","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral","Focus"],_=Object.freeze(Object.defineProperty({__proto__:null,Action:g,Alert:L,Correct:$,Critic:I,Danger:m,DangerHigh:c,DangerLow:p,Disabled:l,Focus:C,HideIcon:i,Icon:u,Ideal:x,Info:T,InfoAlt:F,Moderate:h,ModerateHigh:z,ModerateLow:w,Neutral:A,PlaygroundCritic:o,PlaygroundInfo:b,Sizes:n,Slight:y,SlightHigh:v,SlightLow:f,Tooltip:r,Undeterminated:S,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{g as A,$ as C,l as D,C as F,i as H,u as I,z as M,A as N,_ as S,r as T,S as U,n as a,c as b,m as c,p as d,h as e,w as f,v as g,y as h,f as i,x as j,I as k,L as l,T as m,F as n};
