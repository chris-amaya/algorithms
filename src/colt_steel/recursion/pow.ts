export function pow(x: number, y: number): number {
    if (y === 1) return x;
    return x * pow(x, y - 1);
}