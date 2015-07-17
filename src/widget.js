import {bindable} from 'aurelia-framework';

export class Widget {
  @bindable isOpen = false;
  @bindable name = '';
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  isOpenChanged(newValue){
    if(newValue){
      this.name = '';
    }
  }
}