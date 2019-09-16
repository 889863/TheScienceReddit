import { RoundToThousandPipe } from './round-to-thousand.pipe';

describe('RoundToThousandPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundToThousandPipe();
    expect(pipe).toBeTruthy();
  });
});
