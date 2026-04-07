**Controls**
* Right Click - Move camera orientation
* Middle Click - Rotate object pointed by the cursor
* Scroll - Adjust movement speed
* Right - Hold to grab cursor
* Escape - Toggle cursor grab
* KeyW & KeyS - Fly forward & backwards
* KeyA & KeyD - Fly sideways left & right
* KeyE & KeyQ - Fly up & down
* ShiftLeft - Fly faster while held

You can also the world inspector to change the transforms of the mesh3d and the light.
**Notes**

Inspired by Alex Harri's [ASCII characters are not pixels](https://alexharri.com/blog/ascii-rendering), I built an ASCII stylization pipeline with Bevy. Unlike commonly used brightness mapping, this shader captures the shapes of the object. It uses a 16-dimensional vector with MSE matching to pick the glyph that best represents the actual geometry contours, and quantizes the raw color of the object to PICO-8 color.

I further implemented a PBR input-based character subset selection. Another 4-dimensional vector is used to represent the material information: roughness, metallic, avg_lum, and emissive. They are sampled in the same way as the shape vector without the edge enhancement. 

The ASCII stylization pipeline is based on the [Bevy post-processing example](https://bevy.org/examples/shaders/custom-post-processing/). It contains two nodes: a compute node and a render node. The compute node samples the original screen texture to get the luminosity and samples the deferred G-buffer to get the PBR input. After they are converted into the feature vectors, the compute node finds the best match glyph by its pre-calculated feature vectors. Finally, the compute node outputs an encoded 4D texture, where the RGB channels contain the color value, and the alpha channel is used for the ASCII code. The result texture can be directly read on the CPU side and output the decoded string to the terminal, or be passed to the render node and rendered to the window.

The final result is interesting. Edge information is properly preserved, while the material information is not presented well. This may be due to the weight Euclidean distance matching, which failed to capture the non-linearity between the brightness and the material. I also tried to restrict the candidate glyphs based on the material, then apply the shape vector matching, but the luminosity information is lost. Thus, it is difficult to find the balance between the luminosity, the edge, and the material. Machine learning can be applied to find the proper weight matrix to balance this information, but it requires a properly constructed graph-sampled text dataset. As for the performance, thanks to the parallelism of the GPU, the fps still remains good. D-T tree can be used to speed up the vector match, and some algorithms, such as PCA, can be applied to reduce the feature dimension. 

**Tileset Credits:**
[tejón-Potash_8x8 Tileset](https://dwarffortresswiki.org/index.php/DF2014:Tileset_repository#Potash_8x8.png)