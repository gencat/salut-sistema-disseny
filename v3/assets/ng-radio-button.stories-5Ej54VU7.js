import{x as t}from"./iframe-CdZ_4rdx.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`,l={title:"Components/Angular/Radio Button",argTypes:{showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:o=>t`
            ${o.showLabel?t`
                            <dss-ng-radio-button ?disabled=${o.disabled}>
                                <input slot="input" id="radioButton" type="radio" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                                <label slot="label" for="radioButton">
                                    ${o.label}
                                </label>
                            </dss-ng-radio-button>	
                      `:t`
                    <dss-ng-radio-button ?disabled=${o.disabled}>
                        <input slot="input" id="radioButton" type="radio" aria-label="Label" ?disabled=${o.disabled} ?checked=${o.checked} value="Option1" name="myFormRadio" />
                    </dss-ng-radio-button>	
                `}
            
    `,args:{showLabel:!1,label:"Label",disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},e={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton1" type="radio" value="Option1" name="myFormRadio1"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton2" type="radio" disabled value="Option1" name="myFormRadio2"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton3" type="radio" checked value="Option1" name="myFormRadio3"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton4" type="radio" checked disabled value="Option1" name="myFormRadio4"  />
                </dss-ng-radio-button>
      </div>
    `,decorators:[n(i,"radio-no-label-style")]},d={tags:["!dev"],render:()=>t`
            <div class="wrapper">
            <dss-ng-radio-button>
                    <input slot="input" id="radioButton5" type="radio" value="Option1" name="myFormRadio5"/>
                    <label slot="label" for="radioButton5">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button disabled>
                    <input slot="input" id="radioButton6" type="radio" disabled value="Option1" name="myFormRadio6" />
                    <label slot="label" for="radioButton6">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton7" type="radio" checked value="Option1" name="myFormRadio7" />
                    <label slot="label" for="radioButton7">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button disabled>
                    <input slot="input" id="radioButton8" type="radio" checked disabled value="Option1" name="myFormRadio8" />
                    <label slot="label" for="radioButton8">
                        Label
                    </label>
                </dss-ng-radio-button>	
      </div>
    `,decorators:[n(i,"radio-label-style")]},r={tags:["!dev"],render:()=>t`
            <div class="wrapper">
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup1" type="radio" value="huey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup1">
                        Huey
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup2" type="radio" value="dewey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup2">
                        Dewey
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup3" type="radio" value="louie" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup3">
                        Louie
                    </label>
                </dss-ng-radio-button>
      </div>
    `,decorators:[n(i,"radio-group-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            \${args.showLabel ? html\`
                            <dss-ng-radio-button ?disabled=\${args.disabled}>
                                <input slot="input" id="radioButton" type="radio" ?disabled=\${args.disabled} ?checked=\${args.checked} value="Option1" name="myFormRadio" />
                                <label slot="label" for="radioButton">
                                    \${args.label}
                                </label>
                            </dss-ng-radio-button>	
                      \` : html\`
                    <dss-ng-radio-button ?disabled=\${args.disabled}>
                        <input slot="input" id="radioButton" type="radio" aria-label="Label" ?disabled=\${args.disabled} ?checked=\${args.checked} value="Option1" name="myFormRadio" />
                    </dss-ng-radio-button>	
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
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton1" type="radio" value="Option1" name="myFormRadio1"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton2" type="radio" disabled value="Option1" name="myFormRadio2"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton3" type="radio" checked value="Option1" name="myFormRadio3"  />
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton4" type="radio" checked disabled value="Option1" name="myFormRadio4"  />
                </dss-ng-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-no-label-style')]
}`,...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
            <dss-ng-radio-button>
                    <input slot="input" id="radioButton5" type="radio" value="Option1" name="myFormRadio5"/>
                    <label slot="label" for="radioButton5">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button disabled>
                    <input slot="input" id="radioButton6" type="radio" disabled value="Option1" name="myFormRadio6" />
                    <label slot="label" for="radioButton6">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="radioButton7" type="radio" checked value="Option1" name="myFormRadio7" />
                    <label slot="label" for="radioButton7">
                        Label
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button disabled>
                    <input slot="input" id="radioButton8" type="radio" checked disabled value="Option1" name="myFormRadio8" />
                    <label slot="label" for="radioButton8">
                        Label
                    </label>
                </dss-ng-radio-button>	
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-label-style')]
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup1" type="radio" value="huey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup1">
                        Huey
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup2" type="radio" value="dewey" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup2">
                        Dewey
                    </label>
                </dss-ng-radio-button>
                <dss-ng-radio-button>
                    <input slot="input" id="myFormGroup3" type="radio" value="louie" name="myFormGroup"/>
                    <label slot="label" for="myFormGroup3">
                        Louie
                    </label>
                </dss-ng-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...r.parameters?.docs?.source}}};const s=["Playground","NoLabel","Label","Group"],b=Object.freeze(Object.defineProperty({__proto__:null,Group:r,Label:d,NoLabel:e,Playground:a,__namedExportsOrder:s,default:l},Symbol.toStringTag,{value:"Module"}));export{r as G,d as L,e as N,a as P,b as S};
