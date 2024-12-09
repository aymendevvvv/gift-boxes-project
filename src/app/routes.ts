import {Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import { StepsComponent } from './components/steps/steps.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Homepage',
  },
  {
    path: 'create-box',
    component: StepsComponent,
    title: 'Create Box',
  },
  //todo { path: '**', component: PageNotFoundComponent }


  ];
  export default routeConfig;