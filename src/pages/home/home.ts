import { Component } from '@angular/core';
import { NavController,ActionSheetController} from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import { item } from  '../../models/item/item.interface'
import { AboutPage } from  '../about/about'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

listRef$: FirebaseListObservable<item[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {

    this.listRef$ = this.database.list('list');

    console.log(this.database.list);
  }




  opcao(item: item){
    this.actionSheetCtrl.create({
        title: `${item.itemName}`,
        buttons: [{
            text: 'alterar',
            handler: () => {
              this.navCtrl.push(AboutPage, {
                itemId: item.$key
              })


            }
           },{
             text: 'Apagar',
             role:'certeza?',
             handler: () =>{
                this.listRef$.remove(item.$key);


             }
           },
           {
             text: 'Nada não',
             role: 'deixa',
             handler: () => {
  
             }
           }
        ]
  
    }).present();
  }

}
