import"./lit-element-BL4lq474.js";import{x as m}from"./lit-html-D6cejpwM.js";import{a as n}from"./avatar-doctor-BBv5l1RE.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const o=`
 .innerZoomElementWrapper #root-inner {
        display: flex;
        align-items: center;
        gap: 16px;  
    }
`,x={title:"Components/Avatar",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg","xl"]},name:{name:"Nom",control:{type:"text"}},surname:{name:"Cognom",control:{type:"text"}},imageUrl:{name:"Imatge",control:{type:"text"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=285-1631&m=dev"}},args:{size:"md",name:"Nom",surname:"Cognom",imageUrl:""},render:t=>m`<dss-avatar
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
    `,decorators:[i(o,"avatar-image-style")]},e={tags:["!dev"],render:()=>m`
         <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
  <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      `,decorators:[i(o,"avatar-initials-style")]},r={tags:["!dev"],render:()=>m`
        <dss-avatar size="sm"></dss-avatar>
  <dss-avatar size="md"></dss-avatar>
  <dss-avatar size="lg"></dss-avatar>
  <dss-avatar size="xl"></dss-avatar>
      `,decorators:[i(o,"avatar-icons-style")]};var d,g,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var v,c,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,y,S;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(y=e.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,D,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const $=["Playground","Image","Initials","Icons"],_=Object.freeze(Object.defineProperty({__proto__:null,Icons:r,Image:s,Initials:e,Playground:a,__namedExportsOrder:$,default:x},Symbol.toStringTag,{value:"Module"}));export{s as I,a as P,_ as S,e as a,r as b};
