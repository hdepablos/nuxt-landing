<template>
  <div id="app">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-12">
              <label class="control-label">Fecha:</label>
              <date-picker
                :shortcuts="shortcuts"
                v-model="date"
                name="fecha"
                id="fecha"
                lang="es"
                type="date"
                style="width: 100%"
                value-type="YYYY-MM-DD"
                format="DD-MM-YYYY, ddd"
              ></date-picker>
            </div>
            <div class="col-md-12 mt-2">
              <button @click.prevent="getFecha()">Get fecha</button>
              <button @click.prevent="setFecha()">Set fecha</button>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-md-12">
              <label class="control-label">Hora:</label>
              <date-picker
                v-model="time"
                lang="es"
                name="hora"
                id="hora"
                type="time"
                format="hh:mm:ss a"
                style="width: 100%"
                placeholder="Selecciona la hora"
              ></date-picker>
            </div>
            <div class="col-md-12 mt-2">
              <button @click.prevent="getHora()">Get hora</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <label class="control-label">Fecha y Hora:</label>
              <date-picker
                v-model="datetime"
                lang="es"
                name="fechahora"
                id="fechahora"
                type="datetime"
                format="DD-MM-YYYY, ddd [con] hh:mm:ss a"
                placeholder="Selecciona fecha y hora"
                style="width: 100%"
              ></date-picker>
            </div>
            <div class="col-md-12 mt-2">
              <button @click.prevent="getFechaHora()">Get fecha y hora</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="row mt-5">
            <div class="col-md-12">
              <label class="control-label">Rango de fecha:</label>
              <date-picker
                :shortcuts="shortcutsrangefecha"
                v-model="rangefecha"
                lang="es"
                type="date"
                range
                name="rangofecha"
                id="rangofecha"
                style="width: 100%"
                format="DD-MM-YYYY, ddd"
              ></date-picker>
            </div>
            <div class="col-md-12 mt-2">
              <button @click.prevent="getRangoFecha()">Get rango fecha</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row mt-5">
            <div class="col-md-12">
              <label class="control-label">Rango de fecha y hora:</label>
              <date-picker
                v-model="rangefechahora"
                lang="es"
                type="datetime"
                range
                name="rangofechahora"
                id="rangofechahora"
                style="width: 100%"
                value-type="YYYY-MM-DD HH:mm:ss"
                format="DD-MM-YYYY, ddd HH:mm:ss a"
              ></date-picker>
            </div>
            <div class="col-md-12 mt-2">
              <button @click.prevent="getRangoFechaHora()">
                Get rango fecha y hora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/es";
import moment from "moment";

export default {
  name: "fecha",
  components: {
    DatePicker
  },
  data() {
    return {
      date: "",
      time: "",
      datetime: "",
      rangefecha: "",
      rangefechahora: "",
      shortcutsrangefecha: [
        {
          text: "Hoy",
          onClick: () => {
            this.rangefechahora = [new Date(), new Date()];
          }
        },
        {
          text: "Mes anterior",
          onClick: () => {
            const iMesAnterior = new moment()
              .subtract(1, "months")
              .date(1)
              .startOf();
            const fMesAnterior = new moment().date(0).format("YYYY-MM-DD");

            // moment(('07-18-2013')).utc().format("YYYY-MM-DD").toString()

            console.log("mes anterior");
            console.log(iMesAnterior);
            console.log(fMesAnterior);

            const date1 = new Date();
            console.log("date 00000000");
            console.log(date1);

            // date1.setTime(date1.getTime() - 3600 * 1000 * 24);
            date1.setTime(iMesAnterior);

            console.log("date 1111111111111111");
            console.log(date1);

            console.log("date1");
            console.log(date1);

            const date2 = new Date();
            date2.setTime(date2.getTime() + 3600 * 1000 * 24);

            this.rangefecha = [iMesAnterior, date2];
            // this.rangefecha = [date1, date2];
          }
        }
      ],
      shortcuts: [
        {
          text: "Today",
          onClick() {
            const date = new Date();
            // return a Date
            return date;
          }
        },
        {
          text: "Yesterday",
          onClick() {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          }
        }
      ]
    };
  },
  methods: {
    getFecha() {
      console.log("Fecha");
      console.log(this.date);
      // console.log(date ? moment(date).format("LL") : "");
      // console.log(moment.(this.date).format("YYYY-MM-DD"));
    },
    setFecha() {
      console.log("Setear Fecha");
      console.log(this.date);
      // console.log(date ? moment(date).format("LL") : "");
      // console.log(moment.(this.date).format("YYYY-MM-DD"));
    },
    getHora() {
      console.log("Hora");
      console.log(this.time);
    },
    getFechaHora() {
      console.log("Fecha hora");
      console.log(this.datetime);
    },
    getRangoFecha() {
      console.log("Rango Fecha");
      console.log(this.rangefecha);
    },
    getRangoFechaHora() {
      console.log("Rango Fecha hora");
      console.log(this.rangefechahora);
    }
  }
};
</script>

<style></style>
