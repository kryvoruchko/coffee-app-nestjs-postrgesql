import { HttpExceptionFilter } from "./http-exeption.filter";

describe('HttpExeptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
