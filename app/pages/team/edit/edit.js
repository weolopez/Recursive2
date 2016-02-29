import {Page, NavController, NavParams} from 'ionic/ionic';
import {Team} from '../../../models/team/team';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/team/edit/edit.html',
    providers: [Team], 
    pipes: [ObjectToArray]
})
export class TeamEditPage {
    constructor(nav: NavController, navParams: NavParams, team: Team) {
        this.nav = nav;
        this.team = team;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.players = this.selectedItem.players;
        if (!this.players) this.players={};
    }
}
