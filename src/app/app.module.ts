import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'myworld_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
    }),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    BackgroundMode,
    AndroidPermissions,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
