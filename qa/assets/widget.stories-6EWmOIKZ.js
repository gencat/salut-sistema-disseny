import{x as e}from"./lit-html-D6a8R3xZ.js";const H={title:"Collections/Widget",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["container","accordion"]},boxStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},icon:{name:"Icona",control:{type:"text"}},title:{name:"Títol",control:{type:"text"}},hasBadgeResults:{name:"Mostra badge resultats",control:{type:"boolean"}},badgeResultsText:{name:"Text del badge resultats",control:{type:"text"},if:{arg:"hasBadgeResults",truthy:!0}},badgeResultsState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeResults",truthy:!0}},hasBadgeInfo:{name:"Mostra badge informació",control:{type:"boolean"}},badgeInfoText:{name:"Text del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoIcon:{name:"Icona del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeInfo",truthy:!0}},hasBadgeNotifications:{name:"Mostra badge notificacions",control:{type:"boolean"}},badgeNotificationsNumber:{name:"Nombre de notificacions",control:{type:"number",max:99,min:0},if:{arg:"hasBadgeNotifications",truthy:!0}},badgeNotificationsState:{name:"Estat del badge notificacions",control:{type:"select"},options:["success","error","alert","info"],if:{arg:"hasBadgeNotifications",truthy:!0}},hasButtonAction:{name:"Mostra botó acció",control:{type:"boolean"}},hasButtonNext:{name:"Mostra botó següent",control:{type:"boolean"}},hasButtonClose:{name:"Mostra botó tancar",control:{type:"boolean"}},elements:{name:"Nombre de ítems",control:{type:"number",max:10,min:1}},elementTitle:{name:"Element Title"},elementSubtitle:{name:"Element Subtitle"},elementDate:{name:"Element Date"},elementDescription:{name:"Element Description"},elementIcons:{name:"Nombre de icones",control:{type:"number",max:2,min:1}},elementActions:{name:"Nombre de accions",control:{type:"number",max:2,min:1}},elementLeftBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},elementRightBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},showSections:{name:"Mostrar seccions amb títols i switch",control:{type:"boolean"}},sectionTitle:{name:"Títol secció",control:{type:"text"},if:{arg:"showSections",truthy:!0}},sectionSwitchText:{name:"Switch description",control:{type:"text"},if:{arg:"showSections",truthy:!0}}},parameters:{layout:"centered"}},i={args:{variant:"container",boxStyle:"box",icon:"add_box",title:"Títol widget",hasBadgeResults:!0,badgeResultsText:"7",badgeResultsState:"neutral",hasBadgeInfo:!0,badgeInfoText:"Error carrega",badgeInfoIcon:"sync_problem",badgeInfoState:"critic",hasBadgeNotifications:!0,badgeNotificationsNumber:2,badgeNotificationsState:"alert",hasButtonAction:!0,hasButtonNext:!0,hasButtonClose:!0,showSections:!0,sectionTitle:"Títol secció",sectionSwitchText:"Lorem ipsum dolor sit amet.",elements:3,elementTitle:"Títol ",elementSubtitle:"Subtítol",elementDate:"20/03/2024",elementDescription:"TIPOLOGIA",elementIcons:1,elementActions:1,elementLeftBadgeState:"danger-high",elementRightBadgeState:"danger-high"},render:t=>{const j=()=>{const p=[];return Array.from({length:t.elements},()=>p.push({date:t.elementDate,title:t.elementTitle,subtitle:t.elementSubtitle,description:t.elementDescription,iconBadgeLeftState:t.elementLeftBadgeState,iconBadgeRightState:t.elementRightBadgeState,icons:Array.from({length:t.elementIcons},()=>({icon:"add_box"})),actions:Array.from({length:t.elementActions},()=>({icon:"add_box",type:"primary",action:"actionName"}))})),p},b=e`
            ${t.showSections?e`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">${t.sectionTitle}</dss-typography>
                <dss-tile type="action" description="${t.sectionSwitchText}" widget heightAuto>
                    <dss-switch size="md" checked slot="action"></dss-switch>
                </dss-tile>
                `:null}
            ${t.showSections?e`
                <dss-typography class="dss-headings--spacing-top-md" variant="subtitle-4" fontColor="900">${t.sectionTitle}</dss-typography>
                `:null}
            <dss-item-list
                id="dssItemList"
                widget 
                .items="${j()}"
                >
            </dss-item-list>
        `,V=e`
            <div style="width:600px">
                <dss-widget
                    variant="${t.boxStyle}"
                    title="${t.title}" 
                    icon="${t.icon}" 
                    results="${t.badgeResultsText}"
                    resultsState="${t.badgeResultsState}"
                    info="${t.badgeInfoText}"
                    infobadgestate="${t.badgeInfoState}" 
                    infobadgeicon="${t.badgeInfoIcon}"
                    notifications="${t.badgeNotificationsNumber}" 
                    notificationsstate="${t.badgeNotificationsState}"
                    ?hasAction="${t.hasButtonAction}"
                    actionIcon="add_box"
                    ?hasNext="${t.hasButtonNext}"
                    ?hasClose="${t.hasButtonClose}"
                >
                    ${b}
                </dss-widget>
            </div>
        `,q=e`
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
                    ${b}
                </dss-accordion>
            </div>
        `;switch(t.variant){case"accordion":return q;default:return V}}},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-widget 
                    title="Títol widget" 
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-widget>
            </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-widget 
                    title="Títol widget" 
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
    `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper wrapper--fixed-height">
                <dss-widget 
                    hasScroll
                    title="Títol widget" 
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-widget>
            </div>
    `},s={tags:["!dev"],render:()=>e`
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="popover-wrapper popover-wrapper--xl">
            <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK TO OPEN WIDGET CONTAINER</p>
                    <dss-popover position="bottom" hideCloseIcon>
                        <dss-popover-body slot="body">
                            <dss-widget 
                                variant="inner"
                                title="Títol widget" 
                                icon="add_box" 
                                widget
                                results="7"
                                resultsState="neutral"
                                hasNext
                                hasClose
                                >
                                    <dss-item-list
                                    id="dssItemList"
                                    widget 
                                    items='[
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                                    ]'>
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
                                        <dss-item-list
                                        id="dssItemList"
                                        widget 
                                        items='[
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                                        ]'>
                                        </dss-item-list>
                                </dss-accordion>
                        </dss-popover-body>
                    </dss-popover>
                </div>
            </div>
    `},c={tags:["!dev"],render:()=>e`
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `},r={tags:["!dev"],render:()=>e`
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `},l={tags:["!dev"],render:()=>e`
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"moderate-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"moderate-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"moderate-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"moderate-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `},g={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Lorem ipsum dolor sit amet" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    info="Error carrega"
                    infoBadgeState="critic"
                    infoBadgeIcon="sync_problem"
                    notifications="2"
                    notificationsState="alert"
                    >
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "id":"id1", "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" },
                            { "id":"id2", "title": "Lorem ipsum dolor sit amet", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" },
                            { "id":"id3", "title": "Títol", "subtitle": "Lorem ipsum dolor sit amet", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" }
                        ]'>
                        <div slot="item-custom-id1">
                            <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                            <div>
                                <dss-icon icon="add_box"></dss-icon>
                                <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        <div slot="item-custom-id2">
                            <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                            <div>
                                <dss-icon icon="add_box" size="md"></dss-icon>
                                <dss-tooltip>Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                            <dss-icon-badge size="sm" state="info" outlined>
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="bottom">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        <div slot="item-custom-id3">
                            <div>
                                <dss-icon icon="add_box" size="md"></dss-icon>
                                <dss-tooltip>Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                            <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                            <dss-icon-badge size="sm" state="info" outlined>
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="bottom">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `};var h,m,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    hasButtonAction: true,
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
    const getItems = () => {
      const storyItems: any[] = [];
      Array.from({
        length: args.elements
      }, () => storyItems.push({
        date: args.elementDate,
        title: args.elementTitle,
        subtitle: args.elementSubtitle,
        description: args.elementDescription,
        iconBadgeLeftState: args.elementLeftBadgeState,
        iconBadgeRightState: args.elementRightBadgeState,
        icons: Array.from({
          length: args.elementIcons
        }, () => {
          return {
            icon: 'add_box'
          };
        }),
        actions: Array.from({
          length: args.elementActions
        }, () => {
          return {
            icon: 'add_box',
            type: 'primary',
            action: 'actionName'
          };
        })
      }));
      return storyItems;
    };
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
            <dss-item-list
                id="dssItemList"
                widget 
                .items="\${getItems()}"
                >
            </dss-item-list>
        \`;
    const widgetContainer = html\`
            <div style="width:600px">
                <dss-widget
                    variant="\${args.boxStyle}"
                    title="\${args.title}" 
                    icon="\${args.icon}" 
                    results="\${args.badgeResultsText}"
                    resultsState="\${args.badgeResultsState}"
                    info="\${args.badgeInfoText}"
                    infobadgestate="\${args.badgeInfoState}" 
                    infobadgeicon="\${args.badgeInfoIcon}"
                    notifications="\${args.badgeNotificationsNumber}" 
                    notificationsstate="\${args.badgeNotificationsState}"
                    ?hasAction="\${args.hasButtonAction}"
                    actionIcon="add_box"
                    ?hasNext="\${args.hasButtonNext}"
                    ?hasClose="\${args.hasButtonClose}"
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,I,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-widget 
                    title="Títol widget" 
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-widget>
            </div>
    \`;
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,y,v;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-widget 
                    title="Títol widget" 
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
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,f,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--fixed-height">
                <dss-widget 
                    hasScroll
                    title="Títol widget" 
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-widget>
            </div>
    \`;
  }
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var B,L,O;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var A,C,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                                title="Títol widget" 
                                icon="add_box" 
                                widget
                                results="7"
                                resultsState="neutral"
                                hasNext
                                hasClose
                                >
                                    <dss-item-list
                                    id="dssItemList"
                                    widget 
                                    items='[
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                        { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                                    ]'>
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
                                        <dss-item-list
                                        id="dssItemList"
                                        widget 
                                        items='[
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                                        ]'>
                                        </dss-item-list>
                                </dss-accordion>
                        </dss-popover-body>
                    </dss-popover>
                </div>
            </div>
    \`;
  }
}`,...(R=(C=n.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var N,P,$;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var G,E,z;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(z=(E=r.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var D,M,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "chipText":"Chip", "chipIcon":"add_box", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"moderate-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"moderate-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                        <div class="dss-subtitle--md dss-headings--spacing-top-md">
                            Títol secció
                        </div>
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"moderate-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"moderate-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var W,K,F;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                <dss-accordion 
                    isOpen
                    titleText="Lorem ipsum dolor sit amet" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    info="Error carrega"
                    infoBadgeState="critic"
                    infoBadgeIcon="sync_problem"
                    notifications="2"
                    notificationsState="alert"
                    >
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        items='[
                            { "id":"id1", "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" },
                            { "id":"id2", "title": "Lorem ipsum dolor sit amet", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" },
                            { "id":"id3", "title": "Títol", "subtitle": "Lorem ipsum dolor sit amet", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "iconBadgeLabel":"Criticitat label", "date":"20/03/2024" }
                        ]'>
                        <div slot="item-custom-id1">
                            <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                            <div>
                                <dss-icon icon="add_box"></dss-icon>
                                <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        <div slot="item-custom-id2">
                            <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                            <div>
                                <dss-icon icon="add_box" size="md"></dss-icon>
                                <dss-tooltip>Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                            <dss-icon-badge size="sm" state="info" outlined>
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="bottom">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        <div slot="item-custom-id3">
                            <div>
                                <dss-icon icon="add_box" size="md"></dss-icon>
                                <dss-tooltip>Lorem ipsum</dss-tooltip>
                            </div>
                            <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                            <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                            <dss-icon-badge size="sm" state="info" outlined>
                                <dss-tooltip slot="tooltip" position="left">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-badge size="sm" state="danger-high">
                                <dss-tooltip slot="tooltip" position="bottom">
                                    <span>Tooltip</span>
                                </dss-tooltip>
                            </dss-icon-badge>
                            <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        </div>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(F=(K=g.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const J=["Playground","Container","Folded","ContainerScroll","AccordionBox","Popover","TitleSwitch","Actions","Sections","Custom"],U=Object.freeze(Object.defineProperty({__proto__:null,AccordionBox:s,Actions:r,Container:o,ContainerScroll:d,Custom:g,Folded:a,Playground:i,Popover:n,Sections:l,TitleSwitch:c,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{s as A,o as C,a as F,i as P,U as S,c as T,d as a,n as b,r as c,l as d,g as e};
