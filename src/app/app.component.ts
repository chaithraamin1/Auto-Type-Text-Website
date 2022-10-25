import { TypeModifier } from '@angular/compiler';
import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auto-typing-website';
  ngOnInit(){
    //var autoText:any=document.querySelector("auto-text");
   var type=new Typed(".auto-text",{
    strings:["Coding","Sleeping","Eating"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
   });

  }
}
