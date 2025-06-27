import{x as s}from"./lit-html-D6a8R3xZ.js";const ds={title:"Collections/Card",argTypes:{status:{name:"Status",control:{type:"select"},options:["default","selected","dragged","deleted","disabled"]},type:{name:"Tipus",control:{type:"select"},options:["default","informative"]},showClose:{name:"Mostrar botó de tancament",control:{type:"boolean"}},showDetails:{name:"Mostrar detalls",control:{type:"boolean"}},showTags:{name:"Mostrar tags",control:{type:"boolean"},if:{arg:"showDetails",truthy:!0}},tags:{name:"Nombre d'etiquetes",control:{type:"number",max:10,min:1},if:{arg:"showTags",truthy:!0}},showInfo:{name:"Mostrar informació",control:{type:"boolean"},if:{arg:"showDetails",truthy:!0}},info:{name:"Nombre d'elements d'informació",control:{type:"number",max:10,min:1},if:{arg:"showInfo",truthy:!0}},showHeader:{name:"Mostrar Header",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showHeader",truthy:!0}},showFlag:{name:"Mostrar Flag",control:{type:"boolean"},if:{arg:"showHeader",truthy:!0}},showMenu:{name:"Mostrar menu",control:{type:"boolean"},if:{arg:"showHeader",truthy:!0}},menuPosition:{name:"Posició del menú",control:{type:"select"},options:["right","left"],if:{arg:"showMenu",truthy:!0}},showForm:{name:"Mostrar formulari",control:{type:"boolean"}},showImage:{name:"Mostrar imatge",control:{type:"boolean"}},imageURL:{name:"URL de la imatge",control:{type:"text"},if:{arg:"showImage",truthy:!0}},imageALT:{name:"Text alternatiu de la imatge",control:{type:"text"},if:{arg:"showImage",truthy:!0}},showBody:{name:"Mostrar Body",control:{type:"boolean"}},subtitle:{name:"Subtítol",control:{type:"text"},if:{arg:"showBody",truthy:!0}},subtitleHasIcon:{name:"Mostra icona dins del subtítol",control:{type:"boolean"},if:{arg:"showBody",truthy:!0}},subtitleIcon:{name:"Subtítol icona",control:{type:"text"},if:{arg:"subtitleHasIcon",truthy:!0}},subtitleHasLink:{name:"Mostra enllaç dins del subtítol",control:{type:"boolean"},if:{arg:"showBody",truthy:!0}},subtitleHref:{name:"Subtítol enllaç",control:{type:"text"},if:{arg:"subtitleHasLink",truthy:!0}},description:{name:"Descripció",control:{type:"text"},if:{arg:"showBody",truthy:!0}},showHighlights:{name:"Mostrar Highlights",control:{type:"boolean"}},highlights:{name:"Nombre de highlights",control:{type:"number",max:3,min:1},if:{arg:"showHighlights",truthy:!0}},showFooter:{name:"Mostrar Footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},c={args:{status:"default",showClose:!0,showDetails:!0,showTags:!0,tags:2,showInfo:!0,info:2,showHeader:!0,title:"Title",showFlag:!0,showMenu:!0,menuPosition:"right",showForm:!0,showImage:!0,imageURL:"https://placehold.co/500x124/0073e6/FFF?text=Card+Image",imageALT:"Image description",showBody:!0,subtitle:"Subtitle",subtitleHasIcon:!1,subtitleIcon:"add_box",subtitleHasLink:!1,subtitleHref:"#",description:"Lorem ipsum dolor sit amet consectetur. Adipiscing dui vel id nibh. Euismod tortor tempus praesent adipiscing dictum lacus aliquam mollis eu.Lorem ipsum dolor sit amet consectetur.",showHighlights:!0,highlights:3,showFooter:!0},render:t=>s`
        <div style="width:500px">
          <dss-card ?hasClose="${t.showClose}"  ?hasDetails="${t.showDetails}" ?dragged="${t.status==="dragged"}" ?selected="${t.status==="selected"}" ?deleted="${t.status==="deleted"}" ?disabled="${t.status==="disabled"}">
            ${t.showTags?s`
              <dss-card-tags slot="tags">
                ${Array.from({length:t.tags},()=>s` <dss-badge size="sm" state="info" outlined text="Tag"></dss-badge>`)}
              </dss-card-tags>
            `:null}
            ${t.showInfo?s`
              <dss-card-info slot="info">
                ${Array.from({length:t.info},()=>s`<dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item> `)}
              </dss-card-info>
            `:null}
            ${t.showHeader?s`
              <dss-card-header slot="header" ?flag="${t.showFlag}" ?hasMenu="${t.showMenu}">
                <dss-card-title slot="title">${t.title}</dss-card-title>
                ${t.showMenu?s`
                  <dss-card-menu slot="menu" position="${t.menuPosition}">
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
            ${t.showForm?s`
              <dss-card-form slot="form">
                <dss-input icon="person">
                  <label slot="label" for="input4">Label</label>
                  <input slot="input" id="input4" type="text" readonly="true" value="Exemple readonly" readonly/>
                </dss-input>
              </dss-card-form>
            `:null}
            ${t.showImage?s`
              <dss-card-image slot="image" source="${t.imageURL}" alt="${t.imageALT}"></dss-card-image>
            `:null}
            ${t.showBody?s`
              <dss-card-body slot="body">
                <dss-card-subtitle ?hasIcon=${t.subtitleHasIcon} ?hasLink=${t.subtitleHasLink} icon="${t.subtitleIcon}" linkHref="${t.subtitleHref}">${t.subtitle}</dss-card-subtitle>
                <dss-card-description>${t.description}</dss-card-description>
              </dss-card-body>
            `:null}
            ${t.showHighlights?s`
              <dss-card-highlights slot="highlights">
                 ${Array.from({length:t.highlights},()=>s`<dss-card-highlights-item title="Title" icon="add_box" text="Item"></dss-card-highlights-item>`)}
              </dss-card-highlights>
            `:null}
            ${t.showFooter?s`
              <dss-card-footer slot="footer">
                <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
                <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
              </dss-card-footer>
            `:null}
          </dss-card>
        </div>
      `},o=s`
  <dss-card-tags slot="tags">
    <dss-badge size="sm" state="info" outlined text="Tag 1"></dss-badge>
    <dss-badge size="sm" state="info" outlined text="Tag 2"></dss-badge>
  </dss-card-tags>
`,l=s`
 <dss-card-info slot="info">
    <dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item>
    <dss-card-info-item icon="add_box" text="Info 2"></dss-card-info-item>
  </dss-card-info>
`,i=s`
  <dss-card-menu slot="menu">
    <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
    </dss-action-menu>
  </dss-card-menu>
`,e=s`
 <dss-card-form slot="form">
    <dss-input icon="person">
      <label slot="label" for="cardInput">Label</label>
      <input slot="input" id="cardInput" type="text" readonly="true" value="Exemple readonly" readonly/>
    </dss-input>
  </dss-card-form>
`,a=s`
  <dss-card-image slot="image" source="https://placehold.co/500x124/0073e6/FFF?text=Card+Image" alt="Image description"></dss-card-image>
`,d=s`
  <dss-card-body slot="body">
    <dss-card-subtitle>
      Subtitle
    </dss-card-subtitle>
    <dss-card-description>
      Lorem ipsum dolor sit amet consectetur. Adipiscing dui vel id nibh. Euismod tortor tempus praesent adipiscing dictum 
      lacus aliquam mollis eu.Lorem ipsum dolor sit amet consectetur.
    </dss-card-description>
  </dss-card-body>
`,r=s`
  <dss-card-highlights slot="highlights">
    <dss-card-highlights-item title="Title 1" icon="add_box" text="Item 1"></dss-card-highlights-item>
    <dss-card-highlights-item title="Title 2" text="Item 1"></dss-card-highlights-item>
    <dss-card-highlights-item title="Title 3" icon="add_box" text="Item 1"></dss-card-highlights-item>
  </dss-card-highlights>  
`,n=s`
  <dss-card-footer slot="footer">
    <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
    <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
    <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
  </dss-card-footer>
`,u={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},h={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails selected>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},m={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails dragged>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},g={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails deleted>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},$={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails disabled>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},b={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasDetails>
        ${o}
        ${l}
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},p={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose>
        <dss-card-header slot="header" flag hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},f={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${o}
        ${l}
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},y={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${o}
        ${l}
        <dss-card-header slot="header" flag>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},I={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${o}
        <dss-card-info slot="info">
          <dss-card-info-item icon="add_box" text="Info 1"></dss-card-info-item>
          <dss-card-info-item text="Info 2" critic></dss-card-info-item>
        </dss-card-info>
        <dss-card-header slot="header" hasMenu>
          <dss-card-title slot="title">Title</dss-card-title>
          ${i}
        </dss-card-header>
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `},w={tags:["!dev"],render:()=>s`
      <div class="wrapper">
    <dss-card hasClose hasDetails>
        ${o}
        ${l}
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
        ${e}
        ${a}
        ${d}
        ${r}
        ${n}
      </dss-card>
  </div>
    `};var x,v,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var T,F,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  }
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var H,C,D;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  }
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var A,B,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,N,k;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  }
}`,...(k=(N=g.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var P,E,R;$.parameters={...$.parameters,docs:{...(P=$.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  }
}`,...(R=(E=$.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var U,z,q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  }
}`,...(q=(z=b.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var O,j,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  }
}`,...(G=(j=p.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,W,X;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  }
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ss;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
  }
}`,...(ss=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ss.source}}};var ts,es,as;w.parameters={...w.parameters,docs:{...(ts=w.parameters)==null?void 0:ts.docs,source:{originalSource:`{
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
  }
}`,...(as=(es=w.parameters)==null?void 0:es.docs)==null?void 0:as.source}}};const rs=["Playground","FullCard","Selected","Moving","Deleted","Disabled","NoCloseIcon","NoDetails","NoFlag","NoMenu","InfoItemCritic","MenuLeft"],os=Object.freeze(Object.defineProperty({__proto__:null,Deleted:g,Disabled:$,FullCard:u,InfoItemCritic:I,MenuLeft:w,Moving:m,NoCloseIcon:b,NoDetails:p,NoFlag:f,NoMenu:y,Playground:c,Selected:h,__namedExportsOrder:rs,default:ds},Symbol.toStringTag,{value:"Module"}));export{g as D,u as F,I,m as M,b as N,c as P,os as S,h as a,$ as b,p as c,f as d,y as e,w as f};
