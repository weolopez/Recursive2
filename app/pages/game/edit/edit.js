import {Page, NavController, NavParams} from 'ionic/ionic';
import {ObjectToArray} from '../../../pipes/object_to_pipe';
import {Storage} from '../../../models/storage/storage';

@Page({
    templateUrl: 'build/pages/game/edit/edit.html',
    providers: [Storage, ObjectToArray], 
    pipes: [ObjectToArray]
})
export class GameEditPage {
    constructor(nav: NavController, navParams: NavParams, storage: Storage, objectToArray: ObjectToArray) {
        this.nav = nav;
        this.storage=storage;
        this.objectToArray= objectToArray;
        
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.homeplayers = objectToArray.filter(this.selectedItem.home, 'name');
        this.awayplayers = objectToArray.filter(this.selectedItem.away, 'name');
        
        this.players = this.selectedItem.players;
        if (!this.players) this.players={};
    }
    addPlayer(player) {
        var gep = this;
        this.storage.add(player, 'games', this.selectedItem.name, this.isHome)
       
        if (this.isHome==='home') 
            gep.homeplayers.push(player);
        else
            gep.awayplayers.push(player);
    }
}