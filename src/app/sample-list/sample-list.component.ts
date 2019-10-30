import { Component, OnInit } from '@angular/core';
import {Sample} from "../Sample";
import {SampleService} from "../sample.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})

export class SampleListComponent implements OnInit {

  samples: Observable<Sample[]>; 
  constructor(private sampleService: SampleService) { }


  reload() {
    this.samples = this.sampleService.getSampleList();
  }

  ngOnInit() {
    this.reload();
  }

  

}
