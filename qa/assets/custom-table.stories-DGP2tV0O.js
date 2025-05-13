import{x as s}from"./lit-html-D6a8R3xZ.js";const bs={title:"Components/Custom Table",argTypes:{},parameters:{layout:"centered"}},d={tags:["!dev"],render:()=>s`
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
    
    `},a={tags:["!dev"],render:()=>s`
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},i={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},o={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `},l={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--height-sm">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},c={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--height-auto">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Awesome Lastname Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},r={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},b={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},g={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold" colspan="6">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_less" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Ipsum</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},u={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},m={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
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
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},v={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},p={tags:["!dev"],render:()=>{const _=[{column:"name",label:"Nom",sortType:"string"},{column:"age",label:"Edat"},{column:"badge",label:"Estat",align:"center"},{column:"result",label:"Resultat",align:"center"},{column:"review",label:"Revisat",align:"center"},{column:"button",label:""},{column:"actions",label:""}];return _[1].renderTemplate=()=>{const x=document.createElement("div");x.style.maxWidth="100%";const h=document.createElement("dss-datepicker");h.setAttribute("inputSize","sm"),h.style.width="100%";const t=document.createElement("input");return t.setAttribute("slot","input"),t.setAttribute("id","myDatepicker"),t.setAttribute("type","text"),t.setAttribute("class","dss-input"),t.setAttribute("aria-label","Age picker"),h.appendChild(t),x.appendChild(h),x},s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          .columnsHeader=${_} 
          data='[
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `}};var y,z,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,f,J;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(J=(f=n.parameters)==null?void 0:f.docs)==null?void 0:J.source}}};var S,D,B;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(B=(D=e.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var T,V,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(E=(V=a.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var M,L,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,R,O;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var C,A,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--height-sm">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var N,K,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--height-auto">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Awesome Lastname Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(U=(K=c.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var P,I,X;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(X=(I=r.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var j,G,$;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...($=(G=b.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var q,Q,Y;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold" colspan="6">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_less" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Ipsum</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ss,ts;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(ts=(ss=u.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var ds,ns,es;m.parameters={...m.parameters,docs:{...(ds=m.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
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
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(es=(ns=m.parameters)==null?void 0:ns.docs)==null?void 0:es.source}}};var as,is,os;v.parameters={...v.parameters,docs:{...(as=v.parameters)==null?void 0:as.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
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
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(os=(is=v.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var ls,cs,rs;p.parameters={...p.parameters,docs:{...(ls=p.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const columnsHeader = [{
      column: 'name',
      label: 'Nom',
      sortType: 'string'
    }, {
      column: 'age',
      label: 'Edat'
    }, {
      column: 'badge',
      label: 'Estat',
      align: 'center'
    }, {
      column: 'result',
      label: 'Resultat',
      align: 'center'
    }, {
      column: 'review',
      label: 'Revisat',
      align: 'center'
    }, {
      column: 'button',
      label: ''
    }, {
      column: 'actions',
      label: ''
    }];
    columnsHeader[1].renderTemplate = () => {
      const container = document.createElement('div');
      container.style.maxWidth = '100%';
      const datepicker = document.createElement('dss-datepicker');
      datepicker.setAttribute('inputSize', 'sm');
      datepicker.style.width = '100%';
      const input = document.createElement('input');
      input.setAttribute('slot', 'input');
      input.setAttribute('id', 'myDatepicker');
      input.setAttribute('type', 'text');
      input.setAttribute('class', 'dss-input');
      input.setAttribute('aria-label', 'Age picker');
      datepicker.appendChild(input);
      container.appendChild(datepicker);
      return container;
    };
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          .columnsHeader=\${columnsHeader} 
          data='[
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
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
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
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
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
}`,...(rs=(cs=p.parameters)==null?void 0:cs.docs)==null?void 0:rs.source}}};const gs=["Playground","RowStyles","AltHeader","HorizontalScroll","StickyColumnsCSS","StickyColumnsLIT","TableStylesHeightSM","TableStylesHeightAuto","TableStylesGrid","TableStylesCustomDivider","TableStylesNestedRows","TableStylesHighlight","TableStylesCellHover","TableStylesCornerAction","TableStylesCustomTh"],ms=Object.freeze(Object.defineProperty({__proto__:null,AltHeader:e,HorizontalScroll:a,Playground:d,RowStyles:n,StickyColumnsCSS:i,StickyColumnsLIT:o,TableStylesCellHover:m,TableStylesCornerAction:v,TableStylesCustomDivider:b,TableStylesCustomTh:p,TableStylesGrid:r,TableStylesHeightAuto:c,TableStylesHeightSM:l,TableStylesHighlight:u,TableStylesNestedRows:g,__namedExportsOrder:gs,default:bs},Symbol.toStringTag,{value:"Module"}));export{e as A,ms as C,a as H,d as P,n as R,i as S,l as T,o as a,c as b,r as c,b as d,g as e,u as f,m as g,v as h,p as i};
