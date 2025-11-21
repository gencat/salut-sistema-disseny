import{x as t}from"./lit-html-D6cejpwM.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const l=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`,g={title:"Components/Radio Button",argTypes:{showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:o=>t`
            ${o.showLabel?t`
                            <dss-radio-button ?disabled=${o.disabled}>
                                <input slot="input" id="radioButton" type="radio" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                                <label slot="label" for="radioButton">
                                    ${o.label}
                                </label>
                            </dss-radio-button>	
                      `:t`
                    <dss-radio-button ?disabled=${o.disabled}>
                        <input slot="input" id="radioButton" type="radio" aria-label="Label" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                    </dss-radio-button>	
                `}
            
    `,args:{showLabel:!1,label:"Label",disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},e={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(l,"radio-no-label-style")]},d={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(l,"radio-label-style")]},r={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(l,"radio-group-style")]};var s,n,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(n=a.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var p,b,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'radio-no-label-style')]
}`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var y,c,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'radio-label-style')]
}`,...(v=(c=d.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var F,h,f;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Playground","NoLabel","Label","Group"],O=Object.freeze(Object.defineProperty({__proto__:null,Group:r,Label:d,NoLabel:e,Playground:a,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{r as G,d as L,e as N,a as P,O as S};
