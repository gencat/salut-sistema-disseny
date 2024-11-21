import"./lit-element-vV9fql9z.js";import{x as t}from"./lit-html-paDGiEfB.js";const g={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]}},parameters:{layout:"centered"}},e={render:i=>t`
      <div style="width:400px;">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup" checked />
            <label>${i.label}</label>
          </div>
          ${Array.from({length:i.items-1},()=>t`<div class="dss-content-switcher__item">
                <input
                  type="radio"
                  name="radiogroup"
                  ?disabled="${i.disabled}"
                />
                <label>${i.label}</label>
              </div>`)}
        </div>
      </div>
    `,args:{label:"Tab",items:2,disabled:!1}},a={tags:["!dev"],render:()=>t`
     <div class="wrapper">
      <div class="dss-content-switcher">
        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" defaultChecked />

          <label>Tab</label>
        </div>

        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" />

          <label>Tab</label>
        </div>

        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" />

          <label>Tab</label>
        </div>
      </div>
    </div>
    `},n={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" defaultChecked disabled />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" disabled />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" disabled />

            <label>Tab</label>
          </div>
        </div>
      </div>
    `},s={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" defaultChecked />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" disabled />

            <label>Tab</label>
          </div>
        </div>
      </div>
    `};var d,r,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <div style="width:400px;">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup" checked />
            <label>\${args.label}</label>
          </div>
          \${Array.from({
      length: args.items - 1
    }, () => html\`<div class="dss-content-switcher__item">
                <input
                  type="radio"
                  name="radiogroup"
                  ?disabled="\${args.disabled}"
                />
                <label>\${args.label}</label>
              </div>\`)}
        </div>
      </div>
    \`;
  },
  args: {
    label: 'Tab',
    items: 2,
    disabled: false
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
      <div class="dss-content-switcher">
        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" defaultChecked />

          <label>Tab</label>
        </div>

        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" />

          <label>Tab</label>
        </div>

        <div class="dss-content-switcher__item">
          <input type="radio" name="radiogroup2" />

          <label>Tab</label>
        </div>
      </div>
    </div>
    \`;
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,v,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" defaultChecked disabled />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" disabled />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup3" disabled />

            <label>Tab</label>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,_,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" defaultChecked />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" />

            <label>Tab</label>
          </div>

          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup4" disabled />

            <label>Tab</label>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const w=["Playground","Enabled","Disabled","Mix"],f=Object.freeze(Object.defineProperty({__proto__:null,Disabled:n,Enabled:a,Mix:s,Playground:e,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{n as D,a as E,s as M,e as P,f as S};
