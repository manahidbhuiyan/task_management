<template>
  <div>
    <navbar />
    <div class="full-content">
   <div class="side-content">

   </div>
    <div class="main-content withoutsidebar" >
    <div class="headDash">
        <div class="row">
          <div class="col-sm-3">
            <div>
              <b-card title="Total Team" sub-title="0">
                <b-card-text>Task Count</b-card-text>
              </b-card>
            </div>
          </div>
          <div class="col-sm-3">
            <b-card title="Project Team" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
          <div class="col-sm-3">
            <b-card title="Task Progress" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
          <div class="col-sm-3">
            <b-card title="Complete Task" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
        </div>

        <!--        Chart cHart Area Start-->

        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12">
            <h3 class="team-table-head"><b>Employee count by team</b></h3>
            <div class="bar-area">
              <BarChart2 />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <h3 class="team-table-head"><b>Project servey</b></h3>
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
        <!--        Chart cHart Area Stop-->



    <!--    Style 2-->

    <!--    Project creat area stop-->
    </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
// import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import BarChart2 from "../chart/BarChart2";
import PieChart from "../chart/PieChart";
export default {
  name: "HeadDashBoard",
  components: {

    Navbar,
    Footer,
    PieChart,
    BarChart2,
  },

  data: function data() {
    return {

      // green2: false,
      // red2: false,
      // normal2: false,
      // blue: false,
      ishide:false,
      isfull:false,
      chartOptions: {
        hoverBorderWidth: 20
      },
      legend: {
        position: "top",
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Progress"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF"],
            data: [9, 3],
          },
        ],
      },

    };
  },
  methods: {
    // nowchange(){
    //   this.ishide = !this.ishide
    // }

  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

.sidehide{
  display: block !important;

}
.headDash {
  padding: 100px 0;
}
.team-section {
  padding: 20px 0;
}
.team-table-head {
  padding: 0px;
  margin: 30px 0 20px;
}
//.bar-area h3,.pie-area h3{
//  margin-top: 30px !important;
//}

/* Card Area */
//
//.task-list li {
//  text-decoration: none;
//  list-style: none;
//}
//b-card-text hr {
//  margin: 0px !important;
//}
//.from-input:focus {
//  box-shadow: none !important;
//  outline: 0 !important;
//}
//.create-team:focus,
//.btn-success:focus {
//  outline: 0 !important;
//  box-shadow: none !important;
//}
//.team-table-head {
//  padding: 0px;
//  margin: 30px 0 20px;
//}
/*Modal*/


.add-team-member {
  display: flex;
  justify-content: space-between;
}
.member-add-box {
  width: 60%;
}
.member-add-box:focus {
  outline: 0 !important;
  box-shadow: none !important;
}
.no-team {
  padding: 100px;
  text-align: center;
  color: blue;
  font-weight: bold;
}


.chartjs-render-monitor label{
  color: transparent;
  background-color: #0c0c0c;
}
.pie{
  width: 350px !important;
  margin: 0 auto;
  height: 400px !important;
}
#doughnut-chart {
  width: 350px !important;
  margin: 0 auto;
  height: 350px !important;
}

@media (min-width:1000px) and (max-width: 1399px) {
  .pie[data-v-144a9a4f] {
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
  #doughnut-chart {
    width: 220px !important;
    height: 220px !important;
    margin: 0;
    padding: 0;
  }
}

</style>
