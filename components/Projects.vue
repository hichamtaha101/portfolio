<template>
  <div
    id="portfolio"
    class="body-portfolio profile-section"
  >

	<!-- Current project modal -->
    <v-dialog v-model="modal" >
      <div>
        <v-carousel
          :show-arrows="true"
          hide-delimiters
          height="100%"
        >
          <v-carousel-item
            v-for="(slide, i) in projects[activeProject].slides"
            :key="i"
          >
            <div class="carousel__item">
              <div class="carousel__item__slider">
                <img :src="imglink(slide.image)">
              </div>
              <div v-html="slide.html" class="carousel__item__content" />
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-dialog>

    <!-- Display current project modal here. -->
    <div class="wrapper">
      <div
        class="body-title"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Projects</div>
        <div class="profile-section__title--sm">Solutions i've developed over the years.</div>
	</div>

		<div class="project-wrap">

			<div
				v-for="(value, index) in projects"
				:key="index"
				:id="value.id"
				class="project-content"
				@click="modal = !modal; activeProject = index"
			>
				<div class="project-title">
					<div>{{ value.title }}</div>
					<div>{{ value.description }}</div>
				</div>
			</div>
		</div>
      </div>
    </div>
</template>
<script>

export default {
	data() {
		return {
			modal: false,
			view: false,
			activeProject: 0,
			projects: [
				{
					id: 'chatso',
					title: 'Chasto',
					description: 'Customer support chat and analytics platform.',
					slides: [{
						image: 'chatso/chatso-login.png',
						html: 'Chatso is a chat platform built as an alternative to zendesk providing analytic tools catered to Advesa Digital\'s e-commerce solutions. The platform provides agents real-time readily available data to help understand their customers and their needs.'
					},{
						image: 'chatso/chatso-dashboard.png',
						html: 'Core technology used to develop Chatso include React, Node, Socket.IO, Mongo, and AWS.'
					},{
						image: 'chatso/chatso-live-chat.png',
						html: 'With a robust, flexible, and secure socket.io architecture, agents are able to handle one to many clients from variable ranges of store access, pull up product information about the client or store at hand, and perform actions like coupon generation, file uploads, and chat transferring.'
					},{
						image: 'chatso/chatso-analytics.png',
						html: 'Chatso takes advantage of in-house analytics and Google analytics to provide a combination of valuable chat and website data on a per store basis.'
					},{
						image: 'chatso/chatso-agents.png',
						html: 'Administration features are implemented allowing store and organization owners access to delegating their agents\' workloads.'
					}]
				},{
					id: 'bittreo',
					title: 'Bittreo',
					description: 'Private cryptocurrency platform for Vancouver based company, Bittreo.',
					slides: [{
						image: 'bittreo/login.jpg',
						html: 'Bittreo is a Vancouver based over the counter buy & sell cryptocurrency company. This platform is a private trading system used solely by the owners, managers, and tellers of Bittreo for their customer transactions. Main technology incorporated include Node.js, MongoDB, Vue.js and AWS.',
					}, {
						image: 'bittreo/2fa.jpg',
						html: 'The authentication system in bittreo takes advantage of 2 factor technology via the <a href="https://www.npmjs.com/package/speakeasy" target="_blank">speakeasy</a> API.',
					}, {
						image: 'bittreo/buy.jpg',
						html: 'Core functionality of the app utilizes the <a href="https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md" target="_blank">Binance API</a> to perform market trades based on company set variables. We can also see a display of the user\'s exchange balance at the bottom of the screenshot.',
					}, {
						image: 'bittreo/quote.jpg',
						html: 'Clients are able to get quotes prior to market trades to help them understand their transaction. Additionally, a withdrawal history is displayed at the bottom of this section for cryptocurrency leaving the teller\'s binance account.',
					}, {
						image: 'bittreo/withdrawal.jpg',
						html: 'Lastly, we can make withdrawals via the Binance API when receiving / sending cryptocurrency. A deposit history is displayed at the bottom of this section for cryptocurrency coming into the teller\'s binance account.',
					}, {
						image: 'bittreo/bi.jpg',
						html: 'A BI reporting dashboard was built in order to view and download different types of reports. Some reports include sales, fee, discount, buys, and sells reports. This section heavily involves the use of <a href="https://vuetifyjs.com/en/components/data-tables" target="_blank" tabindex="0">Vuetify Data Tables</a>.',
					}, {
						image: 'bittreo/settings.jpg',
						html: 'Simply a section for setting company variables, and managing user accounts ( administration view only ).',
					}]
				},{
					id: 'client_portal',
					title: 'Client Portal',
					description: 'Analytics platform to measure digital marketing for dealership websites.',
					slides: [{
						image: 'client-portal/summary.jpg',
						title: 'Summary',
						html: "A portal providing clients an interactive, user-friendly, powerful analytics tool for measuring their online performance with Convertus Digital. The aim of the platform is to help faciliate and encourage the client's decision making abilities in the oinline automotive industry. This powerful tool utilizes the wordpress framework incorporating modern libraries such as jQuery, AmCharts, Bootstrap and many more.",
					}, {
						image: 'client-portal/bootstrap-tour.jpg',
						title: 'Performance Snapshot',
						html: 'This segment of the Client Portal uses the Google Analytics API service to call organic statistics essential to clients who have a dealership website.',
					}, {
						image: 'client-portal/organic-search.jpg',
						title: 'Organic Search Solution',
						html: 'The Organic Search page pulls data from the Google Agency and Google Analytics API displaying keyword rankings over a specified period of time and date segment.',
					}, {
						image: 'client-portal/paid-search.jpg',
						title: 'Paid Search Solution',
						html: "The Paid Search page makes calls from Google Adwords' campaign reporting API grabbing data in regards to the client's campaign(s). As shown in the illustration, clients can see their campaign leads, costs, impressions, clicks, average cost per click, and cost per acquisition based on the date range queried.",
					}, {
						image: 'client-portal/leads.jpg',
						title: 'Leads Report',
						html: "The Leads page pulls data from the client's website's database and displays information relative to where conversions and popular form submissions came from.",
					}, {
						image: 'client-portal/inventory.jpg',
						title: 'Inventory Report',
						html: " The Inventory page pulls data from Convertus' VMS ( Dealertrend ) API service, to present Convertus Digital clients with their top selling vehicles and stocks history.",
					}, {
						image: 'client-portal/company-performance.jpg',
						title: 'Company Performance',
						html: 'The Client Portal provides administrative users insight on a generalized summary of the Company\'s Performance. Graphing and tabular illustrations represent data pulled from the sales proposal platform NiftyQuoter, ticket managing software Freshdesk, and clientele database queries.',
					}, {
						image: 'client-portal/base-design.jpg',
						title: 'Website Customization',
						html: 'The Client Portal allows newer clients a variety of website mockups to choose from when applying for a website with Convertus Digital.',
					}]
				},{
					id: 'showroom_api',
					title: 'Vehicle Reference System',
					description: 'An in-house API service for dealership websites to access up-to-date showroom data.',
					slides: [{
						image: 'convertus-vrs/intro.png',
						title: 'Description',
						html: 'A web service providing vehicle reference system data. This ranges from any OEM make, model, trim or style data. Privately developed as an in-house API  for Convertus Digital. Technology used for development include Node, Express, Vue, SQL, and AWS for deployment.',
					}, {
						image: 'convertus-vrs/styles.png',
						title: 'Documentation',
						html: 'In-house documentation allowing Convertus developers to build queries for VRS data when developing features for their web solutions.',
					}]
				},{
					id: 'migration_script',
					title: 'Migration Script',
					description: 'Migration tool for wordpress websites.',
					slides: [{
						image: 'migration-script/midtown-before.jpg',
						title: 'Introduction',
						html: 'A script used to migrate dealer.com websites into the modern convertus platform, Achilles.',
					}, {
						image: 'migration-script/midtown-after.jpg',
						title: 'Technology',
						html: 'The picture above is post migration of Mid-Town Ford. Technology used includes Node, SQL, AWS, and the Wordpress CLI.',
					}, {
						image: 'migration-script/lexusonthepark-before.jpg',
						title: 'Purpose',
						html: "The script was developed in tandom with the development team of the new platform, and dealer.com's web provider (Autotrader). The script parses website data from an xml feed provided via a dealer.com FTP, maps it appropriately to the new platform's wordpress widget templates, theme settings, and other core data structures, then uses the WP-CLI commands to perform the migration.",
					}, {
						image: 'migration-script/lexusonthepark-after.jpg',
						title: 'Summary',
						html: 'The script has successfully migrated over 1400 websites. This picture above is post migration of Lexus On The Park.',
					}]
				},{
					id: 'achilles_portal',
					title: 'Achilles Portal',
					description: 'Online portal to monitor, query, and update AutoTrader\'s websites and AWS infrastructure.',
					slides: [{
						image: 'achilles-portal/ap-login.jpg',
						html: 'The Achilles Portal is an automation and monitoring tool in regards to the 1000+ websites developed by Convertus Digital for Autotrader. Main technology incorporated are Node.js, MongoDB, and Vue.js.',
					}, {
						image: 'achilles-portal/ap-networks.jpg',
						html: 'This section of the portal makes use of the <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/" target="_blank">AWS SDK</a> in order to grab and display real-time network states. Each network references an ALB ( load balancer ) and their instance status, codebase version number, and other useful tags.',
					}, {
						image: 'achilles-portal/ap-mass-query.jpg',
						html: 'This section uses network endpoints to query option fields stored on multiple sites on a per network basis. Technology involved here includes PHP, Node.js, Axios, Wordpress, and MongoDB.',
					}, {
						image: 'achilles-portal/ap-mass-updates.jpg',
						html: 'Similarily to the previous slide, we\'re able to mass update multiple sites on a per network basis. This includes updating option fields, enabling disabling plugins, creating pages, changing site themes, etcetera.',
					}, {
						image: 'achilles-portal/ap-migration.jpg',
						html: 'The Achilles Portal provides the ability to migrate entire website(s) between networks to cater business needs. Technology involved here includes PHP, Wordpress, and SQL.',
					}, {
						image: 'achilles-portal/ap-ssl-cloud-front.jpg',
						html: 'This section of the portal helps request and manage SSL Certificates on Convertus\' AWS infrastructure for all websites on all networks. Customer support uses this tab to communicate with clients ( or their IT team ) what records need to point to what value in their domain provider prior to a site launch. This section heavily involves the <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/" target="_blank">AWS SDK</a> and mongoose library for MongoDB.',
					}, {
						image: 'achilles-portal/ap-selenium.jpg',
						html: 'QA at Convertus run a lot of Selenium based tests on our jenkins server. The output of these tests are then copied over manually to a Jira task and then assigned to a developer for fixes. This section of the portal automates that procedure via the restful <a href="https://www.npmjs.com/package/jenkins" target="_blank">jenkins</a> and <a href="https://developer.atlassian.com/server/jira/platform/rest-apis/" target="_blank">jira</a> API.',
					}, {
						image: 'achilles-portal/ap-users.jpg',
						html: 'The portal utilizes <a href="http://www.passportjs.org/" target="_blank">passport.js</a> for its user and session control. The front-end allows users with an administrative role to create, read, update and delete users from the portal.',
					}]
				}
			],
		};
	},
	methods: {
		imglink( image ) {
			return require(`../assets/images/${image}`);
		}
	}
};
</script>

