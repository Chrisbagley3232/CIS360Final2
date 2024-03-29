import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Census:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetCensus().subscribe(res => {
      console.log(res)
      this.Census =res;
    });    
  }

  onDelete(id: any): any{
    this.crudService.DeleteCensus(id).subscribe(res => {
      console.log(res)
    })
    location.reload();
  }

  //onUpdate(id: any): any{
    //this.crudService.UpdateCensus(id).subscribe(res => {
      //console.log(res)
    //})
    //location.reload();
  //}
}
