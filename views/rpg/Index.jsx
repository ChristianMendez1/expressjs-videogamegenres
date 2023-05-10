const React = require('react');

class Index extends React.Component {
  render() {
      const { rpg } = this.props;
      return (
              <div>
                  <h1>RPG Games</h1>
                  <ul>
                      {rpg.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/rpg/${i}`}> {element.name} </a>
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