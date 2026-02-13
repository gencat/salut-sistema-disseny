import{x as e}from"./iframe-DLVb3rJw.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const o=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`,m={title:"Components/Radio Button",argTypes:{label:{name:"Label"},hideLabel:{name:"Amagar Label",control:{type:"boolean"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:c=>e`
            <dss-radio-button
                name="radio-playground"
                value="option-value"
                label="${c.label}"
                ?hideLabel=${c.hideLabel}
                ?checked=${c.checked}
                ?disabled=${c.disabled}
            ></dss-radio-button>
    `,args:{label:"Label",hideLabel:!1,checked:!1,disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" >
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-default-style")]},t={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-checked-style")]},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" disabled value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-checked-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button-group name="group-horizontal"  label="Radio Group Label" orientation="horizontal">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-horizontal-style")]},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button name="myFormRadio1" label="Label" hideLabel value="Option1"></dss-radio-button>
                <dss-radio-button name="myFormRadio2" label="Label" hideLabel value="Option2" disabled></dss-radio-button>
                <dss-radio-button name="myFormRadio3" label="Label" hideLabel value="Option3" checked></dss-radio-button>
                <dss-radio-button name="myFormRadio4" label="Label" hideLabel value="Option4" checked disabled></dss-radio-button>
      </div>
    `,decorators:[a(o,"radio-no-label-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-radio-button name="myFormRadio5" label="Label" value="Option5"></dss-radio-button>
                <dss-radio-button name="myFormRadio6" label="Label" value="Option6" disabled></dss-radio-button>
                <dss-radio-button name="myFormRadio7" label="Label" value="Option7" checked></dss-radio-button>
                <dss-radio-button name="myFormRadio8" label="Label" value="Option8" checked disabled></dss-radio-button>
      </div>
    `,decorators:[a(o,"radio-label-style")]},n={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-radio-button-group name="group-hide-label" label="Radio Group Label" orientation="vertical" hideLabel>
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-group-style")]},b={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-radio-button-group name="group-default-value" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-group-style")]},p={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-radio-button-group name="group-disabled" label="Radio Group Label" orientation="vertical" value="dewey" disabled>
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    `,decorators:[a(o,"radio-group-style")]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-radio-button
                name="radio-playground"
                value="option-value"
                label="\${args.label}"
                ?hideLabel=\${args.hideLabel}
                ?checked=\${args.checked}
                ?disabled=\${args.disabled}
            ></dss-radio-button>
    \`;
  },
  args: {
    label: 'Label',
    hideLabel: false,
    checked: false,
    disabled: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev'
    }
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" >
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-default-style')]
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-checked-style')]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button-group name="group-vertical"  label="Radio Group Label" disabled value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-checked-style')]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button-group name="group-horizontal"  label="Radio Group Label" orientation="horizontal">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-horizontal-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button name="myFormRadio1" label="Label" hideLabel value="Option1"></dss-radio-button>
                <dss-radio-button name="myFormRadio2" label="Label" hideLabel value="Option2" disabled></dss-radio-button>
                <dss-radio-button name="myFormRadio3" label="Label" hideLabel value="Option3" checked></dss-radio-button>
                <dss-radio-button name="myFormRadio4" label="Label" hideLabel value="Option4" checked disabled></dss-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-no-label-style')]
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-radio-button name="myFormRadio5" label="Label" value="Option5"></dss-radio-button>
                <dss-radio-button name="myFormRadio6" label="Label" value="Option6" disabled></dss-radio-button>
                <dss-radio-button name="myFormRadio7" label="Label" value="Option7" checked></dss-radio-button>
                <dss-radio-button name="myFormRadio8" label="Label" value="Option8" checked disabled></dss-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-label-style')]
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-radio-button-group name="group-hide-label" label="Radio Group Label" orientation="vertical" hideLabel>
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-radio-button-group name="group-default-value" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-radio-button-group name="group-disabled" label="Radio Group Label" orientation="vertical" value="dewey" disabled>
                    <dss-radio-button label="Huey" value="huey"></dss-radio-button>
                    <dss-radio-button label="Dewey" value="dewey"></dss-radio-button>
                    <dss-radio-button label="Louie" value="louie"></dss-radio-button>
                </dss-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...p.parameters?.docs?.source}}};const v=["Playground","Default","Checked","Disabled","Horizontal","NoLabel","Label","GroupHideLabel","GroupDefaultValue","GroupDisabled"],w=Object.freeze(Object.defineProperty({__proto__:null,Checked:t,Default:d,Disabled:s,GroupDefaultValue:b,GroupDisabled:p,GroupHideLabel:n,Horizontal:l,Label:i,NoLabel:u,Playground:r,__namedExportsOrder:v,default:m},Symbol.toStringTag,{value:"Module"}));export{t as C,d as D,n as G,l as H,i as L,u as N,r as P,w as S,s as a};
