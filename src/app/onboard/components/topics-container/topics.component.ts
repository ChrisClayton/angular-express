import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'topics-container',
  templateUrl: 'topics.component.html',
  styleUrls: ['topics.component.css']
})
export class TopicsComponent {
    @Input() isGrid: boolean;
    @Input() isStackable: boolean;
    @Output() onButtonClick = new EventEmitter<boolean>();
    selected = [];
    selectedNum: any = 0;
    showSignup: boolean;


    public topics = [
        { name: 'Design', id: 1 },
        { name: 'Code',   id: 2 },
        { name: 'Stuff',  id: 3 },
        { name: 'Other',  id: 4 },
        { name: 'Stuff',  id: 5 },
        { name: 'Stuff',  id: 6 }
      ];

    validSelect() {
        return this.selectedNum >= 3;
    }
    signupBtnClick() {
        if(this.selectedNum < 3) {
            console.log("you need 3!");
            return;
        }
        this.showSignup = (this.showSignup) ? false : true;
        this.onButtonClick.emit(this.showSignup);
    }

    handleSelected(evt) {
        // console.log(evt);
        if(!evt.selected) {
            let index = this.selected.indexOf(evt);
            this.selected.splice(index, 1);
            this.selectedNum--;
            console.log("removed");
        } else {
            this.selected.push(evt);
            this.selectedNum++;
            console.log("added");
        }

        console.log(this.selectedNum);
        console.log(this.selected);
    }
}
