import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { TheatresComponent } from './theatres/theatres.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DataService } from './services/data.service';
import { TheatresNearbyService } from './services/theatres-nearby.service';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { NewReleasesComponent } from './new-releases/new-releases.component';


@NgModule({
  declarations: [
    AppComponent,
    TheatresComponent,
    NewReleasesComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DataService,
    TheatresNearbyService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
