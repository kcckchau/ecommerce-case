const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your Hero Subtitle or Description</p>
      </div>
      <img
        className="hero-image"
        src="/path/to/your-image.jpg" // Replace with the actual path to your image
        alt="Hero Image"
      />
    </div>
  );
};

export default HeroSection;