import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { PipesComponent } from './pipe-testing/pipes.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import { AppRoutingModule } from './app-routing-module';
import { StartComponent } from './start/start.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    SearchFormComponent,
    FilterPipe,
    FormsComponent,
    HttpComponent,
    NavbarComponent,
    StartComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
