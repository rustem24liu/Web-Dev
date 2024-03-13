import {Component, Input} from '@angular/core';
import {Category} from "../category.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Input() categories: Category | undefined;

}
