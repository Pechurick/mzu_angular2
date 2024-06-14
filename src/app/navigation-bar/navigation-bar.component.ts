import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from './navigation-bar.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  providers: [NavigationBarService]
})
export class NavigationBarComponent implements OnInit{

  headerMenu: { text: string, link: string, img?: string }[] = [];
  logo: {img: string, text: string};
  searchIcon: string;
  languageController: {text: string, img: string};
  compliance: {text: string, logo: string};
  blindController: {img: string, text: string}

  constructor(private navigationBarService: NavigationBarService){}
  
  ngOnInit(): void {
    this.headerMenu = this.navigationBarService.getHeaderMenu();
    this.logo = this.navigationBarService.getLogo();
    this.searchIcon = this.navigationBarService.getSearchIcon();
    this.languageController = this.navigationBarService.getlanguageController();
    this.compliance = this.navigationBarService.getCompliance();
    this.blindController = this.navigationBarService.getBlindController();
  }
}
