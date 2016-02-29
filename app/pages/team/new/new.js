import {Page, NavController} from 'ionic/ionic';
import {Team} from '../../../models/team/team';
import {TeamListPage} from '../list/list';
import {TeamPage} from '../team';


@Page({
    templateUrl: 'build/pages/team/new/new.html',
    providers: [Team]
})
export class TeamNewPage {
    constructor(nav: NavController, team: Team) {
        this.nav = nav;
        this.team = team;
        this.iurl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
       
    }
    addTeam() {
        this.team.addTeam(this.teamName, this.iurl);
        TeamPage.getInstance().setTeam(undefined);
        Team.getInstance().getList();
        this.nav.setRoot(TeamListPage);
    }
}