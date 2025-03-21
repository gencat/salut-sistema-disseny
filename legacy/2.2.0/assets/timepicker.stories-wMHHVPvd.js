import{x as t}from"./lit-html-B2eaWknC.js";const z={title:"Components/Timepicker",argTypes:{label:{name:"Label"},inputSize:{name:"Input Size",control:{type:"radio"},options:["md","lg"]},enableDropdown:{name:"Enable dropdown",control:{type:"boolean"}},dropdown:{name:"Dropdown type",control:{type:"radio"},options:["list","manual"],if:{arg:"enableDropdown",truthy:!0}},minutesRange:{name:"Minutes Range",control:{type:"number"},if:{arg:"enableDropdown"}},minHour:{name:"Min Hour",control:{type:"number"},if:{arg:"enableDropdown"}},maxHour:{name:"Max Hour",control:{type:"number"},if:{arg:"enableDropdown"}},helpText:{name:"Message for initial help"},errorTimeFormatText:{name:"Message for wrong time format"},errorTimeOptionText:{name:"Message for non-available time in dropdown",if:{arg:"enableDropdown"}}}},i={render:e=>t`
      <div style="max-width:280px; height: 330px;">
        ${e.enableDropdown?t`
              <dss-timepicker
                inputSize="${e.inputSize}"
                dropdown="${e.dropdown}"
                minutesRange="${e.minutesRange}"
                minHour="${e.minHour}"
                maxHour="${e.maxHour}"
                helpText="${e.helpText}"
                errorTimeFormatText="${e.errorTimeFormatText}"
                errorTimeOptionText="${e.errorTimeOptionText}"
              >
                <label slot="label" for="myTimepickerList">${e.label}</label>
                <input
                  slot="input"
                  id="myTimepickerList"
                  type="text"
                  maxlength="5"
                />
              </dss-timepicker>
            `:t`
              <dss-timepicker
                inputSize="${e.inputSize}"
                helpText="${e.helpText}"
                errorTimeFormatText="${e.errorTimeFormatText}"
              >
                <label slot="label" for="myTimepickerList">${e.label}</label>
                <input
                  slot="input"
                  id="myTimepickerList"
                  type="text"
                  maxlength="5"
                />
              </dss-timepicker>
            `}
      </div>
    `,args:{label:"Label",enableDropdown:!1,inputSize:"lg",dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=737-187&m=dev"}}},n={tags:["!dev"],render:()=>t`
    <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker001">Label</label>

      <input slot="input" id="myTimepicker001" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker helpText="Help text.">
      <label slot="label" for="myTimepicker002">Label</label>

      <input slot="input" id="myTimepicker002" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker inputSize="md">
      <label slot="label" for="myTimepicker003">Label</label>

      <input slot="input" id="myTimepicker003" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker inputSize="md" helpText="Help text.">
      <label slot="label" for="myTimepicker004">Label</label>

      <input slot="input" id="myTimepicker004" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    `},r={tags:["!dev"],render:()=>t`
    <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker005">Label</label>

      <input slot="input" id="myTimepicker005" type="text"  maxlength="5" disabled />
    </dss-timepicker>
  </div>
    `},l={tags:["!dev"],render:()=>t`
     <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker006">Label</label>

      <input slot="input" id="myTimepicker006" type="text"  maxlength="5" value="12:45" readonly />
    </dss-timepicker>
  </div>
    `},a={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="list">
      <label slot="label" for="myTimepicker007">Label</label>

      <input slot="input" id="myTimepicker007" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker dropdown="list" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker008">Label</label>

      <input slot="input" id="myTimepicker008" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    `},o={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="list" customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" helpText="Help text.">
      <label slot="label" for="myTimepicker009">Label</label>

      <input slot="input" id="myTimepicker009" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    `},s={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="manual">
      <label slot="label" for="myTimepicker010">Label</label>

      <input slot="input" id="myTimepicker010" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker dropdown="manual" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker011">Label</label>

      <input slot="input" id="myTimepicker011" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    `};var p,m,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <div style="max-width:280px; height: 330px;">
        \${args.enableDropdown ? html\`
              <dss-timepicker
                inputSize="\${args.inputSize}"
                dropdown="\${args.dropdown}"
                minutesRange="\${args.minutesRange}"
                minHour="\${args.minHour}"
                maxHour="\${args.maxHour}"
                helpText="\${args.helpText}"
                errorTimeFormatText="\${args.errorTimeFormatText}"
                errorTimeOptionText="\${args.errorTimeOptionText}"
              >
                <label slot="label" for="myTimepickerList">\${args.label}</label>
                <input
                  slot="input"
                  id="myTimepickerList"
                  type="text"
                  maxlength="5"
                />
              </dss-timepicker>
            \` : html\`
              <dss-timepicker
                inputSize="\${args.inputSize}"
                helpText="\${args.helpText}"
                errorTimeFormatText="\${args.errorTimeFormatText}"
              >
                <label slot="label" for="myTimepickerList">\${args.label}</label>
                <input
                  slot="input"
                  id="myTimepickerList"
                  type="text"
                  maxlength="5"
                />
              </dss-timepicker>
            \`}
      </div>
    \`;
  },
  args: {
    label: 'Label',
    enableDropdown: false,
    inputSize: 'lg',
    dropdown: 'list',
    minutesRange: 1,
    minHour: 0,
    maxHour: 23,
    helpText: 'Help text.',
    errorTimeFormatText: 'Format not valid.',
    errorTimeOptionText: 'Option not available.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=737-187&m=dev'
    }
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var x,c,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker001">Label</label>

      <input slot="input" id="myTimepicker001" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker helpText="Help text.">
      <label slot="label" for="myTimepicker002">Label</label>

      <input slot="input" id="myTimepicker002" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker inputSize="md">
      <label slot="label" for="myTimepicker003">Label</label>

      <input slot="input" id="myTimepicker003" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker inputSize="md" helpText="Help text.">
      <label slot="label" for="myTimepicker004">Label</label>

      <input slot="input" id="myTimepicker004" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,T,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker005">Label</label>

      <input slot="input" id="myTimepicker005" type="text"  maxlength="5" disabled />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,g,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="container--flex">
    <dss-timepicker>
      <label slot="label" for="myTimepicker006">Label</label>

      <input slot="input" id="myTimepicker006" type="text"  maxlength="5" value="12:45" readonly />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,f,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="list">
      <label slot="label" for="myTimepicker007">Label</label>

      <input slot="input" id="myTimepicker007" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker dropdown="list" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker008">Label</label>

      <input slot="input" id="myTimepicker008" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var L,H,S;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="list" customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" helpText="Help text.">
      <label slot="label" for="myTimepicker009">Label</label>

      <input slot="input" id="myTimepicker009" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(S=(H=o.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var $,D,O;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-timepicker dropdown="manual">
      <label slot="label" for="myTimepicker010">Label</label>

      <input slot="input" id="myTimepicker010" type="text"  maxlength="5" />
    </dss-timepicker>

    <dss-timepicker dropdown="manual" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker011">Label</label>

      <input slot="input" id="myTimepicker011" type="text"  maxlength="5" />
    </dss-timepicker>
  </div>
    \`;
  }
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const F=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual"],M=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:n,CustomDropdownList:o,Disabled:r,DropdownList:a,DropdownManual:s,Playground:i,ReadOnly:l,__namedExportsOrder:F,default:z},Symbol.toStringTag,{value:"Module"}));export{n as B,o as C,r as D,i as P,l as R,M as S,a,s as b};
