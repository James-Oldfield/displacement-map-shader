uniform sampler2D txt;
uniform float scale;
uniform float time;

import noise from 'glsl-noise/simplex/3d';

varying vec2 vUv;
varying float n;

void main () {
  vUv = uv;
  vec4 noiseTexture = texture2D( txt, vUv );
  n = noiseTexture.r;

  float nOffset = noise( noiseTexture.rgb * vec3(abs(sin(time))) );
  
  vec3 pos = position + normal * nOffset * n * scale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}