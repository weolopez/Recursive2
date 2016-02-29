import {Injectable} from 'angular2/core';

let instance;

@Injectable()
export class Tournament {
    static list={};
    constructor() {
        if (!instance) {
            instance = this;
        } else return instance;
        
        this.ref = new Firebase('https://yourpicks.firebaseio.com/tournaments');
        this.getList();
    }
    
    static getInstance() {return instance;}
    
    getList() {
        var t = this;
        return this.ref.once('value').then((d) => {
            t.list=d.val();
        });
    }
    addPlayer(tournament, player) {
        var codedTournament = tournament.tobase64url();
        this.ref.child(codedTournament).child('players').push(player);
    }
    addTournament(newTournamentName, newURL) {
        var codedTournament = newTournamentName.tobase64url();
        if (this.list[codedTournament]) return;
        var newTournament = {};
        newTournament.name = newTournamentName;
        newTournament.imageurl = newURL;
        this.ref.child(codedTournament).set(newTournament);
    }
}