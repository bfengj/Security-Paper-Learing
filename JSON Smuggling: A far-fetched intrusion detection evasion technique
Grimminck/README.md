# JSON Smuggling: A far-fetched intrusion detection evasion technique



一种JSON走私技术，实际上还是一种隐写技术，因为JSON中可以填入这样无关紧要的“空白字符”

```
   ws = *(
              %x20 /              ; Space
              %x09 /              ; Horizontal tab
              %x0A /              ; Line feed or New line
              %x0D )              ; Carriage return
```

利用隐写术进行编码就可以传递信息。

工具：[xscorp/jsmug: A PoC code for JSON Smuggling technique to smuggle arbitrary files through JSON](https://github.com/xscorp/jsmug)





```shell
./jsmug encode 1.txt 1.json 20
[+] Bytes read from input file: 4
[+] Insignificant Bytes written: 32
[+] JSON encoded bytes written: 62

cat 1.json
{"data":[
"json":"smuggled"}]}%


xxd 1.json
00000000: 7b22 6461 7461 223a 5b09 0909 0909 2009  {"data":[..... .
00000010: 0a09 0909 0909 2009 0d09 0909 097b 0920  ...... ......{.
00000020: 0920 0909 0909 0909 0d0d 226a 736f 6e22  . ........"json"
00000030: 3a22 736d 7567 676c 6564 227d 5d7d       :"smuggled"}]}


./jsmug decode 1.json 2.txt
[+] Bytes read from Input file: 62
[+] Raw bytes written: 4


 cat 2.txt
123
```

