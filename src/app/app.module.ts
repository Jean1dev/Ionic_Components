import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { FinancasPageModule } from '../pages/financas/financas.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { ConfigPageModule } from '../pages/config/config.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPageModule } from '../pages/login/login.module';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    FinancasPageModule,
    IntroPageModule,
    HttpClientModule,
    ConfigPageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})
export class AppModule {}
