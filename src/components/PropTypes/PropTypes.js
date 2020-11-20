import PropTypes from 'prop-types';

const PropTypeShapeList = {
  project: {
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
    date: PropTypes.number,
    url: PropTypes.string,
    repo: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
  },
};

export default PropTypeShapeList;
