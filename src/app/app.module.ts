import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http'
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

import { ServicesComponent } from './services/services.component';
import { ToolComponent } from './tool/tool.component';
import { InfoToolComponent } from './info-tool/info-tool.component';
import { SearcherComponent } from './searcher/searcher.component';
import jwt_decode from 'jwt-decode';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ToolComponent,
    InfoToolComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    ServicesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
