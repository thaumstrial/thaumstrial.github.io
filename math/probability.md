## Expectation
### Linearity
$$
\begin{align*}
    \mathbb{E}[aX+b] &= \sum_x(ax+b)\cdot p(x) \\
    &= \sum_x(ax\cdot p(x)+b\cdot p(x)) \\
    &= \sum_x ax\cdot p(x)+ \sum_x b\cdot p(x) \\
    &= a\sum_x x\cdot p(x)+ b\sum_x p(x) \\
    &= a\mathbb{E}[X]+b
\end{align*}
$$
## Variance
### $Var(X)=\mathbb{E}[X^2]+\mathbb{E}[X]^2$
$$
\begin{align*}
    Var(X) &= \mathbb{E}[(X-\mu)^2] \\
    &= \sum_x (x-\mu)^2p(x) \\
    &= \sum_x (x^2-2x\mu-\mu^2)p(x) \\
    &= \sum_x (x^2\cdot p(x)-2x\mu\cdot p(x)+\mu^2\cdot p(x)) \\
    &= \sum_x x^2\cdot p(x)-\sum_x 2x\mu\cdot p(x)+ \sum_x \mu^2\cdot p(x) \\
    &= \sum_x x^2\cdot p(x)-2\mu\sum_x x\cdot p(x)+ \mu^2\sum_x \cdot p(x) \\
    &= \mathbb{E}[X^2]- 2\mu\mathbb{E}[X]+\mu^2\times 1 \\
    &= \mathbb{E}[X^2]- 2\mu\cdot\mu+\mu^2\\
    &= \mathbb{E}[X^2]- \mu^2 \\
    &= \mathbb{E}[X^2]- \mathbb{E}[X]^2 \\
\end{align*}
$$
## Binomial Distribution
### expectation
$$
\begin{align*}
    \mathbb{E}[X] &= \sum_{k=0}^{n}k\cdot\binom{n}{k} p^k (1 - p)^{n - k} \\
    &= \sum_{k=1}^{n}k\cdot\binom{n}{k} p^k (1 - p)^{n - k} \\  
    &= \sum_{k=1}^{n}k\cdot \frac{n!}{k!(n-k)!} \cdot p^k (1 - p)^{n - k} \\ 
    &= \sum_{k=1}^{n}\frac{n!}{(k-1)!(n-k)!} \cdot p^k (1 - p)^{n - k} \\ 
    &= \sum_{k=1}^{n}\frac{n\cdot(n-1)!}{(k-1)!(n-1 - (k -1))!} \cdot p^k (1 - p)^{n - k} \\ 
    &= n\sum_{k=1}^{n}\binom{n-1}{k-1}p^k (1 - p)^{n - k} \\
    &= np\sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1} (1 - p)^{n - k} \\
    &= np\sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1} (1 - p)^{(n - 1) - (k - 1)} \\
    &\text{Let $m=n-1$, $j=k-1:$}\\
    &= np\sum_{j=0}^{m}\binom{m}{j}p^{j}(1-p)^{m-j} \\
    &\text{$\sum_{j=0}^{m}\binom{m}{j}p^{j}(1-p)^{m-j}$ is the sum of all probabilities of Bin(m,p),}\\
    &=np\times 1 \\
    &=np
\end{align*}
$$
### variance
$$
\begin{align*}
    Var(X) &= \mathbb{E}[X^2]-\mathbb{E}[X]^2 \\
    &= \mathbb{E}[X^2]-(np)^2 
\end{align*}
$$
The proccess is similiar to above.
$$
\begin{align*}
    \mathbb{E}[X^2] &= \sum_{k=0}^n k^2\cdot\binom{n}{k}p^k(1-p)^{n-k} \\
    &= \sum_{k=1}^n k^2\cdot\binom{n}{k}p^k(1-p)^{n-k} \\
    &= n\sum_{k=1}^n k\cdot\binom{n-1}{k-1}p^k(1-p)^{n-k} \\
    &= np\sum_{k=1}^n k\cdot\binom{n-1}{k-1}p^{k-1}(1-p)^{n-1-(k-1)} \\
    &\text{Let $m=n-1$, $j=k-1:$}\\
    &= np\sum_{j=0}^m (j+1)\cdot\binom{m}{j}p^{j}(1-p)^{m-j} \\
    &= np(\sum_{j=0}^m j\cdot\binom{m}{j}p^{j}(1-p)^{m-j} + \sum_{j=0}^m \binom{m}{j}p^{j}(1-p)^{m-j}) \\
    &\text{$\sum_{j=0}^m j\cdot\binom{m}{j}p^{j}(1-p)^{m-j}$ is the expectation evaluated above}\\
    &= np(mp + 1) \\
    &= np(np-p+1) \\
    &= (np)^2-np^2+np \\
    &= (np)^2+np(1-p)
\end{align*}
$$
$$
\begin{align*}
    \mathbb{E}[X^2]-(np)^2 &= (np)^2+np(1-p) - (np)^2\\
    &= np(1-p)
\end{align*}
$$
## Geometric Distribution
### expectation
$$
\begin{align*}
    \mathbb{E}[X]&=\sum_{k=1}^\infty k\cdot(1-p)^{k-1}p \\
    &= p\sum_{k=1}^\infty k\cdot (1-p)^{k-1} \\
    &\text{Let $q=1-p$,} \\
    &= p\sum_{k=1}^\infty k\cdot q^{k-1} \\
    &=\frac{p}{q}\sum_{k=1}^\infty k\cdot q^{k}\\
    &\text{This is the arithmetico-geometric sequence.}\\
    &\text{Apply sum formula,}\\
    &=\frac{p}{q}\cdot\frac{q}{(1-q)^2} \\
    &=\frac{p}{(1-(1-p))^2} \\
    &=\frac{p}{p^2} \\
    &=\frac{1}{p}
