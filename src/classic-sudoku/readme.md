Classic Sudoku
--------------

No instructions are provided in the problem statement for challenge 143, other
than to SSH into a server. Once connected, the following prompt is displayed:

> The sudoku challenge
>
> ```text
> +---+---+---+---+---+---+---+---+---+
> |   | 7 | 6 |   |   | 2 |   | 9 | 4 |
> +---+---+---+---+---+---+---+---+---+
> | 8 |   | 2 |   | 9 | 4 |   | 7 | 6 |
> +---+---+---+---+---+---+---+---+---+
> | 3 | 9 |   | 5 |   |   |   |   | 2 |
> +---+---+---+---+---+---+---+---+---+
> | 7 |   | 8 | 1 |   |   | 9 | 4 | 5 |
> +---+---+---+---+---+---+---+---+---+
> |   | 2 |   |   |   |   | 7 |   | 8 |
> +---+---+---+---+---+---+---+---+---+
> | 9 |   | 5 |   | 6 |   | 1 |   | 3 |
> +---+---+---+---+---+---+---+---+---+
> | 6 | 8 | 1 |   |   | 9 | 4 |   |   |
> +---+---+---+---+---+---+---+---+---+
> |   | 3 | 9 | 4 | 5 |   | 6 | 8 | 1 |
> +---+---+---+---+---+---+---+---+---+
> |   | 5 | 7 | 6 |   |   |   |   | 9 |
> +---+---+---+---+---+---+---+---+---+
> ```
>
> Solve this sudoku in less than 10 seconds and you'll get the flag.
>
> Submit all the sudoku table using this format from left to right 1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1...

A new Sudoku grid is generated upon each connection. After responding back with
a valid serialized Sudoku grid, the flag is revealed.
