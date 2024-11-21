import{x as e}from"./lit-html-paDGiEfB.js";const h={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},hide:{name:"Hide tooltip",control:{type:"boolean"}},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},s={render:t=>e`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${t.position}"
        align="${t.align}"
        ?hide=${t.hide}
      >
        ${t.text}
      </dss-tooltip>
    </div>
  `,args:{position:"top",align:"left",hide:!1,text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."}},o={tags:["!dev"],render:()=>e`
     <div class="wrapper">
    <div class="box">
      <p class="element">Related element.</p>
      <dss-tooltip class="tooltip">
        <span>Tooltip <em>info</em></span>
      </dss-tooltip>
    </div>
  </div>
    `},n={tags:["!dev"],render:()=>e`
    <div class="wrapper">
    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    `},i={tags:["!dev"],render:()=>e`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="right" align="right">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>
  </div>
    `};var a,p,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="\${args.position}"
        align="\${args.align}"
        ?hide=\${args.hide}
      >
        \${args.text}
      </dss-tooltip>
    </div>
  \`,
  args: {
    position: 'top',
    align: 'left',
    hide: false,
    text: 'Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space.'
  }
}`,...(r=(p=s.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
    <div class="box">
      <p class="element">Related element.</p>
      <dss-tooltip class="tooltip">
        <span>Tooltip <em>info</em></span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,x,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <span class="dss-icon dss-icon--sm">circle</span>

      <dss-tooltip position="right" align="right">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const L=["Playground","CSSLogic","Position","Alignment"],y=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,CSSLogic:o,Playground:s,Position:n,__namedExportsOrder:L,default:h},Symbol.toStringTag,{value:"Module"}));export{i as A,o as C,s as P,y as S,n as a};
