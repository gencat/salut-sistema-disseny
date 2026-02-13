import{x as t}from"./iframe-DLVb3rJw.js";const p={title:"Components/Angular/Timepicker",component:"dss-timepicker",argTypes:{label:{name:"Label"},inputSize:{name:"Input Size",control:{type:"radio"},options:["sm","md","lg"]},enableDropdown:{name:"Enable dropdown",control:{type:"boolean"}},dropdown:{name:"Dropdown type",control:{type:"radio"},options:["list","manual"],if:{arg:"enableDropdown",truthy:!0}},minutesRange:{name:"Minutes Range",control:{type:"number"},if:{arg:"enableDropdown"}},minHour:{name:"Min Hour",control:{type:"number"},if:{arg:"enableDropdown"}},maxHour:{name:"Max Hour",control:{type:"number"},if:{arg:"enableDropdown"}},helpText:{name:"Message for initial help"},errorTimeFormatText:{name:"Message for wrong time format"},errorTimeOptionText:{name:"Message for non-available time in dropdown",if:{arg:"enableDropdown"}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=737-187&m=dev"}},args:{label:"Label",enableDropdown:!1,inputSize:"lg",dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},render:e=>t`
            <div style="max-width:280px; height: 330px;">
                ${e.enableDropdown?t`
                            <dss-ng-timepicker
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
                            </dss-ng-timepicker>
                        `:t`
                            <dss-ng-timepicker
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
                            </dss-ng-timepicker>
                        `}
            </div>
        `},i={tags:["!dev"],render:()=>t`
        <div class="container--flex">
            <dss-ng-timepicker>
                <label slot="label" for="timepickerLG">Label</label>
                <input slot="input" id="timepickerLG" type="text"  maxlength="5" />
            </dss-ng-timepicker>
            <dss-ng-timepicker inputSize="md" >
                <label slot="label" for="timepickerMD">Label</label>
                <input slot="input" id="timepickerMD" type="text"  maxlength="5" />
            </dss-ng-timepicker>
            <dss-ng-timepicker inputSize="sm" >
                <label slot="label" for="timepickerSM">Label</label>
                <input slot="input" id="timepickerSM" type="text"  maxlength="5" />
            </dss-ng-timepicker>
    </div>
        `},r={tags:["!dev"],render:()=>t`
        <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker005">Label</label>

            <input slot="input" id="myTimepicker005" type="text"  maxlength="5" disabled />
        </dss-ng-timepicker>
    </div>
        `},a={tags:["!dev"],render:()=>t`
         <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker006">Label</label>

            <input slot="input" id="myTimepicker006" type="text"  maxlength="5" value="12:45" readonly />
        </dss-ng-timepicker>
    </div>
        `},l={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="list">
      <label slot="label" for="myTimepicker007">Label</label>

      <input slot="input" id="myTimepicker007" type="text"  maxlength="5" />
    </dss-ng-timepicker>

    <dss-ng-timepicker dropdown="list" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker008">Label</label>

      <input slot="input" id="myTimepicker008" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    `},o={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="list" customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" helpText="Help text.">
      <label slot="label" for="myTimepicker009">Label</label>

      <input slot="input" id="myTimepicker009" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    `},s={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="manual">
      <label slot="label" for="myTimepicker010">Label</label>

      <input slot="input" id="myTimepicker010" type="text"  maxlength="5" />
    </dss-ng-timepicker>

    <dss-ng-timepicker dropdown="manual" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker011">Label</label>

      <input slot="input" id="myTimepicker011" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=737-187&m=dev'
    }
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
  render: (args: any) => {
    return html\`
            <div style="max-width:280px; height: 330px;">
                \${args.enableDropdown ? html\`
                            <dss-ng-timepicker
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
                            </dss-ng-timepicker>
                        \` : html\`
                            <dss-ng-timepicker
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
                            </dss-ng-timepicker>
                        \`}
            </div>
        \`;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex">
            <dss-ng-timepicker>
                <label slot="label" for="timepickerLG">Label</label>
                <input slot="input" id="timepickerLG" type="text"  maxlength="5" />
            </dss-ng-timepicker>
            <dss-ng-timepicker inputSize="md" >
                <label slot="label" for="timepickerMD">Label</label>
                <input slot="input" id="timepickerMD" type="text"  maxlength="5" />
            </dss-ng-timepicker>
            <dss-ng-timepicker inputSize="sm" >
                <label slot="label" for="timepickerSM">Label</label>
                <input slot="input" id="timepickerSM" type="text"  maxlength="5" />
            </dss-ng-timepicker>
    </div>
        \`;
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker005">Label</label>

            <input slot="input" id="myTimepicker005" type="text"  maxlength="5" disabled />
        </dss-ng-timepicker>
    </div>
        \`;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
         <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker006">Label</label>

            <input slot="input" id="myTimepicker006" type="text"  maxlength="5" value="12:45" readonly />
        </dss-ng-timepicker>
    </div>
        \`;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="list">
      <label slot="label" for="myTimepicker007">Label</label>

      <input slot="input" id="myTimepicker007" type="text"  maxlength="5" />
    </dss-ng-timepicker>

    <dss-ng-timepicker dropdown="list" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker008">Label</label>

      <input slot="input" id="myTimepicker008" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="list" customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" helpText="Help text.">
      <label slot="label" for="myTimepicker009">Label</label>

      <input slot="input" id="myTimepicker009" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="manual">
      <label slot="label" for="myTimepicker010">Label</label>

      <input slot="input" id="myTimepicker010" type="text"  maxlength="5" />
    </dss-ng-timepicker>

    <dss-ng-timepicker dropdown="manual" errorTimeOptionText="Option not available" helpText="Help text." minHour="8" maxHour="18" minutesRange="15">
      <label slot="label" for="myTimepicker011">Label</label>

      <input slot="input" id="myTimepicker011" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const m=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual"],x=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:i,CustomDropdownList:o,Disabled:r,DropdownList:l,DropdownManual:s,Playground:n,ReadOnly:a,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{i as B,o as C,r as D,n as P,a as R,x as S,l as a,s as b};
