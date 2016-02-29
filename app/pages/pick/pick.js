import {Page, NavController, NavParams, Injectable} from 'ionic/ionic';
import {PickListPage} from './list/list';
import {PickEditPage} from './edit/edit';
import {PickNewPage} from './new/new';

let instance;

@Page({
  templateUrl: 'build/pages/pick/pick.html'
})
export class PickPage {
  constructor(nav: NavController, navParams: NavParams) {
    if(!instance){
              instance = this;
    } else return instance;
      
    this.nav = nav;
    this.selectedItem = navParams.get('item');
    this.pickListRoot = PickListPage;
    this.pickEditRoot = PickEditPage;
    this.pickNewRoot = PickNewPage;
  }
  setPick(pick) {
      this.selectedItem=pick;
  }
  static getInstance() {
      return instance;
  }
}
