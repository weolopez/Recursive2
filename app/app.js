import {App, IonicApp, Platform} from 'ionic/ionic';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {PickPage} from './pages/pick/pick';
import {TeamPage} from './pages/team/team';
import {TournamentPage} from './pages/tournament/tournament';
import {GamePage} from './pages/game/game';
import {Game} from './models/game/game';
import {Team} from './models/team/team';
import {User} from './models/user/user';

import {TournamentNewPage} from './pages/tournament/new/new';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [Team, Game, User]
})
class MyApp {
  constructor(app: IonicApp, platform: Platform, game: Game) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();
    this.game = Game.getInstance();
    this.user = User.getInstance();
    
    // set our app's pages
    this.pages = [
      { title: 'Welcome', component: HelloIonicPage },
      { title: 'Pick', component: PickPage },
      { title: 'Team', component: TeamPage },
      { title: 'Game', component: GamePage },
      { title: 'Tournament', component: TournamentPage }
      ,{ title: 'TournamentNewPage', component: TournamentNewPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
