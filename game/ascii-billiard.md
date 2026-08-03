# ASCII Billiard

[online wasm demo](https://thaumstrial.github.io/game/ascii_billiard/index.html)

If the UI appears misaligned or the entire table is not displayed correctly, use Ctrl + Mouse Wheel to resize the browser window until it looks correct,
then refresh the page multiple times before starting a new game. Alternatively, you can download the native version from https://or4ng31.itch.io/ascii-billiard.

The current player's turn is shown as the title of the top-right box. Since the AI calculates its shots very quickly, it will take its turn immediately after you finish your shot.

---
Play ASCII Billiard in your terminal.

- Q / E:          Rotate aim
- W / S:          Adjust shot power
- ↑ ↓ ← →:   Move tip contact point (affects spin)
- Space:          Strike Shift + key    
- Hold Shift:   Fine control (1/10×)
- R:                 Toggle 8× speed

Similar to the 8-balls rule:

1 2 3 4 5 6 7  — Solids

9 A B C D E F  — Stripes

Clear your suit, then pot the 8-ball to win. Potting the 8-ball early results in your opponent winning.

Play hot-seat with your friend or challenge one of three AI bots.

The physics engine is fully discrete, sub-tick simulation, instead of a typical continuous-collision simulation quantised onto a grid. Spin is also modelled, so where you strike the cue ball changes the trajectory.

Can you become the ASCII Billiard master?

---