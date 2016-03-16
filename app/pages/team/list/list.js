import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {TeamEditPage} from '../edit/edit';
import {TeamPage} from '../team';
import {ObjectToArray} from '../../../pipes/object_to_pipe';
import {Storage} from '../../../models/storage/storage';

@Page({
    templateUrl: 'build/pages/team/list/list.html',
    providers: [ Storage ], 
    pipes: [ObjectToArray]
})
export class TeamListPage {
    constructor(nav: NavController, navParams: NavParams,storage: Storage) {
        this.nav = nav;
        this.storage=storage;
        TeamPage.getInstance().setTeam(undefined);
    }
    itemTapped(event, item) {
        this.nav.push(TeamEditPage, {
            item: item
        });
        TeamPage.getInstance().setTeam(item);
    }
    getTeams() {
        return this.storage.teamArray;
    }
}
 