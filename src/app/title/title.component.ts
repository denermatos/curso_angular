import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem Vindo!"

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso");
  }

  ngOnDestroy(): void {
    console.log("Deu bom, ele foi destruido.");
  }

}
