import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [TaskService]
})

export class AppComponent {
  
  public perro: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private taskService: TaskService
  )    {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // getAllTask(){
  //   this.taskService.getAllTask()
  //   .subscribe(todos => {
  //     console.log(todos);
  //   });
  // }

  
  // getTask(){
  //   this.taskService.getTask('1')
  //   .subscribe(todo => {
  //     console.log(todo);
  //   });
  // }
    


  // perros(){
  //   this.taskService.getPerro().subscribe(
  //     result => {
  //       this.perro = result.message;
  //       console.log(result.message);
  //       console.log("exito");        
  //     },
  //     error => {
  //       console.log(<any>error);
        
  //     }
  //   )
  // }

  // ngOnInit(){
  //   this.taskService.getPerro().subscribe(
  //     result => {
  //       console.log(result);
  //       console.log("exito");
     
  //     },
  //     error => {
  //       console.log(<any>error);
        
  //     }
  //   )
  // }

}
