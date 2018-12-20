import React from 'react';
import { assignNewColorLength } from '../js/randomColorLength';

export class SkillBar extends React.Component {
  state = {}
  inMotion(val) {
    const { skill } = this.props;
    const { mouseOver } = this.state;

    if (mouseOver) {
      const { stateSkill, color } = assignNewColorLength(skill)
      this.setState({ stateSkill, color, mouseOver: true }, () => setTimeout(() => this.inMotion(), 1000));
    } else {
      this.setState({ mouseOver: false, stateSkill: null, color: null });
    }
  }

  render() {
    const { name, skill } = this.props;
    const { stateSkill, color } = this.state;
    return (
      <li
        key={name}
        onMouseOver={() => {this.setState({ mouseOver: true }, () => this.inMotion())}}
        onMouseOut={() => this.setState({ mouseOver: false})}
      >
        <span className="bar-expand" style={{ width: (stateSkill || skill) + '%', backgroundColor: color || '#313131' }}  />
        <em>{name}</em>
      </li>
    );
  }
};

export default SkillBar;
