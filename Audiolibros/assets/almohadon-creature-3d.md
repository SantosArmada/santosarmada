# El almohadón — gray 3D parasite

This revision supersedes the red spider-like raster animation. The original cover and bedroom artwork are unchanged. Earlier sprite assets are retained but no longer used by the animation.

## Model

Procedural Three.js r170 geometry using the repository's local vendor module; no external CDN, downloaded model, or new image-generation call. Broad gray folded abdomen, mottled cuticle, sparse short bristles, small sensory spots, lateral pores, and serrated grasping mouthparts. Sixteen articulated legs. Coxa, femur, tibia and terminal claw lengths are approximately half the original rig, with exact femur/tibia lengths of 0.875 and 1.14 model units (previously 1.75 and 2.28). Reach is clamped rather than stretching bones.

## Movement

Four staggered support groups, world-space planted foot targets, lifted swing phases and two-bone inverse kinematics. Small body weight shifts, abdominal breathing, probing palps, slow jaw opening and fast pinching closure. The same mesh travels toward a perspective camera for the lunge; there is no frontal sprite swap. The bite button triggers a pinch during the crawl; automatic pinches precede and accompany the lunge.

## Runtime

Page-scoped, silent, one automatic run when the hero enters view. Replay, stop, Escape, resize and background-tab cancellation. Reduced-motion preference permits only a manually requested still 3D render. WebGL failure uses `almohadon-creature-gray-preview.webp`, a transparent browser render of this model, not the former red artwork. Animation frames stop when the sequence ends. Pixel ratio is capped and shadow/pixel cost drops on slower devices. The circular audio player uses its own canvas and is not controlled by this scene.

## Checks

Browser checks: 16 limbs; exact femur/tibia lengths during walking; stance and swing phases; manual jaw open/snap; complete sequence; desktop and mobile layouts at 1440, 768, 390 and 320px; Escape; reduced motion; empty-audio transport; power and mobile menu. Physical-device GPU performance is not certified by the desktop browser checks.
