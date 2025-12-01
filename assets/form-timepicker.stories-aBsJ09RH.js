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
`,R={title:"Components/Form/Timepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},dropdown:{name:"Tipus de selector",control:{type:"radio"},options:["list","manual"]},minutesRange:{name:"Interval de minuts",control:{type:"number"}},minHour:{name:"Hora mínima",control:{type:"number"}},maxHour:{name:"Hora màxima",control:{type:"number"}},helpText:{name:"Missatge d’ajuda inicial"},errorTimeFormatText:{name:"Missatge per format d’hora incorrecte"},errorTimeOptionText:{name:"Missatge per opció no disponible al desplegable"}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"schedule",required:!1,readonly:!1,disabled:!1,dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},render:e=>r`
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
    `,decorators:[a(o,"timepicker-dropdown-manual")]};var p,c,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(c=t.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var u,b,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,w,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerDisabled" label="Label" disabled></dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-disabled')]
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var g,h,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-form-timepicker name="timepickerReadOnly" label="Label" value="12:30" readOnly></dss-form-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-readonly')]
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,L,H;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(L=n.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var S,$,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=($=m.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var O,z,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const F=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual"],C=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:i,CustomDropdownList:m,Disabled:s,DropdownList:n,DropdownManual:d,Playground:t,ReadOnly:l,__namedExportsOrder:F,default:R},Symbol.toStringTag,{value:"Module"}));export{i as B,m as C,s as D,t as P,l as R,C as S,n as a,d as b};
