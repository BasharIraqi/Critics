import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { critic } from '../interfaces/critic';
import { CriticsService } from '../services/critics.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  critics: critic[] = [] as critic[];

  id: number = 0;
  constructor(private criticService: CriticsService,
    private router: Router, private route: ActivatedRoute) {
    criticService.getCritics().subscribe((critics: any) => {
      this.critics = critics;
    })
   route.params.subscribe(params => {
     this.id = params['id'];
   })
  }

  ngOnInit(): void {
  }
}
