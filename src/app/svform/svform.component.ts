import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svform',
  templateUrl: './svform.component.html',
  styleUrls: ['./svform.component.scss']
})
export class SvformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contactMethods = [
    { id: 1, name: 'email' },
    { id: 2, name: 'phone' }
  ];
  submit(f){
    // here we can use f.value to send value to server 
    console.log(f);
  }
  popwin(){
    window.open("https://support.microsoft.com/en-us/help/4026971/microsoft-account-how-to-reset-your-password",'_blank', "height=600,width=600");
  }

 
}
