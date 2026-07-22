import{x as a}from"./iframe-DNLJd-HG.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const n=`
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 24px;
        width: 600px;
        max-width: 750px;
    }
    .wrapper + .wrapper {
        margin-top: 24px;
    }
`,x={title:"Collections/Accordion",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["default","widget"]},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showHeaderDivider:{name:"Mostrar el divider sota l'header",control:{type:"boolean"}},hideFooterDivider:{name:" Amaga el divider al footer",control:{type:"boolean"}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},showIcon:{name:" Mostra la icona decorativa",control:{type:"boolean"}},icon:{name:"Icona decorativa",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona decorativa",control:{type:"select"},options:["default","success","danger","disabled"],if:{arg:"showIcon",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},showHelpText:{name:" Mostra el text d'ajuda",control:{type:"boolean"}},helpText:{name:"Text d'ajuda",if:{arg:"showHelpText",truthy:!0}},showMainBadge:{name:" Mostra el badge principal",control:{type:"boolean"}},mainBadgeLabel:{name:"Text del badge principal",control:{type:"text"},if:{arg:"showMainBadge",truthy:!0}},mainBadgeStatus:{name:"Estat del badge principal",control:{type:"text"},if:{arg:"showMainBadge",truthy:!0}},mainBadgeIcon:{name:"Icona del badge principal",control:{type:"text"},if:{arg:"showMainBadge",truthy:!0}},mainBadgeOutlined:{name:"Outline del badge principal",control:{type:"boolean"},if:{arg:"showMainBadge",truthy:!0}},mainBadgeHideIcon:{name:"Amaga la icona del badge principal",control:{type:"boolean"},if:{arg:"showMainBadge",truthy:!0}},showFeedbackBadge:{name:" Mostra el badge de feedback",control:{type:"boolean"}},feedbackBadgeLabel:{name:"Text del badge feedback",control:{type:"text"},if:{arg:"showFeedbackBadge",truthy:!0}},feedbackBadgeStatus:{name:"Estat del badge feedback",control:{type:"text"},if:{arg:"showFeedbackBadge",truthy:!0}},feedbackBadgeIcon:{name:"Icona del badge feedback",control:{type:"text"},if:{arg:"showFeedbackBadge",truthy:!0}},feedbackBadgeOutlined:{name:"Outline del badge feedback",control:{type:"boolean"},if:{arg:"showFeedbackBadge",truthy:!0}},showNotificationBadge:{name:" Mostra el badge de notificació",control:{type:"boolean"}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotificationBadge",truthy:!0}},notificationsStatus:{name:"Estat de les notificacions",control:{type:"select"},options:["success","alert","danger","info"],if:{arg:"showNotificationBadge",truthy:!0}},hasPrimaryAction:{name:"Mostra botó d'acció",control:{type:"boolean"}},primaryActionIcon:{name:"Icona del botó d'acció",control:{type:"text"},if:{arg:"hasPrimaryAction",truthy:!0}},primaryActionFill:{name:"Icona del botó d'acció tipus fill",control:{type:"boolean"},if:{arg:"hasPrimaryAction",truthy:!0}},primaryActionStatus:{name:"Estat del botó d'acció",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasPrimaryAction",truthy:!0}},showWidgetNext:{name:"Mostra botó següent",control:{type:"boolean"},if:{arg:"variant",truthy:"widget"}},showWidgetClose:{name:"Mostra botó tancar",control:{type:"boolean"},if:{arg:"variant",truthy:"widget"}}}},r={args:{variant:"default",accordionStyle:"box",showHeaderDivider:!1,hideFooterDivider:!1,showTitle:!0,title:"Títol de l'acordió",type:"Tipus d'acordió",index:"1",hasCheckbox:!1,checkboxLabel:"Checkbox label",showIcon:!1,icon:"add_box",iconStatus:"default",showHelpText:!1,helpText:"Help Text",showMainBadge:!1,mainBadgeLabel:"7",mainBadgeStatus:"info",mainBadgeIcon:"",mainBadgeOutlined:!0,mainBadgeHideIcon:!0,showFeedbackBadge:!1,feedbackBadgeLabel:"Info de l'acordió",feedbackBadgeStatus:"critical",feedbackBadgeIcon:"sync_problem",feedbackBadgeOutlined:!0,showNotificationBadge:!1,notifications:1,notificationsStatus:"danger",hasPrimaryAction:!1,primaryActionIcon:"add_box",primaryActionFill:!1,primaryActionStatus:"primary",showWidgetNext:!1,showWidgetClose:!1},render:e=>a`
      <div style="width:600px">

                <dss-accordion
                    widget="${e.variant==="widget"}"
                    accordionStyle="${e.accordionStyle}"
                    .showHeaderDivider="${e.showHeaderDivider}"
                    .hideFooterDivider="${e.hideFooterDivider}"
                    .titleText="${e.showTitle?e.title:null}"
                    .type="${e.showTitle?null:e.type}" 
                    .index="${e.showTitle?null:e.index}" 
                    .icon="${e.showIcon?e.icon:null}" 
                    .iconStatus="${e.showIcon?e.iconStatus:null}"
                    ?hasPrimaryAction=${e.hasPrimaryAction}
                    primaryActionLabel="Primary Action" 
                    primaryActionIcon="${e.primaryActionIcon}" 
                    primaryActionStatus="${e.primaryActionStatus}" 
                    ?primaryActionFill=${e.primaryActionFill}
                    .helpText="${e.showHelpText?e.helpText:null}"
                    .mainBadgeLabel="${e.showMainBadge?e.mainBadgeLabel:null}"
                    .mainBadgeStatus="${e.mainBadgeStatus}"
                    .mainBadgeIcon="${e.mainBadgeIcon}"
                    .mainBadgeOutlined="${e.mainBadgeOutlined}"
                    .mainBadgeHideIcon="${e.mainBadgeHideIcon}"
                    .info="${e.showFeedbackBadge?e.feedbackBadgeLabel:null}"
                    .infoBadgeStatus="${e.feedbackBadgeStatus}"
                    .infoBadgeIcon="${e.feedbackBadgeIcon}"
                    .infoBadgeOutlined="${e.feedbackBadgeOutlined}"
                    .notifications="${e.showNotificationBadge?e.notifications:null}"
                    .notificationsStatus="${e.notificationsStatus}"
                    ?widgetShowNext=${e.variant==="widget"&&e.showWidgetNext}
                    ?widgetShowClose=${e.variant==="widget"&&e.showWidgetClose}
                    ?hasCheckbox=${e.hasCheckbox}
                >
                    ${e.hasCheckbox?a`
                            <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}" />
                        `:null}
                    ${o()}
                </dss-accordion>
            </div>
    `,parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},o=()=>a`
    <dss-typography variant="body-3">
        Inici de contingut.
        <br/>
        <br/>
        <br/>
        Fi de contingut.
    </dss-typography>
