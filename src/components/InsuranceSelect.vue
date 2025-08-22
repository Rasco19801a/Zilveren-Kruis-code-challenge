<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useFormStore, type BaseInsurance } from '../stores/form';

const store = useFormStore();
const { insurance } = storeToRefs(store);

const canChooseDeductible = computed(() => store.isDeductibleAllowed);

const baseOptions: BaseInsurance[] = [
	'Basis Budget',
	'Basis Zeker',
	'Basis Exclusief'
];
</script>

<template>
	<div>
		<div class="form-group">
			<h3>Basisverzekering</h3>
			<p>
				In Nederland is de basisverzekering verplicht. Iedereen wordt
				voor de basisverzekering geaccepteerd. De overheid bepaalt welke
				zorg hierin zit en dit is dus bij elke verzekeraar hetzelfde.
			</p>
			<div class="input__group">
				<label class="input__title">Kies uw basisverzekering</label>
				<div class="form-row">
					<div
						class="radio__tile"
						v-for="opt in baseOptions"
						:key="opt"
					>
						<div class="radio custom-radio radio__option">
							<input
								:value="opt"
								type="radio"
								name="radio-insurance"
								:id="`radio-insurance-${opt}`"
								class="radio__input custom-control-input"
								v-model="insurance.base"
							/>
							<label
								:for="`radio-insurance-${opt}`"
								class="radio__label custom-control-label"
							>
								<p class="radio__description">{{ opt }}</p>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="form-group">
			<div class="form-input my-4">
				<div class="input__group">
					<label class="input__title">Kies je betaaltermijn</label>
					<select
						class="form-control"
						v-model="insurance.paymentTerm"
					>
						<option value="per maand">per maand</option>
						<option value="per kwartaal">per kwartaal</option>
						<option value="per jaar">per jaar</option>
					</select>
				</div>
			</div>
		</div>

		<div class="form-group">
			<h3>Eigen risico</h3>
			<div class="form-input my-4">
				<div class="input__group">
					<label class="input__title"
						>Kies de hoogste van het eigen risico</label
					>
					<select
						class="form-control"
						v-model.number="insurance.deductible"
						:disabled="!canChooseDeductible"
					>
						<option :value="385">
							€ 385 - verplicht eigen risico
						</option>
						<option :value="885">
							€ 885 - korting van € 22 per jaar
						</option>
					</select>
				</div>
			</div>
		</div>

		<div class="form-group">
			<h3>Aanvullende verzekering</h3>
			<p>
				Onze aanvullende verzekeringen kennen ruim 100 verschillende
				vergoedingen. De hoogte van de vergoeding verschilt per pakket.
			</p>
			<div class="form-input my-4">
				<div class="input__group">
					<label class="input__title"
						>Kies uw aanvullende verzekering</label
					>
					<select
						class="form-control"
						v-model.number="insurance.supplemental"
					>
						<option :value="0">
							Geen aanvullende verzekering geselecteerd
						</option>
						<option :value="1">Aanvullend 1</option>
						<option :value="2">Aanvullend 2</option>
						<option :value="3">Aanvullend 3</option>
						<option :value="4">Aanvullend 4</option>
					</select>
				</div>
			</div>
		</div>

		<div class="form-group">
			<div class="form-input my-4">
				<div class="input__group">
					<label class="input__title"
						>Kies uw tandartsverzekering</label
					>
					<select
						class="form-control"
						v-model.number="insurance.dental"
					>
						<option :value="0">
							Geen tandartsverzekering geselecteerd
						</option>
						<option :value="1">Tand 1</option>
						<option :value="2">Tand 2</option>
						<option :value="3">Tand 3</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</template>
