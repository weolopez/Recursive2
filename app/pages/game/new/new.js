import {Page, NavController} from 'ionic/ionic';
import {GameListPage} from '../list/list';
import {ObjectToArray} from '../../../pipes/object_to_pipe';
import {DatePipe} from 'angular2/common';
import {Storage} from '../../../models/storage/storage';


@Page({
    templateUrl: 'build/pages/game/new/new.html',
    providers: [GameListPage, Storage],
    pipes: [ObjectToArray]
})
export class GameNewPage {
    constructor(nav: NavController, storage: Storage) {
        this.nav = nav;
        this.storage=storage;
        
        this.datePipe = new DatePipe();
        this.iurl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
        this.m = {
            home: 'Colorado',
            away: 'Chicago',
            month: 'Jan',
            day: 1,
            year: 2016,
            hour: 3,
            minute: 30,
            hours: 'PM'
        };
        this.month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    }
    addGame() {
       // this.game.addGame(this.newGame.name, this.newGame);
        this.storage.add(this.newGame, 'games');
        this.nav.setRoot(GameListPage);
    }
    getDateString() {
        let h = 0;
        var m=0;
        if ((this.m.hours === 'PM') &&
            (this.m.hour < 13)
            ) h = this.m.hour + 12;
        else h = this.m.hour;
        
        for (var i=0; i<this.month.length; i++)
            if (this.month[i] === this.m.month)                    
                m=i;

        this.gameDate = new Date(this.m.year, m, this.m.day,
            h, this.m.minute, 0);
        try {
            let d= this.datePipe.transform(this.gameDate, ['"yMdjmZ"']);           
        } catch (e) {
            console.log(e); // pass exception object to error handler
        }
        if (this.m.home.constructor === Array) this.m.home=this.m.home[0];
        if (this.m.away.constructor === Array) this.m.away=this.m.away[0];
        this.newGame = {
            home: {name:this.m.home},
            away: {name:this.m.away},
            epoch: this.gameDate.getTime(),
            name: this.m.home + this.m.away + this.gameDate.getTime().toString(),
            match_time: d
        }
            return this.newGame.match_time;
    }
}