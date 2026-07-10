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
`,re={title:"Components/Search Bar",argTypes:{multiple:{name:"Multiple",control:{type:"boolean"}},size:{name:"Size",control:{type:"radio"},options:["md","lg"]},icon:{name:"Icon",control:{type:"text"}},helpText:{name:"Help Text",control:{type:"text"}},threshold:{name:"Number of chars to enable predictive search",control:{type:"number"}},emptyDropdownText:{name:"No results Text",control:{type:"text"}},invalid:{name:"Invalid",control:{type:"boolean"}},readonly:{name:"Readonly",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},recentSearches:{name:"Últimes cerques",control:{type:"boolean"}},recentSearchesText:{name:"Posición tooltip",control:{type:"text"},if:{arg:"recentSearches",truthy:!0}},isCatalogLoading:{name:"Simulate catalog loading",control:{type:"boolean"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={render:e=>{const b=[{value:"Diagnostics Inicial",icon:"person"},{value:"Diagnostics Crític",icon:"warning"},{value:"Diagnostics Neutral",icon:"sentiment_neutral"},{value:"Sense resultats",icon:"calculate"},{value:"Resultat 1",icon:"calculate"},{value:"Resultat Crític",icon:"warning"}];return a`
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
                    catalog=${JSON.stringify(b)}
                    ?isCatalogLoading=${e.isCatalogLoading}
                    ?advancedFilter=${e.advancedFilter}
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                >
                </dss-searchbar>
            </div>
        `},args:{multiple:!1,size:"lg",icon:"search",helpText:"Missatge informatiu",threshold:3,emptyDropdownText:"Sense resultats per",invalid:!1,readonly:!1,disabled:!1,recentSearches:!1,recentSearchesText:"Últimes cerques",isCatalogLoading:!1,advancedFilter:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1492-2048&m=dev"}}},t={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-simple-style")]},i={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-predefined-style")]},v={tags:["!dev"],render:()=>a`
       <div class="wrapper">
                <dss-searchbar
                    helpText="Missatge informatiu"
                    multiple
                    catalog='[]'
                    isCatalogLoading
                    >
                </dss-searchbar>
            </div>
    `,decorators:[s(r,"searchbar-loading-style")]},g={tags:["!dev"],render:()=>a`
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
    `,decorators:[s(r,"searchbar-advanced-style")]},m={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const b=document.querySelector("#manual-focus-demo");b&&b.focus()}}></dss-button>
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
        `,decorators:[s(r,"searchbar-focus-style")]};var y,S,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,f,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,I,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var C,$,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=($=n.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var A,L,z;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var R,j,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,P,N;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(P=d.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var _,O,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var k,J,V;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(J=p.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var K,X,B;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(X=v.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var W,Z,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var Q,U,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var ee,ae,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const oe=["Playground","Simple","Multiple","Size","Required","Disabled","ReadOnly","LastSearchs","Predefined","LoadingCatalog","CustomStyle","AdvancedFilter","Focus"],ne=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:h,CustomStyle:g,Disabled:l,Focus:m,LastSearchs:u,LoadingCatalog:v,Multiple:i,Playground:o,Predefined:p,ReadOnly:d,Required:c,Simple:t,Size:n,__namedExportsOrder:oe,default:re},Symbol.toStringTag,{value:"Module"}));export{h as A,g as C,l as D,m as F,u as L,i as M,o as P,c as R,ne as S,t as a,n as b,d as c,p as d,v as e};
