import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }
parameterName : string ="Kandala";
  ngOnInit() {

    this.parameterName= this.route.snapshot.params.name;
  
    console.log(this.parameterName);

  // Example 2:
    // this.route.paramMap.subscribe(params => {
    //   var id = params.get('id');
    //   console.log(id);
    // });

  }

}
