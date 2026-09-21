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
`,ie={title:"Components/Tile",argTypes:{type:{name:"Tipus",control:{type:"select"},options:["default","button","selector","action"]},title:{name:"Títol",control:{type:"text"}},icon:{name:"Icona",control:{type:"text"}},showLogo:{name:"Mostrar logo",control:{type:"boolean"}},logoURL:{name:"Logo URL",control:{type:"text"},if:{arg:"showLogo"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció ",control:{type:"text"},if:{arg:"showDescription"}},action:{name:"Acció",control:{type:"select"},options:["Switch","Icon Buttons","Checkbox"],if:{arg:"type",eq:"action"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"action",eq:"Icon Buttons"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},selected:{name:"Seleccionat",control:{type:"boolean"},if:{arg:"type",eq:"selector"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev"}},args:{type:"default",title:"Títol",icon:"add_box",showLogo:!1,logoURL:"https://placehold.jp/48x48.png",showDescription:!0,description:"Descripció breu per complementar.",action:"Switch",buttonNumber:1,disabled:!1,selected:!1},render:t=>e`
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
      `},r={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-default-style")]},c={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="button"
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-button-style")]},l={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="selector"
    icon="ads_click"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-selector-style")]},a={tags:["!dev"],render:()=>e`
        <div class="tile-wrapper">
  <dss-tile 
    type="action"
    icon="settings"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-type-action-style")]},n={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-action-switch-style")]},d={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-action-icon-button-style")]},p={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-action-checkbox-style")]},b={tags:["!dev"],render:()=>e`
       <div class="tile-wrapper">
  <dss-tile 
    hasLogo
    logoURL="https://placehold.jp/48x48.png"
    type="button"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    `,decorators:[i(s,"tile-logo-style")]},u={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-disabled-button-style")]},m={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-disabled-action-switch-style")]},y={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(s,"tile-disabled-action-checkbox-style")]};var g,w,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1533-13690&m=dev'
    }
  },
  args: {
    type: 'default',
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
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,T,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="tile-wrapper">
  <dss-tile 
    icon="add_box"
    tileTitle="Títol" 
    description="Descripció breu per complementar.">
  </dss-tile>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tile-type-default-style')]
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var S,D,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var f,_,$;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var L,z,B;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(z=a.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,N,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(N=n.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var R,U,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var P,q,E;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(q=p.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,M,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,G,V;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(G=y.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var Y,ee,te;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const se=["Playground","TypeDefault","TypeButton","TypeSelector","TypeAction","ActionSwitch","ActionIconButton","ActionCheckbox","Logo","DisabledButton","DisabledActionSwitch","DisabledActionIconButton","DisabledActionCheckbox"],ce=Object.freeze(Object.defineProperty({__proto__:null,ActionCheckbox:p,ActionIconButton:d,ActionSwitch:n,DisabledActionCheckbox:h,DisabledActionIconButton:y,DisabledActionSwitch:m,DisabledButton:u,Logo:b,Playground:o,TypeAction:a,TypeButton:c,TypeDefault:r,TypeSelector:l,__namedExportsOrder:se,default:ie},Symbol.toStringTag,{value:"Module"}));export{n as A,u as D,b as L,o as P,ce as S,r as T,c as a,l as b,d as c,p as d,m as e,y as f,h as g};
