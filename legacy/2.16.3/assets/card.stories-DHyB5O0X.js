import{x as s}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const a=`
 .wrapper {
    width: 500px;
  }
`,ns={title:"Collections/Card",argTypes:{status:{name:"Status",control:{type:"select"},options:["default","selected","dragged","deleted","disabled"]},type:{name:"Tipus",control:{type:"select"},options:["default","informative"]},showClose:{name:"Mostrar botó de tancament",control:{type:"boolean"}},showDetails:{name:"Mostrar detalls",control:{type:"boolean"}},showTags:{name:"Mostrar tags",control:{type:"boolean"},if:{arg:"showDetails",truthy:!0}},tags:{name:"Nombre d'etiquetes",control:{type:"number",max:10,min:1},if:{arg:"showTags",truthy:!0}},showInfo:{name:"Mostrar informació",control:{type:"boolean"},if:{arg:"showDetails",truthy:!0}},info:{name:"Nombre d'elements d'informació",control:{type:"number",max:10,min:1},if:{arg:"showInfo",truthy:!0}},showHeader:{name:"Mostrar Header",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showHeader",truthy:!0}},showFlag:{name:"Mostrar Flag",control:{type:"boolean"},if:{arg:"showHeader",truthy:!0}},showMenu:{name:"Mostrar menu",control:{type:"boolean"},if:{arg:"showHeader",truthy:!0}},menuPosition:{name:"Posició del menú",control:{type:"select"},options:["right","left"],if:{arg:"showMenu",truthy:!0}},showForm:{name:"Mostrar formulari",control:{type:"boolean"}},showImage:{name:"Mostrar imatge",control:{type:"boolean"}},imageURL:{name:"URL de la imatge",control:{type:"text"},if:{arg:"showImage",truthy:!0}},imageALT:{name:"Text alternatiu de la imatge",control:{type:"text"},if:{arg:"showImage",truthy:!0}},showBody:{name:"Mostrar Body",control:{type:"boolean"}},subtitle:{name:"Subtítol",control:{type:"text"},if:{arg:"showBody",truthy:!0}},subtitleHasIcon:{name:"Mostra icona dins del subtítol",control:{type:"boolean"},if:{arg:"showBody",truthy:!0}},subtitleIcon:{name:"Subtítol icona",control:{type:"text"},if:{arg:"subtitleHasIcon",truthy:!0}},subtitleHasLink:{name:"Mostra enllaç dins del subtítol",control:{type:"boolean"},if:{arg:"showBody",truthy:!0}},subtitleHref:{name:"Subtítol enllaç",control:{type:"text"},if:{arg:"subtitleHasLink",truthy:!0}},description:{name:"Descripció",control:{type:"text"},if:{arg:"showBody",truthy:!0}},showHighlights:{name:"Mostrar Highlights",control:{type:"boolean"}},highlights:{name:"Nombre de highlights",control:{type:"number",max:3,min:1},if:{arg:"showHighlights",truthy:!0}},showFooter:{name:"Mostrar Footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},h={args:{status:"default",showClose:!0,showDetails:!0,showTags:!0,tags:2,showInfo:!0,info:2,showHeader:!0,title:"Title",showFlag:!0,showMenu:!0,menuPosition:"right",showForm:!0,showImage:!0,imageURL:"https://placehold.co/500x124/0073e6/FFF?text=Card+Image",imageALT:"Image description",showBody:!0,subtitle:"Subtitle",subtitleHasIcon:!1,subtitleIcon:"add_box",subtitleHasLink:!1,subtitleHref:"#",description:"Lorem ipsum dolor sit amet consectetur. Adipiscing dui vel id nibh. Euismod tortor tempus praesent adipiscing dictum lacus aliquam mollis eu.Lorem ipsum dolor sit amet consectetur.",showHighlights:!0,highlights:3,showFooter:!0},render:e=>s`
        <div style="width:500px">
          <dss-card ?hasClose="${e.showClose}"  ?hasDetails="${e.showDetails}" ?dragged="${e.status==="dragged"}" ?selected="${e.status==="selected"}" ?deleted="${e.status==="deleted"}" ?disabled="${e.status==="disabled"}">
            ${e.showTags?s`
              <dss-card-tags slot="tags">
                ${Array.from({length:e.tags},()=>s` <dss-badge size="sm" state="info" outlined text="Tag"></dss-badge>`)}
              </dss-card-tags>
            `:null}
            ${e.showInfo?s`
              <dss-card-info slot="info">
                ${Array.from({length:e.info},()=>s`<dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item> `)}
              </dss-card-info>
            `:null}
            ${e.showHeader?s`
              <dss-card-header slot="header" ?flag="${e.showFlag}" ?hasMenu="${e.showMenu}">
                <dss-card-title slot="title">${e.title}</dss-card-title>
                ${e.showMenu?s`
                  <dss-card-menu slot="menu" position="${e.menuPosition}">
                    <dss-action-menu>
                      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                  </dss-card-menu>
                `:null}
              </dss-card-header>
            `:null}
            ${e.showForm?s`
              <dss-card-form slot="form">
                <dss-input icon="person">
                  <label slot="label" for="input4">Label</label>
                  <input slot="input" id="input4" type="text" readonly="true" value="Exemple readonly" readonly/>
                </dss-input>
              </dss-card-form>
            `:null}
            ${e.showImage?s`
              <dss-card-image slot="image" source="${e.imageURL}" alt="${e.imageALT}"></dss-card-image>
            `:null}
            ${e.showBody?s`
              <dss-card-body slot="body">
                <dss-card-subtitle ?hasIcon=${e.subtitleHasIcon} ?hasLink=${e.subtitleHasLink} icon="${e.subtitleIcon}" linkHref="${e.subtitleHref}">${e.subtitle}</dss-card-subtitle>
                <dss-card-description>${e.description}</dss-card-description>
              </dss-card-body>
            `:null}
            ${e.showHighlights?s`
              <dss-card-highlights slot="highlights">
                 ${Array.from({length:e.highlights},()=>s`<dss-card-highlights-item title="Title" icon="add_box" text="Item"></dss-card-highlights-item>`)}
              </dss-card-highlights>
            `:null}
            ${e.showFooter?s`
              <dss-card-footer slot="footer">
                <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
              </dss-card-footer>
            `:null}
          </dss-card>
        </div>
      `},l=s`
  <dss-card-tags slot="tags">
    <dss-badge size="sm" state="info" outlined text="Tag 1"></dss-badge>
    <dss-badge size="sm" state="info" outlined text="Tag 2"></dss-badge>
  </dss-card-tags>
`,u=s`
 <dss-card-info slot="info">
    <dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item>
    <dss-card-info-item icon="add_box" text="Info 2"></dss-card-info-item>
  </dss-card-info>
`,c=s`
  <dss-card-menu slot="menu">
    <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
    </dss-action-menu>
  </dss-card-menu>
`,d=s`
 <dss-card-form slot="form">
    <dss-input icon="person">
      <label slot="label" for="cardInput">Label</label>
      <input slot="input" id="cardInput" type="text" readonly="true" value="Exemple readonly" readonly/>
    </dss-input>
  </dss-card-form>
`,r=s`
  <dss-card-image slot="image" source="https://placehold.co/500x124/0073e6/FFF?text=Card+Image" alt="Image description"></dss-card-image>
`,n=s`
  <dss-card-body slot="body">
    <dss-card-subtitle>
      Subtitle
    </dss-card-subtitle>
    <dss-card-description>
      Lorem ipsum dolor sit amet consectetur. Adipiscing dui vel id nibh. Euismod tortor tempus praesent adipiscing dictum 
      lacus aliquam mollis eu.Lorem ipsum dolor sit amet consectetur.
    </dss-card-description>
  </dss-card-body>
`,o=s`
  <dss-card-highlights slot="highlights">
    <dss-card-highlights-item title="Title 1" icon="add_box" text="Item 1"></dss-card-highlights-item>
    <dss-card-highlights-item title="Title 2" text="Item 1"></dss-card-highlights-item>
    <dss-card-highlights-item title="Title 3" icon="add_box" text="Item 1"></dss-card-highlights-item>
  </dss-card-highlights>  
`,i=s`
  <dss-card-footer slot="footer">
    <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
    <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
    <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
  </dss-card-footer>
`,m={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-full-style")]},g={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails selected>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-selected-style")]},p={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails dragged>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-moving-style")]},b={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails deleted>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-deleted-style")]},$={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails disabled>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-disabled-style")]},f={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasDetails>
        ${l}
        ${u}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-no-close-style")]},y={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose>
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-no-details-style")]},w={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${l}
        ${u}
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-no-flag-style")]},I={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${l}
        ${u}
        <dss-card-header slot="header" flag>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-no-menu-style")]},x={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${l}
        <dss-card-info slot="info">
          <dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item>
          <dss-card-info-item text="Info 2" critic></dss-card-info-item>
        </dss-card-info>
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${c}
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-info-critic-style")]},v={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${l}
        ${u}
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          <dss-card-menu slot="menu" position="left">
            <dss-action-menu>
              <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
              <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
            </dss-action-menu>
          </dss-card-menu>
        </dss-card-header>
        ${d}
        ${r}
        ${n}
        ${o}
        ${i}
      </dss-card>
  </div>
    `,decorators:[t(a,"card-menu-left-style")]};var M,T,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: 'default',
    showClose: true,
    showDetails: true,
    showTags: true,
    tags: 2,
    showInfo: true,
    info: 2,
    showHeader: true,
    title: 'Title',
    showFlag: true,
    showMenu: true,
    menuPosition: 'right',
    showForm: true,
    showImage: true,
    imageURL: 'https://placehold.co/500x124/0073e6/FFF?text=Card+Image',
    imageALT: 'Image description',
    showBody: true,
    subtitle: 'Subtitle',
    subtitleHasIcon: false,
    subtitleIcon: 'add_box',
    subtitleHasLink: false,
    subtitleHref: '#',
    description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing dui vel id nibh. Euismod tortor tempus praesent adipiscing dictum lacus aliquam mollis eu.Lorem ipsum dolor sit amet consectetur.',
    showHighlights: true,
    highlights: 3,
    showFooter: true
  },
  render: (args: any) => {
    return html\`
        <div style="width:500px">
          <dss-card ?hasClose="\${args.showClose}"  ?hasDetails="\${args.showDetails}" ?dragged="\${args.status === 'dragged'}" ?selected="\${args.status === 'selected'}" ?deleted="\${args.status === 'deleted'}" ?disabled="\${args.status === 'disabled'}">
            \${args.showTags ? html\`
              <dss-card-tags slot="tags">
                \${Array.from({
      length: args.tags
    }, () => html\` <dss-badge size="sm" state="info" outlined text="Tag"></dss-badge>\`)}
              </dss-card-tags>
            \` : null}
            \${args.showInfo ? html\`
              <dss-card-info slot="info">
                \${Array.from({
      length: args.info
    }, () => html\`<dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item> \`)}
              </dss-card-info>
            \` : null}
            \${args.showHeader ? html\`
              <dss-card-header slot="header" ?flag="\${args.showFlag}" ?hasMenu="\${args.showMenu}">
                <dss-card-title slot="title">\${args.title}</dss-card-title>
                \${args.showMenu ? html\`
                  <dss-card-menu slot="menu" position="\${args.menuPosition}">
                    <dss-action-menu>
                      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                  </dss-card-menu>
                \` : null}
              </dss-card-header>
            \` : null}
            \${args.showForm ? html\`
              <dss-card-form slot="form">
                <dss-input icon="person">
                  <label slot="label" for="input4">Label</label>
                  <input slot="input" id="input4" type="text" readonly="true" value="Exemple readonly" readonly/>
                </dss-input>
              </dss-card-form>
            \` : null}
            \${args.showImage ? html\`
              <dss-card-image slot="image" source="\${args.imageURL}" alt="\${args.imageALT}"></dss-card-image>
            \` : null}
            \${args.showBody ? html\`
              <dss-card-body slot="body">
                <dss-card-subtitle ?hasIcon=\${args.subtitleHasIcon} ?hasLink=\${args.subtitleHasLink} icon="\${args.subtitleIcon}" linkHref="\${args.subtitleHref}">\${args.subtitle}</dss-card-subtitle>
                <dss-card-description>\${args.description}</dss-card-description>
              </dss-card-body>
            \` : null}
            \${args.showHighlights ? html\`
              <dss-card-highlights slot="highlights">
                 \${Array.from({
      length: args.highlights
    }, () => html\`<dss-card-highlights-item title="Title" icon="add_box" text="Item"></dss-card-highlights-item>\`)}
              </dss-card-highlights>
            \` : null}
            \${args.showFooter ? html\`
              <dss-card-footer slot="footer">
                <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
              </dss-card-footer>
            \` : null}
          </dss-card>
        </div>
      \`;
  }
}`,...(F=(T=h.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var S,_,H;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-full-style')]
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var C,D,A;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails selected>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-selected-style')]
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,L,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails dragged>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-moving-style')]
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var k,P,E;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails deleted>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-deleted-style')]
}`,...(E=(P=b.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var R,U,z;$.parameters={...$.parameters,docs:{...(R=$.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails disabled>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-disabled-style')]
}`,...(z=(U=$.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var q,O,j;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasDetails>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-no-close-style')]
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose>
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-no-details-style')]
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,W;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-no-flag-style')]
}`,...(W=(V=w.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" flag>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-no-menu-style')]
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ss,es,ts;x.parameters={...x.parameters,docs:{...(ss=x.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        \${cardTags}
        <dss-card-info slot="info">
          <dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item>
          <dss-card-info-item text="Info 2" critic></dss-card-info-item>
        </dss-card-info>
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          \${cardMenu}
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-info-critic-style')]
}`,...(ts=(es=x.parameters)==null?void 0:es.docs)==null?void 0:ts.source}}};var as,ds,rs;v.parameters={...v.parameters,docs:{...(as=v.parameters)==null?void 0:as.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        \${cardTags}
        \${cardInfo}
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          <dss-card-menu slot="menu" position="left">
            <dss-action-menu>
              <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
              <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
            </dss-action-menu>
          </dss-card-menu>
        </dss-card-header>
        \${cardForm}
        \${cardImage}
        \${cardBody}
        \${cardHighlights}
        \${cardFooter}
      </dss-card>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'card-menu-left-style')]
}`,...(rs=(ds=v.parameters)==null?void 0:ds.docs)==null?void 0:rs.source}}};const os=["Playground","FullCard","Selected","Moving","Deleted","Disabled","NoCloseIcon","NoDetails","NoFlag","NoMenu","InfoItemCritic","MenuLeft"],cs=Object.freeze(Object.defineProperty({__proto__:null,Deleted:b,Disabled:$,FullCard:m,InfoItemCritic:x,MenuLeft:v,Moving:p,NoCloseIcon:f,NoDetails:y,NoFlag:w,NoMenu:I,Playground:h,Selected:g,__namedExportsOrder:os,default:ns},Symbol.toStringTag,{value:"Module"}));export{b as D,m as F,x as I,p as M,f as N,h as P,cs as S,g as a,$ as b,y as c,w as d,I as e,v as f};
