import { NgModule } from '@angular/core';
import { PreventOrphansPipe } from './pipes/prevent-orphans.pipe';
import { CountdownPipe } from './pipes/countdown.pipe';
import { ToRomanPipe } from './pipes/to-roman.pipe';

const COMMON_PIPES = [CountdownPipe, PreventOrphansPipe, ToRomanPipe];

@NgModule({
  imports: [...COMMON_PIPES],
  exports: [...COMMON_PIPES],
})
export class NgxPipesModule {}
