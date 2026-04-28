in uint instanceId;

flat out uint IN_instanceId;

void main() {
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    IN_instanceId = instanceId;
}