import{x as s}from"./lit-html-B2eaWknC.js";const J={title:"Components/Custom Table",argTypes:{},parameters:{layout:"centered"}},t={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" showConfig filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
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
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <dss-checkbox>
                            <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                          </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John XXX</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    `},d={tags:["!dev"],render:()=>s`
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>  
      
    
    `},n={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters showConfig pageSizeOptions="[5,10,20]"
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
                  <input id="dropdown1" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown2">Filter 2</label>
                <input id="dropdown2" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown3">Filter 3</label>
                <input id="dropdown3" slot="input" type="text" />
              </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    
    `},e={tags:["!dev"],render:()=>s`
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},a={tags:["!dev"],render:()=>s`
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
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                   <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},l={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
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
          <table class="dss-custom-table">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" showConfig filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
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
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <dss-checkbox>
                            <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                          </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John XXX</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    \`;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var r,b,u;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>  
      
    
    \`;
  }
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,m,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters showConfig pageSizeOptions="[5,10,20]"
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
                  <input id="dropdown1" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown2">Filter 2</label>
                <input id="dropdown2" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown3">Filter 3</label>
                <input id="dropdown3" slot="input" type="text" />
              </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
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
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    
    \`;
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,h,x;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,y,z;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                   <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
}`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var f,w,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
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
          <table class="dss-custom-table">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
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
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="open_in_full" size="md" variant="primary"></dss-icon-button>
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const S=["Playground","RowStyles","AltHeader","HorizontalScroll","StickyColumnsCSS","StickyColumnsLIT"],D=Object.freeze(Object.defineProperty({__proto__:null,AltHeader:n,HorizontalScroll:e,Playground:t,RowStyles:d,StickyColumnsCSS:a,StickyColumnsLIT:l,__namedExportsOrder:S,default:J},Symbol.toStringTag,{value:"Module"}));export{n as A,D as C,e as H,t as P,d as R,a as S,l as a};
