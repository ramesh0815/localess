import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../../shared/shared.module';
import {MeComponent} from './me.component';
import {MeRoutingModule} from './me-routing.module';
import {MeDialogComponent} from './me-dialog/me-dialog.component';

@NgModule({
    declarations: [MeComponent, MeDialogComponent],
    imports: [CommonModule, SharedModule, MeRoutingModule],
    providers: []
})
export class MeModule {
}
