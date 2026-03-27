import"./lit-element-BL4lq474.js";import{x as e}from"./lit-html-D6cejpwM.js";import{w as c}from"./storybook-decorators-DSS85Rnr.js";const i=`
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
`,so={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionFill:{name:"Icona de l'acció secundària tipus fill",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}},showHelpText:{name:" Mostra el text d'ajuda",control:{type:"boolean"}},helpText:{name:"Text d'ajuda",if:{arg:"showHelpText",truthy:!0}}}},n={render:o=>e`
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
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",secondaryActionFill:!1,showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox",showHelpText:!1,helpText:"Help Text"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},t=()=>e`
    <dss-typography variant="body-3">
        Inici de contingut.
        <br/>
        <br/>
        <br/>
        Fi de contingut.
    </dss-typography>
`,a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
                    ${t()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          ${t()}
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
                    ${t()}
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
                    ${t()}
                </dss-accordion>

                 <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          ${t()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-style-style")]},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-open-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-no-title-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    ${t()}
                </dss-accordion>
            </div>
    `,decorators:[c(i,"accordion-icon-style")]},l={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        ${t()}
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        ${t()}
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        ${t()}
                    </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-results-style")]},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-info-style")]},h={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" helpText="Help text">
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-help-text-style")]},x={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    ${t()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    ${t()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    ${t()}
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    ${t()}
                </dss-accordion>
            </div>
    `,decorators:[c(i,"accordion-notifications-style")]},m={tags:["!dev"],render:()=>e`
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
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-secondary-action-style")]},b={tags:["!dev"],render:()=>e`
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
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-secondary-status-style")]},p={tags:["!dev"],render:()=>e`
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
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-secondary-disabled-style")]},y={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box"
                    hasPrimaryAction
                    primaryActionIcon="edit_document"
                    primaryActionStatus="primary"
                    primaryActionLabel="Primary Action"
                    >
          ${t()}
        </dss-accordion>
      </div>
    `,decorators:[c(i,"accordion-primary-action-style")]},$={tags:["!dev"],render:()=>e`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      ${t()}
    </dss-accordion>
  </div>
    `,decorators:[c(i,"accordion-checkbox-style")]};var k,S,A;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var v,f,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion Default Box">
                    \${renderAccordionContent()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner">
          \${renderAccordionContent()}
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
                    \${renderAccordionContent()}
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
                    \${renderAccordionContent()}
                </dss-accordion>

                 <dss-accordion titleText="Accordion Default Box amb header divider" showHeaderDivider>
          \${renderAccordionContent()}
        </dss-accordion>

                <dss-accordion accordionStyle="inner" titleText="Accordion Default Inner amb custom dividers" showHeaderDivider hideFooterDivider>
          \${renderAccordionContent()}
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-style-style')]
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var C,w,g;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var q,L,I;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var _,H,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(H=d.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var F,P,N;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        \${renderAccordionContent()}
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        \${renderAccordionContent()}
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        \${renderAccordionContent()}
                    </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-results-style')]
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var R,D,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,M,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,W,z;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(W=x.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var V,J,K;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,G,Q;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,Z,oo;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(oo=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:oo.source}}};var eo,to,co;y.parameters={...y.parameters,docs:{...(eo=y.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(co=(to=y.parameters)==null?void 0:to.docs)==null?void 0:co.source}}};var io,no,ao;$.parameters={...$.parameters,docs:{...(io=$.parameters)==null?void 0:io.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      \${renderAccordionContent()}
    </dss-accordion>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-checkbox-style')]
}`,...(ao=(no=$.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};const ro=["Playground","Variants","Open","NoTitle","Icon","Results","Info","HelpText","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","PrimaryAction","Checkbox"],xo=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:$,HelpText:h,Icon:d,Info:u,NoTitle:r,Notifications:x,Open:s,Playground:n,PrimaryAction:y,Results:l,SecondaryAction:m,SecondaryActionDisabled:p,SecondaryActionStatus:b,Variants:a,__namedExportsOrder:ro,default:so},Symbol.toStringTag,{value:"Module"}));export{$ as C,h as H,d as I,r as N,s as O,n as P,l as R,xo as S,a as V,u as a,x as b,y as c,m as d,b as e,p as f};
