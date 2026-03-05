import{x as e}from"./iframe-CdZ_4rdx.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const t=`
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
`,h={title:"Components/Stepper",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},steps:{name:"Steps",control:{type:"select"},options:[3,4,5]},step:{name:"Step",control:{type:"radio"},options:[1,2,3]},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},hideLabel:{name:"Ocultar Label",control:{type:"boolean"}},column:{name:"Mostrar en vertical",control:{type:"boolean"}},circular:{name:"Mostrar versió circular",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1378-10147&m=dev"}},render:s=>{const v=Array.from({length:s.steps},()=>({label:"Step Name",icon:s.showIcon?"add_box":null}));return s.column?e`
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
    `,decorators:[a(t,"stepper-disabled-style")]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const z=["Playground","Circle","HorizontalSM","HorizontalMD","HorizontalLG","VerticalSM","VerticalMD","VerticalLG","HorizontalNoLabels","VerticalNoLabels","Checked","Info","Alert","ErrorState","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Alert:u,Checked:S,Circle:p,Disabled:_,ErrorState:x,HorizontalLG:o,HorizontalMD:d,HorizontalNoLabels:b,HorizontalSM:l,Info:N,Playground:r,VerticalLG:n,VerticalMD:c,VerticalNoLabels:m,VerticalSM:i,__namedExportsOrder:z,default:h},Symbol.toStringTag,{value:"Module"}));export{u as A,p as C,_ as D,x as E,l as H,N as I,r as P,y as S,i as V,d as a,o as b,c,n as d,b as e,m as f,S as g};
