import { NgModule } from '@angular/core';
import { PreventOrphansPipe } from './pipes/prevent-orphans.pipe';
import { CountdownPipe } from './pipes/countdown.pipe';

const COMMON_PIPES = [CountdownPipe, PreventOrphansPipe];

@NgModule({
  imports: [...COMMON_PIPES],
  exports: [...COMMON_PIPES],
})
export class NgxPipesModule {}
