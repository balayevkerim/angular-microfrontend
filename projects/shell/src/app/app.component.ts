import { Component } from '@angular/core';
import {  CustomRemoteConfig } from './utils/config';
import { Router } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  remotes: any[] = [];

   constructor(
     private router: Router) {
   }

   async ngOnInit(): Promise<void> {
    //  const manifest = getManifest();
    const manifest = window['MF_EXTENDED_MANIFEST'] as Record<string, CustomRemoteConfig>;

     console.log(manifest,'manifest')
     const routes = buildRoutes(manifest);
     this.router.resetConfig(routes);

     this.remotes = Object.values(manifest);
}


}