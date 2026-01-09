import{x as a}from"./lit-html-D6cejpwM.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,Y={title:"Components/Search Bar",argTypes:{multiple:{name:"Multiple",control:{type:"boolean"}},inputSize:{name:"Input Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Force invalid state",control:{type:"boolean"}},readonly:{name:"Read Only",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},recentSearches:{name:"Últimes cerques",control:{type:"boolean"}},recentSearchesText:{name:"Posición tooltip",control:{type:"text"},if:{arg:"recentSearches",truthy:!0}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:e=>{const V=[{value:"Diagnostics Inicial",icon:"person"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",icon:"sentiment_neutral"},{value:"Sense resultats",icon:"calculate"},{value:"Resultat 1",icon:"calculate"},{value:"Resultat Crític",icon:"warning"}];return a`
        <div class="wrapper" style="width: 600px">
          <dss-search-bar 
            ?multiple=${e.multiple}
            icon="${e.icon}"
            inputSize="${e.inputSize}"
            helpText="${e.helpText}"
            threshold="${e.threshold}"
            ?invalid=${e.invalid}
            ?recentSearches=${e.recentSearches}
            recentSearchesText="${e.recentSearchesText}"
            emptyDropdownText="${e.emptyDropdownText}"
            catalog=${JSON.stringify(V)}
            ?isCatalogLoading=${e.isCatalogLoading}
                        ?advancedFilter=${e.advancedFilter}
            >
            <label slot="label" for="searchbar1" aria-hidden="false">Search bar</label>
            <input slot="input" id="searchbar1" type="text" ?readonly=${e.readonly} ?disabled=${e.disabled} ></input>
          </dss-search-bar>
        </div>
      `},args:{multiple:!1,inputSize:"lg",icon:"search",helpText:"Missatge informatiu",threshold:3,emptyDropdownText:"Sense resultats per",invalid:!1,readonly:!1,disabled:!1,recentSearches:!1,recentSearchesText:"Últimes cerques",isCatalogLoading:!1,advancedFilter:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev"}}},i={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-search-bar
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
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>
          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    `,decorators:[s(r,"searchbar-simple-style")]},o={tags:["!dev"],render:()=>a`
       <div class="wrapper">
    <dss-search-bar
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
      <label slot="label" for="searchMultiple" aria-hidden="false">Label</label>
      <input slot="input" id="searchMultiple" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-multiple-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--md">
    <dss-search-bar
      inputSize="md"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>

    <dss-search-bar
      inputSize="lg"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-size-style")]},n={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-search-bar
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" required />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-required-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" disabled />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-disabled-style")]},d={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" value="Search term" readonly="true" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-readonly-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      recentSearches
      catalog='[
                {"value":"Last search","icon":"history"},
                {"value":"Last term","icon":"history"},
                {"value":"Previous term","icon":"history"},
                {"value":"Another term","icon":"history"}
            ]'
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-lastsearch-style")]},u={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-predefined-style")]},h={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-search-bar multiple helpText="Missatge informatiu" recentSearches isCatalogLoading catalog="[]">
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-loading-style")]},g={tags:["!dev"],render:()=>a`
      <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      recentSearches
      dropdownStyle="max-height: 150px; overflow-y: auto;"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `,decorators:[s(r,"searchbar-custom-style")]},v={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-search-bar
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
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>
          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    `,decorators:[s(r,"searchbar-advanced-style")]};var b,m,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <dss-search-bar 
            ?multiple=\${args.multiple}
            icon="\${args.icon}"
            inputSize="\${args.inputSize}"
            helpText="\${args.helpText}"
            threshold="\${args.threshold}"
            ?invalid=\${args.invalid}
            ?recentSearches=\${args.recentSearches}
            recentSearchesText="\${args.recentSearchesText}"
            emptyDropdownText="\${args.emptyDropdownText}"
            catalog=\${JSON.stringify(catalog)}
            ?isCatalogLoading=\${args.isCatalogLoading}
                        ?advancedFilter=\${args.advancedFilter}
            >
            <label slot="label" for="searchbar1" aria-hidden="false">Search bar</label>
            <input slot="input" id="searchbar1" type="text" ?readonly=\${args.readonly} ?disabled=\${args.disabled} ></input>
          </dss-search-bar>
        </div>
      \`;
  },
  args: {
    multiple: false,
    inputSize: 'lg',
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
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var S,f,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-search-bar
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
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>
          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-simple-style')]
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,w,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
    <dss-search-bar
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
      <label slot="label" for="searchMultiple" aria-hidden="false">Label</label>
      <input slot="input" id="searchMultiple" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-multiple-style')]
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var I,L,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--md">
    <dss-search-bar
      inputSize="md"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>

    <dss-search-bar
      inputSize="lg"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-size-style')]
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var $,C,A;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" required />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-required-style')]
}`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var z,j,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" disabled />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-disabled-style')]
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,q,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" value="Search term" readonly="true" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-readonly-style')]
}`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,_,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      recentSearches
      catalog='[
                {"value":"Last search","icon":"history"},
                {"value":"Last term","icon":"history"},
                {"value":"Previous term","icon":"history"},
                {"value":"Another term","icon":"history"}
            ]'
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-lastsearch-style')]
}`,...(N=(_=p.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,E,J;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      searchTerms="["Diagnostics 1","Inicio 1"]"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-predefined-style')]
}`,...(J=(E=u.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var k,B,K;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar multiple helpText="Missatge informatiu" recentSearches isCatalogLoading catalog="[]">
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-loading-style')]
}`,...(K=(B=h.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var X,W,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      recentSearches
      dropdownStyle="max-height: 150px; overflow-y: auto;"
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
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>
      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-custom-style')]
}`,...(Z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var G,Q,U;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-search-bar
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
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>
          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'searchbar-advanced-style')]
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ee=["Playground","Simple","Multiple","Size","Required","Disabled","ReadOnly","LastSearchs","Predefined","LoadingCatalog","CustomStyle","AdvancedFilter"],re=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:v,CustomStyle:g,Disabled:c,LastSearchs:p,LoadingCatalog:h,Multiple:o,Playground:t,Predefined:u,ReadOnly:d,Required:n,Simple:i,Size:l,__namedExportsOrder:ee,default:Y},Symbol.toStringTag,{value:"Module"}));export{v as A,g as C,c as D,p as L,o as M,t as P,n as R,re as S,i as a,l as b,d as c,u as d,h as e};
