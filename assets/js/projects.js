module.exports = [
	{
		id: "chatso",
		title: "Chasto",
		timeline: "Nov, 2019 - Mar, 2021",
		description: "Customer support chat and analytics platform.",
		slides: [
			{
				image: "chatso/chatso-login.png",
				html: "Chatso is a chat platform built as an alternative to zendesk providing analytic tools catered to Advesa Digital's e-commerce solutions. The platform provides agents real-time readily available data to help understand their customers and their needs."
			},
			{
				image: "chatso/chatso-dashboard.png",
				html: "Core technology used to develop Chatso include React, Node, Express, Socket.io, Mongo, and AWS. This platform utilizes the React component library <a href=\"https://mui.com/\" target=\"_blank\">Material UI</a>."
			},
			{
				image: "chatso/chatso-live-chat.png",
				html: "With a robust, flexible, and secure socket.io architecture, agents are able to handle one to many clients from variable ranges of store access, pull up product information about the client or store at hand, and perform actions like coupon generation, file uploads, and chat transferring."
			},
			{
				image: "chatso/chatso-analytics.png",
				html: "Chatso takes advantage of in-house analytics and Google analytics to provide a combination of valuable chat and website data on a per store basis."
			},
			{
				image: "chatso/chatso-agents.png",
				html: "Administration features are implemented allowing store and organization owners access to delegating their agents' workloads."
			}
		]
	},
	{
		id: "bittreo",
		title: "Bittreo",
		timeline: "Jan, 2018 - Dec, 2021",
		description: "Private cryptocurrency exchange platform for a Vancouver based company, Bittreo Technologies Inc.",
		slides: [
			{
				image: "bittreo/new/login.png",
				html: "Bittreo is a Vancouver based over-the-counter buy & sell cryptocurrency platform. The platform is solely used by the owners, and employees of Bittreo to expedite their daily business operations. Additionally, services and data structure in the platform conform with Fintrac regulations and provide in-depth support for BI reporting. Main technology incorporated include Node, Express, MongoDB, Vue and AWS."
			},
			{
				image: "bittreo/2fa.jpg",
				html: "The authentication system in Bittreo takes advantage of 2 factor technology via the <a href=\"https://www.npmjs.com/package/speakeasy\" target=\"_blank\">speakeasy</a> API."
			},
			{
				image: "bittreo/new/buy-and-sell.png",
				html: "Core functionality of the platform utilizes the <a href=\"https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md\" target=\"_blank\">Binance API</a> to perform market orders based on customer and company set variables."
			},
			{
				image: "bittreo/new/customer-management.png",
				html: "The platform's UI utilizes the <a href=\"https://vuetifyjs.com/en/\" target=\"_blank\">Vuetify</a> components library working heavily with <a href=\"https://vuetifyjs.com/en/components/data-tables\" target=\"_blank\" tabindex=\"0\"> data tables</a>."
			},
			{
				image: "bittreo/new/customer-profile.png",
				html: "The customer module in Bittreo allows for management in regards to banking records, risk assessments, wallet sanction checks and validations, and company-wide comment sharing."
			},
			{
				image: "bittreo/new/cash-management.png",
				html: "The above illustration highlights the cash management feature, which allows for owners and managers to keep track of incoming/outgoing cash. This is especially helpful for end of day reporting, and tracking cash across multiple locations and entities."
			}
		]
	},
	{
		id: "erp",
		title: "Enterprise Resource Planning",
		timeline: "Jan, 2019 - Present",
		description: "Private ERP for a Wholesaler.",
		slides: [
			{
				image: "henesys-erp/login.png",
				html: "Henesys ERP is an enterprise software that was built to migrate and replace an existing legacy system built on MS-DOS. The platform was built using Node, Express, MongoDB, Vue, and AWS.",
			},
			{
				image: "henesys-erp/orders.png",
				html: "The platform allows wholesalers to quote, create, pick, invoice, and ship orders to their vendors while maintaining inventory management for various sales and accounting reports.",
			},
			{
				image: "henesys-erp/customer-management.png",
				html: "Resources are managed and displayed in modular, robust, and flexible tabular views, while taking advantage of server side pagination, and query building with advanced filtering capabilities. The UI/UX utilizes front-end frameworks and utility libraries including Vuetify, Tailwindcss, Postcss, and Webpack.",
			},
			{
				image: "henesys-erp/administration-roles.png",
				html: "All resource oriented express endpoints are built with authentication middleware. The permissions module allows the wholesale owners to create custom user roles for their employees, and attach the appropriate CRUD operations for each necessary resource. Once altered, the resource automatically takes into effect returning 401 status responses upon an unauthorized request or page navigation.",
			},
		]
	},
	{
		id: "websites",
		title: "Websites",
		timeline: "June, 2020 - Present",
		description: "SSR websites built and maintained.",
		slides: [
			{
				image: "websites/henesys-group-homepage.png",
				html: "The <a href=\"https://henesysgroup.com\" target=\"_blank\">Henesys Group</a> website is a Nuxt based project built to display and highlight the solutions and overview of Henesys Group Consulting.The site is generated and hosted statically on an AWS S3 bucket.",
			},
			{
				image: "websites/henesys-group-shipping.png",
				html: "One of the solutions provided by Henesys Group Consulting include free shipping quotes with the option to purchase shipping labels for small to medium packages. Shipping providers integrated include Canpar, Canada Post, Purolator, and DHL.",
			},
			{
				image: "websites/gladiator-homepage.png",
				html: "<a href=\"https://gladiatorbikes.ca\" target=\"_blank\">Gladiator Bikes</a> is a Richmond based bike company that also serve as a client to Henesys Group's ERP platform. Inventory and store settings are pulled directly from the Henesys ERP via privately accessed endpoints. This site was built strictly on the Nuxt framework utilizing postcss, tailwindcss, and hosted statically on AWS S3.",
			},
			{
				image: "websites/gladiator-checkout.png",
				html: "Gladiator Bikes also integrates the <a href=\"https://www.developer.squareup.com\" target=\"_blank\" >square api</a> for secure online payments via credit/debit card or digital wallets like Google or Apple Pay.",
			},
			{
				image: "websites/vb-home.png",
				html: "<a href=\"https://vancouverbitcoin.com/\" target=\"_blank\">Vancouver Bitcoin</a> is a website . The site is built on the Wordpress Framework with HTML, CSS, Javascript, PHP, SQL, Docker, and Node hosted on an AWS infrastructure including Route53, ACM, EC2, ALB, and RDS.",
			},
			{
				image: "websites/vb-blog.png",
				html: "Developed custom page templates for blog pages registering custom Wordpress ajax actions, and page hooks to meet the requirements defined in the mockup.",
			},
		]
	},
	{
		id: "client_portal",
		title: "Client Portal",
		timeline: "Dec, 2017 - Dec, 2019",
		description: "Analytics platform to measure digital marketing for dealership websites.",
		slides: [
			{
				image: "client-portal/summary.jpg",
				title: "Summary",
				html: "A portal providing clients an interactive, user-friendly, powerful analytics tool for measuring their online performance with Convertus Digital. The platform facilitates and optimizes the client's decision making ability in the online automotive industry. This tool utilizes the Wordpress framework incorporating front end libraries such as jQuery, AmCharts, and Bootstrap."
			},
			{
				image: "client-portal/bootstrap-tour.jpg",
				html: "This segment of the Client Portal uses the Google Analytics API service to call organic statistics essential to clients who have a dealership website."
			},
			{
				image: "client-portal/organic-search.jpg",
				title: "Organic Search Solution",
				html: "The Organic Search page pulls data from the Google Agency and Google Analytics API displaying keyword rankings over a specified period of time and date segment."
			},
			{
				image: "client-portal/paid-search.jpg",
				title: "Paid Search Solution",
				html: "The Paid Search page makes calls from Google Adwords' campaign reporting API, grabbing data in regards to the client's campaigns. As shown in the illustration, clients can see their campaign leads, costs, impressions, clicks, average cost per click, and cost per acquisition."
			},
			{
				image: "client-portal/leads.jpg",
				title: "Leads Report",
				html: "The Leads page pulls data from the client's website's database, and displays information relative to where conversions and popular form submissions came from."
			},
			{
				image: "client-portal/inventory.jpg",
				title: "Inventory Report",
				html: "The Inventory page pulls data from Convertus' VMS ( Dealertrend ) API service, to present Convertus Digital clients with their top selling vehicles and stocks history."
			},
			{
				image: "client-portal/company-performance.jpg",
				title: "Company Performance",
				html: "The Client Portal provides administrative users insight on a generalized summary of the Company's Performance. Graphing and tabular illustrations represent data pulled from the sales proposal platform NiftyQuoter, ticket managing software Freshdesk, and clientele database queries."
			},
			{
				image: "client-portal/base-design.jpg",
				title: "Website Customization",
				html: "The Client Portal allows newer clients a variety of website mockups to choose from when applying for a website with Convertus Digital."
			}
		]
	},
	{
		id: "migration_script",
		title: "Migration Script",
		timeline: "Dec, 2018 - Nov, 2019",
		description: "Migration tool for wordpress websites.",
		slides: [
			{
				image: "migration-script/midtown-before.jpg",
				html: "A script used to migrate dealer.com websites into the modern Convertus platform, Achilles."
			},
			{
				image: "migration-script/midtown-after.jpg",
				html: "The picture above is post migration of Mid-Town Ford. Technology used includes Node, SQL, AWS, and the Wordpress CLI."
			},
			{
				image: "migration-script/lexusonthepark-before.jpg",
				html: "The script was developed in tandem with the development team of the new platform, and dealer.com's web provider (Autotrader). The script parses website data from an XML feed provided via a dealer.com FTP, maps it appropriately to the new platform's wordpress widget templates, theme settings, and other core data structures, then uses the WP-CLI commands to perform a website migration."
			},
			{
				image: "migration-script/lexusonthepark-after.jpg",
				html: "The script has successfully migrated 1500 legacy websites to the modern Achilles framework. This picture above is post migration of Lexus On The Park."
			}
		]
	},
	{
		id: "showroom_api",
		title: "Vehicle Reference System",
		timeline: "June, 2019 - Nov, 2019",
		description: "An in-house API service for dealership websites to access up-to-date showroom data.",
		slides: [
			{
				image: "convertus-vrs/intro.png",
				html: "A web service providing vehicle reference system data. Data provided range from any OEM make, model, trim or style data. Privately developed as an in-house API for Convertus Digital. Technology used for development include Node, Express, Vue, SQL, and AWS."
			},
			{
				image: "convertus-vrs/styles.png",
				html: "In-house documentation allowing Convertus developers. Documents query building for VRS data when developing font-end features for dealership websites."
			}
		]
	},
	{
		id: "achilles_portal",
		title: "Achilles Portal",
		timeline: "June, 2019 - Nov, 2019",
		description: "Online portal to monitor, query, and update AutoTrader's websites and AWS infrastructure.",
		slides: [
			{
				image: "achilles-portal/ap-login.jpg",
				html: "The Achilles Portal is an automation and monitoring tool in regards to the 1500 websites migrated and developed by Convertus Digital for Autotrader. Main technology incorporated are Node, Express, MongoDB, and Vue."
			},
			{
				image: "achilles-portal/ap-networks.jpg",
				html: "This section of the portal makes use of the <a href=\"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/\" target=\"_blank\">aws-sdk</a> in order to grab and display real-time network states. Displays load balancers and their status, codebase version number, and other useful tags."
			},
			{
				image: "achilles-portal/ap-mass-query.jpg",
				html: "The mass query section uses network endpoints to query wordpress option fields stored on multiple sites on a per network basis. Technology involved here include PHP, Node, SQL, Wordpress, and MongoDB."
			},
			{
				image: "achilles-portal/ap-mass-updates.jpg",
				html: "Similarly, we're able to mass update multiple sites on a per network basis. This includes updating wordpress option fields, enabling or disabling plugins, creating pages, and changing site themes."
			},
			{
				image: "achilles-portal/ap-migration.jpg",
				html: "The Achilles Portal provides the ability to migrate entire websites between networks to cater business needs."
			},
			{
				image: "achilles-portal/ap-ssl-cloud-front.jpg",
				html: "This section of the portal helps request and manage SSL certificates on Convertus' AWS infrastructure for all websites on all networks. Customer support uses this tab to communicate to clients ( or their IT team ) what records need to point to what value in their domain provider prior to a site launch."
			},
			{
				image: "achilles-portal/ap-selenium.jpg",
				html: "The portal also allows QA at Convertus to run selenium tests on jenkin servers. Bugs caught are outputted and then used to create Jira tasks that are assigned to a relative developer for fixes. Libraries here include the <a href=\"https://www.npmjs.com/package/jenkins\" target=\"_blank\">jenkins</a> and <a href=\"https://developer.atlassian.com/server/jira/platform/rest-apis/\" target=\"_blank\">jira</a> APIs."
			}
		]
	}
]
