layout (location = 0) out vec4 gOutputColor;

float THRESHOLD = 0.5;

// Per-instance attributes
// flat in float IN_radius;

void main() {
  vec2 uv = gl_PointCoord;
  float dist = distance(uv, vec2(0.5));

  // Cull pixels outside of the circle to create round points
  if (dist > THRESHOLD) {
    discard;
  }

  gOutputColor = vec4(1.0);
  // TODO: Write normal + depth information
}