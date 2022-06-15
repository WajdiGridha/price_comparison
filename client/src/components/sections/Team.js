import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Team extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "team section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "team-inner ",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    

    const goTo = (id) => {
      window.location.replace("http://localhost:3000/products/" + id);
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <h2>Parcourir les catégories</h2>{" "}
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/pr_peripheriques/1622630807_700.jpg"
                        alt="Team member 01"
                        width={180}
                        height={180}
                        onClick={() => goTo(1)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Claviers</h5>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/imprimante.webp"
                        alt="Team member 02"
                        width={180}
                        height={180}
                        onClick={() => goTo(2)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Impression</h5>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/clim.webp"
                        alt="Team member 03"
                        width={180}
                        height={180}
                        onClick={() => goTo(3)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Climatisations</h5>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/pr_projection/1520412275_143.jpg"
                        alt="Team member 04"
                        width={180}
                        height={180}
                        onClick={() => goTo(4)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Projection</h5>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/pr_serveurs/1539180534_127.jpg"
                        alt="Team member 05"
                        width={180}
                        height={180}
                        onClick={() => goTo(5)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Serveurs</h5>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/pcbureau.webp"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(6)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Informatique</h5>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/plaque.webp"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(7)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">cuisson</h5>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/machine.webp"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(8)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Menage</h5>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://electromagic.tn/wp-content/uploads/2021/10/52000.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(9)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">recepteurs</h5>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/frontend/home-category/smartphone.webp"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(10)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Mobile</h5>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/pr_preparation_culinaire/1654789293_137.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
                        onClick={() => goTo(11)}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Centrifugeuse</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
