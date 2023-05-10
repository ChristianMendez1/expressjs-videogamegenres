const React = require('react');

class Index extends React.Component {
  render() {
      const { fps } = this.props;
      return (
              <div>
                  <h1>FPS Games</h1>
                  <ul>
                      {fps.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/fps/${i}`}> {element.name} </a>
                                  {' '} was made by {element.company}. <br></br>
                                    {element.multiplayer
                                      ? `This is a online multiplayer game.`
                                      : `This game is not online or multiplayer.`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  <a href="/"> back </a>
              </div>
      );
  }
}
module.exports = Index;