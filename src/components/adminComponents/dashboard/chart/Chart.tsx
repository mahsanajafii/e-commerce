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
    <div className='w-full h-[550px]'>
        <Bar 
            data={{
                labels : labels,
                datasets: [
                    {
                        label: "فروش",
                        data : values,
                        backgroundColor: "#DB2777",
                        barThickness: 90,
                        hoverBackgroundColor: "#9b0e4d",
                    }
                ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'نمودار فروش',
                        font: {
                            size: 14,
                            family: "IRAN-Yekan",
                        },
                        align: "end",
                        padding: {
                            bottom: 30,
                        },
                    },
                    legend: {
                        display: false // to hide label => in this case "فروش"
                    },
                },
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    x: {
                        reverse: true, // to make the chart rtl
                        offset: false, // to make x-axis end right at last thick
                        grid: {
                            display: false, // to hide vertical grid lines
                            // drawTicks: true,   => does not work
                        },
                        ticks: {
                            stepSize: 1,
                            color: "#58616C",
                            font : {
                                size: 11,
                            },
                        },
                        title : {
                            display: true,
                            text: "تاریخ",
                            font : {
                                size : 12,
                                weight : 700,
                                family : 'IRAN-Yekan',
                            },
                            color: "#58616C",
                        }
                    },
                    y: {
                        min: 0,
                        max: 5,
                        position: "right", // to positon the y-axis an y-ticks at the right side of chart
                        grid: {
                            display: true,
                            color: "#9CA5AF",
                            lineWidth: 0.6,
                            
                        },
                        ticks: {
                            stepSize: 1,
                            color: "#58616C",
                            font : {
                                size: 11,
                            },
                        },
                        border: {
                            display: false, // to  hide y-axis line
                        },
                        title : {
                            display: true,
                            text: "فروش",
                            font : {
                                size : 12,
                                weight : 700,
                                family : 'IRAN-Yekan',
                            },
                            color: "#58616C",
                        }
                    },
                },
                layout: {
                    padding: {
                        left: 10, // it makes the last thick to be visible completely
                    },
                }
            }}
        />
    </div>
  )
}

export default Chart