const React = require('react');

class Index extends React.Component {
  render() {
      const { actionadventure } = this.props;
      return (
              <div>
                  <h1>Action Adventure Games</h1>
                  <ul>
                      {actionadventure.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/actionadventure/${i}`}> {element.name} </a>
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