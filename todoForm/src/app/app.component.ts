import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormModel } from './model';
import { FormViewModel } from './viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){

    // this.myformviewmodel.items= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[];
    //  this.myformviewmodel.items= JSON.parse(localStorage.getItem("items"));


    for(var i=0;i<localStorage.length; i++) {

      var key = localStorage.key( i );
      this.myformviewmodel.items = JSON.parse( localStorage.getItem( key ) );
    }

  }

  title = 'todoForm';
  public a:any;

  ngOnInit():void{}

  private myformviewmodel = new FormViewModel();

  getTableitem(){

    return this.myformviewmodel.items;
  }

  url:any;

  onselectetFile(event: any) {


    var files = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        this.url = event.target.result;

      //  alert(this.url);
      };
    }


  }

  additem(Name:any, Surname:any, Age:any, HireDate:any, Image:any){

    this.myformviewmodel.items.push(new FormModel(Name,Surname,Age,HireDate,Image));

    this.saveChangestoStorage();

  }

  saveChangestoStorage(){

    this.a= this.myformviewmodel.items;

    localStorage.setItem("items",JSON.stringify(this.a));

  }


  removeItem(item:any){

    this.myformviewmodel.items.forEach((value,index)=>{
      if(value==item)
      {
        this.myformviewmodel.items.splice(index,1);
      }
    });

    this.saveChangestoStorage();
  }

  updateitem(item:any, UpdateName:any, UpdateSurname:any, UpdateAge:any, UpdateHireDate:any, UpdateImage:any){

    this.myformviewmodel.items.forEach((value,index)=>{
      if(value==item)
      {
        this.myformviewmodel.items[index].Name = UpdateName;
        this.myformviewmodel.items[index].Surname = UpdateSurname;
        this.myformviewmodel.items[index].Age = UpdateAge;
        this.myformviewmodel.items[index].HireDate = UpdateHireDate;
      }
    });

    this.saveChangestoStorage();

  }
}
