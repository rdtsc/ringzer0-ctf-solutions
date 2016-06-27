XOR Me if You Can
-----------------

> You have 3 seconds decrypt this message using the xoring key hidden into the
> xor key string. The length of the key is 10 characters. The message is encoded
> using base 64.
>
> Send the answer back using `https://ringzer0team.com/challenges/16/[your_string]`.

The key and message are non-static and refresh with each request. Below is an
example of the payload's format.

```text
----- BEGIN XOR KEY -----
DfR5bfgdEu5A9J8LoEcSLQmFNTYx0pw
----- END XOR KEY -----


----- BEGIN CRYPTED MESSAGE -----
O1d9dx5WPRc4NBZJL2s+BBwWAyUxTzxudAkPFGYVFUw=
----- END CRYPTED MESSAGE -----
```
