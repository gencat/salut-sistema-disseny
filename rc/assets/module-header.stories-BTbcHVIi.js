import{x as a}from"./lit-html-B2eaWknC.js";const B={title:"Components/Module Header",argTypes:{title:{name:"Títol",control:{type:"text"}},withDescription:{name:"Amb descripció",control:{type:"boolean"}},description:{name:"Descripció",control:{type:"text"},if:{arg:"withDescription"}},withButton:{name:"Amb botó",control:{type:"boolean"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"withButton"}}},parameters:{layout:"centered"}},t={render:s=>{let c="";const o=document.createElement("div");o.className="dss-module-header__container",o.innerHTML=`<div class="dss-headline--sm">${s.title}</div>`;const i=document.createElement("div");if(i.className="dss-module-header__child-container",o.appendChild(i),s.withDescription&&(i.innerHTML=`<div class="dss-legend--sm">${s.description}</div>`),s.withButton){for(let l=1;l<=s.buttonNumber;l++)c+=`<button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add_box</i>
            Botó ${l}
          </button>`;i.innerHTML+=c}return a`${o}`},args:{title:"Title",withDescription:!1,description:"",withButton:!1,buttonNumber:0}},n={tags:["!dev"],render:()=>a`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>
      </div>
    `},d={tags:["!dev"],render:()=>a`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>
    `},e={tags:["!dev"],render:()=>a`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--secondary dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--primary dss-button--icon-left">
            <i class="dss-icon">add\_box</i>Button
          </button>
        </div>
      </div>
    `};var u,b,r;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => {
    let button = '';
    const container = document.createElement('div');
    container.className = 'dss-module-header__container';
    container.innerHTML = \`<div class="dss-headline--sm">\${args.title}</div>\`;
    const child = document.createElement('div');
    child.className = 'dss-module-header__child-container';
    container.appendChild(child);
    if (args.withDescription) {
      child.innerHTML = \`<div class="dss-legend--sm">\${args.description}</div>\`;
    }
    if (args.withButton) {
      for (let i = 1; i <= args.buttonNumber; i++) {
        button += \`<button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add_box</i>
            Botó \${i}
          </button>\`;
      }
      child.innerHTML += button;
    }
    return html\`\${container}\`;
  },
  args: {
    title: 'Title',
    withDescription: false,
    description: '',
    withButton: false,
    buttonNumber: 0
  }
}`,...(r=(b=t.parameters)==null?void 0:b.docs)==null?void 0:r.source}}};var v,m,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>
      </div>
    \`;
  }
}`,...(_=(m=n.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var h,p,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>
    \`;
  }
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,y,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>

      <div class="dss-module-header__container">
        <div class="dss-headline--sm">Title</div>

        <div class="dss-module-header__child-container">
          <div class="dss-legend--sm">Descriptive text</div>

          <button type="button" class="dss-button dss-button--md dss-button--subtle dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--secondary dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>

          <button type="button" class="dss-button dss-button--md dss-button--primary dss-button--icon-left">
            <i class="dss-icon">add\\_box</i>Button
          </button>
        </div>
      </div>
    \`;
  }
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const T=["Playground","Title","Description","Buttons"],w=Object.freeze(Object.defineProperty({__proto__:null,Buttons:e,Description:d,Playground:t,Title:n,__namedExportsOrder:T,default:B},Symbol.toStringTag,{value:"Module"}));export{e as B,d as D,t as P,w as S,n as T};
