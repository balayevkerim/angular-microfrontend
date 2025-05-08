import { loadManifest } from '@angular-architects/module-federation';
import { fetchRemotes } from './fetch-remotes';

fetchRemotes()
  .then((fullManifest) => {
    // extract { remoteName: remoteEntry }
    const manifestForFederation = {};
    for (const key in fullManifest) {
      manifestForFederation[key] = fullManifest[key].remoteEntry;
    }

    console.log(fullManifest, 'fullManifest');
    window['MF_EXTENDED_MANIFEST'] = fullManifest;

    // Step 3: Turn into Blob and create object URL
    const blob = new Blob([JSON.stringify(manifestForFederation)], {
      type: 'application/json',
    });
    const blobUrl = URL.createObjectURL(blob);

    // Step 4: Pass blob URL to loadManifest (this works in 14.3.2)
    return loadManifest(blobUrl);
  })
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
