import { PreventOrphansPipe } from './prevent-orphans.pipe';

describe('PreventOrphansPipe', () => {
  it('create an instance', () => {
    const pipe = new PreventOrphansPipe();
    expect(pipe).toBeTruthy();
  });
});
