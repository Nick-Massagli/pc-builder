import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PartsComponent } from './parts/parts.component';
import { PartListComponent } from './parts/part-list/part-list.component';
import { PartDetailComponent } from './parts/part-detail/part-detail.component';
import { PartItemComponent } from './parts/part-item/part-item.component';
import { BuildListComponent } from './build-list/build-list.component';
import { CommonModule } from '@angular/common';
import { BuildDetailComponent } from './build-list/build-detail/build-detail.component';
import { BuildItemComponent } from './build-list/build-item/build-item.component';
import { BuildArrayComponent } from './build-list/build-array/build-array.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PartEditComponent } from './parts/part-edit/part-edit.component';
import { BuildEditComponent } from './build-list/build-edit/build-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { PartsFilterPipe } from './parts/parts-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartsComponent,
    PartListComponent,
    PartDetailComponent,
    PartItemComponent,
    BuildListComponent,
    BuildDetailComponent,
    BuildItemComponent,
    BuildArrayComponent,
    DropdownDirective,
    PartEditComponent,
    BuildEditComponent,
    PartsFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
