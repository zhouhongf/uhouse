import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import {ToolModule} from '../tool/tool.module';
import {TabsHomeComponent} from './tabs-home/tabs-home.component';
import {TabsMainComponent} from './tabs-main/tabs-main.component';
import {TabsExtraComponent} from './tabs-extra/tabs-extra.component';

@NgModule({
  imports: [
    IonicModule,
    ToolModule,
    TabsPageRoutingModule
  ],
  declarations: [
      TabsPage,
      TabsHomeComponent,
      TabsMainComponent,
      TabsExtraComponent
  ]
})
export class TabsPageModule {}
