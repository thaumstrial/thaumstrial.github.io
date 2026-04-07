Some exercise solutions for 

Verification of Sequential and Concurrent Programs. Krzysztof R. Apt, Frank S. de Boer, Ernst-R ¨udiger Olderog. Series: Texts in Computer Science. Springer. 3rd ed. 2nd Printing. ISBN: 978-1-84882-744-8

## 2.9 Exercises
### 2.1
#### i
$$
\begin{align*}
    & (p \lor (q \lor r)) \land (q \to (r \to p)) \\
    \equiv& (p \lor (q \lor r)) \land (q \to (\neg r \lor p)) \\
    \equiv& (p \lor (q \lor r)) \land (\neg q \lor (\neg r \lor p)) \\
    \equiv& (p \lor (q \lor r)) \land (\neg q \lor \neg r \lor p) \\
    \equiv& (p \lor (q \lor r)) \land (p \lor (\neg q \lor \neg r)) \\
    \equiv& p \lor ((q \lor r) \land (\neg q \lor \neg r))
\end{align*}
$$
#### ii
$$
\begin{align*}
    & (s \lt t \lor s = t) \land t \lt u \\
    \equiv& s \leq t \land t \lt u
\end{align*}
$$
#### iii
$$
\begin{align*}
    & \exist x: (x \lt t \land (p \land (q \land r))) \lor s = u \\
    \equiv& (\exist x: x \lt t \land (p \land (q \land r))) \lor s = u \\
    \equiv& ((\exist x: x \lt t) \land (p \land (q \land r))) \lor s = u \\
    \equiv& ((\exist x: x \lt t) \land p \land q \land r) \lor s = u
\end{align*}
$$
### 2.2
#### i
$$
\begin{align*}
    & (x + y)[x:=z][z:=y] \\
    \equiv& (z + y)[z:=y] \\
    \equiv& y + y
\end{align*}
$$
#### ii
$$
\begin{align*}
    & (a[x] + y)[x:= z][a[2]:= 1] \\
    \equiv& (a[z] + y)[a[2]:= 1] \\
    \equiv& \textbf{if } z[a[2]:=1]=2\textbf{ then } 1 \textbf{ else }a[z[a[2]:=1]] \textbf{ fi} + y \\
    \equiv& \textbf{if } z=2 \textbf{ then } 1 \textbf{ else } a[z] \textbf{ fi} + y
\end{align*}
$$
#### iii
$$
\begin{align*}
    & a[a[2]][a[2]:= 2] \\
    \equiv& 2
\end{align*}
$$
### 2.3
#### i
$$
\begin{align*}
    & \sigma[x:= 0](a[x]) \\
    =& (\sigma[x:= 0](a))(\sigma[x:= 0](x)) \\
    =& \sigma(a)(0) \\
    =& \sigma(a[0])
\end{align*}
$$
#### ii
$$
\begin{align*}
    & \sigma[y:= 0](a[x]) \\
    =& (\sigma[y:= 0](a))(\sigma[y:= 0](x))\\
    =& \sigma(a)(\sigma(x)) \\
    =& \sigma(a[x])
\end{align*}
$$
#### iii
$$
\begin{align*}
    & \sigma[a[0]:= 2](a[x]) \\
    =& \sigma[a[0]:= 2](a)(\sigma[a[0]:= 2](x)) \\
    =& \sigma[a[0]:= 2](a)(\sigma(x)) \\
    =& \begin{cases}
        2 & \text{if } \sigma(x) = 0, \\
        \sigma(a[x]) & \text{otherwise}.
    \end{cases}
\end{align*}
$$
#### iv
$$
\begin{align*}
    & \tau[a[x]:= \tau(x)](a[1]) \\
    =& \sigma[x:= 1][a[1]:= 2][a[x]:= 1](a)(1) \\
    =& 1
\end{align*}
$$
### 2.4
#### i
$$
\begin{align*}
    & \sigma \models p \land (q \land r) \\
    \iff& (\sigma \models p) \land (\sigma \models (q \land r)) \\
    \iff& (\sigma \models p) \land ((\sigma \models q) \land (\sigma \models r)) \\
    \iff& (\sigma \models p) \land (\sigma \models q) \land (\sigma \models r) \\
    \iff& (\sigma \models p \land q) \land (\sigma \models r) \\
    \iff& \sigma \models (p \land q) \land r \\
\end{align*}
$$
#### ii
$$
\begin{align*}
    & \sigma \models p \lor (q \lor r) \\
    \iff& (\sigma \models p) \lor (\sigma \models q) \lor (\sigma \models r) \\
    \iff& (\sigma \models p \lor q) \lor (\sigma \models r) \\
    \iff& \sigma \models (p \lor q) \lor r
\end{align*}
$$
#### iii
$$
\begin{align*}
    & \sigma \models p \lor (q \land r) \\
    \iff& (\sigma \models p) \lor (\sigma \models (q \land r)) \\
    \iff& (\sigma \models p) \lor ((\sigma \models q) \land (\sigma \models r)) \\
    \iff& ((\sigma \models p) \lor (\sigma \models q)) \land ((\sigma \models p) \lor (\sigma \models r)) \\    
    \iff& \sigma \models (p \lor q) \land (p \lor r) \\
