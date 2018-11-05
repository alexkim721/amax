import React from "react";
import axios from "axios";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class CollectionList extends React.Component {
  state = {
    data: [],
    loading: true
  };
  componentWillMount() {
    axios
      .get(
        `${apibase}/collection?furnituretype=${this.props.dataId}&per_page=100`
      )
      .then(data => {
        this.setState({
          data: data.data,
          loading: false
        });
      });
  }
  render() {
    return (
      <div className="collectionList">
        {!this.state.loading ? (
          this.state.data.map(item => (
            <div key={item.id}>
              <p />
              <div className="collectionNode">
                <div className="collectionName">
                  <p>{item.title.rendered}</p>
                  <p>{item.acf.dimensions}</p>
                </div>
                <div className="image">
                  <div className="imageContainer">
                    <img
                      src={item.acf.image.sizes.large}
                      alt={item.title.rendered}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

export default CollectionList;
