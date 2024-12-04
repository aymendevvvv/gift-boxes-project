import {Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import { CreateBoxComponentComponent } from './components/create-box-component/create-box-component.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Homepage',
  },
  {
    path: 'create-box',
    component: CreateBoxComponentComponent,
    title: 'Create Box',
  },
  //todo { path: '**', component: PageNotFoundComponent }


  ];
  export default routeConfig;