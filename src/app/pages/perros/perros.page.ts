import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {
  public perro: any;
  public EnlacePerro: string;
  public razaPerro: string;

  constructor( private taskService: TaskService) { }

  ngOnInit() {
    // this.taskService.getPerro().subscribe(
    //   result => {
    //     this.perro = result.message;
        
    //     this.EnlacePerro = result.message.split("/");
    //     console.log(this.EnlacePerro[this.EnlacePerro.length-2]);
    //     this.razaPerro = this.EnlacePerro[this.EnlacePerro.length-2];
        
    //     console.log(result.message);
    //     console.log(result);
    //   },
    //   error => {
    //     console.log(<any>error);
        
    //   }
    // )
  }

  getPerros() {
    this.taskService.getPerro().subscribe(
      result => {
        this.perro = result.message;
        
        this.EnlacePerro = result.message.split("/");
        console.log(this.EnlacePerro[this.EnlacePerro.length-2]);
        this.razaPerro = this.EnlacePerro[this.EnlacePerro.length-2];
        
        console.log(result.message);
        console.log(result);
      },
      error => {
        console.log(<any>error);
        
      }
    )
  }

  

}
