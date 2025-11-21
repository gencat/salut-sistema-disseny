import{x as t}from"./lit-html-D6cejpwM.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const q=`
  .dss-layout-header {
    width: 1920px;
  }

  @media only screen and (max-width: 1024px) {
    .dss-layout-header {
      width: 1024px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .dss-layout-header {
      width: 1280px;
    }
  }

  @media only screen and (min-width: 1281px)  and (max-width: 1440px) {
    .dss-layout-header {
      width: 1440px;
    }
  }

  @media only screen and (min-width: 1920px) {
    .dss-layout-header {
      width: 1440px;
    }
  }
`,$={title:"Collections/Header",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["Amb pacient: Assistencial","Amb pacient: Administratiu","Sense pacient","Extern"]},area:{name:"Area",if:{arg:"variant",eq:"Extern"}},appName:{name:"Iniciativa",if:{arg:"variant",eq:"Extern"}},showPatient:{name:"Mostrar menu pacient",control:{type:"boolean"}},showLinks:{name:"Mostrar enllaços",control:{type:"boolean"}},showProfessional:{name:"Mostrar menu professional",control:{type:"boolean"}},showLogout:{name:"Mostrar botó tancar sessió",control:{type:"boolean"}}}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{variant:"Amb pacient: Assistencial",area:"HES",appName:"Mi iniciativa",showPatient:!0,showLinks:!0,showProfessional:!0,showLogout:!1},render:e=>{const C=t`
      <dss-header-links slot="links" items='[
        {"label":"Finalizar visita","icon":"door_front"}
        ]'></dss-header-links>
    `,i=t`
      <dss-header-links slot="links"></dss-header-links>
    `,p=t`
      <dss-header-menu-patient 
        slot="patient-menu"
        name="Nom del pacient"
        cip="CIP"
        age="Edat"
        gender="Gènere"
        phoneMain="Telèfon 1"
        phoneAlt="Telèfon 2">
        <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
      </dss-header-menu-patient>
      `,d=t`
      <dss-header-menu-professional 
            slot="professional-menu"
            name="Nom del professional"
            center="Centre hospitalari"
            collegiate="859438475"
            ?showLogout="${e.showLogout}"
            >
              <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
              <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgil", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
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
      `;return t`
        <div style="width: 98vw">
          
          ${e.variant==="Extern"?t`
            <dss-header 
              area="${e.area}" 
              title="${e.appName}" 
            >
              ${e.showPatient?t`
                  <dss-header-menu-patient 
                    slot="patient-menu"
                    variant="external"
                    name="Nom del pacient"
                    cip="CIP"
                    age="Edat"
                    gender="Gènere"
                    phoneMain="Telèfon 1"
                    phoneAlt="Telèfon 2">
                    <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
                  </dss-header-menu-patient>
                `:null}
              ${e.showLinks?i:null}
              ${e.showProfessional?d:null}
            </dss-header>
          `:e.variant==="Amb pacient: Assistencial"?t`
            <dss-header>
              ${e.showPatient?p:null}
              <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
              <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              ${e.showLinks?C:null}
              ${e.showProfessional?d:null}
            </dss-header>
          `:e.variant==="Amb pacient: Administratiu"?t`
            <dss-header>
              ${e.showPatient?p:null}
              <dss-badge-button slot="allergies" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              ${e.showLinks?i:null}
              ${e.showProfessional?d:null}
            </dss-header>
          `:e.variant==="Sense pacient"?t`
            <dss-header>
              ${e.showLinks?i:null}
              ${e.showProfessional?d:null}
            </dss-header>
          `:null}

        
           
        </div>
      `}},u={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header 
          area="HES" 
          title="Mi iniciativa">
          <dss-header-menu-patient
            slot="patient-menu"
            variant="external"
            name="Nom del pacient"
            cip="CIP"
            age="Edat"
            gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional 
            slot="professional-menu" 
            name="Nom del professional" 
            center="Centre hospitalari" 
            collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[r(q,"header-external-style")]},a={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links" items="[
            {&quot;label&quot;:&quot;Finalizar visita&quot;,&quot;icon&quot;:&quot;door_front&quot;}
          ]"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[r(q,"header-patient-support-style")]},l={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[r(q,"header-patient-admin-style")]},s={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[r(q,"header-no-patient-style")]},n={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header jcef>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links" items="[
            {&quot;label&quot;:&quot;Finalizar visita&quot;,&quot;icon&quot;:&quot;door_front&quot;}
          ]"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[r(q,"header-jcef-style")]};var m,b,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    variant: 'Amb pacient: Assistencial',
    area: 'HES',
    appName: 'Mi iniciativa',
    showPatient: true,
    showLinks: true,
    showProfessional: true,
    showLogout: false
  },
  render: (args: any) => {
    const headerLinks = html\`
      <dss-header-links slot="links" items='[
        {"label":"Finalizar visita","icon":"door_front"}
        ]'></dss-header-links>
    \`;
    const headerLinksEmpty = html\`
      <dss-header-links slot="links"></dss-header-links>
    \`;
    const headerMenuPatient = html\`
      <dss-header-menu-patient 
        slot="patient-menu"
        name="Nom del pacient"
        cip="CIP"
        age="Edat"
        gender="Gènere"
        phoneMain="Telèfon 1"
        phoneAlt="Telèfon 2">
        <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
      </dss-header-menu-patient>
      \`;
    const headerMenuProfessional = html\`
      <dss-header-menu-professional 
            slot="professional-menu"
            name="Nom del professional"
            center="Centre hospitalari"
            collegiate="859438475"
            ?showLogout="\${args.showLogout}"
            >
              <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
              <dss-input-dropdown
                  icon="maps_home_work"
                  type="default" 
                  elements='[{"label":"Parc Sanitari Pere Virgil", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
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
    return html\`
        <div style="width: 98vw">
          
          \${args.variant === 'Extern' ? html\`
            <dss-header 
              area="\${args.area}" 
              title="\${args.appName}" 
            >
              \${args.showPatient ? html\`
                  <dss-header-menu-patient 
                    slot="patient-menu"
                    variant="external"
                    name="Nom del pacient"
                    cip="CIP"
                    age="Edat"
                    gender="Gènere"
                    phoneMain="Telèfon 1"
                    phoneAlt="Telèfon 2">
                    <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
                  </dss-header-menu-patient>
                \` : null}
              \${args.showLinks ? headerLinksEmpty : null}
              \${args.showProfessional ? headerMenuProfessional : null}
            </dss-header>
          \` : args.variant === 'Amb pacient: Assistencial' ? html\`
            <dss-header>
              \${args.showPatient ? headerMenuPatient : null}
              <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
              <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              \${args.showLinks ? headerLinks : null}
              \${args.showProfessional ? headerMenuProfessional : null}
            </dss-header>
          \` : args.variant === 'Amb pacient: Administratiu' ? html\`
            <dss-header>
              \${args.showPatient ? headerMenuPatient : null}
              <dss-badge-button slot="allergies" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              \${args.showLinks ? headerLinksEmpty : null}
              \${args.showProfessional ? headerMenuProfessional : null}
            </dss-header>
          \` : args.variant === 'Sense pacient' ? html\`
            <dss-header>
              \${args.showLinks ? headerLinksEmpty : null}
              \${args.showProfessional ? headerMenuProfessional : null}
            </dss-header>
          \` : null}

        
           
        </div>
      \`;
  }
}`,...(c=(b=o.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var v,f,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header 
          area="HES" 
          title="Mi iniciativa">
          <dss-header-menu-patient
            slot="patient-menu"
            variant="external"
            name="Nom del pacient"
            cip="CIP"
            age="Edat"
            gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional 
            slot="professional-menu" 
            name="Nom del professional" 
            center="Centre hospitalari" 
            collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-external-style')]
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,w,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links" items="[
            {&quot;label&quot;:&quot;Finalizar visita&quot;,&quot;icon&quot;:&quot;door_front&quot;}
          ]"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-patient-support-style')]
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var E,P,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-patient-admin-style')]
}`,...(x=(P=l.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var k,_,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-no-patient-style')]
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var N,z,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header jcef>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links" items="[
            {&quot;label&quot;:&quot;Finalizar visita&quot;,&quot;icon&quot;:&quot;door_front&quot;}
          ]"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-input-dropdown icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences1">Centre treball</label>
              <input id="preferences1" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences2">Rol</label>
              <input id="preferences2" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
            <dss-input-dropdown icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
              <label slot="label" for="preferences3">Ambit treball</label>
              <input id="preferences3" slot="input" type="text"  readonly="">
            </dss-input-dropdown>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-jcef-style')]
}`,...(A=(z=n.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const I=["Playground","External","PatientSupport","PatientAdministrative","NoPatient","JCEF"],V=Object.freeze(Object.defineProperty({__proto__:null,External:u,JCEF:n,NoPatient:s,PatientAdministrative:l,PatientSupport:a,Playground:o,__namedExportsOrder:I,default:$},Symbol.toStringTag,{value:"Module"}));export{u as E,n as J,s as N,o as P,V as S,a,l as b};
