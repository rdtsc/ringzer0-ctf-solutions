Execute Me if You Can Again
---------------------------

> You have 1 second to execute this code and get the output.
>
> Send the answer back using `https://ringzer0team.com/challenges/125/[string]`.

The shellcode is non-static and refreshes with each request. Below is an
example of the payload's format.

```text
----- BEGIN SHELLCODE -----
\xeb\x4d\x5e\x66\x83\xec\x0c\x48\x89\xe0\x48\x31\xc9\x68\x9e\x5f\x2a\x7d\x48\x89\xcf\x80\xc1\x0c\x40\x8a\x3e\x40\xf6\xd7\x40\x88\x38\x48\xff\xc6\x68\x93\x2b\x04\x92\x48\xff\xc0\xe2\xea\x2c\x0c\x48\x89\xc6\x68\xa2\xf5\xc6\x16\x48\x31\xc0\x48\x89\xc7\x40\xb7\x01\x04\x01\x48\x89\xc2\x80\xc2\x0b\x0f\x05\x48\x31\xc0\x04\x3c\x0f\x05\xe8\xae\xff\xff\xff\xbd\xaa\xbe\xab\xb5\xb9\xce\xa9\xce\xcf\xae\xcb\xbf\x79\x11\xfb\xba\x6b\x0f\xe9\x1f\xbc\x7f\x36\x2b\x44\x5e\x68\x1d\x1e\x8f\x71\x5b\x52\x41\x4e\x44\x53\x54\x52\x32\x5d
----- END SHELLCODE -----
```
