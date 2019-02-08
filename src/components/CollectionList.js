import React from "react";
import axios from "axios";
import * as utils from "../utils/animations";
import { runInThisContext } from "vm";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class CollectionList extends React.Component {
  state = {
    data: [],
    loading: true,
    lightbox: false,
    lightboximg: null
  };

  collectionRef = React.createRef();

  componentWillMount() {
    axios
      .get(
        `${apibase}/collection?furnituretype=${this.props.dataId}&per_page=100`
      )
      .then(data => {
        setTimeout(() => {
          this.setState({
            data: data.data,
            loading: false
          });
        }, 200);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.loading !== prevState.loading && !this.state.loading) {
      utils.collectionSubIntro(this.collectionRef.current.children);
    }
  }

  showLightbox =() => {
    if(!this.state.lightbox) { 
        this.setState({
          lightbox: true
        })
    } else {
      this.setState({
        lightbox: false
      })
    }
    }

    changeLightBox = (imagesrc) => {
      this.setState({lightbox: true, lightboximg: imagesrc});
    }

  render() {
    return (
      
      <div ref={this.collectionRef} className="collectionList">
      {this.state.lightbox ? (
          <div id="lightbox"  onClick={this.showLightbox} >
            <div className="cover">
                <div className="img">
                  <img className="lightimg"
                      src={this.state.lightboximg}
                      alt="Image"
                    />
                    <p>*click anywhere to close</p>
                </div>
              </div>
            </div>
        ) : <div/>}
      
      {console.log(this.state)}
        {!this.state.loading ? (
          this.state.data.map(item => (
            <div key={item.id} style={{ opacity: 0 }}>
              <p />
              <div className="collectionNode" onClick={()=>{this.changeLightBox(item.acf.image.sizes.large)}}>
                <div className="collectionName">
                  <p>{item.title.rendered}</p>
                  <p className="dimensions">{item.acf.dimensions}</p>
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
          <div className="preloader" />
        )}
      </div>
    );
  }
}

export default CollectionList;
