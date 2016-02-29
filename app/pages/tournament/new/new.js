import {Page, NavController} from 'ionic/ionic';
import {Tournament} from '../../../models/tournament/tournament';
import {TournamentListPage} from '../list/list';
import {TournamentPage} from '../tournament';


@Page({
    templateUrl: 'build/pages/tournament/new/new.html',
    providers: [Tournament]
})
export class TournamentNewPage {
    constructor(nav: NavController, tournament: Tournament) {
        this.nav = nav;
        this.tournament = tournament;
        this.iurl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
       
    }
    addTournament() {
        this.tournament.addTournament(this.tournamentName, this.iurl);
        TournamentPage.getInstance().setTournament(undefined);
        Tournament.getInstance().getList();
        this.nav.setRoot(TournamentListPage);
    }
}