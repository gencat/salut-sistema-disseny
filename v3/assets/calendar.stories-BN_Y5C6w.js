import{x as o}from"./iframe-PL0KlCAr.js";const D=e=>{const n=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return`${n}/${a}/${c}`},i=(e,n)=>{const a=new Date(e);return a.setDate(a.getDate()+n),a},u=new Date,m=D(i(u,-30)),g=D(i(u,30)),p={title:"Components/Calendar",component:"dss-calendar",argTypes:{standalone:{name:"Standalone",control:{type:"boolean"}},minDateValue:{name:"Data mínima",control:{type:"text"}},maxDateValue:{name:"Data màxima",control:{type:"text"}},selectedDateValue:{name:"Data seleccionada (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!1}},range:{name:"Habilitar rang de dates",control:{type:"boolean"}},rangeStartDateValue:{name:"Data inicial del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}},rangeEndDateValue:{name:"Data final del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"},controls:{matchers:{date:/$^/}}},args:{standalone:!0,minDateValue:m,maxDateValue:g,selectedDateValue:"",range:!1,rangeStartDateValue:"",rangeEndDateValue:""},render:e=>o`
            <dss-calendar
                ?standalone=${e.standalone}
                minDate=${e.minDateValue}
                maxDate=${e.maxDateValue}
                selectedDate=${e.selectedDateValue}
                ?range=${e.range}
                rangeStartDate=${e.rangeStartDateValue}
                rangeEndDate=${e.rangeEndDateValue}
            >
            </dss-calendar>
        `},r={tags:["!dev"],render:()=>o`
     <dss-calendar
            standalone
         >
     </dss-calendar>

    `},s={tags:["!dev"],render:()=>o`
     <dss-calendar
          standalone
            range
         >
     </dss-calendar>

    `},d={tags:["!dev"],args:{minDateValue:m,maxDateValue:g},render:e=>o`
     <dss-calendar
            standalone
            .minDate=${e.minDateValue}
            .maxDate=${e.maxDateValue}
         >
     </dss-calendar>
    `},l={tags:["!dev"],args:{minDateValue:m,maxDateValue:g},render:e=>{const n=u.getFullYear(),a=u.getMonth(),c=JSON.stringify([{date:`4/${a+1}/${n}`,type:"green"},{date:`14/${a+1}/${n}`,type:"yellow"},{date:`27/${a+1}/${n}`,type:"red"}]);return o`
     <dss-calendar
            standalone
            .minDate=${e.minDateValue}
            .maxDate=${e.maxDateValue}
            customCalendar=${c}
         >
     </dss-calendar>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev'
    },
    controls: {
      matchers: {
        date: /$^/
      }
    }
  },
  args: {
    standalone: true,
    minDateValue: defaultMinDate,
    maxDateValue: defaultMaxDate,
    selectedDateValue: '',
    range: false,
    rangeStartDateValue: '',
    rangeEndDateValue: ''
  },
  render: (args: {
    standalone: boolean;
    minDateValue: string;
    maxDateValue: string;
    selectedDateValue: string;
    range: boolean;
    rangeStartDateValue: string;
    rangeEndDateValue: string;
  }) => {
    return html\`
            <dss-calendar
                ?standalone=\${args.standalone}
                minDate=\${args.minDateValue}
                maxDate=\${args.maxDateValue}
                selectedDate=\${args.selectedDateValue}
                ?range=\${args.range}
                rangeStartDate=\${args.rangeStartDateValue}
                rangeEndDate=\${args.rangeEndDateValue}
            >
            </dss-calendar>
        \`;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-calendar
            standalone
         >
     </dss-calendar>

    \`;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-calendar
          standalone
            range
         >
     </dss-calendar>

    \`;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    minDateValue: defaultMinDate,
    maxDateValue: defaultMaxDate
  },
  render: (args: any) => {
    return html\`
     <dss-calendar
            standalone
            .minDate=\${args.minDateValue}
            .maxDate=\${args.maxDateValue}
         >
     </dss-calendar>
    \`;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    minDateValue: defaultMinDate,
    maxDateValue: defaultMaxDate
  },
  render: (args: any) => {
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
     <dss-calendar
            standalone
            .minDate=\${args.minDateValue}
            .maxDate=\${args.maxDateValue}
            customCalendar=\${customCalendar}
         >
     </dss-calendar>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const V=["Playground","Standalone","Range","MinMaxDates","CustomCalendar"],$=Object.freeze(Object.defineProperty({__proto__:null,CustomCalendar:l,MinMaxDates:d,Playground:t,Range:s,Standalone:r,__namedExportsOrder:V,default:p},Symbol.toStringTag,{value:"Module"}));export{l as C,d as M,t as P,s as R,$ as S,r as a};
