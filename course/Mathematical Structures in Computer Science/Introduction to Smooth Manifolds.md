Some exercise solutions for John M. Lee Introduction to Smooth Manifolds Second Edition
## 1 Smooth Manifold
### Exercise 1.18
- Suppose $\mathcal{A_1},\mathcal{A}_2$ determine the same smooth structure $\mathcal{A}$ in $M$.

    By the definition of maximality, $\mathcal{A}_1\subseteq\mathcal{A}$ and $\mathcal{A}_2\subseteq\mathcal{A}$. Since every pair of charts in $\mathcal{A}$ is smoothly compatible, the same holds for any pair of charts taken from $\mathcal{A}_1\cup\mathcal{A}_2\subseteq \mathcal{A}$. Thus $\mathcal{A}_1\cup\mathcal{A}_2$ is a smooth atlas.

- Suppose $\mathcal{A}_1\cup\mathcal{A}_2$ is a smooth atlas.

    Let $\mathcal{A}$ be the unique maximal smooth atlas containing $\mathcal{A}_1\cup\mathcal{A}_2$.
    Since $\mathcal{A}_1\subseteq \mathcal{A}_1\cup\mathcal{A}_2\subseteq \mathcal{A}$, the maximal smooth atlas determined by $\mathcal{A}_1$ must be contained in $A$. But a maximal smooth atlas cannot be properly contained in another. Thus the maximal smooth atlas determined by $\mathcal{A}_1$ is $\mathcal{A}$. The same argument applies to $\mathcal{A}_2$, so $\mathcal{A}_1$ and $\mathcal{A}_2$ determines the same smooth structure.
$$\square$$
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
$$\square$$