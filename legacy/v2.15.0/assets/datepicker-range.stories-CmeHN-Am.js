import{x as a}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,U={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range
          inputSize=${e.size}
          .helpText=${e.helpText}
          ?invalid=${e.invalid}
          ?showButtons=${e.showButtons}
          .iconRangeStart=${e.iconRangeStart}
          .iconRangeEnd=${e.iconRangeEnd}
          .calendarLeftButtonLabel=${e.leftLabel}
          .calendarRightButtonLabel=${e.rightLabel}
        >
          <label slot="label-range-start" for="myDatepickerRangeStart">${e.labelStart}</label>
          <input slot="input-range-start" id="myDatepickerRangeStart" type="text" >
          <label slot="label-range-end" for="myDatepickerRangeEnd">${e.labelEnd}</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd" type="text" >
        </dss-datepicker-range>
      </div>
    `},l={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},s={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-datepicker-range>
      </div>
    `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    `,decorators:[t(r,"datepicker-range-disabled-style")]},p={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    `,decorators:[t(r,"datepicker-range-readonly-style")]},o={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-required-style")]},c={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-invalid-style")]},g={tags:["!dev"],render:()=>a`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-buttons-style")]},u={tags:["!dev"],render:()=>{const e=new Date,y=e.getFullYear(),b=e.getMonth(),Q=JSON.stringify([{date:`4/${b+1}/${y}`,type:"green"},{date:`14/${b+1}/${y}`,type:"yellow"},{date:`27/${b+1}/${y}`,type:"red"}]);return a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text." customCalendar=${Q}>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-datepicker-range>
      </div>
    `},decorators:[t(r,"datepicker-range-custom-calendar-style")]},m={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
     <dss-datepicker-range validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
      <label slot="label-range-start" for="daterangeValidationStart">Data inicial</label>
      <input slot="input-range-start" id="daterangeValidationStart" type="text"  />
      <label slot="label-range-end" for="daterangeValidationEnd">Data final</label>
      <input slot="input-range-end" id="daterangeValidationEnd" type="text"  />
    </dss-datepicker-range>
  </div>
    `,decorators:[t(r,"datepicker-range-validation-style")]};var k,D,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var x,R,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...(f=(R=l.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var w,z,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var $,T,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-disabled-style')]
}`,...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var C,B,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-readonly-style')]
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var q,I,V;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-required-style')]
}`,...(V=(I=o.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,O,Y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-invalid-style')]
}`,...(Y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var A,F,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-buttons-style')]
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var J,j,G;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        <dss-datepicker-range inputsize="lg" helpText="Help text." customCalendar=\${customCalendar}>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-datepicker-range>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-custom-calendar-style')]
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,N,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-datepicker-range validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
      <label slot="label-range-start" for="daterangeValidationStart">Data inicial</label>
      <input slot="input-range-start" id="daterangeValidationStart" type="text"  />
      <label slot="label-range-end" for="daterangeValidationEnd">Data final</label>
      <input slot="input-range-end" id="daterangeValidationEnd" type="text"  />
    </dss-datepicker-range>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-validation-style')]
}`,...(X=(N=m.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const W=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],ae=Object.freeze(Object.defineProperty({__proto__:null,Buttons:g,CustomCalendar:u,Disabled:d,Invalid:c,Playground:n,Readonly:p,Required:o,SizeLG:l,SizeMD:i,SizeSM:s,Validation:m,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{g as B,u as C,d as D,c as I,n as P,p as R,ae as S,m as V,l as a,i as b,s as c,o as d};
