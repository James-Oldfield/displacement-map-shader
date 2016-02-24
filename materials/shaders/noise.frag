uniform float time;
uniform float scale;

varying vec2 vUv;
varying float n;

void main () {
  // vec3 color = mix(vec3(#f9cad4), vec3(#4427f5), vec3(scale * n * abs(sin(time))));
  vec3 color = mix(vec3(#ff6347), vec3(#2958B2), vec3(scale * n * abs(sin(time))));

  vec3 light = vec3(0.5, 0.2, 1.0);
  // ensure it's normalized
  light = normalize(light);

float dp = max(0.0, dot(color, light));

  gl_FragColor = vec4( vec3(dp), 1.0 );
}
