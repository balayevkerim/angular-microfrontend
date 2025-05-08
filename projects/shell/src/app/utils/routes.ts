import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { CustomRemoteConfig } from './config';

export function buildRoutes(options): Routes {

    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry:CustomRemoteConfig = options[key];
        return {
            path: entry.routePath,
            loadChildren: () => 
                loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: entry.exposedModule
                })
                .then(m => m[entry.ngModuleName])
        }
    });

    return [...APP_ROUTES, ...lazyRoutes];
}