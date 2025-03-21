import"./lit-element-DhY7bShc.js";import{x as t}from"./lit-html-B2eaWknC.js";import"./datepicker-B-b4OjeK.js";const B={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["none","list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data inici",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"none",minutesRange:1,minHour:0,maxHour:23,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>t`
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
    `};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,k,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var y,v,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-datepicker>
      <label slot="label" for="myDatepicker3">Data Inici</label>
      <input slot="input" id="myDatepicker3" type="text"  disabled />
  </dss-datepicker>
    \`;
  }
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-datepicker>
      <label slot="label" for="myDatepicker4">Data Inici</label>
      <input slot="input" id="myDatepicker4" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    \`;
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,x,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,L,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var H,P,$;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var M,z,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(z=o.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const q=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons"],A=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,Disabled:s,Invalid:n,Playground:a,ReadOnly:r,Required:l,Sizes:i,Timepicker:p,__namedExportsOrder:q,default:B},Symbol.toStringTag,{value:"Module"}));export{o as B,s as D,n as I,a as P,r as R,A as S,p as T,i as a,l as b};
