import{x as a}from"./iframe-DHQWIC1_.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,h={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
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
        `},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},c={tags:["!dev"],render:()=>a`
            <dss-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        `,decorators:[t(r,"datepicker-range-disabled-style")]},o={tags:["!dev"],render:()=>a`
            <dss-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-datepicker-range>
        `,decorators:[t(r,"datepicker-range-readonly-style")]},p={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-required-style")]},g={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-invalid-style")]},u={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-buttons-style")]},m={tags:["!dev"],render:()=>{const e=new Date,n=e.getFullYear(),b=e.getMonth(),S=JSON.stringify([{date:`4/${b+1}/${n}`,type:"green"},{date:`14/${b+1}/${n}`,type:"yellow"},{date:`27/${b+1}/${n}`,type:"red"}]);return a`
            <div class="datepicker-canvas">
                <dss-datepicker-range 
                    customCalendar='${S}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-datepicker-range>
            </div>
        `},decorators:[t(r,"datepicker-range-custom-calendar-style")]},v={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-validation-style")]},k={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=${()=>{const n=document.querySelector("#manual-focus-demo");n&&n.focus()}}></dss-button>
                <dss-datepicker-range 
                    id="manual-focus-demo"
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
        `,decorators:[t(r,"datepicker-range-focus-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
                <dss-datepicker-range 
                    id="manual-focus-demo"
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
  decorators: [withStyle(wrapperStyle, 'datepicker-range-focus-style')]
}`,...k.parameters?.docs?.source}}};const y=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation","Focus"],f=Object.freeze(Object.defineProperty({__proto__:null,Buttons:u,CustomCalendar:m,Disabled:c,Focus:k,Invalid:g,Playground:s,Readonly:o,Required:p,SizeLG:l,SizeMD:d,SizeSM:i,Validation:v,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{u as B,m as C,c as D,k as F,g as I,s as P,o as R,f as S,v as V,l as a,d as b,i as c,p as d};
