import { Routes } from '@angular/router';
import { StoriesListComponent } from './stories-list/stories-list.component';

export const routes: Routes = [{ path: '', component: StoriesListComponent },{ path: 'top', component: StoriesListComponent }];
