import"./lit-element-BL4lq474.js";import{x as l}from"./lit-html-D6cejpwM.js";const $=e=>{const d=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),E=e.getFullYear();return`${d}/${a}/${E}`},f=(e,d)=>{const a=new Date(e);return a.setDate(a.getDate()+d),a},M=new Date,h=$(f(M,-30)),Y=$(f(M,30)),w={title:"Components/Calendar",component:"dss-calendar",argTypes:{standalone:{name:"Standalone",control:{type:"boolean"}},minDateValue:{name:"Data mínima",control:{type:"text"}},maxDateValue:{name:"Data màxima",control:{type:"text"}},selectedDateValue:{name:"Data seleccionada (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!1}},range:{name:"Habilitar rang de dates",control:{type:"boolean"}},rangeStartDateValue:{name:"Data inicial del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}},rangeEndDateValue:{name:"Data final del rang (DD/MM/YYYY)",control:{type:"text"},if:{arg:"range",truthy:!0}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"},controls:{matchers:{date:/$^/}}},args:{standalone:!0,minDateValue:h,maxDateValue:Y,selectedDateValue:"",range:!1,rangeStartDateValue:"",rangeEndDateValue:""},render:e=>l`
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
        `},t={tags:["!dev"],render:()=>l`
     <dss-calendar
            standalone
         >
     </dss-calendar>

    `},r={tags:["!dev"],render:()=>l`
     <dss-calendar
          standalone
            range
         >
     </dss-calendar>

    `},s={tags:["!dev"],args:{minDateValue:h,maxDateValue:Y},render:e=>l`
     <dss-calendar
            standalone
            .minDate=${e.minDateValue}
            .maxDate=${e.maxDateValue}
         >
     </dss-calendar>
    `};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,D;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-calendar
            standalone
         >
     </dss-calendar>

    \`;
  }
}`,...(D=(g=t.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var i,p,V;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(V=(p=r.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var x,S,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const v=["Playground","Standalone","Range","MinMaxDates"],P=Object.freeze(Object.defineProperty({__proto__:null,MinMaxDates:s,Playground:n,Range:r,Standalone:t,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{s as M,n as P,r as R,P as S,t as a};
