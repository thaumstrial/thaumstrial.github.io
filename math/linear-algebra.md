# David. C. Lay: Linear Algebra and its Applications", Addison-Wesley.

## 5.3 Theorem 5
> The Diagonalization Theorem:
An $n \times n$ matrix $A$ is diagonalizable if and only if $A$ has $n$ linearly independent
eigenvectors.

First, prove that 

An $n \times n$ matrix $A$ is diagonalizable $\implies$ $A$ has $n$ linearly independent
eigenvectors. 


$$A=PDP^{-1}$$

$$
D =
\begin{bmatrix}
\lambda_1 & 0 &\cdots & 0 \\
0 & \lambda_2 &\cdots & 0 \\
\vdots & \vdots &\ddots & \vdots \\
0 & 0 &\cdots & \lambda_n
\end{bmatrix}
$$
$$
P = \begin{bmatrix}
    \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix}
$$
$$
\begin{align*}
PD
&= \begin{bmatrix}
    \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix}
\begin{bmatrix}
\lambda_1 & 0 &\cdots & 0 \\
0 & \lambda_2 &\cdots & 0 \\
\vdots & \vdots &\ddots & \vdots \\
0 & 0 &\cdots & \lambda_n
\end{bmatrix} 
\\
&= \begin{bmatrix}
\lambda_1 \mathbf{v}_1
&
\lambda_2 \mathbf{v}_2
&
\cdots
&
\lambda_n \mathbf{v}_n
\end{bmatrix}

\end{align*}
$$
$$
\begin{align*}
A &= A\times I \\
  &= A (PP^{-1}) \\
  &= (AP)P^{-1} \\
  &= APP^{-1}
\end{align*}
$$
$$
\begin{align*}
APP^{-1} &= PDP^{-1} \\
APP^{-1}P  &= PDP^{-1}P \\
AP(P^{-1}P)  &= PD(P^{-1}P) \\
AP\times I &= PD \times I \\
AP &= PD
\end{align*}
$$

$$
\begin{align*}
AP &= A \begin{bmatrix}
    \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix} \\
&= \begin{bmatrix}
    A\mathbf{v}_1 & A\mathbf{v}_2 & \cdots & A\mathbf{v}_n
\end{bmatrix}
\end{align*}
$$

$$
\begin{align*}
\begin{bmatrix}
    A\mathbf{v}_1 & A\mathbf{v}_2 & \cdots & A\mathbf{v}_n
\end{bmatrix} &= \begin{bmatrix}
\lambda_1 \mathbf{v}_1
&
\lambda_2 \mathbf{v}_2
&
\cdots
&
\lambda_n \mathbf{v}_n
\end{bmatrix} \\
A\mathbf{v}_i &= \lambda_i\mathbf{v}_i
\end{align*}
$$

$\mathbf{v}_i$ is the $i$th eigenvactor of $A$ and $\lambda_i$ is the corresponding eigenvalue.

Because $P$ is invertible, $\begin{bmatrix}
    \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix}$ is linearly independent.

Then, prove that 

$A$ has $n$ linearly independent
eigenvectors $\implies$ An $n \times n$ matrix $A$ is diagonalizable. 

Let $A=PBP^{-1}$.

$A$ is similar to $B$

Let $B=\begin{bmatrix}
\lambda_1 & 0 &\cdots & 0 \\
0 & \lambda_2 &\cdots & 0 \\
\vdots & \vdots &\ddots & \vdots \\
0 & 0 &\cdots & \lambda_n
\end{bmatrix}$

Where $\lambda_i$ is the $i$th eigenvalue of $A$.

$A\mathbf{v}_i = \lambda_i\mathbf{v}_i$, $\mathbf{v}_i$ is the corresponding eigenvector.

$P$ is some matirx. But such $P$ may not exit, resulting $A=PBP^{-1}$ is invalid. 

So we just need to find a $P$.

Let $P=\begin{bmatrix}
    \mathbf{p}_1 & \mathbf{p}_2 & \cdots & \mathbf{p}_n
\end{bmatrix}$, where $\mathbf{p}_i$ is the $i$the column vector.

