import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//-- Static Data --------------------------------------------------------------//
import { stats } from "../../../data";
//-- Components ---------------------------------------------------------------//
import { StatCard } from "../../atoms";
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const StatsSection = () => {
  return (
    <div className="p-5">
      <Row className="w-100 row-gap-5 mx-auto">
        {stats.map((stat, i) => (
          <Col
            key={`stat-value-card-${i}-${stat.title}`}
            style={{ boxSizing: "border-box" }}
            xs={12}
            md={6}
            lg={4}
          >
            <StatCard title={stat.title} text={stat.text} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;
