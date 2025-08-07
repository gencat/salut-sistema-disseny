import"./lit-element-Dloa6E9d.js";import{x as e}from"./lit-html-D6a8R3xZ.js";const ie={title:"Components/Stepper",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},steps:{name:"Steps",control:{type:"select"},options:[3,4,5]},step:{name:"Step",control:{type:"radio"},options:[1,2,3]},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},hideLabel:{name:"Ocultar Label",control:{type:"boolean"}},column:{name:"Mostrar en vertical",control:{type:"boolean"}},circular:{name:"Mostrar versió circular",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1378-10147&m=dev"}},render:a=>{const x=Array.from({length:a.steps},()=>({label:"Step Name",icon:a.showIcon?"add_box":null}));return a.column?e`
          <div style="height: 400px">
            <dss-stepper
              .steps="${x}"
              currentStep="${a.step}"
              size="${a.size}"
              .column="${a.column}"
              .hideLabel="${a.hideLabel}"
              .circular="${a.circular}"
            ></dss-stepper>
          </div>
        `:e`
          <div class="horizontal-wrapper" style="width: 700px;">
            <dss-stepper
              .steps="${x}"
              currentStep="${a.step}"
              size="${a.size}"
              .column="${a.column}"
              .hideLabel="${a.hideLabel}"
              .circular="${a.circular}"
            ></dss-stepper>
          </div>
        `},args:{steps:3,size:"md",step:1,showIcon:!1,hideLabel:!1,column:!1,circular:!1}},t={tags:["!dev"],render:()=>e`
        <dss-stepper
            steps="[
            { label: 'Step Name 1', icon: 'add_box' },
            { label: 'Step Name 2', icon: 'add_box' },
            { label: 'Step Name 3', icon: 'add_box' },
            { label: 'Step Name 4', icon: 'add_box' },
            ]"
            currentStep="3"
            circular
          ></dss-stepper>
    `},r={tags:["!dev"],render:()=>e`
       <div class="horizontal-wrapper">
          <dss-stepper
            steps="[
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              ]"
            currentStep="1"
            size="sm"
          ></dss-stepper>
        </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
      <dss-stepper
        steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
        ]"
        currentStep="2"
        size="md"
      ></dss-stepper>
    </div>
    `},p={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="vertical-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          ]"
          currentStep="1"
          size="sm"
          column
        />
      </div>
    `},o={tags:["!dev"],render:()=>e`
       <div class="vertical-wrapper vertical-wrapper--md">
          <dss-stepper
            steps="[
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            ]"
            currentStep="2"
            size="md"
            column
          ></dss-stepper>
        </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="vertical-wrapper vertical-wrapper--lg">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
          column
        ></dss-stepper>
      </div>
    `},c={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="4"
          size="lg"
          hideLabel
        ></dss-stepper>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="vertical-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
          column
          hideLabel
        ></dss-stepper>
      </div>
    `},b={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    `},m={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    `},S={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    `},N={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    `},u={tags:["!dev"],render:()=>e`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    `};var _,v,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1378-10147&m=dev'
    }
  },
  render: (args: any) => {
    const steps = Array.from({
      length: args.steps
    }, () => {
      return {
        label: 'Step Name',
        icon: args.showIcon ? 'add_box' : null
      };
    });
    return args.column ? html\`
          <div style="height: 400px">
            <dss-stepper
              .steps="\${steps}"
              currentStep="\${args.step}"
              size="\${args.size}"
              .column="\${args.column}"
              .hideLabel="\${args.hideLabel}"
              .circular="\${args.circular}"
            ></dss-stepper>
          </div>
        \` : html\`
          <div class="horizontal-wrapper" style="width: 700px;">
            <dss-stepper
              .steps="\${steps}"
              currentStep="\${args.step}"
              size="\${args.size}"
              .column="\${args.column}"
              .hideLabel="\${args.hideLabel}"
              .circular="\${args.circular}"
            ></dss-stepper>
          </div>
        \`;
  },
  args: {
    steps: 3,
    size: 'md',
    step: 1,
    showIcon: false,
    hideLabel: false,
    column: false,
    circular: false
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,g,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-stepper
            steps="[
            { label: 'Step Name 1', icon: 'add_box' },
            { label: 'Step Name 2', icon: 'add_box' },
            { label: 'Step Name 3', icon: 'add_box' },
            { label: 'Step Name 4', icon: 'add_box' },
            ]"
            currentStep="3"
            circular
          ></dss-stepper>
    \`;
  }
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,y,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="horizontal-wrapper">
          <dss-stepper
            steps="[
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              { label: 'Step Name', icon: 'add_box' },
              ]"
            currentStep="1"
            size="sm"
          ></dss-stepper>
        </div>
    \`;
  }
}`,...(L=(y=r.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var $,k,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
      <dss-stepper
        steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
        ]"
        currentStep="2"
        size="md"
      ></dss-stepper>
    </div>
    \`;
  }
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var H,I,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var V,C,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="vertical-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          ]"
          currentStep="1"
          size="sm"
          column
        />
      </div>
    \`;
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,P,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="vertical-wrapper vertical-wrapper--md">
          <dss-stepper
            steps="[
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            { label: 'Step Name', icon: 'add_box' },
            ]"
            currentStep="2"
            size="md"
            column
          ></dss-stepper>
        </div>
    \`;
  }
}`,...(F=(P=o.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var G,O,T;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="vertical-wrapper vertical-wrapper--lg">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
          column
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,q,J;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="4"
          size="lg"
          hideLabel
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(J=(q=c.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,X,B;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="vertical-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
          column
          hideLabel
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(B=(X=n.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var Q,R,U;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,Y,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'info' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'alert' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,de;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', icon: 'add_box', state: 'error' },
          { label: 'Step Name' }
          ]"
          currentStep="2"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(de=(re=N.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var pe,le,oe;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="sm"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="md"
        ></dss-stepper>
      </div>

      <div class="horizontal-wrapper">
        <dss-stepper
          steps="[
          { label: 'Step Name', icon: 'add_box', state: 'checked' },
          { label: 'Step Name', icon: 'add_box', state: 'disabled' },
          { label: 'Step Name', icon: 'add_box' },
          { label: 'Step Name', state: 'disabled' }
          ]"
          currentStep="3"
          size="lg"
        ></dss-stepper>
      </div>
    \`;
  }
}`,...(oe=(le=u.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const ce=["Playground","Circle","HorizontalSM","HorizontalMD","HorizontalLG","VerticalSM","VerticalMD","VerticalLG","HorizontalNoLabels","VerticalNoLabels","Checked","Info","Alert","ErrorState","Disabled"],me=Object.freeze(Object.defineProperty({__proto__:null,Alert:S,Checked:b,Circle:t,Disabled:u,ErrorState:N,HorizontalLG:p,HorizontalMD:d,HorizontalNoLabels:c,HorizontalSM:r,Info:m,Playground:s,VerticalLG:i,VerticalMD:o,VerticalNoLabels:n,VerticalSM:l,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{S as A,t as C,u as D,N as E,r as H,m as I,s as P,me as S,l as V,d as a,p as b,o as c,i as d,c as e,n as f,b as g};
