import"./lit-element-BL4lq474.js";import{x as o}from"./lit-html-D6cejpwM.js";const E=e=>{const n=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return`${n}/${a}/${c}`},b=(e,n)=>{const a=new Date(e);return a.setDate(a.getDate()+n),a},u=new Date,m=E(b(u,-30)),g=E(b(u,30)),F={title:"Components/Calendar",component:"dss-calendar",argTypes:{standalone:{name:"Standalone",control:{type:"boolean"}},minDateValue:{name:"Data mínima",control:{type:"text"}},maxDateValue:{name:"Data màxima",control:{type:"text"}},selectedDateValue:{name:"Data seleccionada (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!1}},range:{name:"Habilitar rang de dates",control:{type:"boolean"}},rangeStartDateValue:{name:"Data inicial del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}},rangeEndDateValue:{name:"Data final del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"},controls:{matchers:{date:/$^/}}},args:{standalone:!0,minDateValue:m,maxDateValue:g,selectedDateValue:"",range:!1,rangeStartDateValue:"",rangeEndDateValue:""},render:e=>o`
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
    `}};var D,i,p;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var V,x,$;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-calendar
            standalone
         >
     </dss-calendar>

    \`;
  }
}`,...($=(x=r.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var y,S,M;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var f,h,Y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(Y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:Y.source}}};var C,w,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const I=["Playground","Standalone","Range","MinMaxDates","CustomCalendar"],O=Object.freeze(Object.defineProperty({__proto__:null,CustomCalendar:l,MinMaxDates:d,Playground:t,Range:s,Standalone:r,__namedExportsOrder:I,default:F},Symbol.toStringTag,{value:"Module"}));export{l as C,d as M,t as P,s as R,O as S,r as a};
