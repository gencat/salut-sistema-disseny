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
`,ae={title:"Components/Form/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}},validationMin:{name:"Data mínima",control:{type:"text"},if:{arg:"validate"}},validationMax:{name:"Data màxima",control:{type:"text"},if:{arg:"validate"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0,validationMin:"20/01/2024",validationMax:"20/12/2026"},render:e=>a`
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
        `},d={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-form-datepicker helpText="Help text" label="Data lg">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data md" size="md" helpText="Help text">
            </dss-form-datepicker>
            <dss-form-datepicker label="Data sm" size="sm" helpText="Help text">
            </dss-form-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-sizes-style")]},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" disabled>
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-disabled-style")]},n={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" readonly value="15/08/2024">
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-readonly-style")]},o={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" required>
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-required-style")]},c={tags:["!dev"],render:()=>a`
        <div class="datepicker-canvas">
                <dss-form-datepicker helpText="Help text" label="Data" invalid value="22/10/2034">
                </dss-form-datepicker>
            </div>
    `,decorators:[t(r,"datepicker-invalid-style")]},p={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"datepicker-timepicker-style")]},m={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-form-datepicker>
            </div>
    `},u={tags:["!dev"],render:()=>{const e=new Date,s=e.getFullYear(),g=e.getMonth(),ee=JSON.stringify([{date:`4/${g+1}/${s}`,type:"green"},{date:`15/${g+1}/${s}`,type:"yellow"},{date:`27/${g+1}/${s}`,type:"red"}]);return a`
     <div class="datepicker-canvas">
                <dss-form-datepicker 
                    label="Dates personalitzades"
                    customCalendar='${ee}'
                >
                </dss-form-datepicker>
            </div>
    `},decorators:[t(r,"datepicker-custom-calendar-style")]},v={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"datepicker-validation-style")]},k={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
            <dss-form-datepicker 
                label="Data"
                helpText="Help text."
                hasStepper
            >
            </dss-form-datepicker>
        </div>
    `,decorators:[t(r,"datepicker-stepper-style")]},f={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=${()=>{const s=document.querySelector("#manual-focus-demo");s&&s.focus()}}></dss-button>
                <dss-form-datepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Missatge informatiu"
                >
                </dss-form-datepicker>
            </div>
        `,decorators:[t(r,"datepicker-focus-style")]};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,T,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,D,$;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var H,M,L;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(M=n.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var z,C,F;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var R,q,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var O,Y,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var A,B,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker label="Data" showButtons leftLabel="Cancel" rightLabel="Accept">
                </dss-form-datepicker>
            </div>
    \`;
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var E,J,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(J=u.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var V,K,N;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(K=v.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var X,G,Q;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-form-datepicker 
                label="Data"
                helpText="Help text."
                hasStepper
            >
            </dss-form-datepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-stepper-style')]
}`,...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,W,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
                <dss-form-datepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Missatge informatiu"
                >
                </dss-form-datepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-focus-style')]
}`,...(Z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};const te=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation","Stepper","Focus"],de=Object.freeze(Object.defineProperty({__proto__:null,Buttons:m,CustomCalendar:u,Disabled:l,Focus:f,Invalid:c,Playground:i,ReadOnly:n,Required:o,Sizes:d,Stepper:k,Timepicker:p,Validation:v,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{u as C,l as D,f as F,c as I,i as P,n as R,de as S,p as T,v as V,d as a,o as b,k as c};
