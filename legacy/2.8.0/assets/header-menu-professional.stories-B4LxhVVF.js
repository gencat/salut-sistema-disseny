import{x as s}from"./lit-html-D6a8R3xZ.js";const b={title:"Components/Header Menu Professional",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del professional"},surname:{name:"Cognom del professional"},center:{name:"Centre  hospitalari"},collegiate:{name:"Col·legiat nº"},infoLabel:{name:"Label Info"},collegiateLabel:{name:"Label Col·legiat"},preferencesLabel:{name:"Label Preferències"},detailsLabel:{name:"Label enllaç details"},detailsHref:{name:"Href enllaç details"},detailsIcon:{name:"Icona enllaç details"},detailsIconPosition:{name:"Posició icona enllaç details",control:{type:"radio"},options:["left","right"]},showLogout:{name:"Mostrar botó Tancar sessió",control:{type:"boolean"}},logoutLabel:{name:"Label botó Tancar sessió",if:{arg:"showLogout"}},exitLabel:{name:"Label botó Sortir"},hideDropdownDetails:{name:"Amaga secció d'informació personal",control:{type:"boolean"}},hideDropdownPreferences:{name:"Amaga secció de preferències de treball",control:{type:"boolean"}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{name:"John",surname:"Doe",size:"lg",disabled:!1,center:"Centre hospitalari",collegiate:"859438475",infoLabel:"Les meves dades",collegiateLabel:"Col·legiat nº",preferencesLabel:"Preferències de treball",detailsLabel:"Veure més detalls",detailsHref:"#",detailsIcon:"",detailsIconPosition:"left",showLogout:!1,logoutLabel:"Tancar sessió",exitLabel:"Sortir",hideDropdownDetails:!1,hideDropdownPreferences:!1},render:e=>s`
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
                <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences1">Centre treball</label>
                  <input id="preferences1" slot="input" type="text"  readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="business_center"
                  type="default" 
                  elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences2">Rol</label>
                  <input id="preferences2" slot="input" type="text" readonly />
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="people_alt"
                  type="default" 
                  elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences3">Ambit treball</label>
                  <input id="preferences3" slot="input" type="text" readonly/>
                </dss-input-dropdown>
            </dss-header-menu-professional>
          </div>
    `},a={tags:["!dev"],render:()=>s`
    <dss-header-menu-professional 
            name="Nom del professional"
            center="Centre hospitalari"
            hideDropdownDetails
            hideDropdownPreferences
            >
                <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
        </dss-header-menu-professional>
    `},t={tags:["!dev"],render:()=>s`
            <dss-header-menu-professional 
                    name="Nom del professional"
                    center="Centre hospitalari"
                    collegiate="859438475"
                    >
                        <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
                        <dss-input-dropdown
                                icon="maps_home_work"
                                type="default" 
                                elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences1">Centre treball</label>
                                <input id="preferences1" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                            <dss-input-dropdown
                                icon="business_center"
                                type="default" 
                                elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences2">Rol</label>
                                <input id="preferences2" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                            <dss-input-dropdown
                                icon="people_alt"
                                type="default" 
                                elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences3">Ambit treball</label>
                                <input id="preferences3" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                </dss-header-menu-professional>
    `};var n,r,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
                <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences1">Centre treball</label>
                  <input id="preferences1" slot="input" type="text"  readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="business_center"
                  type="default" 
                  elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences2">Rol</label>
                  <input id="preferences2" slot="input" type="text" readonly />
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="people_alt"
                  type="default" 
                  elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences3">Ambit treball</label>
                  <input id="preferences3" slot="input" type="text" readonly/>
                </dss-input-dropdown>
            </dss-header-menu-professional>
          </div>
    \`;
  }
}`,...(o=(r=l.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-menu-professional 
                    name="Nom del professional"
                    center="Centre hospitalari"
                    collegiate="859438475"
                    >
                        <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
                        <dss-input-dropdown
                                icon="maps_home_work"
                                type="default" 
                                elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences1">Centre treball</label>
                                <input id="preferences1" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                            <dss-input-dropdown
                                icon="business_center"
                                type="default" 
                                elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences2">Rol</label>
                                <input id="preferences2" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                            <dss-input-dropdown
                                icon="people_alt"
                                type="default" 
                                elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                                selectedValue='["1"]'
                                >
                                <label slot="label" for="preferences3">Ambit treball</label>
                                <input id="preferences3" slot="input" type="text"  readonly/>
                            </dss-input-dropdown>
                </dss-header-menu-professional>
    \`;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const f=["Playground","Reduced","NoDetailsLink"],g=Object.freeze(Object.defineProperty({__proto__:null,NoDetailsLink:t,Playground:l,Reduced:a,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{t as N,l as P,a as R,g as S};
