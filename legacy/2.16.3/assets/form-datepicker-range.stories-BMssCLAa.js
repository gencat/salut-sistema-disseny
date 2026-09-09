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
`,ae={title:"Components/Form/Datepicker Range",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},labelStart:{name:"Label per a la data dinici"},labelEnd:{name:"Label per a la data fin"},iconRangeStart:{name:"Icona per a la data dinici"},iconRangeEnd:{name:"icona per a la data fin"},helpText:{name:"Message for initial help"},invalid:{name:"Mostrar error",control:{type:"boolean"}},showButtons:{name:"Mostrar botons",control:{type:"boolean"},if:{arg:"showTime",truthy:!1}},leftLabel:{name:"Botó esquerra"},rightLabel:{name:"Botó dreta"}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=750-7973&m=dev"}},args:{size:"md",labelStart:"Data inici",labelEnd:"Data fi",iconRangeStart:"calendar_month",iconRangeEnd:"calendar_month",helpText:"Help text.",invalid:!1,showButtons:!1,leftLabel:"Cancel·lar",rightLabel:"Acceptar"},render:e=>a`
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
        `},l={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},d={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="md" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},i={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    size="sm" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `,decorators:[t(r,"datepicker-range-sizes-style")]},c={tags:["!dev"],render:()=>a`
            <dss-form-datepicker-range 
                disabled
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-disabled-style")]},o={tags:["!dev"],render:()=>a`
            <dss-form-datepicker-range 
                readonly
                value="15/08/2024,20/08/2024"
                size="lg" 
                labelRangeStart="Data inicial" 
                labelRangeEnd="Data final"
                helpText="Help text." 
            >
            </dss-form-datepicker-range>
        `,decorators:[t(r,"datepicker-range-readonly-style")]},p={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-required-style")]},g={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-invalid-style")]},m={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-buttons-style")]},u={tags:["!dev"],render:()=>{const e=new Date,n=e.getFullYear(),k=e.getMonth(),ee=JSON.stringify([{date:`4/${k+1}/${n}`,type:"green"},{date:`15/${k+1}/${n}`,type:"yellow"},{date:`27/${k+1}/${n}`,type:"red"}]);return a`
            <div class="datepicker-canvas">
                <dss-form-datepicker-range 
                    customCalendar='${ee}'
                    size="lg" 
                    labelRangeStart="Data inicial" 
                    labelRangeEnd="Data final"
                    helpText="Help text." 
                >
                </dss-form-datepicker-range>
            </div>
        `},decorators:[t(r,"datepicker-range-custom-calendar-style")]},f={tags:["!dev"],render:()=>a`
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
        `,decorators:[t(r,"datepicker-range-validation-style")]},v={tags:["!dev"],render:()=>a`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=${()=>{const n=document.querySelector("#manual-focus-demo");n&&n.focus()}}></dss-button>
                <dss-form-datepicker-range 
                    id="manual-focus-demo"
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
        `,decorators:[t(r,"datepicker-range-focus-style")]};var b,S,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,x,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var D,w,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,$,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=($=i.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var L,M,H;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(M=c.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var B,C,F;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var q,I,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var Y,A,P;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,J,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(J=m.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var V,G,K;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(G=u.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var N,X,Q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Q=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var U,W,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="datepicker-canvas">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-form-datepicker-range 
                    id="manual-focus-demo"
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
  decorators: [withStyle(wrapperStyle, 'datepicker-range-focus-style')]
}`,...(Z=(W=v.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};const te=["Playground","SizeLG","SizeMD","SizeSM","Disabled","Readonly","Required","Invalid","Buttons","CustomCalendar","Validation","Focus"],se=Object.freeze(Object.defineProperty({__proto__:null,Buttons:m,CustomCalendar:u,Disabled:c,Focus:v,Invalid:g,Playground:s,Readonly:o,Required:p,SizeLG:l,SizeMD:d,SizeSM:i,Validation:f,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{m as B,u as C,c as D,v as F,g as I,s as P,o as R,se as S,f as V,l as a,d as b,i as c,p as d};
