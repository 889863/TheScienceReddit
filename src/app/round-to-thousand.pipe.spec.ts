import { RoundToThousandPipe } from './round-to-thousand.pipe';
//import { pipe } from 'rxjs';

describe('RoundToThousandPipe', () => {
  let pipe: RoundToThousandPipe;

    beforeEach(() => {
        pipe = new RoundToThousandPipe();
    });
  it('create an instance', () => {
    //const pipe = new RoundToThousandPipe();
    expect(pipe).toBeTruthy();
  });

  it('should test the RoundToThousandPipe', () => {
    expect(pipe.transform(12, 2)).toBe(12);
  });
  it('should test the RoundToThousandPipe -M', () => {
    expect(pipe.transform(2545555, 2)).toBe('2.55M');
  });
  it('should test the RoundToThousandPipe -K', () => {
    expect(pipe.transform(8896, 2)).toBe('8.90K');
  });
});
