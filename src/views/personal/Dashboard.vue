<template>
  <div>
    <navbar />
    <sidebar />
    <div class="dash">
      <!--    <div class="sidebar" @click="{sidenavActive}">-->
      <!--      <sidebar />-->
      <!--    </div>-->
      <div class="dashboard" v-bind:class="{ newdash }">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-sm-3">
              <div>
                <b-card title="Total Task" sub-title="0">
                  <b-card-text>Task Count</b-card-text>
                </b-card>
              </div>
            </div>
            <div class="col-sm-3">
              <b-card title="Complete Task" sub-title="0">
                <b-card-text>Task Count</b-card-text>
              </b-card>
            </div>
            <div class="col-sm-3">
              <b-card title="Pending Task" sub-title="0">
                <b-card-text>Task Count</b-card-text>
              </b-card>
            </div>
            <div class="col-sm-3">
              <b-card title="OverDue Task" sub-title="0">
                <b-card-text>Task Count</b-card-text>
              </b-card>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <div class="bar-area">
                <div class="bar">
                  <BarChart />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="pie-area">
                <div class="pie">
                  <pie-chart
                    :legend="legend"
                    :data="chartData"
                    :options="chartOptions"
                  ></pie-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import BarChart from "../chart/BarChart";
import PieChart from "../chart/PieChart";
import Footer from "../../components/Footer";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Navbar,
    BarChart,
    PieChart,
    Footer,
  },
  data: function data() {
    return {
      newdash: false,
      chartOptions: {
        hoverBorderWidth: 20,
      },
      legend: {
        position: "top",
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Pending", "Overdue"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF", "#E46651"],
            data: [4, 3, 2],
          },
        ],
      },
    };
  },

  methods: {
    sidenavActive() {
      this.newdash = true;
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/index";


.dashboard{
  min-height: 70vh;
  padding: 20px 10px;
}
//.newdash{
//  margin-left: 205px;
//  transition: 0.4s;
//}
.no-gutters{
  margin: 0;
}
.bar{
  width: 80%;
  margin: 0 auto;
  height: 400px;
}

.pie{
  width: 400px !important;
  margin: 0 auto;
  height: 400px !important;
}
#doughnut-chart{
  width: 400px !important;
  margin: 0 auto;
  height: 400px !important;
}

.bar-area , .pie-area{
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 20px 0;
  padding: 10px;
}


/*Responsive*/

@media (max-width:575.8px){
  .pie{
    width: 100% !important;
  }
  .card{
    margin: 10px 0;
  }
}
@media (min-width:576px)and (max-width:767.8px){
  .card-title {
    font-size: 20px !important;
  }
  .pie {
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
  #doughnut-chart {
    width: 250px !important;
    height: 250px !important;
  }
}


@media (min-width: 768px) and (max-width: 990.8px) {
  .pie {
    width: 250px !important;
    height: 250px !important;
  }
  #doughnut-chart {
    width: 250px !important;
    height: 250px !important;
  }
}
@media (min-width: 991px) and (max-width: 1199.9px) {
  .pie[data-v-144a9a4f] {
    width: 300px !important;
    height: 300px !important;
  }
  #doughnut-chart {
    width: 300px !important;
    height: 300px !important;
  }
}
@media (min-width: 1200px) and (max-width: 1500px) {
  .pie[data-v-144a9a4f] {
    width: 300px !important;
    height: 400px !important;
    padding-top: 40px;
  }
  #doughnut-chart {
    width: 300px !important;
    height: 300px !important;
  }
}


</style>
