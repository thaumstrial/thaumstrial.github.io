# Series
## Misc
### Differentiation of Geometric Series
$$
\sum_{n=0}^\infty q^n=\frac{1}{1-q}, |q|<1
$$
The first derivative:   
$$
\begin{align*}
\frac{d}{dq}\left(\sum_{n=0}^\infty q^n\right) &= \sum_{n=1}^\infty nq^{n-1}\\ &= \frac{d}{dq}\left(\frac{1}{1-q}\right) \\
&=\frac{0-1\times- 1}{(1-q)^2}\\ &= \frac{1}{(1-q)^2}    
\end{align*}
$$
$$
\begin{align*}
    \sum_{n=1}^\infty nq^{n-1} &=  \frac{1}{(1-q)^2} \\
    \sum_{n=1}^\infty nq^{n-1}\cdot q &=  \frac{q}{(1-q)^2} \\
    \sum_{n=1}^\infty nq^{n} &= \frac{q}{(1-q)^2}
\end{align*}
$$
The second derivative:
$$
\begin{align*}
\frac{d}{dq}\left(\sum_{n=0}^\infty nq^{n}\right) 
&= \sum_{n=1}^\infty n^2q^{n-1}\\
&= \frac{d}{dq}\left(\frac{q}{(1-q)^2}\right) \\
&= \frac{1\cdot (1-q)^2-q\cdot-1\cdot 2(1-q)}{(1-q)^4} \\
&= \frac{1-2q+q^2+2q-2q^2}{(1-q)^4} \\
&= \frac{1-q^2  }{(1-q)^4}
\end{align*}
$$
$$
\begin{align*}
    \sum_{n=1}^\infty n^2q^{n-1} &= \frac{1-q^2  }{(1-q)^4} \\
    \sum_{n=1}^\infty n^2q^{n} &= \frac{q(1+q)(1-q)}{(1-q)^4} \\
    &= \frac{q(1+q)}{(1-q)^3}
\end{align*}
$$