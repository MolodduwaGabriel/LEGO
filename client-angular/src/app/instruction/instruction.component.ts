import { Component, OnInit, Input } from '@angular/core';

import {Lego} from '../../lego.model';
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {


  @Input() lego: Lego;
  constructor() {


  }

  ngOnInit() {
  }

}
