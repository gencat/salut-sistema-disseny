import"./lit-element-Dloa6E9d.js";import{x as t}from"./lit-html-D6a8R3xZ.js";import"./badge-button-CKsaXRMc.js";const Ne={title:"Components/Badge Button",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},label:{name:"Label",control:{type:"text"}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined","critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Hide Icon",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=7140-2092&m=dev"}},args:{size:"lg",showIcon:!1,label:"Label",icon:"add_box",state:"danger-high",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1},render:e=>t`
    ${e.showTooltip?e.showIcon?t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${e.state}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined}
                            ?hideIcon=${e.hideIcon} 
                            icon="${e.icon}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${e.state}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}>
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
                            icon="${e.icon}">
                        </dss-badge-button>
                    `:t`
                        <dss-badge-button 
                            label="${e.label}" 
                            size="${e.size}" 
                            state="${e.state}" 
                            ?disabled=${e.disabled} 
                            ?outlined=${e.outlined} 
                            ?hideIcon=${e.hideIcon}>
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
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger-high" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger-high" label="12345"></dss-badge-button>
      </div>
    `},l={tags:["!dev"],render:()=>t`
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger" label="12345"></dss-badge-button>
      </div>
    `},r={tags:["!dev"],render:()=>t`
      <div class="wrapper">
      <dss-badge-button size="sm" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="md" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="lg" state="danger-low" label="12345"></dss-badge-button>
      <dss-badge-button size="xl" state="danger-low" label="12345"></dss-badge-button>
      </div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-badge-button size="sm" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="md" state="moderate-high" label="12345" ></dss-badge-button>
        <dss-badge-button size="lg" state="moderate-high" label="12345"></dss-badge-button>
        <dss-badge-button size="xl" state="moderate-high" label="12345"></dss-badge-button>
      </div>
    `},g={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="moderate" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="moderate" label="12345"></dss-badge-button>
  </div>  
    `},u={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="moderate-low" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="moderate-low" label="12345"></dss-badge-button>
  </div>
    `},c={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight-high" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight-high" label="12345"></dss-badge-button>
  </div>
    `},m={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight" label="12345"></dss-badge-button>
  </div>
    `},p={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="slight-low" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="slight-low" label="12345"></dss-badge-button>
  </div>
    `},z={tags:["!dev"],render:()=>t`
      <div class="wrapper">
    <dss-badge-button size="sm" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="correct" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="correct" label="12345"></dss-badge-button>
  </div>
    `},h={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <dss-badge-button size="sm" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="md" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="lg" state="undeterminated" label="12345"></dss-badge-button>
    <dss-badge-button size="xl" state="undeterminated" label="12345"></dss-badge-button>
  </div>
    `},v={tags:["!dev"],render:()=>t`
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
    `},w={tags:["!dev"],render:()=>t`
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
    `},x={tags:["!dev"],render:()=>t`
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
    `},$={tags:["!dev"],render:()=>t`
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
    `},S={tags:["!dev"],render:()=>t`
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
    `};var I,y,L;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    showTooltip: false
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
                            icon="\${args.icon}">
                            <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${args.state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}>
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
                            icon="\${args.icon}">
                        </dss-badge-button>
                    \` : html\`
                        <dss-badge-button 
                            label="\${args.label}" 
                            size="\${args.size}" 
                            state="\${args.state}" 
                            ?disabled=\${args.disabled} 
                            ?outlined=\${args.outlined} 
                            ?hideIcon=\${args.hideIcon}>
                        </dss-badge-button>
                    \`}
    \`;
  }
}`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var D,T,H;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(T=a.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,_,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345" disabled></dss-badge-button>
    \`;
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,P,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-badge-button size="lg" state="ideal" label="12345">
                <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
            </dss-badge-button>
    \`;
  }
}`,...(F=(P=n.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var N,O,j;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge-button size="lg" state="correct" icon="home" label="12345">
        <dss-tooltip slot="tooltip">Lorem ipsum</dss-tooltip>
      </dss-badge-button>
    \`;
  }
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var k,B,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var U,q,J;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,X,G;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(X=r.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var Q,R,V;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,Y,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=u.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,de,ne;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var be,oe,le;m.parameters={...m.parameters,docs:{...(be=m.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(le=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var re,ie,ge;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ge=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var ue,ce,me;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ze,he;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ze=h.parameters)==null?void 0:ze.docs)==null?void 0:he.source}}};var ve,we,fe;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(we=v.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var xe,$e,Se;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Se.source}}};var Ie,ye,Le;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Le=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var De,Te,He;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var Me,_e,Ae;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ae=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ce,Pe,Fe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Fe=(Pe=S.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};const Oe=["Playground","Sizes","Disabled","Tooltip","Icon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Alert:f,Correct:z,Critic:w,Danger:l,DangerHigh:o,DangerLow:r,Disabled:d,Icon:b,Ideal:v,Info:x,InfoAlt:$,Moderate:g,ModerateHigh:i,ModerateLow:u,Neutral:S,Playground:s,Sizes:a,Slight:m,SlightHigh:c,SlightLow:p,Tooltip:n,Undeterminated:h,__namedExportsOrder:Oe,default:Ne},Symbol.toStringTag,{value:"Module"}));export{f as A,z as C,d as D,b as I,i as M,S as N,s as P,Ee as S,n as T,h as U,a,o as b,l as c,r as d,g as e,u as f,c as g,m as h,p as i,v as j,w as k,x as l,$ as m};
