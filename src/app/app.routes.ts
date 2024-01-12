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
    { path: '', component: ContentComponent },
    { path: 'gottberg', component: GottbergComponent},
    { path: 'team', component: TeamComponent},
    { path: 'schwerpunkte', component: SchwerpunkteComponent},
    { path: 'anfahrt', component: AnfahrtComponent},
    { path: 'urlaub', component: UrlaubComponent},
    { path: 'notfall', component: NotfallComponent},
    { path: 'reisemedizin', component: ReisemedizinComponent},
    { path: 'entzug', component: EntzugComponent},
    { path: 'sucht', component: SuchtComponent},
    { path: 'hepatitis', component: HepatitisComponent},
    { path: 'datenschutz', component: DatenschutzComponent},
    { path: 'impressum', component: ImpressumComponent},
    { path: '**', component: PageNotFoundComponent },
];
