import{x as s}from"./lit-html-D6cejpwM.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const b=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,L={title:"Components/Checkbox",argTypes:{withLabel:{name:"Amb label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"},if:{arg:"withLabel"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},indeterminate:{name:"Indeterminat",control:{type:"boolean"},if:{arg:"checked",truthy:!1}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:e=>s`
            <dss-checkbox variant="${e.validateType?"validation":"default"}" ?indeterminate="${e.indeterminate}">
                <input slot="input" 
                    id="checkboxStory" 
                    type="checkbox"  
                    ?checked="${e.checked}"
                    ?disabled="${e.disabled}" />
                ${e.withLabel?s`<label slot="label" for="checkboxStory">${e.label}</label>`:null}
            </dss-checkbox>
    `,args:{withLabel:!0,label:"Label",disabled:!1,checked:!1,indeterminate:!1,validateType:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev"}}},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-checkbox>
                <dss-checkbox indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
      </div>
    `,decorators:[o(b,"checkbox-no-label-style")]},t={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-checkbox variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-checkbox>
                <dss-checkbox variant="validation" indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
      </div>
    `,decorators:[o(b,"checkbox-type-validation-style")]},l={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox" />
                    <label slot="label" for="checkbox1">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox2" type="checkbox" disabled/>
                    <label slot="label" for="checkbox2">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox3" type="checkbox" checked/>
                    <label slot="label" for="checkbox3">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox4" type="checkbox" checked disabled/>
                    <label slot="label" for="checkbox4">Label</label>
                </dss-checkbox>
                <dss-checkbox indeterminate>
                    <input slot="input" id="checkbox5" type="checkbox" />
                    <label slot="label" for="checkbox5">Label</label>
                </dss-checkbox>
      </div>
    `,decorators:[o(b,"checkbox-label-style")]};var i,d,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-checkbox variant="\${args.validateType ? \`validation\` : 'default'}" ?indeterminate="\${args.indeterminate}">
                <input slot="input" 
                    id="checkboxStory" 
                    type="checkbox"  
                    ?checked="\${args.checked}"
                    ?disabled="\${args.disabled}" />
                \${args.withLabel ? html\`<label slot="label" for="checkboxStory">\${args.label}</label>\` : null}
            </dss-checkbox>
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
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var r,p,h;c.parameters={...c.parameters,docs:{...(r=c.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-checkbox>
                <dss-checkbox indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-no-label-style')]
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var k,x,u;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-checkbox variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" />
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" disabled/>
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
                <dss-checkbox  variant="validation">
                    <input slot="input" type="checkbox" aria-label="Label" checked disabled/>
                </dss-checkbox>
                <dss-checkbox variant="validation" indeterminate>
                    <input slot="input" type="checkbox" aria-label="Label" checked/>
                </dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-type-validation-style')]
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var y,m,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox" />
                    <label slot="label" for="checkbox1">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox2" type="checkbox" disabled/>
                    <label slot="label" for="checkbox2">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox3" type="checkbox" checked/>
                    <label slot="label" for="checkbox3">Label</label>
                </dss-checkbox>
                <dss-checkbox>
                    <input slot="input" id="checkbox4" type="checkbox" checked disabled/>
                    <label slot="label" for="checkbox4">Label</label>
                </dss-checkbox>
                <dss-checkbox indeterminate>
                    <input slot="input" id="checkbox5" type="checkbox" />
                    <label slot="label" for="checkbox5">Label</label>
                </dss-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-label-style')]
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const f=["Playground","NoLabel","TypeValidation","Label"],S=Object.freeze(Object.defineProperty({__proto__:null,Label:l,NoLabel:c,Playground:a,TypeValidation:t,__namedExportsOrder:f,default:L},Symbol.toStringTag,{value:"Module"}));export{l as L,c as N,a as P,S,t as T};
