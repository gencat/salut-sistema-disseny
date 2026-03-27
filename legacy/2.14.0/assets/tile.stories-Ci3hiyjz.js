import{x as t}from"./lit-html-D6cejpwM.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
 .innerZoomElementWrapper {
    display:block;
  }
  .innerZoomElementWrapper > div {
    display: block !important;
  }
  .tiles-wrapper {
    display: flex;
    gap: 20px;
  }
  .tile-wrapper {
    width: 320px;
  }
`,V={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"button",title:"Tile Title",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Lorem ipsume dolor sit amae.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:e=>t`
        <dss-tile 
          type="${e.type}"
          icon="${e.icon}"
          ?hasLogo=${e.showLogo}
          logoURL="${e.logoURL}"
          tileTitle="${e.title}" 
          description="${e.description}" 
          ?disabled=${e.disabled}
          ?selected=${e.selected}
          >
          ${e.type==="action"?t`
              ${e.action==="Switch"?t`
                  <dss-input-switch size="lg" slot="action">
                    <input slot="input" aria-label="my switch" type="checkbox" checked>
                  </dss-input-switch>
                `:e.action==="Icon Buttons"?t`
                  <div class="dss-tile-action-group" slot="action">
                    ${Array.from({length:e.buttonNumber},()=>t`
                          <dss-icon-button 
                            label="Action name"
                            icon="add_box"
                            size="lg"
                            variant="primary"
                            ?disabled=${e.disabled}>
                          </dss-icon-button>
                        `)}
                  </div>
                `:e.action==="Checkbox"?t`
                      <dss-checkbox slot="action">
                        <input type="checkbox" slot="input" aria-label="tile-checkbox" ?disabled=${e.disabled} />
                      </dss-checkbox>
                `:null}
            `:null}
        </dss-tile>
      `},l={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-button-style")]},a={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-selector-style")]},r={tags:["!dev"],render:()=>t`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-action-style")]},n={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-action-switch-style")]},c={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-action-icon-button-style")]},d={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-action-checkbox-style")]},p={tags:["!dev"],render:()=>t`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Tile Title" 
    description="Lorem ipsum dolor sit amaet.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-logo-style")]},m={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-disabled-button-style")]},u={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-disabled-action-switch-style")]},b={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-disabled-action-icon-button-style")]},y={tags:["!dev"],render:()=>t`
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
    `,decorators:[i(s,"tile-disabled-action-checkbox-style")]};var h,g,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,T,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-button-style')]
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var k,S,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-selector-style')]
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var A,_,$;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-action-style')]
}`,...($=(_=r.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var f,z,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-switch-style')]
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var B,I,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-icon-button-style')]
}`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var F,R,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-checkbox-style')]
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var O,j,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-logo-style')]
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var q,E,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-button-style')]
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,H,J;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-switch-style')]
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,W,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-icon-button-style')]
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,Q,G;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-checkbox-style')]
}`,...(G=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};const Y=["Playground","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],it=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:d,ActionIconButton:c,ActionSwitch:n,DisabledActionCheckbox:y,DisabledActionIconButton:b,DisabledActionSwitch:u,DisabledButton:m,Logo:p,Playground:o,TypeAction:r,TypeButton:l,TypeSelector:a,__namedExportsOrder:Y,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,m as D,p as L,o as P,it as S,l as T,a,r as b,c,d,u as e,b as f,y as g};
