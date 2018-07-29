import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Question from './show';

import './list.css';

class Questions extends Component {

  render() {
    const { loading, questions } = this.props;

    return (
      <div className="questions">
        { loading &&
          <Spin />
        }
        { !loading && questions.map(question =>
          <div key={ question.id } className="question">
            <Question question={ question } />
          </div>)
        }
      </div>
    );
  }
}

Questions.propTypes = {
  loading: PropTypes.bool,
  questions: PropTypes.array.isRequired,
};

export default Questions;