import{x as i}from"./iframe-BkFThJ1w.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const n=`
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
`,b={title:"Components/Link",argTypes:{style:{name:"Estil",control:{type:"radio"},options:["inline","standalone"]},size:{name:"Mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"style",eq:"standalone"}},variant:{name:"Variant",control:{type:"select"},options:["primary","secondary","subtle"],if:{arg:"style",eq:"standalone"}},label:{name:"Text"},href:{name:"Href"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},iconSize:{name:"Mida de la icona",control:{type:"select"},options:["sm","md","lg","xl"],if:{arg:"style",eq:"inline"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},target:{name:"Target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},fontSize:{name:"Font-size",if:{arg:"style",eq:"inline"}},fontWeight:{name:"Font-weight",control:{type:"select"},options:["regular","semibold","bold"],if:{arg:"style",eq:"inline"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev"}},args:{style:"inline",size:"md",variant:"primary",label:"Anchor link",href:"#",showIcon:!0,icon:"add_box",iconSize:"sm",iconPosition:"left",disabled:!1,target:"_self",fontSize:"14px",fontWeight:"semibold"},render:e=>i`
            ${e.style==="inline"?i`
                    <dss-link 
                        label="${e.label}" 
                        href="${e.url}" 
                        target="${e.target}" 
                        .icon="${e.showIcon?e.icon:void 0}" 
                        iconSize="${e.iconSize}" 
                        iconPosition="${e.iconPosition}" 
                        fontSize="${e.fontSize}" 
                        fontWeight="${e.fontWeight}" 
                        ?disabled="${e.disabled}">
                    </dss-link>
     
                `:i`
      
                <dss-link 
                        .size="${e.size}"
                        .variant="${e.variant}"
                        label="${e.label}" 
                        href="${e.url}" 
                        target="${e.target}" 
                        .icon="${e.showIcon?e.icon:void 0}" 
                        iconPosition="${e.iconPosition}" 
                        ?disabled="${e.disabled}">
                    </dss-link>

                `}
    `},l={tags:["!dev"],render:()=>i`
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
        `,decorators:[s(n,"link-default-style")]},r={tags:["!dev"],render:()=>i`
            <div class="wrapper">
                <dss-typography tag="p" variant="body-3">
                    Lorem ipsum dolor <dss-link label="inline link" href="#"></dss-link> sit amet, consectetur adipiscing elit.
                </dss-typography>
            </div>
        `,decorators:[s(n,"link-mode-inline-style")]},d={tags:["!dev"],render:()=>i`
            <div class="wrapper">
                <dss-link size="md" variant="primary" label="Primary link" href="#"></dss-link>
                <dss-link size="md" variant="secondary" label="Secondary link" href="#"></dss-link>
                <dss-link size="md" variant="subtle" label="Subtle link" href="#"></dss-link>
            </div>
        `,decorators:[s(n,"link-mode-standalone-style")]},o={tags:["!dev"],render:()=>i`
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
            
    `,decorators:[s(n,"link-font-variants-style")]},t={tags:["!dev"],render:()=>i`
            <div class="wrapper">
            <dss-link size="sm" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="sm" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="sm" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
            <dss-link size="md" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="md" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="md" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
            <dss-link size="lg" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="lg" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="lg" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
    `,decorators:[s(n,"link-disabled-style")]},c={tags:["!dev"],render:()=>i`
            <div class="wrapper">
                <dss-link variant="primary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
                <dss-link variant="secondary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
                <dss-link variant="subtle" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
            </div>
    `,decorators:[s(n,"link-disabled-style")]},p={tags:["!dev"],render:()=>i`
            <div class="wrapper wrapper--tooltip">
                <dss-link variant="primary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
                <dss-link variant="secondary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
                <dss-link variant="subtle" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
            </div>
    `,decorators:[s(n,"link-disabled-style")]},k={tags:["!dev"],render:()=>i`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const m=document.querySelector("#manual-focus-demo");m&&m.focus()}} variant="secondary"></dss-button>
                <dss-link 
                    id="manual-focus-demo"
                    variant="primary" 
                    size="md" 
                    label="Anchor link" 
                    icon="add_box"
                ></dss-link>
            </div>
        `,decorators:[s(n,"link-focus-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev'
    }
  },
  args: {
    style: 'inline',
    size: 'md',
    variant: 'primary',
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-typography tag="p" variant="body-3">
                    Lorem ipsum dolor <dss-link label="inline link" href="#"></dss-link> sit amet, consectetur adipiscing elit.
                </dss-typography>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-mode-inline-style')]
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link size="md" variant="primary" label="Primary link" href="#"></dss-link>
                <dss-link size="md" variant="secondary" label="Secondary link" href="#"></dss-link>
                <dss-link size="md" variant="subtle" label="Subtle link" href="#"></dss-link>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-mode-standalone-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
            <dss-link size="sm" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="sm" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="sm" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
            <dss-link size="md" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="md" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="md" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
            <div class="wrapper">
            <dss-link size="lg" variant="primary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="lg" variant="secondary" label="Link" href="#" icon="add_box"></dss-link>
            <dss-link size="lg" variant="subtle" label="Link" href="#" icon="add_box"></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link variant="primary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
                <dss-link variant="secondary" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
                <dss-link variant="subtle" size="md" label="Anchor link" icon="add_box" disabled></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper wrapper--tooltip">
                <dss-link variant="primary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
                <dss-link variant="secondary" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
                <dss-link variant="subtle" size="md" label="Això és una etiqueta amb un text llarg que supera el límit d’amplada." icon="add_box"></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus} variant="secondary"></dss-button>
                <dss-link 
                    id="manual-focus-demo"
                    variant="primary" 
                    size="md" 
                    label="Anchor link" 
                    icon="add_box"
                ></dss-link>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-focus-style')]
}`,...k.parameters?.docs?.source}}};const f=["Playground","Mode","ModeInline","ModeStandalone","CustomLink","Sizes","Disabled","MaxWidth","Focus"],g=Object.freeze(Object.defineProperty({__proto__:null,CustomLink:o,Disabled:c,Focus:k,MaxWidth:p,Mode:l,ModeInline:r,ModeStandalone:d,Playground:a,Sizes:t,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{o as C,c as D,k as F,r as M,a as P,g as S,d as a,t as b,p as c};
