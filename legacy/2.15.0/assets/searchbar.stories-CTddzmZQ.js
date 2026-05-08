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
`,Y={title:"Components/Search Bar",argTypes:{multiple:{name:"Multiple",control:{type:"boolean"}},size:{name:"Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Invalid",control:{type:"boolean"}},readonly:{name:"Readonly",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},recentSearches:{name:"Últimes cerques",control:{type:"boolean"}},recentSearchesText:{name:"Posición tooltip",control:{type:"text"},if:{arg:"recentSearches",truthy:!0}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={render:e=>{const U=[{value:"Diagnostics Inicial",icon:"person"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",icon:"sentiment_neutral"},{value:"Sense resultats",icon:"calculate"},{value:"Resultat 1",icon:"calculate"},{value:"Resultat Crític",icon:"warning"}];return a`
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
                    catalog=${JSON.stringify(U)}
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
    `,decorators:[s(r,"searchbar-advanced-style")]};var m,y,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,D,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var x,f,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var I,M,$;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(M=n.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var C,A,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var L,j,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,q,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,_,N;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,E,J;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(E=p.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var V,k,K;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(k=g.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var X,B,W;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(W=(B=v.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var Z,G,Q;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const ee=["Playground","Simple","Multiple","Size","Required","Disabled","ReadOnly","LastSearchs","Predefined","LoadingCatalog","CustomStyle","AdvancedFilter"],re=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:h,CustomStyle:v,Disabled:l,LastSearchs:u,LoadingCatalog:g,Multiple:t,Playground:o,Predefined:p,ReadOnly:d,Required:c,Simple:i,Size:n,__namedExportsOrder:ee,default:Y},Symbol.toStringTag,{value:"Module"}));export{h as A,v as C,l as D,u as L,t as M,o as P,c as R,re as S,i as a,n as b,d as c,p as d,g as e};
