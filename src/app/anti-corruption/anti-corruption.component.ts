import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anti-corruption',
  templateUrl: './anti-corruption.component.html',
  styleUrl: './anti-corruption.component.scss'
})
export class AntiCorruptionComponent {
  isReportCorruptionRoute: boolean = false;

  /*ActivatedRoute надає доступ до інформації про поточний активний маршрут та його параметри.*/
  /* Router дозволяє керувати навігацією та отримувати події маршрутизації. */
  constructor(private route: ActivatedRoute, private router: Router) {}

  /* ngOnInit викликається після створення компонента та ініціалізації його властивостей*/
  ngOnInit(): void {

    /* Підписка на події маршрутизації*/
    this.router.events.subscribe(() => {

      /* this.route.firstChild?.snapshot.url[0]?.path - 
      отримати шлях першого дочірнього маршруту поточного активного маршруту
      ("?" - щоб уникнути помилок, якщо firstChild або інші властивості є undefined або null.)*/
      this.isReportCorruptionRoute = this.route.firstChild?.snapshot.url[0]?.path === 'report-corruption';
    });
  }
}
