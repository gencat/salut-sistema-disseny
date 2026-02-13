import{x as n}from"./iframe-DLVb3rJw.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const p=`
  .innerZoomElementWrapper {
    flex-direction: column;
    align-items: center;
    gap: 150px;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    overflow: hidden;
  }
  .box {
    position: relative;
  }
  .box + .box {
    margin-left: 50px;
  }
  .wrapper--alignment > .box + .box {
    margin-left: 100px;
  }
  dss-icon {
    cursor: pointer;
  }
`,a={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},interactive:{name:"Interactiú",control:{type:"boolean"}},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},s={render:e=>n`
    <div style="overflow:hidden;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${e.position}"
        align="${e.align}"
        ?interactive=${e.interactive}
      >
        ${e.text}
      </dss-tooltip>
    </div>
  `,args:{interactive:!0,position:"top",align:"left",text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev"}}},o={tags:["!dev"],render:()=>n`
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
    `,decorators:[r(p,"tooltip-position-style")]},i={tags:["!dev"],render:()=>n`
    <div class="wrapper">
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
    `,decorators:[r(p,"tooltip-alignment-style")]},t={tags:["!dev"],render:()=>n`
    <div class="wrapper">
      <div class="box">
        <dss-icon size="sm" icon="circle"></dss-icon>
        <dss-tooltip interactive>
          <span>Position <em>left</em></span>
        </dss-tooltip>
      </div>
    </div>
    `,decorators:[r(p,"tooltip-interactive-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div style="overflow:hidden;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="\${args.position}"
        align="\${args.align}"
        ?interactive=\${args.interactive}
      >
        \${args.text}
      </dss-tooltip>
    </div>
  \`,
  args: {
    interactive: true,
    position: 'top',
    align: 'left',
    text: 'Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev'
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-position-style')]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
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
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-alignment-style')]
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <div class="box">
        <dss-icon size="sm" icon="circle"></dss-icon>
        <dss-tooltip interactive>
          <span>Position <em>left</em></span>
        </dss-tooltip>
      </div>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-interactive-style')]
}`,...t.parameters?.docs?.source}}};const d=["Playground","Position","Alignment","Interactive"],m=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Interactive:t,Playground:s,Position:o,__namedExportsOrder:d,default:a},Symbol.toStringTag,{value:"Module"}));export{i as A,t as I,s as P,m as S,o as a};
