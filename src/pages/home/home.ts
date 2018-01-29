import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public boolWeek:boolean = false; // false=>unselected ; true=>selected
	  
	constructor(public navCtrl: NavController)
	{
	  this.init();
	}

	private init()
	{
		this.boolWeek = true;// binded to ion-radio UIs, wrapped in the radio-group list
	}

	public change_choiceDay(_boolWeek:boolean)
	{
	    if(this.boolWeek!= _boolWeek){
	      console.log("_boolWeek = "+_boolWeek);
	      this.boolWeek = _boolWeek;
	      // Do what you want with value : saving it, or sending it...
	      console.log("this.boolWeek = "+this.boolWeek);
	    }
	}
}