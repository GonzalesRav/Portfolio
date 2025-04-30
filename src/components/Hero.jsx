import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { laptophero } from "../assets/index";
import { styles } from "../styles";

const Hero = () => {
  const [showChart, setShowChart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChart(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex flex-col items-center justify-center h-full">
        
          

          <motion.div
            initial={{ y: -10 }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Welcome to <br />
            <span className="text-[#915eff]">Johana environment</span>
          </h1>
            <img
              src={laptophero}
              alt="laptop"
              className="max-w-full h-auto"
              style={{ maxHeight: "50vh" }}
            />
            </div>
          </motion.div>
        
      </div>

      {showChart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