$$
\begin{align*}
PB
&= \begin{bmatrix}
    \mathbf{p}_1 & \mathbf{p}_2 & \cdots & \mathbf{p}_n
\end{bmatrix}
\begin{bmatrix}
\lambda_1 & 0 &\cdots & 0 \\
0 & \lambda_2 &\cdots & 0 \\
\vdots & \vdots &\ddots & \vdots \\
0 & 0 &\cdots & \lambda_n
\end{bmatrix} 
\\
&= \begin{bmatrix}
\lambda_1 \mathbf{p}_1
&
\lambda_2 \mathbf{p}_2
&
\cdots
&
\lambda_n \mathbf{p}_n
\end{bmatrix}
\end{align*}
$$

Construct the same euqation again.
$$
\begin{align*}
A &= A\times I \\
  &= A (PP^{-1}) \\
  &= (AP)P^{-1} \\
  &= APP^{-1}
\end{align*}
$$
$$
\begin{align*}
APP^{-1} &= PBP^{-1} \\
APP^{-1}P  &= PBP^{-1}P \\
AP(P^{-1}P)  &= PB(P^{-1}P) \\
AP\times I &= PB \times I \\
AP &= PB
\end{align*}
$$

Let $A=\begin{bmatrix}
    \mathbf{a}_1 \\ \mathbf{a}_2\\ \vdots \\ \mathbf{a}_n
\end{bmatrix}$, where $\mathbf{a}_i$ is the $i$the raw vector.
$$
\begin{align*}
AP &= \begin{bmatrix}
    \mathbf{a}_1 \\ \mathbf{a}_2\\ \vdots \\ \mathbf{a}_n
\end{bmatrix}
\begin{bmatrix}
    \mathbf{p}_1 & \mathbf{p}_2 & \cdots & \mathbf{p}_n
\end{bmatrix} \\
&= \begin{bmatrix}
    \mathbf{a}_1\mathbf{p}_1 & \mathbf{a}_1\mathbf{p}_2 & \cdots & \mathbf{a}_1\mathbf{p}_n \\
    \mathbf{a}_2\mathbf{p}_1 & \mathbf{a}_2\mathbf{p}_2 & \cdots & \mathbf{a}_2\mathbf{p}_n \\
    \vdots & \vdots & \ddots & \vdots\\
    \mathbf{a}_n\mathbf{p}_1 & \mathbf{a}_n\mathbf{p}_2 & \cdots & \mathbf{a}_n\mathbf{p}_n
\end{bmatrix} \\
\end{align*}
$$

$$
\begin{align*}
AP &= PB \\
\begin{bmatrix}
    \mathbf{a}_1\mathbf{p}_1 & \mathbf{a}_1\mathbf{p}_2 & \cdots & \mathbf{a}_1\mathbf{p}_n \\
    \mathbf{a}_2\mathbf{p}_1 & \mathbf{a}_2\mathbf{p}_2 & \cdots & \mathbf{a}_2\mathbf{p}_n \\
    \vdots & \vdots & \ddots & \vdots\\
    \mathbf{a}_n\mathbf{p}_1 & \mathbf{a}_n\mathbf{p}_2 & \cdots & \mathbf{a}_n\mathbf{p}_n
\end{bmatrix} 
&=
\begin{bmatrix}
\lambda_1 \mathbf{p}_1
&
\lambda_2 \mathbf{p}_2
&
\cdots
&
\lambda_n \mathbf{p}_n
\end{bmatrix} \\
\begin{bmatrix}
    \mathbf{a}_1\mathbf{p}_i \\ \mathbf{a}_2\mathbf{p}_i \\ \vdots \\ \mathbf{a}_n\mathbf{p}_i
\end{bmatrix}  &= \lambda_i\mathbf{p}_i
\end{align*}
$$

Let $\mathbf{a}_i=\begin{bmatrix}
    a_{i1} & a_{i2} & \cdots & a_{in}
\end{bmatrix}$.

Let $\mathbf{p}_i=\begin{bmatrix}
    p_{1i} \\ p_{2i} \\ \cdots \\ p_{ni}
\end{bmatrix}$.

$$
\mathbf{a}_j\mathbf{p}_i=\begin{bmatrix}
    a_{j1} & a_{j2} & \cdots & a_{jn}
