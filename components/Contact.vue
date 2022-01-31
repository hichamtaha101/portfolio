<template>
  <div
    id="contact"
    class="body-contact profile-section"
  >
    <div class="wrapper">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Contact</div>
        <div class="profile-section__title--sm">Have any inquiries?</div>
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
