import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  week: any = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];

  month: any = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre', 
    'Diciembre'
  ]

  monthSelect: any[];
  datesPeriod: any // Este es donde se pondra el resultado del querry de la bd
  dateSelect: any;
  dateValue: any;
  dates: any
  today: any
  avg: any
  avg2: any

  constructor() {
    this.monthSelect = []
    this.createCal()
    this.getDaysFromDate(this.today.getMonth(), this.today.getFullYear())
    this.getDatesPeriod()
    this.getAvg()
   }

  ngOnInit(): void {
  }

  getDatesPeriod() { // Aqui se llamara al service para sacar las fechas de los periodos pasados
    this.datesPeriod = [ // ejemplo de lo que podria llegar desde el querry
      {
        fechainicio:'2021/09/5',
        fechafinal:'2021/09/15',
        duracion: 10,
        lapso: 31,
        sangrado:'fuerte'
      },
      {
        fechainicio:'2021/10/7',
        fechafinal:'2021/10/14',
        duracion: 7,
        lapso: 22,
        sangrado:'fuerte'
      },
      {
        fechainicio:'2021/11/09',
        fechafinal:'2021/11/16',
        duracion: 7,
        lapso: 26,
        sangrado:'fuerte'
      }
    ]
  }

  createCal() {
    this.dates = new Date() // December 25, 1995 23:15:30
    this.today = new Date( this.month[ this.dates.getMonth() ]+' '+this.dates.getDate()+', '+this.dates.getFullYear() )
  }
  
  getDaysFromDate(month: any, year: any) {
    const startDate = new Date(year+'/'+( month+1)+'/01')
    const endDate = new Date(year, (month+1), 0)
    this.dateSelect = startDate
    var day = endDate.getDate()
    const arrayDays = Object.keys([...Array( day )]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${ startDate.getFullYear() }-${ startDate.getMonth()+1 }-${a}`);
      if ( dayObject.isoWeekday() === 7 ) {
        var b = 1
      }
      else {
        var b = dayObject.isoWeekday()+1
      }
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: b
      };
    });
    console.log(arrayDays)
    this.monthSelect = arrayDays;
  }

  changeMonth(flag: any) {
    if (flag < 0) {
      const prevDate = this.dateSelect //this.dateSelect.clone().subtract(1, "month");
      prevDate.setMonth( this.dateSelect.getMonth() - 1)
      this.getDaysFromDate( prevDate.getMonth(), prevDate.getFullYear()) //this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect //const nextDate = this.dateSelect.clone().add(1, "month");
      nextDate.setMonth( this.dateSelect.getMonth() + 1)
      this.getDaysFromDate( nextDate.getMonth(), nextDate.getFullYear()) //this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  periodo(a: any): Boolean {
    var datei // date inicio
    var dateb = new Date(this.dateSelect.getFullYear(), this.dateSelect.getMonth(), a) // date between
    var daten // date fin
    var i = 0
    var check = false
    while (i < this.datesPeriod.length) {
      datei = new Date ( this.datesPeriod[i].fechainicio )
      daten = new Date ( this.datesPeriod[i].fechafinal )
      if( this.dateSelect.getFullYear() === datei.getFullYear() && this.dateSelect.getMonth() === datei.getMonth() ) { // YYYY/MMM/ === YYYY/MMM
        if (dateb >= datei && dateb <= daten) {
          check = true
        }
      }
      if( this.dateSelect.getFullYear() === daten.getFullYear() && this.dateSelect.getMonth() === daten.getMonth() ) { // YYYY/MMM/ === YYYY/MMM
        if (dateb >= datei && dateb <= daten) {
          check = true
        }
      }
      i++
    }
    return check
  }

  getAvg () {
    var i = 0
    var cnt = 0
    var cnt2 = 0
    while ( i < this.datesPeriod.length ) {
      cnt += this.datesPeriod[i].duracion
      cnt2 += this.datesPeriod[i].lapso
      i++
    }
    this.avg = cnt/this.datesPeriod.length
    this.avg2 = Math.trunc(cnt2/this.datesPeriod.length)
  }

}
