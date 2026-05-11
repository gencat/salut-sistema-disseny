import{x as e}from"./lit-html-D6cejpwM.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
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
`,V={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"button",title:"Títol",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Descripció breu per complementar.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:t=>e`
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
      `},c={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-button-style")]},r={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-selector-style")]},l={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-action-style")]},a={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-action-switch-style")]},n={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
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
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
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
    `,decorators:[i(s,"tile-action-icon-button-style")]},d={tags:["!dev"],render:()=>e`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-action-checkbox-style")]},p={tags:["!dev"],render:()=>e`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-logo-style")]},b={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Botó deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Selector deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-button-style")]},u={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-action-switch-style")]},m={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
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
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
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
    `,decorators:[i(s,"tile-disabled-action-icon-button-style")]},h={tags:["!dev"],render:()=>e`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    `,decorators:[i(s,"tile-disabled-action-checkbox-style")]};var y,g,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
  args: {
    type: 'button',
    title: 'Títol',
    icon: 'add_box',
    showLogo: false,
    logoURL: 'https://placehold.jp/48x48.png',
    showDescription: true,
    description: 'Descripció breu per complementar.',
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
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,x,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-button-style')]
}`,...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var k,S,D;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-selector-style')]
}`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var A,_,$;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-action-style')]
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var f,L,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-input-switch size="lg" slot="action">
        <input slot="input" aria-label="my switch" type="checkbox" checked>
      </dss-input-switch>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-switch-style')]
}`,...(z=(L=a.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var B,I,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
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
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
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
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var C,R,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" />
      </dss-checkbox>
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-action-checkbox-style')]
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var j,P,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-logo-style')]
}`,...(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var E,F,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="button"
    icon="add_box"
    tileTitle="Botó deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
  <dss-tile 
    disabled
    type="selector"
    icon="add_box"
    tileTitle="Selector deshabilitat" 
    description="Descripció breu per complementar.">
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-button-style')]
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,H,J;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" checked disabled>
    </dss-input-switch>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
    <dss-input-switch size="lg" slot="action">
      <input slot="input" aria-label="my switch" type="checkbox" disabled>
    </dss-input-switch>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-switch-style')]
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,W,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
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
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
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
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,Q,G;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="tiles-wrapper">
  <dss-tile 
    disabled
    type="action"
    icon="settings"
    tileTitle="Tile deshabilitat" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Només acció deshabilitada" 
    description="Descripció breu per complementar.">
      <dss-checkbox slot="action">
        <input type="checkbox" slot="input" aria-label="tile-checkbox" disabled />
      </dss-checkbox>
  </dss-tile>
</div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-disabled-action-checkbox-style')]
}`,...(G=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};const Y=["Playground","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],ie=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:d,ActionIconButton:n,ActionSwitch:a,DisabledActionCheckbox:h,DisabledActionIconButton:m,DisabledActionSwitch:u,DisabledButton:b,Logo:p,Playground:o,TypeAction:l,TypeButton:c,TypeSelector:r,__namedExportsOrder:Y,default:V},Symbol.toStringTag,{value:"Module"}));export{a as A,b as D,p as L,o as P,ie as S,c as T,r as a,l as b,n as c,d,u as e,m as f,h as g};
