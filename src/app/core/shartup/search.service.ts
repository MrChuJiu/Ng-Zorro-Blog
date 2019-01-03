import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
constructor(){

}
  private exploreIsSearch: Subject<boolean> = new Subject();

  setexploreIsSearch(show:boolean):void{
    this.exploreIsSearch.next(show);
  }
  getexploreIsSearch():Observable<boolean>{
    return this.exploreIsSearch.asObservable();
  }

  private articleIsSearch: Subject<boolean> = new Subject();

  setarticleIsSearch(show:boolean):void{
    this.articleIsSearch.next(show);
  }
  getarticleIsSearch():Observable<boolean>{
    return this.articleIsSearch.asObservable();
  }


}
