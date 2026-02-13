import{x as r}from"./iframe-DLVb3rJw.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const t=`
  .container--flex {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 48px;
    }
    .container--dropdown {
        height: 330px;
    }
`,p={title:"Components/Timepicker",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},dropdown:{name:"Tipus de selector",control:{type:"radio"},options:["list","manual"]},minutesRange:{name:"Interval de minuts",control:{type:"number"}},minHour:{name:"Hora mínima",control:{type:"number"}},maxHour:{name:"Hora màxima",control:{type:"number"}},helpText:{name:"Missatge d’ajuda inicial"},errorTimeFormatText:{name:"Missatge per format d’hora incorrecte"},errorTimeOptionText:{name:"Missatge per opció no disponible al desplegable"}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"schedule",required:!1,readonly:!1,disabled:!1,dropdown:"list",minutesRange:1,minHour:0,maxHour:23,helpText:"Help text.",errorTimeFormatText:"Format not valid.",errorTimeOptionText:"Option not available."},render:e=>r`
            <div style="max-width:280px; height:330px;">
                <dss-timepicker
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
                </dss-timepicker>
            </div>
        `},o={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-timepicker name="timepickerLG" size="lg" label="Label"></dss-timepicker>
                <dss-timepicker name="timepickerMD" size="md" label="Label"></dss-timepicker>
                <dss-timepicker name="timepickerSM" size="sm" label="Label"></dss-timepicker>
            </div>
        `,decorators:[a(t,"timepicker-default")]},s={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-timepicker name="timepickerDisabled" label="Label" disabled></dss-timepicker>
            </div>
        `,decorators:[a(t,"timepicker-disabled")]},l={tags:["!dev"],render:()=>r`
            <div class="container--flex">
                <dss-timepicker name="timepickerReadOnly" label="Label" value="12:30" readOnly></dss-timepicker>
            </div>
        `,decorators:[a(t,"timepicker-readonly")]},n={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-timepicker 
                    name="timepickerDropdownList" 
                    label="Label" 
                    dropdown="list">
                </dss-timepicker>
                <dss-timepicker 
                    name="timepickerDropdownListOptions" 
                    label="Label"
                    dropdown="list" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-timepicker>
        </div>
    `,decorators:[a(t,"timepicker-dropdown-list")]},d={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-timepicker 
                    name="timepickerDropdownCustom" 
                    label="Label" 
                    dropdown="list" 
                    customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" 
                    helpText="Help text.">
                </dss-timepicker>
        </div>
    `,decorators:[a(t,"timepicker-dropdown-list-custom")]},m={tags:["!dev"],render:()=>r`
        <div class="container--flex container--dropdown">
                <dss-timepicker
                    name="timepickerDropdownManual" 
                    label="Label" 
                    dropdown="manual">
                </dss-timepicker>
                <dss-timepicker
                    name="timepickerDropdownManualOptions" 
                    label="Label" 
                    dropdown="manual" 
                    errorTimeOptionText="Option not available" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-timepicker>
        </div>
    `,decorators:[a(t,"timepicker-dropdown-manual")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                <dss-timepicker
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
                </dss-timepicker>
            </div>
        \`;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-timepicker name="timepickerLG" size="lg" label="Label"></dss-timepicker>
                <dss-timepicker name="timepickerMD" size="md" label="Label"></dss-timepicker>
                <dss-timepicker name="timepickerSM" size="sm" label="Label"></dss-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-default')]
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-timepicker name="timepickerDisabled" label="Label" disabled></dss-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-disabled')]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="container--flex">
                <dss-timepicker name="timepickerReadOnly" label="Label" value="12:30" readOnly></dss-timepicker>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-readonly')]
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-timepicker 
                    name="timepickerDropdownList" 
                    label="Label" 
                    dropdown="list">
                </dss-timepicker>
                <dss-timepicker 
                    name="timepickerDropdownListOptions" 
                    label="Label"
                    dropdown="list" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-list')]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-timepicker 
                    name="timepickerDropdownCustom" 
                    label="Label" 
                    dropdown="list" 
                    customTimeListOptions="[{&#x22;value&#x22;:&#x22;08:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;09:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;10:00&#x22;, &#x22;state&#x22;:&#x22;ocupat&#x22;},{&#x22;value&#x22;:&#x22;11:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;},{&#x22;value&#x22;:&#x22;12:00&#x22;, &#x22;state&#x22;:&#x22;available&#x22;}]" 
                    helpText="Help text.">
                </dss-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-list-custom')]
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="container--flex container--dropdown">
                <dss-timepicker
                    name="timepickerDropdownManual" 
                    label="Label" 
                    dropdown="manual">
                </dss-timepicker>
                <dss-timepicker
                    name="timepickerDropdownManualOptions" 
                    label="Label" 
                    dropdown="manual" 
                    errorTimeOptionText="Option not available" 
                    helpText="Help text." 
                    minHour="8" 
                    maxHour="18" 
                    minutesRange="15">
                </dss-timepicker>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'timepicker-dropdown-manual')]
}`,...m.parameters?.docs?.source}}};const c=["Playground","ByDefault","Disabled","ReadOnly","DropdownList","CustomDropdownList","DropdownManual"],b=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:o,CustomDropdownList:d,Disabled:s,DropdownList:n,DropdownManual:m,Playground:i,ReadOnly:l,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{o as B,d as C,s as D,i as P,l as R,b as S,n as a,m as b};
