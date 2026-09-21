import{x as r}from"./lit-html-D6cejpwM.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const o=`
  .container--flex {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 48px;
    }
    .container--dropdown {
        height: 330px;
    }
`,P={title:"Components/Form/Timepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},dropdown:{name:"Tipus de selector",control:{type:"radio"},options:["list","manual"]},minutesRange:{name:"Interval de minuts",control:{type:"number"}},minHour:{name:"Hora mínima",control:{type:"number"}},maxHour:{name:"Hora màxima",control:{type:"number"}},helpText:{name:"Missatge d’ajuda inicial"},errorTimeFormatText:{name:"Missatge per format d’hora incorrecte"},errorTimeOptionText:{name:"Missatge per opció no disponible al desplegable"}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"schedule",required:!1,readonly:!1,disabled:!1,dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},render:e=>r`
            <div style="max-width:280px; height:330px;">
                <dss-form-timepicker
                    name="myTimepicker"
                    size="${e.size}"
                    .icon="${e.showIcon?e.icon:null}"
                    label="${e.label}"
                    ?hideLabel=${e.hideLabel}
                    .placeholder="${e.showPlaceholder?e.placeholder:""}" 
                    ?required=${e.required} 
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                    helpText=${e.helpText}
                    dropdown="${e.dropdown}"
                    minutesRange="${e.minutesRange}"
                    minHour="${e.minHour}"
                    maxHour="${e.maxHour}"
                    errorTimeFormatText="${e.errorTimeFormatText}"
                    errorTimeOptionText="${e.errorTimeOptionText}"
                >	
                </dss-form-timepicker>
            </div>
        `},i={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerLG" size="lg" label="Label"></dss-form-timepicker>
                <dss-form-timepicker name="timepickerMD" size="md" label="Label"></dss-form-timepicker>
                <dss-form-timepicker name="timepickerSM" size="sm" label="Label"></dss-form-timepicker>
            </div>
        `,decorators:[a(o,"timepicker-default")]},s={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerDisabled" label="Label" disabled></dss-form-timepicker>
            </div>
        `,decorators:[a(o,"timepicker-disabled")]},l={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerReadOnly" label="Label" value="12:30" readOnly></dss-form-timepicker>
            </div>
        `,decorators:[a(o,"timepicker-readonly")]},n={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker 
                    name="timepickerDropdownList" 
                    label="Label" 
                    dropdown="list">
                </dss-form-timepicker>
                <dss-form-timepicker 
                    name="timepickerDropdownListOptions" 
                    label="Label"
                    dropdown="list" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-form-timepicker>
        </div>
    `,decorators:[a(o,"timepicker-dropdown-list")]},m={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker 
                    name="timepickerDropdownCustom" 
                    label="Label" 
                    dropdown="list" 
                    customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" 
                    helpText="Help text.">
                </dss-form-timepicker>
        </div>
    `,decorators:[a(o,"timepicker-dropdown-list-custom")]},d={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker
                    name="timepickerDropdownManual" 
                    label="Label" 
                    dropdown="manual">
                </dss-form-timepicker>
                <dss-form-timepicker
                    name="timepickerDropdownManualOptions" 
                    label="Label" 
                    dropdown="manual" 
                    errorTimeOptionText="Option not available" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-form-timepicker>
        </div>
    `,decorators:[a(o,"timepicker-dropdown-manual")]},c={tags:["!dev"],render:()=>r`
            <div class="container--flex container--dropdown">
                <dss-button label="Focus" @click=${()=>{const p=document.querySelector("#manual-focus-demo");p&&p.focus()}}></dss-button>
                <dss-form-timepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Help text."
                    dropdown="manual"
                    minHour="8"
                    maxHour="18"
                    minutesRange="15">
                </dss-form-timepicker>
            </div>
        `,decorators:[a(o,"timepicker-focus-style")]};var u,x,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev'
    }
  },
  args: {
    size: 'lg',
    label: 'Label',
    hideLabel: false,
    showIcon: true,
    icon: 'schedule',
    required: false,
    readonly: false,
    disabled: false,
    dropdown: 'list',
    minutesRange: 1,
    minHour: 0,
    maxHour: 23,
    helpText: 'Help text.',
    errorTimeFormatText: 'Format not valid.',
    errorTimeOptionText: 'Option not available.'
  },
  render: (args: any) => {
    return html\`
            <div style="max-width:280px; height:330px;">
                <dss-form-timepicker
                    name="myTimepicker"
                    size="\${args.size}"
                    .icon="\${args.showIcon ? args.icon : null}"
                    label="\${args.label}"
                    ?hideLabel=\${args.hideLabel}
                    .placeholder="\${args.showPlaceholder ? args.placeholder : ''}" 
                    ?required=\${args.required} 
                    ?readonly=\${args.readonly} 
                    ?disabled=\${args.disabled}
                    helpText=\${args.helpText}
                    dropdown="\${args.dropdown}"
                    minutesRange="\${args.minutesRange}"
                    minHour="\${args.minHour}"
                    maxHour="\${args.maxHour}"
                    errorTimeFormatText="\${args.errorTimeFormatText}"
                    errorTimeOptionText="\${args.errorTimeOptionText}"
                >	
                </dss-form-timepicker>
            </div>
        \`;
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,k,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerLG" size="lg" label="Label"></dss-form-timepicker>
                <dss-form-timepicker name="timepickerMD" size="md" label="Label"></dss-form-timepicker>
                <dss-form-timepicker name="timepickerSM" size="sm" label="Label"></dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-default')]
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var v,g,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerDisabled" label="Label" disabled></dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-disabled')]
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,T,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerReadOnly" label="Label" value="12:30" readOnly></dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-readonly')]
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var H,S,$;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker 
                    name="timepickerDropdownList" 
                    label="Label" 
                    dropdown="list">
                </dss-form-timepicker>
                <dss-form-timepicker 
                    name="timepickerDropdownListOptions" 
                    label="Label"
                    dropdown="list" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-form-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-list')]
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var D,O,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker 
                    name="timepickerDropdownCustom" 
                    label="Label" 
                    dropdown="list" 
                    customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" 
                    helpText="Help text.">
                </dss-form-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-list-custom')]
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var R,M,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-form-timepicker
                    name="timepickerDropdownManual" 
                    label="Label" 
                    dropdown="manual">
                </dss-form-timepicker>
                <dss-form-timepicker
                    name="timepickerDropdownManualOptions" 
                    label="Label" 
                    dropdown="manual" 
                    errorTimeOptionText="Option not available" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-form-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-manual')]
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var q,I,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="container--flex container--dropdown">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-form-timepicker
                    id="manual-focus-demo"
                    label="Label"
                    helpText="Help text."
                    dropdown="manual"
                    minHour="8"
                    maxHour="18"
                    minutesRange="15">
                </dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-focus-style')]
}`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const _=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual","Focus"],A=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:i,CustomDropdownList:m,Disabled:s,DropdownList:n,DropdownManual:d,Focus:c,Playground:t,ReadOnly:l,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{i as B,m as C,s as D,c as F,t as P,l as R,A as S,n as a,d as b};
