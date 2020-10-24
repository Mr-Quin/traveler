uniform vec3 iResolution;
uniform float iTime;
uniform float uSpeed;   // a value from 0 to 100
uniform float seed;
varying vec2 vUv;

// adapted from https://www.shadertoy.com/view/Msl3WH

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    float time = iTime * 10.0;

    float s = 0.0;
    float v = 0.0;

    vec2 uv = (-iResolution.xy + 2.0 * fragCoord) / iResolution.y;

    float t = time * 0.005;

    vec3 col = vec3(0.0);

    vec3 init = vec3(0.25 + seed, 0.25 + sin(time * 0.001) * 0.4, time * 0.005);

    for (float r = 0.; r < uSpeed * 1.2; r++) {
        vec3 p = init + s * vec3(uv, map(uSpeed, 0., 100., 0.135, 0.005));

        p.z = mod(p.z, 2.0);

        for (int i = 0; i < 10; i++) {
            p = abs(p * 2.04) / dot(p, p) - 0.75;
        }

        v += length(p * p) * smoothstep(0.0, 0.5, 1.0 - s) * .002;

        col += vec3( + v * 0.5, 0.1 + v * 0.5, 1.2 - s * 0.5) * v * 0.007;
        s += .01;
    }
    fragColor = vec4(col, col.x+col.y+col.z);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
