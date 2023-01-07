import { PreventOrphansPipe } from './prevent-orphans.pipe';

describe('PreventOrphansPipe', () => {
  let pipe: PreventOrphansPipe;

  beforeEach(() => {
    pipe = new PreventOrphansPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('correctly prevents orphans from text', () => {
    const text =
      'Mauris sed faucibus tellus. Ut urna ex, condimentum y et lorem nec, faucibus semper ligula. Nulla z purus enim, tempus vitae dui id, pulvinar feugiat neque. Vivamus malesuada ipsum aliquam laoreet aliquam. Nullam pharetra nunc tortor, nec euismod mauris consequat sed. Lorem ipsum dolor i sit amet, consectetur adipiscing elit. Nunc vitae dolor h sed risus ullamcorper ullamcorper. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dui eros, porta quis g elit in, condimentum aliquam tellus. Mauris vehicula tincidunt lorem, a pulvinar dui faucibus a. Nullam blandit nibh sed cursus ullamcorper. Pellentesque fringilla t tincidunt eros, eget tempor nulla gravida eget. Sed imperdiet lacinia ipsum, eu dapibus augue aliquam ultricies.';
    const expectedResult =
      'Mauris sed faucibus tellus. Ut urna ex, condimentum y&nbsp;et lorem nec, faucibus semper ligula. Nulla z&nbsp;purus enim, tempus vitae dui id, pulvinar feugiat neque. Vivamus malesuada ipsum aliquam laoreet aliquam. Nullam pharetra nunc tortor, nec euismod mauris consequat sed. Lorem ipsum dolor i&nbsp;sit amet, consectetur adipiscing elit. Nunc vitae dolor h&nbsp;sed risus ullamcorper ullamcorper. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dui eros, porta quis g&nbsp;elit in, condimentum aliquam tellus. Mauris vehicula tincidunt lorem, a&nbsp;pulvinar dui faucibus a. Nullam blandit nibh sed cursus ullamcorper. Pellentesque fringilla t&nbsp;tincidunt eros, eget tempor nulla gravida eget. Sed imperdiet lacinia ipsum, eu dapibus augue aliquam ultricies.';
    const result = pipe.transform(text);

    expect(result).toEqual(expectedResult);
  });
});
