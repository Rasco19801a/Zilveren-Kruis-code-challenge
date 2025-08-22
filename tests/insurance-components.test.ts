import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import InsuranceSelect from '../src/components/InsuranceSelect.vue';

function mountWithPinia() {
	setActivePinia(createPinia());
	return mount(InsuranceSelect);
}

describe('InsuranceSelect', () => {
	it('disables deductible when no base insurance selected', async () => {
		const wrapper = mountWithPinia();
		const select = wrapper.find('select[disabled]');
		expect(select.exists()).toBe(true);
	});

	it('enables deductible after selecting base insurance', async () => {
		const wrapper = mountWithPinia();
		await wrapper.find('input[type="radio"]').setValue();
		await wrapper.vm.$nextTick();
		const disabledSelect = wrapper.find('select[disabled]');
		expect(disabledSelect.exists()).toBe(false);
	});
});
