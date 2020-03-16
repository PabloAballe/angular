import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { AboutComponent } from "./component/about/about.component";
import { BlogComponent } from "./component/blog/blog.component";
import { ArticuloComponent } from "./component/articulo/articulo.component";


const routes: Routes = [
{ path:'about', component: AboutComponent},
{ path: 'home', component: HomeComponent },
{ path: 'articulo/:articuloId', component: ArticuloComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'home/about', component: AboutComponent },
{ path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
