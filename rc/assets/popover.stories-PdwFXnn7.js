import{x as t}from"./lit-html-paDGiEfB.js";const B={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"showActionIcon",eq:!0}},hasDivider:{name:"Mostra divider",control:{type:"boolean"}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"]},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"]},description:{name:"Descripció",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkHref:{name:"ButtonLink Href",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkLabel:{name:"ButtonLink Label",control:{type:"text"},if:{arg:"contentType",eq:"Default"}},linkIcon:{name:"ButtonLink Icona",control:{type:"text"},if:{arg:"contentType",eq:"Default"}}},parameters:{layout:"centered"}},o={args:{open:!0,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",hasDivider:!1,contentType:"Default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.",linkHref:"https://google.com",linkIcon:"add_box",linkLabel:"Button link"},render:e=>t`
        <div style="height:600px;display: flex; align-items:center;justify-content:center;width:900px;">
         <div style="position: relative;width: fit-content;">
            <p style="font-size: 12px;color: lightgray">Related content</p>
            <dss-popover 
              title="${e.title}" 
              position="${e.position}" 
              actionIcon="${e.showActionIcon?e.actionIcon:void 0}" 
              ?open=${e.open}
              ?hasDivider=${e.hasDivider}
              ?hideCloseIcon=${!e.showCloseIcon}>
              ${e.contentType==="Default"?t`
                  <dss-popover-body slot="body">
                    ${e.description}
                    <dss-button-link label="${e.linkLabel}" linkHref="${e.linkHref}" icon="${e.linkIcon}"></dss-button-link>
                  </dss-popover-body>
                `:t`
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
      `},s={tags:["!dev"],render:()=>t`
     <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    `},i={tags:["!dev"],render:()=>t`
       <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
        <dss-item-list slot="item-list" items='[
          { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
          { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
          ]'>
        </dss-item-list>
      </dss-popover>
    </div>
    `},n={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="top" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},l={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},d={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="bottom" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `},r={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="left" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    `};var a,c,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: true,
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
         <div style="position: relative;width: fit-content;">
            <p style="font-size: 12px;color: lightgray">Related content</p>
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
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
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="top" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var I,x,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="right" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,w,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="bottom" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var L,P,$;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
      <p class="demo-related-content">Related content</p>
      <dss-popover title="Popover" position="left" open>
        <dss-popover-body slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
          <p>El tio paco con sus billetes esta en el taco.</p>
          <dss-button-link label="Button link" linkHref="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home"></dss-button-link>
        </dss-popover-body>
      </dss-popover>
    </div>
    \`;
  }
}`,...($=(P=r.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const D=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft"],R=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,ItemList:i,Playground:o,PositionBottom:d,PositionLeft:r,PositionRight:l,PositionTop:n,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{s as B,i as I,o as P,R as S,n as a,l as b,d as c,r as d};
