import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Country = new FormControl();

  Selected="Select"
  option="";


  CountryList =['Afghanistan','Angola','Belgium','Brazil','Cameroom','China','Cuba','Dernmark','Egpty','Finland','France','Gabon','Germany','Ghana','Hungary','India','Iraq','Itally','Japan'];

  constructor() { }
expanded = false;
  ngOnInit() {
  }

  all()
  {


    if(this.Selected=="Select")
    {
      this.Selected="Unselect"


      this.CountryList.forEach(element => {

        this.option= this.option+ element+','
        console.log(element)
        console.log(this.option)
      

      });


    }
    else
    {
      this.Selected="Select";
      this.option="";

    }
  }


  Displaylist() {
  let checkboxes = document.getElementById("selectOption");
  if (!this.expanded) {

    checkboxes?.setAttribute("style"," display: block")



    this.expanded = true;
  } else {


    checkboxes?.setAttribute("style","display:none")
    this.expanded = false;
  }
}

text ="stuur,mami,dan"

check(op:any)
{




  if(this.option.length==0)
  {
    this.option=op;
    console.log(op)
    console.log(this.option)
  }
  else
  {
    this.option=this.option+','+op;
    console.log(this.option)

  }
 // this.option=op;

  console.log(op)
}




}
