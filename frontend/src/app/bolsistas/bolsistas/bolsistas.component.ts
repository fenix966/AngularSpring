import { BolsistasService } from './../services/bolsistas.service';
import { Component, OnInit } from '@angular/core';
import { Bolsista } from '../models/bolsista';
import { AppMaterialModule } from '../../common/app-material/app-material.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bolsistas',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './bolsistas.component.html',
  styleUrl: './bolsistas.component.scss'
})
export class BolsistasComponent implements OnInit{

  bolsistas$: Observable <Bolsista[]>;
  displayedColumns = ['name', 'identificador', 'numeroDoc', 'dadosBanco', 'actions' ];


  constructor(private bolsistasService: BolsistasService) {

    this.bolsistas$ = this.bolsistasService.list().pipe(

    );

  }


  ngOnInit(): void {

  }


}
