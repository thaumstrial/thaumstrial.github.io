# The vibratring string
## Simple harmonic motion
Let $y(t)$ denote the displacement of the mass at time $t$.

Apply Hooke’s Law:

$k\space(k>0)$ denotes the spring constant.

$x$ denotes the displacement.

$F$ denotes the force applied by the spring.

$$
\begin{align*}
    F &= -kx \\
    F &= -ky(t)
\end{align*}
$$

Apply Newton’s Law:

$m$ denotes the mass.

$a$ denotes the acceleration.

$F$ denotes the force.

$$
\begin{align*}
    F &= ma \\
    -ky(t) &= ma \\
    x &= y(t) \\
    v &= y^{'}(t) \\
    a &= y^{''}(t) \\
    -ky(t) &= my^{''}(t)
\end{align*}
$$

Let $c=\sqrt{k/m}$ to simplify this equation.

$$
\begin{align*}
    -ky(t) &= my^{''}(t) \\
    0 &= my^{''}(t) + ky(t) \\
    my^{''}(t) + ky(t) &= 0 \\
    y^{''}(t) + \frac{k}{m}y(t) &= 0 \\
    c &= \sqrt{k/m} \\
    c^2 &= k/m \\
    y^{''}(t) + \frac{k}{m}y(t) &= 0 \\
    y^{''}(t) + c^2y(t) &= 0 \\
\end{align*}
$$
The general solution of that equation is given by:
$$
y(t)=a\cos ct + b\sin ct
$$
Given $y(0)$,
$$
\begin{align*}
    y(0) &= a\cos(c\times 0) + b\sin (c\times 0)
    \\
    y(0) &= a\cos 0 + b\sin 0
    \\
    y(0) &= a \times 1 + b \times 0
    \\
    y(0) &= a
    \\
    a &= y(0)
\end{align*}
$$
Given $y^{'}(0)$,
$$
\begin{align*}
y(t) &= a\cos ct + b\sin ct \\
    y^{'}(t) &= -ac \sin ct + bc\cos ct \\
    y^{'}(0) &= -ac \sin (c\times 0) + bc\cos (c\times 0) \\
    y^{'}(0) &= -ac \sin 0 + bc\cos 0 \\
    y^{'}(0) &= -ac \times 0 + bc\times 1 \\
    y^{'}(0) &= bc \\
    b &= \frac{y^{'}(0)}{c}
\end{align*}
$$
Since $a = y(0)$ and $b = \frac{y^{'}(0)}{c}$:
$$
\begin{align*}
    y(t) &= a\cos ct + b\sin ct \\
    y(t) &= y(0)\cos ct + \frac{y^{'}(0)}{c}\sin ct \\
\end{align*}
$$

---

Given Angle Subtraction Theorem:

$\alpha,\beta \in \mathbb{R}$
$$
\begin{align*}
    \cos (\alpha - \beta) &= \cos \alpha \cos \beta + \sin \alpha \sin \beta \\
\end{align*}
$$
Let $\alpha = ct$, $\beta = \varphi$:
$$
\begin{align*}
    \cos (ct - \varphi) &= \cos ct \cos \varphi + \sin ct \sin \varphi \\
\end{align*}
$$
Let $A >0$:
$$
\begin{align*}
    A\cos (ct - \varphi) &= A\cos ct \cos \varphi + A\sin ct \sin \varphi \\
    A\cos (ct - \varphi) &= (A\cos \varphi) \cos ct + (A\sin \varphi) \sin ct \ \\
\end{align*}
$$
Given:
$$
\begin{align*}
    y(t) &= a\cos ct + b\sin ct \\  
    A\cos (ct - \varphi) &= (A\cos \varphi) \cos ct + (A\sin \varphi) \sin ct
\end{align*}
$$
Thus:
$$
\begin{align*}
    a &= A\cos \varphi \\
    b &= A\sin \varphi \\
    y(t) &= A\cos (ct - \varphi) \\  
    A\cos (ct - \varphi) &= a\cos ct + b\sin ct
\end{align*}$$
Given the Pythagorean Identity:
$$
    \sin^2\theta+\cos^2\theta=1
$$
Let $\theta=\varphi$:
$$
\begin{align*}
    \sin^2\varphi+\cos^2\varphi &= 1 \\
    (\frac{b}{A})^2 + (\frac{a}{A})^2 &= 1 \\
    b^2 + a^2 &= A^2 \\
    A &= \sqrt{a^2+b^2}
\end{align*}
$$
For equation:
$$
A\cos (ct - \varphi) = a\cos ct + b\sin ct
$$
$A$ denotes the amplitude.


$c$ denotes natural frequency.

$\varphi$ denotes phase.

$2\pi/c$ denotes the "period" of the motion.
## Derivation of the wave equation
$$
\frac{1}{c^2}\frac{\partial^2u}{\partial t^2}=\frac{\partial^2u}{\partial x^2}
$$
Let $x=aX$, $t=bT$, $U(X,T)=u(x,t)$ ($a$ and $b$ are positive constants):
$$
\begin{align*}
    \frac{\partial^2U}{\partial X^2}&=a^2\frac{\partial^2u}{\partial x^2} \\
    \frac{\partial^2U}{\partial X^2a^2} &= \frac{\partial^2u}{\partial x^2} \\
    \\
    \frac{\partial^2U}{\partial T^2}&=b^2\frac{\partial^2u}{\partial t^2} \\
    \frac{\partial^2U}{\partial T^2b^2} &= \frac{\partial^2u}{\partial t^2}
\end{align*}
$$
Replace original equation:
$$
\begin{align*}
    \frac{1}{c^2}\frac{\partial^2u}{\partial^2t} &= \frac{\partial^2u}{\partial^2x} \\
    \frac{1}{c^2}\frac{\partial^2U}{\partial T^2b^2} &=  \frac{\partial^2U}{\partial X^2a^2} \\
    \frac{a^2}{c^2b^2}\frac{\partial^2U}{\partial T^2} &=  \frac{\partial^2U}{\partial X^2}
\end{align*}
$$
If we choose $a,b$ properly, we can let $\frac{a^2}{c^2b^2}=1$, and get:
$$
\frac{\partial^2U}{\partial T^2} = \frac{\partial^2U}{\partial X^2}
$$
