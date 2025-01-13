import{x as l}from"./lit-html-B2eaWknC.js";const m={title:"Components/Checkbox",argTypes:{withLabel:{name:"Amb text",control:{type:"boolean"}},label:{name:"Text",control:{type:"text"},if:{arg:"withLabel"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={render:e=>l`
      <div class="dss-form-field">
        <input
          type="checkbox"
          id="checkbox"
          class="dss-checkbox  ${e.validateType?"dss-checkbox--validate":null}"
          ?checked="${e.checked}"
          ?disabled="${e.disabled}"
        />
        ${e.withLabel?l`<label>${e.label}</label>`:null}
      </div>
    `,args:{withLabel:!1,label:"",disabled:!1,checked:!1,validateType:!1}},c={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <input type="checkbox" class="dss-checkbox" />
        <input type="checkbox" class="dss-checkbox" disabled />
        <input type="checkbox" class="dss-checkbox" checked />
        <input type="checkbox" class="dss-checkbox" checked disabled />
      </div>
    `},a={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" checked />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" checked disabled />
      </div>
    `},d={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <div class="dss-form-field">
         <input type="checkbox" id="checkbox" class="dss-checkbox" />
          <label>Label</label>
        </div>
        <div class="dss-form-field">
          <input type="checkbox" id="checkbox" class="dss-checkbox" checked />
          <label>Label</label>
        </div>
        <div class="dss-form-field">
          <input type="checkbox" id="checkbox" class="dss-checkbox" />
          <label>Label</label>
        </div>
        <div class="dss-form-field dss-form-field--disabled">
          <input type="checkbox" id="checkbox" class="dss-checkbox" checked disabled />
          <label>Label</label>
        </div>
      </div>
    `};var o,n,t;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <div class="dss-form-field">
        <input
          type="checkbox"
          id="checkbox"
          class="dss-checkbox  \${args.validateType ? \`dss-checkbox--validate\` : null}"
          ?checked="\${args.checked}"
          ?disabled="\${args.disabled}"
        />
        \${args.withLabel ? html\`<label>\${args.label}</label>\` : null}
      </div>
    \`;
  },
  args: {
    withLabel: false,
    label: '',
    disabled: false,
    checked: false,
    validateType: false
  }
}`,...(t=(n=s.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var b,i,r;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <input type="checkbox" class="dss-checkbox" />
        <input type="checkbox" class="dss-checkbox" disabled />
        <input type="checkbox" class="dss-checkbox" checked />
        <input type="checkbox" class="dss-checkbox" checked disabled />
      </div>
    \`;
  }
}`,...(r=(i=c.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var h,p,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" checked />
        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" checked disabled />
      </div>
    \`;
  }
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var x,u,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-form-field">
         <input type="checkbox" id="checkbox" class="dss-checkbox" />
          <label>Label</label>
        </div>
        <div class="dss-form-field">
          <input type="checkbox" id="checkbox" class="dss-checkbox" checked />
          <label>Label</label>
        </div>
        <div class="dss-form-field">
          <input type="checkbox" id="checkbox" class="dss-checkbox" />
          <label>Label</label>
        </div>
        <div class="dss-form-field dss-form-field--disabled">
          <input type="checkbox" id="checkbox" class="dss-checkbox" checked disabled />
          <label>Label</label>
        </div>
      </div>
    \`;
  }
}`,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const y=["Playground","NoLabel","TypeValidation","Label"],g=Object.freeze(Object.defineProperty({__proto__:null,Label:d,NoLabel:c,Playground:s,TypeValidation:a,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{d as L,c as N,s as P,g as S,a as T};
