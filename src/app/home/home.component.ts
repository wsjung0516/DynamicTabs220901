import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTabsComponent} from './my-tabs/my-tabs.component';
export class People {
  id: number;
  name: string;
  surname: string;
  twitter: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('personEdit',{static:false}) editPersonTemplate: TemplateRef<any>;
  @ViewChild('about') aboutTemplate: TemplateRef<any>;
  @ViewChild(MyTabsComponent) tabsComponent: MyTabsComponent;
  // people: any[] = []
  people: People[] = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onEditPerson(person: People) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel: People) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }
}
