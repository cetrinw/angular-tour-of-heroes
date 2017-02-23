import {Component, Input} from "@angular/core";
import {Hero} from "./hero";

/**
 * Created by Cetrin Wang on 2017/2/23.
 */

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.html'
})

export class HeroDetailComponent {
  @Input()
  hero : Hero;
}
