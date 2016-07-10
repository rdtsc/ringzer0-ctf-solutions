```text
----- BEGIN SHELLCODE -----
\xeb\x4d\x5e\x66\x83\xec\x0c\x48\x89\xe0\x48\x31\xc9
\x68\x9e\x5f\x2a\x7d\x48\x89\xcf\x80\xc1\x0c\x40\x8a
\x3e\x40\xf6\xd7\x40\x88\x38\x48\xff\xc6\x68\x93\x2b
\x04\x92\x48\xff\xc0\xe2\xea\x2c\x0c\x48\x89\xc6\x68
\xa2\xf5\xc6\x16\x48\x31\xc0\x48\x89\xc7\x40\xb7\x01
\x04\x01\x48\x89\xc2\x80\xc2\x0b\x0f\x05\x48\x31\xc0
\x04\x3c\x0f\x05\xe8\xae\xff\xff\xff\xbd\xaa\xbe\xab
\xb5\xb9\xce\xa9\xce\xcf\xae\xcb\xbf\x79\x11\xfb\xba
\x6b\x0f\xe9\x1f\xbc\x7f\x36\x2b\x44\x5e\x68\x1d\x1e
\x8f\x71\x5b\x52\x41\x4e\x44\x53\x54\x52\x32\x5d
----- END SHELLCODE -----
```

```text
$ echo -n -e "\xeb\x4d\x5e\x66\x83\xec\x0c\x48\x89\xe0\x48\x31\xc9\x68\x9e\x5f\x2a\x7d\x48\x89\xcf\x80\xc1\x0c\x40\x8a\x3e\x40\xf6\xd7\x40\x88\x38\x48\xff\xc6\x68\x93\x2b\x04\x92\x48\xff\xc0\xe2\xea\x2c\x0c\x48\x89\xc6\x68\xa2\xf5\xc6\x16\x48\x31\xc0\x48\x89\xc7\x40\xb7\x01\x04\x01\x48\x89\xc2\x80\xc2\x0b\x0f\x05\x48\x31\xc0\x04\x3c\x0f\x05\xe8\xae\xff\xff\xff\xbd\xaa\xbe\xab\xb5\xb9\xce\xa9\xce\xcf\xae\xcb\xbf\x79\x11\xfb\xba\x6b\x0f\xe9\x1f\xbc\x7f\x36\x2b\x44\x5e\x68\x1d\x1e\x8f\x71\x5b\x52\x41\x4e\x44\x53\x54\x52\x32\x5d" | ndisasm -b64 -
```

```text
┌───00000000  EB4D        jmp short 0x4f ; -> 0x52
│ ┌─00000002  5E          pop rsi
│ │ 00000003  6683EC0C    sub sp,byte +0xc
│ │ 00000007  4889E0      mov rax,rsp
│ │ 0000000A  4831C9      xor rcx,rcx
│ │ 0000000D  689E5F2A7D  push qword 0x7d2a5f9e
│ │ 00000012  4889CF      mov rdi,rcx
│ │ 00000015  80C10C      add cl,0xc
│ │ 00000018  408A3E      mov dil,[rsi]
│ │ 0000001B  40F6D7      not dil
│ │ 0000001E  408838      mov [rax],dil
│ │ 00000021  48FFC6      inc rsi
│ │ 00000024  68932B0492  push qword 0xffffffff92042b93
│ │ 00000029  48FFC0      inc rax
│ │ 0000002C  E2EA        loop 0x18
│ │ 0000002E  2C0C        sub al,0xc
│ │ 00000030  4889C6      mov rsi,rax
│ │ 00000033  68A2F5C616  push qword 0x16c6f5a2
│ │ 00000038  4831C0      xor rax,rax
│ │ 0000003B  4889C7      mov rdi,rax
│ │ 0000003E  40B701      mov dil,0x1
│ │ 00000041  0401        add al,0x1
│ │ 00000043  4889C2      mov rdx,rax
│ │ 00000046  80C20B      add dl,0xb
│ │ 00000049  0F05        loadall286
│ │ 0000004B  4831C0      xor rax,rax
│ │ 0000004E  043C        add al,0x3c
│ │ 00000050  0F05        loadall286
└─┴─00000052  E8AEFFFFFF  call qword 0x5 ; -> 0x02
    00000057  BDAABEABB5  mov ebp,0xb5abbeaa
    0000005C  B9CEA9CECF  mov ecx,0xcfcea9ce
    00000061  AE          scasb
    00000062  CB          retf
    00000063  BF7911FBBA  mov edi,0xbafb1179
    00000068  6B0FE9      imul ecx,[rdi],byte -0x17
    0000006B  1F          db 0x1f
    0000006C  BC7F362B44  mov esp,0x442b367f
    00000071  5E          pop rsi
    00000072  681D1E8F71  push qword 0x718f1e1d
    00000077  5B          pop rbx
    00000078  52          push rdx
    00000079  41          rex.b
    0000007A  4E          rex.wrx
    0000007B  4453        push rbx
    0000007D  54          push rsp
    0000007E  52          push rdx
    0000007F  32          db 0x32
    00000080  5D          pop rbp
```
