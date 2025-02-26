import{x as e}from"./lit-html-B2eaWknC.js";const G={title:"Collections/Widget",argTypes:{accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},icon:{name:"Icona",control:{type:"text"}},title:{name:"Títol",control:{type:"text"}},hasBadge:{name:"Mostra badge",control:{type:"boolean"}},badgeText:{name:"Text del badge",control:{type:"text"},if:{arg:"hasBadge",truthy:!0}},badgeState:{name:"Estat del badge",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadge",truthy:!0}},hasButtonNext:{name:"Mostra botó següent",control:{type:"boolean"}},hasButtonClose:{name:"Mostra botó tancar",control:{type:"boolean"}},elements:{name:"Nombre de ítems",control:{type:"number",max:10,min:1}},elementTitle:{name:"Element Title"},elementSubtitle:{name:"Element Subtitle"},elementDate:{name:"Element Date"},elementDescription:{name:"Element Description"},elementIcons:{name:"Nombre de icones",control:{type:"number",max:2,min:1}},elementActions:{name:"Nombre de accions",control:{type:"number",max:2,min:1}},elementLeftBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},elementRightBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},showSectionTitle:{name:"Mostra títol de secció",control:{type:"boolean"}},sectionTitle:{name:"Títol secció",control:{type:"text"},if:{arg:"showSectionTitle",truthy:!0}},showSectionSwitch:{name:"Mostra secció Switch",control:{type:"boolean"},if:{arg:"showSectionTitle",truthy:!0}},sectionSwitchText:{name:"Switch description",control:{type:"text"},if:{arg:"showSectionSwitch",truthy:!0}}},parameters:{layout:"centered"}},i={args:{accordionStyle:"inner",icon:"add_box",title:"Títol widget",hasBadge:!0,badgeText:"7",badgeState:"neutral",hasButtonNext:!0,hasButtonClose:!0,showSectionTitle:!0,sectionTitle:"Títol secció",showSectionSwitch:!0,sectionSwitchText:"Lorem ipsum dolor sit amet.",elements:3,elementTitle:"Títol ",elementSubtitle:"Subtítol",elementDate:"20/03/2024",elementDescription:"TIPOLOGIA",elementIcons:1,elementActions:1,elementLeftBadgeState:"danger-high",elementRightBadgeState:"danger-high"},render:t=>{const R=()=>{const r=[];return Array.from({length:t.elements},()=>r.push({date:t.elementDate,title:t.elementTitle,subtitle:t.elementSubtitle,description:t.elementDescription,iconBadgeLeftState:t.elementLeftBadgeState,iconBadgeRightState:t.elementRightBadgeState,icons:Array.from({length:t.elementIcons},()=>({icon:"add_box"})),actions:Array.from({length:t.elementActions},()=>({icon:"add_box",type:"primary",action:"actionName"}))})),r};return e`
      <div style="width:600px">
                <dss-accordion 
                    accordionStyle="${t.accordionStyle}"
                    titleText="${t.title}" 
                    icon="${t.icon}" 
                    widget
                    widgetBadgeText="${t.badgeText}"
                    widgetBadgeState="${t.badgeState}"
                    ?widgetShowNext="${t.hasButtonNext}"
                    ?widgetShowClose="${t.hasButtonClose}"
                    >
                        ${t.showSectionSwitch?e`
                            <div class="dss-subtitle--md dss-headings--spacing-top-md">
                                Títol secció
                            </div>
                            <dss-tile type="action" description="${t.sectionSwitchText}" widget heightAuto>
                                <dss-switch size="md" checked slot="action"></dss-switch>
                            </dss-tile>
                            `:null}
                        ${t.showSectionTitle?e`
                            <div class="dss-subtitle--md dss-headings--spacing-top-md">
                                ${t.sectionTitle}
                            </div>
                            `:null}
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        .items="${R()}"
                        >
                        </dss-item-list>
                </dss-accordion>
            </div>
    `}},o={tags:["!dev"],render:()=>e`
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="popover-wrapper">
                <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK HERE TO OPEN</p>
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
    `},a={tags:["!dev"],render:()=>e`
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
                </dss-accordion>
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
                                        Criticitat label
                                    </dss-tooltip>
                                </dss-icon-badge>
                                <dss-icon-button variant="primary" icon="repeat"></dss-icon-button>
                            </div>
                        </dss-item-list>
                </dss-accordion>
            </div>
    `};var l,g,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    accordionStyle: 'inner',
    icon: 'add_box',
    title: 'Títol widget',
    hasBadge: true,
    badgeText: '7',
    badgeState: 'neutral',
    hasButtonNext: true,
    hasButtonClose: true,
    showSectionTitle: true,
    sectionTitle: 'Títol secció',
    showSectionSwitch: true,
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
    return html\`
      <div style="width:600px">
                <dss-accordion 
                    accordionStyle="\${args.accordionStyle}"
                    titleText="\${args.title}" 
                    icon="\${args.icon}" 
                    widget
                    widgetBadgeText="\${args.badgeText}"
                    widgetBadgeState="\${args.badgeState}"
                    ?widgetShowNext="\${args.hasButtonNext}"
                    ?widgetShowClose="\${args.hasButtonClose}"
                    >
                        \${args.showSectionSwitch ? html\`
                            <div class="dss-subtitle--md dss-headings--spacing-top-md">
                                Títol secció
                            </div>
                            <dss-tile type="action" description="\${args.sectionSwitchText}" widget heightAuto>
                                <dss-switch size="md" checked slot="action"></dss-switch>
                            </dss-tile>
                            \` : null}
                        \${args.showSectionTitle ? html\`
                            <div class="dss-subtitle--md dss-headings--spacing-top-md">
                                \${args.sectionTitle}
                            </div>
                            \` : null}
                        <dss-item-list
                        id="dssItemList"
                        widget 
                        .items="\${getItems()}"
                        >
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,p,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] },
                            { "title": "Títol", "subtitle": "Subtítol", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGIA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"}], "actions":[{"icon":"add_box","type":"primary","action":"save"}] }
                        ]'>
                        </dss-item-list>
                </dss-accordion>
            </div>
    \`;
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,x,S;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="popover-wrapper">
                <div class="demo-wrapper">
                    <p class="demo-related-content">CLICK HERE TO OPEN</p>
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
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,I,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
                </dss-accordion>
            </div>
    \`;
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var T,_,y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(_=s.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var B,L,O;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(L=n.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var f,A,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
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
                                    <dss-tooltip hideArrow>Lorem ipsum</dss-tooltip>
                                </div>
                                <dss-icon-badge size="sm" state="danger-high">
                                    <dss-tooltip hideArrow slot="tooltip" position="top">
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
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const C=["Playground","Box","Popover","TitleSwitch","Actions","Sections","Custom"],z=Object.freeze(Object.defineProperty({__proto__:null,Actions:s,Box:o,Custom:c,Playground:i,Popover:d,Sections:n,TitleSwitch:a,__namedExportsOrder:C,default:G},Symbol.toStringTag,{value:"Module"}));export{s as A,o as B,c as C,i as P,z as S,a as T,d as a,n as b};
