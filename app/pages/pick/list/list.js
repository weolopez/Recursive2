import {Page, NavController, NavParams, Inject} from 'ionic/ionic';
import {PickEditPage} from '../edit/edit';
import {PickPage} from '../pick';
import {ObjectToKey, ObjectToArray} from '../../../pipes/object_to_pipe';
import {Storage} from '../../../models/storage/storage';

@Page({
    templateUrl: 'build/pages/pick/list/list.html',
    providers: [ Storage ], 
    pipes: [ObjectToKey, ObjectToArray]
})
export class PickListPage {
    constructor(nav: NavController, navParams: NavParams, storage: Storage) {
        this.nav = nav;
        this.storage = storage;
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