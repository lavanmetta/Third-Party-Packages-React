import React, { Component } from "react";
import SkyLight from "react-skylight";

class PopUp1 extends Component {
  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
        </section>
        <SkyLight
          hideOnOverlayClicked
          ref={(ref) => (this.simpleDialog = ref)}
          title="React Sky Light"
        >
          Hello, For more visit https://marcio.github.io/react-skylight/
        </SkyLight>
      </div>
    );
  }
}



export default PopUp1;
