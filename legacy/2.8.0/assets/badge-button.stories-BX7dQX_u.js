import"./lit-element-Dloa6E9d.js";import{x as t}from"./lit-html-D6a8R3xZ.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`,Ge={title:"Components/Badge Button",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:" Modificar icon",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"size",neq:"sm"}},showIcon:{name:"Mostra Icona (Per mida sm)",control:{type:"boolean"},if:{arg:"size",eq:"sm"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",modifyIcon:!1,label:"Label",icon:"add_box",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showIcon:!1,showTooltip:!1,action:"dropdown"},render:e=>{const M=e.type==="Criticitat"?e.stateCritic:e.stateInfo;return t`
    ${e.showTooltip?e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}"
                            size="${e.size}" 
                            state="${M}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined}
                            ?hideIcon=${e.hideIcon} 
                            ?showIcon=${e.showIcon} 
                            icon="${e.icon}"
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${M}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            ?showIcon=${e.showIcon} 
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${M}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon} 
                            ?showIcon=${e.showIcon} 
                            icon="${e.icon}"
                            action="${e.action}">
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${M}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            ?showIcon=${e.showIcon} 
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
      <dss-badge-button size="sm" state="correct" showIcon icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
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
    `,decorators:[s(a,"badge-button-ideal-style")]},I={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-alert-style")]},x={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-neutral-style")]};var T,A,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    showIcon: false,
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
                            ?showIcon=\${args.showIcon} 
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
                            ?showIcon=\${args.showIcon} 
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
                            ?showIcon=\${args.showIcon} 
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
                            ?showIcon=\${args.showIcon} 
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,H,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(H=o.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var q,E,j;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...(j=(E=b.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var F,N,O;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var k,B,U;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(U=(B=n.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var J,K,X;r.parameters={...r.parameters,docs:{...(J=r.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="sm" state="correct" showIcon icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(X=(K=r.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,Q,R;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,W,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,te;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,de;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var oe,be,le;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(be=m.parameters)==null?void 0:be.docs)==null?void 0:le.source}}};var ne,re,ie;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ge,ue,ce;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ce=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,pe,ze;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ze=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ze.source}}};var he,we,ve;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(we=w.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var ye,fe,Se;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Se=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ie,$e,xe;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(xe=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:xe.source}}};var Ce,Le,Me;f.parameters={...f.parameters,docs:{...(Ce=f.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Me=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Te,Ae,De;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var _e,He,Pe;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Pe=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var qe,Ee,je;$.parameters={...$.parameters,docs:{...(qe=$.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(je=(Ee=$.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Fe,Ne,Oe;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var ke,Be,Ue;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var Je,Ke,Xe;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};const Qe=["Playground","Sizes","Disabled","Tooltip","Icon","IconSM","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Action:i,Alert:$,Correct:y,Critic:I,Danger:u,DangerHigh:g,DangerLow:c,Disabled:b,Icon:n,IconSM:r,Ideal:S,Info:x,InfoAlt:C,Moderate:p,ModerateHigh:m,ModerateLow:z,Neutral:L,Playground:d,Sizes:o,Slight:w,SlightHigh:h,SlightLow:v,Tooltip:l,Undeterminated:f,__namedExportsOrder:Qe,default:Ge},Symbol.toStringTag,{value:"Module"}));export{i as A,y as C,b as D,n as I,m as M,L as N,d as P,Ye as S,l as T,f as U,o as a,r as b,g as c,u as d,c as e,p as f,z as g,h,w as i,v as j,S as k,I as l,$ as m,x as n,C as o};
