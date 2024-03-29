import './styles/Animation.module.css';

const Animation = () => {

	return (
		<>
			<h1>Animated Weather Icons</h1>

			<div class="icon sun-shower">
				<div class="cloud"></div>
				<div class="sun">
					<div class="rays"></div>
				</div>
				<div class="rain"></div>
			</div>

			<div class="icon thunder-storm">
				<div class="cloud"></div>
				<div class="lightning">
					<div class="bolt"></div>
					<div class="bolt"></div>
				</div>
			</div>

			<div class="icon cloudy">
				<div class="cloud"></div>
				<div class="cloud"></div>
			</div>

			<div class="icon flurries">
				<div class="cloud"></div>
				<div class="snow">
					<div class="flake"></div>
					<div class="flake"></div>
				</div>
			</div>

			<div class="icon sunny">
				<div class="sun">
					<div class="rays"></div>
				</div>
			</div>

			<div class="icon rainy">
				<div class="cloud"></div>
				<div class="rain"></div>
			</div>

			<p>Based on <a href="https://dribbble.com/shots/2097042-Widget-Weather" target="_blank">Dribbble</a> by kylor</p>
		</>
	)
}

export default Animation;