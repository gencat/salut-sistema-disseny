import{x as a}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .datepicker-canvas {
        min-height: 350px;
        display: flex;
        justify-content: flex-start;
        gap: 24px;
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
`,U={title:"Components/Form/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range
                    .labelRangeStart=${e.labelStart}
                    .labelRangeEnd=${e.labelEnd}
                    size=${e.size}
                    .helpText=${e.helpText}
                    ?invalid=${e.invalid}
                    ?showButtons=${e.showButtons}
                    .iconRangeStart=${e.iconRangeStart}
                    .iconRangeEnd=${e.iconRangeEnd}
                    .calendarLeftButtonLabel=${e.leftLabel}
                    .calendarRightButtonLabel=${e.rightLabel}
                >
                </dss-form-datepicker-range>
            </div>
        `},s={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>a`
            <dss-form-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-disabled-style")]},c={tags:["!dev"],render:()=>a`
            <dss-form-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-readonly-style")]},o={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    required
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-required-style")]},p={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    invalid
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-invalid-style")]},g={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    showButtons
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                    calendarLeftButtonLabel="Cancel" 
                    calendarRightButtonLabel="Accept"
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-buttons-style")]},m={tags:["!dev"],render:()=>{const e=new Date,f=e.getFullYear(),v=e.getMonth(),Q=JSON.stringify([{date:`4/${v+1}/${f}`,type:"green"},{date:`15/${v+1}/${f}`,type:"yellow"},{date:`27/${v+1}/${f}`,type:"red"}]);return a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    customCalendar='${Q}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `},decorators:[t(r,"datepicker-range-custom-calendar-style")]},u={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    validate 
                    minDate="20/01/2024" 
                    maxDate="20/12/2026" 
                    helpText="Min 20/01/2024 || Max 20/12/2026"
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-validation-style")]};var k,b,h;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
                <dss-form-datepicker-range
                    .labelRangeStart=\${args.labelStart}
                    .labelRangeEnd=\${args.labelEnd}
                    size=\${args.size}
                    .helpText=\${args.helpText}
                    ?invalid=\${args.invalid}
                    ?showButtons=\${args.showButtons}
                    .iconRangeStart=\${args.iconRangeStart}
                    .iconRangeEnd=\${args.iconRangeEnd}
                    .calendarLeftButtonLabel=\${args.leftLabel}
                    .calendarRightButtonLabel=\${args.rightLabel}
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,y,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var x,D,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...(w=(D=l.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var z,E,$;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-sizes-style')]
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var T,L,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-disabled-style')]
}`,...(B=(L=i.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var H,M,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-readonly-style')]
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var I,_,q;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    required
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-required-style')]
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var F,Y,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    invalid
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-invalid-style')]
}`,...(A=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var P,O,J;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    showButtons
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                    calendarLeftButtonLabel="Cancel" 
                    calendarRightButtonLabel="Accept"
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-buttons-style')]
}`,...(J=(O=g.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var j,V,G;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
                <dss-form-datepicker-range 
                    customCalendar='\${customCalendar}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-custom-calendar-style')]
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,N,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    validate 
                    minDate="20/01/2024" 
                    maxDate="20/12/2026" 
                    helpText="Min 20/01/2024 || Max 20/12/2026"
                >
                </dss-form-datepicker-range>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'datepicker-range-validation-style')]
}`,...(X=(N=u.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const W=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],ae=Object.freeze(Object.defineProperty({__proto__:null,Buttons:g,CustomCalendar:m,Disabled:i,Invalid:p,Playground:n,Readonly:c,Required:o,SizeLG:s,SizeMD:l,SizeSM:d,Validation:u,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{g as B,m as C,i as D,p as I,n as P,c as R,ae as S,u as V,s as a,l as b,d as c,o as d};
