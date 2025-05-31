# Derivative
## Proofs of the Derivative Rules
### $\sin x$
$$
\begin{aligned}
    &\lim_{h\to 0}\frac{\sin(x+h)-\sin x}{h} \\
    =& \lim_{h\to 0}\frac{\sin x\cos h + \cos x \sin h -\sin x}{h} \\
    =& \lim_{h\to 0}\frac{\sin (x)\cos(h - 1) + \cos x \sin h}{h} \\
    =& \sin (x)\lim_{h\to 0}\frac{\cos (h - 1)}{h} + \cos (x)\lim_{h\to 0}\frac{\sin h}{h} \\
\end{aligned}
$$
$$
\lim_{h\to 0}\frac{\cos (h - 1)}{h} = 0
$$
$$
\lim_{h\to 0}\frac{\sin h}{h} = 1
$$
$$
\begin{aligned}
    & \sin (x)\lim_{h\to 0}\frac{\cos (h - 1)}{h} + \cos (x)\lim_{h\to 0}\frac{\sin h}{h} \\
    =& \cos x
\end{aligned}
$$
### $\ln{x}$
$$
\begin{aligned}
    \frac{\mathrm{d}}{\mathrm{d}x}\ln{x}
    &= \lim_{h\to 0}\frac{\ln{(x+h)}-\ln{x}}{h} \\
    &= \lim_{h\to 0}\frac{\ln{(\frac{x+h}{x})}}{h} \\
    &= \lim_{h\to 0}\frac{\ln{(\frac{x}{x}+\frac{h}{x})}}{h} \\
    &= \lim_{h\to 0}\frac{\ln{(1+\frac{h}{x})}}{h} \\
    &= \lim_{h\to 0}\ln{(1+\frac{h}{x})^\frac{1}{h}}
\end{aligned}
$$
Now, deal with $(1+\frac{h}{x})^\frac{1}{h}$:
$$
\begin{aligned}
    e &= \lim_{h\to \infty}(1+\frac{1}{h})^h \\
    e &= \lim_{h\to 0}(1+h)^\frac{1}{h} \\
    & \text{Change variable $h$ to $h/x$, }\\
    & \text{$x$ is a nonzero constant.}\\
    e &= \lim_{h/x\to 0}(1+\frac{h}{x})^\frac{x}{h} \\
    e &= \lim_{h\to 0}(1+\frac{h}{x})^\frac{x}{h} \\
    e^\frac{1}{x} &= \lim_{h\to 0}(1+\frac{h}{x})^{\frac{x}{h}\cdot\frac{1}{x}} \\
    e^\frac{1}{x} &= \lim_{h\to 0}(1+\frac{h}{x})^{\frac{1}{h}}
\end{aligned}
$$
$$
\begin{aligned}
    \frac{\mathrm{d}}{\mathrm{d}x}\ln{x}
    =& \lim_{h\to 0}\ln{(1+\frac{h}{x})^\frac{1}{h}} \\
    =& \lim_{h\to 0}\ln{e^\frac{1}{x}} \\
    =& \lim_{h\to 0}\frac{1}{x} \\
    =& \frac{1}{x}
\end{aligned}
$$
### $(fg)'=f'g+fg'$
$$
\begin{aligned}
    (fg)' &= \lim_{h\to 0}\frac{f(x+h)g(x+h)-f(x)g(x)}{h} \\
    &= \lim_{h\to 0}\frac{f(x+h)g(x+h)-f(x)g(x) - f(x+h)g(x) + f(x+h)g(x)}{h} \\
    &= \lim_{h\to 0}\frac{f(x+h)(g(x+h)-g(x)) + g(x) (f(x+h) - f(x))}{h} \\
    &= \lim_{h\to 0}\frac{f(x+h)(g(x+h)-g(x))}{h} + \lim_{h\to 0}\frac{g(x) (f(x+h) - f(x))}{h} \\
    &= \lim_{h\to 0}\left(f(x+h)\frac{(g(x+h)-g(x))}{h}\right) + \lim_{h\to 0}\left(g(x)\frac{(f(x+h) - f(x))}{h}\right) \\
    &= \left(\lim_{h\to 0}f(x+h)\right)\left(\lim_{h\to 0}\frac{g(x+h)-g(x)}{h}\right) + \left(\lim_{h\to 0}g(x)\right)\left(\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}\right)\\
    &= f(x)g'(x)+f'(x)g(x)
\end{aligned}
$$
### $x^n$
$$
\begin{aligned}
    y &= x^n \\
    \ln{y} &= \ln{x^n} \\
    \ln{y} &= n\ln{x} \\
    \ln{y} &= n\ln{x} \\
    \frac{\mathrm{d}}{\mathrm{d}x}(\ln{y})
    &= \frac{\mathrm{d}}{\mathrm{d}x}(n\ln{x}) \\
    \frac{y'}{y} &= \frac{n}{x} \\
    y' &= y\frac{n}{x} \\
    y' &= x^n\frac{n}{x} \\
    y' &= nx^{n-1}
\end{aligned}
$$
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