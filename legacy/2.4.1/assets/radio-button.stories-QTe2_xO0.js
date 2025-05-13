import{x as a}from"./lit-html-B2eaWknC.js";const h={title:"Components/Radio Button",argTypes:{showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:o=>a`
            ${o.showLabel?a`
                            <dss-radio-button ?disabled=${o.disabled}>
                                <input slot="input" id="radioButton" type="radio" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                                <label slot="label" for="radioButton">
                                    ${o.label}
                                </label>
                            </dss-radio-button>	
                      `:a`
                    <dss-radio-button ?disabled=${o.disabled}>
                        <input slot="input" id="radioButton" type="radio" aria-label="Label" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                    </dss-radio-button>	
                `}
            
    `,args:{showLabel:!1,label:"Label",disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},e={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" value="Option1" name="myFormRadio1"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton2" type="radio" disabled value="Option1" name="myFormRadio2"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton3" type="radio" checked value="Option1" name="myFormRadio3"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton4" type="radio" checked disabled value="Option1" name="myFormRadio4"  />
                </dss-radio-button>
      </div>
    `},n={tags:["!dev"],render:()=>a`
            <div class="wrapper">
            <dss-radio-button>
                    <input slot="input" id="radioButton5" type="radio" value="Option1" name="myFormRadio5"/>
                    <label slot="label" for="radioButton5">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton6" type="radio" disabled value="Option1" name="myFormRadio6" />
                    <label slot="label" for="radioButton6">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton7" type="radio" checked value="Option1" name="myFormRadio7" />
                    <label slot="label" for="radioButton7">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton8" type="radio" checked disabled value="Option1" name="myFormRadio8" />
                    <label slot="label" for="radioButton8">
                        Label
                    </label>
                </dss-radio-button>	
      </div>
    `},d={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="myFormGroup1" type="radio" value="huey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup1">
                        Huey
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="myFormGroup2" type="radio" value="dewey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup2">
                        Dewey
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="myFormGroup3" type="radio" value="louie" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup3">
                        Louie
                    </label>
                </dss-radio-button>
      </div>
    `};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            \${args.showLabel ? html\`
                            <dss-radio-button ?disabled=\${args.disabled}>
                                <input slot="input" id="radioButton" type="radio" ?disabled=\${args.disabled} ?checked=\${args.checked} value="Option1" name="myFormRadio" />
                                <label slot="label" for="radioButton">
                                    \${args.label}
                                </label>
                            </dss-radio-button>	
                      \` : html\`
                    <dss-radio-button ?disabled=\${args.disabled}>
                        <input slot="input" id="radioButton" type="radio" aria-label="Label" ?disabled=\${args.disabled} ?checked=\${args.checked} value="Option1" name="myFormRadio" />
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,u,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="radioButton1" type="radio" value="Option1" name="myFormRadio1"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton2" type="radio" disabled value="Option1" name="myFormRadio2"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton3" type="radio" checked value="Option1" name="myFormRadio3"  />
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton4" type="radio" checked disabled value="Option1" name="myFormRadio4"  />
                </dss-radio-button>
      </div>
    \`;
  }
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,m,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
            <dss-radio-button>
                    <input slot="input" id="radioButton5" type="radio" value="Option1" name="myFormRadio5"/>
                    <label slot="label" for="radioButton5">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton6" type="radio" disabled value="Option1" name="myFormRadio6" />
                    <label slot="label" for="radioButton6">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="radioButton7" type="radio" checked value="Option1" name="myFormRadio7" />
                    <label slot="label" for="radioButton7">
                        Label
                    </label>
                </dss-radio-button>
                <dss-radio-button disabled>
                    <input slot="input" id="radioButton8" type="radio" checked disabled value="Option1" name="myFormRadio8" />
                    <label slot="label" for="radioButton8">
                        Label
                    </label>
                </dss-radio-button>	
      </div>
    \`;
  }
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var c,v,F;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-radio-button>
                    <input slot="input" id="myFormGroup1" type="radio" value="huey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup1">
                        Huey
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="myFormGroup2" type="radio" value="dewey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup2">
                        Dewey
                    </label>
                </dss-radio-button>
                <dss-radio-button>
                    <input slot="input" id="myFormGroup3" type="radio" value="louie" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup3">
                        Louie
                    </label>
                </dss-radio-button>
      </div>
    \`;
  }
}`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const B=["Playground","NoLabel","Label","Group"],g=Object.freeze(Object.defineProperty({__proto__:null,Group:d,Label:n,NoLabel:e,Playground:t,__namedExportsOrder:B,default:h},Symbol.toStringTag,{value:"Module"}));export{d as G,n as L,e as N,t as P,g as S};
