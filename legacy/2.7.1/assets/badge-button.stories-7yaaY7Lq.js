import"./lit-element-Dloa6E9d.js";import{x as t}from"./lit-html-D6a8R3xZ.js";import"./badge-button-Ba5Y43fn.js";const Je={title:"Components/Badge Button",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined","critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Hide Icon",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},action:{name:"Acció",control:{type:"radio"},options:["dropdown","details","external"]}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",showIcon:!1,label:"Label",icon:"add_box",state:"danger-high",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,action:"dropdown"},render:e=>t`
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
    `},a={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="lg" state="ideal" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="ideal" label="12345"></dss-badge-button>
      </div>
    `},d={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    `},n={tags:["!dev"],render:()=>t`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    `},b={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    `},o={tags:["!dev"],render:()=>t`
      <dss-badge-button size="sm" state="correct" showIcon icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    `},l={tags:["!dev"],render:()=>t`
      <dss-badge-button size="lg" state="alert" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="alert" label="12345" action="details"></dss-badge-button>
      <dss-badge-button size="lg" state="alert" label="12345" action="external"></dss-badge-button>
    `},r={tags:["!dev"],render:()=>t`
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger-high" label="12345"></dss-badge-button>
      </div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger" label="12345"></dss-badge-button>
      </div>
    `},g={tags:["!dev"],render:()=>t`
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger-low" label="12345"></dss-badge-button>
      </div>
    `},u={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="moderate-high" label="12345"></dss-badge-button>
      </div>
    `},c={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="moderate" label="12345"></dss-badge-button>
  </div>  
    `},m={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="moderate-low" label="12345"></dss-badge-button>
  </div>
    `},p={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight-high" label="12345"></dss-badge-button>
  </div>
    `},z={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight" label="12345"></dss-badge-button>
  </div>
    `},h={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight-low" label="12345"></dss-badge-button>
  </div>
    `},v={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="correct" label="12345"></dss-badge-button>
  </div>
    `},w={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="undeterminated" label="12345"></dss-badge-button>
  </div>
    `},$={tags:["!dev"],render:()=>t`
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
    `},x={tags:["!dev"],render:()=>t`
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
    `},f={tags:["!dev"],render:()=>t`
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
    `},S={tags:["!dev"],render:()=>t`
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
    `},I={tags:["!dev"],render:()=>t`
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
    `},y={tags:["!dev"],render:()=>t`
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
    `};var L,D,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var A,M,H;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }
}`,...(H=(M=a.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,C,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var F,N,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,k,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(B=(k=b.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var E,U,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="sm" state="correct" showIcon icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(q=(U=o.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="alert" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="alert" label="12345" action="details"></dss-badge-button>
      <dss-badge-button size="lg" state="alert" label="12345" action="external"></dss-badge-button>
    \`;
  }
}`,...(X=(K=l.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,Q,R;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
  }
}`,...(R=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,W,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  }
}`,...(Y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,de;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
  }
}`,...(de=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ne,be,oe;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
  }
}`,...(oe=(be=c.parameters)==null?void 0:be.docs)==null?void 0:oe.source}}};var le,re,ie;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
  }
}`,...(ie=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ge,ue,ce;p.parameters={...p.parameters,docs:{...(ge=p.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
  }
}`,...(ce=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,pe,ze;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  }
}`,...(ze=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ze.source}}};var he,ve,we;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
  }
}`,...(we=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var $e,xe,fe;v.parameters={...v.parameters,docs:{...($e=v.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
  }
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Ie,ye;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
  }
}`,...(ye=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Le,De,Te;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
  }
}`,...(Te=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Ae,Me,He;x.parameters={...x.parameters,docs:{...(Ae=x.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
  }
}`,...(He=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var _e,Ce,Pe;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
  }
}`,...(Pe=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Fe,Ne,Oe;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
  }
}`,...(Oe=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var je,ke,Be;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
  }
}`,...(Be=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Ee,Ue,qe;y.parameters={...y.parameters,docs:{...(Ee=y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
  }
}`,...(qe=(Ue=y.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};const Ke=["Playground","Sizes","Disabled","Tooltip","Icon","IconSM","Action","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Re=Object.freeze(Object.defineProperty({__proto__:null,Action:l,Alert:f,Correct:v,Critic:x,Danger:i,DangerHigh:r,DangerLow:g,Disabled:d,Icon:b,IconSM:o,Ideal:$,Info:S,InfoAlt:I,Moderate:c,ModerateHigh:u,ModerateLow:m,Neutral:y,Playground:s,Sizes:a,Slight:z,SlightHigh:p,SlightLow:h,Tooltip:n,Undeterminated:w,__namedExportsOrder:Ke,default:Je},Symbol.toStringTag,{value:"Module"}));export{l as A,v as C,d as D,b as I,u as M,y as N,s as P,Re as S,n as T,w as U,a,o as b,r as c,i as d,g as e,c as f,m as g,p as h,z as i,h as j,$ as k,x as l,f as m,S as n,I as o};
