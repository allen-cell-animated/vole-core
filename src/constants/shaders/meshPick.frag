/**
 * Simple fragment shader that writes an instance ID to a float output.
*/

precision highp float;

// Per-instance attributes
flat in uint IN_instanceId;

void main() {
    // TODO: Should only a certain channel be written to? Should other channels
    // be reserved for other types of pickable objects (e.g., gizmo handles)?
    gl_FragColor = vec4(float(IN_instanceId));
}
