import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('disabled')
  disabled = false;
  
  @Input('size')
  size = 'S'; // S,M,L

  @Input('shade')
  shade = 'NA'; // D,L,W,NA

  @Input('animation')
  animation='F'; // C,F

  @Input('name')
  name=''; 
  animationClass='';
  shadeClass='';
  constructor() { }

  ngOnInit(): void {
    this.setUpAnimationClass();
    this.setUpShadeClass();
  }
  setUpAnimationClass(){
    
    if(!this.disabled && this.animation==='F'&&this.shade==='D')
    {
       this.animationClass = 'hover:bg-emerald-50';
    }
    else if(!this.disabled && this.animation==='F'&&this.shade==='L'){
       this.animationClass = 'hover:bg-emerald-600';
    }
    else if(!this.disabled && this.animation==='F'&&this.shade==='W'){
      this.animationClass = 'hover:bg-emerald-600';
    }
  }
  setUpShadeClass(){
    
    if(this.shade==='D' && this.size!='L'){
      this.shadeClass = 'border bg-emerald-600 text-emerald-50 border-emerald-600 hover:text-slate-700';
    }
    else if(this.shade==='D' && this.size==='L'){
      this.shadeClass = 'border bg-emerald-600 text-emerald-50 border-emerald-600';
    }
    else if(this.shade==='L'){
      this.shadeClass = 'border bg-emerald-50 text-emerald-600 border-emerald-600 hover:text-emerald-50';
    }
    else if(this.shade==='W'){
      this.shadeClass = 'border bg-white text-slate-700 border-emerald-600 hover:text-emerald-50';
    }
    else{
      this.shadeClass='text-emerald-600 hover:text-slate-700';
    }
  }

}
