<script setup lang="ts">
import ReasonSelect from './components/ReasonSelect.vue';
import PersonalForm from './components/PersonalForm.vue';
import InsuranceSelect from './components/InsuranceSelect.vue';
import SummaryView from './components/SummaryView.vue';
</script>

<template>
	<div
		id="app"
		class="main-placeholder"
	>
		<!-- HEADER -->
		<header
			class="nav-main"
			id="nav-main"
			aria-label="navigatie-header"
		>
			<div class="nav-main__skip-links mb-3">
				<a
					href="#navigatie-overslaan"
					class="list__link link--no-underline"
				>
					Navigatie overslaan
				</a>
			</div>
			<div class="nav-main__grid container">
				<!--LOGO-->
				<a
					href="/consumenten"
					class="nav-main__logo"
				>
					<img
						class="nav-main__logo-img"
						src="https://www.zilverenkruis.nl/assets/zilverenkruis/img/logo/logo_zilverenkruis.svg"
						alt="Zilveren Kruis raad en daad logo"
					/>
				</a>
				<nav
					class="nav-main__main-menu"
					role="navigation"
					aria-label="hoofdnavigatie"
				>
					<ul
						class="main-menu__list list list--nostyle"
						id="main-menu__list"
					>
						<li
							class="main-menu__item"
							data-has-section="false"
						>
							<a
								href="/consumenten"
								class="main-menu__title link--no-underline"
								title="Naar de homepage van Zilveren Kruis voor consumenten"
							>
								Home
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="3"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Verzekeringen
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="2"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Vergoedingen
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="2"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Zorg regelen
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="1"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Betalen
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="2"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Gezonder leven
							</a>
						</li>
						<li
							class="main-menu__item"
							data-has-section="true"
							data-section-count="1"
						>
							<a
								href="#"
								class="main-menu__title link--no-underline"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Service &amp; Contact
							</a>
						</li>
						<li
							class="main-menu__item nav-main__mobile"
							data-has-section="false"
						>
							<a
								href="/zakelijk"
								class="main-menu__title link--no-underline nav-main__desktop"
							>
								Zakelijk
							</a>
						</li>
						<li
							class="main-menu__item nav-main__mobile"
							data-has-section="false"
						>
							<a
								href="/zorgaanbieders"
								class="main-menu__title link--no-underline nav-main__desktop"
							>
								Voor zorgaanbieders
							</a>
						</li>
						<li
							class="main-menu__item nav-main__mobile"
							data-has-section="false"
						>
							<a
								href="https://www.zilverenkruis.nl/en/consumenten"
								class="main-menu__title link--no-underline"
							>
								English
							</a>
						</li>
						<li
							class="main-menu__item nav-main__mobile"
							data-has-section="false"
						>
							<a
								href="/overons"
								class="main-menu__title link--no-underline nav-main__mobile"
							>
								Over ons
							</a>
						</li>
						<li
							class="main-menu__item nav-main__mobile"
							data-has-section="false"
						>
							<a
								href="/overons/pers"
								class="main-menu__title link--no-underline nav-main__mobile"
							>
								Pers
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<a
				id="navigatie-overslaan"
				name="navigatie-overslaan"
				tabindex="-1"
			></a>
		</header>

		<!-- CONTENT HERE -->
		<div class="container my-3">
			<div class="row">
				<div class="col-12 col-lg-8">
					<h1>Aanmelden</h1>

					<h2>Gegevens</h2>
					<ReasonSelect />
					<PersonalForm />

					<h2 class="mt-5">Verzekering</h2>
					<InsuranceSelect />

					<SummaryView />
				</div>
			</div>
		</div>

		<!-- FOOTER -->
		<div class="footer-placeholder">
			<footer
				class="footer"
				role="contentinfo"
			>
				<!-- BEGIN NOINDEX -->
				<section class="footer-section footer-section--horizontal">
					<div class="container">
						<div
							class="d-flex justify-content-between align-items-center my-auto"
						>
							<ul
								class="list list--nostyle list--horiz d-flex mb-5 mb-xl-0"
							>
								<li class="list__item mb-0">
									<a
										href="/consumenten/disclaimer"
										class="list__link"
										>disclaimer</a
									>
								</li>
								<li class="list__item mb-0">
									<a
										href="/consumenten/privacy"
										class="list__link"
										>privacy</a
									>
								</li>
								<li class="list__item mb-0">
									<a
										href="/consumenten/veiligheid"
										class="list__link"
										>veiligheid</a
									>
								</li>
								<li class="list__item mb-0">
									<a
										href="/consumenten/cookies"
										class="list__link"
										>cookies</a
									>
								</li>
								<li class="list__item mb-0">
									<a
										href="http://www.wijzeringeldzaken.nl/verzekering/"
										class="list__link"
										target="_blank"
										rel="noopener noreferrer"
										>wijzer in geldzaken</a
									>
								</li>
								<li class="list__item mb-0">
									<a
										href="https://nieuws.zilverenkruis.nl/"
										class="list__link"
										>pers</a
									>
								</li>
								<li class="list__item">
									<span class="surfly-button"></span>
								</li>
							</ul>

							<div
								class="buttons-social buttons-social--embed buttons-social--no-bg-color"
							>
								<ul class="buttons-social__list">
									<li class="buttons-social__listitem">
										<a
											href="https://www.facebook.com/zilverenkruis"
											class="buttons-social__link"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span
												class="screenreader-only"
											></span>
											<svg
												class="icon buttons-social__icon"
												aria-hidden="true"
											>
												<use
													xlink:href="#sprite-facebook"
												></use>
											</svg>
										</a>
									</li>

									<li class="buttons-social__listitem">
										<a
											href="https://twitter.com/zilverenkruis"
											class="buttons-social__link"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span
												class="screenreader-only"
											></span>
											<svg
												class="icon buttons-social__icon"
												aria-hidden="true"
											>
												<use
													xlink:href="#sprite-twitter"
												></use>
											</svg>
										</a>
									</li>

									<li class="buttons-social__listitem">
										<a
											href="https://samen.zilverenkruis.nl/"
											class="buttons-social__link"
										>
											<span
												class="screenreader-only"
											></span>
											<svg
												class="icon buttons-social__icon"
												aria-hidden="true"
											>
												<use
													xlink:href="#sprite-community"
												></use>
											</svg>
										</a>
									</li>

									<li class="buttons-social__listitem">
										<a
											href="https://www.youtube.com/user/zilverenkruisachmea"
											class="buttons-social__link"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span
												class="screenreader-only"
											></span>
											<svg
												class="icon buttons-social__icon"
												aria-hidden="true"
											>
												<use
													xlink:href="#sprite-youtube"
												></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>

							<div
								class="text__branding text-center text-md-right pb-4 pb-md-0"
							>
								<span>Zilveren Kruis is onderdeel van</span>
								<svg
									class="icon footer__label-icon"
									alt="Logo Achmea"
								>
									<use xlink:href="#sprite-achmea"></use>
								</svg>
							</div>
						</div>
					</div>
				</section>
				<!-- END NOINDEX -->
			</footer>
		</div>
	</div>
</template>