\end{align*}
$$
#### iv
Similar to the above.
#### v
$$
\begin{align*}
    & \sigma \models \exist x: (p \lor q) \\
    \iff& \sigma[x:= d] \models p \lor q \\
    \iff& (\sigma[x:= d] \models p) \lor (\sigma[x:= d] \models q) \\
    \iff& \sigma \models \exist x: p \lor \exist x: q
\end{align*}
$$
#### vi
Similar to the above.
### 2.5
#### i
No. e.g. $p(x)\equiv(x=0), q(x)\equiv(x=1)$

L.H.S is always false, since $x$ has to be $0$ and $1$ at the same time.

R.H.S is true, since $p$ and $q$ can use different $x$.
#### ii
Similar to the above.
#### iii
$$
\begin{align*}
    & (\exist x: z = x + 1)[z:= x + 2] \\
    \equiv& (\exist x: z = x + 1)[x:= y][z:= x + 2] \\
    \equiv& (\exist y: z = y + 1)[z:= x + 2] \\
    \equiv& \exist y: x + 2 = y + 1
\end{align*}
$$
#### iv
$$
\begin{align*}
    & (\exist x: a[s] = x + 1)[a[s] := x + 2] \\
    \equiv& (\exist y: a[s] = y + 1)[a[s] := x + 2] \\
    \equiv& \exist y: x + 2 = y + 1
\end{align*}
$$
### 2.6
#### i
$$
\begin{align*}
    &\sigma \models \forall x: p\\
    \implies& \quad\text{\{
        definition of $\forall$
    \}}\\
    &\forall \tau: \sigma=\tau \text{ mod } x \implies \tau \models p\\
    \implies& \quad\text{\{
        let $\tau=\sigma[x:=d]$, where $d\in\mathcal{D}_T$
    \}}\\
    &\forall d\in\mathcal{D}_T :\sigma[x:=d]\models p
\end{align*}
$$
$$
\begin{align*}
    &\forall d \in \mathcal{D}_T: \sigma[x:=d] \models p \\ 
    \implies& \quad\text{\{
        suppose for any $\tau$ such that $\sigma=\tau\textbf{ mod }x$
    \}}\\
    &\forall \tau: \sigma=\tau \text{ mod } x \implies \tau \models p
    \\
    \implies& \quad\text{\{definition of $\forall$\}} \\
    &\sigma \models \forall x: p
\end{align*}
$$
#### ii
Similar to the above.
### 2.7
#### i
$$
\begin{align*}
    &\llbracket\neg p\rrbracket\\
    =&\text{\{meaning of an assertion\}}\\
    &\{\sigma\in\Sigma\mid\sigma\models \neg p\}\\
    =&\text{\{definition of negation\}}\\
    &\{\sigma\in\Sigma\mid\sigma\models p\}^c\\
    =&\text{\{meaning of an assertion\}}\\
    &\Sigma-\{\sigma\in\Sigma\mid\sigma\models p\}
\end{align*}
$$
#### ii
$$
\begin{align*}
    &\llbracket p\lor q\rrbracket\\
    =&\text{\{meaning of an assertion\}}\\
    &\{\sigma\mid\sigma\models p\lor q\}\\
    =&\text{\{definition of disjunction\}}\\
    &\{\sigma\mid(\sigma\models p)\lor (\sigma\models q)\}\\
    =&\text{\{for any $\tau$ in the set above, $(\tau\models p)\lor(\tau\models q)$\}}\\
    &\{\sigma\mid\sigma\models p\}\cup\{\sigma\mid\sigma\models q\}\\
    =&\text{\{meaning of an assertion\}}\\
    &\llbracket p\rrbracket\cup\llbracket 
    q\rrbracket
\end{align*}
$$
#### iii
Similar to the above.
#### iv
$$
\begin{align*}
    &p\to q\\
    \implies&\text{\{for any $\tau\models p$, apply $p\to q$\}}\\
    &(\tau\models p)\to(\tau\models q)\\
    \implies&\text{\{definition of implication\}}\\
    &\tau\models p\to q\\
    \implies&\text{\{summarize\}}\\
    &\tau\in\{\sigma\mid\sigma\models p\}\to\tau\in\{\sigma\mid\sigma\models p\to q\}\\
    \implies&\text{\{definition of subset\}}\\
    &\{\sigma\mid\sigma\models p\}\subseteq\{\sigma\mid\sigma\models p\to q\}\\
    \implies&\text{\{meaning of an assertion\}}\\
    &\llbracket p \rrbracket\subseteq \llbracket q \rrbracket
\end{align*}
$$
#### v
Similar to the above.
### 2.8
#### i
Since both $\sigma$ and $\tau$ agree on all variables in the expression $s$, the evaluated result must be the same.
#### ii
Since both $\sigma$ and $\tau$ agree on all free variables of $p$, the truth value of $p$ under $\sigma$ and $\tau$ must be the same. Therefore, $\sigma \models p$ if and only if $\tau \models p$.
