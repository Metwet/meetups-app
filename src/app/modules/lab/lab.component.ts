import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subject, filter, from, map, skip, switchMap, take, finalize  } from 'rxjs';
import { FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent {

  chainOne: string[] = [];
  chainTwo: string[] = [];
  chainThree: string[] = [];

  constructor (private http: HttpClient){}

  ngOnInit() {
    this.showChainOneAndTwo();
    this.showChainThree();
  }

  // ---- task 1 ---- 
  showChainOneAndTwo(): void {
    const getStarWarsFilms = () => {      
      return this.http.get<any>('https://swapi.dev/api/films').pipe(
        map((response)=> response.results),
        switchMap((results)=> from(results))
      );
    };

    const mySubject: Subject<any> = new Subject();

    mySubject.pipe(
      filter((film: any) => film.director === 'George Lucas'),
      map((film) => film.title),
      filter((title)=>title.includes(`of`)),
      map((title) => `Star Wars: ${title}`)
    ).subscribe(
      (result)=> {
        this.chainOne.push(result)
      }
    )
    
    mySubject.pipe(
      filter((film: any) => film.producer.includes('Rick McCallum')),
      map((film) => film.title),
      take(3),
      map((title) => `Star Wars: ${title}`)
    ).subscribe(
      (result)=> {
        this.chainTwo.push(result)
      }
    )

    getStarWarsFilms().subscribe(mySubject);
  }

  showChainThree():void {


    const myReplaySubject: ReplaySubject<string> = new ReplaySubject(3);

    myReplaySubject.next('Hello world');
    myReplaySubject.next('abc');
    myReplaySubject.next('qwerty');
    myReplaySubject.next('Hello there');
    myReplaySubject.complete();

    myReplaySubject
    .pipe(
      map((data)=>`Sub1: ${data}`)
    )
    .subscribe((result)=> { 
      this.chainThree.push(result)
    })

    myReplaySubject.pipe(
      filter((data)=>data.length>3),
      map((data) => data.toUpperCase()),
      skip(1),
      map((data)=>`Sub2: ${data}`)
    ).subscribe((result)=>{
      this.chainThree.push(result)
    })
  }

  // ---- task 2 ----
  loadingStatus:boolean = false;
  task2():void {
    const arrayForTask2 = [1, 2, 3, 4, 5];
    this.loadingStatus =true;
    
    this.calculateSum(arrayForTask2)
      .then(sum => {
        console.log('...');
        setTimeout(()=> console.log('Sum:', sum), 2000)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  calculateSum(array: number[]):Promise<number>{
    return new Promise((resolve, reject)=>{
      console.log(`Wait two seconds please, complex calculation in progress`);
      
      setTimeout(()=>{
        const sum = array.reduce((acc, curr)=>acc+curr, 0);
        if(isNaN(sum)){
          reject(`Error calculating sum.`)
        } else {
          resolve(sum)
        }
      }, 2000)
    })
  }

  // ---- task 3 ----
  nameControl = new FormControl('', [Validators.required]);
  isNameFound = false;

  validateName() {
    const name = this.nameControl.value;
    const url = `https://swapi.dev/api/people?search=${name}`;
    this.nameControl.setErrors({ validating: true });
    this.http.get<any>(url).pipe(
      switchMap(response => {
        const results = response.results;
        const isNameExists = results.some((result: any) => result.name === name);
        this.isNameFound = isNameExists;
        if (isNameExists) {
          this.nameControl.setErrors(null);
        } else {
          this.nameControl.setErrors({ nameNotExists: true });
        }
        return this.nameControl.statusChanges;
      }),
      finalize(() => {
        this.nameControl.setErrors(null);
      })
    ).subscribe();
  }
}
