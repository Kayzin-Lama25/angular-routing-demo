import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisCenterService } from '../crisis-center.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private service: CrisisCenterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );

  }

}
