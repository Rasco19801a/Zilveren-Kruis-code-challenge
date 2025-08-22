<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFormStore } from '../stores/form';

const store = useFormStore();
const { insurance, personal } = storeToRefs(store);
</script>

<template>
	<div>
		<h2 class="mt-5">Controleren</h2>
		<div class="form-group">
			<h3>Gekozen pakket</h3>
			<ul>
				<li>
					Basisverzekering: {{ insurance.base || 'Niet gekozen' }}
				</li>
				<li>
					Eigen risico: {{ insurance.deductible ?? 'Niet gekozen' }}
				</li>
				<li>
					Aanvullend:
					{{
						insurance.supplemental === 0
							? 'Geen'
							: `Aanvullend ${insurance.supplemental}`
					}}
				</li>
				<li>
					Tand:
					{{
						insurance.dental === 0
							? 'Geen'
							: `Tand ${insurance.dental}`
					}}
				</li>
			</ul>
		</div>
		<div class="form-group">
			<h3>Totaalpremie</h3>
			<p>Betaaltermijn: {{ store.totalByPaymentTerm.term }}</p>
			<p>Totaal: € {{ store.totalByPaymentTerm.amount.toFixed(2) }}</p>
		</div>
		<div class="form-group">
			<h3>Adres en contactgegevens</h3>
			<p>
				{{ personal.firstName }}
				<template v-if="personal.infix">{{
					' ' + personal.infix
				}}</template>
				{{ ' ' + personal.lastName }}
			</p>
			<p>Geslacht: {{ personal.gender || 'Onbekend' }}</p>
			<p>Geboortedatum: {{ personal.birthDate || 'Onbekend' }}</p>
			<p>BSN: {{ personal.bsn || 'Niet ingevuld' }}</p>
		</div>
	</div>
</template>
