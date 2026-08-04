import { describe, expect, it } from "vitest";

import { glslTransform } from "./vite.config.js";

describe("GLSL transform", () => {
  it("escapes special characters (e.g. backticks) so they aren't interpreted as JS", () => {
    // Arrange
    const code = "`backtick`, \\ and ${notATemplateExpression}";
    
    // Act
    const result = glslTransform(code, "shader.frag");
    const body = (result || "").replace("export default", "return");
    const evaluated = new Function(body)();

    // Assert
    expect(evaluated).to.equal(code);
  });
});
