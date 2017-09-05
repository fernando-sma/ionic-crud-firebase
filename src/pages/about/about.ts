import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { item } from '../../models/item/item.interface';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

itemRef$: FirebaseObjectObservable<item>
item = {} as item;
  constructor(public navParams: NavParams ,public navCtrl: NavController, private database: AngularFireDatabase) {


      const itemId = this.navParams.get('itemId');
      this.itemRef$ = this.database.object(`list/${itemId}`);
      console.log(itemId);
      this.itemRef$.subscribe(item => this.item = item)

  }

editar(item: item){
  this.itemRef$.update(item);
  this.navCtrl.push(HomePage);
}



}
