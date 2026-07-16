import{x as e}from"./iframe-D7EeAtJA.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const c=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,x={title:"Components/Checkbox",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},indeterminate:{name:"Indeterminat",control:{type:"boolean"},if:{arg:"checked",truthy:!1}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={render:s=>e`
            <dss-checkbox 
                variant="${s.validateType?"validation":"default"}"
                name="checkbox-playground" 
                label="Label" 
                ?hideLabel="${s.hideLabel}"
                ?checked="${s.checked}"
                ?disabled="${s.disabled}"
                ?indeterminate="${s.indeterminate}"
                value="playground-value"
            ></dss-checkbox>
    `,args:{validateType:!1,label:"Label",hideLabel:!1,disabled:!1,checked:!1,indeterminate:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev"}}},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-checkbox name="checkbox1" label="Label" hideLabel value="checkbox1"></dss-checkbox>
                <dss-checkbox name="checkbox2" label="Label" hideLabel value="checkbox1" disabled></dss-checkbox>
                <dss-checkbox name="checkbox3" label="Label" hideLabel value="checkbox1" checked></dss-checkbox>
                <dss-checkbox name="checkbox4" label="Label" hideLabel value="checkbox1" checked disabled></dss-checkbox>
                <dss-checkbox name="checkbox5" label="Label" hideLabel value="checkbox1" indeterminate></dss-checkbox>
                <dss-checkbox name="checkbox6" label="Label" hideLabel value="checkbox1" indeterminate disabled></dss-checkbox>
      </div>
    `,decorators:[a(c,"checkbox-no-label-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-checkbox variant="validation" name="checkboxValidate1" label="Label" hideLabel value="checkbox1"></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate2" label="Label" hideLabel value="checkbox2" disabled></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate3" label="Label" hideLabel value="checkbox3" checked></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate4" label="Label" hideLabel value="checkbox4" checked disabled></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate5" label="Label" hideLabel value="checkbox5" indeterminate></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate6" label="Label" hideLabel value="checkbox6" indeterminate disabled></dss-checkbox>
      </div>
    `,decorators:[a(c,"checkbox-type-validation-style")]},b={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox name="checkboxLabel1" label="Label" value="checkbox1"></dss-checkbox>
                <dss-checkbox name="checkboxLabel2" label="Label" value="checkbox2" disabled></dss-checkbox>
                <dss-checkbox name="checkboxLabel3" label="Label" value="checkbox3" checked></dss-checkbox>
                <dss-checkbox name="checkboxLabel4" label="Label" value="checkbox4" checked disabled></dss-checkbox>
                <dss-checkbox name="checkboxLabel5" label="Label" value="checkbox5" indeterminate></dss-checkbox>
                <dss-checkbox name="checkboxLabel6" label="Label" value="checkbox6" indeterminate disabled></dss-checkbox>
      </div>
    `,decorators:[a(c,"checkbox-label-style")]},r={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox-group name="group-vertical"  label="Checkbox Group Label" orientation="vertical" >
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        `,decorators:[a(c,"checkbox-group-style")]},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox-group name="group-horizontal" label="Checkbox Group Label" orientation="horizontal" >
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        `,decorators:[a(c,"checkbox-group-style")]},h={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox-group name="group-hide-label" label="Checkbox Group Label" orientation="vertical" hideLabel>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        `,decorators:[a(c,"checkbox-group-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox-group name="group-default-value" label="Checkbox Group Label" orientation="vertical" value='["dewey"]'>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        `,decorators:[a(c,"checkbox-group-style")]},n={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-checkbox-group name="group-disabled" label="Checkbox Group Label" orientation="vertical" disabled value='["dewey"]'>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        `,decorators:[a(c,"checkbox-group-style")]},k={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const u=document.querySelector("#manual-focus-demo");u&&u.focus()}}></dss-button>
                <dss-checkbox 
                    id="manual-focus-demo"
                    name="checkboxValidate1" 
                    label="Label" 
                    value="checkbox1"
                ></dss-checkbox>
            </div>
        `,decorators:[a(c,"checkbox-focus-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-checkbox 
                variant="\${args.validateType ? \`validation\` : 'default'}"
                name="checkbox-playground" 
                label="Label" 
                ?hideLabel="\${args.hideLabel}"
                ?checked="\${args.checked}"
                ?disabled="\${args.disabled}"
                ?indeterminate="\${args.indeterminate}"
                value="playground-value"
            ></dss-checkbox>
    \`;
  },
  args: {
    validateType: false,
    label: 'Label',
    hideLabel: false,
    disabled: false,
    checked: false,
    indeterminate: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev'
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-checkbox name="checkbox1" label="Label" hideLabel value="checkbox1"></dss-checkbox>
                <dss-checkbox name="checkbox2" label="Label" hideLabel value="checkbox1" disabled></dss-checkbox>
                <dss-checkbox name="checkbox3" label="Label" hideLabel value="checkbox1" checked></dss-checkbox>
                <dss-checkbox name="checkbox4" label="Label" hideLabel value="checkbox1" checked disabled></dss-checkbox>
                <dss-checkbox name="checkbox5" label="Label" hideLabel value="checkbox1" indeterminate></dss-checkbox>
                <dss-checkbox name="checkbox6" label="Label" hideLabel value="checkbox1" indeterminate disabled></dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-no-label-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-checkbox variant="validation" name="checkboxValidate1" label="Label" hideLabel value="checkbox1"></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate2" label="Label" hideLabel value="checkbox2" disabled></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate3" label="Label" hideLabel value="checkbox3" checked></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate4" label="Label" hideLabel value="checkbox4" checked disabled></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate5" label="Label" hideLabel value="checkbox5" indeterminate></dss-checkbox>
                <dss-checkbox variant="validation" name="checkboxValidate6" label="Label" hideLabel value="checkbox6" indeterminate disabled></dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-type-validation-style')]
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox name="checkboxLabel1" label="Label" value="checkbox1"></dss-checkbox>
                <dss-checkbox name="checkboxLabel2" label="Label" value="checkbox2" disabled></dss-checkbox>
                <dss-checkbox name="checkboxLabel3" label="Label" value="checkbox3" checked></dss-checkbox>
                <dss-checkbox name="checkboxLabel4" label="Label" value="checkbox4" checked disabled></dss-checkbox>
                <dss-checkbox name="checkboxLabel5" label="Label" value="checkbox5" indeterminate></dss-checkbox>
                <dss-checkbox name="checkboxLabel6" label="Label" value="checkbox6" indeterminate disabled></dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-label-style')]
}`,...b.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox-group name="group-vertical"  label="Checkbox Group Label" orientation="vertical" >
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox-group name="group-horizontal" label="Checkbox Group Label" orientation="horizontal" >
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...t.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox-group name="group-hide-label" label="Checkbox Group Label" orientation="vertical" hideLabel>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox-group name="group-default-value" label="Checkbox Group Label" orientation="vertical" value='["dewey"]'>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox-group name="group-disabled" label="Checkbox Group Label" orientation="vertical" disabled value='["dewey"]'>
                    <dss-checkbox label="Huey" value="huey"></dss-checkbox>
                    <dss-checkbox label="Dewey" value="dewey"></dss-checkbox>
                    <dss-checkbox label="Louie" value="louie"></dss-checkbox>
                </dss-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...n.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-checkbox 
                    id="manual-focus-demo"
                    name="checkboxValidate1" 
                    label="Label" 
                    value="checkbox1"
                ></dss-checkbox>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-focus-style')]
}`,...k.parameters?.docs?.source}}};const p=["Playground","NoLabel","TypeValidation","Label","GroupVertical","GroupHorizontal","GroupHideLabel","GroupDefaultValue","GroupDisabled","Focus"],y=Object.freeze(Object.defineProperty({__proto__:null,Focus:k,GroupDefaultValue:i,GroupDisabled:n,GroupHideLabel:h,GroupHorizontal:t,GroupVertical:r,Label:b,NoLabel:l,Playground:o,TypeValidation:d,__namedExportsOrder:p,default:x},Symbol.toStringTag,{value:"Module"}));export{k as F,r as G,b as L,l as N,o as P,y as S,d as T,t as a,h as b,i as c,n as d};