\end{bmatrix}\begin{bmatrix}
    p_{1i} \\ p_{2i} \\ \cdots \\ p_{ni}
\end{bmatrix}
$$

By the definition of matrix multiplication,
$$
\begin{align*}
\begin{bmatrix}
    \mathbf{a}_1\mathbf{p}_i \\ \mathbf{a}_2\mathbf{p}_i \\ \vdots \\ \mathbf{a}_n\mathbf{p}_i
\end{bmatrix}  
&=\begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots\\
    a_{n1} & a_{n2} & \cdots & a_{nn} 
\end{bmatrix}
\begin{bmatrix}
    p_{1i} \\ p_{2i} \\ \cdots \\ p_{ni}
\end{bmatrix} \\
&= \begin{bmatrix}
    \mathbf{a}_1 \\ \mathbf{a}_2\\ \vdots \\ \mathbf{a}_n
\end{bmatrix}\mathbf{P}_i \\
&= A\mathbf{p}_i
\end{align*}
$$

$$
A\mathbf{p}_i = \lambda_i\mathbf{p}_i
$$
Thus, each $\mathbf{p}$ is an eigenvector of $A$.

Because $n$ eigenvectors of $A$ are linearly independet, $P$ is invertible.

$A=PBP^{-1}$ is indeed valid.

## 6.1 Theorem 3
> Let $A$ be an $m \times n$ matrix. The orthogonal complement of the row space of $A$ is
the null space of $A$, and the orthogonal complement of the column space of $A$ is
the null space of $A^T$ : $(\text{Row}\,A)^\perp=\text{Nul}\,A$ and $(\text{Col}\,A)^\perp=\text{Nul}\,A^T$

Let $A=\begin{bmatrix}
\mathbf{a}_1 \\
\mathbf{a}_2 \\
\vdots \\
\mathbf{a}_n
\end{bmatrix}$, and $\mathbf{x} \in \text{Nul}\,A$.

By the definition of Null Space,

$$
\begin{align*}
    A\textbf{x} &= \textbf{0} \\
    \begin{bmatrix}
        \mathbf{a}_1 \\
        \mathbf{a}_2 \\
        \vdots \\
        \mathbf{a}_n
    \end{bmatrix}\textbf{x} &= \begin{bmatrix}
        0 \\
        0 \\
        \vdots \\
        0
    \end{bmatrix} \\
\end{align*}
$$

$$
\mathbf{a}_i \mathbf{x} = 0
$$

Because $\mathbf{a}_i$ is the row vector and $\mathbf{x}$ is the column vector, $\mathbf{a}_i \mathbf{x}$ is the the inner product of the row vector and any vector from Null Space, resulting the linear combinations of row vector are also perpendicular to Null Space.

Thus, $\text{Row}\,A=(\text{Nul}\,A)^\perp$, namely $(\text{Row}\,A)^\perp=\text{Nul}\,A$.

And we can get $(\text{Col}\,A)^\perp=\text{Nul}\,A^T$, by transposing both sides.

## 6.2 Theorem 7
> Let $U$ be an $m \times n$ matrix with orthonormal columns, and let $x$ and $y$ be in $\mathbb{R}^n$.
Then
### a. $\left \lVert U\mathbf{x} \right \rVert = \left \lVert \mathbf{x} \right \rVert$
$$
\begin{align*}
    \left \lVert U\mathbf{x} \right \rVert
    &= 
    \sqrt{U\mathbf{x}\boldsymbol{\cdot} U\mathbf{x}} \\
    &= \sqrt{(U\mathbf{x})^TU\mathbf{x}} \\
    &= \sqrt{\mathbf{x}^TU^TU\mathbf{x}} \\
    &= \sqrt{\mathbf{x}^T(U^TU)\mathbf{x}} \\
    &= \sqrt{\mathbf{x}^TI\mathbf{x}} \\
    &= \sqrt{\mathbf{x}^T\mathbf{x}}
\end{align*}
$$
$$
\begin{align*}
    \left \lVert \mathbf{x} \right \rVert
    &= \sqrt{\mathbf{x}\boldsymbol{\cdot}\mathbf{x}} \\
    &= \sqrt{\mathbf{x}^T\mathbf{x}}