`,i={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
                    ${o()}
        </dss-accordion>

                <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          ${o()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          ${o()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          ${o()}
        </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Box" 
                    icon="add_box" 
                    mainBadgeLabel="7"
                    mainBadgeStatus="neutral"
                    mainBadgeHideIcon
                    widget
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    ${o()}
                </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Inner" 
                    accordionStyle="inner"
                    icon="add_box" 
                    mainBadgeLabel="7"
                    mainBadgeStatus="neutral"
                    mainBadgeHideIcon
                    widget
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    ${o()}
                </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-style-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-open-style")]},d={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-no-title-style")]},s={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    ${o()}
                </dss-accordion>
            </div>
    `,decorators:[t(n,"accordion-icon-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-help-text-style")]},p={tags:["!dev"],render:()=>a`
        <div class="wrapper">
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7"
                        mainBadgeStatus="info"
                        mainBadgeHideIcon
                    >
                        ${o()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeStatus="info"
                    >
                        ${o()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeIcon="person"
                        mainBadgeStatus="info"
                        
                    >
                        ${o()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeStatus="danger-high"
                    >
                        ${o()}
                    </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-results-style")]},y={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-info-style")]},m={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    ${o()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    ${o()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    ${o()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    ${o()}
                </dss-accordion>
            </div>
    `,decorators:[t(n,"accordion-notifications-style")]},u={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-secondary-action-style")]},g={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasPrimaryAction
                    primaryActionIcon="save"
                    primaryActionStatus="success"
                    primaryActionLabel="Primary Action"
                    >
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-secondary-status-style")]},h={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    secondaryActionDisabled
                    hasPrimaryAction
                    primaryActionIcon="save"
                    primaryActionStatus="success"
                    primaryActionLabel="Primary Action"
                    primaryActionDisabled
                    >
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-secondary-disabled-style")]},b={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          ${o()}
        </dss-accordion>
      </div>
    `,decorators:[t(n,"accordion-primary-action-style")]},A={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox label="Accordion checkbox label" variant="default" slot="checkbox">
            </dss-checkbox>
      ${o()}
    </dss-accordion>
  </div>
    `,decorators:[t(n,"accordion-checkbox-style")]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    accordionStyle: 'box',
    showHeaderDivider: false,
    hideFooterDivider: false,
    showTitle: true,
    title: "Títol de l'acordió",
    type: "Tipus d'acordió",
    index: '1',
    hasCheckbox: false,
    checkboxLabel: 'Checkbox label',
    showIcon: false,
    icon: 'add_box',
    iconStatus: 'default',
    showHelpText: false,
    helpText: 'Help Text',
    showMainBadge: false,
    mainBadgeLabel: '7',
    mainBadgeStatus: 'info',
    mainBadgeIcon: '',
    mainBadgeOutlined: true,
    mainBadgeHideIcon: true,
    showFeedbackBadge: false,
    feedbackBadgeLabel: "Info de l'acordió",
    feedbackBadgeStatus: 'critical',
    feedbackBadgeIcon: 'sync_problem',
    feedbackBadgeOutlined: true,
    showNotificationBadge: false,
    notifications: 1,
    notificationsStatus: 'danger',
    hasPrimaryAction: false,
    primaryActionIcon: 'add_box',
    primaryActionFill: false,
    primaryActionStatus: 'primary',
    showWidgetNext: false,
    showWidgetClose: false
  },
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">

                <dss-accordion
                    widget="\${args.variant === 'widget'}"
                    accordionStyle="\${args.accordionStyle}"
                    .showHeaderDivider="\${args.showHeaderDivider}"
                    .hideFooterDivider="\${args.hideFooterDivider}"
                    .titleText="\${args.showTitle ? args.title : null}"
                    .type="\${!args.showTitle ? args.type : null}" 
                    .index="\${!args.showTitle ? args.index : null}" 
                    .icon="\${args.showIcon ? args.icon : null}" 
                    .iconStatus="\${args.showIcon ? args.iconStatus : null}"
                    ?hasPrimaryAction=\${args.hasPrimaryAction}
                    primaryActionLabel="Primary Action" 
                    primaryActionIcon="\${args.primaryActionIcon}" 
                    primaryActionStatus="\${args.primaryActionStatus}" 
                    ?primaryActionFill=\${args.primaryActionFill}
                    .helpText="\${args.showHelpText ? args.helpText : null}"
                    .mainBadgeLabel="\${args.showMainBadge ? args.mainBadgeLabel : null}"
                    .mainBadgeStatus="\${args.mainBadgeStatus}"
                    .mainBadgeIcon="\${args.mainBadgeIcon}"
                    .mainBadgeOutlined="\${args.mainBadgeOutlined}"
                    .mainBadgeHideIcon="\${args.mainBadgeHideIcon}"
                    .info="\${args.showFeedbackBadge ? args.feedbackBadgeLabel : null}"
                    .infoBadgeStatus="\${args.feedbackBadgeStatus}"
                    .infoBadgeIcon="\${args.feedbackBadgeIcon}"
                    .infoBadgeOutlined="\${args.feedbackBadgeOutlined}"
                    .notifications="\${args.showNotificationBadge ? args.notifications : null}"
                    .notificationsStatus="\${args.notificationsStatus}"
                    ?widgetShowNext=\${args.variant === 'widget' && args.showWidgetNext}
                    ?widgetShowClose=\${args.variant === 'widget' && args.showWidgetClose}
                    ?hasCheckbox=\${args.hasCheckbox}
                >
                    \${args.hasCheckbox ? html\`
                            <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}" />
                        \` : null}
                    \${renderAccordionContent()}
                </dss-accordion>
            </div>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev'
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
                    \${renderAccordionContent()}
        </dss-accordion>

                <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          \${renderAccordionContent()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          \${renderAccordionContent()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          \${renderAccordionContent()}
        </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Box" 
                    icon="add_box" 
                    mainBadgeLabel="7"
                    mainBadgeStatus="neutral"
                    mainBadgeHideIcon
                    widget
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    \${renderAccordionContent()}
                </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Inner" 
                    accordionStyle="inner"
                    icon="add_box" 
                    mainBadgeLabel="7"
                    mainBadgeStatus="neutral"
                    mainBadgeHideIcon
                    widget
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    \${renderAccordionContent()}
                </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-style-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-open-style')]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-no-title-style')]
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    \${renderAccordionContent()}
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-icon-style')]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-help-text-style')]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7"
                        mainBadgeStatus="info"
                        mainBadgeHideIcon
                    >
                        \${renderAccordionContent()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeStatus="info"
                    >
                        \${renderAccordionContent()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeIcon="person"
                        mainBadgeStatus="info"
                        
                    >
                        \${renderAccordionContent()}
                    </dss-accordion>
                    <dss-accordion 
                        titleText="Accordion title" 
                        icon="add_box" 
                        mainBadgeLabel="7" 
                        mainBadgeStatus="danger-high"
                    >
                        \${renderAccordionContent()}
                    </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-results-style')]
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-info-style')]
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    \${renderAccordionContent()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    \${renderAccordionContent()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    \${renderAccordionContent()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    \${renderAccordionContent()}
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-notifications-style')]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-action-style')]
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasPrimaryAction
                    primaryActionIcon="save"
                    primaryActionStatus="success"
                    primaryActionLabel="Primary Action"
                    >
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-status-style')]
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    secondaryActionDisabled
                    hasPrimaryAction
                    primaryActionIcon="save"
                    primaryActionStatus="success"
                    primaryActionLabel="Primary Action"
                    primaryActionDisabled
                    >
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-disabled-style')]
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-action-style')]
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox label="Accordion checkbox label" variant="default" slot="checkbox">
            </dss-checkbox>
      \${renderAccordionContent()}
    </dss-accordion>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-checkbox-style')]
}`,...A.parameters?.docs?.source}}};const f=["Playground","Variants","Open","NoTitle","Icon","HelpText","MainBadge","FeedbackBadge","NotificationBadge","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","PrimaryAction","Checkbox"],B=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:A,FeedbackBadge:y,HelpText:l,Icon:s,MainBadge:p,NoTitle:d,NotificationBadge:m,Open:c,Playground:r,PrimaryAction:b,SecondaryAction:u,SecondaryActionDisabled:h,SecondaryActionStatus:g,Variants:i,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{A as C,y as F,l as H,s as I,p as M,d as N,c as O,r as P,B as S,i as V,m as a,b,u as c,g as d,h as e};
