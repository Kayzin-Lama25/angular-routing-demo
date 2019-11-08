import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    console.log("here route => ", this.route.data);
    this.route.data
    .subscribe((data: { crisis: Crisis }) => {
      console.log("here data => ", data);
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel(){
    this.gotoCrises();
  }

  save(){
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if(!this.crisis || this.crisis.name === this.editName){
      return true;
    }

    // Otherwise ask the user with the dialog service and return it
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises(){
    let crisisId = this.crisis ? this.crisis.id : null;

    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
  }

}
