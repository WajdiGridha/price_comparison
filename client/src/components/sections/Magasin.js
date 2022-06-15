import React from "react";
import Image from "../elements/Image";
import classNames from "classnames";
import GenericSection from "./GenericSection";

class Magasin extends React.Component {
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

  return (
    <React.Fragment>
      <GenericSection topDivider>
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <h2>Magasins</h2>{" "}
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/b0ef2-tunisianet.jpg"
                        alt="Team member 01"
                        width={180}
                        height={180}
                        
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Tunisianet</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/002d2-spacenet.jpg"
                        alt="Team member 02"
                        width={180}
                        height={180}
                        
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Spacenet</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/deec8-mytek.jpg"
                        alt="Team member 03"
                        width={180}
                        height={180}
                        
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">MyTek</h5>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/9ed2f-wiki.jpg"
                        alt="Team member 04"
                        width={180}
                        height={180}
                        
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Wiki</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/93b48-shoppi-ok.jpg"
                        alt="Team member 05"
                        width={180}
                        height={180}
                       
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Shoppi</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/9d647-affariyet.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
                    
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Affariyet</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/8dea2-samsungshop.png"
                        alt="Team member 06"
                        width={180}
                        height={180}
                       
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Samsungshop</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/4add9-hi-tech-express.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
                       
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Hi-Tech-Express</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/7de75-selectshop.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
             
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Selectshop</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/b4bb4-tshop-logo2.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
                    
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Tunishop</h5>
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
                        src="https://www.mega.tn/assets/uploads/img/logo_boutique/47d8c-myshop.jpg"
                        alt="Team member 06"
                        width={180}
                        height={180}
              
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Myshop</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </GenericSection>
    </React.Fragment>
  );
    }
};
export default Magasin;
