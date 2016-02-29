import {Injectable} from 'angular2/core';
import {Team} from '../team/team';
import {Game} from '../game/game';

let instance;

@Injectable()
export class Pick {
    static list;
    constructor(team: Team) {
        if (!instance) {
            instance = this;
        } else return instance;

        this.ref = new Firebase('https://yourpicks.firebaseio.com/picks');
        this.getList();
        this.team = Team.getInstance();
        this.game = Game.getInstance();
    }
    static getInstance() { return instance; }

    getList() {
        var t = this;
        return this.ref.once('value').then((d) => {
            t.list = d.val();
            return d;
        });
    }
    addPick(pickID, userID, pick) {
        this.ref.child(pickID).child(userID).set(pick);
    }
}