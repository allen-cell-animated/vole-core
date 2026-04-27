/**
 * Vertex shader for rendering points; applies per-instance position and scaling
 * and passes parameters (instanceId and radius) to the fragment shader.
 */

// Per-instance attributes
in vec3 instancePosition;
in float instanceScale;
in uint instanceId;

flat out uint IN_instanceId;
flat out float IN_radius;

// General uniforms
uniform float baseScale;

void main() {
    vec3 pos = instancePosition;
    // TODO: Scale points by distance from camera
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    float worldScale = instanceScale * baseScale;
    //   float px = worldSize * (0.5 * viewportHeight) * projectionMatrix[1][1] / abs(gl_Position.w);
    float sizePx = worldScale / gl_Position.w;
    gl_PointSize = worldScale;

    IN_instanceId = instanceId;
    IN_radius = worldScale;
}
