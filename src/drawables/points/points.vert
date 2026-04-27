in uint instanceId;

flat out uint IN_instanceId;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    IN_instanceId = instanceId;
}