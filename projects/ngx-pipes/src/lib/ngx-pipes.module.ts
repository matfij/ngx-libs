import { NgModule } from '@angular/core';
import { PreventOrphansPipe } from './pipes/prevent-orphans.pipe';

const COMMON_PIPES = [PreventOrphansPipe];

@NgModule({
  imports: [...COMMON_PIPES],
  exports: [...COMMON_PIPES],
})
export class NgxPipesModule {}
