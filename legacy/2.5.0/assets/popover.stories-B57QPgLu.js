import{x as o}from"./lit-html-D6a8R3xZ.js";const _={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"showActionIcon",eq:!0}},hasDivider:{name:"Mostra divider",control:{type:"boolean"}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"]},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"]},description:{name:"Descripció",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkHref:{name:"ButtonLink Href",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkLabel:{name:"ButtonLink Label",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkIcon:{name:"ButtonLink Icona",control:{type:"text"},if:{arg:"contentType",eq:"Default"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev"}},args:{open:!1,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",hasDivider:!1,contentType:"Default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.",linkHref:"https://google.com",linkIcon:"add_box",linkLabel:"Button link"},render:e=>o`
        <div style="height:600px;display: flex; align-items:center;justify-content:center;width:900px;">
         <div style="width: fit-content;">
            <p style="font-size: 12px;color: lightgray">CLIC AQUÍ PER OBRIR POPOVER</p>
            <dss-popover 
              title="${e.title}" 
              position="${e.position}" 
              actionIcon="${e.showActionIcon?e.actionIcon:void 0}" 
              ?open=${e.open}
              ?hasDivider=${e.hasDivider}
              ?hideCloseIcon=${!e.showCloseIcon}>
              ${e.contentType==="Default"?o`
                  <dss-popover-body slot="body">
                                        <dss-typography variant="body-3">${e.description}</dss-typography>
                                        <dss-link label="${e.linkLabel}" href="${e.linkHref}" icon="${e.linkIcon}" fontWeight="semibold"></dss-link>
                  </dss-popover-body>
                `:o`
                  <dss-item-list slot="item-list" items='[
                    { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                    { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                    { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                    ]'>
                  </dss-item-list>
                `}
            </dss-popover>
          </div>
          </div>
      `},s={tags:["!dev"],render:()=>o`
     <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    `},i={tags:["!dev"],render:()=>o`
       <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-item-list slot="item-list" items='[
          { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
          ]'>
        </dss-item-list>
      </dss-popover>
    </div>
    `},n={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    `},d={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="right">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    `},r={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="bottom">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    `},a={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="left">
        <dss-popover-body slot="body">       
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    `};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev'
    }
  },
  args: {
    open: false,
    showCloseIcon: true,
    title: 'Title',
    position: 'top',
    showActionIcon: false,
    actionIcon: 'arrow_forward',
    hasDivider: false,
    contentType: 'Default',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.',
    linkHref: 'https://google.com',
    linkIcon: 'add_box',
    linkLabel: 'Button link'
  },
  render: (args: any) => {
    return html\`
        <div style="height:600px;display: flex; align-items:center;justify-content:center;width:900px;">
         <div style="width: fit-content;">
            <p style="font-size: 12px;color: lightgray">CLIC AQUÍ PER OBRIR POPOVER</p>
            <dss-popover 
              title="\${args.title}" 
              position="\${args.position}" 
              actionIcon="\${args.showActionIcon ? args.actionIcon : undefined}" 
              ?open=\${args.open}
              ?hasDivider=\${args.hasDivider}
              ?hideCloseIcon=\${!args.showCloseIcon}>
              \${args.contentType === 'Default' ? html\`
                  <dss-popover-body slot="body">
                                        <dss-typography variant="body-3">\${args.description}</dss-typography>
                                        <dss-link label="\${args.linkLabel}" href="\${args.linkHref}" icon="\${args.linkIcon}" fontWeight="semibold"></dss-link>
                  </dss-popover-body>
                \` : html\`
                  <dss-item-list slot="item-list" items='[
                    { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                    { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                    { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                    ]'>
                  </dss-item-list>
                \`}
            </dss-popover>
          </div>
          </div>
      \`;
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    \`;
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,h,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-item-list slot="item-list" items='[
          { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
          ]'>
        </dss-item-list>
      </dss-popover>
    </div>
    \`;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var P,R,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="right">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var L,C,O;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="bottom">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(O=(C=r.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var x,S,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="left">
        <dss-popover-body slot="body">       
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const E=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft"],B=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,ItemList:i,Playground:t,PositionBottom:r,PositionLeft:a,PositionRight:d,PositionTop:n,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{s as B,i as I,t as P,B as S,n as a,d as b,r as c,a as d};
