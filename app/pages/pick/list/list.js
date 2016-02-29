import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {PickEditPage} from '../edit/edit';
import {Pick} from '../../../models/pick/pick';
import {Game} from '../../../models/game/game';
import {PickPage} from '../pick';
import {ObjectToKey, ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/pick/list/list.html',
    providers: [ Pick, Game ], 
    pipes: [ObjectToKey, ObjectToArray]
})
export class PickListPage {
    constructor(nav: NavController, navParams: NavParams, pick:Pick, game:Game) {
        this.nav = nav;
        this.pick = Pick;
        this.game = Game.getInstance();
    }
    itemTapped(event, item) {
        this.nav.push(PickEditPage, {
            item: item 
        }); 
        PickPage.getInstance().setPick(item);
    }
    getPoints (player, gameplayers) {
            if (!gameplayers) return;
            return gameplayers.reduce(function (n, val) {
                return n + (val === player);
            }, 0);
        }
}