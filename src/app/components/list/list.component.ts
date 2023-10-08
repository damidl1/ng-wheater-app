import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { CardComponent } from '../card/card.component';
import { Position } from 'src/app/model/position';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,
            CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  positions: Position[] = [];
  positionData: Position[] = [];

  constructor(private dataServ: DataService){}


  ngOnInit(): void {
    this.dataServ.positions.subscribe(pos => this.positions = pos);
    console.log(this.positionData);
  }

}
