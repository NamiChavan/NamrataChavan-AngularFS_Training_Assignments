import { GradePipePipe } from './grade-pipe.pipe';

describe('GradePipePipe', () => {
  let pipe:GradePipePipe

  beforeEach(() => {
    pipe = new GradePipePipe();
  });

  it('create an instance', () => {
    const pipe = new GradePipePipe();
    expect(pipe).toBeTruthy();
  });

  //Testcase 1
  it('should return value1 when input is valid grade', () => {
    const result:string  = pipe.transform("1");
    expect(result).toBe("Outstanding");
  });

  it('should return value2 when input is valid grade', () => {
    const result:string  = pipe.transform("2");
    expect(result).toBe("Excellent");
  });

  it('should return value3 when input is valid grade', () => {
    const result:string  = pipe.transform("3");
    expect(result).toBe("Good");
  });

  //Testcase 2
  it('should return empty when input is Invalid grade', () => {
    const result:string  = pipe.transform("5");
    expect(result).toBe("");
  });
  it('should return empty when input is Invalid grade', () => {
    const result:string  = pipe.transform("6");
    expect(result).toBe("");
  });
});
