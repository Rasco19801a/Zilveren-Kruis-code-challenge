// BSN validation using 11-proef (modulus 11). Accepts 8 or 9 digits; leading zeros allowed.
export function isValidBsn(raw: string): boolean {
	if (!raw) return false;
	const digits = raw.replace(/\D+/g, '');
	if (digits.length !== 8 && digits.length !== 9) return false;
	// Pad to 9 digits for calculation
	const bsn = digits.padStart(9, '0');
	const nums = bsn.split('').map(d => parseInt(d, 10));
	// 11-test: sum(i=1..8) (digit[i] * (10 - i)) + (-1 * digit[9]) should be divisible by 11
	let sum = 0;
	for (let i = 0; i < 8; i++) {
		sum += nums[i] * (9 - i);
	}
	sum -= nums[8];
	return sum % 11 === 0 && !(bsn === '000000000');
}
