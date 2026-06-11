import{x as a}from"./iframe-PL0KlCAr.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
        gap: 24px;
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
`,h={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range
                    .labelRangeStart=${e.labelStart}
                    .labelRangeEnd=${e.labelEnd}
                    size=${e.size}
                    .helpText=${e.helpText}
                    ?invalid=${e.invalid}
                    ?showButtons=${e.showButtons}
                    .iconRangeStart=${e.iconRangeStart}
                    .iconRangeEnd=${e.iconRangeEnd}
                    .calendarLeftButtonLabel=${e.leftLabel}
                    .calendarRightButtonLabel=${e.rightLabel}
                >
                </dss-datepicker-range>
            </div>
        `},s={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>a`
            <dss-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        `,decorators:[t(r,"datepicker-range-disabled-style")]},c={tags:["!dev"],render:()=>a`
            <dss-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        `,decorators:[t(r,"datepicker-range-readonly-style")]},o={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    required
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-required-style")]},p={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    invalid
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-invalid-style")]},g={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    showButtons
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                    calendarLeftButtonLabel="Cancel" 
                    calendarRightButtonLabel="Accept"
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-buttons-style")]},u={tags:["!dev"],render:()=>{const e=new Date,v=e.getFullYear(),k=e.getMonth(),b=JSON.stringify([{date:`4/${k+1}/${v}`,type:"green"},{date:`14/${k+1}/${v}`,type:"yellow"},{date:`27/${k+1}/${v}`,type:"red"}]);return a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    customCalendar='${b}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `},decorators:[t(r,"datepicker-range-custom-calendar-style")]},m={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    validate 
                    minDate="20/01/2024" 
                    maxDate="20/12/2026" 
                    helpText="Min 20/01/2024 || Max 20/12/2026"
                >
                </dss-datepicker-range>
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
                <dss-datepicker-range
                    .labelRangeStart=\${args.labelStart}
                    .labelRangeEnd=\${args.labelEnd}
                    size=\${args.size}
                    .helpText=\${args.helpText}
                    ?invalid=\${args.invalid}
                    ?showButtons=\${args.showButtons}
                    .iconRangeStart=\${args.iconRangeStart}
                    .iconRangeEnd=\${args.iconRangeEnd}
                    .calendarLeftButtonLabel=\${args.leftLabel}
                    .calendarRightButtonLabel=\${args.rightLabel}
                >
                </dss-datepicker-range>
            </div>
        \`;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-disabled-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-readonly-style')]
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    required
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-required-style')]
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    invalid
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-invalid-style')]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    showButtons
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                    calendarLeftButtonLabel="Cancel" 
                    calendarRightButtonLabel="Accept"
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-buttons-style')]
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    const customCalendar = JSON.stringify([{
      date: \`4/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'green'
    }, {
      date: \`14/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'yellow'
    }, {
      date: \`27/\${currentMonthIndex + 1}/\${currentYear}\`,
      type: 'red'
    }]);
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    customCalendar='\${customCalendar}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-custom-calendar-style')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    validate 
                    minDate="20/01/2024" 
                    maxDate="20/12/2026" 
                    helpText="Min 20/01/2024 || Max 20/12/2026"
                >
                </dss-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-validation-style')]
}`,...m.parameters?.docs?.source}}};const S=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],x=Object.freeze(Object.defineProperty({__proto__:null,Buttons:g,CustomCalendar:u,Disabled:i,Invalid:p,Playground:n,Readonly:c,Required:o,SizeLG:s,SizeMD:l,SizeSM:d,Validation:m,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{g as B,u as C,i as D,p as I,n as P,c as R,x as S,m as V,s as a,l as b,d as c,o as d};
