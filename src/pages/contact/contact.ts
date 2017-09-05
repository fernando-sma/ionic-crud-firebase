import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { item } from '../../models/item/item.interface';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

item = {} as item;

itemref$: FirebaseListObservable<item[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {

    this.itemref$ = this.database.list('list');


  }


salvar(item: item){
  console.log(item);
  this.itemref$.push({
    itemName: this.item.itemName,
    itemNumber: Number(this.item.itemNumber)


  });


  this.navCtrl.push(HomePage);

}

opcao(item: item){
  this.actionSheetCtrl.create({
      title: `${item.itemName}`,
      buttons: [{
          text: 'alterar',
          handler: () => {}
         },{
           text: 'Apagar',
           role:'certeza?',
           handler: () =>{}
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
