#include <stdio.h>
#include <time.h>

int main() {
    clock_t start, end;
    start = clock();
    for (int i = 0; i < 1000000; i++) {
        printf("%d func \n", i);
    }
    end = clock() - start;
    double time_taken = ((double)end) / CLOCKS_PER_SEC;
    printf("Time taken: %f\n", time_taken);
    return 0;
}