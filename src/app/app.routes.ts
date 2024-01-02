import { Routes } from '@angular/router';
import { ContentComponent } from "./content/startseite/content.component";
import { GottbergComponent } from "./content/sites/gottberg/gottberg.component";

export const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'sites',
    component: ContentComponent,
    children: [
        {path: 'gottberg', component: GottbergComponent}
    ]},
];
