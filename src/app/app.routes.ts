import { Routes } from '@angular/router';
import { ContentComponent } from "./content/startseite/content.component";
import { GottbergComponent } from "./content/gottberg/gottberg.component";
import { TeamComponent } from "./content/team/team.component";
import { SchwerpunkteComponent } from "./content/schwerpunkte/schwerpunkte.component";
import { AnfahrtComponent } from "./content/anfahrt/anfahrt.component";
import { UrlaubComponent } from "./content/urlaub/urlaub.component";
import { NotfallComponent } from "./content/notfall/notfall.component";
import { ReisemedizinComponent } from "./content/reisemedizin/reisemedizin.component";
import { EntzugComponent } from "./content/entzug/entzug.component";
import { SuchtComponent } from "./content/sucht/sucht.component";
import { HepatitisComponent } from "./content/hepatitis/hepatitis.component";
import { DatenschutzComponent } from "./content/datenschutz/datenschutz.component";
import { ImpressumComponent } from "./content/impressum/impressum.component";
import { PageNotFoundComponent } from "./content/page-not-found/page-not-found.component";


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
        path: '**', component: PageNotFoundComponent },
];
