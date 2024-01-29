import { Injectable } from '@angular/core';
import { Bolsista } from '../models/bolsista';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class BolsistasService {

  private readonly API = 'api/bolsistas';

  constructor( protected httpClient: HttpClient,
              public dialog: MatDialog,
    ) { }

  list(){

    return this.httpClient.get<Bolsista[]>(this.API);
  }


}
