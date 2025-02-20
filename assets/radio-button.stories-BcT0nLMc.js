import{x as e}from"./lit-html-B2eaWknC.js";const m={title:"Components/Radio Button",argTypes:{showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={render:t=>e`
            ${t.showLabel?e`
                            <dss-radio-button ?disabled=${t.disabled}>
                                <input slot="input" id="radioButton" name="radioButton" type="radio" ?disabled=${t.disabled} ?checked=${t.checked} />
                                <label slot="label" for="radioButton">
                                    ${t.label}
                                </label>
                            </dss-radio-button>	
                      `:e`
                    <dss-radio-button ?disabled=${t.disabled}>
                        <input slot="input" id="radioButton" name="radioButton" type="radio" aria-label="Label" ?disabled=${t.disabled} ?checked=${t.checked} />
                    </dss-radio-button>	
                `}
            
    `,args:{showLabel:!1,label:"Label",disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},a={tags:["!dev"],render:()=>e`
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
    `},d={tags:["!dev"],render:()=>e`
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
    `};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            \${args.showLabel ? html\`
                            <dss-radio-button ?disabled=\${args.disabled}>
                                <input slot="input" id="radioButton" name="radioButton" type="radio" ?disabled=\${args.disabled} ?checked=\${args.checked} />
                                <label slot="label" for="radioButton">
                                    \${args.label}
                                </label>
                            </dss-radio-button>	
                      \` : html\`
                    <dss-radio-button ?disabled=\${args.disabled}>
                        <input slot="input" id="radioButton" name="radioButton" type="radio" aria-label="Label" ?disabled=\${args.disabled} ?checked=\${args.checked} />
                    </dss-radio-button>	
                \`}
            
    \`;
  },
  args: {
    showLabel: false,
    label: 'Label',
    disabled: false,
    checked: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev'
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var r,l,u;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,p,c;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(c=(p=d.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const B=["Playground","NoLabel","Label"],h=Object.freeze(Object.defineProperty({__proto__:null,Label:d,NoLabel:a,Playground:o,__namedExportsOrder:B,default:m},Symbol.toStringTag,{value:"Module"}));export{d as L,a as N,o as P,h as S};
