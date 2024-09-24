import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import chartData from './data/data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
    const labels = chartData.map((item) => item.label)
    const values = chartData.map((item) => item.value)

  return (
    <div className='w-full'>
        <Bar 
            data={{
                labels : labels,
                datasets: [
                    {
                        label: "فروش",
                        data : values,
                        backgroundColor: "#DB2777"
                    }
                ],
            }}
            options={{
                plugins: {
                    tooltip: {
                        
                    },
                    title: {
                        display: true,
                        text: 'نمودار فروش',
                        font: {
                            size: 14,
                            family: "IRAN-Yekan",
                        },
                        align: "start",
                    },
                },
                responsive: true,
                maintainAspectRatio: true, 
                scales: {
                    x: {
                        // display: true,
                        // title: {
                        //     text: "تاریخ",
                        //     color: "#58616C"
                        // },
                        grid: {
                            display: false, // to hide vertical grid lines
                        },
                    },
                    y: {
                        grid: {
                            display: true,
                            color: "#9CA5AF",
                            lineWidth: 1
                        },
                        min: 0,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            color: "#58616C",
                            font : {
                                size: 11,
                            },
                        },
                    },
                },
            }}
        />
    </div>
  )
}

export default Chart