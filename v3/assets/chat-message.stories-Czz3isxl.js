import{x as a}from"./iframe-CdZ_4rdx.js";import{a as l}from"./avatar-doctor-BBv5l1RE.js";const d={title:"Components/Chat Message",argTypes:{text:{name:"Missatge",control:{type:"text"}},date:{name:"Data",control:{type:"text"}},username:{name:"Nom",control:{type:"text"}},who:{name:"Identitat",control:{type:"radio"},options:["patient","doctor"]},showAttachments:{name:"Mostrar fitxers adjunts",control:{type:"boolean"}},showAvatarImage:{name:"Mostrar imatge de avatar",control:{type:"boolean"}},avatarImageURL:{name:"Imatge de avatar URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!0}},avatarName:{name:"Avatar: Imatge URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}},avatarLastname:{name:"Avatar: Cognom",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1924-354&m=dev"}},args:{text:"Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.",date:"16/08/2023 02:59",username:"Nom del patient o professional - Rol",who:"patient",showAvatarImage:!1,avatarImageURL:l,avatarName:"John",avatarLastname:"Doe",showAttachments:!1},render:e=>{const c=a`
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
            </div>
        `;let u=a``;return e.showAvatarImage?u=a`
        <dss-chat-message 
            who="${e.who}"
            avatarImageUrl="${e.avatarImageURL}"
            username="${e.username}"
            message="${e.text}"
            date="${e.date}">
            ${e.showAttachments?c:null}
        </dss-chat-message>
      `:u=a`
        <dss-chat-message 
            who="${e.who}"
            avatarName="${e.avatarName}" 
            avatarSurname="${e.avatarLastname}" 
            username="${e.username}"
            message="${e.text}"
            date="${e.date}">
            ${e.showAttachments?c:null}
        </dss-chat-message>
      `,a`
      <div style="width:600px">
        ${u}
      </div>
    `}},t={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
              who="doctor" 
              avatarImageUrl="${l}" 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>`},n={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=${l} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
      </div>`},i={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`},r={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
              who="patient" 
              avatarImageUrl=${l} 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>`},o={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`},m={tags:["!dev"],render:()=>a`
      <div style="width:600px">
      <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="22/04/24 10:21h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=${l} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe"
            username="Nom del patient"
            date="22/04/24 10:23h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1924-354&m=dev'
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.',
    date: '16/08/2023 02:59',
    username: 'Nom del patient o professional - Rol',
    who: 'patient',
    showAvatarImage: false,
    avatarImageURL: avatarDoctor,
    avatarName: 'John',
    avatarLastname: 'Doe',
    showAttachments: false
  },
  render: args => {
    const slotAttachments = html\`
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
            </div>
        \`;
    let messageEl = html\`\`;
    args.showAvatarImage ? messageEl = html\`
        <dss-chat-message 
            who="\${args.who}"
            avatarImageUrl="\${args.avatarImageURL}"
            username="\${args.username}"
            message="\${args.text}"
            date="\${args.date}">
            \${args.showAttachments ? slotAttachments : null}
        </dss-chat-message>
      \` : messageEl = html\`
        <dss-chat-message 
            who="\${args.who}"
            avatarName="\${args.avatarName}" 
            avatarSurname="\${args.avatarLastname}" 
            username="\${args.username}"
            message="\${args.text}"
            date="\${args.date}">
            \${args.showAttachments ? slotAttachments : null}
        </dss-chat-message>
      \`;
    return html\`
      <div style="width:600px">
        \${messageEl}
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
              who="doctor" 
              avatarImageUrl="\${avatarDoctor}" 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>\`;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=\${avatarDoctor} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
      </div>\`;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
              who="patient" 
              avatarImageUrl=\${avatarDoctor} 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>\`;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
      <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="22/04/24 10:21h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=\${avatarDoctor} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe"
            username="Nom del patient"
            date="22/04/24 10:23h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...m.parameters?.docs?.source}}};const p=["Playground","SentByDoctor","Attachments","SentByPatient","ImageAvatar","NameAvatar","FullChat"],v=Object.freeze(Object.defineProperty({__proto__:null,Attachments:n,FullChat:m,ImageAvatar:r,NameAvatar:o,Playground:s,SentByDoctor:t,SentByPatient:i,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{n as A,m as F,r as I,s as P,v as S,i as a,t as b};