\end{align*}
$$
### variance
$$
\begin{align*}
    Var(X) &= \mathbb{E}[X^2]-\mathbb{E}[X]^2 \\
    &= \mathbb{E}[X^2]-\frac{1}{p^2}
\end{align*}
$$
$$
\begin{align*}
    \mathbb{E}[X^2] &= \sum_{k=1}^\infty k^2\cdot(1-p)^{k-1}p \\
    &= p\sum_{k=1}^\infty k^2\cdot(1-p)^{k-1} \\
    &\text{Let $q=1-p$,}\\
    &= p\sum_{k=1}^\infty k^2\cdot q^{k-1} \\
\end{align*}
$$
See [Differentiation of Geometric Series](./calculus.md#differentiation-of-geometric-series).

$$
\begin{align*}
    p\sum_{k=1}^\infty k^2\cdot q^{k-1}
    &= \frac{p}{q}\sum_{k=1}^\infty k^2\cdot q^{k} \\
    &= \frac{p}{q}\cdot\frac{q(1+q)}{(1-q)^3} \\
    &= \frac{p(1+q)}{(1-q)^3} \\
    &= \frac{p(1+1-p)}{(1-1+p)^3} \\
    &= \frac{2p-p^2}{p^3} \\
    &= \frac{2-p}{p^2}
\end{align*}
$$
$$
\begin{align*}
    Var(X) &= \mathbb{E}[X^2]-\mathbb{E}[X]^2 \\
    &= \frac{2-p}{p^2}-\frac{1}{p^2} \\
    &= \frac{1-p}{p^2} \\
\end{align*}
$$
## Poisson Distribution
### probability mass function
Derived from binomial distribution,
$$
\begin{align*}
    &\lim_{n\to\infty}\binom{n}{k}\left(\frac{\lambda}{n}\right)^k\left(1-\frac{\lambda}{n}\right)^{n-k} \\
    =& \lim_{n\to\infty}\frac{n^k}{k!}\cdot\frac{\lambda^k}{n^k}\left(1-\frac{\lambda}{n}\right)^{n}\cdot\left(1-\frac{\lambda}{n}\right)^{-k} \\
    =& \frac{\lambda^k}{k!}\cdot e^{-\lambda}\cdot 1 \\
    =& e^{-\lambda}\frac{\lambda^k}{k!}
\end{align*}
$$
### expectation
$$
\begin{align*}
    \mathbb{E}[X] &= \sum_{k=0}^{\infty}k\cdot e^{-\lambda}\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}\sum_{k=0}^{\infty}k\cdot\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}\sum_{k=1}^{\infty}k\cdot\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}\sum_{k=1}^{\infty}\frac{\lambda^k}{(k-1)!} \\
    &= \lambda e^{-\lambda}\sum_{k=1}^{\infty}\frac{\lambda^{k-1}}{(k-1)!} \\
    &\text{Let $j=k-1$,}\\
    &= \lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^{j}}{j!} \\
    &\text{By the definition $e^x=\sum_{n=0}^\infty\frac{x^n}{n!}$,}\\
    &= \lambda e^{-\lambda}\cdot e^\lambda \\
    &= \lambda
\end{align*}
$$
### variance
$$
\begin{align*}
    Var(X) &= \mathbb{E}[X^2]-\mathbb{E}[X]^2 \\
    &= \mathbb{E}[X^2]-\lambda^2
\end{align*}
$$
$$
\begin{align*}
    \mathbb{E}[X^2] &= \sum_{k=0}^{\infty}k^2\cdot e^{-\lambda}\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}\sum_{k=0}^{\infty}k^2\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}\sum_{k=0}^{\infty}(k(k-1)+k)\frac{\lambda^k}{k!} \\
    &= e^{-\lambda}(\sum_{k=0}^{\infty}k(k-1)\frac{\lambda^k}{k!} + \sum_{k=0}^{\infty}k\frac{\lambda^k}{k!})\\
    &\text{$\sum_{k=0}^{\infty}k\frac{\lambda^k}{k!}$ is evaluated above.}
\end{align*}
$$
$$
\begin{align*}
    \sum_{k=0}^{\infty}k(k-1)\frac{\lambda^k}{k!} &=\sum_{k=2}^{\infty}k(k-1)\frac{\lambda^k}{k!}\\
    &=\sum_{k=2}^{\infty}\frac{\lambda^{k-2}\cdot\lambda^2}{(k-2)!}\\
    &= \lambda^2\sum_{k=2}^{\infty}\frac{\lambda^{k-2}}{(k-2)!}\\
    &\text{Let $j=k-2$}\\
    &= \lambda^2\sum_{j=0}^{\infty}\frac{\lambda^{j}}{j!} \\
    &= \lambda^2e^\lambda
\end{align*}
$$
$$
\begin{align*}
    &e^{-\lambda}(\sum_{k=0}^{\infty}k(k-1)\frac{\lambda^k}{k!} + \sum_{k=0}^{\infty}k\frac{\lambda^k}{k!}) \\
    =&e^{-\lambda}(\lambda^2e^\lambda+\lambda e^\lambda) \\
    =& e^{-\lambda}\cdot e^\lambda(\lambda^2+\lambda) \\
    =& \lambda^2+\lambda
\end{align*}
$$
$$
\begin{align*}
    \mathbb{E}[X^2]-\lambda^2 &= \lambda^2+\lambda - \lambda^2\\
    &=\lambda
\end{align*}
$$