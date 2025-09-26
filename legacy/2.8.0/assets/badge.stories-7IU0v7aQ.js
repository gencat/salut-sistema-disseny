import"./lit-element-Dloa6E9d.js";import{x as s}from"./lit-html-D6a8R3xZ.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,Je={title:"Components/Badge",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:"Modificar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"size",neq:"sm"}},showIcon:{name:"Mostra Icona (Per mida sm)",control:{type:"boolean"},if:{arg:"size",eq:"sm"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",modifyIcon:!1,text:"12345",icon:"person",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showIcon:!1,showTooltip:!1,tooltipPosition:"top"},render:e=>{const P=e.type==="Criticitat"?e.stateCritic:e.stateInfo;return s`
    ${e.showTooltip?e.modifyIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} ?showIcon=${e.showIcon} icon="${e.icon}">
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?showIcon=${e.showIcon} ?hideIcon=${e.hideIcon}>
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e.modifyIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} ?showIcon=${e.showIcon} icon="${e.icon}">
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${P}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} ?showIcon=${e.showIcon}>
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
      <dss-badge size="sm" state="correct" icon="home" text="12345" showIcon>
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
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
    `,decorators:[t(d,"badge-danger-low-style")]},p={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-high" text="12345" ></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-moderate-high-style")]},m={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-neutral-style")]};var T,M,D;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    showIcon: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    const state = args.type === 'Criticitat' ? args.stateCritic : args.stateInfo;
    return html\`
    \${args.showTooltip ? args.modifyIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} ?showIcon=\${args.showIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?showIcon=\${args.showIcon} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.modifyIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} ?showIcon=\${args.showIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} ?showIcon=\${args.showIcon}>
              </dss-badge>
            \`}
    \`;
  }
}`,...(D=(M=a.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,H,_;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(H=r.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var q,L,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    \`;
  }
}`,...(E=(L=i.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var j,F,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,k,U;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(k=g.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var J,K,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="sm" state="correct" icon="home" text="12345" showIcon>
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    \`;
  }
}`,...(X=(K=l.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var B,G,Q;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Q=(G=n.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var R,V,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,de;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(te=p.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ae,re,ie;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ge,le;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var ne,be,ce;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ce.source}}};var pe,me,ue;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,ze,he;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(ze=h.parameters)==null?void 0:ze.docs)==null?void 0:he.source}}};var we,ve,ye;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,Se,Ie;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var $e,Ce,Pe;y.parameters={...y.parameters,docs:{...($e=y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Pe=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Te,Me,De;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Ae,He,_e;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(_e=(He=S.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var qe,Le,Ee;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ee=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var je,Fe,Ne;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ne=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Oe,ke,Ue;C.parameters={...C.parameters,docs:{...(Oe=C.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ue=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};const Ke=["Playground","Sizes","Disabled","Tooltip","Icon","IconSM","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Alert:S,Correct:w,Critic:f,Danger:b,DangerHigh:n,DangerLow:c,Disabled:i,Icon:g,IconSM:l,Ideal:y,Info:I,InfoAlt:$,Moderate:m,ModerateHigh:p,ModerateLow:u,Neutral:C,Playground:a,Sizes:r,Slight:z,SlightHigh:x,SlightLow:h,Tooltip:o,Undeterminated:v,__namedExportsOrder:Ke,default:Je},Symbol.toStringTag,{value:"Module"}));export{S as A,w as C,i as D,g as I,p as M,C as N,a as P,Qe as S,o as T,v as U,r as a,l as b,n as c,b as d,c as e,m as f,u as g,x as h,z as i,h as j,y as k,f as l,I as m,$ as n};
