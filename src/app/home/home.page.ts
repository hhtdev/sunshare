import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Déclaration de la page
  page = "home"

  constructor(
    private router: Router
  ) {

  }

  navigation(param){
    //Permet la navigation dans les onglets suivant un paramètre
    console.log("Switching to " + param)
    if(param == "home"){
      this.router.navigate(['/home'])
    }else if(param == "community"){
      this.router.navigate(['/community'])
    }else if(param == "exchange"){
      this.router.navigate(['/exchange'])
    }else if(param == "about"){
      this.router.navigate(['/about'])
    }
  }
}
