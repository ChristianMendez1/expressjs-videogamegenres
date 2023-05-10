const React = require('react')
class Show extends React.Component {
  render () {
   const rpg = this.props.rpg
    return (
      <div>
      <h1>{rpg.name}</h1>
        {rpg.name} was made by {rpg.company}. 
        {rpg.multiplayer 
            ? ` This is a online multiplayer game.`
            : ` This game is not online or multiplayer.`}
            <br></br><br></br>
        <a href="/rpg"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;