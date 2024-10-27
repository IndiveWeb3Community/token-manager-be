import { ResponseMessageKey, ResponseMessage } from './response.decorator';

describe('ResponseDecorator', () => {
  it('should be defined', () => {
    expect(ResponseMessageKey).toBeDefined();
    expect(ResponseMessage).toBeDefined();
  });
});