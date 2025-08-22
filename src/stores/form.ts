import { defineStore } from 'pinia';

export type ApplicationReason =
	| 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
	| 'Overstappen per 1-1-2023 naar Zilveren Kruis';
export type Gender = 'Man' | 'Vrouw' | '';
export type BaseInsurance =
	| 'Basis Budget'
	| 'Basis Zeker'
	| 'Basis Exclusief'
	| '';
export type PaymentTerm = 'per maand' | 'per kwartaal' | 'per jaar';
export type Deductible = 385 | 885 | null;
export type Supplemental = 0 | 1 | 2 | 3 | 4; // 0 = geen
export type Dental = 0 | 1 | 2 | 3; // 0 = geen

export interface PersonalDetails {
	firstName: string;
	infix: string;
	lastName: string;
	gender: Gender;
	birthDate: string; // yyyy-mm-dd
	bsn: string;
}

export interface InsuranceSelection {
	base: BaseInsurance;
	paymentTerm: PaymentTerm;
	deductible: Deductible; // only allowed when base chosen
	supplemental: Supplemental;
	dental: Dental;
}

export interface RootState {
	reason: ApplicationReason | '';
	personal: PersonalDetails;
	insurance: InsuranceSelection;
}

// Simple price tables per year
const BASE_PRICES: Record<Exclude<BaseInsurance, ''>, number> = {
	'Basis Budget': 1393.26,
	'Basis Zeker': 1483.54,
	'Basis Exclusief': 1624.62
};

const SUPPLEMENTAL_PRICES: Record<Exclude<Supplemental, 0>, number> = {
	1: 21.38,
	2: 85.06,
	3: 198.63,
	4: 359.73
};

const DENTAL_PRICES: Record<Exclude<Dental, 0>, number> = {
	1: 80.28,
	2: 221.65,
	3: 449.36
};

export const useFormStore = defineStore('form', {
	state: (): RootState => ({
		reason: '',
		personal: {
			firstName: '',
			infix: '',
			lastName: '',
			gender: '',
			birthDate: '',
			bsn: ''
		},
		insurance: {
			base: '',
			paymentTerm: 'per jaar',
			deductible: null,
			supplemental: 0,
			dental: 0
		}
	}),
	getters: {
		isDeductibleAllowed: (state): boolean => state.insurance.base !== '',
		basePricePerYear: (state): number => {
			const base = state.insurance.base;
			return base ? BASE_PRICES[base as Exclude<BaseInsurance, ''>] : 0;
		},
		supplementalPricePerYear: (state): number => {
			const sel = state.insurance.supplemental;
			return sel
				? SUPPLEMENTAL_PRICES[sel as Exclude<Supplemental, 0>]
				: 0;
		},
		dentalPricePerYear: (state): number => {
			const sel = state.insurance.dental;
			return sel ? DENTAL_PRICES[sel as Exclude<Dental, 0>] : 0;
		},
		totalPerYear(): number {
			return (
				this.basePricePerYear +
				this.supplementalPricePerYear +
				this.dentalPricePerYear
			);
		},
		totalByPaymentTerm(): { term: PaymentTerm; amount: number } {
			const term = this.insurance.paymentTerm;
			const yearly = this.totalPerYear;
			if (term === 'per maand')
				return { term, amount: +(yearly / 12).toFixed(2) };
			if (term === 'per kwartaal')
				return { term, amount: +(yearly / 4).toFixed(2) };
			return { term, amount: +yearly.toFixed(2) };
		}
	},
	actions: {
		setReason(reason: RootState['reason']) {
			this.reason = reason;
		},
		setPersonal<K extends keyof PersonalDetails>(
			key: K,
			value: PersonalDetails[K]
		) {
			this.personal[key] = value as never;
		},
		setInsurance<K extends keyof InsuranceSelection>(
			key: K,
			value: InsuranceSelection[K]
		) {
			if (key === 'deductible' && !this.isDeductibleAllowed) {
				this.insurance.deductible = null;
				return;
			}
			this.insurance[key] = value as never;
		}
	}
});
