import{x as e}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
    min-height: 350px;
    display: flex;
    justify-content: flex-start;
  }
  dss-datepicker-range {
    height: fit-content;
  } 

  .datepicker-canvas--botons {
    min-height: 420px;
  }

  dss-datepicker + dss-datepicker {
    margin-left: 20px;
  }
`,y={title:"Components/Angular/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:a=>e`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range
          inputSize=${a.size}
          .helpText=${a.helpText}
          ?invalid=${a.invalid}
          ?showButtons=${a.showButtons}
          .iconRangeStart=${a.iconRangeStart}
          .iconRangeEnd=${a.iconRangeEnd}
          .calendarLeftButtonLabel=${a.leftLabel}
          .calendarRightButtonLabel=${a.rightLabel}
        >
          <label slot="label-range-start" for="myDatepickerRangeStart">${a.labelStart}</label>
          <input slot="input-range-start" id="myDatepickerRangeStart" type="text" >
          <label slot="label-range-end" for="myDatepickerRangeEnd">${a.labelEnd}</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd" type="text" >
        </dss-ng-datepicker-range>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-ng-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-ng-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},s={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-ng-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>e`
      <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-ng-datepicker-range>
    `,decorators:[t(r,"datepicker-range-disabled-style")]},p={tags:["!dev"],render:()=>e`
      <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-ng-datepicker-range>
    `,decorators:[t(r,"datepicker-range-readonly-style")]},o={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
    <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-ng-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-required-style")]},c={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
     <dss-ng-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-invalid-style")]},g={tags:["!dev"],render:()=>e`
       <div class="datepicker-canvas">
    <dss-ng-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-buttons-style")]},u={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="lg" helpText="Help text." customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-ng-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-custom-calendar-style")]},m={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
     <dss-ng-datepicker-range validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
      <label slot="label-range-start" for="daterangeValidationStart">Data inicial</label>
      <input slot="input-range-start" id="daterangeValidationStart" type="text"  />
      <label slot="label-range-end" for="daterangeValidationEnd">Data final</label>
      <input slot="input-range-end" id="daterangeValidationEnd" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-validation-style")]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev'
    }
  },
  args: {
    size: 'md',
    labelStart: 'Data inici',
    labelEnd: 'Data fi',
    iconRangeStart: 'calendar_month',
    iconRangeEnd: 'calendar_month',
    helpText: 'Help text.',
    invalid: false,
    showButtons: false,
    leftLabel: 'Cancel·lar',
    rightLabel: 'Acceptar'
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range
          inputSize=\${args.size}
          .helpText=\${args.helpText}
          ?invalid=\${args.invalid}
          ?showButtons=\${args.showButtons}
          .iconRangeStart=\${args.iconRangeStart}
          .iconRangeEnd=\${args.iconRangeEnd}
          .calendarLeftButtonLabel=\${args.leftLabel}
          .calendarRightButtonLabel=\${args.rightLabel}
        >
          <label slot="label-range-start" for="myDatepickerRangeStart">\${args.labelStart}</label>
          <input slot="input-range-start" id="myDatepickerRangeStart" type="text" >
          <label slot="label-range-end" for="myDatepickerRangeEnd">\${args.labelEnd}</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd" type="text" >
        </dss-ng-datepicker-range>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-ng-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-ng-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-ng-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-ng-datepicker-range>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-disabled-style')]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-ng-datepicker-range>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-readonly-style')]
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
    <dss-ng-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-ng-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-required-style')]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-ng-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-invalid-style')]
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="datepicker-canvas">
    <dss-ng-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-buttons-style')]
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-ng-datepicker-range inputsize="lg" helpText="Help text." customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-ng-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-custom-calendar-style')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-ng-datepicker-range validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
      <label slot="label-range-start" for="daterangeValidationStart">Data inicial</label>
      <input slot="input-range-start" id="daterangeValidationStart" type="text"  />
      <label slot="label-range-end" for="daterangeValidationEnd">Data final</label>
      <input slot="input-range-end" id="daterangeValidationEnd" type="text"  />
    </dss-ng-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-validation-style')]
}`,...m.parameters?.docs?.source}}};const b=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],S=Object.freeze(Object.defineProperty({__proto__:null,Buttons:g,CustomCalendar:u,Disabled:d,Invalid:c,Playground:n,Readonly:p,Required:o,SizeLG:l,SizeMD:i,SizeSM:s,Validation:m,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{g as B,d as D,c as I,n as P,p as R,S,m as V,l as a,i as b,s as c,o as d};
