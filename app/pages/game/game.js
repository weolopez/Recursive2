import {Page, NavController, NavParams, Injectable} from 'ionic/ionic';
import {GameListPage} from './list/list';
import {GameEditPage} from './edit/edit';
import {GameNewPage} from './new/new';

let instance;

@Page({
  templateUrl: 'build/pages/game/game.html'
})
export class GamePage {
  constructor(nav: NavController, navParams: NavParams) {
    if(!instance){
              instance = this;
    } else return instance;
      
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.gameListRoot = GameListPage;
    this.gameEditRoot = GameEditPage;
    this.gameNewRoot = GameNewPage;
  }
  setGame(game) {
      this.selectedItem=game;
  }
  static getInstance() {
      return instance;
  }
}
