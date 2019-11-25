<template>
  <div class="row wrapper wrapper-content">
    <div class="col-lg-12">
      <div class="ibox">
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
              <li>
                <a href="#" class="dropdown-item">Config option 1</a>
              </li>
              <li>
                <a href="#" class="dropdown-item">Config option 2</a>
              </li>
            </ul>
            <a class="close-link">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="ibox-content float-e-margins">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group has-error">
                <label class="control-label" for="sel1">
                  <fa-icon
                    class="img-custom"
                    :icon="['fas', 'users']"
                    size="1x"
                    :style="{ color: 'blue' }"
                  />Select 2 sencillo básico y evento al change
                </label>
                <client-only>
                  <v-select name="sel1" id="sel1" :options="options" @input="setSelected" />
                </client-only>
              </div>
            </div>
            <div class="col-md-4">
              <label>Cargado con un objeto y el evento Selected</label>
              <client-only>
                <v-select
                  v-model="frutaSel"
                  label="text"
                  name="sel2"
                  id="sel2"
                  :options="frutas"
                  @input="getSelectedFruta"
                />
              </client-only>
            </div>
            <div class="col-md-4">
              <label>Select 2 sencillo básico y evento al change</label>
              <client-only>
                <v-select
                  name="sel3"
                  id="sel3"
                  :options="options"
                  @input="setSelected"
                  :clearable="false"
                />
              </client-only>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <label>Select 2 multiple sencillo básico y evento al change</label>
              <client-only>
                <v-select multiple name="sel4" id="sel4" :options="options" @input="setSelected" />
              </client-only>
            </div>
            <div class="col-md-4">
              <div class="form-group has-error">
                <label
                  class="control-label"
                  for="sel5"
                >Select 2 multiple sencillo básico y evento al change</label>
                <client-only>
                  <v-select multiple name="sel5" id="sel5" :options="options" @input="setSelected" />
                </client-only>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group has-error">
                <label
                  class="control-label"
                  for="sel6"
                >Select 2 multiple sencillo básico y evento al change</label>
                <client-only>
                  <v-select multiple name="sel6" id="sel6" :options="options" />
                </client-only>
              </div>
            </div>
          </div>

          <div class="d-none d-md-block">
            <div class="row">
              <div class="col-md-12">
                <p>Use any of the available button classes to quickly create a styled button.</p>

                <h3 class="font-bold">Normal buttons</h3>
                <p>
                  <button type="button" class="btn btn-w-m btn-default">Default</button>
                  <button type="button" class="btn btn-w-m btn-primary">Primary</button>
                  <button type="button" class="btn btn-w-m btn-success">Success</button>
                  <button type="button" class="btn btn-w-m btn-info">Info</button>
                  <button
                    type="button"
                    class="btn btn-w-m btn-warning"
                    @click="getFruta()"
                  >Warning mostrar el registro seleccionado</button>
                  <button type="button" class="btn btn-w-m btn-danger">Danger</button>
                  <button type="button" class="btn btn-w-m btn-link">Link</button>
                </p>
              </div>
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
      algo: "prueba",
      options: ["foo", "bar", "baz"],
      frutas: [
        { value: 1, text: "Apple" },
        { value: 2, text: "Banana" },
        { value: 3, text: "Orange" },
        { value: 4, text: "Grape" }
      ],
      frutaSel: {}
    };
  },
  methods: {
    setSelected(value) {
      //  trigger a mutation, or dispatch an action
      console.log("Registro seleccionado en el select");
      console.log(value);
    },
    getSelectedFruta(value) {
      if (value !== null) {
        console.log(
          `La fruta es ${value.text}, y el identificador es ${value.value}`
        );
      }
    },
    getFruta() {
      if (!this.frutaSel) return;
      // this.$toast.show('Logging in...', {
      //     theme: "bubble",
      //     position: "top-right",
      //     duration : 5000,
      //     icon: 'error_outline'
      // });

      this.$toast.success("message string", {
        // override the global option
        position: "top-right",
        duration: 2500
      });
      // this.$toast.error('Error while authenticating');
      // this.$toast.global.my_error();
      console.log(
        `La fruta es ${this.frutaSel.text}, y el identificador es ${this.frutaSel.value}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>