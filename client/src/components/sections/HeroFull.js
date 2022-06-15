import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class HeroFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    window.location.replace("http://localhost:3000/search/" + this.state.value);
    event.preventDefault();
  }
  goTo(event) {
    window.location.replace("http://localhost:3000/category");
    event.preventDefault();
  }
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <div
                className="reveal-from-bottom"
                data-reveal-delay="500"
                style={{ height: "80px" }}
              >
                <input
                  id="query"
                  className=" mb-12 ring-none focus-none text-black px-4"
                  style={{ height: "60px", width: "350px" }}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 rounded-ful"
                  style={{ height: "60px", width: "150px" }}

                  onClick={this.handleSubmit}
                >
                  {" "}
                  Recherche
                </button>
              </div>
              <h1
                className="mt-0 mb-16 reveal-from-bottom "
                data-reveal-delay="200"
              >
                DOKKAN
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Dokan est un comparateur de prix, également connu sous le nom
                  moteur de comparaison de prix, ou shopbot – sur des sites Web
                  spéciaux qui exploitent le Web pour trouver les prix les moins
                  chers pour les produits en ligne. Tapez ce que vous voulez,
                  accédez à l'offre et il va énumérer les prix de votre produit
                  des différents détaillants.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="500">
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={this.goTo}
                  >
                    Parcourir Notre catégories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
