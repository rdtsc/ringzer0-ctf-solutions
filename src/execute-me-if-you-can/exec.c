#include <assert.h>
#include <stddef.h>
#include <stdio.h>
#include <string.h>

int main(const int argc, const char* const argv[])
{
  assert(argc >= 2);

  size_t byteCount = 0;

  for(const char* c = argv[1]; *c; ++c) if(*c == '\\') ++byteCount;

  assert(byteCount && (byteCount < 256));

  unsigned char buffer[byteCount];
  memset(buffer, 0, byteCount);

  {
    size_t index = 0;
    int bytesRead = 0;
    const char* cursor = argv[1];

    while(sscanf(cursor, "\\x%hhx%n", &buffer[index++], &bytesRead))
    {
      cursor += bytesRead;
    }
  }

  typedef void(* shellcode)();

  ((shellcode)buffer)();
}
