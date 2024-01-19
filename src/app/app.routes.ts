import { Routes } from '@angular/router';
import { ContentComponent } from "./content/sites/startseite/content.component";
import { GottbergComponent } from "./content/sites/gottberg/gottberg.component";
import { TeamComponent } from "./content/sites/team/team.component";
import { SchwerpunkteComponent } from "./content/sites/schwerpunkte/schwerpunkte.component";
import { AnfahrtComponent } from "./content/sites/anfahrt/anfahrt.component";
import { UrlaubComponent } from "./content/sites/urlaub/urlaub.component";
import { NotfallComponent } from "./content/sites/notfall/notfall.component";
import { ReisemedizinComponent } from "./content/sites/reisemedizin/reisemedizin.component";
import { EntzugComponent } from "./content/sites/entzug/entzug.component";
import { SuchtComponent } from "./content/sites/sucht/sucht.component";
import { HepatitisComponent } from "./content/sites/hepatitis/hepatitis.component";
import { DatenschutzComponent } from "./content/sites/datenschutz/datenschutz.component";
import { ImpressumComponent } from "./content/sites/impressum/impressum.component";
import { PageNotFoundComponent } from "./content/sites/page-not-found/page-not-found.component";


export const routes: Routes = [
    {   path: '', pathMatch: 'full', redirectTo: '/startseite' },
    {   
        path: 'startseite', 
        component: ContentComponent,
        data: {animation: 'startseitePage'}
    },
    {   
        path: 'gottberg', 
        component: GottbergComponent,
        data: {animation: 'gottbergPage'}
    },
    {   
        path: 'team', 
        component: TeamComponent,
        data: {animation: 'teamPage'}
    },
    {   
        path: 'schwerpunkte', 
        component: SchwerpunkteComponent,
        data: {animation: 'schwerpunktePage'}
    },
    {   
        path: 'anfahrt',
        component: AnfahrtComponent,
        data: {animation: 'anfahrtPage'}
    },
    {   
        path: 'urlaub', 
        component: UrlaubComponent,
        data: {animation: 'urlaubPage'}
    },
    {  
        path: 'notfall', 
        component: NotfallComponent,
        data: {animation: 'notfallPage'}
    },
    {   
        path: 'reisemedizin', 
        component: ReisemedizinComponent,
        data: {animation: 'reisemedizinPage'}
    },
    {   
        path: 'entzug', 
        component: EntzugComponent,
        data: {animation: 'entzugPage'}
    },
    {   
        path: 'sucht', 
        component: SuchtComponent,
        data: {animation: 'suchtPage'}
    },
    {   
        path: 'hepatitis', 
        component: HepatitisComponent,
        data: {animation: 'hepatitisPage'}
    },
    {   
        path: 'datenschutz', 
        component: DatenschutzComponent,
        data: {animation: 'datenschutzPage'}
    },
    {   
        path: 'impressum', 
        component: ImpressumComponent,
        data: {animation: 'impressumPage'}
    },
    {   
        path: '**', redirectTo: '/' },
];
