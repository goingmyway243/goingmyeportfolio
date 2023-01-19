import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {
  @Input() iconLink: string = '';
  @Input() href: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
