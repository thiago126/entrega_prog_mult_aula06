import { Component } from '@angular/core';

import { OpenCalledPage } from '../open-called/open-called';
import { ConsultCalledPage } from '../consult-called/consult-called';
import { DeleteCalledPage } from '../delete-called/delete-called';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OpenCalledPage;
  tab2Root = ConsultCalledPage;
  tab3Root = DeleteCalledPage;

  constructor() {

  }
}
