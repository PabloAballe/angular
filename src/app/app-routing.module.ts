import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { AboutComponent } from "./component/about/about.component";
import { BlogComponent } from "./component/blog/blog.component";
import { ArticuloComponent } from "./component/articulo/articulo.component";
import { ContactComponent } from "./component/contact/contact.component";


const routes: Routes = [
{path: 'contact', component: ContactComponent},
{ path:'about', component: AboutComponent},
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'articulos/:articulo.titulo', component: ArticuloComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'home/about', component: AboutComponent },
{ path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
