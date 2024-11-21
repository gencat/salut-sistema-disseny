import{x as n}from"./lit-html-paDGiEfB.js";const s={title:"Components/Header Menu Professional",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del professional"},surname:{name:"Cognom del professional"},center:{name:"Centre  hospitalari"},collegiate:{name:"Col·legiat nº"},infoLabel:{name:"Label Info"},collegiateLabel:{name:"Label Col·legiat"},preferencesLabel:{name:"Label Preferències"},detailsLabel:{name:"Label enllaç details"},detailsHref:{name:"Href enllaç details"},detailsIcon:{name:"Icona enllaç details"},detailsIconPosition:{name:"Posició icona enllaç details",control:{type:"radio"},options:["left","right"]},logoutLabel:{name:"Label enllaç details"},logoutIcon:{name:"Icona enllaç details"},logoutIconPosition:{name:"Posició icona enllaç details",control:{type:"radio"},options:["left","right"]},hideDropdownDetails:{name:"Amaga secció d'informació personal",control:{type:"boolean"}},hideDropdownPreferences:{name:"Amaga secció de preferències de treball",control:{type:"boolean"}}},parameters:{layout:"centered"}},l={args:{name:"John",surname:"Doe",size:"lg",disabled:!1,center:"Centre hospitalari",collegiate:"859438475",infoLabel:"Les meves dades",collegiateLabel:"Col·legiat nº",preferencesLabel:"Preferències de treball",detailsLabel:"Veure més detalls",detailsHref:"#",detailsIcon:"",detailsIconPosition:"left",logoutLabel:"Tancar sessió",logoutIcon:"logout",logoutIconPosition:"left",hideDropdownDetails:!1,hideDropdownPreferences:!1},render:e=>n`
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
              logoutLabel="${e.logoutLabel}"
              logoutIcon="${e.logoutIcon}"
              logoutIconPosition="${e.logoutIconPosition}"
              ?hideDropdownDetails="${e.hideDropdownDetails}"
              ?hideDropdownPreferences="${e.hideDropdownPreferences}"
              >
                <dss-avatar size="xl" name="${e.name}" surname="${e.surname}" slot="avatar"></dss-avatar>
                <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences1">Centre treball</label>
                  <input id="preferences1" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="business_center"
                  type="default" 
                  elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences2">Rol</label>
                  <input id="preferences2" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="people_alt"
                  type="default" 
                  elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences3">Ambit treball</label>
                  <input id="preferences3" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
            </dss-header-menu-professional>
          </div>
    `};var a,o,t;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    logoutLabel: 'Tancar sessió',
    logoutIcon: 'logout',
    logoutIconPosition: 'left',
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
              logoutLabel="\${args.logoutLabel}"
              logoutIcon="\${args.logoutIcon}"
              logoutIconPosition="\${args.logoutIconPosition}"
              ?hideDropdownDetails="\${args.hideDropdownDetails}"
              ?hideDropdownPreferences="\${args.hideDropdownPreferences}"
              >
                <dss-avatar size="xl" name="\${args.name}" surname="\${args.surname}" slot="avatar"></dss-avatar>
                <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgili", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences1">Centre treball</label>
                  <input id="preferences1" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="business_center"
                  type="default" 
                  elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences2">Rol</label>
                  <input id="preferences2" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
                <dss-input-dropdown
                  icon="people_alt"
                  type="default" 
                  elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                  selectedValue='["1"]'
                  >
                  <label slot="label" for="preferences3">Ambit treball</label>
                  <input id="preferences3" slot="input" type="text" class="dss-input" readonly/>
                </dss-input-dropdown>
            </dss-header-menu-professional>
          </div>
    \`;
  }
}`,...(t=(o=l.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const i=["Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{l as P,d as S};
