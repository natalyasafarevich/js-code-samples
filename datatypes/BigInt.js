// ===================== Создание =====================
const bigint_num= 12548451184151132156n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // то же самое, что и 10n

// можно использовть и простые числа

1n+3n // 4
5n / 2n // 2 - без дробной части

//!  нельзя смешивать типы
1n + 2  // Error
console.log(5n / 2n)

//!  нельзя применять унарный +