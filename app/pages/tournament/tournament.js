import {Page, NavController, NavParams, Injectable} from 'ionic/ionic';
import {TournamentListPage} from './list/list';
import {TournamentEditPage} from './edit/edit';
import {TournamentNewPage} from './new/new';
import {Login} from '../../components/login/login';

let instance;

@Page({
  templateUrl: 'build/pages/tournament/tournament.html',
  directives: [Login]
})
export class TournamentPage {
  constructor(nav: NavController, navParams: NavParams) {
    if(!instance){
              instance = this;
    } else return instance;
      
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tournamentListRoot = TournamentListPage;
    this.tournamentEditRoot = TournamentEditPage;
    this.tournamentNewRoot = TournamentNewPage;
  }
  setTournament(tournament) {
      this.selectedItem=tournament;
  }
  static getInstance() {
      return instance;
  }
}
