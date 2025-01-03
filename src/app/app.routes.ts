import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    }, 
    {
        path: 'portfolio/project/:id',
        component: ProjectComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];
