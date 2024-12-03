import{x as e}from"./lit-html-paDGiEfB.js";const f={title:"Collections/Widget",argTypes:{accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},icon:{name:"Icona",control:{type:"text"}},title:{name:"Títol",control:{type:"text"}},hasBadge:{name:"Mostra badge",control:{type:"boolean"}},badgeText:{name:"Text del badge",control:{type:"text"},if:{arg:"hasBadge",truthy:!0}},badgeState:{name:"Estat del badge",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"hasBadge",truthy:!0}},hasButtonNext:{name:"Mostra botó següent",control:{type:"boolean"}},hasButtonClose:{name:"Mostra botó tancar",control:{type:"boolean"}},elements:{name:"Nombre de ítems",control:{type:"number",max:10,min:1}},elementTitle:{name:"Element Title"},elementSubtitle:{name:"Element Subtitle"},elementDate:{name:"Element Date"},elementDescription:{name:"Element Description"},elementIcons:{name:"Nombre de icones",control:{type:"number",max:2,min:1}},elementActions:{name:"Nombre de accions",control:{type:"number",max:2,min:1}},elementLeftBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},elementRightBadgeState:{name:"Element Left Badge State",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"]},showSectionTitle:{name:"Mostra títol de secció",control:{type:"boolean"}},sectionTitle:{name:"Títol secció",control:{type:"text"},if:{arg:"showSectionTitle",truthy:!0}},showSectionSwitch:{name:"Mostra secció Switch",control:{type:"boolean"},if:{arg:"showSectionTitle",truthy:!0}},sectionSwitchText:{name:"Switch description",control:{type:"text"},if:{arg:"showSectionSwitch",truthy:!0}}},parameters:{layout:"centered"}},i={args:{accordionStyle:"inner",icon:"add_box",title:"Títol widget",hasBadge:!0,badgeText:"7",badgeState:"neutral",hasButtonNext:!0,hasButtonClose:!0,showSectionTitle:!0,sectionTitle:"Títol secció",showSectionSwitch:!0,sectionSwitchText:"Lorem ipsum dolor sit amet.",elements:3,elementTitle:"Títol ",elementSubtitle:"Subtítol",elementDate:"20/03/2024",elementDescription:"TIPOLOGIA",elementIcons:1,elementActions:1,elementLeftBadgeState:"danger-high",elementRightBadgeState:"danger-high"},render:t=>{const O=()=>{const c=[];return Array.from({length:t.elements},()=>c.push({date:t.elementDate,title:t.elementTitle,subtitle:t.elementSubtitle,description:t.elementDescription,iconBadgeLeftState:t.elementLeftBadgeState,iconBadgeRightState:t.elementRightBadgeState,icons:Array.from({length:t.elementIcons},()=>({icon:"add_box"})),actions:Array.from({length:t.elementActions},()=>({icon:"add_box",type:"primary",action:"actionName"}))})),c};return e`
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
                        .items="${O()}"
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
                    <p class="demo-related-content">Contingut relacionat</p>
                    <dss-popover position="bottom" hideCloseIcon open>
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
    `};var r,l,g;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,m,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,S,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="popover-wrapper">
                <div class="demo-wrapper">
                    <p class="demo-related-content">Contingut relacionat</p>
                    <dss-popover position="bottom" hideCloseIcon open>
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
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var u,w,I;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,v,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var y,B,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const A=["Playground","Box","Popover","TitleSwitch","Actions","Sections"],R=Object.freeze(Object.defineProperty({__proto__:null,Actions:s,Box:o,Playground:i,Popover:d,Sections:n,TitleSwitch:a,__namedExportsOrder:A,default:f},Symbol.toStringTag,{value:"Module"}));export{s as A,o as B,i as P,R as S,a as T,d as a,n as b};
