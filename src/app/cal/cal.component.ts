import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})

export class CalComponent  implements OnInit{

  inputStr: any;
  
    ngOnInit(): void {
      this.inputStr = new FormGroup ({
        text : new FormControl()
      })
    }
  
    buttonClick(buttonElement:any){
     let buttonText = buttonElement.textContent
     if(this.inputStr.controls.text.value != null){
      this.inputStr.controls.text.setValue(
     
        this.inputStr.controls.text.value
        
        +buttonText)
     } else {
      this.inputStr.controls.text.setValue(buttonText)
     }
     
    }

    clearDisplay() {
      this.inputStr.controls.text.setValue("")
    }

    calculate() {
      let result = eval(this.inputStr.controls.text.value)
      this.inputStr.controls.text.setValue(result)
    }

  }
  
