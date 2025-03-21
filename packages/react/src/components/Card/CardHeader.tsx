import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = ({ className, ...other }: CardHeaderProps) => (
  <div className={classNames('Card__header', className)} {...other} />
);

CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = {
  className: PropTypes.string
};

export default CardHeader;
