import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-column',
  templateUrl: './data-column.component.html',
  styleUrls: ['./data-column.component.scss']
})
export class DataColumnComponent implements OnInit {

  @Input() object!: Object

  cellStyle = {paddingTop: '6px', paddingBottom: '6px', minWidth: '120px',borderStyle: 'solid',borderColor: 'black',borderWidth: 'thin', fontSize: '13px', fontFamily: 'sans-serif', 
  textAlign: 'center'}


  constructor() { }

  ngOnInit(): void {
  }

  getObjectAttr(object: Object) {
    return Object.values(object)
  }

}
