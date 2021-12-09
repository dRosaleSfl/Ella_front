import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  graphLabels:any = []
  graphdur: any = []
  graphlapso: any = []
  cm: any
  idval: any

  constructor(private servicio: ServicioService) { 
    Chart.register(...registerables)
    this.idval = sessionStorage.getItem("UserID") 
    servicio.getciclo(this.idval).subscribe(res=>{
      this.cm = res
      this.cm = this.cm.data[0].cicloh
      console.log(this.cm)
      for (var i=0; i<this.cm.length; i++ ) {
        console.log("inside") 
        this.graphLabels.push(this.cm[i].fechainicio + " - " + this.cm[i].fechafin)
        this.graphdur.push(this.cm[i].duracion)
        this.graphlapso.push(this.cm[i].lapso)
      }
      console.log(this.graphLabels)
      console.log(this.graphdur)
      console.log(this.graphlapso)
      this.canvas()
    })
   }

  ngOnInit(): void {
  }

  canvas() {
    const durChart: any = document.getElementById('dur_chart')
    const lapChart: any = document.getElementById('lap_chart')
    const Chart1 = new Chart(durChart.getContext('2d'), {
      type: 'bar',
        data: {
          labels: this.graphLabels,
          datasets: [
            {
              label: "Duracion",
              data: this.graphdur,
              backgroundColor: "red",
            }
         ]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }
      });
      const Chart2 = new Chart(lapChart.getContext('2d'), {
        type: 'bar',
          data: {
            labels: this.graphLabels,
            datasets: [
              {
                label: "Lapsos",
                data: this.graphlapso,
                backgroundColor: "yellow",
              }
           ]
          },
          options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
              legend: {
                position: 'top'
              }
            }
          }
        });
  }

}
