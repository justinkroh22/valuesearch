import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss']
})
export class InverseTableComponent implements OnInit {


  @Input() objectList?: Object[]
  @Input() rowDefList?: Object[]

  // cellStyle: any = ;

  constructor() { }

  ngOnInit(): void {
  }

  renderPageView(objectList: Object[], pageNumber: number, columnsPerPage: number ) {

    let lowIndexCutoff = (pageNumber * columnsPerPage) - columnsPerPage;
    let highIndexCutoff = (pageNumber * columnsPerPage);

    return objectList.slice(lowIndexCutoff, highIndexCutoff)

  }




  handlePageChange(event: any, value: any) {


  }



  displayTable(objectList: Object[], rowNamesArray: string[]) {

      let style = {paddingTop: '6px', paddingBottom: '6px', minWidth: '120px',border: 1, fontSize: '13px', fontFamily: 'sans-serif'}

      let objectDisplayList = [];

      for (let object of objectList) {
          
          objectDisplayList.push(this.displayDataColumn(object))

      }


  }

  displayDataColumn(object: Object) {

      let style = {paddingTop: '6px', paddingBottom: '6px', minWidth: '120px',border: 1, fontSize: '13px', fontFamily: 'sans-serif'}

      let objectColumnHtmlArray = [];


  }

  displayDataDefinitionColumn(rowNamesArray: string[]) {

      let style = {paddingTop: '6px', paddingBottom: '6px', minWidth: '120px',border: 1, fontSize: '13px', fontFamily: 'sans-serif'}
  }

}
