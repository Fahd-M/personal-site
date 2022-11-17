import "./Hero.scss";
import binaryWorld from "../../assets/images/binary-world.svg";
import { motion } from "framer-motion";
import Waveline from "./Waveline";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


 
function Hero() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  const optionsVar =
  {
    "fullScreen": {
        "enable": false,
        "zIndex": 1,
    },
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false,
                "value_area": 0
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color":"#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "options": {
                "sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "top-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on":"canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 10,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#000",
        "image": "url(./)",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
       "opacity":0.5
    }
  };

  return (
    <div className="hero">
      <Particles 
        id="tsparticles" 
        className="tsparticles"
        init={particlesInit}
        Loaded={particlesLoaded}
        options={ optionsVar }
      />
      
      <div className="hero__visual">
        <Waveline className="hero__waveline" />

        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          src={binaryWorld}
          className="hero__big-img"
          alt="Binary world globe"
        />
      </div>

      <div className="hero__headings">
        <motion.h2
          initial={{ scale: 1}}
          animate={{ scale:1.25}}
          transition={{delay: 4, duration: 2}}
          className="hero__sub-title"
        >
          Hello World!
        </motion.h2>
        <motion.h1
          initial={{ scale:1, y:0 }}
          animate={{ scale:1.25, y:+20 }}
          transition={{ delay:4, duration: 2 }}
          className="hero__title"
        >
          I'm Fahd
        </motion.h1>
      </div>

      
      
    </div>
  );
}

export default Hero;
