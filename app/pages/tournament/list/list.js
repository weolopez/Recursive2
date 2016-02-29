import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {TournamentEditPage} from '../edit/edit';
import {Tournament} from '../../../models/tournament/tournament';
import {TournamentPage} from '../tournament';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/tournament/list/list.html',
    providers: [ Tournament ], 
    pipes: [ObjectToArray]
})
export class TournamentListPage {
    constructor(nav: NavController, navParams: NavParams, tournament: Tournament) {
        this.nav = nav;
        this.tournament=Tournament;
        TournamentPage.getInstance().setTournament(undefined);
    }
    itemTapped(event, item) {
        this.nav.push(TournamentEditPage, {
            item: item
        });
        TournamentPage.getInstance().setTournament(item);
    }
}
 