import"./lit-element-BL4lq474.js";import{x as a}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
        gap: 24px;
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
`,N={title:"Components/Form/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}},validationMin:{name:"Data mínima",control:{type:"text"},if:{arg:"validate"}},validationMax:{name:"Data màxima",control:{type:"text"},if:{arg:"validate"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0,validationMin:"20/01/2024",validationMax:"20/12/2026"},render:e=>a`
      <div class="datepicker-canvas">
                <dss-form-datepicker
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
                >
                </dss-form-datepicker>
            </div>
        `},i={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-form-datepicker helpText="Help text" label="Data lg">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data md" size="md" helpText="Help text">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data sm" size="sm" helpText="Help text">
            </dss-form-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-sizes-style")]},d={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" disabled>
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-disabled-style")]},n={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" readonly value="15/08/2024">
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-readonly-style")]},l={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" required>
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-required-style")]},o={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" invalid value="22/10/2034">
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-invalid-style")]},c={tags:["!dev"],render:()=>a`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-form-datepicker 
                label="Data"
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
            </dss-form-datepicker>
            <dss-form-datepicker 
                label="Data"
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
            </dss-form-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-timepicker-style")]},p={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-form-datepicker>
            </div>
    `},m={tags:["!dev"],render:()=>{const e=new Date,v=e.getFullYear(),k=e.getMonth(),K=JSON.stringify([{date:`4/${k+1}/${v}`,type:"green"},{date:`15/${k+1}/${v}`,type:"yellow"},{date:`27/${k+1}/${v}`,type:"red"}]);return a`
     <div class="datepicker-canvas">
                <dss-form-datepicker 
                    label="Dates personalitzades"
                    customCalendar='${K}'
                >
                </dss-form-datepicker>
            </div>
    `},decorators:[t(r,"datepicker-custom-calendar-style")]},u={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
            <dss-form-datepicker 
                label="Data"
                validate 
                minDate="20/01/2024" 
                maxDate="20/12/2026" 
                helpText="Min 20/01/2024 || Max 20/12/2026"
            >
            </dss-form-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-validation-style")]};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    validationMax: '20/12/2026'
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
                <dss-form-datepicker
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
                >
                </dss-form-datepicker>
            </div>
        \`;
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-form-datepicker helpText="Help text" label="Data lg">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data md" size="md" helpText="Help text">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data sm" size="sm" helpText="Help text">
            </dss-form-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-sizes-style')]
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,w,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" disabled>
                </dss-form-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-disabled-style')]
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var D,$,H;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" readonly value="15/08/2024">
                </dss-form-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-readonly-style')]
}`,...(H=($=n.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var M,z,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" required>
                </dss-form-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-required-style')]
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var C,R,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" invalid value="22/10/2034">
                </dss-form-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-invalid-style')]
}`,...(I=(R=o.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var q,O,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-form-datepicker 
                label="Data"
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
            </dss-form-datepicker>
            <dss-form-datepicker 
                label="Data"
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
            </dss-form-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-timepicker-style')]
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var Y,_,A;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-form-datepicker>
            </div>
    \`;
  }
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var B,P,J;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
                <dss-form-datepicker 
                    label="Dates personalitzades"
                    customCalendar='\${customCalendar}'
                >
                </dss-form-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-custom-calendar-style')]
}`,...(J=(P=m.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var j,E,V;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-form-datepicker 
                label="Data"
                validate 
                minDate="20/01/2024" 
                maxDate="20/12/2026" 
                helpText="Min 20/01/2024 || Max 20/12/2026"
            >
            </dss-form-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-validation-style')]
}`,...(V=(E=u.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const X=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation"],W=Object.freeze(Object.defineProperty({__proto__:null,Buttons:p,CustomCalendar:m,Disabled:d,Invalid:o,Playground:s,ReadOnly:n,Required:l,Sizes:i,Timepicker:c,Validation:u,__namedExportsOrder:X,default:N},Symbol.toStringTag,{value:"Module"}));export{m as C,d as D,o as I,s as P,n as R,W as S,c as T,u as V,i as a,l as b};
