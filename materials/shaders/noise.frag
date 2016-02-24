uniform float time;
uniform float scale;

varying vec2 vUv;
varying float n;

void main () {
  vec3 color = mix(vec3(#ff6347), vec3(#2958B2), vec3(scale * n * abs(sin(time))));

  gl_FragColor = vec4( color, 1.0 );
}
