# Original artwork restoration

The active attack/guard renderer now uses the retained heroes-v10.png and moon-lancer-v15.png source sheets. It no longer loads the replacement hero-action atlases introduced in v61. The origin and license of the retained sheets have not been established; this change does not claim they are third-party free assets.

Source poses include the knight's blue crescent, the axe warrior's red sweep, the lancer's extended blue spear, and the mage's violet casting ribbons. Per-pose polygon crops retain larger detached effects and remove tiny disconnected fragments. Where a recovery pose overlaps adjacent artwork, an intact return stance from the same retained sheet is used. Idle, walking, rolling and potion rendering remain with their existing implementations.

Decorative additions: mage ground sigil, orbiting energy-core filaments and projectile wake, short weapon-specific strike accents. Damage, projectile collision radii and timing are unchanged. Sword audio uses a broad steel sweep; spear audio uses a shorter air jet and dry shaft transient. Axe and mage audio retain their previous implementation.

Checks: all 41 script blocks initialized in order; all four classes exercised attack/guard/draw/potion paths in the mocked browser harness; flask consumption and healing passed. Four sword/spear light/heavy sound buffers had finite nonzero samples and bounded peaks, with distinct durations. Original pose crops were inspected using an offline canvas contact sheet. Local page, all three new scripts and both source atlases returned HTTP 200.

Limits: the browser connection remains unavailable. These checks are not a live browser playtest or a listening test. The offline preview and mocked canvas path do not establish perfect in-game clipping or browser rendering.

The additional generated effect atlases requested before the user's clarification were not integrated; retained original artwork is used instead.
