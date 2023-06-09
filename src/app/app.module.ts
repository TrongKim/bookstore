import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/home/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'about',
    loadChildren: () => import('./view/about/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./view/store/store/store.module').then(m => m.StoreModule)
  }, 
  {
    path: 'contact',
    loadChildren: () => import('./view/contact/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./view/articles/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'significant',
    loadChildren: () => import('./view/significant/significant/significant.module').then(m => m.SignificantModule)
  },
  {
    path: '404',
    loadChildren: () => import('./view/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'protected',
    loadChildren: () => import('./view/protected/protected.module').then(m => m.ProtectedModule)
  },
  {
    path: 'licenses',
    loadChildren: () => import('./view/licenses/licenses.module').then(m => m.LicensesModule)
  },
  {
    path: 'change-log',
    loadChildren: () => import('./view/change-log/change-log.module').then(m => m.ChangeLogModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
