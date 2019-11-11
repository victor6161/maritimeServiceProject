import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IMapProp = StateProps;

export const Maps = (props: IMapProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        <h2>Maps</h2>
        <p className="lead">This is map page</p>
      </Col>

    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Maps);
