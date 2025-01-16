import{x as e}from"./lit-html-B2eaWknC.js";const B={title:"Components/Radio Button",argTypes:{showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:d=>e`
            <dss-radio-button ?disabled=${d.disabled}>
                <input slot="input" id="radioButton1" type="radio" ?disabled=${d.disabled} ?checked=${d.checked} />
                <label slot="label" for="radioButton1">
                ${d.label}
                </label>
            </dss-radio-button>	
    `,args:{showLabel:!1,label:"Label",disabled:!1,checked:!1}},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio"/>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" disabled />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked disabled />
                </dss-radio-button>
      </div>
    `},a={tags:["!dev"],render:()=>e`
            <div class="wrapper">
            <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio"/>
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton1" type="radio" disabled />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton1" type="radio" checked disabled />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>	
      </div>
    `};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-radio-button ?disabled=\${args.disabled}>
                <input slot="input" id="radioButton1" type="radio" ?disabled=\${args.disabled} ?checked=\${args.checked} />
                <label slot="label" for="radioButton1">
                \${args.label}
                </label>
            </dss-radio-button>	
    \`;
  },
  args: {
    showLabel: false,
    label: 'Label',
    disabled: false,
    checked: false
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio"/>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" disabled />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked disabled />
                </dss-radio-button>
      </div>
    \`;
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,p,c;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
            <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio"/>
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton1" type="radio" disabled />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" checked />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton1" type="radio" checked disabled />
                    <label slot="label" for="radioButton1">
                        Label
                    </label>
                </dss-radio-button>	
      </div>
    \`;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Playground","NoLabel","Label"],h=Object.freeze(Object.defineProperty({__proto__:null,Label:a,NoLabel:o,Playground:t,__namedExportsOrder:y,default:B},Symbol.toStringTag,{value:"Module"}));export{a as L,o as N,t as P,h as S};
