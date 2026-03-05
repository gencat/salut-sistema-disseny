import{x as t}from"./iframe-CdZ_4rdx.js";import{w as q}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,p={title:"Collections/Header",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["Amb pacient: Assistencial","Amb pacient: Administratiu","Sense pacient","Extern"]},area:{name:"Area",if:{arg:"variant",eq:"Extern"}},appName:{name:"Iniciativa",if:{arg:"variant",eq:"Extern"}},showPatient:{name:"Mostrar menu pacient",control:{type:"boolean"}},showLinks:{name:"Mostrar enllaços",control:{type:"boolean"}},showProfessional:{name:"Mostrar menu professional",control:{type:"boolean"}},showLogout:{name:"Mostrar botó tancar sessió",control:{type:"boolean"}}}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{variant:"Amb pacient: Assistencial",area:"HES",appName:"Mi iniciativa",showPatient:!0,showLinks:!0,showProfessional:!0,showLogout:!1},render:e=>{const c=t`
      <dss-header-links slot="links" items='[
        {"label":"Finalizar visita","icon":"door_front"}
        ]'></dss-header-links>
    `,i=t`
      <dss-header-links slot="links"></dss-header-links>
    `,m=t`
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
        <dss-select
          label="Centre treball"
          icon="maps_home_work"
          type="default" 
          elements='[{"label":"Parc Sanitari Pere Virgil", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
        <dss-select
          label="Rol"
          icon="business_center"
          type="default" 
          elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
        <dss-select
          label="Ambit treball"
          icon="people_alt"
          type="default" 
          elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
      </dss-header-menu-professional>
      `;return t`
        <div style="width: 98vw">
          
          ${e.variant==="Extern"?t`
            <dss-header 
              area="${e.area}" 
              titleText="${e.appName}" 
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
              ${e.showPatient?m:null}
              <dss-badge-button slot="allergies" label="Al·lèrgies (0)" size="md" state="neutral" outlined ></dss-badge-button>
              <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
              ${e.showLinks?c:null}
              ${e.showProfessional?d:null}
            </dss-header>
          `:e.variant==="Amb pacient: Administratiu"?t`
            <dss-header>
              ${e.showPatient?m:null}
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
      `}},a={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header 
          area="HES" 
          titleText="Mi iniciativa">
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
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[q(r,"header-external-style")]},u={tags:["!dev"],render:()=>t`
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
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[q(r,"header-patient-support-style")]},l={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-menu-patient slot="patient-menu" name="Nom del pacient" cip="CIP" age="Edat" gender="Gènere">
            <dss-avatar size="xl" name="Nom" surname="Pacient" slot="avatar"></dss-avatar>
          </dss-header-menu-patient>
          <dss-badge-button slot="situation-marks" label="Situació (1)" size="md" state="danger" ></dss-badge-button>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[q(r,"header-patient-admin-style")]},s={tags:["!dev"],render:()=>t`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>  
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[q(r,"header-no-patient-style")]},n={tags:["!dev"],render:()=>t`
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
            <dss-select label="Centre treball" readonly  icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly  icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Àmbit treball" readonly  icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    `,decorators:[q(r,"header-jcef-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <dss-select
          label="Centre treball"
          icon="maps_home_work"
          type="default" 
          elements='[{"label":"Parc Sanitari Pere Virgil", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
        <dss-select
          label="Rol"
          icon="business_center"
          type="default" 
          elements='[{"label":"Infermer pediàtric", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
        <dss-select
          label="Ambit treball"
          icon="people_alt"
          type="default" 
          elements='[{"label":"Propi", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
          readonly
        />
      </dss-header-menu-professional>
      \`;
    return html\`
        <div style="width: 98vw">
          
          \${args.variant === 'Extern' ? html\`
            <dss-header 
              area="\${args.area}" 
              titleText="\${args.appName}" 
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header 
          area="HES" 
          titleText="Mi iniciativa">
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
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-external-style')]
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-patient-support-style')]
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-patient-admin-style')]
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-layout-header">
        <dss-header>
          <dss-header-links slot="links"></dss-header-links>
          <dss-header-menu-professional slot="professional-menu" name="Nom del professional" center="Centre hospitalari" collegiate="859438475">
            <dss-avatar size="xl" name="Nom" surname="Professional" slot="avatar"></dss-avatar>
            <dss-select label="Centre treball" readonly icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Rol" readonly icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>
            <dss-select label="Ambit treball" readonly icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]"></dss-select>  
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-no-patient-style')]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
            <dss-select label="Centre treball" readonly  icon="maps_home_work" type="default" elements="[{&quot;label&quot;:&quot;Parc Sanitari Pere Virgili&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Rol" readonly  icon="business_center" type="default" elements="[{&quot;label&quot;:&quot;Infermer pediàtric&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
            <dss-select label="Àmbit treball" readonly  icon="people_alt" type="default" elements="[{&quot;label&quot;:&quot;Propi&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]" selectedvalue="[&quot;1&quot;]">
            </dss-select>
          </dss-header-menu-professional>
        </dss-header>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'header-jcef-style')]
}`,...n.parameters?.docs?.source}}};const b=["Playground","External","PatientSupport","PatientAdministrative","NoPatient","JCEF"],f=Object.freeze(Object.defineProperty({__proto__:null,External:a,JCEF:n,NoPatient:s,PatientAdministrative:l,PatientSupport:u,Playground:o,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{a as E,n as J,s as N,o as P,f as S,u as a,l as b};
