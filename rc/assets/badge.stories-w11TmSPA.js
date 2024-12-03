import"./lit-element-vV9fql9z.js";import{x as s}from"./lit-html-paDGiEfB.js";import"./badge-yWdXoMyt.js";const Oe={title:"Components/Badge",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Hide Icon",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},t={args:{size:"lg",showIcon:!1,text:"12345",icon:"person",state:"danger-high",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,tooltipPosition:"top"},render:e=>s`
    ${e.showTooltip?e.showIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon}>
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            `:e.showIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
              </dss-icon-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon}>
              </dss-icon-badge>
            `}
    `},d={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345"></dss-badge>
        <dss-badge size="md" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="xl" state="ideal" text="12345"></dss-badge>
      </div>
    `},a={tags:["!dev"],render:()=>s`
       <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    `},i={tags:["!dev"],render:()=>s`
        <dss-badge size="lg" state="ideal" text="12345">
          <dss-tooltip slot="tooltip" position="right">
            <span>Indicar info</span>
          </dss-tooltip>
        </dss-badge>
    `},n={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="correct" icon="home" text="12345">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
      </dss-badge>
          `},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
      <dss-badge size="sm" state="danger-high" text="12345"></dss-badge>
      <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger-high" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger-high" text="12345" dot></dss-badge>
      </div>
    `},g={tags:["!dev"],render:()=>s`
      <div class="wrapper">
      <dss-badge size="sm" state="danger" text="12345"></dss-badge>
      <dss-badge size="md" state="danger" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger" text="12345" dot></dss-badge>
      </div>
    `},o={tags:["!dev"],render:()=>s`
      <div class="wrapper">
      <dss-badge size="sm" state="danger-low" text="12345"></dss-badge>
      <dss-badge size="md" state="danger-low" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger-low" text="12345"></dss-badge>
      <dss-badge size="lg" state="danger-low" text="12345" dot></dss-badge>
      </div>
    `},l={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-high" text="12345" ></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345" dot></dss-badge>
      </div>
    `},b={tags:["!dev"],render:()=>s`
    <div class="wrapper">
    <dss-badge size="sm" state="moderate" text="12345"></dss-badge>
    <dss-badge size="md" state="moderate" text="12345"></dss-badge>
    <dss-badge size="lg" state="moderate" text="12345"></dss-badge>
    <dss-badge size="lg" state="moderate" text="12345" dot></dss-badge>
  </div>  
    `},c={tags:["!dev"],render:()=>s`
    <div class="wrapper">
    <dss-badge size="sm" state="moderate-low" text="12345"></dss-badge>
    <dss-badge size="md" state="moderate-low" text="12345"></dss-badge>
    <dss-badge size="lg" state="moderate-low" text="12345"></dss-badge>
    <dss-badge size="lg" state="moderate-low" text="12345" dot></dss-badge>
  </div>
    `},m={tags:["!dev"],render:()=>s`
    <div class="wrapper">
    <dss-badge size="sm" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="md" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-high" text="12345" dot></dss-badge>
  </div>
    `},p={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-badge size="sm" state="slight" text="12345"></dss-badge>
    <dss-badge size="md" state="slight" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight" text="12345" dot></dss-badge>
  </div>
    `},x={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-badge size="sm" state="slight-low" text="12345"></dss-badge>
    <dss-badge size="md" state="slight-low" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-low" text="12345"></dss-badge>
    <dss-badge size="lg" state="slight-low" text="12345" dot></dss-badge>
  </div>
    `},z={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-badge size="sm" state="correct" text="12345"></dss-badge>
    <dss-badge size="md" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345" dot></dss-badge>
  </div>
    `},u={tags:["!dev"],render:()=>s`
    <div class="wrapper">
    <dss-badge size="sm" state="undeterminated" text="12345"></dss-badge>
    <dss-badge size="md" state="undeterminated" text="12345"></dss-badge>
    <dss-badge size="lg" state="undeterminated" text="12345"></dss-badge>
    <dss-badge size="lg" state="undeterminated" text="12345" dot></dss-badge>
  </div>
    `},h={tags:["!dev"],render:()=>s`
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
    `},v={tags:["!dev"],render:()=>s`
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
    `},w={tags:["!dev"],render:()=>s`
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
    `},f={tags:["!dev"],render:()=>s`
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
    `},$={tags:["!dev"],render:()=>s`
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
    `},I={tags:["!dev"],render:()=>s`
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
    `};var S,y,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    showIcon: false,
    text: '12345',
    icon: 'person',
    state: 'danger-high',
    disabled: false,
    outlined: false,
    hideIcon: false,
    showTooltip: false,
    tooltipPosition: 'top'
  },
  render: (args: any) => {
    return html\`
    \${args.showTooltip ? args.showIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-icon-badge>
            \` : args.showIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-icon-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
              </dss-icon-badge>
            \`}
    \`;
  }
}`,...(P=(y=t.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var T,D,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var H,_,A;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    \`;
  }
}`,...(A=(_=a.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,L,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,j,U;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(j=n.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var k,B,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  }
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var q,F,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  }
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  }
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,V,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
  }
}`,...(te=(se=c.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var de,ae,ie;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  }
}`,...(ie=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,re,ge;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
  }
}`,...(ge=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ge.source}}};var oe,le,be;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
  }
}`,...(be=(le=x.parameters)==null?void 0:le.docs)==null?void 0:be.source}}};var ce,me,pe;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
  }
}`,...(pe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var xe,ze,ue;u.parameters={...u.parameters,docs:{...(xe=u.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  }
}`,...(ue=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:ue.source}}};var he,ve,we;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
  }
}`,...(we=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var fe,$e,Ie;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
  }
}`,...(Ie=($e=v.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source}}};var Se,ye,Pe;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
  }
}`,...(Pe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}};var Te,De,Me;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
  }
}`,...(Me=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var He,_e,Ae;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
  }
}`,...(Ae=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ce,Le,Ne;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  }
}`,...(Ne=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};const je=["Playground","Sizes","Disabled","Tooltip","Icon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Alert:w,Correct:z,Critic:v,Danger:g,DangerHigh:r,DangerLow:o,Disabled:a,Icon:n,Ideal:h,Info:f,InfoAlt:$,Moderate:b,ModerateHigh:l,ModerateLow:c,Neutral:I,Playground:t,Sizes:d,Slight:p,SlightHigh:m,SlightLow:x,Tooltip:i,Undeterminated:u,__namedExportsOrder:je,default:Oe},Symbol.toStringTag,{value:"Module"}));export{w as A,z as C,a as D,n as I,l as M,I as N,t as P,Ee as S,i as T,u as U,d as a,r as b,g as c,o as d,b as e,c as f,m as g,p as h,x as i,h as j,v as k,f as l,$ as m};
