import{x as s}from"./lit-html-B2eaWknC.js";const j={title:"Discontinuat/Sidebar ⚠️",argTypes:{disabled:{name:"Deshabil·litar últim link",control:{type:"boolean"}},sectionsNumber:{name:"Quantitat de links",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10]}}},a={render:r=>s`<sidebar class="dss-sidebar">
      <input class="dss-sidebar--collapse" type="checkbox" />
      <nav class="dss-sidebar__nav">
        ${Array.from({length:r.sectionsNumber},(N,f)=>s`<a
              href="javascript:void(0);"
              class="dss-sidebar__link ${f===r.sectionsNumber-1&&r.disabled?"dss-sidebar__link--disabled":""}"
            >
              <span class="dss-sidebar__icon material-symbols-rounded"
                >add_box</span
              >
              <span class="dss-sidebar__text">Section</span>
            </a>`)}
      </nav>
    </sidebar>`,name:"Exemple",args:{disabled:!1,sectionsNumber:5}},d={tags:["!dev"],render:()=>s`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    `},n={tags:["!dev"],render:()=>s`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" checked />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    `},e={tags:["!dev"],render:()=>s`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" checked />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link dss-sidebar__link--disabled">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>

      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link dss-sidebar__link--disabled">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    `},i={tags:["!dev"],render:()=>s`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse dss-sidebar--reverse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    `};var c,l,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<sidebar class="dss-sidebar">
      <input class="dss-sidebar--collapse" type="checkbox" />
      <nav class="dss-sidebar__nav">
        \${Array.from({
      length: args.sectionsNumber
    }, (_, i) => html\`<a
              href="javascript:void(0);"
              class="dss-sidebar__link \${i === args.sectionsNumber - 1 && args.disabled ? 'dss-sidebar__link--disabled' : ''}"
            >
              <span class="dss-sidebar__icon material-symbols-rounded"
                >add_box</span
              >
              <span class="dss-sidebar__text">Section</span>
            </a>\`)}
      </nav>
    </sidebar>\`;
  },
  name: 'Exemple',
  args: {
    disabled: false,
    sectionsNumber: 5
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var _,t,b;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    \`;
  }
}`,...(b=(t=d.parameters)==null?void 0:t.docs)==null?void 0:b.source}}};var p,v,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" checked />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    \`;
  }
}`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var x,u,k;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" checked />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link dss-sidebar__link--disabled">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>

      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link dss-sidebar__link--disabled">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    \`;
  }
}`,...(k=(u=e.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <sidebar class="dss-sidebar">
        <input class="dss-sidebar--collapse dss-sidebar--reverse" type="checkbox" />

        <nav class="dss-sidebar__nav">
          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>

          <a href="javascript:void(0);" class="dss-sidebar__link ">
            <span class="dss-sidebar__icon material-symbols-rounded">add\\_box</span>
            <span class="dss-sidebar__text">Section</span>
          </a>
        </nav>
      </sidebar>
    \`;
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const g=["Playground","Expanded","Collapsed","LinkDisabled","ReverseIcons"],D=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:n,Expanded:d,LinkDisabled:e,Playground:a,ReverseIcons:i,__namedExportsOrder:g,default:j},Symbol.toStringTag,{value:"Module"}));export{n as C,d as E,e as L,a as P,i as R,D as S};