\end{align*}
$$
### b. $(U\mathbf{x})\boldsymbol{\cdot}(U\mathbf{y})=\mathbf{x}\boldsymbol{\cdot}\mathbf{y}$
$$
\begin{align*}
    (U\mathbf{x})\boldsymbol{\cdot}(U\mathbf{y})
    &= (U\mathbf{x})^T(U\mathbf{y}) \\
    &= \mathbf{x}^TU^TU\mathbf{y} \\
    &= \mathbf{x}^T(U^TU)\mathbf{y} \\
    &= \mathbf{x}^TI\mathbf{y} \\
    &= \mathbf{x}^T\mathbf{y} \\
\end{align*}
$$
$$
\begin{align*}
    \mathbf{x}\boldsymbol{\cdot}\mathbf{y} &= \mathbf{x}^T\mathbf{y}
\end{align*}
$$
### c. $(U\mathbf{x})\boldsymbol{\cdot}(U\mathbf{y})=0\iff\mathbf{x}\boldsymbol{\cdot}\mathbf{y}=0$
This is just a special case of b.

## 6.3 Theorem 8
> The Orthogonal Decomposition Theorem: 
Let $W$ be a subspace of $\mathbb{R}^n$. Then each $\mathbf{y}$ in $\mathbb{R}^n$ can be written uniquely in the form
$\mathbf{y}=\mathbf{\hat{y}}+\mathbf{z}$
(1)
where $\mathbf{\hat{y}}$ is in $W$ and $z$ is in $W^\perp$. In fact, if $\left\{\mathbf{u}_1, \ldots, \mathbf{u}_p \right\}$ is any orthogonal basis of
$W$ , then $\mathbf{\hat{y}} = \frac{\mathbf{y}\boldsymbol{\cdot}\mathbf{u}_1}{\mathbf{u}_1\boldsymbol{\cdot}\mathbf{u}_1}\mathbf{u}_1+\ldots+\frac{\mathbf{y}\boldsymbol{\cdot}\mathbf{u}_p}{\mathbf{u}_p\boldsymbol{\cdot}\mathbf{u}_p}\mathbf{u}_p$ (2) and $\mathbf{z}=\mathbf{y}-\mathbf{\hat{y}}$.

The textbook provides the proof. Therefore, we only show how to derive formula (2) here.

$$
\begin{align*}
    (\mathbf{y}-\mathbf{\hat{y}})\boldsymbol{\cdot}\mathbf{\hat{y}} &= 0 \\
    \mathbf{y}\boldsymbol{\cdot}\mathbf{\hat{y}} - \mathbf{\hat{y}}\boldsymbol{\cdot}\mathbf{\hat{y}} &= 0 \\
    \mathbf{y}\boldsymbol{\cdot}\mathbf{\hat{y}} &= \mathbf{\hat{y}}\boldsymbol{\cdot}\mathbf{\hat{y}}
\end{align*}
$$

Let $\mathbf{\hat{y}}=c_1\mathbf{u}_1+\cdots+c_p\mathbf{u}_p$.

Namely,

$$
\begin{align*}
    \mathbf{\hat{y}} 
    &= 
    \begin{bmatrix}
        \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_p
    \end{bmatrix}
    \begin{bmatrix}
        c_{1} \\
        c_{2} \\
        \vdots \\
        c_{p}
    \end{bmatrix}
\end{align*}
$$

$$
\begin{align*}
    \mathbf{y}\boldsymbol{\cdot}\mathbf{\hat{y}} =& \mathbf{y}^T\mathbf{\hat{y}} \\
    =&

\mathbf{y}^T
    \begin{bmatrix}
        \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_p
    \end{bmatrix}
    \begin{bmatrix}
        c_{1} \\
        c_{2} \\
        \vdots \\
        c_{p}
    \end{bmatrix}
