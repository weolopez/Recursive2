import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {GameEditPage} from '../edit/edit';
import {Game} from '../../../models/game/game';
import {GamePage} from '../game';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/game/list/list.html',
    providers: [ Game ], 
    pipes: [ObjectToArray]
})
export class GameListPage {
    constructor(nav: NavController, navParams: NavParams, game:Game) {
        this.nav = nav;
        this.game = Game;
        GamePage.getInstance().setGame(undefined);
    }
    itemTapped(event, item) {
        this.nav.push(GameEditPage, {
            item: item 
        });
        GamePage.getInstance().setGame(item);
    }
}