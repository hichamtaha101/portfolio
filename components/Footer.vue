<template>
  <div class="footer">
    <div class="footer-wrap">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Portfolio</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>
<style lang="scss">
.footer {
	padding: 20px;
	box-shadow: 1px 1px 1px 1px #d2d2d2;

	.footer-wrap {
		text-align: center;

		a {
			text-transform: uppercase;
			font-size: 10px;
			margin: 0px 5px;
			@include underline-before-hover();

			&:hover,
			&:visited {
				background-color: white;
				text-decoration: none;
			}
		}

		&.active {
			font-weight: bold;
		}
	}
}
</style>
