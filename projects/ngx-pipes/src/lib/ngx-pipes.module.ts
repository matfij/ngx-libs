import { NgModule } from '@angular/core';
import { PreventOrphansPipe } from './pipes/prevent-orphans.pipe';

const COMMON_PIPES = [PreventOrphansPipe];

@NgModule({
  declarations: [...COMMON_PIPES],
  exports: [...COMMON_PIPES],
})
export class NgxPipesModule {}
