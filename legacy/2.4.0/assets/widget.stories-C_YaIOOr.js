import{x as e}from"./lit-html-B2eaWknC.js";const K={title:"Collections/Widget",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["container","accordion"]},boxStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},icon:{name:"Icona",control:{type:"text"}},title:{name:"Títol",control:{type:"text"}},hasBadgeResults:{name:"Mostra badge resultats",control:{type:"boolean"}},badgeResultsText:{name:"Text del badge resultats",control:{type:"text"},if:{arg:"hasBadgeResults",truthy:!0}},badgeResultsState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeResults",truthy:!0}},hasBadgeInfo:{name:"Mostra badge informació",control:{type:"boolean"}},badgeInfoText:{name:"Text del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoIcon:{name:"Icona del badge informació",control:{type:"text"},if:{arg:"hasBadgeInfo",truthy:!0}},badgeInfoState:{name:"Estat del badge resultats",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadgeInfo",truthy:!0}},hasBadgeNotifications:{name:"Mostra badge notificacions",control:{type:"boolean"}},badgeNotificationsNumber:{name:"Nombre de notificacions",control:{type:"number",max:99,min:0},if:{arg:"hasBadgeNotifications",truthy:!0}},badgeNotificationsState:{name:"Estat del badge notificacions",control:{type:"select"},options:["success","error","alert","info"],if:{arg:"hasBadgeNotifications",truthy:!0}},hasButtonAction:{name:"Mostra botó acció",control:{type:"boolean"}},hasButtonNext:{name:"Mostra botó següent",control:{type:"boolean"}},hasButtonClose:{name:"Mostra botó tancar",control:{type:"boolean"}},elements:{name:"Nombre de ítems",control:{type:"number",max:10,min:1}},elementTitle:{name:"Element Title"},elementSubtitle:{name:"Element Subtitle"},elementDate:{name:"Element Date"},elementDescription:{name:"Element Description"},elementIcons:{name:"Nombre de icones",control:{type:"number",max:2,min:1}},elementActions:{name:"Nombre de accions",control:{type:"number",max:2,min:1}},elementLeftBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},elementRightBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},showSections:{name:"Mostrar seccions amb títols i switch",control:{type:"boolean"}},sectionTitle:{name:"Títol secció",control:{type:"text"},if:{arg:"showSections",truthy:!0}},sectionSwitchText:{name:"Switch description",control:{type:"text"},if:{arg:"showSections",truthy:!0}}},parameters:{layout:"centered"}},i={args:{variant:"container",boxStyle:"box",icon:"add_box",title:"Títol widget",hasBadgeResults:!0,badgeResultsText:"7",badgeResultsState:"neutral",hasBadgeInfo:!0,badgeInfoText:"Error carrega",badgeInfoIcon:"sync_problem",badgeInfoState:"critic",hasBadgeNotifications:!0,badgeNotificationsNumber:2,badgeNotificationsState:"alert",hasButtonAction:!0,hasButtonNext:!0,hasButtonClose:!0,showSections:!0,sectionTitle:"Títol secció",sectionSwitchText:"Lorem ipsum dolor sit amet.",elements:3,elementTitle:"Títol ",elementSubtitle:"Subtítol",elementDate:"20/03/2024",elementDescription:"TIPOLOGIA",elementIcons:1,elementActions:1,elementLeftBadgeState:"danger-high",elementRightBadgeState:"danger-high"},render:t=>{const M=()=>{const b=[];return Array.from({length:t.elements},()=>b.push({date:t.elementDate,title:t.elementTitle,subtitle:t.elementSubtitle,description:t.elementDescription,iconBadgeLeftState:t.elementLeftBadgeState,iconBadgeRightState:t.elementRightBadgeState,icons:Array.from({length:t.elementIcons},()=>({icon:"add_box"})),actions:Array.from({length:t.elementActions},()=>({icon:"add_box",type:"primary",action:"actionName"}))})),b},l=e`
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
                .items="${M()}"
                >
            </dss-item-list>
        `,q=e`
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
                    ${l}
                </dss-widget>
            </div>
        `,W=e`
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
                    ${l}
                </dss-accordion>
            </div>
        `;switch(t.variant){case"accordion":return W;default:return q}}},o={tags:["!dev"],render:()=>e`
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
    `},d={tags:["!dev"],render:()=>e`
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
    `},s={tags:["!dev"],render:()=>e`
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
    `},n={tags:["!dev"],render:()=>e`
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
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
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                            <div slot="item-custom-id2">
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                            <div slot="item-custom-id3">
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `};var h,p,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,I;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,y,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(y=a.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var v,w,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var f,B,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,A,R;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var C,P,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(P=c.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var $,G,E;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
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
}`,...(E=(G=r.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var z,D,k;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                            <div slot="item-custom-id2">
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                            <div slot="item-custom-id3">
                                <span style="font-size:14px">TIPOLOGIA</span>
                                <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                                <div>
                                    <dss-icon icon="question_mark"></dss-icon>
                                    <dss-tooltip>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const j=["Playground","Container","ContainerScroll","AccordionBox","Popover","TitleSwitch","Actions","Sections","Custom"],F=Object.freeze(Object.defineProperty({__proto__:null,AccordionBox:d,Actions:c,Container:o,ContainerScroll:a,Custom:g,Playground:i,Popover:s,Sections:r,TitleSwitch:n,__namedExportsOrder:j,default:K},Symbol.toStringTag,{value:"Module"}));export{d as A,o as C,i as P,F as S,n as T,a,s as b,c,r as d,g as e};
