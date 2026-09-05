# Boss animation artwork

The built-in image generation tool was used to create `boss-actions-v58.png` from the game's existing `boss-trio-v33.png` reference.

Prompt: preserve the three bosses' armor, identity, weapons, palette and art style. Create a uniform six-column, three-row sprite atlas. Each row contains idle, walking, attack windup, impact, recovery and hit recoil poses for one boss. Keep full bodies and weapons isolated within their cells, with consistent scale and feet placement. No text or scenery.

Follow-up prompt: replace the generated checkerboard background with uniform pure black, preserving all 18 sprites and their layout. Runtime `blackKey12` removes the black background. Original generated assets remain preserved separately.
