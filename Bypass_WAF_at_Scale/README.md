# Modern WAF Bypass Techniques on Large Attack Surfaces

## 请求大小的限制

大部分的WAF因为性能问题，无法处理较大的请求正文（POST/PUT/PATCH ），导致了可以在exp前填充大量的无关数据，来绕过waf最大的处理size，只处理前面这些size的部分，从而绕过了waf。



## IP池

提到了很多的工具

https://github.com/PortSwigger/ip-rotate

https://github.com/ustayready/fireprox

https://github.com/fyoorer/ShadowClone

## 用WAF绕过WAF

cloudflare的waf相当于一个反代，如果TLS设置的证书设置为了Cloudflare为所有客户提供共享证书，攻击者可以自己在cloudflare上设置一个domain，然后设置dns为目标服务器的源ip，然后将waf的保护全关后攻击即可。

或者是ip的白名单，可能是waf提供商的ip添加白名单，因此可以同样利用waf绕过waf。关键是需要知道目标的源IP。

以及用H2C走私来绕过。