# Hero motion v61

Four reference-guided image-generation atlases are saved as `hero-sword-actions-v61.png`, `hero-lancer-actions-v61.png`, `hero-axe-actions-v61.png`, and `hero-mage-actions-v61.png`. Existing source artwork is preserved.

Generation mode: new raster sprite atlases guided by existing character references. Prompt: create an eight-pose, four-column/two-row dark-fantasy sprite atlas on pure black with a single full-body character per cell, consistent anatomy and scale, right-facing orientation, and generous gutters. Poses: neutral, initial anticipation, full windup, contact, follow-through, recovery, defensive guard, successful deflection. Preserve each reference character's armor, face, weapon and palette. Draw real limb and torso movement; avoid labels, grids and large painted attack trails.

References: sword-new-parry.png and heroes-v10.png for the blue-caped knight; moon-lancer-v15.png and lancer-potion-v60.png for the closed-helmet silver lancer; heroes-v10.png row three for the red-armored axe warrior and row four for the purple mage. Weapon directions: diagonal sword cut, spear thrust, overhead axe chop, and staff casting.

Implementation: hero-motion-v61.js isolates the inspected frames using custom gutter crops and foot anchors. Each class uses one fixed anatomical scale throughout an action. Spear follow-through holds the forward-facing contact pose because the generated follow-through faces backward. Attack contact starts at the existing 30% phase. Guard and successful parry use distinct poses. Root displacement eases through the attack without stretching the sprite. Existing potion, roll, enemy rendering, damage timing, audio and slash effects remain delegated to their existing implementations.

Validation: inspected all four generated atlases; parsed the combined inline/external JavaScript; exercised 24 action samples for invariant scale and checked potion/roll/enemy delegation, contact timing and successful-parry selection in an isolated JavaScript harness. An interactive browser was unavailable, so in-game visual playback still needs human review.
