import{x as a}from"./iframe-DNLJd-HG.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        gap: 24px;
    }

    .datepicker-canvas-blocked {
        min-height: 240px;
        align-items: center;
    }

    .datepicker-canvas--temps {
        min-height: 600px;
        align-items: flex-start;
    }

    .datepicker-canvas--botons {
        min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
        margin-left: 20px;
    }
`,b={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}},validationMin:{name:"Data mínima",control:{type:"text"},if:{arg:"validate"}},validationMax:{name:"Data màxima",control:{type:"text"},if:{arg:"validate"}},hasStepper:{name:"Amb stepper",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0,validationMin:"20/01/2024",validationMax:"20/12/2026",hasStepper:!1},render:e=>a`
      <div class="datepicker-canvas">
                <dss-datepicker
                    label=${e.label}
                    size=${e.size}
                    .helpText=${e.helpText}
                    ?invalid=${e.invalid}
                    ?validate=${e.validate}
                    .minDate=${e.validationMin}
                    .maxDate=${e.validationMax}
                    ?showTime=${e.showTime}
                    .timepicker=${e.timepickerSelector}
                    .minutesRange="${e.minutesRange}"
                    .minHour="${e.minHour}"
                    .maxHour="${e.maxHour}"
                    .leftLabel=${e.leftLabel}
                    .rightLabel=${e.rightLabel}
                    ?hasStepper=${e.hasStepper}
                >
                </dss-datepicker>
            </div>
        `},d={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker helpText="Help text" label="Data lg">
            </dss-datepicker>
            <dss-datepicker label="Data md" size="md" helpText="Help text">
            </dss-datepicker>
            <dss-datepicker label="Data sm" size="sm" helpText="Help text">
            </dss-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-sizes-style")]},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas datepicker-canvas-blocked">
                <dss-datepicker helpText="Help text" label="Data" disabled>
                </dss-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-disabled-style")]},n={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas datepicker-canvas-blocked">
                <dss-datepicker helpText="Help text" label="Data" readonly value="15/08/2024">
                </dss-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-readonly-style")]},c={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-datepicker helpText="Help text" label="Data" required>
                </dss-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-required-style")]},o={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-datepicker helpText="Help text" label="Data" invalid value="22/10/2034">
                </dss-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-invalid-style")]},p={tags:["!dev"],render:()=>a`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-datepicker 
                label="Data"
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
            </dss-datepicker>
            <dss-datepicker 
                label="Data"
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
            </dss-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-timepicker-style")]},m={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-datepicker>
            </div>
    `},u={tags:["!dev"],render:()=>{const e=new Date,s=e.getFullYear(),g=e.getMonth(),x=JSON.stringify([{date:`4/${g+1}/${s}`,type:"green"},{date:`15/${g+1}/${s}`,type:"yellow"},{date:`27/${g+1}/${s}`,type:"red"}]);return a`
     <div class="datepicker-canvas">
                <dss-datepicker 
                    label="Dates personalitzades"
                    customCalendar=${x}
                >
                </dss-datepicker>
            </div>
    `},decorators:[t(r,"datepicker-custom-calendar-style")]},v={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
            <dss-datepicker 
                label="Data"
                validate 
                minDate="20/01/2024" 
                maxDate="20/12/2026" 
                helpText="Min 20/01/2024 || Max 20/12/2026"
            >
            </dss-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-validation-style")]},k={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
            <dss-datepicker 
                label="Data"
                helpText="Help text."
                hasStepper
            >
            </dss-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-stepper-style")]},h={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=${()=>{const s=document.querySelector("#manual-focus-demo");s&&s.focus()}}></dss-button>
                <dss-datepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Missatge informatiu"
                >
                </dss-datepicker>
            </div>
        `,decorators:[t(r,"datepicker-focus-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    validate: true,
    validationMin: '20/01/2024',
    validationMax: '20/12/2026',
    hasStepper: false
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
                <dss-datepicker
                    label=\${args.label}
                    size=\${args.size}
                    .helpText=\${args.helpText}
                    ?invalid=\${args.invalid}
                    ?validate=\${args.validate}
                    .minDate=\${args.validationMin}
                    .maxDate=\${args.validationMax}
                    ?showTime=\${args.showTime}
                    .timepicker=\${args.timepickerSelector}
                    .minutesRange="\${args.minutesRange}"
                    .minHour="\${args.minHour}"
                    .maxHour="\${args.maxHour}"
                    .leftLabel=\${args.leftLabel}
                    .rightLabel=\${args.rightLabel}
                    ?hasStepper=\${args.hasStepper}
                >
                </dss-datepicker>
            </div>
        \`;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker helpText="Help text" label="Data lg">
            </dss-datepicker>
            <dss-datepicker label="Data md" size="md" helpText="Help text">
            </dss-datepicker>
            <dss-datepicker label="Data sm" size="sm" helpText="Help text">
            </dss-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-sizes-style')]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas datepicker-canvas-blocked">
                <dss-datepicker helpText="Help text" label="Data" disabled>
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-disabled-style')]
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas datepicker-canvas-blocked">
                <dss-datepicker helpText="Help text" label="Data" readonly value="15/08/2024">
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-readonly-style')]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="datepicker-canvas">
                <dss-datepicker helpText="Help text" label="Data" required>
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-required-style')]
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="datepicker-canvas">
                <dss-datepicker helpText="Help text" label="Data" invalid value="22/10/2034">
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-invalid-style')]
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-datepicker 
                label="Data"
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
            </dss-datepicker>
            <dss-datepicker 
                label="Data"
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
            </dss-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-timepicker-style')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-datepicker>
            </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    const customCalendar = JSON.stringify([{
      date: \`4/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'green'
    }, {
      date: \`15/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'yellow'
    }, {
      date: \`27/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'red'
    }]);
    return html\`
     <div class="datepicker-canvas">
                <dss-datepicker 
                    label="Dates personalitzades"
                    customCalendar=\${customCalendar}
                >
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-custom-calendar-style')]
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-datepicker 
                label="Data"
                validate 
                minDate="20/01/2024" 
                maxDate="20/12/2026" 
                helpText="Min 20/01/2024 || Max 20/12/2026"
            >
            </dss-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-validation-style')]
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-datepicker 
                label="Data"
                helpText="Help text."
                hasStepper
            >
            </dss-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-stepper-style')]
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-datepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Missatge informatiu"
                >
                </dss-datepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-focus-style')]
}`,...h.parameters?.docs?.source}}};const y=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation","Stepper","Focus"],f=Object.freeze(Object.defineProperty({__proto__:null,Buttons:m,CustomCalendar:u,Disabled:l,Focus:h,Invalid:o,Playground:i,ReadOnly:n,Required:c,Sizes:d,Stepper:k,Timepicker:p,Validation:v,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{u as C,l as D,h as F,o as I,i as P,n as R,f as S,p as T,v as V,d as a,c as b,k as c};
