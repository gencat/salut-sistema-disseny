import{x as s}from"./iframe-DLVb3rJw.js";const T={title:"Components/Task",argTypes:{title1:{name:"Títol 1º Task",control:{type:"text"}},type1:{name:"Tipus alerta 1º Task",control:{type:"select"},options:["Sense informació","Resultat normal","Resultat alterat","Resultat patològic","Tasca pendent","Receptes que caduquen entre 11 i 60 dies","Receptes que caduquen en menys de 10 dies","Receptes caducades"]},title2:{name:"Títol 2º Task",control:{type:"text"}},type2:{name:"Tipus alerta 2º Task",control:{type:"select"},options:["Sense informació","Resultat normal","Resultat alterat","Resultat patològic","Tasca pendent","Receptes que caduquen entre 11 i 60 dies","Receptes que caduquen en menys de 10 dies","Receptes caducades"]},title3:{name:"Títol 3º Task",control:{type:"text"}},type3:{name:"Tipus alerta 3º Task",control:{type:"select"},options:["Sense informació","Resultat normal","Resultat alterat","Resultat patològic","Tasca pendent","Receptes que caduquen entre 11 i 60 dies","Receptes que caduquen en menys de 10 dies","Receptes caducades"]}},parameters:{layout:"centered"}},n={render:e=>{let a="",t="",d="";const v=s`<div
      class="dss-badge dss-badge--md dss-badge--default dss-badge--outline"
    >
      <span>1</span>
    </div>`,m=s`<div
      class="dss-badge dss-badge--md dss-badge--green"
    >
      <span>1 - NOR</span>
    </div>`,k=s`<div
      class="dss-badge dss-badge--md dss-badge--yellow"
    >
      <span>1 - ALT</span>
    </div>`,g=s`<div
      class="dss-badge dss-badge--md dss-badge--red"
    >
      <span>1 - PAT</span>
    </div>`,_=s`<div
      class="dss-badge dss-badge--md dss-badge--default"
    >
      <span>1</span>
    </div>`,y=s`<div
      class="dss-badge dss-badge--md dss-badge--yellow"
    >
      <span>1 - CAD 60</span>
    </div>`,h=s`<div
      class="dss-badge dss-badge--md dss-badge--red"
    >
      <span>1 - CAD 10</span>
    </div>`,R=s`<div class="dss-badge dss-badge--md dss-badge--blue">
      <span>1 - CAD</span>
    </div>`;switch(e.type1){case"Sense informació":a=v;break;case"Resultat normal":a=m;break;case"Resultat alterat":a=k;break;case"Resultat patològic":a=g;break;case"Tasca pendent":a=_;break;case"Receptes que caduquen entre 11 i 60 dies":a=y;break;case"Receptes que caduquen en menys de 10 dies":a=h;break;case"Receptes caducades":a=R;break}switch(e.type2){case"Sense informació":t=v;break;case"Resultat normal":t=m;break;case"Resultat alterat":t=k;break;case"Resultat patològic":t=g;break;case"Tasca pendent":t=_;break;case"Receptes que caduquen entre 11 i 60 dies":t=y;break;case"Receptes que caduquen en menys de 10 dies":t=h;break;case"Receptes caducades":t=R;break}switch(e.type3){case"Sense informació":d=v;break;case"Resultat normal":d=m;break;case"Resultat alterat":d=k;break;case"Resultat patològic":d=g;break;case"Tasca pendent":d=_;break;case"Receptes que caduquen entre 11 i 60 dies":d=y;break;case"Receptes que caduquen en menys de 10 dies":d=h;break;case"Receptes caducades":d=R;break}return s`<div class="dss-task">
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="${e.title1}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">${e.title1}</h4>
          ${a}
        </div>
      </div>
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="${e.title2}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">${e.title2}</h4>
          ${t}
        </div>
      </div>
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="${e.title3}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">${e.title3}</h4>
          ${d}
        </div>
      </div>
    </div>`},args:{title1:"Title 1",type1:"Sense informació",title2:"Title 2",type2:"Sense informació",title3:"Title 3",type3:"Sense informació"}},i={tags:["!dev"],render:()=>s`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--default dss-badge--outline">
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
    `},c={tags:["!dev"],render:()=>s`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--green">
          <span>1 - NOR</span>
        </div>
      </div>
    </div>
  </div>
    `},l={tags:["!dev"],render:()=>s`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--yellow">
          <span>1 - ALT</span>
        </div>
      </div>
    </div>
  </div>
    `},r={tags:["!dev"],render:()=>s`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--red">
          <span>1 - PAT</span>
        </div>
      </div>
    </div>
  </div>
    `},o={tags:["!dev"],render:()=>s`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--default">
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
    `},u={tags:["!dev"],render:()=>s`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--yellow">
          <span>1 - CAD 60</span>
        </div>
      </div>
    </div>
  </div>
    `},p={tags:["!dev"],render:()=>s`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--red">
          <span>1 - CAD 10</span>
        </div>
      </div>
    </div>
  </div>
    `},b={tags:["!dev"],render:()=>s`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--blue">
          <span>1 - CAD</span>
        </div>
      </div>
    </div>
  </div>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    let badge1: any = '';
    let badge2: any = '';
    let badge3: any = '';
    const senseInfo = html\`<div
      class="dss-badge dss-badge--md dss-badge--default dss-badge--outline"
    >
      <span>1</span>
    </div>\`;
    const resultatNormal = html\`<div
      class="dss-badge dss-badge--md dss-badge--green"
    >
      <span>1 - NOR</span>
    </div>\`;
    const resultatAlterat = html\`<div
      class="dss-badge dss-badge--md dss-badge--yellow"
    >
      <span>1 - ALT</span>
    </div>\`;
    const resultatPatologic = html\`<div
      class="dss-badge dss-badge--md dss-badge--red"
    >
      <span>1 - PAT</span>
    </div>\`;
    const tascaPendent = html\`<div
      class="dss-badge dss-badge--md dss-badge--default"
    >
      <span>1</span>
    </div>\`;
    const caducaEntre = html\`<div
      class="dss-badge dss-badge--md dss-badge--yellow"
    >
      <span>1 - CAD 60</span>
    </div>\`;
    const caducaMenys = html\`<div
      class="dss-badge dss-badge--md dss-badge--red"
    >
      <span>1 - CAD 10</span>
    </div>\`;
    const caduca = html\`<div class="dss-badge dss-badge--md dss-badge--blue">
      <span>1 - CAD</span>
    </div>\`;
    switch (args.type1) {
      case 'Sense informació':
        badge1 = senseInfo;
        break;
      case 'Resultat normal':
        badge1 = resultatNormal;
        break;
      case 'Resultat alterat':
        badge1 = resultatAlterat;
        break;
      case 'Resultat patològic':
        badge1 = resultatPatologic;
        break;
      case 'Tasca pendent':
        badge1 = tascaPendent;
        break;
      case 'Receptes que caduquen entre 11 i 60 dies':
        badge1 = caducaEntre;
        break;
      case 'Receptes que caduquen en menys de 10 dies':
        badge1 = caducaMenys;
        break;
      case 'Receptes caducades':
        badge1 = caduca;
        break;
    }
    switch (args.type2) {
      case 'Sense informació':
        badge2 = senseInfo;
        break;
      case 'Resultat normal':
        badge2 = resultatNormal;
        break;
      case 'Resultat alterat':
        badge2 = resultatAlterat;
        break;
      case 'Resultat patològic':
        badge2 = resultatPatologic;
        break;
      case 'Tasca pendent':
        badge2 = tascaPendent;
        break;
      case 'Receptes que caduquen entre 11 i 60 dies':
        badge2 = caducaEntre;
        break;
      case 'Receptes que caduquen en menys de 10 dies':
        badge2 = caducaMenys;
        break;
      case 'Receptes caducades':
        badge2 = caduca;
        break;
    }
    switch (args.type3) {
      case 'Sense informació':
        badge3 = senseInfo;
        break;
      case 'Resultat normal':
        badge3 = resultatNormal;
        break;
      case 'Resultat alterat':
        badge3 = resultatAlterat;
        break;
      case 'Resultat patològic':
        badge3 = resultatPatologic;
        break;
      case 'Tasca pendent':
        badge3 = tascaPendent;
        break;
      case 'Receptes que caduquen entre 11 i 60 dies':
        badge3 = caducaEntre;
        break;
      case 'Receptes que caduquen en menys de 10 dies':
        badge3 = caducaMenys;
        break;
      case 'Receptes caducades':
        badge3 = caduca;
        break;
    }
    return html\`<div class="dss-task">
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="\${args.title1}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">\${args.title1}</h4>
          \${badge1}
        </div>
      </div>
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="\${args.title2}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">\${args.title2}</h4>
          \${badge2}
        </div>
      </div>
      <div class="dss-task__item">
        <input class="dss-task__selector" name="task" type="radio" aria-label="\${args.title3}" />
        <div class=" dss-task__content">
          <h4 class="dss-task__title dss-subtitle--sm">\${args.title3}</h4>
          \${badge3}
        </div>
      </div>
    </div>\`;
  },
  args: {
    title1: 'Title 1',
    type1: 'Sense informació',
    title2: 'Title 2',
    type2: 'Sense informació',
    title3: 'Title 3',
    type3: 'Sense informació'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--default dss-badge--outline">
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--green">
          <span>1 - NOR</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--yellow">
          <span>1 - ALT</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--red">
          <span>1 - PAT</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--default">
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--yellow">
          <span>1 - CAD 60</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--red">
          <span>1 - CAD 10</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="dss-task">
    <div class="dss-task__item">
      <input class="dss-task__selector" name="task" type="radio" id="task1" />

      <div class=" dss-task__content">
        <h4 class="dss-task__title dss-subtitle--sm">Title</h4>

        <div class="dss-badge dss-badge--md dss-badge--blue">
          <span>1 - CAD</span>
        </div>
      </div>
    </div>
  </div>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const q=["Playground","NoInfo","ResultNormal","ResultWarning","ResultDanger","Pending","ExpireLate","ExpireSoon","Expired"],S=Object.freeze(Object.defineProperty({__proto__:null,ExpireLate:u,ExpireSoon:p,Expired:b,NoInfo:i,Pending:o,Playground:n,ResultDanger:r,ResultNormal:c,ResultWarning:l,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{u as E,i as N,n as P,c as R,S,l as a,r as b,o as c,p as d,b as e};
