const React = require('react')
class Show extends React.Component {
  render () {
   const sandbox = this.props.sandbox
    return (
      <div>
      <h1>{sandbox.name}</h1>
        {sandbox.name} was made by {sandbox.company}. 
        {sandbox.multiplayer 
            ? ` This is a online multiplayer game.`
            : ` This game is not online or multiplayer.`}
            <br></br><br></br>
        <a href="/sandbox"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;