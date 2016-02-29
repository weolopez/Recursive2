import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {TeamEditPage} from '../edit/edit';
import {Team} from '../../../models/team/team';
import {TeamPage} from '../team';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/team/list/list.html',
    providers: [ Team ], 
    pipes: [ObjectToArray]
})
export class TeamListPage {
    constructor(nav: NavController, navParams: NavParams, team: Team) {
        this.nav = nav;
        this.team=Team;
        TeamPage.getInstance().setTeam(undefined);
    }
    itemTapped(event, item) {
        this.nav.push(TeamEditPage, {
            item: item
        });
        TeamPage.getInstance().setTeam(item);
    }
}
 