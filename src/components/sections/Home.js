const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Design <span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">Grow </span>
              <span className="intro animated-layer">
                Transforming Ideas into Digital Success Stories with Diox.me
              </span>
            </span>
            <span>
              <span className="animated-layer">Achieve </span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
