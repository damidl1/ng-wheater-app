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

  position?: Position;


  constructor(private dataServ: DataService){}


  ngOnInit(): void {
    this.dataServ.getAllWheaterData().subscribe(pos => {
      this.position = pos;
    })

  }

}
