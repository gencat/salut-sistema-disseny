import"./lit-element-Dloa6E9d.js";import{x as t}from"./lit-html-D6a8R3xZ.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`,Xe={title:"Components/Badge Button",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined","critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Hide Icon",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",showIcon:!1,label:"Label",icon:"add_box",state:"danger-high",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,action:"dropdown"},render:e=>t`
    ${e.showTooltip?e.showIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${e.state}" 
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
                            state="${e.state}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:e.showIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${e.state}" 
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
                            state="${e.state}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                        </dss-badge-button>
                    `}
    `},o={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-correct-style")]},S={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="undeterminated" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="undeterminated" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-undeterminated-style")]},f={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-info-style")]},L={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-info-alt-style")]},D={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-neutral-style")]};var T,A,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev'
    }
  },
  args: {
    size: 'lg',
    showIcon: false,
    label: 'Label',
    icon: 'add_box',
    state: 'danger-high',
    disabled: false,
    outlined: false,
    hideIcon: false,
    showTooltip: false,
    action: 'dropdown'
  },
  render: (args: any) => {
    return html\`
    \${args.showTooltip ? args.showIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${args.state}" 
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
                            state="\${args.state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}
                            action="\${args.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : args.showIcon ? html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${args.state}" 
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
                            state="\${args.state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var H,_,C;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var P,j,F;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...(F=(j=b.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,O,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,E,U;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(U=(E=n.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var q,J,K;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="sm" state="correct" showIcon icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(K=(J=r.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,G,Q;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var R,V,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(V=g.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var de,oe,be;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:be.source}}};var le,ne,re;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,ge,ue;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ce,me,pe;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ze,he,we;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(we=(he=w.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ve,ye,Se;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var fe,xe,$e;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...($e=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:$e.source}}};var Ie,Le,De;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Te,Ae,Me;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Me=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var He,_e,Ce;x.parameters={...x.parameters,docs:{...(He=x.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Pe,je,Fe;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Fe=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Ne,Oe,ke;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(ke=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};var Be,Ee,Ue;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ue=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ue.source}}};var qe,Je,Ke;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ke=(Je=D.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const Ge=["Playground","Sizes","Disabled","Tooltip","Icon","IconSM","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],We=Object.freeze(Object.defineProperty({__proto__:null,Action:i,Alert:$,Correct:y,Critic:x,Danger:u,DangerHigh:g,DangerLow:c,Disabled:b,Icon:n,IconSM:r,Ideal:f,Info:I,InfoAlt:L,Moderate:p,ModerateHigh:m,ModerateLow:z,Neutral:D,Playground:d,Sizes:o,Slight:w,SlightHigh:h,SlightLow:v,Tooltip:l,Undeterminated:S,__namedExportsOrder:Ge,default:Xe},Symbol.toStringTag,{value:"Module"}));export{i as A,y as C,b as D,n as I,m as M,D as N,d as P,We as S,l as T,S as U,o as a,r as b,g as c,u as d,c as e,p as f,z as g,h,w as i,v as j,f as k,x as l,$ as m,I as n,L as o};
