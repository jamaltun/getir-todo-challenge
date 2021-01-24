import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../store/actions";
import { VISIBILITY_FILTERS } from "../constants";

import { Form } from "react-bootstrap";

const Filters = ({ activeFilter, setFilter }) => {
  return (
    <Form.Control
      as="select"
      custom
      className="w-30"
      value={activeFilter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <option
            key={`visibility-filter-${currentFilter}`}
            value={currentFilter}
          >
            {currentFilter}
          </option>
        );
      })}
    </Form.Control>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(Filters);
