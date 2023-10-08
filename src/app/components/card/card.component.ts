import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Position } from 'src/app/model/position';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,
            MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() position?: Position;

}
