import { Component, OnInit } from '@angular/core';
import { serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  series: Array<serie> = [];
  average: number = 0;

  getSerieList(): Array<serie> {
    return dataSeries;
  }
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverage(series);
    });
  }

  calculateAverage(series: Array<serie>) {
    this.average = 0;
    series.forEach(serie => {
      this.average += serie.seasons;
    });
    this.average /= this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}