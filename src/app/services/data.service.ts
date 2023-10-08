import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../model/position';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // positionData: Position[] = [];
  // positions = new BehaviorSubject<Position[]>([]);

  readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast?';

  constructor(private http: HttpClient) {

    this.getAllWheaterData()


  }

  getAllWheaterData(): Observable<Position>{
    return this.http.get<Position>(this.BASE_URL+'latitude=44.4048&longitude=8.9444&hourly=temperature_2m').pipe(
    map(data => data)

   )}
  }
  // getAllData(): void{
  //   this.http.get<Position[]>(this.BASE_URL + 'latitude=44.4048&longitude=8.9444&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,cloudcover,windspeed_10m').subscribe(pos => {
  //     console.log('dati ricevuti', pos)
  //     this.positions.next(pos);
  //     this.positionData = pos;
  //     console.log(this.positionData);
  //   });
  // }

