import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'topics-topic',
  templateUrl: 'topic.component.html',
  styleUrls: ['topic.component.css']
})
export class TopicComponent { 
    selected = false;
    @Input() tid: any;
    // @Input() tname: any = "y";
    @Output() onSelect = new EventEmitter<any>();

    select(obj:any) {
        this.selected = (this.selected) ? false : true;
        obj.selected = this.selected;
        // console.log(this.selected);
        // if(this.selected == false) {
        //     console.log("selected " + this.tid);
            this.onSelect.emit(obj);
        //     this.selected = true;
        // } else {
        //     console.log("unselected " + this.tid)
        //     this.onSelect.emit(false);
        //     this.selected = false;
        // }
    }
}
