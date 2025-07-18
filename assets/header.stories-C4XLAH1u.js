import{x as t}from"./lit-html-D6a8R3xZ.js";const A={title:"Collections/Header",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["Amb pacient: Assistencial","Amb pacient: Administratiu","Sense pacient","Extern"]},area:{name:"Area",if:{arg:"variant",eq:"Extern"}},appName:{name:"Iniciativa",if:{arg:"variant",eq:"Extern"}},showPatient:{name:"Mostrar menu pacient",control:{type:"boolean"}},showLinks:{name:"Mostrar enllaços",control:{type:"boolean"}},showProfessional:{name:"Mostrar menu professional",control:{type:"boolean"}},showLogout:{name:"Mostrar botó tancar sessió",control:{type:"boolean"}}}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{variant:"Amb pacient: Assistencial",area:"HES",appName:"Mi iniciativa",showPatient:!0,showLinks:!0,showProfessional:!0,showLogout:!1},render:e=>{const S=t`
      <dss-header-links slot="links" items='[
        {"label":"Finalizar visita","icon":"door_front"}
        ]'></dss-header-links>
    `,q=t`
      <dss-header-links slot="links"></dss-header-links>
    `,d=t`
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
      `,r=t`
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
              ${e.showLinks?q:null}
              ${e.showProfessional?r:null}
            </dss-header>
          `:e.variant==="Amb pacient: Assistencial"?t`
            <dss-header>
              ${e.showPatient?d:null}
              <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
              <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              ${e.showLinks?S:null}
              ${e.showProfessional?r:null}
            </dss-header>
          `:e.variant==="Amb pacient: Administratiu"?t`
            <dss-header>
              ${e.showPatient?d:null}
              <dss-badge-button slot="allergies" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              ${e.showLinks?q:null}
              ${e.showProfessional?r:null}
            </dss-header>
          `:e.variant==="Sense pacient"?t`
            <dss-header>
              ${e.showLinks?q:null}
              ${e.showProfessional?r:null}
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
    `},l={tags:["!dev"],render:()=>t`
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
    `},a={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
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
    `},s={tags:["!dev"],render:()=>t`
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
    `};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,c,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  }
}`,...(v=(c=u.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var f,h,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var E,y,w;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var P,k,x;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var _,N,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  }
}`,...(z=(N=s.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const C=["Playground","External","PatientSupport","PatientAdministrative","NoPatient","JCEF"],I=Object.freeze(Object.defineProperty({__proto__:null,External:u,JCEF:s,NoPatient:n,PatientAdministrative:a,PatientSupport:l,Playground:o,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{u as E,s as J,n as N,o as P,I as S,l as a,a as b};
