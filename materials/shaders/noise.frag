precision mediump float;

varying vec2 vUv;
varying float n;

void main () {
  // vec3 color = mix(vec3(#ff6347), vec3(#47FFB1), n);
  vec3 color = mix(vec3(#f9cad4), vec3(#4427f5), n);

  gl_FragColor = vec4( color, 1.0 );
}
