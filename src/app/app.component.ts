import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  list:Company[] =[{
    "name" :"FHS",
    "address":"Taiwan",
    "phone" :"09238723786"
  },
  {
    "name" :"Asian Tech",
    "address":"Vietname",
    "phone" :"984859845949"
  },{
    "name" :"Smartviet",
    "address":"USA",
    "phone" :"9588985650"
  },{
    "name" :"FPT",
    "address":"hongkong",
    "phone" :"94859459484"
  },{
    "name" :"Angular",
    "address":"japan",
    "phone" :"509059659650695"
  }]

}
export class Company{
   name: string;
   address: string;
   phone: string;
}
