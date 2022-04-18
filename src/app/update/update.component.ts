import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { critic } from '../interfaces/critic';
import { CriticsService } from '../services/critics.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  critic: critic = {} as critic;
  id: number = 0;

  constructor(private criticService: CriticsService,
    private router: Router,
    private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    this.criticService.getSpecificCritic(this.id).subscribe((critic: any) => {
      this.critic = critic;
    })
  }

  onSubmit(form: any) {
    this.criticService.updateCritic(form,this.id).subscribe((critic: any) => {
      this.router.navigate(['']);
    })
  }
}
