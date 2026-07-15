import{x as e}from"./lit-html-D6cejpwM.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const a=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,K={title:"Components/Form/Checkbox",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}},indeterminate:{name:"Indeterminat",control:{type:"boolean"},if:{arg:"checked",truthy:!1}},validateType:{name:"Tipús validacio (verd)",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:c=>e`
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
    `,decorators:[o(a,"checkbox-no-label-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-checkbox variant="validation" name="checkboxValidate1" label="Label" hideLabel value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate2" label="Label" hideLabel value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate3" label="Label" hideLabel value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate4" label="Label" hideLabel value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate5" label="Label" hideLabel value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox variant="validation" name="checkboxValidate6" label="Label" hideLabel value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    `,decorators:[o(a,"checkbox-type-validation-style")]},d={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox name="checkboxLabel1" label="Label" value="checkbox1"></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel2" label="Label" value="checkbox2" disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel3" label="Label" value="checkbox3" checked></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel4" label="Label" value="checkbox4" checked disabled></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel5" label="Label" value="checkbox5" indeterminate></dss-form-checkbox>
                <dss-form-checkbox name="checkboxLabel6" label="Label" value="checkbox6" indeterminate disabled></dss-form-checkbox>
      </div>
    `,decorators:[o(a,"checkbox-label-style")]},b={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-vertical"  label="Checkbox Group Label" orientation="vertical" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[o(a,"checkbox-group-style")]},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-horizontal" label="Checkbox Group Label" orientation="horizontal" >
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[o(a,"checkbox-group-style")]},h={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-hide-label" label="Checkbox Group Label" orientation="vertical" hideLabel>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[o(a,"checkbox-group-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-default-value" label="Checkbox Group Label" orientation="vertical" value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[o(a,"checkbox-group-style")]},m={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-checkbox-group name="group-disabled" label="Checkbox Group Label" orientation="vertical" disabled value='["dewey"]'>
                    <dss-form-checkbox label="Huey" value="huey"></dss-form-checkbox>
                    <dss-form-checkbox label="Dewey" value="dewey"></dss-form-checkbox>
                    <dss-form-checkbox label="Louie" value="louie"></dss-form-checkbox>
                </dss-form-checkbox-group>
            </div>
        `,decorators:[o(a,"checkbox-group-style")]},n={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const k=document.querySelector("#manual-focus-demo");k&&k.focus()}}></dss-button>
                <dss-form-checkbox 
                    id="manual-focus-demo"
                    name="checkboxValidate1" 
                    label="Label" 
                    value="checkbox1"
                ></dss-form-checkbox>
            </div>
        `,decorators:[o(a,"checkbox-focus-style")]};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var p,v,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var L,g,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var S,G,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var D,H,C;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(H=b.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var F,T,$;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(T=t.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var z,_,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var q,E,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var A,I,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,O,J;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
                <dss-form-checkbox 
                    id="manual-focus-demo"
                    name="checkboxValidate1" 
                    label="Label" 
                    value="checkbox1"
                ></dss-form-checkbox>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'checkbox-focus-style')]
}`,...(J=(O=n.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const X=["Playground","NoLabel","TypeValidation","Label","GroupVertical","GroupHorizontal","GroupHideLabel","GroupDefaultValue","GroupDisabled","Focus"],R=Object.freeze(Object.defineProperty({__proto__:null,Focus:n,GroupDefaultValue:i,GroupDisabled:m,GroupHideLabel:h,GroupHorizontal:t,GroupVertical:b,Label:d,NoLabel:s,Playground:r,TypeValidation:l,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{n as F,b as G,d as L,s as N,r as P,R as S,l as T,t as a,h as b,i as c,m as d};
