import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';

import { Crisis } from './crisis';
import { CrisisCenterService } from './crisis-center.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis>{

  constructor(private crisisService: CrisisCenterService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Crisis | Observable<Crisis> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.crisisService.getCrisis(id).pipe(
      take(1),
      mergeMap(crisis => {
        if(crisis){
          return of(crisis);
        }else{
          this.router.navigate(['/crisis - center']);
          return EMPTY;
        }
      })
    )
  }

}
