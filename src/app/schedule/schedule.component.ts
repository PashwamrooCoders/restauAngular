import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime , map, tap} from 'rxjs/operators'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();
  numbersTerms = new FormControl();
  searcTerms$: Observable<string> = this.searchTerm.valueChanges;
  numbersTerms$: Observable<number> = this.searchTerm.valueChanges;
  result = '';


  constructor() { }

  ngOnInit(): void {
    
    this.searcTerms$
    .pipe(
      tap(x => console.log('avant map ' +x)),
      map(x => x.toUpperCase()),
      map(uppercased => this.reverse(uppercased)),
      tap(x => console.log('après map ' +x)),
      debounceTime(1500) 
    )
    .subscribe(data => this.result= data); 

    /*
    this.numbersTerms$
    .pipe(
      tap(x => console.log('avant map ' +x)),
      map(x =>5*x),
      tap(x => console.log('après map ' +x)),
      debounceTime(1500) 
    )
    .subscribe(data => console.log(data));  */
  }

  reverse(word:string) {

    return word.split('').reverse().join('');
  }

}
