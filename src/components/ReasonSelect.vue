<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFormStore, type ApplicationReason } from '../stores/form';

const store = useFormStore();
const { reason } = storeToRefs(store);

const options: ApplicationReason[] = [
	'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
	'Overstappen per 1-1-2023 naar Zilveren Kruis'
];
</script>

<template>
	<div class="form-group">
		<h3>Reden van aanmelding</h3>
		<div class="form-input my-4">
			<label
				id="aanmeldreden-label"
				class="input__title"
				>Wat is de reden van uw aanvraag?</label
			>
			<div class="input__group">
				<select
					class="form-control"
					aria-labelledby="aanmeldreden-label"
					v-model="reason"
				>
					<option
						disabled
						value=""
					>
						Er is nog niets geselecteerd
					</option>
					<option
						v-for="opt in options"
						:key="opt"
						:value="opt"
					>
						{{ opt }}
					</option>
				</select>
			</div>
		</div>
	</div>
</template>
