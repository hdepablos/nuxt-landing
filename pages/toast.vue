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
              <li><a href="#" class="dropdown-item">Config option 1</a></li>
              <li><a href="#" class="dropdown-item">Config option 2</a></li>
            </ul>
            <a class="close-link">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="ibox-content float-e-margins">
          <div class="row"></div>
          <client-only>
            <notifications
              group="foot"
              class="notifications-vue"
            ></notifications>
          </client-only>

          <div class="row">
            <div class="col-md-12">
              <p>
                Use any of the available button classes to quickly create a
                styled button.
              </p>

              <h3 class="font-bold">
                Normal buttons
              </h3>
              <p>
                <button type="button" class="btn btn-w-m btn-default">
                  Default
                </button>
                <button type="button" class="btn btn-w-m btn-primary">
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-w-m btn-success"
                  @click.prevent="generarPdf"
                >
                  Generar pdf
                </button>
                <button type="button" class="btn btn-w-m btn-info">Info</button>
                <button
                  type="button"
                  class="btn btn-w-m btn-warning"
                  @click="getWar()"
                >
                  Warning mostrar el registro seleccionado
                </button>
                <button type="button" class="btn btn-w-m btn-danger">
                  Danger
                </button>
                <button type="button" class="btn btn-w-m btn-link">Link</button>
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <h3>Icono</h3>

              <h3>Input Mask moneda</h3>
              <imask-input
                v-model="numberModel"
                :mask="Number"
                radix=","
                :unmask="true"
                @accept="onAccept"
                placeholder="Enter number here"
                thousandsSeparator="."
                :padFractionalZeros="true"
                id="monto"
                name="monto"
                maxlength="20"
                autocomplete="off"
              />
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMaskComponent } from "vue-imask";
// import jspdf from 'jspdf';

export default {
  data() {
    return {
      numberModel: "",
      onAccept(value) {
        console.log(value);
      }
    };
  },
  components: {
    "imask-input": IMaskComponent
  },
  methods: {
    generarPdf() {
      console.log("generar pdf");
    },
    getWar() {
      console.log("Esto es una prueba");

      this.$notify({
        group: "foot",
        type: "warn",
        title: "&#9888; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        type: "error",
        title: "&#10008; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        type: "success",
        title: "&#10004; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        title: "Hello notify",
        text: "Every are time now! :)"
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
