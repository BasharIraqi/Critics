import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path:'', component: ReadComponent },
  {path: 'read/:id', component: ReadComponent},
  {path: 'add', component: AddComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'update/:id', component: UpdateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
