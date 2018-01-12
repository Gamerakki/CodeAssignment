import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { CustomHttpService } from '../../servcie/httpcall.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public checkSubscription: Subscription;
  public inputedtext: any;
  public palindromeOrNot: any;
  constructor(public navCtrl: NavController,
    public httpcall: CustomHttpService, ) {

  }


  /**
   * this function is use to call the http service 
   * from the customhttpservice.
   * This function make the server call and pass the data to server
   * where the vaildation for palindrome takes place.
   * And according to the result the boolean value is 
   * set to true or false
   */
  getDataFromServeForpalindrome () {
    if (this.inputedtext !== "" && this.inputedtext !== undefined) {
      console.log(this.inputedtext)
      let formData: FormData = new FormData();
      formData.append('getString', this.inputedtext);
      this.checkSubscription = this.httpcall.callServerApi(formData).subscribe(
        (data) => {
          console.log(data._body);
          if(data._body === '<br>Not Plaindrome'){
            this.palindromeOrNot = false;
          }else{
            this.palindromeOrNot = true
          }
        },
        (error) => {
          alert(error);
        }
      );
    }else{
      alert('Please enter a text');
    }

  }
}
