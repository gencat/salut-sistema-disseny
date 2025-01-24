import{x as o}from"./lit-html-B2eaWknC.js";const B={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"showActionIcon",eq:!0}},hasDivider:{name:"Mostra divider",control:{type:"boolean"}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"]},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"]},description:{name:"Descripció",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkHref:{name:"ButtonLink Href",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkLabel:{name:"ButtonLink Label",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkIcon:{name:"ButtonLink Icona",control:{type:"text"},if:{arg:"contentType",eq:"Default"}}},parameters:{layout:"centered"}},t={args:{open:!1,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",hasDivider:!1,contentType:"Default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.",linkHref:"https://google.com",linkIcon:"add_box",linkLabel:"Button link"},render:e=>o`
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
                    ${e.description}
                    <dss-button-link label="${e.linkLabel}" linkHref="${e.linkHref}" icon="${e.linkIcon}"></dss-button-link>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},r={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="right">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},d={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="bottom">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},l={tags:["!dev"],render:()=>o`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="left">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `};var a,p,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
                    \${args.description}
                    <dss-button-link label="\${args.linkLabel}" linkHref="\${args.linkHref}" icon="\${args.linkIcon}"></dss-button-link>
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    \`;
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,g,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var P,k,R;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="right">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(R=(k=r.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,O,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="bottom">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(x=(O=d.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var C,S,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">CLIC AQUÍ PER OBRIR POPOVER</p>
      <dss-popover title="Popover" position="left">
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>Lorem ipsum dolor sit amet</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const w=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft"],T=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,ItemList:i,Playground:t,PositionBottom:d,PositionLeft:l,PositionRight:r,PositionTop:n,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{s as B,i as I,t as P,T as S,n as a,r as b,d as c,l as d};
