import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() {
  }

  public footerConfig() {
    return {
      author: 'User Name',
      group: 'UVT Proiect Colectiv',
      projectTitle: 'Online Shop'
    }
  }

}
