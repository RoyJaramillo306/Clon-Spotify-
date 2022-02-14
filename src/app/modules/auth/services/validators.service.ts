import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailPattern: string = '^[a-z0-9._-]+@[a-z.-]+\\.[a-z]{2,4}$';

  constructor(){}

}
