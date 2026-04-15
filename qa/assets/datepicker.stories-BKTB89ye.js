import"./lit-element-BL4lq474.js";import{x as t}from"./lit-html-D6cejpwM.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
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
`,K={title:"Components/Datepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showTime:{name:"Mostrar temps",control:{type:"boolean"}},timepickerSelector:{name:"Timepicker Dropdown",control:{type:"radio"},options:["list","manual"],if:{arg:"showTime"}},minutesRange:{name:"Minutes Range",control:{type:"number",min:0,max:59},if:{arg:"showTime"}},minHour:{name:"Min Hour",control:{type:"number",min:0,max:22},if:{arg:"showTime"}},maxHour:{name:"Max Hour",control:{type:"number",min:1,max:23},if:{arg:"showTime"}},leftLabel:{name:"Botó esquerra",if:{arg:"showTime"}},rightLabel:{name:"Botó dreta",if:{arg:"showTime"}},validate:{name:"validació interna",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"lg",label:"Data",helpText:"Help text.",invalid:!1,showTime:!1,timepickerSelector:"manual",minutesRange:1,minHour:0,maxHour:23,leftLabel:"Cancel·lar",rightLabel:"Acceptar",validate:!0},render:e=>t`
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
      `},s={tags:["!dev"],render:()=>t`
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
    `,decorators:[a(r,"datepicker-sizes-style")]},l={tags:["!dev"],render:()=>t`
    <dss-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-datepicker>
    `,decorators:[a(r,"datepicker-disabled-style")]},d={tags:["!dev"],render:()=>t`
     <dss-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    `,decorators:[a(r,"datepicker-readonly-style")]},n={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker>
        <label slot="label" for="datepickerRequired">Data</label>
        <input slot="input" id="datepickerRequired" type="text"  required />
    </dss-datepicker>
  </div>
    `,decorators:[a(r,"datepicker-required-style")]},p={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker invalid>
        <label slot="label" for="datepickerInvalid">Data</label>
        <input slot="input" id="datepickerInvalid" type="text"  />
    </dss-datepicker>
  </div>
    `,decorators:[a(r,"datepicker-invalid-style")]},o={tags:["!dev"],render:()=>t`
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
    `,decorators:[a(r,"datepicker-timepicker-style")]},c={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
    <dss-datepicker showButtons leftLabel="Cancel" rightLabel="Accept">
        <label slot="label" for="datepickerButtons">Data</label>
        <input slot="input" id="datepickerButtons" type="text"  />
    </dss-datepicker>
  </div>
    `},u={tags:["!dev"],render:()=>{const e=new Date,k=e.getFullYear(),b=e.getMonth(),E=JSON.stringify([{date:`4/${b+1}/${k}`,type:"green"},{date:`15/${b+1}/${k}`,type:"yellow"},{date:`27/${b+1}/${k}`,type:"red"}]);return t`
     <div class="datepicker-canvas">
                <dss-datepicker customCalendar=${E}>
                    <label slot="label" for="customCalendar">Dates personalitzades</label>
                    <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    `},decorators:[a(r,"datepicker-custom-calendar-style")]},m={tags:["!dev"],render:()=>t`
     <div class="datepicker-canvas">
            <dss-datepicker validate minDate="20/01/2024" maxDate="20/12/2026" helpText="Min 20/01/2024 || Max 20/12/2026">
                <label slot="label" for="dpValidation">Data</label>
                <input slot="input" id="dpValidation" type="text"  />
            </dss-datepicker>
        </div>
    `,decorators:[a(r,"datepicker-validation-style")]};var v,y,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,h,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-sizes-style')]
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,S,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-datepicker>
      <label slot="label" for="datepickerDisabled">Data</label>
      <input slot="input" id="datepickerDisabled" type="text"  disabled />
  </dss-datepicker>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-disabled-style')]
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,$,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-datepicker>
      <label slot="label" for="datepickerReadOnly">Data</label>
      <input slot="input" id="datepickerReadOnly" type="text"  value="07/12/2023" readonly/>
  </dss-datepicker>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-readonly-style')]
}`,...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var H,L,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-required-style')]
}`,...(R=(L=n.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var z,C,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-invalid-style')]
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var q,O,B;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-timepicker-style')]
}`,...(B=(O=o.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var V,Y,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var A,F,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                <dss-datepicker customCalendar=\${customCalendar}>
                    <label slot="label" for="customCalendar">Dates personalitzades</label>
                    <input slot="input" id="customCalendar" type="text"  />
                </dss-datepicker>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-custom-calendar-style')]
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var G,J,j;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-validation-style')]
}`,...(j=(J=m.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};const N=["Playground","Sizes","Disabled","ReadOnly","Required","Invalid","Timepicker","Buttons","CustomCalendar","Validation"],W=Object.freeze(Object.defineProperty({__proto__:null,Buttons:c,CustomCalendar:u,Disabled:l,Invalid:p,Playground:i,ReadOnly:d,Required:n,Sizes:s,Timepicker:o,Validation:m,__namedExportsOrder:N,default:K},Symbol.toStringTag,{value:"Module"}));export{u as C,l as D,p as I,i as P,d as R,W as S,o as T,m as V,s as a,n as b};
