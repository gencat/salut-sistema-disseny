import{x as t}from"./lit-html-CeYizTxc.js";const v={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},hide:{name:"Hide tooltip",control:{type:"boolean"}},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},s={render:i=>t`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${i.position}"
        align="${i.align}"
        ?hide=${i.hide}
      >
        ${i.text}
      </dss-tooltip>
    </div>
  `,args:{position:"top",align:"left",hide:!1,text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."}},o={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
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
    `};var e,p,a;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var r,l,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const g=["Playground","Position","Alignment"],h=Object.freeze(Object.defineProperty({__proto__:null,Alignment:n,Playground:s,Position:o,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{n as A,s as P,h as S,o as a};
