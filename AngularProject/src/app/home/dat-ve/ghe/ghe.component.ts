import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ghe } from 'src/app/_core/models/ghe';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe:Ghe;
  @Output() emitDangDat = new EventEmitter;

  dangDat:boolean = false; 

  constructor() { }

  ngOnInit() {
  }
  DatGhe(){
    this.dangDat = !this.dangDat;
    this.emitDangDat.emit(this.dangDat);
  }
}
