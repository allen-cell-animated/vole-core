/**
 * Simple fragment shader that writes an instance ID as an RGB value for
 * picking.
*/

precision highp float;

// Per-instance attributes
flat in uint IN_instanceId;

/** Encodes instance ID as an RGB value. */
vec3 getInstanceColor(uint value) {
    uint r = value & 0xFFu;
    uint g = (value >> 8) & 0xFFu;
    uint b = (value >> 16) & 0xFFu;
    return vec3(float(r) / 255.0, float(g) / 255.0, float(b) / 255.0);
}

void main() {
    gl_FragColor = vec4(float(IN_instanceId));
}
