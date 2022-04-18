import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { critic } from '../interfaces/critic';
import { CriticsService } from '../services/critics.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  critic:critic={} as critic;
  constructor(private criticsService:CriticsService,
    private router:Router) {

   }

  ngOnInit(): void {
  }

  onSubmit(form:any) {
    this.criticsService.postCritic(form).subscribe((critic:any)=>{
      this.critic = critic;
      this.router.navigate(['read']);
    })
  }
}
