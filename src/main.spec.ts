let listen: number;

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn(() => ({
      useGlobalPipes: jest.fn(() => null),
      use: jest.fn(() => null),
      listen: jest.fn((port: number) => {
        listen = port;
      }),
    })),
  },
}));

describe('main.ts', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should listen on port 3000', async (done) => {
    await require('./main');
    expect(listen).toBe(3000);
    done();
  })
});
