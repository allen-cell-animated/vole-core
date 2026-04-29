
#ifdef GL_ES
precision highp float;
#endif

float zNear = 0.1;
float zFar = 100.0;

// uniform vec3 backgroundColor;
flat in vec3 IN_instanceColor;

void main() {
    // gl_FragColor = vec4(1.0 - sqrt(gl_FragCoord.z), 0.0, 0.0, 1.0);
    float depth = gl_FragCoord.z;
    // convert depth to linear depth
    // float linearDepth = (2.0 * zNear) / (zFar + zNear - depth * (zFar - zNear));
    // gl_FragColor = vec4(vec3(1.0 - linearDepth), 1.0);

    gl_FragColor = vec4(IN_instanceColor, 1.0);

}