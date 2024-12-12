import{x as e}from"./lit-html-B2eaWknC.js";const D={title:"Components/Icon Badge",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},d={args:{size:"xl",showIcon:!1,icon:"person",state:"danger-high",disabled:!1,outlined:!1,showTooltip:!1,tooltipPosition:"top"},render:s=>e`
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
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
  <dss-icon-badge size="sm" state="ideal" disabled></dss-icon-badge>
  <dss-icon-badge size="md" state="ideal" disabled></dss-icon-badge>
  <dss-icon-badge size="lg" state="ideal" disabled></dss-icon-badge>
  <dss-icon-badge size="xl" state="ideal" disabled></dss-icon-badge>
</div>
    `},a={tags:["!dev"],render:()=>e`
        <dss-icon-badge size="xl" state="ideal">
    <dss-tooltip slot="tooltip" position="right">
      <span>Indicar info</span>
    </dss-tooltip>
  </dss-icon-badge>
    `},n={tags:["!dev"],render:()=>e`
        <dss-icon-badge size="xl" state="ideal" icon="person">
    <dss-tooltip slot="tooltip" position="right">
      <span>Indicar info</span>
    </dss-tooltip>
  </dss-icon-badge>
    `},t={tags:["!dev"],render:()=>e`
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
  <dss-icon-badge size="xl" state="undeterminated"></dss-icon-badge>
</div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
  <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
  <dss-icon-badge size="xl" state="critic"></dss-icon-badge>
  <dss-icon-badge size="xl" state="alert"></dss-icon-badge>
  <dss-icon-badge size="xl" state="info"></dss-icon-badge>
  <dss-icon-badge size="xl" state="info-alt"></dss-icon-badge>
  <dss-icon-badge size="xl" state="neutral"></dss-icon-badge>
</div>
<div class="wrapper">
  <dss-icon-badge size="xl" state="ideal" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="critic" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="alert" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="info" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="info-alt" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="neutral" outlined></dss-icon-badge>
</div> 
    `};var c,r,g;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(r=d.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};var b,p,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  }
}`,...(z=(p=i.parameters)==null?void 0:p.docs)==null?void 0:z.source}}};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,$,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=($=a.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,w,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var y,S,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  <dss-icon-badge size="xl" state="undeterminated"></dss-icon-badge>
</div>
    \`;
  }
}`,...(P=(S=t.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,_,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
  <dss-icon-badge size="xl" state="ideal"></dss-icon-badge>
  <dss-icon-badge size="xl" state="critic"></dss-icon-badge>
  <dss-icon-badge size="xl" state="alert"></dss-icon-badge>
  <dss-icon-badge size="xl" state="info"></dss-icon-badge>
  <dss-icon-badge size="xl" state="info-alt"></dss-icon-badge>
  <dss-icon-badge size="xl" state="neutral"></dss-icon-badge>
</div>
<div class="wrapper">
  <dss-icon-badge size="xl" state="ideal" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="critic" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="alert" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="info" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="info-alt" outlined></dss-icon-badge>
  <dss-icon-badge size="xl" state="neutral" outlined></dss-icon-badge>
</div> 
    \`;
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const O=["Playground","Sizes","Disabled","Tooltip","Icon","Critic","Info"],B=Object.freeze(Object.defineProperty({__proto__:null,Critic:t,Disabled:o,Icon:n,Info:l,Playground:d,Sizes:i,Tooltip:a,__namedExportsOrder:O,default:D},Symbol.toStringTag,{value:"Module"}));export{t as C,o as D,n as I,d as P,B as S,a as T,i as a,l as b};
