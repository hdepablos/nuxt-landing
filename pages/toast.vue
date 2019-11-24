<template>
    <div class="row wrapper wrapper-content">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Colors buttons</h5>
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
                    <client-only>
                        <notifications group="foot" class="notifications-vue"></notifications>
                    </client-only>
                    
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Use any of the available button classes to quickly create a styled button.
                            </p>

                            <h3 class="font-bold">
                                Normal buttons
                            </h3>
                            <p>
                                <button type="button" class="btn btn-w-m btn-default">Default</button>
                                <button type="button" class="btn btn-w-m btn-primary">Primary</button>
                                <button type="button" class="btn btn-w-m btn-success">Success</button>
                                <button type="button" class="btn btn-w-m btn-info">Info</button>
                                <button type="button" class="btn btn-w-m btn-warning" @click="getWar()">Warning mostrar el registro seleccionado</button>
                                <button type="button" class="btn btn-w-m btn-danger">Danger</button>
                                <button type="button" class="btn btn-w-m btn-link">Link</button>
                            </p>
                        </div>
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
                
            }
        },
        methods: {
            getWar(){
                console.log('Esto es una prueba');

                this.$notify({
                    'group': 'foot',
                    'type': 'warn',
                    'title': 'Hello notify',
                    'text': 'Every are time now! :)'
                })

                this.$notify({
                    'group': 'foot',
                    'type': 'error',
                    'title': 'Hello notify',
                    'text': 'Every are time now! :)'
                })

                this.$notify({
                    'group': 'foot',
                    'type': 'success',
                    'title': 'Hello notify',
                    'text': 'Every are time now! :)'
                })

                this.$notify({
                    'group': 'foot',
                    'title': 'Hello notify',
                    'text': 'Every are time now! :)'
                })
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    
</style>