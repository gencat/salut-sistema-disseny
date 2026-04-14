import{x as e}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,N={title:"Components/Form/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:a=>e`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range
                    .labelRangeStart=${a.labelStart}
                    .labelRangeEnd=${a.labelEnd}
                    size=${a.size}
                    .helpText=${a.helpText}
                    ?invalid=${a.invalid}
                    ?showButtons=${a.showButtons}
                    .iconRangeStart=${a.iconRangeStart}
                    .iconRangeEnd=${a.iconRangeEnd}
                    .calendarLeftButtonLabel=${a.leftLabel}
                    .calendarRightButtonLabel=${a.rightLabel}
                >
                </dss-form-datepicker-range>
            </div>
        `},s={tags:["!dev"],render:()=>e`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},l={tags:["!dev"],render:()=>e`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>e`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>e`
            <dss-form-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-disabled-style")]},c={tags:["!dev"],render:()=>e`
            <dss-form-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-readonly-style")]},o={tags:["!dev"],render:()=>e`
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
        `,decorators:[t(r,"datepicker-range-required-style")]},p={tags:["!dev"],render:()=>e`
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
        `,decorators:[t(r,"datepicker-range-invalid-style")]},g={tags:["!dev"],render:()=>e`
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
        `,decorators:[t(r,"datepicker-range-buttons-style")]},m={tags:["!dev"],render:()=>e`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-custom-calendar-style")]},u={tags:["!dev"],render:()=>e`
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
        `,decorators:[t(r,"datepicker-range-validation-style")]};var f,v,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var b,S,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,R,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(R=l.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var D,w,z;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,T,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var B,H,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(H=c.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var C,M,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(M=o.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var q,A,I;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var P,F,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var O,V,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    customCalendar='[{"date":"6/5/2025","type":"green"},{"date":"15/5/2025","type":"yellow"},{"date":"26/5/2025","type":"red"}]'
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
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,K,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=u.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Q=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation"],Y=Object.freeze(Object.defineProperty({__proto__:null,Buttons:g,CustomCalendar:m,Disabled:d,Invalid:p,Playground:n,Readonly:c,Required:o,SizeLG:s,SizeMD:l,SizeSM:i,Validation:u,__namedExportsOrder:Q,default:N},Symbol.toStringTag,{value:"Module"}));export{g as B,d as D,p as I,n as P,c as R,Y as S,u as V,s as a,l as b,i as c,o as d};
