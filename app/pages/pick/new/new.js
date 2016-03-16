import {Page, NavController} from 'ionic/ionic';
import {PickListPage} from '../list/list';
import {ObjectToArray} from '../../../pipes/object_to_pipe';


@Page({
    templateUrl: 'build/pages/pick/new/new.html',
    providers: [PickListPage],
    pipes: [ObjectToArray]
})
export class PickNewPage {
    constructor(nav: NavController) {
        this.nav = nav;
        
    }
    addPick() {
            this.nav.setRoot(PickListPage);
    }
}