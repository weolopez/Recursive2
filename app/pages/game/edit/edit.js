import {Page, NavController, NavParams} from 'ionic/ionic';
import {Game} from '../../../models/game/game';
import {ObjectToArray} from '../../../pipes/object_to_pipe'

@Page({
    templateUrl: 'build/pages/game/edit/edit.html',
    providers: [Game], 
    pipes: [ObjectToArray]
})
export class GameEditPage {
    constructor(nav: NavController, navParams: NavParams, game: Game) {
        this.nav = nav;
        this.game = Game;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (!this.selectedItem.players) this.selectedItem.players={};
        this.players = this.selectedItem.players;
        if (!this.players) this.players={};
    }
    addPlayer(player) {
        this.game.getInstance().addPlayer(this.selectedItem.name, this.isHome, player);
        if (!this.selectedItem.players[this.isHome]) 
            this.selectedItem.players[this.isHome]={'0':player}
        else
            this.selectedItem.players[this.isHome][player.tobase64url]=player;
    }
    getScore(o,h) {
        if ( (!o) ||
             (!o.players[h]) )return 0;
        return Object.keys(o.players[h]).length||0;
    }
}