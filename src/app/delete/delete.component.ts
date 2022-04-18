import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriticsService } from '../services/critics.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: number = 0;
  constructor(private criticService: CriticsService
    , private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
  }

  onApprove() {
    this.criticService.deleteCritic(this.id).subscribe((critic: any) => {
      this.router.navigate(['']);
    })
  }
  onCancel() {
    this.router.navigate(['']);
  }
}
