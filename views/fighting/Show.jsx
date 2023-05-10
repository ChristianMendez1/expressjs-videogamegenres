const React = require('react')
class Show extends React.Component {
  render () {
   const fighting = this.props.fighting
    return (
      <div>
      <h1>{fighting.name}</h1>
        {fighting.name} was made by {fighting.company}. 
        {fighting.multiplayer 
            ? ` This is a online multiplayer game.`
            : ` This game is not online or multiplayer.`}
            <br></br><br></br>
        <a href="/fighting"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;