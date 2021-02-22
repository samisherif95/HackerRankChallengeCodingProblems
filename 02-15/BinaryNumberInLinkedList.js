function getNumber(binary) {
    let total = 0n;
    while (binary !== null) {
        total *= 2n;
        total += BigInt(binary.data);
        binary = binary.next;
    }
    return total;
}