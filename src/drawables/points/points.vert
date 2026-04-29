in uint instanceId;

flat out uint IN_instanceId;
flat out vec3 IN_instanceColor;

void main() {
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    IN_instanceId = instanceId;

    #ifdef USE_INSTANCING_COLOR
    IN_instanceColor = instanceColor;
    #endif
}