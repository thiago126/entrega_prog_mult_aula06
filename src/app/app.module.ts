import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OpenCalledPageModule } from '../pages/open-called/open-called.module';
import { ConsultCalledPageModule } from '../pages/consult-called/consult-called.module';
import { DeleteCalledPageModule } from '../pages/delete-called/delete-called.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenCalledPage } from '../pages/open-called/open-called';
import { ConsultCalledPage } from '../pages/consult-called/consult-called';
import { DeleteCalledPage } from '../pages/delete-called/delete-called';
import { DestinoPageModule } from '../pages/destino/destino.module';

@NgModule({
  declarations: [
    MyApp,
    OpenCalledPage,
    ConsultCalledPage,
    DeleteCalledPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule
    FeedPageModule,
    IntroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpenCalledPage,
    ConsultCalledPage,
    DeleteCalledPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
