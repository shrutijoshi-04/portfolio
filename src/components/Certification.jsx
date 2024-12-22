import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certification } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificationCard = ({ certification }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certification.date}
      iconStyle={{ background: certification.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={certification.icon}
            alt={certification.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{certification.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {certification.company_name}
        </p>
      </div>
      <p className="text-white-100 text-[14px] pl-1 tracking-wider">
        {certification.point}
      </p>
    </VerticalTimelineElement>
  );
};

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What certificates i hold
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certification.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {certification.map((certification, index) => (
            <CertificationCard key={`certification-${index}`} certification={certification} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
