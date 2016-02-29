import {Page, NavController, NavParams} from 'ionic/ionic';
import {Tournament} from '../../../models/tournament/tournament';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/tournament/edit/edit.html',
    providers: [Tournament], 
    pipes: [ObjectToArray]
})
export class TournamentEditPage {
    constructor(nav: NavController, navParams: NavParams, tournament: Tournament) {
        this.nav = nav;
        this.tournament = tournament;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.players = this.selectedItem.players;
        if (!this.players) this.players={};
    }
}
