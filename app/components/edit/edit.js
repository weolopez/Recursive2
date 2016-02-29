import {Component, View} from 'angular2/core';
import {Select, Option, Item, List} from 'ionic/ionic';
import {ObjectToArray, ObjectToKey} from '../../pipes/object_to_pipe';
import {Team} from '../../models/team/team';

@Component({ 
    selector: 'edit'
    ,inputs: ['type','object'] 
   })
@View({  templateUrl: 'build/components/edit/edit.html' 
    ,pipes: [ObjectToArray, ObjectToKey],
    directives: [Select, Option, Item, List]})
export class Edit {
  type: String;
  object: Object;
  constructor() {
      this.teams=Team.getInstance().list;
      this.team=Team.getInstance();
  }
  toString(o) {
      return JSON.stringify(o);
  }
}