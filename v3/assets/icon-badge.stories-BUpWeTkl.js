import{x as e}from"./iframe-DLVb3rJw.js";import{w as c}from"./storybook-decorators-DSS85Rnr.js";const g=`
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
`,b={title:"Components/Icon Badge",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined","critical","alert","ideal","info","info-alt","neutral","above-high","above","above-low","below-high","below","below-low"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-4074&m=dev"}},args:{size:"xl",showIcon:!1,icon:"person",state:"danger-high",disabled:!1,outlined:!1,showTooltip:!1,tooltipPosition:"top"},render:s=>e`
    ${s.showTooltip?s.showIcon?e`
              <dss-icon-badge size="${s.size}" state="${s.state}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" state="${s.state}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
                <dss-tooltip slot="tooltip" position="${s.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:s.showIcon?e`
              <dss-icon-badge size="${s.size}" state="${s.state}" ?disabled=${s.disabled} ?outlined=${s.outlined} icon="${s.icon}">
              </dss-icon-badge>
            `:e`
              <dss-icon-badge size="${s.size}" state="${s.state}" ?disabled=${s.disabled} ?outlined=${s.outlined}>
              </dss-icon-badge>
            `}
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="sm" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="md" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="lg" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
            </div>
    `,decorators:[c(g,"icon-badge-sizes-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="sm" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="md" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="lg" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="xl" state="ideal" disabled></dss-icon-badge>
            </div>
    `,decorators:[c(g,"icon-badge-disabled-style")]},o={tags:["!dev"],render:()=>e`
      <dss-icon-badge size="xl" state="ideal">
                <dss-tooltip slot="tooltip" position="right">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    `},t={tags:["!dev"],render:()=>e`
      <dss-icon-badge size="xl" state="ideal" icon="person">
                <dss-tooltip slot="tooltip" position="right">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    `},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="xl" state="danger-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="danger"></dss-icon-badge>
                <dss-icon-badge size="xl" state="danger-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="correct"></dss-icon-badge>
                <dss-icon-badge size="xl" state="undetermined"></dss-icon-badge>
            </div>
    `,decorators:[c(g,"icon-badge-critic-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" state="critical"></dss-icon-badge>
                <dss-icon-badge size="xl" state="alert"></dss-icon-badge>
                <dss-icon-badge size="xl" state="info"></dss-icon-badge>
                <dss-icon-badge size="xl" state="info-alt"></dss-icon-badge>
                <dss-icon-badge size="xl" state="neutral"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" state="ideal" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="critical" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="alert" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="info" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="info-alt" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="neutral" outlined></dss-icon-badge>
            </div> 
    `,decorators:[c(g,"icon-badge-info-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-icon-badge state="above-high"></dss-icon-badge>
                <dss-icon-badge state="above"></dss-icon-badge>
                <dss-icon-badge state="above-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge state="below-high"></dss-icon-badge>
                <dss-icon-badge state="below"></dss-icon-badge>
                <dss-icon-badge state="below-low"></dss-icon-badge>
            </div> 
    `,decorators:[c(g,"icon-badge-numeric-results-style")]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    state: 'danger-high',
    disabled: false,
    outlined: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    return html\`
    \${args.showTooltip ? args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : args.showIcon ? html\`
              <dss-icon-badge size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} icon="\${args.icon}">
              </dss-icon-badge>
            \` : html\`
              <dss-icon-badge size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined}>
              </dss-icon-badge>
            \`}
    \`;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="sm" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="md" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="lg" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-sizes-style')]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="sm" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="md" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="lg" state="ideal" disabled></dss-icon-badge>
                <dss-icon-badge size="xl" state="ideal" disabled></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-disabled-style')]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-badge size="xl" state="ideal">
                <dss-tooltip slot="tooltip" position="right">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    \`;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-badge size="xl" state="ideal" icon="person">
                <dss-tooltip slot="tooltip" position="right">
                    <span>Indicar info</span>
                </dss-tooltip>
            </dss-icon-badge>
    \`;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="xl" state="danger-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="danger"></dss-icon-badge>
                <dss-icon-badge size="xl" state="danger-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate"></dss-icon-badge>
                <dss-icon-badge size="xl" state="moderate-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight-high"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight"></dss-icon-badge>
                <dss-icon-badge size="xl" state="slight-low"></dss-icon-badge>
                <dss-icon-badge size="xl" state="correct"></dss-icon-badge>
                <dss-icon-badge size="xl" state="undetermined"></dss-icon-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-critic-style')]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
                <dss-icon-badge size="xl" state="critical"></dss-icon-badge>
                <dss-icon-badge size="xl" state="alert"></dss-icon-badge>
                <dss-icon-badge size="xl" state="info"></dss-icon-badge>
                <dss-icon-badge size="xl" state="info-alt"></dss-icon-badge>
                <dss-icon-badge size="xl" state="neutral"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge size="xl" state="ideal" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="critical" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="alert" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="info" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="info-alt" outlined></dss-icon-badge>
                <dss-icon-badge size="xl" state="neutral" outlined></dss-icon-badge>
            </div> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-info-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-badge state="above-high"></dss-icon-badge>
                <dss-icon-badge state="above"></dss-icon-badge>
                <dss-icon-badge state="above-low"></dss-icon-badge>
            </div>
            <div class="wrapper">
                <dss-icon-badge state="below-high"></dss-icon-badge>
                <dss-icon-badge state="below"></dss-icon-badge>
                <dss-icon-badge state="below-low"></dss-icon-badge>
            </div> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-badge-numeric-results-style')]
}`,...r.parameters?.docs?.source}}};const p=["Playground","Sizes","Disabled","Tooltip","Icon","Critic","Info","NumericResults"],z=Object.freeze(Object.defineProperty({__proto__:null,Critic:n,Disabled:a,Icon:t,Info:l,NumericResults:r,Playground:d,Sizes:i,Tooltip:o,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{n as C,a as D,t as I,r as N,d as P,z as S,o as T,i as a,l as b};
