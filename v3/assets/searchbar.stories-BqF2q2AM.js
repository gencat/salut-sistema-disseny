import{x as a}from"./iframe-CdZ_4rdx.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
        min-height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
    }
    
    .wrapper--no-dropdown {
        min-height: 80px;
    }

    .wrapper {
        width: 600px;
    }

    .wrapper--md {
        width: 400px;
    }

    .wrapper--alignment {
        height: 240px;
    }
`,y={title:"Components/Searchbar",argTypes:{multiple:{name:"Multiple",control:{type:"boolean"}},size:{name:"Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Invalid",control:{type:"boolean"}},readonly:{name:"Readonly",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},recentSearches:{name:"Últimes cerques",control:{type:"boolean"}},recentSearchesText:{name:"Posición tooltip",control:{type:"text"},if:{arg:"recentSearches",truthy:!0}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={render:e=>{const m=[{value:"Diagnostics Inicial",icon:"person"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",icon:"sentiment_neutral"},{value:"Sense resultats",icon:"calculate"},{value:"Resultat 1",icon:"calculate"},{value:"Resultat Crític",icon:"warning"}];return a`
            <div class="wrapper" style="width: 600px">
                <dss-searchbar 
                    label="Cercador"
                    ?multiple=${e.multiple}
                    icon="${e.icon}"
                    size="${e.size}"
                    helpText="${e.helpText}"
                    threshold="${e.threshold}"
                    ?invalid=${e.invalid}
                    ?recentSearches=${e.recentSearches}
                    recentSearchesText="${e.recentSearchesText}"
                    emptyDropdownText="${e.emptyDropdownText}"
                    catalog=${JSON.stringify(m)}
                    ?isCatalogLoading=${e.isCatalogLoading}
                    ?advancedFilter=${e.advancedFilter}
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                >
                </dss-searchbar>
            </div>
        `},args:{multiple:!1,size:"lg",icon:"search",helpText:"Missatge informatiu",threshold:3,emptyDropdownText:"Sense resultats per",invalid:!1,readonly:!1,disabled:!1,recentSearches:!1,recentSearchesText:"Últimes cerques",isCatalogLoading:!1,advancedFilter:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev"}}},i={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-simple-style")]},t={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-multiple-style")]},n={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-size-style")]},c={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-required-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    disabled
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
    `,decorators:[s(r,"searchbar-disabled-style")]},d={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-readonly-style")]},u={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    recentSearches
                    catalog='[
                        {"value":"Last search","icon":"history"},
                        {"value":"Last term","icon":"history"},
                        {"value":"Previous term","icon":"history"},
                        {"value":"Another term","icon":"history"}
                    ]'
                >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-lastsearch-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    searchTerms='["Value 1","Value 2"]'
                    multiple
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
    `,decorators:[s(r,"searchbar-predefined-style")]},g={tags:["!dev"],render:()=>a`
       <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    multiple
                    catalog='[]'
                    isCatalogLoading
                    >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-loading-style")]},v={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-custom-style")]},h={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-advanced-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    return html\`
            <div class="wrapper" style="width: 600px">
                <dss-searchbar 
                    label="Cercador"
                    ?multiple=\${args.multiple}
                    icon="\${args.icon}"
                    size="\${args.size}"
                    helpText="\${args.helpText}"
                    threshold="\${args.threshold}"
                    ?invalid=\${args.invalid}
                    ?recentSearches=\${args.recentSearches}
                    recentSearchesText="\${args.recentSearchesText}"
                    emptyDropdownText="\${args.emptyDropdownText}"
                    catalog=\${JSON.stringify(catalog)}
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
    multiple: false,
    size: 'lg',
    icon: 'search',
    helpText: 'Missatge informatiu',
    threshold: 3,
    emptyDropdownText: 'Sense resultats per',
    invalid: false,
    readonly: false,
    disabled: false,
    recentSearches: false,
    recentSearchesText: 'Últimes cerques',
    isCatalogLoading: false,
    advancedFilter: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev'
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    disabled
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
  decorators: [withStyle(wrapperStyle, 'searchbar-disabled-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    recentSearches
                    catalog='[
                        {"value":"Last search","icon":"history"},
                        {"value":"Last term","icon":"history"},
                        {"value":"Previous term","icon":"history"},
                        {"value":"Another term","icon":"history"}
                    ]'
                >
                </dss-searchbar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-lastsearch-style')]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    searchTerms='["Value 1","Value 2"]'
                    multiple
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
  decorators: [withStyle(wrapperStyle, 'searchbar-predefined-style')]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const b=["Playground","Simple","Multiple","Size","Required","Disabled","ReadOnly","LastSearchs","Predefined","LoadingCatalog","CustomStyle","AdvancedFilter"],w=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:h,CustomStyle:v,Disabled:l,LastSearchs:u,LoadingCatalog:g,Multiple:t,Playground:o,Predefined:p,ReadOnly:d,Required:c,Simple:i,Size:n,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{h as A,v as C,l as D,u as L,t as M,o as P,c as R,w as S,i as a,n as b,d as c,p as d,g as e};
