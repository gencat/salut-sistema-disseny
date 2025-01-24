import{x as t}from"./lit-html-CeYizTxc.js";const W={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},e={args:{type:"button",title:"Tile Title",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Lorem ipsume dolor sit amae.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:s=>t`
        <dss-tile 
          type="${s.type}"
          icon="${s.icon}"
          ?hasLogo=${s.showLogo}
          logoURL="${s.logoURL}"
          tileTitle="${s.title}" 
          description="${s.description}" 
          ?disabled=${s.disabled}
          ?selected=${s.selected}
          >
          ${s.type==="action"?t`
              ${s.action==="Switch"?t`
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
                `:s.action==="Icon Buttons"?t`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:s.buttonNumber},()=>t`
                          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" ?disabled=${s.disabled}>
                            <span class="dss-icon dss-icon--lg">add_box</span>
                          </button>
                        `)}
                  </div>
                `:s.action==="Checkbox"?t`
                  <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" ?disabled=${s.disabled} />
                `:null}
            `:null}
        </dss-tile>
      `},i={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},n={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},o={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},l={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    `},a={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  </div>
    `},c={tags:["!dev"],render:()=>t`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" />
  </dss-tile>
  </div>
    `},d={tags:["!dev"],render:()=>t`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},r={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Type Button" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Type Selector" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
</div>
    `},p={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    `},u={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" disabled>
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" disabled>
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
</div>
    `},b={tags:["!dev"],render:()=>t`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" disabled />
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" disabled />
  </dss-tile>
</div>
    `};var m,g,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'button',
    title: 'Tile Title',
    icon: 'add_box',
    showLogo: false,
    logoURL: 'https://placehold.jp/48x48.png',
    showDescription: true,
    description: 'Lorem ipsume dolor sit amae.',
    action: 'Switch',
    buttonNumber: 1,
    disabled: false,
    selected: false
  },
  render: (args: any) => {
    return html\`
        <dss-tile 
          type="\${args.type}"
          icon="\${args.icon}"
          ?hasLogo=\${args.showLogo}
          logoURL="\${args.logoURL}"
          tileTitle="\${args.title}" 
          description="\${args.description}" 
          ?disabled=\${args.disabled}
          ?selected=\${args.selected}
          >
          \${args.type === 'action' ? html\`
              \${args.action === 'Switch' ? html\`
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
                \` : args.action === 'Icon Buttons' ? html\`
                  <div class="dss-tile-action-group" slot="action">
                    \${Array.from({
      length: args.buttonNumber
    }, () => html\`
                          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" ?disabled=\${args.disabled}>
                            <span class="dss-icon dss-icon--lg">add_box</span>
                          </button>
                        \`)}
                  </div>
                \` : args.action === 'Checkbox' ? html\`
                  <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" ?disabled=\${args.disabled} />
                \` : null}
            \` : null}
        </dss-tile>
      \`;
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,w,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  }
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,S,_;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var $,f,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    \`;
  }
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,B,R;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg">
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  </div>
    \`;
  }
}`,...(R=(B=a.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var U,z,I;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" />
  </dss-tile>
  </div>
    \`;
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var O,C,j;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    \`;
  }
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var F,N,P;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Type Button" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Type Selector" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
</div>
    \`;
  }
}`,...(P=(N=r.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,M,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    \`;
  }
}`,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var Q,G,H;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" disabled>
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
          <button type="button" class="dss-icon-button dss-icon-button--primary dss-icon-button--lg" disabled>
            <span class="dss-icon dss-icon--lg">add_box</span>
          </button>
        </div>
  </dss-tile>
</div>
    \`;
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,V;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" disabled />
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <input type="checkbox" class="dss-checkbox" slot="action" aria-label="tile-checkbox" disabled />
  </dss-tile>
</div>
    \`;
  }
}`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const X=["Playground","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],Z=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:c,ActionIconButton:a,ActionSwitch:l,DisabledActionCheckbox:b,DisabledActionIconButton:u,DisabledActionSwitch:p,DisabledButton:r,Logo:d,Playground:e,TypeAction:o,TypeButton:i,TypeSelector:n,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{l as A,r as D,d as L,e as P,Z as S,i as T,n as a,o as b,a as c,c as d,p as e,u as f,b as g};
