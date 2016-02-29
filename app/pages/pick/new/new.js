import {Page, NavController} from 'ionic/ionic';
import {Pick} from '../../../models/pick/pick';
import {Game} from '../../../models/game/game';
import {Team} from '../../../models/team/team';
import {PickListPage} from '../list/list';
import {ObjectToArray} from '../../../pipes/object_to_pipe';


@Page({
    templateUrl: 'build/pages/pick/new/new.html',
    providers: [Game, Team, Pick, PickListPage],
    pipes: [ObjectToArray]
})
export class PickNewPage {
    constructor(nav: NavController, pick: Pick, team: Team, game: Game) {
        this.nav = nav;
        this.pick = pick;
        this.team = Team;
        this.game = Game;
        
    }
    addPick() {
            this.pick.addPick(newPick.name, newPick);
            this.nav.setRoot(PickListPage);
    }
}