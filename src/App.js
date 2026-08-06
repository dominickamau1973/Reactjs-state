import React, { Component } from "react";
import "./App.css";
import profilePhoto from "./profile-photo.jpeg";

class App extends Component {
  state = {
    person: {
      fullName: "Dominic Kamau",
      bio: "Dominic is a creative front-end developer who enjoys transforming ideas into accessible and engaging digital experiences.",
      imgSrc: profilePhoto,
      profession: "Front-End Developer",
    },
    shows: false,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.mountedAt = Date.now();

    this.timerId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - this.mountedAt) / 1000);
      this.setState({ elapsedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  toggleProfile = () => {
    this.setState((previousState) => ({
      shows: !previousState.shows,
    }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;
    const { fullName, bio, imgSrc, profession } = person;

    return (
      <main className="app">
        <section className="profile-section">
          <p className="eyebrow">React class component</p>
          <h1>Personal Profile</h1>
          <p className="intro">
            Use the button to show or hide the profile stored in the component state.
          </p>

          <button className="toggle-button" type="button" onClick={this.toggleProfile}>
            {shows ? "Hide profile" : "Show profile"}
          </button>

          <div className="timer" aria-live="polite">
            <span className="timer-dot" aria-hidden="true" />
            Component mounted {elapsedTime} {elapsedTime === 1 ? "second" : "seconds"} ago
          </div>

          {shows && (
            <article className="profile-card">
              <img src={imgSrc} alt={fullName} />
              <div className="profile-content">
                <p className="profession">{profession}</p>
                <h2>{fullName}</h2>
                <p className="bio">{bio}</p>
              </div>
            </article>
          )}
        </section>
      </main>
    );
  }
}

export default App;
