import"./lit-element-DhY7bShc.js";import{x as a}from"./lit-html-B2eaWknC.js";import"./datepicker-N76orH_x.js";const M={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["none","list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},t={args:{size:"lg",label:"Data inici",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"none",minutesRange:1,minHour:0,maxHour:23,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
      <div class="datepicker-canvas">
          <dss-datepicker
            inputSize=${e.size}
            .helpText=${e.helpText}
            ?invalid=${e.invalid}
            ?showTime=${e.showTime}
            .timepicker=${e.timepickerSelector}
            .minutesRange="${e.minutesRange}"
            .minHour="${e.minHour}"
            .maxHour="${e.maxHour}"
            ?showButtons=${e.showButtons}
            .leftLabel=${e.leftLabel}
            .rightLabel=${e.rightLabel}
          >
            <label slot="label" for="myDatepicker">${e.label}</label>
            <input slot="input" id="myDatepicker" type="text" class="dss-input" />
          </dss-datepicker>
        </div>
      `},s={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker>
      <label slot="label" for="myDatepicker1">Data Inici</label>
      <input slot="input" id="myDatepicker1" type="text" class="dss-input" />
    </dss-datepicker>
    <dss-datepicker label="Data Inici" inputSize="md">
      <label slot="label" for="myDatepicker2">Data Inici</label>
      <input slot="input" id="myDatepicker2" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    `},i={tags:["!dev"],render:()=>a`
    <dss-datepicker>
      <label slot="label" for="myDatepicker3">Data Inici</label>
      <input slot="input" id="myDatepicker3" type="text" class="dss-input" disabled />
  </dss-datepicker>
    `},r={tags:["!dev"],render:()=>a`
     <dss-datepicker>
      <label slot="label" for="myDatepicker4">Data Inici</label>
      <input slot="input" id="myDatepicker4" type="text" class="dss-input" value="07/12/2023" readonly/>
  </dss-datepicker>
    `},n={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="myDatepicker5">Data Inici</label>
        <input slot="input" id="myDatepicker5" type="text" class="dss-input" required />
    </dss-datepicker>
  </div>
    `},l={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="myDatepicker6">Data Inici</label>
        <input slot="input" id="myDatepicker6" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    `},p={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas datepicker-canvas--temps">
    <dss-datepicker showTime>
        <label slot="label" for="myDatepickerTP1">TP Default</label>
        <input slot="input" id="myDatepickerTP1" type="text" class="dss-input" />
    </dss-datepicker>
    <dss-datepicker showTime timepicker="list" customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'>
        <label slot="label" for="myDatepickerTP2">TP List</label>
        <input slot="input" id="myDatepickerTP2" type="text" class="dss-input" />
    </dss-datepicker>
     <dss-datepicker showTime timepicker="manual" minutesRange="15" minHour="8" maxHour="15">
        <label slot="label" for="myDatepickerTP3">TP Manual</label>
        <input slot="input" id="myDatepickerTP3" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    `},c={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="myDatepicker8">Data Inici</label>
        <input slot="input" id="myDatepicker8" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    `};var d,o,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Data inici',
    helpText: 'Help text.',
    invalid: false,
    showTime: false,
    timepickerSelector: 'none',
    minutesRange: 1,
    minHour: 0,
    maxHour: 23,
    showButtons: false,
    leftLabel: 'Cancel·lar',
    rightLabel: 'Acceptar'
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
          <dss-datepicker
            inputSize=\${args.size}
            .helpText=\${args.helpText}
            ?invalid=\${args.invalid}
            ?showTime=\${args.showTime}
            .timepicker=\${args.timepickerSelector}
            .minutesRange="\${args.minutesRange}"
            .minHour="\${args.minHour}"
            .maxHour="\${args.maxHour}"
            ?showButtons=\${args.showButtons}
            .leftLabel=\${args.leftLabel}
            .rightLabel=\${args.rightLabel}
          >
            <label slot="label" for="myDatepicker">\${args.label}</label>
            <input slot="input" id="myDatepicker" type="text" class="dss-input" />
          </dss-datepicker>
        </div>
      \`;
  }
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,k,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker>
      <label slot="label" for="myDatepicker1">Data Inici</label>
      <input slot="input" id="myDatepicker1" type="text" class="dss-input" />
    </dss-datepicker>
    <dss-datepicker label="Data Inici" inputSize="md">
      <label slot="label" for="myDatepicker2">Data Inici</label>
      <input slot="input" id="myDatepicker2" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var y,v,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-datepicker>
      <label slot="label" for="myDatepicker3">Data Inici</label>
      <input slot="input" id="myDatepicker3" type="text" class="dss-input" disabled />
  </dss-datepicker>
    \`;
  }
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var g,h,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-datepicker>
      <label slot="label" for="myDatepicker4">Data Inici</label>
      <input slot="input" id="myDatepicker4" type="text" class="dss-input" value="07/12/2023" readonly/>
  </dss-datepicker>
    \`;
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,x,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="myDatepicker5">Data Inici</label>
        <input slot="input" id="myDatepicker5" type="text" class="dss-input" required />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var $,L,S;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="myDatepicker6">Data Inici</label>
        <input slot="input" id="myDatepicker6" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var H,P,I;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--temps">
    <dss-datepicker showTime>
        <label slot="label" for="myDatepickerTP1">TP Default</label>
        <input slot="input" id="myDatepickerTP1" type="text" class="dss-input" />
    </dss-datepicker>
    <dss-datepicker showTime timepicker="list" customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'>
        <label slot="label" for="myDatepickerTP2">TP List</label>
        <input slot="input" id="myDatepickerTP2" type="text" class="dss-input" />
    </dss-datepicker>
     <dss-datepicker showTime timepicker="manual" minutesRange="15" minHour="8" maxHour="15">
        <label slot="label" for="myDatepickerTP3">TP Manual</label>
        <input slot="input" id="myDatepickerTP3" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var R,B,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="myDatepicker8">Data Inici</label>
        <input slot="input" id="myDatepicker8" type="text" class="dss-input" />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(z=(B=c.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const O=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons"],A=Object.freeze(Object.defineProperty({__proto__:null,Buttons:c,Disabled:i,Invalid:l,Playground:t,ReadOnly:r,Required:n,Sizes:s,Timepicker:p,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{c as B,i as D,l as I,t as P,r as R,A as S,p as T,s as a,n as b};
