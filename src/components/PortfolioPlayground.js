import React from 'react';
import PortfolioItem from './PortfolioItem';
import { randomMotion, createInitialGrid } from '../js/randomMotion'

const ele = [
  {
    header: "BGRoll",
    text: 'Statistics/Die Roll Log',
    url:"images/portfolio/bgroll.png",
    key:'b'
  },
  {
    header: 'CLICC',
    text: 'Chemical Database/Analysis',
    url: 'images/portfolio/clicc.png',
    key: 'c'
  },
  {
    header: 'Vivibot',
    text: 'FB ChatBot & CMS',
    url: "images/portfolio/vivi.png",
    key: 'f'
  },
  {
    header: 'Guidings',
    text: 'Map/Video-based Recommendation Finder',
    url: 'images/portfolio/guidings.png',
    key: 'g'
  },
  {
    header: 'Climbz',
    text: 'Climbing Gym Management and User App',
    url: 'images/portfolio/climbz.png',
    key: 'cl'
  },
  {
    header: 'Grio',
    text: 'Grio Homepage',
    url: 'images/portfolio/grio.png',
    key: 'gr'
  },
  {
      header: 'Freedirt',
      text: 'Free Camping Finder',
      url: 'images/portfolio/freedirt.png',
      key:'fd'
  },
  {
    header: 'LHDC site',
    text: 'Aerospace FSM Showcase Site',
    url: "images/portfolio/lhdc.png",
    key: 'l'
  }
];

const returnPositions = elementPos => {
  let keyMap = {};
  ele.forEach(({key}) =>( keyMap[key] = {i : 0, j: 0}))
  for (var i =0; i < elementPos.length; i++) {
    for (var j = 0; j < elementPos[i].length; j++) {
      if (elementPos[i][j]) {

        keyMap[elementPos[i][j]] = { i, j};
      }
    }
  }
  return keyMap;
}

const initial = createInitialGrid(ele.map(({key}) => key));

export class PortfolioPlayground extends React.Component {
  state = {
    initialGrid: initial,
    initialKeyMap: returnPositions(initial),
    shift: false
  }

  componentDidMount() {
    this.makeMotion(this.state.initialGrid)
  }

  makeMotion(initial) {
    let { elementPos, elementXMotion, elementYMotion, shift } = this.state;
    ({ elementPos, elementXMotion, elementYMotion } = randomMotion({elementPos: elementPos || initial, elementXMotion, elementYMotion}));
    if (shift) {
      this.setState({ elementPos, elementXMotion, elementYMotion }, () => setTimeout(() => this.makeMotion(), 500))
    } else {
      this.setState({ elementPos });
    }
  }

  toggleShifting() {
    this.setState({ shift: !this.state.shift}, () => {
      if (this.state.shift) {
        this.makeMotion();
      } else {
        this.setState({ elementPos: this.state.initialGrid, elementXMotion: null, elementYMotion: null });
      }
    })
  }

  render() {
    const { elementPos, initialKeyMap, shift } = this.state;
    if (!elementPos) return null;

    const keyMap = returnPositions(elementPos);
    return (
      <div className="twelve columns collapsed">
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <h1>Take a gander at a few of my previous projects</h1>
        <div className="twelve column centered cf">
        <button className="start-stop-btn button" onClick={() => this.toggleShifting()}>
            <h4 className="muted " >({shift ? 'Stop' : 'Start'} the drifting)</h4></button>
            </div>
        {ele.map((item, index) =>
          <PortfolioItem
            {...item}
            index={index + 1}
            xTransform={keyMap[item.key].i - initialKeyMap[item.key].i}
            yTransform={keyMap[item.key].j - initialKeyMap[item.key].j}
          />)}
          </div> {/* twelve columns end */}

      </div>
    )
  }
};

export default PortfolioPlayground;
