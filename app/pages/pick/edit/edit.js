import {Page, NavController, NavParams} from 'ionic/ionic';
import {Pick} from '../../../models/pick/pick';
import {Game} from '../../../models/game/game';
import {User} from '../../../models/user/user';
import {ObjectToKey, ObjectToArray} from '../../../pipes/object_to_pipe'

@Page({
    templateUrl: 'build/pages/pick/edit/edit.html',
    providers: [Pick, Game], 
    pipes: [ObjectToKey, ObjectToArray]
})
export class PickEditPage {
    constructor(nav: NavController, navParams: NavParams, pick: Pick, game: Game) {
        this.nav = nav;
        this.pick = Pick.getInstance();
        this.user = User.getInstance();
        this.game = Game.getInstance();
        
        if (!Game.list) {
            this.game.getList().then( v=>this.games=v.val() );
        } else {
            this.games=Game.list;
        }
        if (!Pick.list) {
            this.pick.getList().then( v=>this.picks=v.val() );
        } else {
            this.picks=Pick.list;
        }
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