import{x as s}from"./lit-html-B2eaWknC.js";const f={title:"Components/Radio Button",argTypes:{label:{name:"Text",control:{type:"text"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={render:d=>s`
            <dss-form-radio-button 
            label="${d.label}" 
            ?checked="${d.checked}"
            ?disabled="${d.disabled}"
            ></dss-form-radio-button>	
    `,args:{label:"",disabled:!1,checked:!1}},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-form-radio-button></dss-form-radio-button>	
                <dss-form-radio-button disabled=${!0}></dss-form-radio-button>	
                <dss-form-radio-button checked=${!0} ></dss-form-radio-button>	
                <dss-form-radio-button checked=${!0} disabled=${!0}></dss-form-radio-button>
      </div>
    `},o={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-form-radio-button label="Label"></dss-form-radio-button>	
                <dss-form-radio-button label="Label" disabled=${!0}></dss-form-radio-button>	
                <dss-form-radio-button label="Label" checked=${!0} ></dss-form-radio-button>	
                <dss-form-radio-button label="Label" checked=${!0} disabled=${!0}></dss-form-radio-button>	
      </div>
    `};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-form-radio-button 
            label="\${args.label}" 
            ?checked="\${args.checked}"
            ?disabled="\${args.disabled}"
            ></dss-form-radio-button>	
    \`;
  },
  args: {
    label: '',
    disabled: false,
    checked: false
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,b,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button></dss-form-radio-button>	
                <dss-form-radio-button disabled=\${true}></dss-form-radio-button>	
                <dss-form-radio-button checked=\${true} ></dss-form-radio-button>	
                <dss-form-radio-button checked=\${true} disabled=\${true}></dss-form-radio-button>
      </div>
    \`;
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button label="Label"></dss-form-radio-button>	
                <dss-form-radio-button label="Label" disabled=\${true}></dss-form-radio-button>	
                <dss-form-radio-button label="Label" checked=\${true} ></dss-form-radio-button>	
                <dss-form-radio-button label="Label" checked=\${true} disabled=\${true}></dss-form-radio-button>	
      </div>
    \`;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const p=["Playground","NoLabel","Label"],h=Object.freeze(Object.defineProperty({__proto__:null,Label:o,NoLabel:r,Playground:e,__namedExportsOrder:p,default:f},Symbol.toStringTag,{value:"Module"}));export{o as L,r as N,e as P,h as S};
