import{x as e}from"./iframe-BJ1gb8kz.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const t=`
 .none {
        display:none;
    }
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .wrapper + .wrapper {
        margin-top: 16px;
    }

    .wrapper--tooltip {
        height: 200px;
    }
`,c={title:"Components/Link",argTypes:{style:{name:"Estil",control:{type:"radio"},options:["inline","standalone"]},size:{name:"Mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"style",eq:"standalone"}},variant:{name:"Variant",control:{type:"select"},options:["default","primary","secondary"],if:{arg:"style",eq:"standalone"}},label:{name:"Text"},href:{name:"Href"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},iconSize:{name:"Mida de la icona",control:{type:"select"},options:["sm","md","lg","xl"],if:{arg:"style",eq:"inline"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},target:{name:"Target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},fontSize:{name:"Font-size",if:{arg:"style",eq:"inline"}},fontWeight:{name:"Font-weight",control:{type:"select"},options:["regular","semibold","bold"],if:{arg:"style",eq:"inline"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev"}},args:{style:"inline",size:"md",variant:"default",label:"Anchor link",href:"#",showIcon:!0,icon:"add_box",iconSize:"sm",iconPosition:"left",disabled:!1,target:"_self",fontSize:"14px",fontWeight:"semibold"},render:i=>e`
            ${i.style==="inline"?e`
                    <dss-link 
                        label="${i.label}" 
                        href="${i.url}" 
                        target="${i.target}" 
                        .icon="${i.showIcon?i.icon:void 0}" 
                        iconSize="${i.iconSize}" 
                        iconPosition="${i.iconPosition}" 
                        fontSize="${i.fontSize}" 
                        fontWeight="${i.fontWeight}" 
                        ?disabled="${i.disabled}">
                    </dss-link>
     
                `:e`
      
                <dss-link 
                        .size="${i.size}"
                        .variant="${i.variant}"
                        label="${i.label}" 
                        href="${i.url}" 
                        target="${i.target}" 
                        .icon="${i.showIcon?i.icon:void 0}" 
                        iconPosition="${i.iconPosition}" 
                        ?disabled="${i.disabled}">
                    </dss-link>

                `}
    `},n={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-typography tag="p" variant="body-3">
                    Lorem ipsum dolor <dss-link label="inline link" href="#"></dss-link> sit amet, consectetur adipiscing elit.
                </dss-typography>
            </div>
            <div class="wrapper">
                <dss-link size="md" label="Default link" href="#"></dss-link>
                <dss-link size="md" variant="primary" label="Primary link" href="#"></dss-link>
                <dss-link size="md" variant="secondary" label="Secondary link" href="#"></dss-link>
            </div>
        `,decorators:[r(t,"link-default-style")]},l={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular" icon="add_box"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold" icon="add_box"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular" icon="add_box" iconPosition="right"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold" icon="add_box" iconPosition="right"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold" icon="add_box" iconPosition="right"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Font 12px icon sm" iconSize="sm" href="#" fontSize="12px" fontWeight="regular" icon="add_box"></dss-link>
                <dss-link label="Font 14px icon md" iconSize="md" href="#" fontSize="14px" fontWeight="semibold" icon="add_box"></dss-link>
                <dss-link label="Font 16px icon lg" iconSize="lg" href="#" fontSize="16px" fontWeight="bold" icon="add_box"></dss-link>
            </div>
            
    `,decorators:[r(t,"link-font-variants-style")]},a={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-link size="sm" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="sm" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="sm" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link size="md" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="md" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="md" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link size="lg" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="lg" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="lg" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
    `,decorators:[r(t,"link-disabled-style")]},d={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-link variant="default" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
        <dss-link variant="primary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
          <dss-link variant="secondary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
            </div>
    `,decorators:[r(t,"link-disabled-style")]},o={tags:["!dev"],render:()=>e`
            <div class="wrapper wrapper--tooltip">
                <dss-link variant="default" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
        <dss-link variant="primary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
          <dss-link variant="secondary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
            </div>
    `,decorators:[r(t,"link-disabled-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev'
    }
  },
  args: {
    style: 'inline',
    size: 'md',
    variant: 'default',
    label: 'Anchor link',
    href: '#',
    showIcon: true,
    icon: 'add_box',
    iconSize: 'sm',
    iconPosition: 'left',
    disabled: false,
    target: '_self',
    fontSize: '14px',
    fontWeight: 'semibold'
  },
  render: (args: any) => {
    return html\`
            \${args.style === 'inline' ? html\`
                    <dss-link 
                        label="\${args.label}" 
                        href="\${args.url}" 
                        target="\${args.target}" 
                        .icon="\${args.showIcon ? args.icon : undefined}" 
                        iconSize="\${args.iconSize}" 
                        iconPosition="\${args.iconPosition}" 
                        fontSize="\${args.fontSize}" 
                        fontWeight="\${args.fontWeight}" 
                        ?disabled="\${args.disabled}">
                    </dss-link>
     
                \` : html\`
      
                <dss-link 
                        .size="\${args.size}"
                        .variant="\${args.variant}"
                        label="\${args.label}" 
                        href="\${args.url}" 
                        target="\${args.target}" 
                        .icon="\${args.showIcon ? args.icon : undefined}" 
                        iconPosition="\${args.iconPosition}" 
                        ?disabled="\${args.disabled}">
                    </dss-link>

                \`}
    \`;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-typography tag="p" variant="body-3">
                    Lorem ipsum dolor <dss-link label="inline link" href="#"></dss-link> sit amet, consectetur adipiscing elit.
                </dss-typography>
            </div>
            <div class="wrapper">
                <dss-link size="md" label="Default link" href="#"></dss-link>
                <dss-link size="md" variant="primary" label="Primary link" href="#"></dss-link>
                <dss-link size="md" variant="secondary" label="Secondary link" href="#"></dss-link>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-default-style')]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular" icon="add_box"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold" icon="add_box"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular" icon="add_box" iconPosition="right"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold" icon="add_box" iconPosition="right"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold" icon="add_box" iconPosition="right"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link label="Font 12px icon sm" iconSize="sm" href="#" fontSize="12px" fontWeight="regular" icon="add_box"></dss-link>
                <dss-link label="Font 14px icon md" iconSize="md" href="#" fontSize="14px" fontWeight="semibold" icon="add_box"></dss-link>
                <dss-link label="Font 16px icon lg" iconSize="lg" href="#" fontSize="16px" fontWeight="bold" icon="add_box"></dss-link>
            </div>
            
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-font-variants-style')]
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link size="sm" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="sm" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="sm" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link size="md" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="md" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="md" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
                <dss-link size="lg" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="lg" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
                <dss-link size="lg" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link variant="default" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
        <dss-link variant="primary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
          <dss-link variant="secondary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper wrapper--tooltip">
                <dss-link variant="default" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
        <dss-link variant="primary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
          <dss-link variant="secondary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...o.parameters?.docs?.source}}};const p=["Playground","Mode","CustomLink","Sizes","Disabled","MaxWidth"],m=Object.freeze(Object.defineProperty({__proto__:null,CustomLink:l,Disabled:d,MaxWidth:o,Mode:n,Playground:s,Sizes:a,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{l as C,d as D,n as M,s as P,m as S,a,o as b};
