import{x as e}from"./lit-html-B2eaWknC.js";const V={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"button",title:"Tile Title",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Lorem ipsume dolor sit amae.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:t=>e`
        <dss-tile 
          type="${t.type}"
          icon="${t.icon}"
          ?hasLogo=${t.showLogo}
          logoURL="${t.logoURL}"
          tileTitle="${t.title}" 
          description="${t.description}" 
          ?disabled=${t.disabled}
          ?selected=${t.selected}
          >
          ${t.type==="action"?e`
              ${t.action==="Switch"?e`
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
                `:t.action==="Icon Buttons"?e`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:t.buttonNumber},()=>e`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=${t.disabled}>
                          </dss-icon-button>
                        `)}
                  </div>
                `:t.action==="Checkbox"?e`
                      <dss-checkbox slot="action">
                        <input type="checkbox" slot="input" aria-label="tile-checkbox" ?disabled=${t.disabled} />
                      </dss-checkbox>
                `:null}
            `:null}
        </dss-tile>
      `},s={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},n={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},o={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},l={tags:["!dev"],render:()=>e`
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
    `},a={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    `},c={tags:["!dev"],render:()=>e`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `},r={tags:["!dev"],render:()=>e`
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
    `},p={tags:["!dev"],render:()=>e`
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
    `},m={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
      <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
        <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
</div>
    `},u={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Full tile disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    `};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
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
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=\${args.disabled}>
                          </dss-icon-button>
                        \`)}
                  </div>
                \` : args.action === 'Checkbox' ? html\`
                      <dss-checkbox slot="action">
                        <input type="checkbox" slot="input" aria-label="tile-checkbox" ?disabled=\${args.disabled} />
                      </dss-checkbox>
                \` : null}
            \` : null}
        </dss-tile>
      \`;
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,w,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,S,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var _,$,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=($=l.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var f,D,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
       <div class="dss-tile-action-group" slot="action">
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
          <dss-icon-button 
            label="Action name"
            icon="add_box"
            size="lg"
            variant="primary">
          </dss-icon-button>
        </div>
  </dss-tile>
  </div>
    \`;
  }
}`,...(B=(D=a.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var I,C,F;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    \`;
  }
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var R,U,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(U=c.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var j,P,q;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(P=r.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var N,E,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
     <div class="dss-tile-action-group" slot="action">
        <dss-icon-button 
          label="Action name"
          icon="add_box"
          size="lg"
          variant="primary"
          disabled>
        </dss-icon-button>
      </div>
  </dss-tile>
</div>
    \`;
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Q,G;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Only action disabled" 
    description="Lorem ipsum dolor sit amaet.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    \`;
  }
}`,...(G=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};const W=["Playground","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],Z=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:d,ActionIconButton:a,ActionSwitch:l,DisabledActionCheckbox:u,DisabledActionIconButton:m,DisabledActionSwitch:p,DisabledButton:r,Logo:c,Playground:i,TypeAction:o,TypeButton:s,TypeSelector:n,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{l as A,r as D,c as L,i as P,Z as S,s as T,n as a,o as b,a as c,d,p as e,m as f,u as g};
