precision highp float;

out vec3 pObj;

void main() {
  pObj = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
