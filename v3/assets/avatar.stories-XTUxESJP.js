import{x as m}from"./iframe-CdZ_4rdx.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";import{a as n}from"./avatar-doctor-BBv5l1RE.js";const d=`
  #root-inner {
        display: flex;
        align-items: center;
        gap: 16px;  
    }
`,o={title:"Components/Avatar",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg","xl"]},name:{name:"Nom",control:{type:"text"}},surname:{name:"Cognom",control:{type:"text"}},imageUrl:{name:"Imatge",control:{type:"text"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=285-1631&m=dev"}},args:{size:"md",name:"Nom",surname:"Cognom",imageUrl:""},render:t=>m`<dss-avatar
        size="${t.size}"
        name="${t.name}"
        surname="${t.surname}"
        imageUrl="${t.imageUrl}"
      ></dss-avatar>`},s={tags:["!dev"],render:()=>m`
      <dss-avatar
    size="sm"
    name="Design"
    surname="System"
    imageUrl=${n}
  ></dss-avatar>
  <dss-avatar
    size="md"
    name="Design"
    surname="System"
    imageUrl=${n}
  ></dss-avatar>
  <dss-avatar
    size="lg"
    name="Design"
    surname="System"
    imageUrl=${n}
  ></dss-avatar>
  <dss-avatar
    size="xl"
    name="Design"
    surname="System"
    imageUrl=${n}
  ></dss-avatar>
    `,decorators:[i(d,"avatar-image-style")]},e={tags:["!dev"],render:()=>m`
         <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      `,decorators:[i(d,"avatar-initials-style")]},r={tags:["!dev"],render:()=>m`
        <dss-avatar size="sm"></dss-avatar>
  <dss-avatar size="md"></dss-avatar>
  <dss-avatar size="lg"></dss-avatar>
  <dss-avatar size="xl"></dss-avatar>
      `,decorators:[i(d,"avatar-icons-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'avatar-image-style')]
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
         <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      \`;
  },
  decorators: [withStyle(wrapperStyle, 'avatar-initials-style')]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-avatar size="sm"></dss-avatar>
  <dss-avatar size="md"></dss-avatar>
  <dss-avatar size="lg"></dss-avatar>
  <dss-avatar size="xl"></dss-avatar>
      \`;
  },
  decorators: [withStyle(wrapperStyle, 'avatar-icons-style')]
}`,...r.parameters?.docs?.source}}};const g=["Playground","Image","Initials","Icons"],u=Object.freeze(Object.defineProperty({__proto__:null,Icons:r,Image:s,Initials:e,Playground:a,__namedExportsOrder:g,default:o},Symbol.toStringTag,{value:"Module"}));export{s as I,a as P,u as S,e as a,r as b};
