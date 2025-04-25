import"./lit-element-DhY7bShc.js";import{x as m}from"./lit-html-B2eaWknC.js";import"./avatar-qmcOoFp0.js";import{a as t}from"./avatar-doctor-BBv5l1RE.js";const D={title:"Components/Avatar",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg","xl"]},name:{name:"Nom",control:{type:"text"}},surname:{name:"Cognom",control:{type:"text"}},imageUrl:{name:"Imatge",control:{type:"text"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=285-1631&m=dev"}},args:{size:"md",name:"Nom",surname:"Cognom",imageUrl:""},render:n=>m`<dss-avatar
        size="${n.size}"
        name="${n.name}"
        surname="${n.surname}"
        imageUrl="${n.imageUrl}"
      ></dss-avatar>`},s={tags:["!dev"],render:()=>m`
      <dss-avatar
    size="sm"
    name="Design"
    surname="System"
    imageUrl=${t}
  ></dss-avatar>
  <dss-avatar
    size="md"
    name="Design"
    surname="System"
    imageUrl=${t}
  ></dss-avatar>
  <dss-avatar
    size="lg"
    name="Design"
    surname="System"
    imageUrl=${t}
  ></dss-avatar>
  <dss-avatar
    size="xl"
    name="Design"
    surname="System"
    imageUrl=${t}
  ></dss-avatar>
    `},e={tags:["!dev"],render:()=>m`
         <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      `},r={tags:["!dev"],render:()=>m`
        <dss-avatar size="sm"></dss-avatar>
  <dss-avatar size="md"></dss-avatar>
  <dss-avatar size="lg"></dss-avatar>
  <dss-avatar size="xl"></dss-avatar>
      `};var d,i,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=285-1631&m=dev'
    }
  },
  args: {
    size: 'md',
    name: 'Nom',
    surname: 'Cognom',
    imageUrl: ''
  },
  render: (args: any) => {
    return html\`<dss-avatar
        size="\${args.size}"
        name="\${args.name}"
        surname="\${args.surname}"
        imageUrl="\${args.imageUrl}"
      ></dss-avatar>\`;
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var g,v,l;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-avatar
    size="sm"
    name="Design"
    surname="System"
    imageUrl=\${avatarDoctor}
  ></dss-avatar>
  <dss-avatar
    size="md"
    name="Design"
    surname="System"
    imageUrl=\${avatarDoctor}
  ></dss-avatar>
  <dss-avatar
    size="lg"
    name="Design"
    surname="System"
    imageUrl=\${avatarDoctor}
  ></dss-avatar>
  <dss-avatar
    size="xl"
    name="Design"
    surname="System"
    imageUrl=\${avatarDoctor}
  ></dss-avatar>
    \`;
  }
}`,...(l=(v=s.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};var u,c,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
         <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      \`;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var z,y,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-avatar size="sm"></dss-avatar>
  <dss-avatar size="md"></dss-avatar>
  <dss-avatar size="lg"></dss-avatar>
  <dss-avatar size="xl"></dss-avatar>
      \`;
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const $=["Playground","Image","Initials","Icons"],w=Object.freeze(Object.defineProperty({__proto__:null,Icons:r,Image:s,Initials:e,Playground:a,__namedExportsOrder:$,default:D},Symbol.toStringTag,{value:"Module"}));export{s as I,a as P,w as S,e as a,r as b};
