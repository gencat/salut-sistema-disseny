import{x as r}from"./lit-html-paDGiEfB.js";const u={title:"Components/Radio Button",argTypes:{withLabel:{name:"Amb text",control:{type:"boolean"}},label:{name:"Text",control:{type:"text"},if:{arg:"withLabel"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={render:s=>r`
      <div class="dss-form-field">
        <input
          type="radio"
          id="radio"
          class="dss-radio"
          ?checked="${s.checked}"
          ?disabled="${s.disabled}"
        />
        ${s.withLabel?r`<label>${s.label}</label>`:null}
      </div>
    `,args:{withLabel:!1,label:"",disabled:!1,checked:!1}},a={tags:["!dev"],render:()=>r`
      <div class="wrapper">
        <input type="radio" class="dss-radio" />
        <input type="radio" class="dss-radio" disabled />
        <input type="radio" class="dss-radio" checked />
        <input type="radio" class="dss-radio" checked disabled />
      </div>
    `},d={tags:["!dev"],render:()=>r`
      <div class="wrapper">
        <div class="dss-form-field">
          <input type="radio" id="radio1" class="dss-radio" />
          <label for="radio1">Label</label>
        </div>
        <br />
        <div class="dss-form-field">
          <input type="radio" id="radio2" class="dss-radio" disabled />
          <label for="radio2">Label</label>
        </div>
        <br />
        <div class="dss-form-field">
          <input type="radio" id="radio3" class="dss-radio" checked />
          <label for="radio3">Label</label>
        </div>
        <br />
        <div class="dss-form-field dss-form-fielf--disabled">
          <input type="radio" id="radio4" class="dss-radio" checked disabled />
          <label for="radio4">Label</label>
        </div>
      </div>
    `};var l,i,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <div class="dss-form-field">
        <input
          type="radio"
          id="radio"
          class="dss-radio"
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
    checked: false
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,t,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <input type="radio" class="dss-radio" />
        <input type="radio" class="dss-radio" disabled />
        <input type="radio" class="dss-radio" checked />
        <input type="radio" class="dss-radio" checked disabled />
      </div>
    \`;
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var b,p,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-form-field">
          <input type="radio" id="radio1" class="dss-radio" />
          <label for="radio1">Label</label>
        </div>
        <br />
        <div class="dss-form-field">
          <input type="radio" id="radio2" class="dss-radio" disabled />
          <label for="radio2">Label</label>
        </div>
        <br />
        <div class="dss-form-field">
          <input type="radio" id="radio3" class="dss-radio" checked />
          <label for="radio3">Label</label>
        </div>
        <br />
        <div class="dss-form-field dss-form-fielf--disabled">
          <input type="radio" id="radio4" class="dss-radio" checked disabled />
          <label for="radio4">Label</label>
        </div>
      </div>
    \`;
  }
}`,...(f=(p=d.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const m=["Playground","NoLabel","Label"],y=Object.freeze(Object.defineProperty({__proto__:null,Label:d,NoLabel:a,Playground:e,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{d as L,a as N,e as P,y as S};
