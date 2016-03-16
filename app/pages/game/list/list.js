import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {GameEditPage} from '../edit/edit';
import {Storage} from '../../../models/storage/storage';
import {GamePage} from '../game';
import {ObjectToArray} from '../../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/game/list/list.html',
    providers: [Storage],
    pipes: [ObjectToArray]
}) 
export class GameListPage {
    constructor(nav: NavController, navParams: NavParams, storage: Storage) {
        this.nav = nav;
        this.storage=storage;
        GamePage.getInstance().setGame(undefined);
    }
    
    itemTapped(event, item) {
        this.nav.push(GameEditPage, {
            item: item
        });
        GamePage.getInstance().setGame(item);
    }
}