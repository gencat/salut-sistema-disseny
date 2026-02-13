import{x as s}from"./iframe-DLVb3rJw.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const n=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,b={title:"Components/Angular/Checkbox",argTypes:{withLabel:{name:"Amb label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"},if:{arg:"withLabel"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},indeterminate:{name:"Indeterminat",control:{type:"boolean"},if:{arg:"checked",truthy:!1}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:e=>s`
            <dss-ng-checkbox variant="${e.validateType?"validation":"default"}" ?indeterminate="${e.indeterminate}">
                <input slot="input" 
                    id="checkboxStory" 
                    type="checkbox"  
                    ?checked="${e.checked}"
                    ?disabled="${e.disabled}" />
                ${e.withLabel?s`<label slot="label" for="checkboxStory">${e.label}</label>`:null}
            </dss-ng-checkbox>
    `,args:{withLabel:!0,label:"Label",disabled:!1,checked:!1,indeterminate:!1,validateType:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev"}}},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
      </div>
    `,decorators:[o(n,"checkbox-no-label-style")]},t={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-ng-checkbox variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox variant="validation" indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
      </div>
    `,decorators:[o(n,"checkbox-type-validation-style")]},l={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox" />
                    <label slot="label" for="checkbox1">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox2" type="checkbox" disabled/>
                    <label slot="label" for="checkbox2">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox3" type="checkbox" checked/>
                    <label slot="label" for="checkbox3">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox4" type="checkbox" checked disabled/>
                    <label slot="label" for="checkbox4">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox indeterminate>
                    <input slot="input" id="checkbox5" type="checkbox" />
                    <label slot="label" for="checkbox5">Label</label>
                </dss-ng-checkbox>
      </div>
    `,decorators:[o(n,"checkbox-label-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-ng-checkbox variant="\${args.validateType ? \`validation\` : 'default'}" ?indeterminate="\${args.indeterminate}">
                <input slot="input" 
                    id="checkboxStory" 
                    type="checkbox"  
                    ?checked="\${args.checked}"
                    ?disabled="\${args.disabled}" />
                \${args.withLabel ? html\`<label slot="label" for="checkboxStory">\${args.label}</label>\` : null}
            </dss-ng-checkbox>
    \`;
  },
  args: {
    withLabel: true,
    label: 'Label',
    disabled: false,
    checked: false,
    indeterminate: false,
    validateType: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev'
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-no-label-style')]
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-ng-checkbox variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
                <dss-ng-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-ng-checkbox>
                <dss-ng-checkbox variant="validation" indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-ng-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-type-validation-style')]
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox" />
                    <label slot="label" for="checkbox1">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox2" type="checkbox" disabled/>
                    <label slot="label" for="checkbox2">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox3" type="checkbox" checked/>
                    <label slot="label" for="checkbox3">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox>
                    <input slot="input" id="checkbox4" type="checkbox" checked disabled/>
                    <label slot="label" for="checkbox4">Label</label>
                </dss-ng-checkbox>
                <dss-ng-checkbox indeterminate>
                    <input slot="input" id="checkbox5" type="checkbox" />
                    <label slot="label" for="checkbox5">Label</label>
                </dss-ng-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-label-style')]
}`,...l.parameters?.docs?.source}}};const i=["Playground","NoLabel","TypeValidation","Label"],p=Object.freeze(Object.defineProperty({__proto__:null,Label:l,NoLabel:c,Playground:a,TypeValidation:t,__namedExportsOrder:i,default:b},Symbol.toStringTag,{value:"Module"}));export{l as L,c as N,a as P,p as S,t as T};
