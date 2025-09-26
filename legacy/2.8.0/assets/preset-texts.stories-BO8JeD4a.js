import{x as c}from"./lit-html-D6a8R3xZ.js";const d={title:"Collections/Preset Texts",argTypes:{open:{name:"Obert",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},buttonLabelCancel:{name:"Label botó cancel·lar",control:{type:"text"}},buttonLabelSelect:{name:"Label botó seleccionar",control:{type:"text"}},descriptionLabel:{name:"Label descripció",control:{type:"text"}}},parameters:{layout:"centered"}},t={args:{open:!1,title:"Textos predefinits",buttonLabelCancel:"Cancel-lar",buttonLabelSelect:"Seleccionar text",descriptionLabel:"Des del centre de configuració pots editar o eliminar aquest text."},render:e=>{const p=[{title:"Amigdalitis vírica",text:"Inflamació de les amígdales causada per un virus, sovint associada a febre, mal de coll i dificultat per empassar. Pot ser autolimitada o requerir tractament simptomàtic.",category:"Propis"},{title:"Grip A",text:"Infecció viral altament contagiosa que provoca febre alta, calfreds, tos seca, mal de cap i dolors musculars. Es transmet per gotes respiratòries i pot tenir complicacions greus en poblacions de risc.",category:"Propis"},{title:"Grip B",text:"Variant del virus de la grip amb símptomes similars a la grip A, però habitualment amb una propagació més lenta i menys epidèmica. Pot causar febre, tos i fatiga intensa.",category:"Propis"},{title:"Diabetis",text:"Malaltia crònica caracteritzada per un nivell elevat de sucre en sang a causa d’una producció insuficient d’insulina o una resistència a la mateixa. Pot requerir control estricte de la dieta i tractament mèdic.",category:"Propis"},{title:"Grip C",text:"Forma més lleu de la grip que sovint causa símptomes respiratoris lleus, com congestió nasal i malestar general, però sense la gravetat de les altres variants.",category:"Propis"},{title:"Grip D",text:"Variant menys freqüent del virus de la grip que afecta principalment bestiar, però amb potencial de transmissió limitada als humans.",category:"Propis"},{title:"Lorem",text:"Afecció desconeguda amb símptomes inespecífics que poden incloure fatiga, molèsties digestives i lleugera irritació de la pell.",category:"Propis"},{title:"Ipsum",text:"Trastorn general caracteritzat per episodis de cansament extrem, dificultat per concentrar-se i una sensació persistent de malestar físic.",category:"Generals"},{title:"Dolor",text:"Malaltia inflamatòria que pot afectar les articulacions i provocar dolor crònic, especialment en persones d’edat avançada.",category:"Generals"},{title:"Sit Amet",text:"Condició caracteritzada per una irritabilitat extrema i dificultat per controlar les emocions, que pot ser causada per factors neurològics o psicològics.",category:"Generals"}];return c`
        <div id="ONLY-FOR-DEMO" style="min-height:900px;min-width:900px">
            <dss-preset-texts 
                ?open=${e.open} 
                title="${e.title}"
                buttonLabelCancel="${e.buttonLabelCancel}"
                buttonLabelSelect="${e.buttonLabelSelect}"
                descriptionLabel="${e.descriptionLabel}"
                .items="${p}">
            </dss-preset-texts>
        </div>
    `}},a={tags:["!dev"],render:()=>c`
     
    `};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Textos predefinits',
    buttonLabelCancel: 'Cancel-lar',
    buttonLabelSelect: 'Seleccionar text',
    descriptionLabel: 'Des del centre de configuració pots editar o eliminar aquest text.'
  },
  render: (args: any) => {
    const storyItems: any[] = [{
      title: 'Amigdalitis vírica',
      text: 'Inflamació de les amígdales causada per un virus, sovint associada a febre, mal de coll i dificultat per empassar. Pot ser autolimitada o requerir tractament simptomàtic.',
      category: 'Propis'
    }, {
      title: 'Grip A',
      text: 'Infecció viral altament contagiosa que provoca febre alta, calfreds, tos seca, mal de cap i dolors musculars. Es transmet per gotes respiratòries i pot tenir complicacions greus en poblacions de risc.',
      category: 'Propis'
    }, {
      title: 'Grip B',
      text: 'Variant del virus de la grip amb símptomes similars a la grip A, però habitualment amb una propagació més lenta i menys epidèmica. Pot causar febre, tos i fatiga intensa.',
      category: 'Propis'
    }, {
      title: 'Diabetis',
      text: 'Malaltia crònica caracteritzada per un nivell elevat de sucre en sang a causa d’una producció insuficient d’insulina o una resistència a la mateixa. Pot requerir control estricte de la dieta i tractament mèdic.',
      category: 'Propis'
    }, {
      title: 'Grip C',
      text: 'Forma més lleu de la grip que sovint causa símptomes respiratoris lleus, com congestió nasal i malestar general, però sense la gravetat de les altres variants.',
      category: 'Propis'
    }, {
      title: 'Grip D',
      text: 'Variant menys freqüent del virus de la grip que afecta principalment bestiar, però amb potencial de transmissió limitada als humans.',
      category: 'Propis'
    }, {
      title: 'Lorem',
      text: 'Afecció desconeguda amb símptomes inespecífics que poden incloure fatiga, molèsties digestives i lleugera irritació de la pell.',
      category: 'Propis'
    }, {
      title: 'Ipsum',
      text: 'Trastorn general caracteritzat per episodis de cansament extrem, dificultat per concentrar-se i una sensació persistent de malestar físic.',
      category: 'Generals'
    }, {
      title: 'Dolor',
      text: 'Malaltia inflamatòria que pot afectar les articulacions i provocar dolor crònic, especialment en persones d’edat avançada.',
      category: 'Generals'
    }, {
      title: 'Sit Amet',
      text: 'Condició caracteritzada per una irritabilitat extrema i dificultat per controlar les emocions, que pot ser causada per factors neurològics o psicològics.',
      category: 'Generals'
    }];
    return html\`
        <div id="ONLY-FOR-DEMO" style="min-height:900px;min-width:900px">
            <dss-preset-texts 
                ?open=\${args.open} 
                title="\${args.title}"
                buttonLabelCancel="\${args.buttonLabelCancel}"
                buttonLabelSelect="\${args.buttonLabelSelect}"
                descriptionLabel="\${args.descriptionLabel}"
                .items="\${storyItems}">
            </dss-preset-texts>
        </div>
    \`;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,o,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     
    \`;
  }
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const m=["Playground","Box"],g=Object.freeze(Object.defineProperty({__proto__:null,Box:a,Playground:t,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{t as P,g as S};
