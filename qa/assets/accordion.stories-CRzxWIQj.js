import"./lit-element-BL4lq474.js";import{x as e}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const c=`
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
`,ao={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionFill:{name:"Icona de l'acció secundària tipus fill",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}},showHelpText:{name:" Mostra el text d'ajuda",control:{type:"boolean"}},helpText:{name:"Text d'ajuda",if:{arg:"showHelpText",truthy:!0}}}},i={render:o=>e`
      <div style="width:600px">
          ${o.showTitle&&o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?secondaryActionFill=${o.secondaryActionFill} ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
                <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                  ${o.hasCheckbox?e`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                            `:null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              `:o.showNotifications?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showTitle&&!o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?secondaryActionFill=${o.secondaryActionFill} ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
            <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" titleText="${o.title}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!o.showTitle&&o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="${o.secondaryActionStatus}" secondaryActionIcon="${o.secondaryActionIcon}" ?secondaryActionFill=${o.secondaryActionFill} ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!o.showTitle&&!o.showIcon?o.hasSecondaryAction?e`
            <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?secondaryActionFill=${o.secondaryActionFill} ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?e`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:o.showResults?e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
            <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?e`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:e`
              <dss-accordion helpText="${o.showHelpText?o.helpText:null}" accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",secondaryActionFill:!1,showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox",showHelpText:!1,helpText:"Help Text"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},n={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-style-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-open-style")]},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-no-title-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `,decorators:[t(c,"accordion-icon-style")]},d={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-results-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-info-style")]},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[t(c,"accordion-help-text-style")]},h={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-notifications-style")]},x={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-secondary-action-style")]},m={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-secondary-status-style")]},b={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-secondary-disabled-style")]},p={tags:["!dev"],render:()=>e`
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
    `,decorators:[t(c,"accordion-primary-action-style")]},y={tags:["!dev"],render:()=>e`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `,decorators:[t(c,"accordion-checkbox-style")]};var k,S,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                            \` : null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?secondaryActionFill=\${args.secondaryActionFill} ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion helpText="\${args.showHelpText ? args.helpText : null}" accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
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
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var f,A,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var T,w,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var g,q,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(q=s.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var I,D,_;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var H,U,F;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(U=d.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var P,N,R;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var B,E,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,j,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(j=h.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var z,V,J;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(V=x.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,X,G;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(X=m.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var Q,Y,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var oo,eo,to;p.parameters={...p.parameters,docs:{...(oo=p.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(to=(eo=p.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var co,io,no;y.parameters={...y.parameters,docs:{...(co=y.parameters)==null?void 0:co.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-checkbox-style')]
}`,...(no=(io=y.parameters)==null?void 0:io.docs)==null?void 0:no.source}}};const so=["Playground","Variants","Open","NoTitle","Icon","Results","Info","HelpText","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","PrimaryAction","Checkbox"],ho=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:y,HelpText:u,Icon:r,Info:l,NoTitle:s,Notifications:h,Open:a,Playground:i,PrimaryAction:p,Results:d,SecondaryAction:x,SecondaryActionDisabled:b,SecondaryActionStatus:m,Variants:n,__namedExportsOrder:so,default:ao},Symbol.toStringTag,{value:"Module"}));export{y as C,u as H,r as I,s as N,a as O,i as P,d as R,ho as S,n as V,l as a,h as b,p as c,x as d,m as e,b as f};
