uniform sampler2D txt;
uniform float scale;
uniform float time;

varying vec2 vUv;
varying float n;

void main () {
  vUv = uv;
  vec4 noiseTexture = texture2D( txt, vUv );
  n = noiseTexture.r;

  vec3 pos = position + normal * n * scale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}