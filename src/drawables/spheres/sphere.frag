
/** Flat shading for instanced sphere objects. */

#ifdef GL_ES
precision highp float;
#endif

// uniform vec3 backgroundColor;
flat in vec3 IN_instanceColor;

void main() {
    // TODO: Add depth cueing, fading out spheres that are further away
    gl_FragColor = vec4(IN_instanceColor, 1.0);
}
