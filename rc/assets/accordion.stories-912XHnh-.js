import"./lit-element-vV9fql9z.js";import{x as c}from"./lit-html-paDGiEfB.js";import"./accordion-wGXhMz48.js";const J={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}}}},e={render:o=>c`
      <div style="width:600px">
          ${o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
                <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                  ${o.hasCheckbox?c`
                      <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                      <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                      `:null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionStatus="${o.secondaryActionStatus}" secondaryActionIcon="${o.secondaryActionIcon}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                  `:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                  `:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox"}},n={tags:["!dev"],render:()=>c`
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
    `},l={tags:["!dev"],render:()=>c`
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
    `},d={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},r={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},h={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},b={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
      <input slot="checkbox" type="checkbox" id="accordionCheckbox2" class="dss-checkbox" />

      <label slot="checkboxLabel" for="accordionCheckbox2" class="dss-checkbox-label">Label</label>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `};var x,k,u;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                      <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                      <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                      \` : null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                  \` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                  \` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
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
  }
}`,...(u=(k=e.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var y,$,p;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(p=($=n.parameters)==null?void 0:$.docs)==null?void 0:p.source}}};var S,f,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var m,v,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,T,L;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(T=a.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var g,I,_;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var D,H,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,O,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var M,P,j;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(j=(P=r.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,X,z;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var q,F,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
      <input slot="checkbox" type="checkbox" id="accordionCheckbox2" class="dss-checkbox" />

      <label slot="checkboxLabel" for="accordionCheckbox2" class="dss-checkbox-label">Label</label>
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const K=["Playground","Style","Open","NoTitle","Icon","Results","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","Checkbox"],W=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:b,Icon:a,NoTitle:s,Notifications:l,Open:t,Playground:e,Results:i,SecondaryAction:d,SecondaryActionDisabled:h,SecondaryActionStatus:r,Style:n,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{W as A,b as C,a as I,s as N,t as O,e as P,i as R,n as S,l as a,d as b,r as c,h as d};
