import{x as n}from"./iframe-D7EeAtJA.js";const r={title:"Collections/Header/Menu Professional",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del professional"},surname:{name:"Cognom del professional"},center:{name:"Centre  hospitalari"},collegiate:{name:"Col·legiat nº"},infoLabel:{name:"Label Info"},collegiateLabel:{name:"Label Col·legiat"},preferencesLabel:{name:"Label Preferències"},hideViewDetails:{name:"Amaga enllaç 'Veure més detalls'",control:{type:"boolean"}},detailsLabel:{name:"Label enllaç details",if:{arg:"hideViewDetails",eq:!1}},detailsHref:{name:"Href enllaç details",if:{arg:"hideViewDetails",eq:!1}},primaryActionLabel:{name:"Label Acció principal"},primaryActionVariant:{name:"Variant Acció principal",control:{type:"radio"},options:["primary","secondary","subtle"]},primaryActionDisabled:{name:"Deshabilitar botó Acció principal",control:{type:"boolean"}},showSecondaryAction:{name:"Mostrar botó Acció secundària",control:{type:"boolean"}},secondaryActionLabel:{name:"Label Acció secundària",if:{arg:"showSecondaryAction",eq:!0}},secondaryActionVariant:{name:"Variant Acció secundària",control:{type:"radio"},options:["primary","secondary","subtle"],if:{arg:"showSecondaryAction",eq:!0}},secondaryActionDisabled:{name:"Deshabilitar botó Acció secundària",control:{type:"boolean"},if:{arg:"showSecondaryAction",eq:!0}},hideDropdownPreferences:{name:"Amaga secció de preferències de treball",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{name:"John",surname:"Doe",size:"lg",disabled:!1,center:"Centre hospitalari",collegiate:"859438475",infoLabel:"Les meves dades",collegiateLabel:"Col·legiat nº",preferencesLabel:"Preferències de treball",hideViewDetails:!1,detailsLabel:"Veure més detalls",detailsHref:"#",primaryActionLabel:"Sortir",primaryActionVariant:"primary",primaryActionDisabled:!1,showSecondaryAction:!1,secondaryActionLabel:"Tancar sessió",secondaryActionVariant:"secondary",secondaryActionDisabled:!1,hideDropdownPreferences:!1},render:e=>n`
    <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
          <dss-header-menu-professional 
                        size="${e.size}"
                        ?disabled=${e.disabled}
                        name="${e.name} ${e.surname}"
                        center="${e.center}"
                        collegiate="${e.collegiate}"
                        infoLabel="${e.infoLabel}"
                        collegiateLabel="${e.collegiateLabel}"
                        preferencesLabel="${e.preferencesLabel}"
                        ?hideViewDetails="${e.hideViewDetails}"
                        detailsLabel="${e.detailsLabel}"
                        detailsHref="${e.detailsHref}"
                        detailsIcon="${e.detailsIcon}"
                        detailsIconPosition="${e.detailsIconPosition}"
                        ?hideDropdownPreferences="${e.hideDropdownPreferences}"
                        primaryActionLabel="${e.primaryActionLabel}"
                        primaryActionVariant="${e.primaryActionVariant}"
                        primaryActionDisabled="${e.primaryActionDisabled}"
                        ?showSecondaryAction="${e.showSecondaryAction}"
                        secondaryActionLabel="${e.secondaryActionLabel}"
                        secondaryActionVariant="${e.secondaryActionVariant}"
                        secondaryActionDisabled="${e.secondaryActionDisabled}"
                    >
                        <dss-avatar size="xl" name="${e.name}" surname="${e.surname}" slot="avatar"></dss-avatar>
                        <dss-select
                            label="Centre de treball"
                            readonly
                            icon="maps_home_work"
                            type="default" 
                            elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                        <dss-select
                            label="Rol"
                            readonly
                            icon="business_center"
                            type="default" 
                            elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                        <dss-select
                            label="Ambit treball"
                            readonly
                            icon="people_alt"
                            type="default" 
                            elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                    </dss-header-menu-professional>
                </div>
    `},l={tags:["!dev"],render:()=>n`
    <dss-header-menu-professional 
            name="Nom del professional"
            center="Centre hospitalari"
            hideDropdownDetails
            hideDropdownPreferences
            >
                <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
        </dss-header-menu-professional>
    `},s={tags:["!dev"],render:()=>n`
            <dss-header-menu-professional 
                    name="Nom del professional"
                    center="Centre hospitalari"
                    collegiate="859438475"
                    >
                        <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
                        <dss-select
                            label="Centre de treball"
                            readonly
                                icon="maps_home_work"
                                type="default" 
                                elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                            </dss-select>
                            <dss-select
                                label="Rol"
                                readonly
                                icon="business_center"
                                type="default" 
                                elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                            >
                            </dss-select>
                            <dss-select
                                label="Àmbit treball"
                                readonly
                                icon="people_alt"
                                type="default" 
                                elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                            </dss-select>
                </dss-header-menu-professional>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev'
    }
  },
  args: {
    name: 'John',
    surname: 'Doe',
    size: 'lg',
    disabled: false,
    center: 'Centre hospitalari',
    collegiate: '859438475',
    infoLabel: 'Les meves dades',
    collegiateLabel: 'Col·legiat nº',
    preferencesLabel: 'Preferències de treball',
    hideViewDetails: false,
    detailsLabel: 'Veure més detalls',
    detailsHref: '#',
    primaryActionLabel: 'Sortir',
    primaryActionVariant: 'primary',
    primaryActionDisabled: false,
    showSecondaryAction: false,
    secondaryActionLabel: 'Tancar sessió',
    secondaryActionVariant: 'secondary',
    secondaryActionDisabled: false,
    hideDropdownPreferences: false
  },
  render: (args: any) => {
    return html\`
    <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
          <dss-header-menu-professional 
                        size="\${args.size}"
                        ?disabled=\${args.disabled}
                        name="\${args.name} \${args.surname}"
                        center="\${args.center}"
                        collegiate="\${args.collegiate}"
                        infoLabel="\${args.infoLabel}"
                        collegiateLabel="\${args.collegiateLabel}"
                        preferencesLabel="\${args.preferencesLabel}"
                        ?hideViewDetails="\${args.hideViewDetails}"
                        detailsLabel="\${args.detailsLabel}"
                        detailsHref="\${args.detailsHref}"
                        detailsIcon="\${args.detailsIcon}"
                        detailsIconPosition="\${args.detailsIconPosition}"
                        ?hideDropdownPreferences="\${args.hideDropdownPreferences}"
                        primaryActionLabel="\${args.primaryActionLabel}"
                        primaryActionVariant="\${args.primaryActionVariant}"
                        primaryActionDisabled="\${args.primaryActionDisabled}"
                        ?showSecondaryAction="\${args.showSecondaryAction}"
                        secondaryActionLabel="\${args.secondaryActionLabel}"
                        secondaryActionVariant="\${args.secondaryActionVariant}"
                        secondaryActionDisabled="\${args.secondaryActionDisabled}"
                    >
                        <dss-avatar size="xl" name="\${args.name}" surname="\${args.surname}" slot="avatar"></dss-avatar>
                        <dss-select
                            label="Centre de treball"
                            readonly
                            icon="maps_home_work"
                            type="default" 
                            elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                        <dss-select
                            label="Rol"
                            readonly
                            icon="business_center"
                            type="default" 
                            elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                        <dss-select
                            label="Ambit treball"
                            readonly
                            icon="people_alt"
                            type="default" 
                            elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                            selectedValue='["1"]'
                            >
                        </dss-select>
                    </dss-header-menu-professional>
                </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-header-menu-professional 
            name="Nom del professional"
            center="Centre hospitalari"
            hideDropdownDetails
            hideDropdownPreferences
            >
                <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
        </dss-header-menu-professional>
    \`;
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-menu-professional 
                    name="Nom del professional"
                    center="Centre hospitalari"
                    collegiate="859438475"
                    >
                        <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
                        <dss-select
                            label="Centre de treball"
                            readonly
                                icon="maps_home_work"
                                type="default" 
                                elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                            </dss-select>
                            <dss-select
                                label="Rol"
                                readonly
                                icon="business_center"
                                type="default" 
                                elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                            >
                            </dss-select>
                            <dss-select
                                label="Àmbit treball"
                                readonly
                                icon="people_alt"
                                type="default" 
                                elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                            </dss-select>
                </dss-header-menu-professional>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const t=["Playground","Reduced","NoDetailsLink"],o=Object.freeze(Object.defineProperty({__proto__:null,NoDetailsLink:s,Playground:a,Reduced:l,__namedExportsOrder:t,default:r},Symbol.toStringTag,{value:"Module"}));export{s as N,a as P,l as R,o as S};
