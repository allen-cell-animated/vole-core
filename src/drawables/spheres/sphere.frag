
/** Flat shading for spheres. */

#ifdef GL_ES
precision highp float;
#endif

float zNear = 0.1;
float zFar = 100.0;

// uniform vec3 backgroundColor;
flat in vec3 IN_instanceColor;

void main() {
    gl_FragColor = vec4(IN_instanceColor, 1.0);
}