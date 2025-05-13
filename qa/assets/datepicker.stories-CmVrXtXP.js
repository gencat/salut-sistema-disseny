import"./lit-element-Dloa6E9d.js";import{x as t}from"./lit-html-D6a8R3xZ.js";import"./datepicker-CwdcuTfj.js";const O={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["none","list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data inici",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"none",minutesRange:1,minHour:0,maxHour:23,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>t`
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
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-datepicker>
        </div>
      `},i={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker>
                <label slot="label" for="myDatepickerLG">Data Inici</label>
                <input slot="input" id="myDatepickerLG" type="text"  />
            </dss-datepicker>
            <dss-datepicker label="Data Inici" inputSize="md">
                <label slot="label" for="myDatepickerMD">Data Inici</label>
                <input slot="input" id="myDatepickerMD" type="text"  />
            </dss-datepicker>
            <dss-datepicker label="Data Inici" inputSize="sm">
                <label slot="label" for="myDatepickerSM">Data Inici</label>
                <input slot="input" id="myDatepickerSM" type="text"  />
            </dss-datepicker>
        </div>
    `},s={tags:["!dev"],render:()=>t`
    <dss-datepicker>
      <label slot="label" for="myDatepicker3">Data Inici</label>
      <input slot="input" id="myDatepicker3" type="text"  disabled />
  </dss-datepicker>
    `},r={tags:["!dev"],render:()=>t`
     <dss-datepicker>
      <label slot="label" for="myDatepicker4">Data Inici</label>
      <input slot="input" id="myDatepicker4" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    `},l={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="myDatepicker5">Data Inici</label>
        <input slot="input" id="myDatepicker5" type="text"  required />
    </dss-datepicker>
  </div>
    `},n={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="myDatepicker6">Data Inici</label>
        <input slot="input" id="myDatepicker6" type="text"  />
    </dss-datepicker>
  </div>
    `},p={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas datepicker-canvas--temps">
    <dss-datepicker showTime>
        <label slot="label" for="myDatepickerTP1">TP Default</label>
        <input slot="input" id="myDatepickerTP1" type="text"  />
    </dss-datepicker>
    <dss-datepicker showTime timepicker="list" customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'>
        <label slot="label" for="myDatepickerTP2">TP List</label>
        <input slot="input" id="myDatepickerTP2" type="text"  />
    </dss-datepicker>
     <dss-datepicker showTime timepicker="manual" minutesRange="15" minHour="8" maxHour="15">
        <label slot="label" for="myDatepickerTP3">TP Manual</label>
        <input slot="input" id="myDatepickerTP3" type="text"  />
    </dss-datepicker>
  </div>
    `},o={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="myDatepicker8">Data Inici</label>
        <input slot="input" id="myDatepicker8" type="text"  />
    </dss-datepicker>
  </div>
    `},d={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
                <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Data Inici</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    `};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev'
    }
  },
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
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-datepicker>
        </div>
      \`;
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var k,b,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker>
                <label slot="label" for="myDatepickerLG">Data Inici</label>
                <input slot="input" id="myDatepickerLG" type="text"  />
            </dss-datepicker>
            <dss-datepicker label="Data Inici" inputSize="md">
                <label slot="label" for="myDatepickerMD">Data Inici</label>
                <input slot="input" id="myDatepickerMD" type="text"  />
            </dss-datepicker>
            <dss-datepicker label="Data Inici" inputSize="sm">
                <label slot="label" for="myDatepickerSM">Data Inici</label>
                <input slot="input" id="myDatepickerSM" type="text"  />
            </dss-datepicker>
        </div>
    \`;
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,D,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-datepicker>
      <label slot="label" for="myDatepicker3">Data Inici</label>
      <input slot="input" id="myDatepicker3" type="text"  disabled />
  </dss-datepicker>
    \`;
  }
}`,...(g=(D=s.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var f,h,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-datepicker>
      <label slot="label" for="myDatepicker4">Data Inici</label>
      <input slot="input" id="myDatepicker4" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    \`;
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,w,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="myDatepicker5">Data Inici</label>
        <input slot="input" id="myDatepicker5" type="text"  required />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,I,H;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="myDatepicker6">Data Inici</label>
        <input slot="input" id="myDatepicker6" type="text"  />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(H=(I=n.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var P,$,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--temps">
    <dss-datepicker showTime>
        <label slot="label" for="myDatepickerTP1">TP Default</label>
        <input slot="input" id="myDatepickerTP1" type="text"  />
    </dss-datepicker>
    <dss-datepicker showTime timepicker="list" customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'>
        <label slot="label" for="myDatepickerTP2">TP List</label>
        <input slot="input" id="myDatepickerTP2" type="text"  />
    </dss-datepicker>
     <dss-datepicker showTime timepicker="manual" minutesRange="15" minHour="8" maxHour="15">
        <label slot="label" for="myDatepickerTP3">TP Manual</label>
        <input slot="input" id="myDatepickerTP3" type="text"  />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(C=($=p.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var M,z,B;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="myDatepicker8">Data Inici</label>
        <input slot="input" id="myDatepicker8" type="text"  />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var R,A,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
                <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Data Inici</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    \`;
  }
}`,...(q=(A=d.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const _=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar"],j=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,CustomCalendar:d,Disabled:s,Invalid:n,Playground:a,ReadOnly:r,Required:l,Sizes:i,Timepicker:p,__namedExportsOrder:_,default:O},Symbol.toStringTag,{value:"Module"}));export{o as B,d as C,s as D,n as I,a as P,r as R,j as S,p as T,i as a,l as b};
