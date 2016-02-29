import {Injectable} from 'angular2/core';
import {Team} from '../team/team';

let instance;

@Injectable()
export class Game {
    static list;
    static emptyTeam={imageurl:''};
    constructor(team: Team) {
        if (!instance) {
            instance = this;
        } else return instance;

        this.ref = new Firebase('https://yourpicks.firebaseio.com/games');
        this.getList();
        this.team = Team.getInstance();
    }
    static getInstance() { return instance; }
    
    getList() {
        var game = this;
        return this.ref.once('value').then((d) => {
            game.list = d.val();
            return d;
        });
    }
    getHomeTeam(gameID) {
        if (!gameID) return Game.emptyTeam;
        if (!this.list[gameID]) return Game.emptyTeam;
        return this.team.list[this.list[gameID].home.tobase64url()];
    }
    getAwayTeam(gameID) {
        if (!gameID) return Game.emptyTeam;
        if (!this.list[gameID]) return Game.emptyTeam;
        return this.team.list[this.list[gameID].away.tobase64url()];
    }
    addPlayer(game, isHome, player) {
        var codedGame = game.tobase64url();
        this.ref.child(codedGame).child('players').child(isHome).push(player);
    }
    addGame(gameName, game) {
        var codedGame = gameName.tobase64url();
        if (this.list[codedGame]) return;
        this.ref.child(codedGame).set(game);
    }
}
