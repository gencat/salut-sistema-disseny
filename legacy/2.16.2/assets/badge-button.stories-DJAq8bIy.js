import"./lit-element-BL4lq474.js";import{x as t}from"./lit-html-D6cejpwM.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`,We={title:"Components/Badge Button",argTypes:{size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]},modifyIcon:{name:" Modificar icon",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"modifyIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},type:{name:"Tipus",control:{type:"radio"},options:["Criticitat","Informació"]},stateCritic:{name:"Estat",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined"],if:{arg:"type",eq:"Criticitat"}},stateInfo:{name:"Estat",control:{type:"select"},options:["critical","alert","ideal","info","info-alt","neutral"],if:{arg:"type",eq:"Informació"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Amaga icona",control:{type:"boolean"},if:{arg:"type",eq:"Informació"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",modifyIcon:!1,label:"Label",icon:"add_box",type:"Criticitat",stateCritic:"danger-high",stateInfo:"critical",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,action:"dropdown"},render:e=>{const d=e.type==="Criticitat"?e.stateCritic:e.stateInfo;return t`
    ${e.showTooltip?e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}"
                            size="${e.size}" 
                            state="${d}" 
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
                            state="${d}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:e.modifyIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${d}" 
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
                            state="${d}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}
                            action="${e.action}">
                        </dss-badge-button>
                    `}
    `}},b={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-sizes-style")]},l={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    `},n={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    `},r={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    `},i={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="ideal" label="12345" hideIcon></dss-badge-button>
    `},g={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="lg" state="alert" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="details"></dss-badge-button>
                <dss-badge-button size="lg" state="alert" label="12345" action="external"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-action-style")]},u={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-high" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-high-style")]},c={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-style")]},m={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="danger-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="danger-low" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-danger-low-style")]},p={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="moderate-high" label="12345"></dss-badge-button>
      </div>
    `,decorators:[s(a,"badge-button-moderate-high-style")]},z={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate" label="12345"></dss-badge-button>
        </div>  
    `,decorators:[s(a,"badge-button-moderate-style")]},h={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="moderate-low" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="moderate-low" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-moderate-low-style")]},w={tags:["!dev"],render:()=>t`
    <div class="wrapper">
            <dss-badge-button size="sm" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="md" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="lg" state="slight-high" label="12345"></dss-badge-button>
            <dss-badge-button size="xl" state="slight-high" label="12345"></dss-badge-button>
        </div>
    `,decorators:[s(a,"badge-button-slight-high-style")]},v={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight" label="12345"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-slight-style")]},y={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-badge-button size="sm" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="md" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="lg" state="slight-low" label="12345"></dss-badge-button>
                <dss-badge-button size="xl" state="slight-low" label="12345"></dss-badge-button>
            </div>
    `,decorators:[s(a,"badge-button-slight-low-style")]},f={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-undeterminated-style")]},$={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-critic-style")]},I={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-alert-style")]},C={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-info-alt-style")]},T={tags:["!dev"],render:()=>t`
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
    `,decorators:[s(a,"badge-button-neutral-style")]},F={tags:["!dev"],render:()=>t`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const d=document.querySelector("#manual-focus-demo");d&&d.focus()}} variant="secondary"></dss-button>
                <dss-badge-button 
                    id="manual-focus-demo"
                    state="slight-high"
                    label="Badge Button"
                    size="md"
                ></dss-badge-button>
            </div>
        `,decorators:[s(a,"button-focus-style")]};var A,D,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                            action="\${args.action}">
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...(H=(D=o.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var M,_,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,E,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var k,j,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,U,J;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(J=(U=r.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,X,G;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="ideal" label="12345" hideIcon></dss-badge-button>
    \`;
  }
}`,...(G=(X=i.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var Q,R,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,Y,Z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=c.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,de,oe;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var be,le,ne;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ne=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,ie,ge;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ge=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var ue,ce,me;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ze,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:he.source}}};var we,ve,ye;v.parameters={...v.parameters,docs:{...(we=v.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,Se,$e;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...($e=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};var xe,Ie,Ce;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Le,Te,Fe;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Fe=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var Ae,De,He;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(He=(De=$.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Me,_e,qe;x.parameters={...x.parameters,docs:{...(Me=x.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(qe=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Be,Ee,Pe;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Pe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var ke,je,Ne;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(je=C.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Oe,Ue,Je;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Je=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ke,Xe,Ge;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ge=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};var Qe,Re,Ve;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ve=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};const Ye=["Playground","Sizes","Disabled","Tooltip","Icon","HideIcon","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral","Focus"],st=Object.freeze(Object.defineProperty({__proto__:null,Action:g,Alert:I,Correct:f,Critic:x,Danger:c,DangerHigh:u,DangerLow:m,Disabled:l,Focus:F,HideIcon:i,Icon:r,Ideal:$,Info:C,InfoAlt:L,Moderate:z,ModerateHigh:p,ModerateLow:h,Neutral:T,Playground:o,Sizes:b,Slight:v,SlightHigh:w,SlightLow:y,Tooltip:n,Undeterminated:S,__namedExportsOrder:Ye,default:We},Symbol.toStringTag,{value:"Module"}));export{g as A,f as C,l as D,F,i as H,r as I,p as M,T as N,o as P,st as S,n as T,S as U,b as a,u as b,c,m as d,z as e,h as f,w as g,v as h,y as i,$ as j,x as k,I as l,C as m,L as n};
