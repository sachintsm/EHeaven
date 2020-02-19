import { Component, OnInit } from '@angular/core';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  faAt = faAt;
  
  constructor() { }

  ngOnInit() {
  }
  
}
