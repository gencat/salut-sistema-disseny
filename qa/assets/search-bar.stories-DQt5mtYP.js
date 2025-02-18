import{x}from"./lit-html-B2eaWknC.js";const G={title:"Components/Search Bar",argTypes:{multiple:{name:"Multiple",control:{type:"boolean"}},inputSize:{name:"Input Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Force invalid state",control:{type:"boolean"}},readonly:{name:"Read Only",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},recentSearches:{name:"Últimes cerques",control:{type:"boolean"}},recentSearchesText:{name:"Posición tooltip",control:{type:"text"},if:{arg:"recentSearches",truthy:!0}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:e=>{const X=[{value:"Diagnostics 1",icon:"person"},{value:"Diagnostics 2",icon:"person"},{value:"Diagnostics 3",icon:"person"},{value:"Settings",icon:"Settings"},{value:"Home",icon:"home"},{value:"Home",icon:"home"}];return x`
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
            catalog=${JSON.stringify(X)}
            ?isCatalogLoading=${e.isCatalogLoading}
            >
            <label slot="label" for="searchbar1" aria-hidden="false">Search bar</label>
            <input slot="input" id="searchbar1" type="text" ?readonly=${e.readonly} ?disabled=${e.disabled} ></input>
          </dss-search-bar>
        </div>
      `},args:{multiple:!1,inputSize:"lg",icon:"search",helpText:"Missatge informatiu",threshold:3,emptyDropdownText:"Sense resultats per",invalid:!1,readonly:!1,disabled:!1,recentSearches:!1,recentSearchesText:"Últimes cerques",isCatalogLoading:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev"}}},s={tags:["!dev"],render:()=>x`
      <div class="wrapper">
        <dss-search-bar
          helpText="Missatge informatiu"
          catalog="[
    {&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Settings&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
    {&#x22;value&#x22;:&#x22;Home 1&#x22;},
    {&#x22;value&#x22;:&#x22;Home 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
    ]"
        >
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>

          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    `},n={tags:["!dev"],render:()=>x`
       <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Settings&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Home 1&#x22;},
{&#x22;value&#x22;:&#x22;Home 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchMultiple" aria-hidden="false">Label</label>

      <input slot="input" id="searchMultiple" type="text" />
    </dss-search-bar>
  </div>
    `},i={tags:["!dev"],render:()=>x`
      <div class="wrapper wrapper--md">
    <dss-search-bar
      inputSize="md"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>

    <dss-search-bar
      inputSize="lg"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `},r={tags:["!dev"],render:()=>x`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" required />
    </dss-search-bar>
  </div>
    `},t={tags:["!dev"],render:()=>x`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" disabled />
    </dss-search-bar>
  </div>
    `},o={tags:["!dev"],render:()=>x`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" value="Search term" readonly="true" />
    </dss-search-bar>
  </div>
    `},l={tags:["!dev"],render:()=>x`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      recentSearches
      catalog="[
{&#x22;value&#x22;:&#x22;Last search&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Last term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Previous term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Another term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `},c={tags:["!dev"],render:()=>x`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      multiple
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `},p={tags:["!dev"],render:()=>x`
      <div class="wrapper">
    <dss-search-bar multiple helpText="Missatge informatiu" recentSearches isCatalogLoading catalog="[]">
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `},u={tags:["!dev"],render:()=>x`
      <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      recentSearches
      dropdownStyle="max-height: 150px; overflow-y: auto;"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 4&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 5&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 6&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 7&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 8&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 9&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    `};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => {
    const catalog = [{
      value: 'Diagnostics 1',
      icon: 'person'
    }, {
      value: 'Diagnostics 2',
      icon: 'person'
    }, {
      value: 'Diagnostics 3',
      icon: 'person'
    }, {
      value: 'Settings',
      icon: 'Settings'
    }, {
      value: 'Home',
      icon: 'home'
    }, {
      value: 'Home',
      icon: 'home'
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
    isCatalogLoading: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev'
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,m,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-search-bar
          helpText="Missatge informatiu"
          catalog="[
    {&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
    {&#x22;value&#x22;:&#x22;Settings&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
    {&#x22;value&#x22;:&#x22;Home 1&#x22;},
    {&#x22;value&#x22;:&#x22;Home 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
    ]"
        >
          <label slot="label" for="searchDefault" aria-hidden="false">Label</label>

          <input slot="input" id="searchDefault" type="text" />
        </dss-search-bar>
      </div>
    \`;
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,S,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Settings&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Home 1&#x22;},
{&#x22;value&#x22;:&#x22;Home 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchMultiple" aria-hidden="false">Label</label>

      <input slot="input" id="searchMultiple" type="text" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var y,T,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--md">
    <dss-search-bar
      inputSize="md"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>

    <dss-search-bar
      inputSize="lg"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var L,I,M;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" required />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(M=(I=r.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var $,A,z;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" disabled />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(z=(A=t.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var C,j,H;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--no-dropdown">
    <dss-search-bar
      multiple
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      helpText="Missatge informatiu"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" value="Search term" readonly="true" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(H=(j=o.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var P,q,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      recentSearches
      catalog="[
{&#x22;value&#x22;:&#x22;Last search&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Last term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Previous term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;},
{&#x22;value&#x22;:&#x22;Another term&#x22;,&#x22;icon&#x22;:&#x22;history&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(O=(q=l.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var _,R,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      helpText="Missatge informatiu"
      searchTerms="[&#x22;Diagnostics 1&#x22;,&#x22;Inicio 1&#x22;]"
      multiple
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var J,N,E;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  }
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var k,B,K;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-search-bar
      multiple
      helpText="Missatge informatiu"
      recentSearches
      dropdownStyle="max-height: 150px; overflow-y: auto;"
      catalog="[
{&#x22;value&#x22;:&#x22;Diagnostics 1&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 2&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 3&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 4&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 5&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 6&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 7&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 8&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Diagnostics 9&#x22;,&#x22;icon&#x22;:&#x22;person&#x22;},
{&#x22;value&#x22;:&#x22;Ajustes&#x22;,&#x22;icon&#x22;:&#x22;Settings&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 1&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;},
{&#x22;value&#x22;:&#x22;Inicio 2&#x22;,&#x22;icon&#x22;:&#x22;home&#x22;}
]"
    >
      <label slot="label" for="searchbar1" aria-hidden="false">Label</label>

      <input slot="input" id="searchbar1" type="text" />
    </dss-search-bar>
  </div>
    \`;
  }
}`,...(K=(B=u.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const Q=["Playground","Simple","Multiple","Size","Required","Disabled","ReadOnly","LastSearchs","Predefined","LoadingCatalog","CustomStyle"],V=Object.freeze(Object.defineProperty({__proto__:null,CustomStyle:u,Disabled:t,LastSearchs:l,LoadingCatalog:p,Multiple:n,Playground:a,Predefined:c,ReadOnly:o,Required:r,Simple:s,Size:i,__namedExportsOrder:Q,default:G},Symbol.toStringTag,{value:"Module"}));export{u as C,t as D,l as L,n as M,a as P,r as R,V as S,s as a,i as b,o as c,c as d,p as e};
