import{x as o}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`,Q={title:"Components/Form/Radio Button",argTypes:{label:{name:"Label"},hideLabel:{name:"Amagar Label",control:{type:"boolean"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},d={render:a=>o`
            <dss-form-radio-button
                name="radio-playground"
                value="option-value"
                label="${a.label}"
                ?hideLabel=${a.hideLabel}
                ?checked=${a.checked}
                ?disabled=${a.disabled}
            ></dss-form-radio-button>
    `,args:{label:"Label",hideLabel:!1,checked:!1,disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},t={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-default-style")]},s={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-checked-style")]},l={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" disabled value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-checked-style")]},u={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-horizontal"  label="Radio Group Label" orientation="horizontal">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-horizontal-style")]},i={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button name="myFormRadio1" label="Label" hideLabel value="Option1"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio2" label="Label" hideLabel value="Option2" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio3" label="Label" hideLabel value="Option3" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio4" label="Label" hideLabel value="Option4" checked disabled></dss-form-radio-button>
      </div>
    `,decorators:[e(r,"radio-no-label-style")]},n={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button name="myFormRadio5" label="Label" value="Option5"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio6" label="Label" value="Option6" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio7" label="Label" value="Option7" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio8" label="Label" value="Option8" checked disabled></dss-form-radio-button>
      </div>
    `,decorators:[e(r,"radio-label-style")]},b={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-hide-label" label="Radio Group Label" orientation="vertical" hideLabel>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},m={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-default-value" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},p={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-disabled" label="Radio Group Label" orientation="vertical" value="dewey" disabled>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},c={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const f=document.querySelector("#manual-focus-demo");f&&f.focus()}}></dss-button>
                <dss-form-radio-button-group name="group-focus" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-form-radio-button 
                        id="manual-focus-demo"
                        label="Huey" 
                        value="huey"
                    ></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
            </div>
        `,decorators:[e(r,"radio-focus-style")]};var v,y,g;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-form-radio-button
                name="radio-playground"
                value="option-value"
                label="\${args.label}"
                ?hideLabel=\${args.hideLabel}
                ?checked=\${args.checked}
                ?disabled=\${args.disabled}
            ></dss-form-radio-button>
    \`;
  },
  args: {
    label: 'Label',
    hideLabel: false,
    checked: false,
    disabled: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev'
    }
  }
}`,...(g=(y=d.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,h,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-default-style')]
}`,...(L=(h=t.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var S,R,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-checked-style')]
}`,...(F=(R=s.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var D,k,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" disabled value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-checked-style')]
}`,...(H=(k=l.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var G,O,z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button-group name="group-horizontal"  label="Radio Group Label" orientation="horizontal">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-horizontal-style')]
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var $,x,_;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-radio-button name="myFormRadio1" label="Label" hideLabel value="Option1"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio2" label="Label" hideLabel value="Option2" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio3" label="Label" hideLabel value="Option3" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio4" label="Label" hideLabel value="Option4" checked disabled></dss-form-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-no-label-style')]
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var C,P,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button name="myFormRadio5" label="Label" value="Option5"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio6" label="Label" value="Option6" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio7" label="Label" value="Option7" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio8" label="Label" value="Option8" checked disabled></dss-form-radio-button>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-label-style')]
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,E,j;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-hide-label" label="Radio Group Label" orientation="vertical" hideLabel>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(j=(E=b.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var A,M,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-default-value" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,I,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-disabled" label="Radio Group Label" orientation="vertical" value="dewey" disabled>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(J=(I=p.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,V,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-form-radio-button-group name="group-focus" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-form-radio-button 
                        id="manual-focus-demo"
                        label="Huey" 
                        value="huey"
                    ></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-focus-style')]
}`,...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const U=["Playground","Default","Checked","Disabled","Horizontal","NoLabel","Label","GroupHideLabel","GroupDefaultValue","GroupDisabled","Focus"],Z=Object.freeze(Object.defineProperty({__proto__:null,Checked:s,Default:t,Disabled:l,Focus:c,GroupDefaultValue:m,GroupDisabled:p,GroupHideLabel:b,Horizontal:u,Label:n,NoLabel:i,Playground:d,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{s as C,t as D,c as F,b as G,u as H,n as L,i as N,d as P,Z as S,l as a};
