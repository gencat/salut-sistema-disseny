import{x as t}from"./iframe-CdZ_4rdx.js";const n={title:"Components/Header Menu Professional",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del professional"},surname:{name:"Cognom del professional"},center:{name:"Centre  hospitalari"},collegiate:{name:"Col·legiat nº"},infoLabel:{name:"Label Info"},collegiateLabel:{name:"Label Col·legiat"},preferencesLabel:{name:"Label Preferències"},detailsLabel:{name:"Label enllaç details"},detailsHref:{name:"Href enllaç details"},detailsIcon:{name:"Icona enllaç details"},detailsIconPosition:{name:"Posició icona enllaç details",control:{type:"radio"},options:["left","right"]},showLogout:{name:"Mostrar botó Tancar sessió",control:{type:"boolean"}},logoutLabel:{name:"Label botó Tancar sessió",if:{arg:"showLogout"}},exitLabel:{name:"Label botó Sortir"},hideDropdownDetails:{name:"Amaga secció d'informació personal",control:{type:"boolean"}},hideDropdownPreferences:{name:"Amaga secció de preferències de treball",control:{type:"boolean"}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{name:"John",surname:"Doe",size:"lg",disabled:!1,center:"Centre hospitalari",collegiate:"859438475",infoLabel:"Les meves dades",collegiateLabel:"Col·legiat nº",preferencesLabel:"Preferències de treball",detailsLabel:"Veure més detalls",detailsHref:"#",detailsIcon:"",detailsIconPosition:"left",showLogout:!1,logoutLabel:"Tancar sessió",exitLabel:"Sortir",hideDropdownDetails:!1,hideDropdownPreferences:!1},render:e=>t`
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
              detailsLabel="${e.detailsLabel}"
              detailsHref="${e.detailsHref}"
              detailsIcon="${e.detailsIcon}"
              detailsIconPosition="${e.detailsIconPosition}"
              ?hideDropdownDetails="${e.hideDropdownDetails}"
              ?hideDropdownPreferences="${e.hideDropdownPreferences}"
                            ?showLogout="${e.showLogout}"
              logoutLabel="${e.logoutLabel}"
              exitLabel="${e.exitLabel}"
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
    `},a={tags:["!dev"],render:()=>t`
    <dss-header-menu-professional 
            name="Nom del professional"
            center="Centre hospitalari"
            hideDropdownDetails
            hideDropdownPreferences
            >
                <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
        </dss-header-menu-professional>
    `},s={tags:["!dev"],render:()=>t`
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
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    detailsLabel: 'Veure més detalls',
    detailsHref: '#',
    detailsIcon: '',
    detailsIconPosition: 'left',
    showLogout: false,
    logoutLabel: 'Tancar sessió',
    exitLabel: 'Sortir',
    hideDropdownDetails: false,
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
              detailsLabel="\${args.detailsLabel}"
              detailsHref="\${args.detailsHref}"
              detailsIcon="\${args.detailsIcon}"
              detailsIconPosition="\${args.detailsIconPosition}"
              ?hideDropdownDetails="\${args.hideDropdownDetails}"
              ?hideDropdownPreferences="\${args.hideDropdownPreferences}"
                            ?showLogout="\${args.showLogout}"
              logoutLabel="\${args.logoutLabel}"
              exitLabel="\${args.exitLabel}"
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const r=["Playground","Reduced","NoDetailsLink"],i=Object.freeze(Object.defineProperty({__proto__:null,NoDetailsLink:s,Playground:l,Reduced:a,__namedExportsOrder:r,default:n},Symbol.toStringTag,{value:"Module"}));export{s as N,l as P,a as R,i as S};
