import{x as o}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`,V={title:"Components/Form/Radio Button",argTypes:{label:{name:"Label"},hideLabel:{name:"Amagar Label",control:{type:"boolean"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={render:b=>o`
            <dss-form-radio-button
                name="radio-playground"
                value="option-value"
                label="${b.label}"
                ?hideLabel=${b.hideLabel}
                ?checked=${b.checked}
                ?disabled=${b.disabled}
            ></dss-form-radio-button>
    `,args:{label:"Label",hideLabel:!1,checked:!1,disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-5&m=dev"}}},d={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-form-radio-button name="myFormRadio1" label="Label" hideLabel value="Option1"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio2" label="Label" hideLabel value="Option2" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio3" label="Label" hideLabel value="Option3" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio4" label="Label" hideLabel value="Option4" checked disabled></dss-form-radio-button>
      </div>
    `,decorators:[e(r,"radio-no-label-style")]},t={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button name="myFormRadio5" label="Label" value="Option5"></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio6" label="Label" value="Option6" disabled></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio7" label="Label" value="Option7" checked></dss-form-radio-button>
                <dss-form-radio-button name="myFormRadio8" label="Label" value="Option8" checked disabled></dss-form-radio-button>
      </div>
    `,decorators:[e(r,"radio-label-style")]},s={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" orientation="vertical" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},l={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-horizontal" label="Radio Group Label" orientation="horizontal" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},i={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-hide-label" label="Radio Group Label" orientation="vertical" hideLabel>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},u={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-default-value" label="Radio Group Label" orientation="vertical" value="dewey">
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]},n={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-disabled" label="Radio Group Label" orientation="vertical" value="dewey" disabled>
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    `,decorators:[e(r,"radio-group-style")]};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,v,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,h,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var L,S,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-vertical"  label="Radio Group Label" orientation="vertical" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var F,G,O;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-radio-button-group name="group-horizontal" label="Radio Group Label" orientation="horizontal" >
                    <dss-form-radio-button label="Huey" value="huey"></dss-form-radio-button>
                    <dss-form-radio-button label="Dewey" value="dewey"></dss-form-radio-button>
                    <dss-form-radio-button label="Louie" value="louie"></dss-form-radio-button>
                </dss-form-radio-button-group>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'radio-group-style')]
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var k,D,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(D=i.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var z,$,x;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=($=u.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var _,P,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const j=["Playground","NoLabel","Label","GroupVertical","GroupHorizontal","GroupHideLabel","GroupDefaultValue","GroupDisabled"],E=Object.freeze(Object.defineProperty({__proto__:null,GroupDefaultValue:u,GroupDisabled:n,GroupHideLabel:i,GroupHorizontal:l,GroupVertical:s,Label:t,NoLabel:d,Playground:a,__namedExportsOrder:j,default:V},Symbol.toStringTag,{value:"Module"}));export{s as G,t as L,d as N,a as P,E as S,l as a,i as b,u as c,n as d};
