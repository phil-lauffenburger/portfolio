import React from 'react';
import PortfolioItem from './PortfolioItem';
import { displace, getInitialDisplacePos } from '../js/displace'

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
    header: 'Getaround',
    text: 'Popular Car Sharing App',
    url: "images/portfolio/getaround.png",
    key: 'l'
  }
];

const keys = ele.map(({key}) => key);

// will all return 0 for now
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

const initial = getInitialDisplacePos({ keys });

export class PortfolioPlayground extends React.Component {
  state = {
    initialGrid: initial,
    initialKeyMap: returnPositions(initial),
    shift: true
  }

  componentDidMount() {
    this.makeMotion(this.state.initialGrid)
  }

  makeMotion(initial) {
    let { elementPos, shift } = this.state;
    if (shift) {
      ({ elementPos } = displace({elementPos: elementPos || initial, keys }));
      this.setState({ elementPos },() => this.timer = setTimeout(() => this.makeMotion(), 5000))
    } else {
      clearTimeout(this.timer);
    }
  }

  toggleShifting(val) {
    this.setState({ shift: val}, () => {
      if (this.state.shift) {
        this.timer = setTimeout(() => this.makeMotion(), 5000)
      } else {
        clearTimeout(this.timer);
      }
    })
  }

  render() {
    const { elementPos, initialKeyMap } = this.state;
    if (!elementPos) return null;
    return (
      <div className="twelve columns collapsed">
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <h1>Take a gander at a few of my previous projects</h1>
          {ele.map((item, index) =>
            <div
              key={item.key}
              onMouseEnter={() => this.toggleShifting(false)}
              onMouseLeave={() => this.toggleShifting(true)}
            >
              <PortfolioItem
                {...item}
                index={index + 1}
                xTransform={elementPos[item.key].xTransform - initialKeyMap[item.key].i}
                yTransform={elementPos[item.key].yTransform - initialKeyMap[item.key].j}
              />
            </div>
            )}
          </div> {/* twelve columns end */}

      </div>
    )
  }
};

export default PortfolioPlayground;
