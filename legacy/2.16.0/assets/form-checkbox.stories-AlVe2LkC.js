import{x as e}from"./lit-html-D6cejpwM.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const o=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,N={title:"Components/Form/Checkbox",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},indeterminate:{name:"Indeterminat",control:{type:"boolean"},if:{arg:"checked",truthy:!1}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:c=>e`
            <dss-form-checkbox 
                variant="${c.validateType?"validation":"default"}"
                name="checkbox-playground" 
                label="Label" 
                ?hideLabel="${c.hideLabel}"
                ?checked="${c.checked}"
                ?disabled="${c.disabled}"
                ?indeterminate="${c.indeterminate}"
                value="playground-value"
            ></dss-form-checkbox>
    `,args:{validateType:!1,label:"Label",hideLabel:!1,disabled:!1,checked:!1,indeterminate:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev"}}},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-checkbox name="checkbox1" label="Label" hideLabel value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox name="checkbox2" label="Label" hideLabel value="checkbox1" disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkbox3" label="Label" hideLabel value="checkbox1" checked></dss-form-checkbox>
                <dss-form-checkbox name="checkbox4" label="Label" hideLabel value="checkbox1" checked disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkbox5" label="Label" hideLabel value="checkbox1" indeterminate></dss-form-checkbox>
                <dss-form-checkbox name="checkbox6" label="Label" hideLabel value="checkbox1" indeterminate disabled></dss-form-checkbox>
      </div>
    `,decorators:[a(o,"checkbox-no-label-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-checkbox variant="validation" name="checkboxValidate1" label="Label" hideLabel value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate2" label="Label" hideLabel value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate3" label="Label" hideLabel value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate4" label="Label" hideLabel value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate5" label="Label" hideLabel value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate6" label="Label" hideLabel value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    `,decorators:[a(o,"checkbox-type-validation-style")]},b={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox name="checkboxLabel1" label="Label" value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel2" label="Label" value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel3" label="Label" value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel4" label="Label" value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel5" label="Label" value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel6" label="Label" value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    `,decorators:[a(o,"checkbox-label-style")]},d={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-vertical"  label="Checkbox Group Label" orientation="vertical" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[a(o,"checkbox-group-style")]},h={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-horizontal" label="Checkbox Group Label" orientation="horizontal" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[a(o,"checkbox-group-style")]},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-hide-label" label="Checkbox Group Label" orientation="vertical" hideLabel>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[a(o,"checkbox-group-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-default-value" label="Checkbox Group Label" orientation="vertical" value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[a(o,"checkbox-group-style")]},m={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-disabled" label="Checkbox Group Label" orientation="vertical" disabled value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[a(o,"checkbox-group-style")]};var n,k,x;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-form-checkbox 
                variant="\${args.validateType ? \`validation\` : 'default'}"
                name="checkbox-playground" 
                label="Label" 
                ?hideLabel="\${args.hideLabel}"
                ?checked="\${args.checked}"
                ?disabled="\${args.disabled}"
                ?indeterminate="\${args.indeterminate}"
                value="playground-value"
            ></dss-form-checkbox>
    \`;
  },
  args: {
    validateType: false,
    label: 'Label',
    hideLabel: false,
    disabled: false,
    checked: false,
    indeterminate: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3-23&m=dev'
    }
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var u,p,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-checkbox name="checkbox1" label="Label" hideLabel value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox name="checkbox2" label="Label" hideLabel value="checkbox1" disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkbox3" label="Label" hideLabel value="checkbox1" checked></dss-form-checkbox>
                <dss-form-checkbox name="checkbox4" label="Label" hideLabel value="checkbox1" checked disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkbox5" label="Label" hideLabel value="checkbox1" indeterminate></dss-form-checkbox>
                <dss-form-checkbox name="checkbox6" label="Label" hideLabel value="checkbox1" indeterminate disabled></dss-form-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-no-label-style')]
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,L,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-checkbox variant="validation" name="checkboxValidate1" label="Label" hideLabel value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate2" label="Label" hideLabel value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate3" label="Label" hideLabel value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate4" label="Label" hideLabel value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate5" label="Label" hideLabel value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate6" label="Label" hideLabel value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-type-validation-style')]
}`,...(y=(L=l.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var g,w,S;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox name="checkboxLabel1" label="Label" value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel2" label="Label" value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel3" label="Label" value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel4" label="Label" value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel5" label="Label" value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel6" label="Label" value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-label-style')]
}`,...(S=(w=b.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var G,V,D;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-vertical"  label="Checkbox Group Label" orientation="vertical" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var H,C,T;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-horizontal" label="Checkbox Group Label" orientation="horizontal" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...(T=(C=h.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var $,z,_;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-hide-label" label="Checkbox Group Label" orientation="vertical" hideLabel>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...(_=(z=t.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var P,F,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-default-value" label="Checkbox Group Label" orientation="vertical" value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var A,E,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-disabled" label="Checkbox Group Label" orientation="vertical" disabled value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-group-style')]
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const O=["Playground","NoLabel","TypeValidation","Label","GroupVertical","GroupHorizontal","GroupHideLabel","GroupDefaultValue","GroupDisabled"],K=Object.freeze(Object.defineProperty({__proto__:null,GroupDefaultValue:i,GroupDisabled:m,GroupHideLabel:t,GroupHorizontal:h,GroupVertical:d,Label:b,NoLabel:s,Playground:r,TypeValidation:l,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{d as G,b as L,s as N,r as P,K as S,l as T,h as a,t as b,i as c,m as d};
