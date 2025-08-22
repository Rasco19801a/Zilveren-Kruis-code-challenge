import { describe, expect, it } from 'vitest';
import { isValidBsn } from '../src/utils/bsn';

describe('isValidBsn', () => {
	it('accepts valid BSNs', () => {
		// Known valid example numbers for 11-proef
		expect(isValidBsn('123456782')).toBe(true);
		expect(isValidBsn('111222333')).toBe(true);
	});

	it('rejects invalid input', () => {
		expect(isValidBsn('')).toBe(false);
		expect(isValidBsn('abc')).toBe(false);
		expect(isValidBsn('000000000')).toBe(false);
		expect(isValidBsn('123456789')).toBe(false);
	});
});
