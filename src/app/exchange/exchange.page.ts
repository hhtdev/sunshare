import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {

  page = "exchange"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
