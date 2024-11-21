import{x as a}from"./lit-html-paDGiEfB.js";const z={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},t={args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
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
          <input slot="input-range-start" id="myDatepickerRangeStart" type="text" class="dss-input">
          <label slot="label-range-end" for="myDatepickerRangeEnd">${e.labelEnd}</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd" type="text" class="dss-input">
        </dss-datepicker-range>
      </div>
    `},n={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart2">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart2" type="text" class="dss-input" />
          <label slot="label-range-end" for="myDatepickerRangeEnd2">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd2" type="text" class="dss-input" />
        </dss-datepicker-range>
      </div>
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart3">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart3" type="text" class="dss-input"/>
          <label slot="label-range-end" for="myDatepickerRangeEnd3">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd3" type="text" class="dss-input"/>
        </dss-datepicker-range>
      </div>
    `},r={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text" class="dss-input" disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text" class="dss-input" disabled/>
    </dss-datepicker-range>
    `},s={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text" class="dss-input" readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text" class="dss-input" readOnly/>
    </dss-datepicker-range>
    `},l={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text" class="dss-input" required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text" class="dss-input" required/>
    </dss-datepicker-range>
  </div>
    `},i={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text" class="dss-input" />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text" class="dss-input" />
    </dss-datepicker-range>
  </div>
    `},d={tags:["!dev"],render:()=>a`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text" class="dss-input" />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text" class="dss-input" />
    </dss-datepicker-range>
  </div>
    `};var p,c,o;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <input slot="input-range-start" id="myDatepickerRangeStart" type="text" class="dss-input">
          <label slot="label-range-end" for="myDatepickerRangeEnd">\${args.labelEnd}</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd" type="text" class="dss-input">
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var g,u,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart2">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart2" type="text" class="dss-input" />
          <label slot="label-range-end" for="myDatepickerRangeEnd2">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd2" type="text" class="dss-input" />
        </dss-datepicker-range>
      </div>
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart3">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart3" type="text" class="dss-input"/>
          <label slot="label-range-end" for="myDatepickerRangeEnd3">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd3" type="text" class="dss-input"/>
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,y,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text" class="dss-input" disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text" class="dss-input" disabled/>
    </dss-datepicker-range>
    \`;
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var R,h,x;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text" class="dss-input" readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text" class="dss-input" readOnly/>
    </dss-datepicker-range>
    \`;
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,f,v;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text" class="dss-input" required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text" class="dss-input" required/>
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,E,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text" class="dss-input" />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text" class="dss-input" />
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,T,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text" class="dss-input" />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text" class="dss-input" />
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const $=["Playground","Size","Disabled","Readonly","Required","Invalid","Buttons"],_=Object.freeze(Object.defineProperty({__proto__:null,Buttons:d,Disabled:r,Invalid:i,Playground:t,Readonly:s,Required:l,Size:n,__namedExportsOrder:$,default:z},Symbol.toStringTag,{value:"Module"}));export{d as B,r as D,i as I,t as P,s as R,_ as S,n as a,l as b};
