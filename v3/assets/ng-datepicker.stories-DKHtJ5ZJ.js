import{x as t}from"./iframe-DLVb3rJw.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
    }

    .datepicker-canvas--temps {
        min-height: 700px;
    }

    .datepicker-canvas--botons {
        min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
        margin-left: 20px;
    }
`,k={title:"Components/Angular/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0},render:e=>t`
      <div class="datepicker-canvas">
          <dss-ng-datepicker
            inputSize=${e.size}
            .helpText=${e.helpText}
            ?invalid=${e.invalid}
                        ?validate=${e.validate}
            ?showTime=${e.showTime}
            .timepicker=${e.timepickerSelector}
            .minutesRange="${e.minutesRange}"
            .minHour="${e.minHour}"
            .maxHour="${e.maxHour}"
            .leftLabel=${e.leftLabel}
            .rightLabel=${e.rightLabel}
          >
            <label slot="label" for="myDatepicker">${e.label}</label>
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-ng-datepicker>
        </div>
      `},s={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-ng-datepicker helpText="Help text">
                <label slot="label" for="datepickerLG">Data</label>
                <input slot="input" id="datepickerLG" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker inputSize="md" helpText="Help text">
                <label slot="label" for="datepickerMD">Data</label>
                <input slot="input" id="datepickerMD" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker inputSize="sm" helpText="Help text">
                <label slot="label" for="datepickerSM">Data</label>
                <input slot="input" id="datepickerSM" type="text"  />
            </dss-ng-datepicker>
        </div>
    `,decorators:[a(r,"datepicker-sizes-style")]},l={tags:["!dev"],render:()=>t`
    <dss-ng-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-ng-datepicker>
    `,decorators:[a(r,"datepicker-disabled-style")]},d={tags:["!dev"],render:()=>t`
     <dss-ng-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-ng-datepicker>
    `,decorators:[a(r,"datepicker-readonly-style")]},p={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-ng-datepicker>
        <label slot="label" for="datepickerRequired">Data</label>
        <input slot="input" id="datepickerRequired" type="text"  required />
    </dss-ng-datepicker>
  </div>
    `,decorators:[a(r,"datepicker-required-style")]},n={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-ng-datepicker invalid>
        <label slot="label" for="datepickerInvalid">Data</label>
        <input slot="input" id="datepickerInvalid" type="text"  />
    </dss-ng-datepicker>
  </div>
    `,decorators:[a(r,"datepicker-invalid-style")]},o={tags:["!dev"],render:()=>t`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-ng-datepicker 
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
                    <label slot="label" for="datepickerTimeList">Data</label>
                    <input slot="input" id="datepickerTimeList" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker 
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
                    <label slot="label" for="datepickerTimeManual">Data</label>
                    <input slot="input" id="datepickerTimeManual" type="text" />
            </dss-ng-datepicker>
        </div>
    `,decorators:[a(r,"datepicker-timepicker-style")]},c={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-ng-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="datepickerButtons">Data</label>
        <input slot="input" id="datepickerButtons" type="text"  />
    </dss-ng-datepicker>
  </div>
    `},u={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
                <dss-ng-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Dates personalitzades</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-ng-datepicker>
            </div>
    `,decorators:[a(r,"datepicker-custom-calendar-style")]},m={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
            <dss-ng-datepicker validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
                <label slot="label" for="dpValidation">Data</label>
                <input slot="input" id="dpValidation" type="text"  />
            </dss-ng-datepicker>
        </div>
    `,decorators:[a(r,"datepicker-validation-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev'
    }
  },
  args: {
    size: 'lg',
    label: 'Data',
    helpText: 'Help text.',
    invalid: false,
    showTime: false,
    timepickerSelector: 'manual',
    minutesRange: 1,
    minHour: 0,
    maxHour: 23,
    leftLabel: 'Cancel·lar',
    rightLabel: 'Acceptar',
    validate: true
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
          <dss-ng-datepicker
            inputSize=\${args.size}
            .helpText=\${args.helpText}
            ?invalid=\${args.invalid}
                        ?validate=\${args.validate}
            ?showTime=\${args.showTime}
            .timepicker=\${args.timepickerSelector}
            .minutesRange="\${args.minutesRange}"
            .minHour="\${args.minHour}"
            .maxHour="\${args.maxHour}"
            .leftLabel=\${args.leftLabel}
            .rightLabel=\${args.rightLabel}
          >
            <label slot="label" for="myDatepicker">\${args.label}</label>
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-ng-datepicker>
        </div>
      \`;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-ng-datepicker helpText="Help text">
                <label slot="label" for="datepickerLG">Data</label>
                <input slot="input" id="datepickerLG" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker inputSize="md" helpText="Help text">
                <label slot="label" for="datepickerMD">Data</label>
                <input slot="input" id="datepickerMD" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker inputSize="sm" helpText="Help text">
                <label slot="label" for="datepickerSM">Data</label>
                <input slot="input" id="datepickerSM" type="text"  />
            </dss-ng-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-sizes-style')]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-ng-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-ng-datepicker>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-disabled-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-ng-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-ng-datepicker>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-readonly-style')]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-ng-datepicker>
        <label slot="label" for="datepickerRequired">Data</label>
        <input slot="input" id="datepickerRequired" type="text"  required />
    </dss-ng-datepicker>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-required-style')]
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-ng-datepicker invalid>
        <label slot="label" for="datepickerInvalid">Data</label>
        <input slot="input" id="datepickerInvalid" type="text"  />
    </dss-ng-datepicker>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-invalid-style')]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-ng-datepicker 
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
                    <label slot="label" for="datepickerTimeList">Data</label>
                    <input slot="input" id="datepickerTimeList" type="text"  />
            </dss-ng-datepicker>
            <dss-ng-datepicker 
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
                    <label slot="label" for="datepickerTimeManual">Data</label>
                    <input slot="input" id="datepickerTimeManual" type="text" />
            </dss-ng-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-timepicker-style')]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-ng-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="datepickerButtons">Data</label>
        <input slot="input" id="datepickerButtons" type="text"  />
    </dss-ng-datepicker>
  </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
                <dss-ng-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Dates personalitzades</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-ng-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-custom-calendar-style')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-ng-datepicker validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
                <label slot="label" for="dpValidation">Data</label>
                <input slot="input" id="dpValidation" type="text"  />
            </dss-ng-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-validation-style')]
}`,...m.parameters?.docs?.source}}};const g=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation"],y=Object.freeze(Object.defineProperty({__proto__:null,Buttons:c,CustomCalendar:u,Disabled:l,Invalid:n,Playground:i,ReadOnly:d,Required:p,Sizes:s,Timepicker:o,Validation:m,__namedExportsOrder:g,default:k},Symbol.toStringTag,{value:"Module"}));export{l as D,n as I,i as P,d as R,y as S,o as T,m as V,s as a,p as b};
