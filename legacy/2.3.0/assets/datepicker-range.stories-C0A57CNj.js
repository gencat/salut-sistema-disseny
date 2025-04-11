import{x as a}from"./lit-html-B2eaWknC.js";const O={title:"Components/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
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
        <dss-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-datepicker-range>
      </div>
    `},r={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-datepicker-range>
      </div>
    `},i={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-datepicker-range>
      </div>
    `},l={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart4">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart4" type="text"  disabled/>
      <label slot="label-range-end" for="myDatepickerRangeEnd4">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd4" type="text"  disabled/>
    </dss-datepicker-range>
    `},s={tags:["!dev"],render:()=>a`
      <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart5">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart5" type="text"  readOnly/>
      <label slot="label-range-end" for="myDatepickerRangeEnd5">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd5" type="text"  readOnly/>
    </dss-datepicker-range>
    `},d={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
    <dss-datepicker-range inputsize="sm" helpText="Help text.">
      <label slot="label-range-start" for="myDatepickerRangeStart6">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart6" type="text"  required/>
      <label slot="label-range-end" for="myDatepickerRangeEnd6">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd6" type="text"  required/>
    </dss-datepicker-range>
  </div>
    `},p={tags:["!dev"],render:()=>a`
      <div class="datepicker-canvas">
     <dss-datepicker-range helpText="Help text." invalid>
      <label slot="label-range-start" for="myDatepickerRangeStart7">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart7" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd7">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd7" type="text"  />
    </dss-datepicker-range>
  </div>
    `},c={tags:["!dev"],render:()=>a`
       <div class="datepicker-canvas">
    <dss-datepicker-range helpText="Help text." showButtons calendarLeftButtonLabel="Cancel" calendarRightButtonLabel="Accept">
      <label slot="label-range-start" for="myDatepickerRangeStart8">Fecha inicio</label>
      <input slot="input-range-start" id="myDatepickerRangeStart8" type="text"  />
      <label slot="label-range-end" for="myDatepickerRangeEnd8">Fecha fin</label>
      <input slot="input-range-end" id="myDatepickerRangeEnd8" type="text"  />
    </dss-datepicker-range>
  </div>
    `};var o,g,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,b,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="lg" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartLg">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartLg" type="text"  />
          <label slot="label-range-end" for="myDatepickerRangeEndLg">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndLg" type="text"  />
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,R,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="md" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartMd">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartMd" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndMd">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndMd" type="text" />
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(h=(R=r.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var S,D,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="datepicker-canvas">
        <dss-datepicker-range inputsize="sm" helpText="Help text.">
          <label slot="label-range-start" for="myDatepickerRangeStartSm">Fecha inicio</label>
          <input slot="input-range-start" id="myDatepickerRangeStartSm" type="text" />
          <label slot="label-range-end" for="myDatepickerRangeEndSm">Fecha fin</label>
          <input slot="input-range-end" id="myDatepickerRangeEndSm" type="text" />
        </dss-datepicker-range>
      </div>
    \`;
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var f,v,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var F,L,z;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(L=s.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var T,B,H;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var $,w,M;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var _,q,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(q=c.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const A=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons"],P=Object.freeze(Object.defineProperty({__proto__:null,Buttons:c,Disabled:l,Invalid:p,Playground:t,Readonly:s,Required:d,SizeLG:n,SizeMD:r,SizeSM:i,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{c as B,l as D,p as I,t as P,s as R,P as S,n as a,r as b,i as c,d};
