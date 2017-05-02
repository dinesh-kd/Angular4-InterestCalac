import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:any;
  amount:any;
  calculate(data)
  {
    this.result =0 ;
    this.amount = 0;
    if(data.type==1)
    {
      this.result = (data.amount*data.years*data.rate/100);
    }

    if(data.type==2)
    {
      this.amount = (data.amount* Math.pow((1 + (data.rate/(data.interval*100))), (data.interval*data.years)));
      this.result = (this.amount - data.amount);
    }
  }
}
