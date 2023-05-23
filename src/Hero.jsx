import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>contentful CMS</h1>
					<p>
						Copper mug forage PBR&B, master cleanse yr tilde ascot art party
						mlkshk freegan intelligentsia street art mukbang. Sriracha lyft
						beard, banjo literally forage fingerstache tumeric. Godard hexagon
						cold-pressed deep v, whatever four dollar toast cloud bread pabst
						artisan taiyaki cronut irony cupping.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and browser" className="img" />
				</div>
			</div>
		</section>
	);
};
export default Hero;
