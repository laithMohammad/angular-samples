import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../Sample';
import {SampleService} from '../sample.service';
import {SampleListComponent} from "../sample-list/sample-list.component";

@Component({
  selector: 'app-sample-details',
  templateUrl: './sample-details.component.html',
  styleUrls: ['./sample-details.component.css']
})
export class SampleDetailsComponent implements OnInit {

  @Input() sample: Sample;

  constructor(private sampleService: SampleService, private listComponent: SampleListComponent) { }

  ngOnInit() {
  }

}
