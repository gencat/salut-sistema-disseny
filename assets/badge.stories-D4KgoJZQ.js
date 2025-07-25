import"./lit-element-Dloa6E9d.js";import{x as s}from"./lit-html-D6a8R3xZ.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,Oe={title:"Components/Badge",argTypes:{size:{name:"Size",control:{type:"radio"},options:["sm","md","lg","xl"]},showIcon:{name:" Modify icon",control:{type:"boolean"}},icon:{name:"Icon",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},text:{name:"Text",control:{type:"text"}},state:{name:"State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undetermined","critical","alert","ideal","info","info-alt","neutral"]},disabled:{name:"Disabled",control:{type:"boolean"}},outlined:{name:"Outlined (Només informació)",control:{type:"boolean"}},hideIcon:{name:"Hide Icon",control:{type:"boolean"}},showTooltip:{name:"Amb tooltip",control:{type:"boolean"}},tooltipPosition:{name:"Posición tooltip",control:{type:"radio"},options:["top","right","bottom","left"],if:{arg:"showTooltip",truthy:!0}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev"}},args:{size:"lg",showIcon:!1,text:"12345",icon:"person",state:"danger-high",disabled:!1,outlined:!1,hideIcon:!1,showTooltip:!1,tooltipPosition:"top"},render:e=>s`
    ${e.showTooltip?e.showIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon}>
                <dss-tooltip slot="tooltip" position="${e.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            `:e.showIcon?s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon} icon="${e.icon}">
              </dss-badge>
            `:s`
              <dss-badge text="${e.text}" size="${e.size}" state="${e.state}" ?disabled=${e.disabled} ?outlined=${e.outlined} ?hideIcon=${e.hideIcon}>
              </dss-badge>
            `}
    `},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="ideal" text="12345"></dss-badge>
        <dss-badge size="md" state="ideal" text="12345"></dss-badge>
        <dss-badge size="lg" state="ideal" text="12345"></dss-badge>
        <dss-badge size="xl" state="ideal" text="12345"></dss-badge>
      </div>
    `,decorators:[t(d,"badge-size-style")]},i={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    `},g={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="ideal" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    `},o={tags:["!dev"],render:()=>s`
      <dss-badge size="lg" state="correct" icon="home" text="12345">
        <dss-tooltip slot="tooltip" position="right">
          <span>Indicar info</span>
        </dss-tooltip>
      </dss-badge>
    `},l={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-high" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-high-style")]},n={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger" text="12345"></dss-badge>
        <dss-badge size="md" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-style")]},b={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="md" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="danger-low" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-danger-low-style")]},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="md" state="moderate-high" text="12345" ></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345"></dss-badge>
        <dss-badge size="lg" state="moderate-high" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-moderate-high-style")]},p={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="moderate" text="12345"></dss-badge>
      <dss-badge size="md" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345"></dss-badge>
      <dss-badge size="lg" state="moderate" text="12345" dot></dss-badge>
    </div>  
    `,decorators:[t(d,"badge-moderate-style")]},m={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-slight-high-style")]},u={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="slight" text="12345"></dss-badge>
        <dss-badge size="md" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-slight-style")]},z={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-badge size="sm" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="md" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345"></dss-badge>
        <dss-badge size="lg" state="slight-low" text="12345" dot></dss-badge>
      </div>
    `,decorators:[t(d,"badge-slight-low-style")]},h={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-badge size="sm" state="correct" text="12345"></dss-badge>
    <dss-badge size="md" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345"></dss-badge>
    <dss-badge size="lg" state="correct" text="12345" dot></dss-badge>
  </div>
    `,decorators:[t(d,"badge-correct-style")]},w={tags:["!dev"],render:()=>s`
    <div class="wrapper">
      <dss-badge size="sm" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="md" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345"></dss-badge>
      <dss-badge size="lg" state="undeterminated" text="12345" dot></dss-badge>
    </div>
    `,decorators:[t(d,"badge-undeterminated-style")]},v={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-ideal-style")]},y={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-alert-style")]},f={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-info-alt-style")]},I={tags:["!dev"],render:()=>s`
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
    `,decorators:[t(d,"badge-neutral-style")]};var P,T,D;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-3728&m=dev'
    }
  },
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
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
                <dss-tooltip slot="tooltip" position="\${args.tooltipPosition}">
                  <span>Indicar info</span>
                </dss-tooltip>
              </dss-badge>
            \` : args.showIcon ? html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon} icon="\${args.icon}">
              </dss-badge>
            \` : html\`
              <dss-badge text="\${args.text}" size="\${args.size}" state="\${args.state}" ?disabled=\${args.disabled} ?outlined=\${args.outlined} ?hideIcon=\${args.hideIcon}>
              </dss-badge>
            \`}
    \`;
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var H,M,A;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(M=r.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var C,_,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-badge size="lg" state="ideal" text="12345" disabled></dss-badge>
    \`;
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var j,F,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(F=g.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,k,E;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var U,q,J;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,X,B;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(X=n.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var G,Q,R;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,W,Y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,se;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,de,ae;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var re,ie,ge;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ge=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var oe,le,ne;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var be,ce,pe;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,xe,ue;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var ze,he,we;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(we=(he=w.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ve,ye,Se;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var fe,$e,Ie;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ie=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source}}};var Pe,Te,De;S.parameters={...S.parameters,docs:{...(Pe=S.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(De=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var He,Me,Ae;f.parameters={...f.parameters,docs:{...(He=f.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var Ce,_e,Le;$.parameters={...$.parameters,docs:{...(Ce=$.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var je,Fe,Ne;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ne=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};const ke=["Playground","Sizes","Disabled","Tooltip","Icon","DangerHigh","Danger","DangerLow","ModerateHigh","Moderate","ModerateLow","SlightHigh","Slight","SlightLow","Correct","Undeterminated","Ideal","Critic","Alert","Info","InfoAlt","Neutral"],Je=Object.freeze(Object.defineProperty({__proto__:null,Alert:S,Correct:h,Critic:y,Danger:n,DangerHigh:l,DangerLow:b,Disabled:i,Icon:o,Ideal:v,Info:f,InfoAlt:$,Moderate:p,ModerateHigh:c,ModerateLow:m,Neutral:I,Playground:a,Sizes:r,Slight:u,SlightHigh:x,SlightLow:z,Tooltip:g,Undeterminated:w,__namedExportsOrder:ke,default:Oe},Symbol.toStringTag,{value:"Module"}));export{S as A,h as C,i as D,o as I,c as M,I as N,a as P,Je as S,g as T,w as U,r as a,l as b,n as c,b as d,p as e,m as f,x as g,u as h,z as i,v as j,y as k,f as l,$ as m};
