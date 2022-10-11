import { Component, OnInit } from '@angular/core';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-versiculo-biblia',
  templateUrl: './versiculo-biblia.component.html',
  styleUrls: ['./versiculo-biblia.component.scss']
})
export class VersiculoBibliaComponent implements OnInit {

  public versoBiblia: any;
  constructor(
    private _bibliaService: BibliaService,
  ) { }

  ngOnInit(): void {
    this._bibliaService.getVersiculoBiblia().subscribe((response) => {
      console.log(response); 
      this.versoBiblia = response;
    })
  }

}