\end{align*}
$$
$$
\begin{align*}
    \mathbf{\hat{y}}\boldsymbol{\cdot}\mathbf{\hat{y}} 
    =& 
    (c_1\mathbf{u}_1+\cdots+c_p\mathbf{u}_p)
    \boldsymbol{\cdot}
    (c_1\mathbf{u}_1+\cdots+c_p\mathbf{u}_p) \\
    =& 
    (c_1)^2
    \mathbf{u}_1\boldsymbol{\cdot}\mathbf{u}_1
    +
    \cdots
    +
    (c_p)^2\mathbf{u}_p\boldsymbol{\cdot}\mathbf{u}_p \\
    =&
    \begin{bmatrix}
        c_1(\mathbf{u}_1\boldsymbol{\cdot}\mathbf{u}_1) &
        \cdots &
        c_p(\mathbf{u}_p\boldsymbol{\cdot}\mathbf{u}_p)
    \end{bmatrix}
    \begin{bmatrix}
        c_{1} \\
        c_{2} \\
        \vdots \\
        c_{p}
    \end{bmatrix}
\end{align*}
$$
Apply $\mathbf{y}\boldsymbol{\cdot}\mathbf{\hat{y}} = \mathbf{\hat{y}}\boldsymbol{\cdot}\mathbf{\hat{y}}$:
$$
\begin{align*}
    &
    \mathbf{y}^T
    \begin{bmatrix}
        \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_p
    \end{bmatrix}
    \begin{bmatrix}
        c_{1} \\
        c_{2} \\
        \vdots \\
        c_{p}
    \end{bmatrix}\\
    =&
    \begin{bmatrix}
        c_1(\mathbf{u}_1\boldsymbol{\cdot}\mathbf{u}_1) &
        \cdots &
        c_p(\mathbf{u}_p\boldsymbol{\cdot}\mathbf{u}_p) &
    \end{bmatrix}
    \begin{bmatrix}
        c_{1} \\
        c_{2} \\
        \vdots \\
        c_{p}
    \end{bmatrix} \\
    &
    \mathbf{y}^T
    \begin{bmatrix}
        \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_p
    \end{bmatrix}\\
    =&
    \begin{bmatrix}
        c_1(\mathbf{u}_1\boldsymbol{\cdot}\mathbf{u}_1) &
        \cdots &
        c_p(\mathbf{u}_p\boldsymbol{\cdot}\mathbf{u}_p)
    \end{bmatrix}
\end{align*}
$$
By the definition of matrix multiplication,
$$
\begin{align*}
    c_i(\mathbf{u}_i\boldsymbol{\cdot}\mathbf{u}_i)
    &=
    \mathbf{y}^T
    \mathbf{u}_i \\
    &=
    \mathbf{y}\boldsymbol{\cdot}\mathbf{u}_i \\
    c_i
    &= \frac{\mathbf{y}\boldsymbol{\cdot}\mathbf{u}_i}{\mathbf{u}_i\boldsymbol{\cdot}\mathbf{u}_i}
\end{align*}
$$
$i$ ranges from $1$ to $p$.

## 6.5 Theorem 15

> Given an $m \times n$ matrix $A$ with linearly independent columns, let $A = QR$ be a
QR factorization of A as in Theorem 12. Then, for each $\mathbf{b}$ in $\mathbb{R}^m$, the equation $A\mathbf{x}=\mathbf{b}$ has a unique least-squares solution, given by
$\mathbf{\hat{x}}=R^{-1}Q^T\mathbf{\hat{b}}$

The textbook provides the proof.
We only show how to derive formula (6) here.

$$
\begin{align*}
    A\mathbf{\hat{x}} 
    =& \mathbf{\hat{b}} \\
    
    (QR)\mathbf{\hat{x}}
    =& \mathbf{\hat{b}} \\

    (QR)^{-1}(QR)\mathbf{\hat{x}}
    =& (QR)^{-1}\mathbf{\hat{b}} \\

    I\mathbf{\hat{x}}
    =& R^{-1}Q^{-1}\mathbf{\hat{b}} \\

    \mathbf{\hat{x}}
    =& R^{-1}Q^T\mathbf{\hat{b}} \\
\end{align*}
$$
Because $Q$ has orthonormal columns,
$$
\begin{align*}
    Q^TQ=I=Q^{-1}Q \\
    Q^T=Q^{-1}
\end{align*}
$$