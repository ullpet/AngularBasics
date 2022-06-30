import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { HttpComponent } from "./http/http.component";
import { PostsComponent } from "./posts/posts.component";
import { StartComponent } from "./start/start.component";

// http://localhost:4200/ -> StartComponent
// http://localhost:4200/post -> PostComponent
// http://localhost:4200/form -> FormComponent
// http://localhost:4200/http -> HttpComponent

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'post', component: PostsComponent},
    {path: 'form', component: FormsComponent},
    {path: 'http', component: HttpComponent}

] //переменная для регистрации роутов

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}