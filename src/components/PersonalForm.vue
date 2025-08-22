<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFormStore } from '../stores/form';
import { isValidBsn } from '../utils/bsn';

const store = useFormStore();
const { personal } = storeToRefs(store);

const bsnTouched = ref(false);
const bsnValid = computed(() => isValidBsn(personal.value.bsn));
const showBsnError = computed(() => bsnTouched.value && !bsnValid.value);

function onBsnBlur() {
	bsnTouched.value = true;
}
</script>

<template>
	<div class="form-group">
		<h3>Persoonlijke gegevens</h3>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Naam</label>
				<input
					class="input__field form-control"
					type="text"
					v-model="personal.firstName"
				/>
			</div>
		</div>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Tussenvoegsels</label>
				<input
					class="input__field form-control"
					type="text"
					v-model="personal.infix"
				/>
			</div>
		</div>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Achternaam</label>
				<input
					class="input__field form-control"
					type="text"
					v-model="personal.lastName"
				/>
			</div>
		</div>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Geslacht</label>
				<div class="form-row">
					<div class="radio custom-radio radio__option">
						<input
							id="man"
							class="radio__input custom-control-input"
							type="radio"
							name="geslacht"
							value="Man"
							v-model="personal.gender"
						/>
						<label
							class="radio__label custom-control-label"
							for="man"
							>Man</label
						>
					</div>
					<div class="radio custom-radio radio__option">
						<input
							id="vrouw"
							class="radio__input custom-control-input"
							type="radio"
							name="geslacht"
							value="Vrouw"
							v-model="personal.gender"
						/>
						<label
							class="radio__label custom-control-label"
							for="vrouw"
							>Vrouw</label
						>
					</div>
				</div>
			</div>
		</div>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Geboortedatum</label>
				<input
					class="input__field form-control"
					type="date"
					v-model="personal.birthDate"
				/>
			</div>
		</div>

		<div class="form-input my-4">
			<div class="input__group">
				<label class="input__title">Burgerservicenummer</label>
				<input
					class="input__field form-control"
					:class="{ 'is-invalid': showBsnError }"
					type="text"
					v-model="personal.bsn"
					@blur="onBsnBlur"
				/>
			</div>
			<div
				class="input__feedback invalid-feedback mt-1"
				aria-live="polite"
				v-if="showBsnError"
			>
				<span
					>Helaas is het ingevoerde burgerservicenummer niet geldig.
					Probeer het opnieuw.</span
				>
			</div>
		</div>
	</div>
</template>
