import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  page = "community"

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
