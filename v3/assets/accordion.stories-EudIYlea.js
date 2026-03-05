import{x as o}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const c=`
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
`,S={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionFill:{name:"Icona de l'acció secundària tipus fill",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}},showHelpText:{name:" Mostra el text d'ajuda",control:{type:"boolean"}},helpText:{name:"Text d'ajuda",if:{arg:"showHelpText",truthy:!0}}}},i={render:e=>o`
      <div style="width:600px">
          ${e.showTitle&&e.showIcon?e.hasSecondaryAction?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" icon="${e.icon}" iconStatus="${e.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${e.secondaryActionIcon}" secondaryActionStatus="${e.secondaryActionStatus}" ?secondaryActionFill=${e.secondaryActionFill} ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                                            <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}" />
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showResults?o`
                <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" icon="${e.icon}" iconStatus="${e.iconStatus}" results="${e.results}" resultsText="${e.resultsText}" resultsState="${e.resultsState}" ?hasCheckbox=${e.hasCheckbox}>
                  ${e.hasCheckbox?o`
                                                <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                            `:null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              `:e.showNotifications?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" icon="${e.icon}" iconStatus="${e.iconStatus}" notifications="${e.notifications}" notificationsState="${e.notificationsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                        <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}" />
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" icon="${e.icon}" iconStatus="${e.iconStatus}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                                            <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showTitle&&!e.showIcon?e.hasSecondaryAction?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${e.secondaryActionIcon}" secondaryActionStatus="${e.secondaryActionStatus}" ?secondaryActionFill=${e.secondaryActionFill} ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                        <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                            </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showResults?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" results="${e.results}" resultsText="${e.resultsText}" resultsState="${e.resultsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                    <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showNotifications?o`
            <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" notifications="${e.notifications}" notificationsState="${e.notificationsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`<dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" titleText="${e.title}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                                            <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!e.showTitle&&e.showIcon?e.hasSecondaryAction?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" icon="${e.icon}" iconStatus="${e.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="${e.secondaryActionStatus}" secondaryActionIcon="${e.secondaryActionIcon}" ?secondaryActionFill=${e.secondaryActionFill} ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                                            <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showResults?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" icon="${e.icon}" iconStatus="${e.iconStatus}" results="${e.results}" resultsText="${e.resultsText}" resultsState="${e.resultsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                    <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showNotifications?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" icon="${e.icon}" iconStatus="${e.iconStatus}" notifications="${e.notifications}" notificationsState="${e.notificationsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                        <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" icon="${e.icon}" iconStatus="${e.iconStatus}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                        <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!e.showTitle&&!e.showIcon?e.hasSecondaryAction?o`
            <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${e.secondaryActionIcon}" secondaryActionStatus="${e.secondaryActionStatus}" ?secondaryActionFill=${e.secondaryActionFill} ?hasCheckbox=${e.hasCheckbox}>
              ${e.hasCheckbox?o`
                  <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>
                                                `:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:e.showResults?o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" results="${e.results}" resultsText="${e.resultsText}" resultsState="${e.resultsState}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                    <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e.showNotifications?o`
            <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" notifications="${e.notifications}" notificationsState="${e.notificationsState}" ?hasCheckbox=${e.hasCheckbox}>
              ${e.hasCheckbox?o`
                  <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:o`
              <dss-accordion helpText="${e.showHelpText?e.helpText:null}" accordionStyle="${e.accordionStyle}" type="${e.type}" index="${e.index}" ?hasCheckbox=${e.hasCheckbox}>
                ${e.hasCheckbox?o`
                    <dss-checkbox variant="default" slot="checkbox" label="${e.checkboxLabel}">
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",secondaryActionFill:!1,showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox",showHelpText:!1,helpText:"Help Text"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},n={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
          Define the accordion content here.
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          Define the accordion content here.
        </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Box" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Inner" 
                    accordionStyle="inner"
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>

                 <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          Define the accordion content here.
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-style-style")]},a={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-open-style")]},s={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-no-title-style")]},r={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `,decorators:[t(c,"accordion-icon-style")]},d={tags:["!dev"],render:()=>o`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        Define the accordion content here.
                    </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-results-style")]},l={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-info-style")]},u={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-help-text-style")]},h={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `,decorators:[t(c,"accordion-notifications-style")]},m={tags:["!dev"],render:()=>o`
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-secondary-action-style")]},x={tags:["!dev"],render:()=>o`
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-secondary-status-style")]},p={tags:["!dev"],render:()=>o`
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-secondary-disabled-style")]},b={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-primary-action-style")]},y={tags:["!dev"],render:()=>o`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox label="Accordion checkbox label" variant="default" slot="checkbox">
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `,decorators:[t(c,"accordion-checkbox-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}" />
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                                                <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                            \` : null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}" />
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                            </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`<dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>
                                                \` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox" label="\${args.checkboxLabel}">
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : null}
          </div>
    \`;
  },
  args: {
    accordionStyle: 'box',
    showIcon: false,
    icon: 'add_box',
    iconStatus: 'default',
    showTitle: false,
    title: 'Accordion title',
    type: 'Accordion type',
    index: '1',
    hasSecondaryAction: false,
    secondaryActionIcon: 'edit_document',
    secondaryActionStatus: 'primary',
    secondaryActionFill: false,
    showResults: false,
    results: 1,
    resultsText: 'Resultats',
    resultsState: 'ideal',
    showNotifications: false,
    notifications: 1,
    notificationsState: 'info',
    hasCheckbox: false,
    checkboxLabel: 'Checkbox',
    showHelpText: false,
    helpText: 'Help Text'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev'
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
          Define the accordion content here.
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          Define the accordion content here.
        </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Box" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
                
                <dss-accordion
                    titleText="Accordion Widget Inner" 
                    accordionStyle="inner"
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>

                 <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          Define the accordion content here.
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-style-style')]
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-open-style')]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-no-title-style')]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-icon-style')]
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        Define the accordion content here.
                    </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-results-style')]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-info-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-help-text-style')]
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-notifications-style')]
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-action-style')]
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-status-style')]
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-secondary-disabled-style')]
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-action-style')]
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox label="Accordion checkbox label" variant="default" slot="checkbox">
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-checkbox-style')]
}`,...y.parameters?.docs?.source}}};const $=["Playground","Variants","Open","NoTitle","Icon","Results","Info","HelpText","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","PrimaryAction","Checkbox"],f=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:y,HelpText:u,Icon:r,Info:l,NoTitle:s,Notifications:h,Open:a,Playground:i,PrimaryAction:b,Results:d,SecondaryAction:m,SecondaryActionDisabled:p,SecondaryActionStatus:x,Variants:n,__namedExportsOrder:$,default:S},Symbol.toStringTag,{value:"Module"}));export{y as C,u as H,r as I,s as N,a as O,i as P,d as R,f as S,n as V,l as a,h as b,b as c,m as d,x as e,p as f};
