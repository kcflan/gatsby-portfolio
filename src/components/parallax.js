import React from "react";
// import ReactDOM from 'react-dom';
import Parallax from "react-springy-parallax";
// import bash from '../../data/images/bash.svg';
// import uaz from '../../data/images/arizona.png';

import cloud from "../../data/images/cloud.svg";
import earth from "../../data/images/earth.svg";
import octostar from "../../data/images/octostar.png";
import satellite4 from "../../data/images/satellite4.svg";
import stars from "../../data/images/stars.svg";

import reactimg from "../../data/images/react.svg";
import nodeimg from "../../data/images/node.png";
import graphqlimg from "../../data/images/graphql.svg";

class ParallaxFrame extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={2}>
        {/* scrolling={false} */}
        <Parallax.Layer
          factor={1}
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: "cover",
            // backgroundColor: '#0a0a0a'
            // backgroundColor: '#0a0a3a'
            backgroundColor: "#181A2B",
          }}
        />
        <Parallax.Layer
          offset={0.8}
          speed={-0.3}
          style={{ pointerEvents: "none", opacity: 0.6 }}
        >
          <img src={satellite4} style={{ width: "10%", marginLeft: "90%" }} />
        </Parallax.Layer>

        <Parallax.Layer offset={0.16} speed={0.4} style={{ opacity: 0.1 }}>
          <img
            src={reactimg}
            style={{ display: "block", width: "26%", marginLeft: "77%" }}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={0.2} speed={3} style={{ opacity: 0.1 }}>
          <img
            src={nodeimg}
            style={{ display: "block", width: "15%", marginLeft: "8%" }}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={0.6} speed={1.8} style={{ opacity: 0.1 }}>
          <img
            src={graphqlimg}
            style={{ display: "block", width: "25%", marginLeft: "23%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={earth} style={{ width: "60%" }} />
        </Parallax.Layer>

        {/* <Parallax.Layer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: `${clients}`
          }}
        /> */}

        <Parallax.Layer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={octostar} style={{ width: "35%" }} />
        </Parallax.Layer>

        <Parallax.Layer
          offset={0.9}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          {/* <img src={uaz} style={{ width: '40%' }} /> */}
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default ParallaxFrame;
