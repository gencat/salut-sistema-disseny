import{x as a}from"./lit-html-CeYizTxc.js";const w={title:"Components/Custom Table",argTypes:{},parameters:{layout:"centered"}},s={tags:["!dev"],render:()=>a`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>
    `},t={tags:["!dev"],render:()=>a`
      <div class="table-wrapper">
        <dss-custom-table hideHeader hidePaginator
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--selected">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled/>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary" disabled>
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled/>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary" disabled>
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--expanded">
                    <td class="dss-td" colspan="7">
                      Row expanded.
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      End row.
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>  
      
    
    `},d={tags:["!dev"],render:()=>a`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-filters" slot="filters">
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                      <label slot="label" for="dropdown1">Filter 1</label>
                      <input id="dropdown1" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                    <label slot="label" for="dropdown2">Filter 2</label>
                    <input id="dropdown2" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                    <label slot="label" for="dropdown3">Filter 3</label>
                    <input id="dropdown3" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>
    
    `},n={tags:["!dev"],render:()=>a`
      <div class="table-wrapper">
     <dss-custom-table tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},e={tags:["!dev"],render:()=>a`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width dss-custom-table--sticky-columns-radioselect">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                      type="radio"
                      name="custom-table-row"
                      class="dss-radio"
                      aria-label="Seleccionar la fila"
                    />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `};var o,l,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>
    \`;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,b,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table hideHeader hidePaginator
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--selected">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled/>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary" disabled>
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" disabled/>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary" disabled>
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md" disabled>
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--expanded">
                    <td class="dss-td" colspan="7">
                      Row expanded.
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      End row.
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>  
      
    
    \`;
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var r,g,p;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-filters" slot="filters">
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                      <label slot="label" for="dropdown1">Filter 1</label>
                      <input id="dropdown1" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                    <label slot="label" for="dropdown2">Filter 2</label>
                    <input id="dropdown2" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
                  <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                    <label slot="label" for="dropdown3">Filter 3</label>
                    <input id="dropdown3" slot="input" type="text" class="dss-input" />
                  </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <input
                            type="checkbox"
                            class="dss-checkbox dss-checkbox--multiselect"
                            aria-label="Seleccionar la fila"
                          />
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <button type="button" class="dss-button dss-button--md dss-button--secondary">
                        Button
                      </button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">more_vert</span>
                        </button>
                        <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                          <span class="dss-icon">open_in_full</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <button type="button" class="dss-button dss-button--md dss-button--subtle">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--secondary">Button</button>
              <button type="button" class="dss-button dss-button--md dss-button--primary">Button</button>
            </div>
          </dss-custom-table>
      </div>
    
    \`;
  }
}`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    \`;
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,_,y;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width dss-custom-table--sticky-columns-radioselect">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                      type="radio"
                      name="custom-table-row"
                      class="dss-radio"
                      aria-label="Seleccionar la fila"
                    />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <i class="dss-icon dss-icon--md dss-td-content__icon">add_box</i>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                       <input
                        type="radio"
                        name="custom-table-row"
                        class="dss-radio"
                        aria-label="Seleccionar la fila"
                      />
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <input type="checkbox" class="dss-checkbox dss-checkbox--validate" />
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <button type="button" class="dss-button dss-button--md dss-button--secondary">
                    Button
                  </button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">more_vert</span>
                    </button>
                    <button class="dss-icon-button dss-icon-button--primary dss-icon-button--md">
                      <span class="dss-icon">open_in_full</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    \`;
  }
}`,...(y=(_=e.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const f=["Playground","RowStyles","AltHeader","HorizontalScroll","StickyColumns"],z=Object.freeze(Object.defineProperty({__proto__:null,AltHeader:d,HorizontalScroll:n,Playground:s,RowStyles:t,StickyColumns:e,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{d as A,z as C,n as H,s as P,t as R,e as S};
