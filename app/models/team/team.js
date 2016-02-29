import {Injectable} from 'angular2/core';

let instance;

@Injectable()
export class Team {
    static list={};
    constructor() {
        if (!instance) {
            instance = this;
        } else return instance;
        
        this.ref = new Firebase('https://yourpicks.firebaseio.com/teams');
        this.getList();
    }
    
    static getInstance() {return instance;}
    
    getList() {
        var t = this;
        return this.ref.once('value').then((d) => {
            t.list=d.val();
        });
    }
    getTeam(teamName){
        if ((!teamName)||(teamName.length<1)) return {};
        var teamID = teamName.tobase64url();
        if (!this.list[teamID]) return {};
        else return this.list[teamID]
    }
    addPlayer(team, player) {
        var codedTeam = team.tobase64url();
        this.ref.child(codedTeam).child('players').push(player);
    } 
    addTeam(newTeamName, newURL) {
        var codedTeam = newTeamName.tobase64url();
        if (this.list[codedTeam]) return;
        var newTeam = {};
        newTeam.name = newTeamName;
        newTeam.imageurl = newURL;
        this.ref.child(codedTeam).set(newTeam);
    }
}