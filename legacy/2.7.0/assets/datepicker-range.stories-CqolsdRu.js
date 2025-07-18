import{x as e}from"./lit-html-D6a8R3xZ.js";const K={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:a=>e`
      <div class="datepicker-canvas">
        <dss-datepicker-range
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
        </dss-datepicker-range>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-datepicker-range>
      </div>
    `},r={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-datepicker-range>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Data inicial</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Data final</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-datepicker-range>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    `},s={tags:["!dev"],render:()=>e`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    `},d={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    `},p={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    `},o={tags:["!dev"],render:()=>e`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Data inicial</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Data final</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    `},c={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text." customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-datepicker-range>
      </div>
    `},g={tags:["!dev"],render:()=>e`
      <div class="datepicker-canvas">
     <dss-datepicker-range validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
      <label slot="label-range-start" for="daterangeValidationStart">Data inicial</label>
      <input slot="input-range-start" id="daterangeValidationStart" type="text"  />
      <label slot="label-range-end" for="daterangeValidationEnd">Data final</label>
      <input slot="input-range-end" id="daterangeValidationEnd" type="text"  />
    </dss-datepicker-range>
  </div>
    `};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,k,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  }
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var R,x,S;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,v,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,L,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  }
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var z,B,H;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  }
}`,...(H=(B=s.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var C,M,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  }
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var $,V,_;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,O,A;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  }
}`,...(A=(O=o.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var I,P,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text." customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
          <label slot="label-range-start" for="customCalendarRangeStart">Data inicial</label>
          <input slot="input-range-start" id="customCalendarRangeStart" type="text"  />
          <label slot="label-range-end" for="customCalendarEndStart">Data final</label>
          <input slot="input-range-end" id="customCalendarEndStart" type="text"  />
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,G,J;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const X=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],Q=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,CustomCalendar:c,Disabled:i,Invalid:p,Playground:t,Readonly:s,Required:d,SizeLG:n,SizeMD:r,SizeSM:l,Validation:g,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{o as B,i as D,p as I,t as P,s as R,Q as S,g as V,n as a,r as b,l as c,d};
