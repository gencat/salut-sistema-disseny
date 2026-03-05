import{x as e}from"./iframe-CdZ_4rdx.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .innerZoomElementWrapper {
        flex-direction: row;
        align-items: center;
    }
    .wrapper {
        width: 400px;
    }
    .wrapper--fixed-height {
        height: 250px;
    }
    .popover-wrapper {
        height: 500px;
        width: 600px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .popover-wrapper--xl {
        width: 900px;
        gap: 100px
    }
    .demo-wrapper {
        position: relative;
        width: fit-content;
    }
    .demo-related-content {
        font-size: 12px;
        color: lightgray;
    }
`,f={title:"Collections/Widget",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["container","accordion"]},boxStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},icon:{name:"Icona",control:{type:"text"}},title:{name:"Títol",control:{type:"text"}},hasBadgeResults:{name:"Mostra badge resultats",control:{type:"boolean"}},badgeResultsText:{name:"Text del badge resultats",control:{type:"text"},if:{arg:"hasBadgeResults",truthy:!0}},badgeResultsState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeResults",truthy:!0}},hasBadgeInfo:{name:"Mostra badge informació",control:{type:"boolean"}},badgeInfoText:{name:"Text del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoIcon:{name:"Icona del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeInfo",truthy:!0}},hasBadgeNotifications:{name:"Mostra badge notificacions",control:{type:"boolean"}},badgeNotificationsNumber:{name:"Nombre de notificacions",control:{type:"number",max:99,min:0},if:{arg:"hasBadgeNotifications",truthy:!0}},badgeNotificationsState:{name:"Estat del badge notificacions",control:{type:"select"},options:["success","error","alert","info"],if:{arg:"hasBadgeNotifications",truthy:!0}},hasButtonAction:{name:"Mostra botó acció",control:{type:"boolean"}},buttonActionIcon:{name:"Botó acció icona",if:{arg:"hasButtonAction",truthy:!0}},buttonActionFill:{name:"Botó acció tipus fill",control:{type:"boolean"},if:{arg:"hasButtonAction",truthy:!0}},hasButtonNext:{name:"Mostra botó següent",control:{type:"boolean"}},hasButtonClose:{name:"Mostra botó tancar",control:{type:"boolean"}},elements:{name:"Nombre de ítems",control:{type:"number",max:10,min:1}},elementTitle:{name:"Element Title"},elementSubtitle:{name:"Element Subtitle"},elementDate:{name:"Element Date"},elementDescription:{name:"Element Description"},elementIcons:{name:"Nombre de icones",control:{type:"number",max:2,min:1}},elementActions:{name:"Nombre de accions",control:{type:"number",max:2,min:1}},elementLeftBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},elementRightBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},showSections:{name:"Mostrar seccions amb títols i switch",control:{type:"boolean"}},sectionTitle:{name:"Títol secció",control:{type:"text"},if:{arg:"showSections",truthy:!0}},sectionSwitchText:{name:"Switch description",control:{type:"text"},if:{arg:"showSections",truthy:!0}},showHelpText:{name:" Mostra el text d'ajuda",control:{type:"boolean"}},helpText:{name:"Text d'ajuda",if:{arg:"showHelpText",truthy:!0}}},parameters:{layout:"centered"}},n={args:{variant:"container",boxStyle:"box",icon:"add_box",title:"Títol widget",hasBadgeResults:!0,badgeResultsText:"7",badgeResultsState:"neutral",hasBadgeInfo:!0,badgeInfoText:"Error carrega",badgeInfoIcon:"sync_problem",badgeInfoState:"critic",hasBadgeNotifications:!0,badgeNotificationsNumber:2,badgeNotificationsState:"alert",showHelpText:!0,helpText:"Help Text",hasButtonAction:!0,buttonActionIcon:"add_box",buttonActionFill:!1,hasButtonNext:!0,hasButtonClose:!0,showSections:!0,sectionTitle:"Títol secció",sectionSwitchText:"Lorem ipsum dolor sit amet.",elements:3,elementTitle:"Títol ",elementSubtitle:"Subtítol",elementDate:"20/03/2024",elementDescription:"TIPOLOGIA",elementIcons:1,elementActions:1,elementLeftBadgeState:"danger-high",elementRightBadgeState:"danger-high"},render:t=>{const w=Array.from({length:t.elements}),u=Array.from({length:t.elementIcons}),b=Array.from({length:t.elementActions}),h=e`
            ${t.showSections?e`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">${t.sectionTitle}</dss-typography>
                <dss-tile type="action" description="${t.sectionSwitchText}" widget heightAuto>
                    <dss-switch size="md" checked slot="action"></dss-switch>
                </dss-tile>
                `:null}
            ${t.showSections?e`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">${t.sectionTitle}</dss-typography>
                `:null}
            <dss-item-list widget>
                ${w.map(()=>e`
                        <dss-item-list-base
                            titleText="${t.elementTitle}"
                            subtitle="${t.elementSubtitle}"
                            date="${t.elementDate}"
                            decorativeIcon="${t.showDecorativeIcon?t.decorativeIcon:""}"
                            decorativeIconState="${t.showDecorativeIcon?t.decorativeIconState:""}"
                            criticity="${t.elementLeftBadgeState}"
                            criticityLabel="Label"
                        >
                            <dss-typography tag="p" variant="body-3" fontweight="regular">
                                ${t.elementDescription}
                            </dss-typography>
                            ${u.map(()=>e`
                                    <dss-icon icon="add_box"></dss-icon>
                                `)}
                            <dss-icon-badge size="sm" state="${t.elementRightBadgeState}"></dss-icon-badge>
                            </dss-badge>
                            ${b.map(()=>e`
                                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                                `)}
                        </dss-item-list-base>
                    `)} 
            </dss-item-list>
        `,y=e`
            <div style="width:600px">
                <dss-widget
                    variant="${t.boxStyle}"
                    titleText="${t.title}" 
                    icon="${t.icon}" 
                    results="${t.badgeResultsText}"
                    resultsState="${t.badgeResultsState}"
                    info="${t.badgeInfoText}"
                    infobadgestate="${t.badgeInfoState}" 
                    infobadgeicon="${t.badgeInfoIcon}"
                    notifications="${t.badgeNotificationsNumber}" 
                    notificationsstate="${t.badgeNotificationsState}"
                    ?hasAction="${t.hasButtonAction}"
                    actionIcon="${t.hasButtonAction?t.buttonActionIcon:""}"
                    ?actionFill=${t.buttonActionFill}
                    ?hasNext="${t.hasButtonNext}"
                    ?hasClose="${t.hasButtonClose}"
                    helpText="${t.showHelpText?t.helpText:null}"
                >
                    ${h}
                </dss-widget>
            </div>
        `,x=e`
            <div style="width:600px">
                <dss-accordion 
                    accordionStyle="${t.boxStyle}"
                    titleText="${t.title}" 
                    icon="${t.icon}" 
                    widget
                    widgetBadgeText="${t.badgeResultsText}"
                    widgetBadgeState="${t.badgeResultsState}"
                    info="${t.badgeInfoText}"
                    infobadgestate="${t.badgeInfoState}" 
                    infobadgeicon="${t.badgeInfoIcon}"
                    notifications="${t.badgeNotificationsNumber}" 
                    notificationsstate="${t.badgeNotificationsState}"
                    ?hasSecondaryAction="${t.hasButtonAction}"
                    secondaryActionIcon="add_box"
                    ?widgetShowNext="${t.hasButtonNext}"
                    ?widgetShowClose="${t.hasButtonClose}"
                    >
                    ${h}
                </dss-accordion>
            </div>
        `;switch(t.variant){case"accordion":return x;default:return y}}},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-widget 
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    >
                        <dss-item-list widget>
                            ${s(3)}
                        </dss-item-list>
                </dss-widget>
            </div>
    `,decorators:[o(i,"widget-container-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-widget 
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    folded
                    >
                </dss-widget>
            </div>
    `,decorators:[o(i,"widget-folded-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper wrapper--fixed-height">
                <dss-widget 
                    hasScroll
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    >
                        <dss-item-list widget>
                            ${s(4)}
                        </dss-item-list>
                </dss-widget>
            </div>
    `,decorators:[o(i,"widget-container-scroll-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                    >
                        <dss-item-list widget>
                            ${s(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    `,decorators:[o(i,"widget-accordion-box-style")]},l={tags:["!dev"],render:()=>e`
      <div class="popover-wrapper popover-wrapper--xl">
            <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK TO OPEN WIDGET CONTAINER</p>
                    <dss-popover position="bottom" hideCloseIcon>
                        <dss-popover-body slot="body">
                            <dss-widget 
                                variant="inner"
                                titleText="Títol widget" 
                                icon="add_box" 
                                widget
                                results="7"
                                resultsState="neutral"
                                hasNext
                                hasClose
                                >
                                    <dss-item-list widget>
                                        ${s(3)}
                                    </dss-item-list>
                                </dss-widget>
                        </dss-popover-body>
                    </dss-popover>
                </div>
                <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK TO OPEN WIDGET ACCORDION</p>
                    <dss-popover position="bottom" hideCloseIcon>
                        <dss-popover-body slot="body">
                            <dss-accordion 
                                    isOpen
                                    accordionStyle="inner"
                                    titleText="Títol widget" 
                                    icon="add_box" 
                                    widget
                                    widgetBadgeText="7"
                                    widgetBadgeState="neutral"
                                    widgetShowNext
                                    widgetShowClose
                                    >
                                        <dss-item-list widget>
                                            ${s(3)}
                                        </dss-item-list>
                                </dss-accordion>
                        </dss-popover-body>
                    </dss-popover>
                </div>
            </div>
    `,decorators:[o(i,"widget-popover-style")]},g={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">Títol secció</dss-typography>
                        <dss-tile type="action" widget="" heightauto="" description="Lorem ipsum dolor sit amet.">
                            <dss-switch size="md" checked="" slot="action"></dss-switch>
                        </dss-tile>
                        
                        <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">Títol secció</dss-typography>
                        <dss-item-list widget>
                            ${s(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    `,decorators:[o(i,"widget-title-switch-style")]},p={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <dss-item-list widget>
                            ${s(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    `,decorators:[o(i,"widget-actions-style")]},m={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-tile type="action" widget="" heightauto="" description="Lorem ipsum dolor sit amet.">
                            <dss-switch size="md" checked="" slot="action"></dss-switch>
                        </dss-tile>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            ${s(4)}
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            ${s(2)}
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            ${s(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    `,decorators:[o(i,"widget-sections-style")]},s=t=>Array.from({length:t},()=>e`
        <dss-item-list-base titleText="Títol" subtitle="Subtítol" date="20/03/2024" criticity="danger-high">
            <dss-typography tag="p" variant="body-3" fontweight="regular">TIPOLOGIA</dss-typography>
            <dss-icon icon="add_box"></dss-icon>
            <dss-badge text="1" size="sm" state="info" outlined hideIcon></dss-badge>
            <dss-chip icon="add_box" size="xs"></dss-chip>
            <dss-icon-badge size="sm" state="danger-high"></dss-icon-badge>
            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
        </dss-item-list-base>
    `);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'container',
    boxStyle: 'box',
    icon: 'add_box',
    title: 'Títol widget',
    hasBadgeResults: true,
    badgeResultsText: '7',
    badgeResultsState: 'neutral',
    hasBadgeInfo: true,
    badgeInfoText: 'Error carrega',
    badgeInfoIcon: 'sync_problem',
    badgeInfoState: 'critic',
    hasBadgeNotifications: true,
    badgeNotificationsNumber: 2,
    badgeNotificationsState: 'alert',
    showHelpText: true,
    helpText: 'Help Text',
    hasButtonAction: true,
    buttonActionIcon: 'add_box',
    buttonActionFill: false,
    hasButtonNext: true,
    hasButtonClose: true,
    showSections: true,
    sectionTitle: 'Títol secció',
    sectionSwitchText: 'Lorem ipsum dolor sit amet.',
    elements: 3,
    elementTitle: 'Títol ',
    elementSubtitle: 'Subtítol',
    elementDate: '20/03/2024',
    elementDescription: 'TIPOLOGIA',
    elementIcons: 1,
    elementActions: 1,
    elementLeftBadgeState: 'danger-high',
    elementRightBadgeState: 'danger-high'
  },
  render: (args: any) => {
    const items = Array.from({
      length: args.elements
    });
    const icons = Array.from({
      length: args.elementIcons
    });
    const actions = Array.from({
      length: args.elementActions
    });
    const widgetBody = html\`
            \${args.showSections ? html\`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">\${args.sectionTitle}</dss-typography>
                <dss-tile type="action" description="\${args.sectionSwitchText}" widget heightAuto>
                    <dss-switch size="md" checked slot="action"></dss-switch>
                </dss-tile>
                \` : null}
            \${args.showSections ? html\`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">\${args.sectionTitle}</dss-typography>
                \` : null}
            <dss-item-list widget>
                \${items.map(() => html\`
                        <dss-item-list-base
                            titleText="\${args.elementTitle}"
                            subtitle="\${args.elementSubtitle}"
                            date="\${args.elementDate}"
                            decorativeIcon="\${args.showDecorativeIcon ? args.decorativeIcon : ''}"
                            decorativeIconState="\${args.showDecorativeIcon ? args.decorativeIconState : ''}"
                            criticity="\${args.elementLeftBadgeState}"
                            criticityLabel="Label"
                        >
                            <dss-typography tag="p" variant="body-3" fontweight="regular">
                                \${args.elementDescription}
                            </dss-typography>
                            \${icons.map(() => html\`
                                    <dss-icon icon="add_box"></dss-icon>
                                \`)}
                            <dss-icon-badge size="sm" state="\${args.elementRightBadgeState}"></dss-icon-badge>
                            </dss-badge>
                            \${actions.map(() => html\`
                                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                                \`)}
                        </dss-item-list-base>
                    \`)} 
            </dss-item-list>
        \`;
    const widgetContainer = html\`
            <div style="width:600px">
                <dss-widget
                    variant="\${args.boxStyle}"
                    titleText="\${args.title}" 
                    icon="\${args.icon}" 
                    results="\${args.badgeResultsText}"
                    resultsState="\${args.badgeResultsState}"
                    info="\${args.badgeInfoText}"
                    infobadgestate="\${args.badgeInfoState}" 
                    infobadgeicon="\${args.badgeInfoIcon}"
                    notifications="\${args.badgeNotificationsNumber}" 
                    notificationsstate="\${args.badgeNotificationsState}"
                    ?hasAction="\${args.hasButtonAction}"
                    actionIcon="\${args.hasButtonAction ? args.buttonActionIcon : ''}"
                    ?actionFill=\${args.buttonActionFill}
                    ?hasNext="\${args.hasButtonNext}"
                    ?hasClose="\${args.hasButtonClose}"
                    helpText="\${args.showHelpText ? args.helpText : null}"
                >
                    \${widgetBody}
                </dss-widget>
            </div>
        \`;
    const widgetAccordion = html\`
            <div style="width:600px">
                <dss-accordion 
                    accordionStyle="\${args.boxStyle}"
                    titleText="\${args.title}" 
                    icon="\${args.icon}" 
                    widget
                    widgetBadgeText="\${args.badgeResultsText}"
                    widgetBadgeState="\${args.badgeResultsState}"
                    info="\${args.badgeInfoText}"
                    infobadgestate="\${args.badgeInfoState}" 
                    infobadgeicon="\${args.badgeInfoIcon}"
                    notifications="\${args.badgeNotificationsNumber}" 
                    notificationsstate="\${args.badgeNotificationsState}"
                    ?hasSecondaryAction="\${args.hasButtonAction}"
                    secondaryActionIcon="add_box"
                    ?widgetShowNext="\${args.hasButtonNext}"
                    ?widgetShowClose="\${args.hasButtonClose}"
                    >
                    \${widgetBody}
                </dss-accordion>
            </div>
        \`;
    switch (args.variant) {
      case 'accordion':
        return widgetAccordion;
      default:
        return widgetContainer;
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-widget 
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    >
                        <dss-item-list widget>
                            \${renderItemListBase(3)}
                        </dss-item-list>
                </dss-widget>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-container-style')]
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-widget 
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    folded
                    >
                </dss-widget>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-folded-style')]
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--fixed-height">
                <dss-widget 
                    hasScroll
                    titleText="Títol widget" 
                    icon="add_box" 
                    results="7"
                    resutlsState="neutral"
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasAction
                    actionIcon="add_box"
                    hasNext
                    hasClose
                    >
                        <dss-item-list widget>
                            \${renderItemListBase(4)}
                        </dss-item-list>
                </dss-widget>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-container-scroll-style')]
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    info="Error carrega"
                    infobadgestate="critic" 
                    infobadgeicon="sync_problem"
                    notifications="1" 
                    notificationsstate="error"
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                    >
                        <dss-item-list widget>
                            \${renderItemListBase(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-accordion-box-style')]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="popover-wrapper popover-wrapper--xl">
            <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK TO OPEN WIDGET CONTAINER</p>
                    <dss-popover position="bottom" hideCloseIcon>
                        <dss-popover-body slot="body">
                            <dss-widget 
                                variant="inner"
                                titleText="Títol widget" 
                                icon="add_box" 
                                widget
                                results="7"
                                resultsState="neutral"
                                hasNext
                                hasClose
                                >
                                    <dss-item-list widget>
                                        \${renderItemListBase(3)}
                                    </dss-item-list>
                                </dss-widget>
                        </dss-popover-body>
                    </dss-popover>
                </div>
                <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK TO OPEN WIDGET ACCORDION</p>
                    <dss-popover position="bottom" hideCloseIcon>
                        <dss-popover-body slot="body">
                            <dss-accordion 
                                    isOpen
                                    accordionStyle="inner"
                                    titleText="Títol widget" 
                                    icon="add_box" 
                                    widget
                                    widgetBadgeText="7"
                                    widgetBadgeState="neutral"
                                    widgetShowNext
                                    widgetShowClose
                                    >
                                        <dss-item-list widget>
                                            \${renderItemListBase(3)}
                                        </dss-item-list>
                                </dss-accordion>
                        </dss-popover-body>
                    </dss-popover>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-popover-style')]
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">Títol secció</dss-typography>
                        <dss-tile type="action" widget="" heightauto="" description="Lorem ipsum dolor sit amet.">
                            <dss-switch size="md" checked="" slot="action"></dss-switch>
                        </dss-tile>
                        
                        <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">Títol secció</dss-typography>
                        <dss-item-list widget>
                            \${renderItemListBase(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-title-switch-style')]
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <dss-item-list widget>
                            \${renderItemListBase(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-actions-style')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Títol widget" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    >
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-tile type="action" widget="" heightauto="" description="Lorem ipsum dolor sit amet.">
                            <dss-switch size="md" checked="" slot="action"></dss-switch>
                        </dss-tile>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            \${renderItemListBase(4)}
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            \${renderItemListBase(2)}
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list widget>
                            \${renderItemListBase(3)}
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'widget-sections-style')]
}`,...m.parameters?.docs?.source}}};const S=["Playground","Container","Folded","ContainerScroll","AccordionBox","Popover","TitleSwitch","Actions","Sections"],$=Object.freeze(Object.defineProperty({__proto__:null,AccordionBox:c,Actions:p,Container:a,ContainerScroll:r,Folded:d,Playground:n,Popover:l,Sections:m,TitleSwitch:g,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{c as A,a as C,d as F,n as P,$ as S,g as T,r as a,l as b,p as c,m as d};
