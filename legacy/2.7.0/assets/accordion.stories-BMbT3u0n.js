import"./lit-element-Dloa6E9d.js";import{x as c}from"./lit-html-D6a8R3xZ.js";import"./accordion-teqUhzdv.js";const oo={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}}}},e={render:o=>c`
      <div style="width:600px">
          ${o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
                <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                  ${o.hasCheckbox?c`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                            `:null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="${o.secondaryActionStatus}" secondaryActionIcon="${o.secondaryActionIcon}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},n={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion BOX">
          Define the accordion content here.
        </dss-accordion>
      </div>
      <div class="wrapper">
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},t={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},s={tags:["!dev"],render:()=>c`
       <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},a={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box">
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},i={tags:["!dev"],render:()=>c`
        <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},d={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},r={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},l={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},h={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},b={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},x={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},u={tags:["!dev"],render:()=>c`
      <div class="wrapper">
                <dss-accordion
                    titleText="Accordion title" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `};var k,y,p;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                            \` : null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Hello world.
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
    showResults: false,
    results: 1,
    resultsText: 'Resultats',
    resultsState: 'ideal',
    showNotifications: false,
    notifications: 1,
    notificationsState: 'info',
    hasCheckbox: false,
    checkboxLabel: 'Checkbox'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev'
    }
  }
}`,...(p=(y=e.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var $,S,f;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion BOX">
          Define the accordion content here.
        </dss-accordion>
      </div>
      <div class="wrapper">
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,m,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(C=(m=t.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var A,w,g;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var T,I,L;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box">
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,D,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(H=(D=i.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,R,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var B,O,M;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(M=(O=r.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var P,F,X;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(X=(F=l.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var z,W,j;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(j=(W=h.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var G,Q,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,Y,Z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion
                    titleText="Accordion title" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const co=["Playground","Style","Open","NoTitle","Icon","Results","Info","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","Checkbox","Widget"],so=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:x,Icon:a,Info:d,NoTitle:s,Notifications:r,Open:t,Playground:e,Results:i,SecondaryAction:l,SecondaryActionDisabled:b,SecondaryActionStatus:h,Style:n,Widget:u,__namedExportsOrder:co,default:oo},Symbol.toStringTag,{value:"Module"}));export{so as A,x as C,a as I,s as N,t as O,e as P,i as R,n as S,u as W,d as a,r as b,l as c,h as d,b as e};
