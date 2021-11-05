import {
    Bar
} from 'vue-chartjs'

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['Web Hunter', 'Amana', 'Private', 'webtrick', 'managment', 'decoration', 'Web Hunter', 'Amana'],
            datasets: [{
                label: ' Employee',
                backgroundColor: ['#00D8FF', '#f87979', '#41B883', '#e80606', '#1939bd', '#b7c6f1', '#00D8FF', '#f87979'],
                data: [15, 12, 10, 13, 10, 10, 15, 6, 2]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // label: {
            //     fontColor: "white",
            //     backgroundColor: "white"
            // }
            // legend: {
            //     labels: {
            //         fontColor: "white",
            //         backgroundColor:"white",
            //         fontSize: 18
            //     }
            // },
        }
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
}
