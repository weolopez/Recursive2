import {Page} from 'ionic/ionic';
import {Login} from '../../components/login/login';
import {Edit} from  '../../components/edit/edit';
import {ObjectToArray, ObjectToKey} from '../../pipes/object_to_pipe';

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
    directives: [Login, Edit],
    pipes: [ObjectToArray, ObjectToKey]
})
export class HelloIonicPage {
    constructor() {
        this.types = {
            teams: {
                type: 'type',
                name: 'teams',
                types: {
                    name: 'Team Name',
                    imageurl: 'http://'
                }
                
            },
            games: {
                type: 'type',
                name: 'games',
                types: {
                    name: '@home+away+epoch',
                    home: 'home team',
                    away: 'away team',
                    epoch: 'epoch game time', 
                    players: {
                        home: [],
                        away: []
                    }
                }
            },
            picks: {
                type: 'type',
                name: 'picks',
                types: {
                    name: '@game+user',
                    game: 'gameID',
                    user: 'userID',
                    away_player: 'away_player',
                    away_score: 0,
                    home_player: 'home_player',
                    home_score: 0
                }
            },
            tournaments: {
                type: 'type',
                name: 'tournaments',
                types: {
                    name: 'Tournament Name',
                    games: [],
                    users: [],
                    rules: []
                }
            }
        }
        this.getTypeList();
    }
    itemTapped(event, item) {
       // this.nav.push(this, {
       //     item: item
       // });
    }
    getTypeList() {
        var t = this;
        for (var key of Object.keys(t.types)) {
            var ref = new Firebase('https://yourpicks.firebaseio.com/' + key);
            t.types[key].ref = ref;
            ref.once('value').then((value) => {
                var name = value.key();
                t.types[name].list = value.val();
            });
        }
    }
}
