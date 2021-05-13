<template>
  <div
    id="contact"
    class="body-contact profile-section"
  >
    <div class="wrapper">
      <div
        class="body-title"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Contact</div>
        <div class="profile-section__title--sm">Have any inquiries?</div>
      </div>

		<div class="contact-method-wrap">
		<div class="contact-method">
			<a
			href="tel:7787891002"
			target="_blank"
			><i
			class="fa fa-phone"
			/><b>Phone |</b> (778)-789-1002</a>
		</div>
		<div class="contact-method">
			<a
			href="mailto:hichamtaha101@gmail.com"
			target="_blank"
			><i
			class="fa fa-envelope"
			/><b>Email |</b> hichamtaha101@gmail.com</a>
		</div>
		<div class="contact-method">
			<a
			href="https://www.google.ca/maps/place/Bittreo/@49.2861475,-123.1190059,17z/data=!3m1!4b1!4m5!3m4!1s0x548673947c4f701d:0x1a88f29c31fe10a!8m2!3d49.2861201!4d-123.1168845"
			target="_blank"
			><i class="fa fa-map-marker" /><b>Work Address |</b> 905 W Pender St, Vancouver, BC V6C 1L6 </a>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4853989172925!2d-123.11900588376936!3d49.28614747844519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673947c4f701d%3A0x1a88f29c31fe10a!2sBittreo!5e0!3m2!1sen!2sca!4v1620797547548!5m2!1sen!2sca"
			width="100%"
			height="200"
			allowfullscreen
			loading="lazy"
			frameBorder="0"
		/>
		<div> Find me on social media.</div>
		<div class="contact-social-media">
			<a
			href="https://ca.linkedin.com/in/hichamakirataha"
			target="_blank"
			><i
			class="fa fa-linkedin"
			/></a>
			<a
			href="https://www.facebook.com/HichamATaha"
			target="_blank"
			><i
			class="fa fa-facebook"
			/></a>
			<a
			href="https://plus.google.com/u/0/115767603506886933291"
			target="_blank"
			><i
			class="fa fa-google-plus"
			/></a>
		</div>
		</div>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				name: '',
				email: '',
				message: '',
			},
			update: '',
			message: '',
		};
	},
	methods: {
		submit() {
			const errors = [];
			this.message = '';
			this.update = '';

			// Error check.
			Object.entries( this.form ).forEach( ( input ) => {
				if ( input[1] === '' ) {
					errors.push( `Please enter a value for ${input[0]}` );
				}
			} );

			if ( errors.length > 0 ) {
				this.message = errors.join( '<br>' );
				this.update = 'fail';
			}

			// httprequest to send email form using gmail service on node server.
		},
	},
};
</script>

<style lang="scss">
.body-contact {
	text-align: center;
	.contact-method-wrap {
		margin-top: 15px;
		.contact-method {
			padding: 10px 0px;
			font-size: 14px;

			a {
				color: $main_color;
				transition: 0.2s all;

				&:hover {
					color: $secondary_color_1;
				}
			}

			i {
				font-size: 18px;
				margin-right: 10px;
				width: 25px;
			}
		}

		iframe {
			margin-top: 20px;
			margin-bottom: 20px;
			box-shadow: 1px 1px 1px 1px #d2d2d2;
		}

		.contact-social-media {
			display: flex;
			justify-content: center;
			margin-top: 5px;
			font-size: 18px;

			i {
				padding: 10px;
				box-shadow: 1px 1px 1px 1px #d2d2d2;
				transition: 0.2s all;
				margin-right: 5px;
				margin-bottom: 5px;
				color: $main_color;

				&:hover {
					&.fa-facebook {
						color: #3b5998;
					}

					&.fa-google-plus {
						color: #d34836;
					}

					&.fa-linkedin {
						color: #0077b5;
					}

					box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
				}
			}

			.fa-facebook {
				padding: 10px 12px;
			}
		}
	}
}
</style>