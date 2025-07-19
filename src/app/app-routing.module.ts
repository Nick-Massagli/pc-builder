import { Routes, RouterModule } from "@angular/router";
import { PartsComponent } from "./parts/parts.component";
import { BuildListComponent } from "./build-list/build-list.component";
import { NgModule } from "@angular/core";
import { PartDetailComponent } from "./parts/part-detail/part-detail.component";
import { BuildDetailComponent } from "./build-list/build-detail/build-detail.component";
import { BuildEditComponent } from "./build-list/build-edit/build-edit.component";
import { PartEditComponent } from "./parts/part-edit/part-edit.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/build-list',
        pathMatch: 'full'
    },
    {
        path: 'build',
        component: BuildListComponent,
        children: [
            {
                path: 'new',
                component: BuildEditComponent
            },
            {
                path: ':id',
                component: BuildDetailComponent
            },
            {
                path: ':id/edit',
                component: BuildEditComponent
            }
        ]
    },
    {
        path: 'parts',
        component: PartsComponent,
        children: [
            {
                path: 'new',
                component: PartEditComponent
            },
            {
                path: ':id',
                component: PartDetailComponent
            },
            {
                path: ':id/edit',
                component: PartEditComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})





export class AppRoutingModule {

}