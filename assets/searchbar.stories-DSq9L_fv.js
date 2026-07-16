import{x as a}from"./iframe-D7EeAtJA.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const r=`
  .css-1sqhzee {
        display:none
    }

    .innerZoomElementWrapper {
        flex-direction: row;
        align-items: center;
    }

    .demo {
        width: 80%;
    }

    .wrapper {
        min-height: 80px;
        width: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }
    
    .wrapper--md {
        width: 400px;
    }

    .wrapper--alignment {
        height: 240px;
    }
`,T={title:"Components/Searchbar",argTypes:{showRecentSearches:{name:"Mostra Últimes cerques",control:{type:"boolean"}},multiple:{name:"Multiple",control:{type:"boolean"}},size:{name:"Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Invalid",control:{type:"boolean"}},readonly:{name:"Readonly",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={render:e=>{const t=[{value:"Diagnostics Inicial",icon:"person"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",icon:"sentiment_neutral"},{value:"Sense resultats",icon:"calculate"},{value:"Resultat 1",icon:"calculate"},{value:"Resultat Crític",icon:"warning"}],x=[{value:"Cerca recent"},{value:"Termini recent"},{value:"Diagnostics recent"}];return a`
            <div class="wrapper" style="width: 600px">
                <dss-searchbar 
                    label="Cercador"
                    catalog=${JSON.stringify(t)}
                    recentSearches=${e.showRecentSearches?JSON.stringify(x):null}
                    ?multiple=${e.multiple}
                    icon="${e.icon}"
                    size="${e.size}"
                    helpText="${e.helpText}"
                    threshold="${e.threshold}"
                    ?invalid=${e.invalid}
                    emptyDropdownText="${e.emptyDropdownText}"
                    ?isCatalogLoading=${e.isCatalogLoading}
                    ?advancedFilter=${e.advancedFilter}
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                >
                </dss-searchbar>
            </div>
        `},args:{showRecentSearches:!1,multiple:!1,size:"lg",icon:"search",helpText:"Missatge informatiu",threshold:3,emptyDropdownText:"Sense resultats per",invalid:!1,readonly:!1,disabled:!1,isCatalogLoading:!1,advancedFilter:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev"}}},n={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-searchbar
          helpText='Help text'
        >
        </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-basic-unique-style")]},o={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-searchbar
                    multiple
          helpText='Help text'
        >
        </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-basic-multiple-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-searchbar
          helpText='Últimes cerques'
          recentSearches=${JSON.stringify([{value:"Cerca recent"},{value:"Termini recent"},{value:"Termini anterior"},{value:"Diagnostics recent"}])}
        >
        </dss-searchbar>
      </div>
      </div>
    `,decorators:[s(r,"searchbar-predictive-recent-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
          helpText='Cercat predictiu (dia)'
          catalog=${JSON.stringify([{value:"Diagnostics Inicial"},{value:"Diagnostics Crític"},{value:"Diagnostics Neutral"},{value:"Sense resultats"},{value:"No iniciat"}])}
        >
        </dss-searchbar>
      </div>
    `,decorators:[s(r,"searchbar-simple-style")]},d={tags:["!dev"],render:()=>{const e=[{value:"Cerca recent"},{value:"Termini recent"},{value:"Termini anterior"},{value:"Diagnostics recent"}],t=[{value:"Diagnostics Inicial"},{value:"Diagnostics Crític"},{value:"Diagnostics Neutral"},{value:"Sense resultats"},{value:"No iniciat"}];return a`
            <div class="wrapper">
        <dss-searchbar
          helpText='Combinat (cerca per dia)'
          recentSearches=${JSON.stringify(e)}
                    catalog=${JSON.stringify(t)}
        >
        </dss-searchbar>
      </div>
    `},decorators:[s(r,"searchbar-simple-style")]},u={tags:["!dev"],render:()=>{const e=[{value:"Cerca recent"},{value:"Termini recent",icon:"add_box"},{value:"Termini anterior",disabled:!0},{value:"Diagnostics recent"}],t=[{value:"Diagnostics Inicial",icon:"not_started"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",disabled:!0},{value:"Sense resultats"},{value:"No iniciat"}];return a`
            <div class="wrapper">
        <dss-searchbar
          helpText='Combinat (cerca per dia)'
          recentSearches=${JSON.stringify(e)}
                    catalog=${JSON.stringify(t)}
        >
        </dss-searchbar>
      </div>
    `},decorators:[s(r,"searchbar-simple-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-searchbar
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Settings","icon":"Settings"},
                        {"value":"Home 1"},
                        {"value":"Home 2","icon":"home"}
                    ]'
        >
        </dss-searchbar>
      </div>
    `,decorators:[s(r,"searchbar-simple-style")]},v={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    multiple
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Settings","icon":"Settings"},
                        {"value":"Home 1"},
                        {"value":"Home 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-multiple-style")]},g={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--md">
                <dss-searchbar
                    size="md"
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
                <dss-searchbar
                    size="lg"
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-size-style")]},h={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    required
                    helpText="Label oculta (no es veu l’*)"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-required-style")]},m={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    disabled
                    helpText="Missatge informatiu"
                    multiple
                    searchTerms='["Value 1","Value 2"]'
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-disabled-style")]},b={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    readonly
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-readonly-style")]},S={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Cerca per diagnostics"
                    searchTerms='["Value 1","Value 2"]'
                    multiple
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Value 1"},
                        {"value":"Value 2"},
                        {"value":"Inicio 2","icon":"home"}
                        ]'
                    >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-predefined-style")]},y={tags:["!dev"],render:()=>a`
       <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    multiple
                    catalog='[]'
                    isCatalogLoading
                    >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-loading-style")]},D={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    multiple
                    helpText="Missatge informatiu"
                    catalogStyle="max-height: 100px; overflow-y: auto;"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Diagnostics 4","icon":"person"},
                        {"value":"Diagnostics 5","icon":"person"},
                        {"value":"Diagnostics 6","icon":"person"},
                        {"value":"Diagnostics 7","icon":"person"},
                        {"value":"Diagnostics 8","icon":"person"},
                        {"value":"Diagnostics 9","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                        ]'
                    >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-custom-style")]},w={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-searchbar
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics Inicial","icon":"person"},
                        {"value":"Diagnostics Crític","icon":"person"},
                        {"value":"Diagnostics Neutral","icon":"person"},
                        {"value":"Sense resultats","icon":"Settings"},
                        {"value":"Resultat "},
                        {"value":"Resultat Crític","icon":"home"}
                    ]'
                    advancedFilter
                    threshold="3"
        >
        </dss-searchbar>
      </div>
    `,decorators:[s(r,"searchbar-advanced-style")]},f={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const t=document.querySelector("#manual-focus-demo");t&&t.focus()}}></dss-button>
                <dss-searchbar
                    id="manual-focus-demo"
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics Inicial","icon":"person"},
                        {"value":"Diagnostics Crític","icon":"person"},
                        {"value":"Diagnostics Neutral","icon":"person"},
                        {"value":"Sense resultats","icon":"Settings"},
                        {"value":"Resultat "},
                        {"value":"Resultat Crític","icon":"home"}
                    ]'
                    advancedFilter
                    threshold="3"
        >
        </dss-searchbar>
            </div>
        `,decorators:[s(r,"searchbar-focus-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const catalog = [{
      value: 'Diagnostics Inicial',
      icon: 'person'
    }, {
      value: 'Diagnostics Crític',
      icon: 'warning'
    }, {
      value: 'Diagnostics Neutral',
      icon: 'sentiment_neutral'
    }, {
      value: 'Sense resultats',
      icon: 'calculate'
    }, {
      value: 'Resultat 1',
      icon: 'calculate'
    }, {
      value: 'Resultat Crític',
      icon: 'warning'
    }];
    const lastSearches = [{
      value: 'Cerca recent'
    }, {
      value: 'Termini recent'
    }, {
      value: 'Diagnostics recent'
    }];
    return html\`
            <div class="wrapper" style="width: 600px">
                <dss-searchbar 
                    label="Cercador"
                    catalog=\${JSON.stringify(catalog)}
                    recentSearches=\${args.showRecentSearches ? JSON.stringify(lastSearches) : null}
                    ?multiple=\${args.multiple}
                    icon="\${args.icon}"
                    size="\${args.size}"
                    helpText="\${args.helpText}"
                    threshold="\${args.threshold}"
                    ?invalid=\${args.invalid}
                    emptyDropdownText="\${args.emptyDropdownText}"
                    ?isCatalogLoading=\${args.isCatalogLoading}
                    ?advancedFilter=\${args.advancedFilter}
                    ?readonly=\${args.readonly} 
                    ?disabled=\${args.disabled}
                >
                </dss-searchbar>
            </div>
        \`;
  },
  args: {
    showRecentSearches: false,
    multiple: false,
    size: 'lg',
    icon: 'search',
    helpText: 'Missatge informatiu',
    threshold: 3,
    emptyDropdownText: 'Sense resultats per',
    invalid: false,
    readonly: false,
    disabled: false,
    isCatalogLoading: false,
    advancedFilter: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev'
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-searchbar
          helpText='Help text'
        >
        </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-basic-unique-style')]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-searchbar
                    multiple
          helpText='Help text'
        >
        </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-basic-multiple-style')]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const recentSearches = [{
      value: 'Cerca recent'
    }, {
      value: 'Termini recent'
    }, {
      value: 'Termini anterior'
    }, {
      value: 'Diagnostics recent'
    }];
    return html\`
      <div class="wrapper">
        <dss-searchbar
          helpText='Últimes cerques'
          recentSearches=\${JSON.stringify(recentSearches)}
        >
        </dss-searchbar>
      </div>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-predictive-recent-style')]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const searchCatalog = [{
      value: 'Diagnostics Inicial'
    }, {
      value: 'Diagnostics Crític'
    }, {
      value: 'Diagnostics Neutral'
    }, {
      value: 'Sense resultats'
    }, {
      value: 'No iniciat'
    }];
    return html\`
      <div class="wrapper">
                <dss-searchbar
          helpText='Cercat predictiu (dia)'
          catalog=\${JSON.stringify(searchCatalog)}
        >
        </dss-searchbar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-simple-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const recentSearches = [{
      value: 'Cerca recent'
    }, {
      value: 'Termini recent'
    }, {
      value: 'Termini anterior'
    }, {
      value: 'Diagnostics recent'
    }];
    const searchCatalog = [{
      value: 'Diagnostics Inicial'
    }, {
      value: 'Diagnostics Crític'
    }, {
      value: 'Diagnostics Neutral'
    }, {
      value: 'Sense resultats'
    }, {
      value: 'No iniciat'
    }];
    return html\`
            <div class="wrapper">
        <dss-searchbar
          helpText='Combinat (cerca per dia)'
          recentSearches=\${JSON.stringify(recentSearches)}
                    catalog=\${JSON.stringify(searchCatalog)}
        >
        </dss-searchbar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-simple-style')]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const recentSearches = [{
      value: 'Cerca recent'
    }, {
      value: 'Termini recent',
      icon: 'add_box'
    }, {
      value: 'Termini anterior',
      disabled: true
    }, {
      value: 'Diagnostics recent'
    }];
    const searchCatalog = [{
      value: 'Diagnostics Inicial',
      icon: 'not_started'
    }, {
      value: 'Diagnostics Crític',
      icon: 'warning'
    }, {
      value: 'Diagnostics Neutral',
      disabled: true
    }, {
      value: 'Sense resultats'
    }, {
      value: 'No iniciat'
    }];
    return html\`
            <div class="wrapper">
        <dss-searchbar
          helpText='Combinat (cerca per dia)'
          recentSearches=\${JSON.stringify(recentSearches)}
                    catalog=\${JSON.stringify(searchCatalog)}
        >
        </dss-searchbar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-simple-style')]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-searchbar
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Settings","icon":"Settings"},
                        {"value":"Home 1"},
                        {"value":"Home 2","icon":"home"}
                    ]'
        >
        </dss-searchbar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-simple-style')]
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    multiple
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Settings","icon":"Settings"},
                        {"value":"Home 1"},
                        {"value":"Home 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-multiple-style')]
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--md">
                <dss-searchbar
                    size="md"
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
                <dss-searchbar
                    size="lg"
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-size-style')]
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    required
                    helpText="Label oculta (no es veu l’*)"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-required-style')]
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    disabled
                    helpText="Missatge informatiu"
                    multiple
                    searchTerms='["Value 1","Value 2"]'
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-disabled-style')]
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    readonly
                    helpText="Missatge informatiu"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-readonly-style')]
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Cerca per diagnostics"
                    searchTerms='["Value 1","Value 2"]'
                    multiple
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Value 1"},
                        {"value":"Value 2"},
                        {"value":"Inicio 2","icon":"home"}
                        ]'
                    >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-predefined-style')]
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    multiple
                    catalog='[]'
                    isCatalogLoading
                    >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-loading-style')]
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    multiple
                    helpText="Missatge informatiu"
                    catalogStyle="max-height: 100px; overflow-y: auto;"
                    catalog='[
                        {"value":"Diagnostics 1","icon":"person"},
                        {"value":"Diagnostics 2","icon":"person"},
                        {"value":"Diagnostics 3","icon":"person"},
                        {"value":"Diagnostics 4","icon":"person"},
                        {"value":"Diagnostics 5","icon":"person"},
                        {"value":"Diagnostics 6","icon":"person"},
                        {"value":"Diagnostics 7","icon":"person"},
                        {"value":"Diagnostics 8","icon":"person"},
                        {"value":"Diagnostics 9","icon":"person"},
                        {"value":"Ajustes","icon":"Settings"},
                        {"value":"Inicio 1","icon":"home"},
                        {"value":"Inicio 2","icon":"home"}
                        ]'
                    >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-custom-style')]
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-searchbar
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics Inicial","icon":"person"},
                        {"value":"Diagnostics Crític","icon":"person"},
                        {"value":"Diagnostics Neutral","icon":"person"},
                        {"value":"Sense resultats","icon":"Settings"},
                        {"value":"Resultat "},
                        {"value":"Resultat Crític","icon":"home"}
                    ]'
                    advancedFilter
                    threshold="3"
        >
        </dss-searchbar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-advanced-style')]
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-searchbar
                    id="manual-focus-demo"
          helpText="Missatge informatiu"
          catalog='[
                        {"value":"Diagnostics Inicial","icon":"person"},
                        {"value":"Diagnostics Crític","icon":"person"},
                        {"value":"Diagnostics Neutral","icon":"person"},
                        {"value":"Sense resultats","icon":"Settings"},
                        {"value":"Resultat "},
                        {"value":"Resultat Crític","icon":"home"}
                    ]'
                    advancedFilter
                    threshold="3"
        >
        </dss-searchbar>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-focus-style')]
}`,...f.parameters?.docs?.source}}};const C=["Playground","BasicUnique","BasicMultiple","PredictiveRecent","PredictiveCatalog","PredictiveCombined","PredictiveCustoms","Simple","Multiple","Size","Required","Disabled","ReadOnly","Predefined","LoadingCatalog","CustomStyle","AdvancedFilter","Focus"],N=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:w,BasicMultiple:o,BasicUnique:n,CustomStyle:D,Disabled:m,Focus:f,LoadingCatalog:y,Multiple:v,Playground:i,Predefined:S,PredictiveCatalog:l,PredictiveCombined:d,PredictiveCustoms:u,PredictiveRecent:c,ReadOnly:b,Required:h,Simple:p,Size:g,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{w as A,n as B,D as C,m as D,f as F,y as L,i as P,h as R,N as S,o as a,c as b,l as c,d,u as e,S as f,g,b as h};
