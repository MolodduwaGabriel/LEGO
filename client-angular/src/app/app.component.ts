import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lego} from '../lego.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular';
  lego : Lego[];
  selectedLego : Lego;
  constructor(http : HttpClient)
  {
    http.get<Lego[]>("http://localhost:3000/api").subscribe(d => {this.lego = d['lego'];});
  }
  selectLink(p : String)
  {
    console.log(p);
    this.selectedLego = this.lego.find(l => l.SetNumber === p);
    console.log(this.selectedLego);
  }
}
