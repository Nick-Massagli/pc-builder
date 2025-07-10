import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PartsComponent } from './parts/parts.component';
import { PartListComponent } from './parts/part-list/part-list.component';
import { PartDetailComponent } from './parts/part-detail/part-detail.component';
import { PartItemComponent } from './parts/part-list/part-item/part-item.component';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildEditComponent } from './build-list/build-edit/build-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartsComponent,
    PartListComponent,
    PartDetailComponent,
    PartItemComponent,
    BuildListComponent,
    BuildEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
