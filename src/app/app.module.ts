import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { RoundToThousandPipe } from './round-to-thousand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    UserComponent,
    RoundToThousandPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  entryComponents: [PostComponent, UserComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
