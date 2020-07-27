import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";

const initialStateItems = [
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Dan Abramov",
    description: "The creator of React",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class App extends React.Component {
  state = {
    items: [...initialStateItems]
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
