import { Env, env } from "../../../src/util/env";

describe("Unit", () => {
  describe("Util", () => {
    beforeAll(() => {
      Env.warmup("env.test.json");
    });
    it.only("Should get env from env.json", () => {
      const variable = env<string>("TEST_VAR", "error");
      expect(variable).toBe("test");
    });
  });
});
