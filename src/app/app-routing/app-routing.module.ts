import { Component, NgModule } from "@angular/core"
import * as router from "@angular/router"
import { InicioComponent } from "../components/inicio/InicioComponent"
import { ListadoComponent } from "../components/listado/listado.component"

const routes : router.Routes = [
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'listado',
        component: ListadoComponent
    },
]

@NgModule({
    declarations: [],
    imports: [router.RouterModule.forRoot(routes)],
    exports: [router.RouterModule]
})
export class AppRoutingModule { }