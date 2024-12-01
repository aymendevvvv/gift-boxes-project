import {Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomepageComponent,
      title: 'Homepage',
    }
  ];
  export default routeConfig;