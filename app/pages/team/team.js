import {Page, NavController, NavParams, Injectable} from 'ionic/ionic';
import {TeamListPage} from './list/list';
import {TeamEditPage} from './edit/edit';
import {TeamNewPage} from './new/new';

let instance;

@Page({
  templateUrl: 'build/pages/team/team.html'
})
export class TeamPage {
  constructor(nav: NavController, navParams: NavParams) {
    if(!instance){
              instance = this;
    } else return instance;
      
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.teamListRoot = TeamListPage;
    this.teamEditRoot = TeamEditPage;
    this.teamNewRoot = TeamNewPage;
  }
  setTeam(team) {
      this.selectedItem=team;
  }
  static getInstance() {
      return instance;
  }
}
