Some exercise solutions for John M. Lee Introduction to Smooth Manifolds Second Edition

## 12 Tensor
### Exercise 12.3
Let $F,F'\in L(V_1,\dots,V_k;\mathbb{R}),\quad G,G'\in L(W_1,\dotsb,W_l;\mathbb{R})$, and scalars $a,b\in\mathbb{R}$.

- Bilinearity

    For the first variable,
    $$
    \begin{align*}
        &((aF+bF')\otimes G)(v,w) \\
        =& (aF+bF')(v)G(w) \\
        =& (aF(v)+bF'(v))G(w) \\
        =& aF(v)G(w)+bF'(v)G(w) \\
        =& a(F\otimes G)(v,w)+b(F'\otimes G)(v,w)
    \end{align*}
    $$

    For the second variable,
    $$
    \begin{align*}
        &(F\otimes (aG+bG'))(v,w) \\
        =& F(v)(aG+bG')(w) \\
        =& F(v)(aG(w)+bG'(w)) \\
        =& aF(v)G(w)+bF(v)G'(w) \\
        =& a(F\otimes G)(v,w)+b(F\otimes G')(v,w)
    \end{align*}
    $$
    Thus the bilinearity holds.
- Associativity

    Let $H\in L(U_1,\dots,U_m;\mathbb{R})$.

    Left-hand side:
    $$
    ((F\otimes G)\otimes H)(v,w,u)=(F\otimes G)(v,w)H(u)=F(v)G(w)H(u)
    $$
    Right-hand side:
    $$
    (F\otimes(G\otimes H))(v,w,u)=F(v)(G\otimes H)(w,u)=F(v)(G(w)H(u))
    $$

    Left-hand side equals right-hand side by the associativity of multiplication.

Thus the operation $\otimes$ is bilinear and associative.