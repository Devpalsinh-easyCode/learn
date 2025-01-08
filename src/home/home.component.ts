import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private getSer : GetDataService){
    // this.getSer.users();
  }
}
