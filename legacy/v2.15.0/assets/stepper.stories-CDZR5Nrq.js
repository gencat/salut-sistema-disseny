import"./lit-element-BL4lq474.js";import{x as e}from"./lit-html-D6cejpwM.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const t=`
 .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .horizontal-wrapper {
    width: 500px;
    margin: 0 50px;
  }

  .vertical-wrapper {
    height: 200px;
  }

  .vertical-wrapper--md {
    height: 300px;
  }

  .vertical-wrapper--lg {
    height: 400px;
  }
`,ne={title:"Components/Stepper",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},steps:{name:"Steps",control:{type:"select"},options:[3,4,5]},step:{name:"Step",control:{type:"radio"},options:[1,2,3]},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},hideLabel:{name:"Ocultar Label",control:{type:"boolean"}},column:{name:"Mostrar en vertical",control:{type:"boolean"}},circular:{name:"Mostrar versió circular",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1378-10147&m=dev"}},render:s=>{const v=Array.from({length:s.steps},()=>({label:"Step Name",icon:s.showIcon?"add_box":null}));return s.column?e`
          <div style="height: 400px">
            <dss-stepper
              .steps="${v}"
              currentStep="${s.step}"
              size="${s.size}"
              .column="${s.column}"
              .hideLabel="${s.hideLabel}"
              .circular="${s.circular}"
            ></dss-stepper>
          </div>
        `:e`
          <div class="horizontal-wrapper" style="width: 700px;">
            <dss-stepper
              .steps="${v}"
              currentStep="${s.step}"
              size="${s.size}"
              .column="${s.column}"
              .hideLabel="${s.hideLabel}"
              .circular="${s.circular}"
            ></dss-stepper>
          </div>
        `},args:{steps:3,size:"md",step:1,showIcon:!1,hideLabel:!1,column:!1,circular:!1}},p={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-circle-style")]},l={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-horizontal-sm-style")]},d={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-horizontal-md-style")]},o={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-horizontal-lg-style")]},i={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-vertical-sm-style")]},c={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-vertical-md-style")]},n={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-vertical-lg-style")]},b={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-horizontal-no-labels-style")]},m={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-vertical-no-labels-style")]},S={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-checked-style")]},N={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-info-style")]},u={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-alert-style")]},x={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-error-style")]},_={tags:["!dev"],render:()=>e`
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
    `,decorators:[a(t,"stepper-disabled-style")]};var h,z,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(z=r.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var g,y,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-circle-style')]
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,L,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-horizontal-sm-style')]
}`,...($=(L=l.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var M,H,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-horizontal-md-style')]
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var D,V,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-horizontal-lg-style')]
}`,...(C=(V=o.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var A,E,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-vertical-sm-style')]
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,G,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-vertical-md-style')]
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var T,j,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-vertical-lg-style')]
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,K,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-horizontal-no-labels-style')]
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var B,Q,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-vertical-no-labels-style')]
}`,...(R=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,W,Y;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-checked-style')]
}`,...(Y=(W=S.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,ae;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-info-style')]
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-alert-style')]
}`,...(re=(se=u.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var pe,le,de;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-error-style')]
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var oe,ie,ce;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'stepper-disabled-style')]
}`,...(ce=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const be=["Playground","Circle","HorizontalSM","HorizontalMD","HorizontalLG","VerticalSM","VerticalMD","VerticalLG","HorizontalNoLabels","VerticalNoLabels","Checked","Info","Alert","ErrorState","Disabled"],ue=Object.freeze(Object.defineProperty({__proto__:null,Alert:u,Checked:S,Circle:p,Disabled:_,ErrorState:x,HorizontalLG:o,HorizontalMD:d,HorizontalNoLabels:b,HorizontalSM:l,Info:N,Playground:r,VerticalLG:n,VerticalMD:c,VerticalNoLabels:m,VerticalSM:i,__namedExportsOrder:be,default:ne},Symbol.toStringTag,{value:"Module"}));export{u as A,p as C,_ as D,x as E,l as H,N as I,r as P,ue as S,i as V,d as a,o as b,c,n as d,b as e,m as f,S as g};
