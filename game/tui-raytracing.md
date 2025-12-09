This is a real-time ray tracer running in the terminal using [ratatui](https://ratatui.rs/), 
and running on the browser by [ratzilla](https://github.com/orhun/ratzilla) backend.
It supports Lambertian, Metal, and Dielectric materials,
full BVH acceleration,
real-time camera movement,
and ASCII-based shading.

**Controls**:

wasd: move in four directions

q: move up
e: move down

[Online wasm demo](https://thaumstrial.github.io/game/tui_raytracing_wasm/index.html)

**TODO:**

wgpu acceleration

Spare Voxel Octree

**Reference**:

[_Ray Tracing in One Weekend_](https://raytracing.github.io/books/RayTracingInOneWeekend.html)

[_Ray Tracing: The Next Week_](https://raytracing.github.io/books/RayTracingTheNextWeek.html)