import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="values-wrapper" id="values">
      <Helmet>
        <title>Our Values - Altair Attic Limited</title>
        <meta
          name="description"
          content="Discover the core values that drive Altair Attic Limited and shape our company culture."
        />
        <meta
          name="keywords"
          content="Altair Attic Limited values, company culture, core values"
        />
        <meta property="og:title" content="Our Values - Altair Attic Limited" />
        <meta
          property="og:description"
          content="Discover the core values that drive Altair Attic Limited and shape our company culture."
        />
        <meta property="og:url" content="https://www.altairattic.com/values" />
        <meta
          property="og:image"
          content="https://www.altairattic.com/values.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Values - Altair Attic Limited"
        />
        <meta
          name="twitter:description"
          content="Discover the core values that drive Altair Attic Limited and shape our company culture."
        />
        <meta
          name="twitter:image"
          content="https://www.altairattic.com/images/values.jpg"
        />
      </Helmet>
      <div className="flexCenter innerWidth paddings values-container ">
        <div className="values-left">
          <div className="values-images">
            <img src="/S1.jpg" alt="Image 1" className="image image1" />
            <img src="/value.jpeg" alt="Image 2" className="image image2" />
          </div>
        </div>
        <div className="values-right">
          <h2 className="v-primaryText">Our Values</h2>
          <p className="v-secondaryText">
            We believe in a set of core values that drive our mission and shape
            our company culture.
          </p>
          {data.map((item, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={handleChange(i)}
              className={`accordion ${expanded === i ? "expanded" : ""}`}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`arrow-icon ${expanded === i ? "expanded" : ""}`}
                  />
                }
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
                className="accordion-summary"
              >
                <Typography className="accordion-heading">
                  {item.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="v-secondaryText">
                  {item.detail}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;
