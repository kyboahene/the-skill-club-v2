export function getYearsBackDated(backDateCount: number): number[] {
    const currentYear: number = new Date().getFullYear();
    let backDateYear: number = currentYear - backDateCount;
    const years: number[] = [];
    while (backDateYear <= currentYear) {
        years.push(backDateYear);
        backDateYear++;
    }
    return years;
}