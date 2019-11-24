<template>
    <div class="row wrapper wrapper-content">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Gráficos</h5>
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
                        <div class="hello" id="chartdiv" ref="chartdiv">
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
        mounted() {
            let {am4core, am4charts, am4themes_animated, am4themes_dark} = this.$am4core();

            console.log('Listo');

            // let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
            // chart.paddingRight = 20;

            // let data = [];
            // let visits = 10;
            // for (let i = 1; i < 366; i++) {
            //     visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            //     data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
            // }

            // chart.data = data;

            // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            // dateAxis.renderer.grid.template.location = 0;

            // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            // valueAxis.tooltip.disabled = true;
            // valueAxis.renderer.minWidth = 35;

            // let series = chart.series.push(new am4charts.LineSeries());
            // series.dataFields.dateX = "date";
            // series.dataFields.valueY = "value";

            // series.tooltipText = "{valueY.value}";
            // chart.cursor = new am4charts.XYCursor();

            // let scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(series);
            // chart.scrollbarX = scrollbarX;

            // this.chart = chart;

            am4core.useTheme(am4themes_animated);

            let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart3D);

            // Add data
            chart.data = [{
            "country": "USA",
            "visits": 4025
            }, {
            "country": "China",
            "visits": 1882
            }, {
            "country": "Japan",
            "visits": 1809
            }, {
            "country": "Germany",
            "visits": 1322
            }, {
            "country": "UK",
            "visits": 1122
            }, {
            "country": "France",
            "visits": 1114
            }, {
            "country": "India",
            "visits": 984
            }, {
            "country": "Spain",
            "visits": 711
            }, {
            "country": "Netherlands",
            "visits": 665
            }, {
            "country": "Russia",
            "visits": 580
            }, {
            "country": "South Korea",
            "visits": 443
            }, {
            "country": "Canada",
            "visits": 441
            }, {
            "country": "Brazil",
            "visits": 395
            }, {
            "country": "Italy",
            "visits": 386
            }, {
            "country": "Australia",
            "visits": 384
            }, {
            "country": "Taiwan",
            "visits": 338
            }, {
            "country": "Poland",
            "visits": 328
            }];

            // Create axes
            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "country";
            categoryAxis.renderer.labels.template.rotation = 270;
            categoryAxis.renderer.labels.template.hideOversized = false;
            categoryAxis.renderer.minGridDistance = 20;
            categoryAxis.renderer.labels.template.horizontalCenter = "right";
            categoryAxis.renderer.labels.template.verticalCenter = "middle";
            categoryAxis.tooltip.label.rotation = 270;
            categoryAxis.tooltip.label.horizontalCenter = "right";
            categoryAxis.tooltip.label.verticalCenter = "middle";

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Countries";
            valueAxis.title.fontWeight = "bold";

            // Create series
            let series = chart.series.push(new am4charts.ColumnSeries3D());
            series.dataFields.valueY = "visits";
            series.dataFields.categoryX = "country";
            series.name = "Visits";
            series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;

            let columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            columnTemplate.stroke = am4core.color("#FFFFFF");

            columnTemplate.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
            })

            columnTemplate.adapter.add("stroke", function(stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
            })

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineX.strokeOpacity = 0;
            chart.cursor.lineY.strokeOpacity = 0;

            // Enable export
            chart.exporting.menu = new am4core.ExportMenu();
            // am4core.ExportMenu();

            this.chart = chart;
            
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
</style>