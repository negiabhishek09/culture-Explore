function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-badge">
                    Preserving Bharat's Heritage
                </div>

                <h1 className="hero-h1">
                    Discover the <em>Soul</em> of Every Indian State
                </h1>

                <p className="hero-sub">
                    CultureConnect India is where traditions come alive  explore authentic festivals , dances, foods, and stories.
                </p>
                <div className="hero-actions">
                    <button className="btn-hero-primary">
                        Explore States
                    </button>
                    <button className="btn-hero-secondary">
                        Share Your Culture
                        </button>

                </div>

                <div className="hero-stats">
                    <div>
                        <div className="stat-num">36</div>
                        <div className="stat-label">Stories</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;