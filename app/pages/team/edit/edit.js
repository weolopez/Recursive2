import {Page, NavController, NavParams} from 'ionic/ionic';
import {Storage} from '../../../models/storage/storage';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/team/edit/edit.html',
    providers: [Storage, ObjectToArray], 
    pipes: [ObjectToArray]
})
export class TeamEditPage {
    constructor(nav: NavController, navParams: NavParams, storage: Storage, objectToArray: ObjectToArray) {
        this.nav = nav;
        this.storage = storage;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.players = objectToArray.filter(this.selectedItem.players, name);
        if (!this.players) this.players={};
    }
    addPlayer() {
        this.storage.add(this.newPlayer, 'teams', this.selectedItem.name, 'players');
        this.players.push(this.newPlayer);
    }
    
}
