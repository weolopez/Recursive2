import {Page, NavController} from 'ionic/ionic';
import {Storage} from '../../../models/storage/storage';
import {TeamListPage} from '../list/list';
import {TeamPage} from '../team';


@Page({
    templateUrl: 'build/pages/team/new/new.html',
    providers: [Storage]
})
export class TeamNewPage {
    constructor(nav: NavController, storage: Storage) {
        this.nav = nav;
        this.storage = storage;
        this.iurl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
       
    }
    addTeam() {
        var o = {name:this.teamName, imageurl:this.iurl}
        this.storage.add(o, 'teams');
        TeamPage.getInstance().setTeam(undefined);
        this.nav.setRoot(TeamListPage);
    }
}