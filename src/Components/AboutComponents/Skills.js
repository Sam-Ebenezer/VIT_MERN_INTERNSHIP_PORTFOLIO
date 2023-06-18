import Skill from "./Skill"
function Skills(){

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


      let labels =["HTML","CSS","JAVASCRIPT","BOOTSTRAP","REACT"]
      let bgcolor=['rgb(54, 162, 235)','rgba(255, 99, 132, 0.5)']
      let percentages=[90,50,75,60,80]

      let skill_charts=[]
      for(let i=0;i<labels.length;i++){
        skill_charts.push(<Skill label={labels[i]} bgcolor={bgcolor} percentage={percentages[i]} />)
      }

    return(
        <div className="text-white">
            <h1 className="text-center">Skills</h1>
            {skill_charts}
        </div>
    )
}



export default Skills