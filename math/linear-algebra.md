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
\mathbf{a}_1 &
\mathbf{a}_2 & 
\cdots & 
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