const React = require('react');
const classNames = require('classnames');

const PageSection = (props) => {
  var className = classNames('PageSection', props.className, {
    'PageSection--gray': props.gray,
    'PageSection--comby-orange-3': props.combyOrange,
    'PageSection--short': props.short,
  });
  return (
    <div className={className}>
      <div className="PageSection-Wrapper">{props.children}</div>
    </div>
  );
};

module.exports = PageSection;
