import {Page, NavController, NavParams} from 'ionic/ionic';
import {User} from '../../../models/user/user';
import {ObjectToKey, ObjectToArray} from '../../../pipes/object_to_pipe'
import {Storage} from '../../../models/storage/storage';
import {GameEdit} from '../../../components/game/game';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

@Page({
    templateUrl: 'build/pages/pick/edit/edit.html',
    providers: [Storage], 
    pipes: [ObjectToKey, ObjectToArray],
    directives: [GameEdit]
})
export class PickEditPage {
    constructor(nav: NavController, navParams: NavParams, storage: Storage) {
        this.nav = nav;
        this.storage = storage;
        this.user = User.getInstance();
        
    }
    save(item) {
        this.pick.addPick(item, this.userID, this.picks[item][this.userID]);
    }
    getScore(item, home) {
        var p = this.picks;
        if (!p) return;
        
        this.userID = this.user.user.name.tobase64url();
        if (!this.userID) return;
        
        if (!p[item]) p[item]={};
        if (!p[item][this.userID]) p[item][this.userID]={
            'home_score': '-',
            'away_score': '-',
            'home_player': '-',
            'away_player': '-'
        };
        
        return p[item][this.userID][home];
    }
    isGameInFuture(item) {
         return item.epoch < Date.now();
    }
    itemTapped(item) {
        this.gameID=item;
        this.homeScoreColor = 'green';
        this.awayScoreColor = 'whitesmoke';
        this.team='home';
    }
}