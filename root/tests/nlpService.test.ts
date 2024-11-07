import { classifyIntent } from '../src/services/nlpService';

test('classifyIntent should identify greeting intent', async () => {
  const intent = await classifyIntent("Hello");
  expect(intent).toBe("greeting");
});
