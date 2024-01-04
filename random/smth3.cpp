#include <iostream>
#include <chrono>

int main() {
    auto start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < 1000000; i++) {
        std::cout << i << " func \n";
    }
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> time_taken = end - start;
    std::cout << "Time taken: " << time_taken.count() << std::endl;
    return 0;
}