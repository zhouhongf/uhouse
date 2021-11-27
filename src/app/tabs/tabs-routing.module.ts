import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {TabsMainComponent} from './tabs-main/tabs-main.component';
import {TabsHomeComponent} from './tabs-home/tabs-home.component';
import {TabsExtraComponent} from './tabs-extra/tabs-extra.component';

const routes: Routes = [
  {
    path: '', component: TabsPage,
    children: [
      { path: 'home', component: TabsHomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'main', component: TabsMainComponent },
      { path: 'extra', component: TabsExtraComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
