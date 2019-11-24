<template>
    <div class="row wrapper wrapper-content">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Tabla</h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-wrench"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#" class="dropdown-item">Config option 1</a>
                            </li>
                            <li><a href="#" class="dropdown-item">Config option 2</a>
                            </li>
                        </ul>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <div class="ibox-content float-e-margins">
                    <div class="row">
                      <client-only>
                        <v-client-table id="idtabla" name="idtabla" :data="tableData" :columns="columns" :options="options"></v-client-table>
                      </client-only>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        data() {
            return {
              columns: ['id', 'name', 'age'],
              tableData: [
                  { id: 1, name: "John", age: "20" },
                  { id: 2, name: "Jane", age: "24" },
                  { id: 3, name: "Susan", age: "16" },
                  { id: 4, name: "Chris", age: "55" },
                  { id: 5, name: "Dan", age: "40" }
              ],
              options: {
                  // see the options API
              }
            }
        },
        mounted() {
            
        },
        beforeDestroy() {
        }
    }
</script>

<style lang="scss" scoped>
    
</style>