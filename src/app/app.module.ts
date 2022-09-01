import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicTabsDirective } from './home/my-tabs/dynamic-tabs.directive';
import { PeopleListComponent } from './home/people/people-list.component';
import {PersonEditComponent} from './home/people/person-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyTabsComponent } from './home/my-tabs/my-tabs.component';
import {TabComponent} from './home/my-tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicTabsDirective,
    PeopleListComponent,
    PersonEditComponent,
    MyTabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    TabComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
