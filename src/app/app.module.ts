import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HeroisComponent } from './Herois/Herois.component';
import { ViloesComponent } from './Viloes/Viloes.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

@NgModule({
  declarations: [			
    AppComponent,
      HeroisComponent,
      ViloesComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxJsonLdModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
