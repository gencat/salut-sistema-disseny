import"./lit-element-Dloa6E9d.js";import{x as a}from"./lit-html-D6a8R3xZ.js";import"./datepicker-BWxB7ovH.js";const G={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0},render:e=>a`
      <div class="datepicker-canvas">
          <dss-datepicker
            inputSize=${e.size}
            .helpText=${e.helpText}
            ?invalid=${e.invalid}
                        ?validate=${e.validate}
            ?showTime=${e.showTime}
            .timepicker=${e.timepickerSelector}
            .minutesRange="${e.minutesRange}"
            .minHour="${e.minHour}"
            .maxHour="${e.maxHour}"
            .leftLabel=${e.leftLabel}
            .rightLabel=${e.rightLabel}
          >
            <label slot="label" for="myDatepicker">${e.label}</label>
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-datepicker>
        </div>
      `},r={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker helpText="Help text">
                <label slot="label" for="datepickerLG">Data</label>
                <input slot="input" id="datepickerLG" type="text"  />
            </dss-datepicker>
            <dss-datepicker inputSize="md" helpText="Help text">
                <label slot="label" for="datepickerMD">Data</label>
                <input slot="input" id="datepickerMD" type="text"  />
            </dss-datepicker>
            <dss-datepicker inputSize="sm" helpText="Help text">
                <label slot="label" for="datepickerSM">Data</label>
                <input slot="input" id="datepickerSM" type="text"  />
            </dss-datepicker>
        </div>
    `},i={tags:["!dev"],render:()=>a`
    <dss-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-datepicker>
    `},s={tags:["!dev"],render:()=>a`
     <dss-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    `},l={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="datepickerRequired">Data</label>
        <input slot="input" id="datepickerRequired" type="text"  required />
    </dss-datepicker>
  </div>
    `},d={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="datepickerInvalid">Data</label>
        <input slot="input" id="datepickerInvalid" type="text"  />
    </dss-datepicker>
  </div>
    `},n={tags:["!dev"],render:()=>a`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-datepicker 
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
                    <label slot="label" for="datepickerTimeList">Data</label>
                    <input slot="input" id="datepickerTimeList" type="text"  />
            </dss-datepicker>
            <dss-datepicker 
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
                    <label slot="label" for="datepickerTimeManual">Data</label>
                    <input slot="input" id="datepickerTimeManual" type="text" />
            </dss-datepicker>
        </div>
    `},p={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="datepickerButtons">Data</label>
        <input slot="input" id="datepickerButtons" type="text"  />
    </dss-datepicker>
  </div>
    `},o={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
                <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Dates personalitzades</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    `},c={tags:["!dev"],render:()=>a`
     <div class="datepicker-canvas">
            <dss-datepicker validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
                <label slot="label" for="dpValidation">Data</label>
                <input slot="input" id="dpValidation" type="text"  />
            </dss-datepicker>
        </div>
    `};var u,m,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    validate: true
  },
  render: (args: any) => {
    return html\`
      <div class="datepicker-canvas">
          <dss-datepicker
            inputSize=\${args.size}
            .helpText=\${args.helpText}
            ?invalid=\${args.invalid}
                        ?validate=\${args.validate}
            ?showTime=\${args.showTime}
            .timepicker=\${args.timepickerSelector}
            .minutesRange="\${args.minutesRange}"
            .minHour="\${args.minHour}"
            .maxHour="\${args.maxHour}"
            .leftLabel=\${args.leftLabel}
            .rightLabel=\${args.rightLabel}
          >
            <label slot="label" for="myDatepicker">\${args.label}</label>
            <input slot="input" id="myDatepicker" type="text"  />
          </dss-datepicker>
        </div>
      \`;
  }
}`,...(k=(m=t.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var b,v,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas datepicker-canvas--sizes">
            <dss-datepicker helpText="Help text">
                <label slot="label" for="datepickerLG">Data</label>
                <input slot="input" id="datepickerLG" type="text"  />
            </dss-datepicker>
            <dss-datepicker inputSize="md" helpText="Help text">
                <label slot="label" for="datepickerMD">Data</label>
                <input slot="input" id="datepickerMD" type="text"  />
            </dss-datepicker>
            <dss-datepicker inputSize="sm" helpText="Help text">
                <label slot="label" for="datepickerSM">Data</label>
                <input slot="input" id="datepickerSM" type="text"  />
            </dss-datepicker>
        </div>
    \`;
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-datepicker>
    \`;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,f,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    \`;
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var S,L,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="datepickerRequired">Data</label>
        <input slot="input" id="datepickerRequired" type="text"  required />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var H,M,$;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="datepickerInvalid">Data</label>
        <input slot="input" id="datepickerInvalid" type="text"  />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,z,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="datepicker-canvas datepicker-canvas--temps">
            <dss-datepicker 
                showTime 
                timepicker="list" 
                helpText="Timepicker list"
                customTimeListOptions='[{"value":"08:00", "state":"available"},{"value":"09:00", "state":"available"},{"value":"10:00", "state":"ocupat"},{"value":"11:00", "state":"available"},{"value":"12:00", "state":"available"}]'
                >
                    <label slot="label" for="datepickerTimeList">Data</label>
                    <input slot="input" id="datepickerTimeList" type="text"  />
            </dss-datepicker>
            <dss-datepicker 
                showTime 
                timepicker="manual" 
                minutesRange="15" 
                minHour="8" 
                maxHour="15"
                helpText="Timepicker manual">
                    <label slot="label" for="datepickerTimeManual">Data</label>
                    <input slot="input" id="datepickerTimeManual" type="text" />
            </dss-datepicker>
        </div>
    \`;
  }
}`,...(C=(z=n.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var B,q,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="datepickerButtons">Data</label>
        <input slot="input" id="datepickerButtons" type="text"  />
    </dss-datepicker>
  </div>
    \`;
  }
}`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var I,A,V;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
                <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept" customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'>
                        <label slot="label" for="customCalendar">Dates personalitzades</label>
                        <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    \`;
  }
}`,...(V=(A=o.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,P,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="datepicker-canvas">
            <dss-datepicker validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
                <label slot="label" for="dpValidation">Data</label>
                <input slot="input" id="dpValidation" type="text"  />
            </dss-datepicker>
        </div>
    \`;
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const E=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation"],X=Object.freeze(Object.defineProperty({__proto__:null,Buttons:p,CustomCalendar:o,Disabled:i,Invalid:d,Playground:t,ReadOnly:s,Required:l,Sizes:r,Timepicker:n,Validation:c,__namedExportsOrder:E,default:G},Symbol.toStringTag,{value:"Module"}));export{i as D,d as I,t as P,s as R,X as S,n as T,c as V,r as a,l as b};
