import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Skill(props){
    ChartJS.register(ArcElement, Tooltip, Legend);

    let data={
        datasets: [{
            data:[props.percentage,100-props.percentage],
            backgroundColor: [props.bgcolor[0],props.bgcolor[1]],
            options: {
                //cutoutPercentage: 40,
             responsive: false,
             legend: {
                     display: false
                  },
                tooltips: false,
                hover: {mode: null}
           }
        }
    ]
    }
    




    return(
    <div className="chart_size chart-container m-5" style={{float:"left"}}>
        <h3 className="text-center">{props.label}</h3>
        <Doughnut data={data} />

    </div>
    )
}

export default Skill

/*const data = {
        labels: ['Red',          'Blue',          'Yellow'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };*/


     /* var data = {
        labels: [
          "Red",
          "Blue",
          "Yellow"
        ],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#FF6283",
              "#36A2EB",
              "#FFCC54"
            ],
            hoverBackgroundColor: [
              "#FF6283",
              "#36A2EB",
              "#FFCC54"
            ]
          }]
      };
      var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
        type: 'doughnut',
        data: data,
        options: {
           responsive: true,
          legend: {
            display: false
          }
        }
      });
      
          }*/