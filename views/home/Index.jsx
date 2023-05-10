const React = require('react');

class Index extends React.Component {
  render() {
      return (
              <div>
                <h1>Choose a Video Game Genre.</h1>
                <li><a href="/actionadventure"> Action Adventure Games</a></li>
                <li><a href="/fps"> FPS Games</a></li>
                <li><a href="/rpg"> RPG Games</a></li>
                <li><a href="/sandbox"> Sandbox Games</a></li>
                <li><a href="/fighting"> Fighting Games</a></li>
              </div>
      );
  }
}
module.exports = Index;