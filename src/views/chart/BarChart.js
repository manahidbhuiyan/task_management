import {
    Bar
} from 'vue-chartjs'

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['Complete', 'Pending', 'Overdue'],
            datasets: [{
                label: ' ',
                backgroundColor: ['#00D8FF', '#f87979', '#41B883', ],
                data: [4, 2, 3, 0]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
}