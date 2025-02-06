import{x as t}from"./lit-html-B2eaWknC.js";const v={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},hide:{name:"Hide tooltip",control:{type:"boolean"}},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},s={render:n=>t`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${n.position}"
        align="${n.align}"
        ?hide=${n.hide}
      >
        ${n.text}
      </dss-tooltip>
    </div>
  `,args:{position:"top",align:"left",hide:!1,text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."}},o={tags:["!dev"],render:()=>t`
    <div class="wrapper">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    `},i={tags:["!dev"],render:()=>t`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right" align="right">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>
  </div>
    `};var e,r,p;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(p=(r=s.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var d,l,a;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const g=["Playground","Position","Alignment"],h=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Playground:s,Position:o,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{i as A,s as P,h as S,o as a};
