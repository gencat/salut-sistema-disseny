import{x as t}from"./iframe-D7EeAtJA.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .container--flex {
        display: flex;
        justify-content: flex-start;
        align-items: start;
        gap: 30px;
    }
    .container--dropdown {
        height: 330px;
    }
`,d={title:"Components/Angular/Timepicker",component:"dss-timepicker",argTypes:{label:{name:"Label"},inputSize:{name:"Input Size",control:{type:"radio"},options:["sm","md","lg"]},enableDropdown:{name:"Enable dropdown",control:{type:"boolean"}},dropdown:{name:"Dropdown type",control:{type:"radio"},options:["list","manual"],if:{arg:"enableDropdown",truthy:!0}},minutesRange:{name:"Minutes Range",control:{type:"number"},if:{arg:"enableDropdown"}},minHour:{name:"Min Hour",control:{type:"number"},if:{arg:"enableDropdown"}},maxHour:{name:"Max Hour",control:{type:"number"},if:{arg:"enableDropdown"}},helpText:{name:"Message for initial help"},errorTimeFormatText:{name:"Message for wrong time format"},errorTimeOptionText:{name:"Message for non-available time in dropdown",if:{arg:"enableDropdown"}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=737-187&m=dev"}},args:{label:"Label",enableDropdown:!1,inputSize:"lg",dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},render:e=>t`
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
        `},n={tags:["!dev"],render:()=>t`
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
        `,decorators:[i(r,"timepicker-style-default")]},a={tags:["!dev"],render:()=>t`
        <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker005">Label</label>

            <input slot="input" id="myTimepicker005" type="text"  maxlength="5" disabled />
        </dss-ng-timepicker>
    </div>
        `,decorators:[i(r,"timepicker-style-disabled")]},o={tags:["!dev"],render:()=>t`
         <div class="container--flex">
        <dss-ng-timepicker>
            <label slot="label" for="myTimepicker006">Label</label>

            <input slot="input" id="myTimepicker006" type="text"  maxlength="5" value="12:45" readonly />
        </dss-ng-timepicker>
    </div>
        `,decorators:[i(r,"timepicker-style-readonly")]},s={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(r,"timepicker-style-list")]},p={tags:["!dev"],render:()=>t`
    <div class="container--flex container--dropdown">
    <dss-ng-timepicker dropdown="list" customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" helpText="Help text.">
      <label slot="label" for="myTimepicker009">Label</label>

      <input slot="input" id="myTimepicker009" type="text"  maxlength="5" />
    </dss-ng-timepicker>
  </div>
    `,decorators:[i(r,"timepicker-style-custom-list")]},m={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(r,"timepicker-style-manual")]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-default')]
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-disabled')]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-readonly')]
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-list')]
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-custom-list')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(storiesStyle, 'timepicker-style-manual')]
}`,...m.parameters?.docs?.source}}};const c=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual"],b=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:n,CustomDropdownList:p,Disabled:a,DropdownList:s,DropdownManual:m,Playground:l,ReadOnly:o,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{n as B,p as C,a as D,l as P,o as R,b as S,s as a,m as b};
