import{x as a}from"./lit-html-B2eaWknC.js";const B={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
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
    `},n={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart2">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart2" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEnd2">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd2" type="text"  />
        </dss-datepicker-range>
      </div>
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart3">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart3" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEnd3">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd3" type="text" />
        </dss-datepicker-range>
      </div>
    `},r={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    `},l={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    `},i={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    `},s={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    `},d={tags:["!dev"],render:()=>a`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    `};var p,c,o;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart2">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart2" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEnd2">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd2" type="text"  />
        </dss-datepicker-range>
      </div>
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStart3">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStart3" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEnd3">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEnd3" type="text" />
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,y,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    \`;
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var R,h,f;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    \`;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,D,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var v,E,F;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,L,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    \`;
  }
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const $=["Playground","Size","Disabled","Readonly","Required","Invalid","Buttons"],H=Object.freeze(Object.defineProperty({__proto__:null,Buttons:d,Disabled:r,Invalid:s,Playground:t,Readonly:l,Required:i,Size:n,__namedExportsOrder:$,default:B},Symbol.toStringTag,{value:"Module"}));export{d as B,r as D,s as I,t as P,l as R,H as S,n as a,i as b};