<style lang="scss">

.carousel {
	&__item {
		&__slider {
			overflow-y: auto;
			max-height: 550px;
			img {
				display: block;
				border-radius: 3px;
				border: 4px solid #fff;
				width: 100%;
			}
		}
		&__content {
			border-top: 1px solid #e9e9e9;
			background: white;
			padding: 15px;
			color: black;
			a {
				color: #1976d2 !important;
			}
		}
	}
}

.body-portfolio {
	text-align: center;

	.project-wrap {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;

		@media screen and (max-width: 992px) {
			grid-template-columns: repeat(2, 1fr)
		}
		@media screen and ( max-width: 768px ) {
			grid-template-columns: 1fr;
		}
	}
	.project-content {
		&:hover { cursor: pointer; }
		height: 275px;
		background: #fbfbfb;
		font-size: 14px;
		padding: 15px;
		box-shadow: 1px 1px 1px 1px #f1f1f1;
	}
	.project-title {
		text-align: center;
		display: inline-block;
		@include vertical-align();
		div:first-child{
			font-size: 18px;
		}
	}
}

#migration_script {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/migration-script/thumbnail.png");
		background-size: cover;
		background-position: center bottom;
	}
}

#chatso {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/chatso/chatso-login.png");
		background-size: cover;
		background-position: center bottom;
	}
}

#showroom_api {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/convertus-vrs/thumbnail.png");
		background-size: cover;
		background-position: center bottom;
	}
}

#client_portal {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/client-portal/thumbnail.png");
		background-size: cover;
		background-position: center center;
	}
}

#achilles_portal {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/achilles-portal/thumbnail.jpg");
		background-size: cover;
		background-position: center center;
	}
}

#bittreo {
	transition: all 0.2s;

	&:hover {
		background: linear-gradient(
				rgba(255, 255, 255, 0.9),
				rgba(255, 255, 255, 0.9)
			),
			url("~/assets/images/bittreo/thumbnail.jpg");
		background-size: cover;
		background-position: center center;
	}
}
</style>