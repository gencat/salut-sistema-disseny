import{x as e}from"./iframe-DNLJd-HG.js";import{w as g}from"./storybook-decorators-DSS85Rnr.js";const b=`
    .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
        gap: 24px;
  }
  .wrapper + .wrapper {
    margin-top: 24px;
  }
  .wrapper--alignment {
    height: 240px;
  }
`,u={title:"Components/Icon Badge",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},criticStatus:{name:"Estats criticitat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"]},infoStatus:{name:"Estats informació",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},i={name:"Playground - Criticitat",argTypes:{infoStatus:{table:{disable:!0}},outlined:{table:{disable:!0}},numericStatus:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-4074&m=dev"}},args:{size:"xl",showIcon:!1,icon:"person",criticStatus:"danger-high",disabled:!1,outlined:!1,showTooltip:!1,tooltipPosition:"top"},render:s=>e`
    ${s.showTooltip?s.showIcon?e`
              <dss-icon-badge size="${s.size}" status="${s.criticStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" status="${s.criticStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:s.showIcon?e`
              <dss-icon-badge size="${s.size}" status="${s.criticStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" status="${s.criticStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
              </dss-icon-badge>
            `}
    `},d={name:"Playground - Informació",argTypes:{criticStatus:{table:{disable:!0}},numericStatus:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-4074&m=dev"}},args:{size:"xl",showIcon:!1,icon:"person",infoStatus:"ideal",disabled:!1,outlined:!0,showTooltip:!1,tooltipPosition:"top"},render:s=>e`
    ${s.showTooltip?s.showIcon?e`
              <dss-icon-badge size="${s.size}" status="${s.infoStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" status="${s.infoStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:s.showIcon?e`
              <dss-icon-badge size="${s.size}" status="${s.infoStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" status="${s.infoStatus}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
              </dss-icon-badge>
            `}
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="sm" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="md" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="lg" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" status="ideal"></dss-icon-badge>
            </div>
    `,decorators:[g(b,"icon-badge-sizes-style")]},t={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="sm" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="md" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="lg" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="xl" status="ideal" disabled></dss-icon-badge>
            </div>
    `,decorators:[g(b,"icon-badge-disabled-style")]},o={tags:["!dev"],render:()=>e`
      <dss-icon-badge size="xl" status="ideal">
                <dss-tooltip slot="tooltip">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    `},n={tags:["!dev"],render:()=>e`
      <dss-icon-badge size="xl" status="ideal" icon="person">
                <dss-tooltip slot="tooltip">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="xl" status="danger-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="danger"></dss-icon-badge>
                <dss-icon-badge size="xl" status="danger-low"></dss-icon-badge>
            </div>
      <div class="wrapper">
                <dss-icon-badge size="xl" status="moderate-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="moderate"></dss-icon-badge>
                <dss-icon-badge size="xl" status="moderate-low"></dss-icon-badge>
      </div>
      <div class="wrapper">
                <dss-icon-badge size="xl" status="slight-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="slight"></dss-icon-badge>
                <dss-icon-badge size="xl" status="slight-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" status="correct"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" status="undetermined"></dss-icon-badge>
            </div>
    `,decorators:[g(b,"icon-badge-critic-style")]},r={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-icon-badge size="xl" status="ideal" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="critical" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="alert" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="info" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="info-alt" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="neutral" outlined></dss-icon-badge>
            </div> 
      <div class="wrapper">
                <dss-icon-badge size="xl" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" status="critical"></dss-icon-badge>
                <dss-icon-badge size="xl" status="alert"></dss-icon-badge>
                <dss-icon-badge size="xl" status="info"></dss-icon-badge>
                <dss-icon-badge size="xl" status="info-alt"></dss-icon-badge>
                <dss-icon-badge size="xl" status="neutral"></dss-icon-badge>
            </div>
    `,decorators:[g(b,"icon-badge-info-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge status="above-high"></dss-icon-badge>
                <dss-icon-badge status="above"></dss-icon-badge>
                <dss-icon-badge status="above-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge status="below-high"></dss-icon-badge>
                <dss-icon-badge status="below"></dss-icon-badge>
                <dss-icon-badge status="below-low"></dss-icon-badge>
            </div> 
    `,decorators:[g(b,"icon-badge-numeric-results-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    numericStatus: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-4074&m=dev'
    }
  },
  args: {
    size: 'xl',
    showIcon: false,
    icon: 'person',
    criticStatus: 'danger-high',
    disabled: false,
    outlined: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    return html\`
    \${args.showTooltip ? args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" status="\${args.criticStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" status="\${args.criticStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" status="\${args.criticStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" status="\${args.criticStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
              </dss-icon-badge>
            \`}
    \`;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Playground - Informació',
  argTypes: {
    criticStatus: {
      table: {
        disable: true
      }
    },
    numericStatus: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-4074&m=dev'
    }
  },
  args: {
    size: 'xl',
    showIcon: false,
    icon: 'person',
    infoStatus: 'ideal',
    disabled: false,
    outlined: true,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    return html\`
    \${args.showTooltip ? args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" status="\${args.infoStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" status="\${args.infoStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
                <dss-tooltip slot="tooltip">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" status="\${args.infoStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" status="\${args.infoStatus}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
              </dss-icon-badge>
            \`}
    \`;
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="sm" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="md" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="lg" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" status="ideal"></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-sizes-style')]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="sm" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="md" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="lg" status="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="xl" status="ideal" disabled></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-disabled-style')]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-badge size="xl" status="ideal">
                <dss-tooltip slot="tooltip">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    \`;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-badge size="xl" status="ideal" icon="person">
                <dss-tooltip slot="tooltip">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    \`;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="xl" status="danger-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="danger"></dss-icon-badge>
                <dss-icon-badge size="xl" status="danger-low"></dss-icon-badge>
            </div>
      <div class="wrapper">
                <dss-icon-badge size="xl" status="moderate-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="moderate"></dss-icon-badge>
                <dss-icon-badge size="xl" status="moderate-low"></dss-icon-badge>
      </div>
      <div class="wrapper">
                <dss-icon-badge size="xl" status="slight-high"></dss-icon-badge>
                <dss-icon-badge size="xl" status="slight"></dss-icon-badge>
                <dss-icon-badge size="xl" status="slight-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" status="correct"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" status="undetermined"></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-critic-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-badge size="xl" status="ideal" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="critical" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="alert" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="info" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="info-alt" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" status="neutral" outlined></dss-icon-badge>
            </div> 
      <div class="wrapper">
                <dss-icon-badge size="xl" status="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" status="critical"></dss-icon-badge>
                <dss-icon-badge size="xl" status="alert"></dss-icon-badge>
                <dss-icon-badge size="xl" status="info"></dss-icon-badge>
                <dss-icon-badge size="xl" status="info-alt"></dss-icon-badge>
                <dss-icon-badge size="xl" status="neutral"></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-info-style')]
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge status="above-high"></dss-icon-badge>
                <dss-icon-badge status="above"></dss-icon-badge>
                <dss-icon-badge status="above-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge status="below-high"></dss-icon-badge>
                <dss-icon-badge status="below"></dss-icon-badge>
                <dss-icon-badge status="below-low"></dss-icon-badge>
            </div> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-numeric-results-style')]
}`,...c.parameters?.docs?.source}}};const p=["PlaygroundCritic","PlaygroundInfo","Sizes","Disabled","Tooltip","Icon","Critic","Info","NumericResults"],w=Object.freeze(Object.defineProperty({__proto__:null,Critic:l,Disabled:t,Icon:n,Info:r,NumericResults:c,PlaygroundCritic:i,PlaygroundInfo:d,Sizes:a,Tooltip:o,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{l as C,t as D,n as I,c as N,w as S,o as T,a,r as b};
