import { Component } from '@angular/core';
import { mySongs} from '../../assets/Songs/mySongs'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  musics  = mySongs;
  selected : any;

  select(music: any){
    this.selected = music;
  }
}
