// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: [],
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//     componentDidMount() {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//             .then(res => {
//                 console.log(res);
//                 this.setState({persons: res.data})
//
//             })
//     }


//
//     render() {
//
//         return (
//             <div>
//                 <div>{this.state.persons}</div>
//                 <ul>
//                     {/*{this.state.persons.forEach(([key,value]) => (*/}
//                     {/*    <li key={key.id}>{value}</li>*/}
//                     {/*))}*/}
//                 </ul>
//
//             </div>
//         );
//     }
//
//
// }
//
// export default Search;

/////////////////////////////////////////////////////////////////

// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: [],
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//     componentDidMount() {
//          axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//             .then(res => {
//                 let createJsonData = res.data.replace(/jsonFlickrApi\(|\)/g, '');
//                 this.setState({persons: JSON.parse(createJsonData)})
//             });
//
//     }
//
//
//     render() {
//         let data = this.state.persons;
//         const dataPhotos = data.photos;
//
//
//         console.log(dataPhotos);
//
//         // const Link =[];
//         // Link.push(dataPhotos);
//         // const b = Link[0]
//         // // console.log(Link[0].photo);
//         // // console.log(Link);
//         // console.log(b);
//
//
//
//
//         return (
//             <div>
//                 {/*{dataPhotos.map((item) => {*/}
//                 {/*    <ul>{item.page}</ul>*/}
//                 {/*})}*/}
//
//                 {/*{data['photos'].map((item, key) =>*/}
//                 {/*    <img src={https://www.flickr.com/photos/${item.owner}/${item.id}/} key={${item.id}} alt={${item.title}}/>*/}
//                 {/*)}*/}
//                 {/*{Link.map((value, key) => (*/}
//                 {/*    <li key={key.page}>{value}</li>*/}
//                 {/*))}*/}
//
//             {/*    b.forEach((element) => {*/}
//             {/*    console.log(element);*/}
//             {/*});*/}
//
//             </div>
//
//         );
//     }
//
//
// }
//
// export default Search;


//////////////////////////////////////////////////////////////////////////

///////////////////////11111111111111111111111111111111111
// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: {},
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//         componentDidMount() {
//             axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//                 .then(res => {
//                     let createJsonData = res.data.replace(/jsonFlickrApi\(|\{\"photos\"\:|\,\"stat\"\:\"ok\"\}\)/g, '');
//                     this.setState({persons: JSON.parse(createJsonData)})
//                 });
//         }
//
//     // async componentDidMount() {
//     //     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json&nojsoncallback=1`)
//     // .then(res => {
//     //         this.setState({persons:res.data.photos})
//     //     });
//     // }
//
//
//     render() {
//         let data = this.state.persons.photo;
//         console.log(data);
//
//         let ArrayDataId =[];
//
//         for (let key in data) {
//             let dataId = data[key]['id']
//             let dataOwner = data[key]['owner']
//             ArrayDataId.push([dataId, dataOwner]);
//
//             // console.log(dataId)
//             // console.log(dataOwner)
//         }
//         console.log(ArrayDataId);
//
//
//
//         return (
//             <div>
//                 {/*{ArrayDataId.map((id, value, array ) =>*/}
//                 {/*    <div key={id}>{id[0]}, {array[1]}  </div>*/}
//                 {/*)}*/}
//
//                 {ArrayDataId.map((index,key) =>
//
//                         <div>
//
//                             {`https://www.flickr.com/photos/${index[1]}/${index[0]}/`}
//                         </div>
//
//                 )}
//
//
//
//                 {/*{ArrayDataId.map((id, key, owner) =>*/}
//                 {/*    <img src={`https://www.flickr.com/photos/${owner[0]}/${id[1]}/`}*/}
//                 {/*         key={`${key}`} alt={`${id[0]}`}/>*/}
//
//                 {/*    */}
//                 {/*)}*/}
//             </div>
//         );
//     }
//
//
// }
//
// export default Search;


// import React, {Component} from 'react';
// import axios from 'axios';
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//      constructor(props) {
//         super(props);
//         this.state =
//             {
//                 imagesData: {},
//                 searchValue: 'owl',
//                 input: 'cat',
//                 input1: 'dog',
//
//             };
//     }
//
//
//
// handleChange = ({target: {value}}) => {
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${value}&format=json&nojsoncallback=1&per_page=10`)
//         .then(res => {
//              this.setState({persons:res.data.photos})
//             }
//         );
//
//     this.setState({searchValue: value})
// };
//     handleClick = () => {
//
//         const inputVal = [];
//         const inputState = this.state.input
//         inputVal.push(inputState);
//         // console.log(inputVal[0]);
//         this.setState({value: inputVal})
//         // console.log(this.state.value);
//
//
//
//     };
//
//
//     // fetchData = async (page) => {
//     //     this.setState({data: {}})
//     //
//     //     const data = await fetch('https://reqres.in/api/unknown?page=' + page)
//     //         .then(r => r.json());
//     //
//     //     this.setState({data})
//
//     // }
//
//
//     componentDidMount = (val) => {
//
//         this.setState({value:{}});
//        const data =  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.value}/&format=json&nojsoncallback=1`)
//             .then(res => {
//                 this.setState({persons: res.data.photos.photo})
//             });
//
// this.setState({value: data})
//         console.log(this.state.value);
//
//     }
//
//
//     render() {
//         const data = this.state.persons;
//         // console.log(data);
//         // console.log(this.state.input1);
//         // console.log(this.state.val);
//
//
//         return (
//             <div id="chief">
//                 <div>
//
//                     <input type="text"  className="search" onChange={this.handleChange}/>
//                     <button className="button" onClick={this.handleClick}>Search</button>
//                 </div>
//                 <div className="images">
//                     {Object.keys(data).map((index, key) =>
//                         <img
//                             src={`http://farm${data[index]['farm']}.staticflickr.com/${data[index]['server']}/${data[index]['id']}_${data[index]['secret']}.jpg`}
//                             key={`${data[index]['id']}`} alt={`${data[index]['title']}`}/>
//                     )}
//                 </div>
//                 <div className="chiefDnD">
//                     <div className="Drag">
//                         Cat
//                     </div>
//
//                     <div className="Drop">
//                         Dog
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Search;


/////////411111111111111111111111111111111111111111111111111111111111111

// import React, {Component} from 'react';
// import axios from 'axios';
// import Trash from './trash'
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state =
//             {
//                 imagesData: {},
//                 searchValue: 'owl',
//                 input: 'cat',
//                 input1: 'dog',
//                 page: 1,
//                 totalPage: 0,
//                 clickPhotoUrl : '/images/embedded-px-px.png',
//                 clickPhoto : '',
//             };
//     }
//
//     handleChange = ({target: {value}}) => {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${value}&format=json&nojsoncallback=1&per_page=10`)
//             .then(res => {
//                     this.setState(
//                         {
//                             imagesData: 'photos' in res.data ? res.data.photos.photo : {},
//                         }
//                     )
//                 }
//             );
//
//         this.setState({searchValue: value})
//     };
//
//
//     handleClick = () => {
//         const {searchValue, page, totalPage, imagesData} = this.state;
//         let nextPage = page < totalPage ? page + 1 : page;
//
//         axios.get(
//             `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${searchValue}&format=json&page=${nextPage}&per_page=101&nojsoncallback=1`
//             `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${searchValue}&format=json&page=${nextPage}&per_page=10&nojsoncallback=1`
//         ).then(res => {
//                 let newImages = 'photos' in res.data ? res.data.photos.photo : {};
//
//                 this.setState(
//                     {
//                         imagesData: newImages,
//                         page: nextPage
//                     }
//                 )
//             }
//         )
//     };
//
//
//     componentDidMount() {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.searchValue}&format=json&nojsoncallback=1&per_page=101`)
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.searchValue}&format=json&nojsoncallback=1&per_page=10`)
//             .then(res => {
//                     this.setState(
//                         {
//                             imagesData: 'photos' in res.data ? res.data.photos.photo : {},
//                             totalPage: 'photos' in res.data ? res.data.photos.pages : 0,
//                             totalPage: 'photos' in res.data ? res.data.photos.total : 0,
//                         }
//                     )
//                 }
//             )
//     }
//
//
//     handleClickPhoto = () => {
//         this.setState({clickPhotoUrl: this.state.clickPhotoUrl})
//
//     };
//
//
//
//
//     render() {
//         const {imagesData, searchValue, clickPhotoUrl} = this.state;
//         const clickPhoto = [];
//         clickPhoto.push(clickPhotoUrl);
//
//         // console.log(clickPhoto);
//
//
//
//     render() {
//         const {imagesData, searchValue} = this.state;
//         return (
//             <div id="chief">
//                 <div>
//                     <input type="text" className="search" onChange={this.handleChange} value={searchValue}/>
//                 </div>
//                 <div className="images">
//                     {
//                         Object.keys(imagesData).map((index, key) =>
//                             <img
//                                 src={`http://farm${imagesData[index]['farm']}.staticflickr.com/${imagesData[index]['server']}/${imagesData[index]['id']}_${imagesData[index]['secret']}.jpg`}
//                                 key={`${imagesData[index]['id']}`} alt={`${imagesData[index]['title']}`}/>
//                         )
//                     }
//                     <div>
//                         {'0' in imagesData ? <button onClick={this.handleClick}>Next Page</button> : ''}
//                     </div>
//                 </div>
//                 <div className="chiefDnD">
//                     <div className="Drag">Cat</div>
//                     <div className="Drop">Dog</div>
//                 </div>
//                 {clickPhoto.map((img)=> (
//                 <div key={img}>
//                     <img src={img} alt="1"
//                     onClick={this.handleClickPhoto}
//                     />
//                 </div>
//                 ))}
//
//                 <Trash items={this.state.clickPhoto}/>
//             </div>
//         )
//     }
// }
//
// export default Search;

// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: [],
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//     componentDidMount() {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//             .then(res => {
//                 console.log(res);
//                 this.setState({persons: res.data})
//
//             })
//     }


//
//     render() {
//
//         return (
//             <div>
//                 <div>{this.state.persons}</div>
//                 <ul>
//                     {/*{this.state.persons.forEach(([key,value]) => (*/}
//                     {/*    <li key={key.id}>{value}</li>*/}
//                     {/*))}*/}
//                 </ul>
//
//             </div>
//         );
//     }
//
//
// }
//
// export default Search;

/////////////////////////////////////////////////////////////////

// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: [],
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//     componentDidMount() {
//          axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//             .then(res => {
//                 let createJsonData = res.data.replace(/jsonFlickrApi\(|\)/g, '');
//                 this.setState({persons: JSON.parse(createJsonData)})
//             });
//
//     }
//
//
//     render() {
//         let data = this.state.persons;
//         const dataPhotos = data.photos;
//
//
//         console.log(dataPhotos);
//
//         // const a =[];
//         // a.push(dataPhotos);
//         // const b = a[0]
//         // // console.log(a[0].photo);
//         // // console.log(a);
//         // console.log(b);
//
//
//
//
//         return (
//             <div>
//                 {/*{dataPhotos.map((item) => {*/}
//                 {/*    <ul>{item.page}</ul>*/}
//                 {/*})}*/}
//
//                 {/*{data['photos'].map((item, key) =>*/}
//                 {/*    <img src={https://www.flickr.com/photos/${item.owner}/${item.id}/} key={${item.id}} alt={${item.title}}/>*/}
//                 {/*)}*/}
//                 {/*{a.map((value, key) => (*/}
//                 {/*    <li key={key.page}>{value}</li>*/}
//                 {/*))}*/}
//
//             {/*    b.forEach((element) => {*/}
//             {/*    console.log(element);*/}
//             {/*});*/}
//
//             </div>
//
//         );
//     }
//
//
// }
//
// export default Search;


//////////////////////////////////////////////////////////////////////////

///////////////////////11111111111111111111111111111111111
// import React, {Component} from 'react';
// import axios from 'axios';
//
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // loading: true,
//             // person: null,
//             persons: {},
//         };
//     }
//
//
//     // async componentDidMount() {
//     //
//     //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&key=${API_KEY}&text=owl&format=json`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({ person: data});
//     // }
//
//         componentDidMount() {
//             axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json`)
//                 .then(res => {
//                     let createJsonData = res.data.replace(/jsonFlickrApi\(|\{\"photos\"\:|\,\"stat\"\:\"ok\"\}\)/g, '');
//                     this.setState({persons: JSON.parse(createJsonData)})
//                 });
//         }
//
//     // async componentDidMount() {
//     //     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=owl&format=json&nojsoncallback=1`)
//     // .then(res => {
//     //         this.setState({persons:res.data.photos})
//     //     });
//     // }
//
//
//     render() {
//         let data = this.state.persons.photo;
//         console.log(data);
//
//         let ArrayDataId =[];
//
//         for (let key in data) {
//             let dataId = data[key]['id']
//             let dataOwner = data[key]['owner']
//             ArrayDataId.push([dataId, dataOwner]);
//
//             // console.log(dataId)
//             // console.log(dataOwner)
//         }
//         console.log(ArrayDataId);
//
//
//
//         return (
//             <div>
//                 {/*{ArrayDataId.map((id, value, array ) =>*/}
//                 {/*    <div key={id}>{id[0]}, {array[1]}  </div>*/}
//                 {/*)}*/}
//
//                 {ArrayDataId.map((index,key) =>
//
//                         <div>
//
//                             {`https://www.flickr.com/photos/${index[1]}/${index[0]}/`}
//                         </div>
//
//                 )}
//
//
//
//                 {/*{ArrayDataId.map((id, key, owner) =>*/}
//                 {/*    <img src={`https://www.flickr.com/photos/${owner[0]}/${id[1]}/`}*/}
//                 {/*         key={`${key}`} alt={`${id[0]}`}/>*/}
//
//                 {/*    */}
//                 {/*)}*/}
//             </div>
//         );
//     }
//
//
// }
//
// export default Search;


// import React, {Component} from 'react';
// import axios from 'axios';
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//      constructor(props) {
//         super(props);
//         this.state =
//             {
//                 imagesData: {},
//                 searchValue: 'owl',
//                 input: 'cat',
//                 input1: 'dog',
//
//             };
//     }
//
//
//
// handleChange = ({target: {value}}) => {
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${value}&format=json&nojsoncallback=1&per_page=10`)
//         .then(res => {
//              this.setState({persons:res.data.photos})
//             }
//         );
//
//     this.setState({searchValue: value})
// };
//     handleClick = () => {
//
//         const inputVal = [];
//         const inputState = this.state.input
//         inputVal.push(inputState);
//         // console.log(inputVal[0]);
//         this.setState({value: inputVal})
//         // console.log(this.state.value);
//
//
//
//     };
//
//
//     // fetchData = async (page) => {
//     //     this.setState({data: {}})
//     //
//     //     const data = await fetch('https://reqres.in/api/unknown?page=' + page)
//     //         .then(r => r.json());
//     //
//     //     this.setState({data})
//
//     // }
//
//
//     componentDidMount = (val) => {
//
//         this.setState({value:{}});
//        const data =  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.value}/&format=json&nojsoncallback=1`)
//             .then(res => {
//                 this.setState({persons: res.data.photos.photo})
//             });
//
// this.setState({value: data})
//         console.log(this.state.value);
//
//     }
//
//
//     render() {
//         const data = this.state.persons;
//         // console.log(data);
//         // console.log(this.state.input1);
//         // console.log(this.state.val);
//
//
//         return (
//             <div id="chief">
//                 <div>
//
//                     <input type="text"  className="search" onChange={this.handleChange}/>
//                     <button className="button" onClick={this.handleClick}>Search</button>
//                 </div>
//                 <div className="images">
//                     {Object.keys(data).map((index, key) =>
//                         <img
//                             src={`http://farm${data[index]['farm']}.staticflickr.com/${data[index]['server']}/${data[index]['id']}_${data[index]['secret']}.jpg`}
//                             key={`${data[index]['id']}`} alt={`${data[index]['title']}`}/>
//                     )}
//                 </div>
//                 <div className="chiefDnD">
//                     <div className="Drag">
//                         Cat
//                     </div>
//
//                     <div className="Drop">
//                         Dog
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Search;


/////////411111111111111111111111111111111111111111111111111111111111111

// import React, {Component} from 'react';
// import axios from 'axios';
// import Trash from './trash'
//
// // const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'
//
// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state =
//             {
//                 imagesData: {},
//                 searchValue: 'owl',
//                 input: 'cat',
//                 input1: 'dog',
//                 page: 1,
//                 totalPage: 0,
//                 clickPhotoUrl : '/images/embedded-px-px.png',
//                 clickPhoto : '',
//             };
//     }
//
//     handleChange = ({target: {value}}) => {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${value}&format=json&nojsoncallback=1&per_page=10`)
//             .then(res => {
//                     this.setState(
//                         {
//                             imagesData: 'photos' in res.data ? res.data.photos.photo : {},
//                         }
//                     )
//                 }
//             );
//
//         this.setState({searchValue: value})
//     };
//
//
//     handleClick = () => {
//         const {searchValue, page, totalPage, imagesData} = this.state;
//         let nextPage = page < totalPage ? page + 1 : page;
//
//         axios.get(
//             `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${searchValue}&format=json&page=${nextPage}&per_page=101&nojsoncallback=1`
//             `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${searchValue}&format=json&page=${nextPage}&per_page=10&nojsoncallback=1`
//         ).then(res => {
//                 let newImages = 'photos' in res.data ? res.data.photos.photo : {};
//
//                 this.setState(
//                     {
//                         imagesData: newImages,
//                         page: nextPage
//                     }
//                 )
//             }
//         )
//     };
//
//
//     componentDidMount() {
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.searchValue}&format=json&nojsoncallback=1&per_page=101`)
//         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.searchValue}&format=json&nojsoncallback=1&per_page=10`)
//             .then(res => {
//                     this.setState(
//                         {
//                             imagesData: 'photos' in res.data ? res.data.photos.photo : {},
//                             totalPage: 'photos' in res.data ? res.data.photos.pages : 0,
//                             totalPage: 'photos' in res.data ? res.data.photos.total : 0,
//                         }
//                     )
//                 }
//             )
//     }
//
//
//     handleClickPhoto = () => {
//         this.setState({clickPhotoUrl: this.state.clickPhotoUrl})
//
//     };
//
//
//
//
//     render() {
//         const {imagesData, searchValue, clickPhotoUrl} = this.state;
//         const clickPhoto = [];
//         clickPhoto.push(clickPhotoUrl);
//
//         // console.log(clickPhoto);
//
//
//
//     render() {
//         const {imagesData, searchValue} = this.state;
//         return (
//             <div id="chief">
//                 <div>
//                     <input type="text" className="search" onChange={this.handleChange} value={searchValue}/>
//                 </div>
//                 <div className="images">
//                     {
//                         Object.keys(imagesData).map((index, key) =>
//                             <img
//                                 src={`http://farm${imagesData[index]['farm']}.staticflickr.com/${imagesData[index]['server']}/${imagesData[index]['id']}_${imagesData[index]['secret']}.jpg`}
//                                 key={`${imagesData[index]['id']}`} alt={`${imagesData[index]['title']}`}/>
//                         )
//                     }
//                     <div>
//                         {'0' in imagesData ? <button onClick={this.handleClick}>Next Page</button> : ''}
//                     </div>
//                 </div>
//                 <div className="chiefDnD">
//                     <div className="Drag">Cat</div>
//                     <div className="Drop">Dog</div>
//                 </div>
//                 {clickPhoto.map((img)=> (
//                 <div key={img}>
//                     <img src={img} alt="1"
//                     onClick={this.handleClickPhoto}
//                     />
//                 </div>
//                 ))}
//
//                 <Trash items={this.state.clickPhoto}/>
//             </div>
//         )
//     }
// }
//
// export default Search;




import React, {Component} from 'react';
import axios from 'axios';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                imagesData: {},
                searchValue: 'dog',
                input: 'cat',
                input1: 'dog',
                page: 1,
                totalPage: 0,
                clickPhotoUrl: '/images/embedded-px-px.png',
                clickPhoto: '',
            };
    }


    handleChange = ({target: {value}}) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${value}&format=json&nojsoncallback=1&per_page=40`)
            .then(res => {
                    this.setState(
                        {
                            imagesData: 'photos' in res.data ? res.data.photos.photo : {},
                        }
                    )
                }
            );

        this.setState({searchValue: value})
    };


    handleClick = () => {
        const {searchValue, page, totalPage} = this.state;
        let nextPage = page < totalPage ? page + 1 : page;

        axios.get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${searchValue}&format=json&page=${nextPage}&per_page=40&nojsoncallback=1`
        ).then(res => {
                let newImages = 'photos' in res.data ? res.data.photos.photo : {};

                this.setState(
                    {
                        imagesData: newImages,
                        page: nextPage
                    }
                )
            }
        )
    };


    componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=${this.state.searchValue}&format=json&nojsoncallback=1&per_page=40`)
            .then(res => {
                    this.setState(
                        {
                            imagesData: 'photos' in res.data ? res.data.photos.photo : {},
                            totalPage: 'photos' in res.data ? res.data.photos.total : 0
                        }
                    )
                }
            )

    }



    render() {
        const {imagesData, searchValue, clickPhotoUrl} = this.state;
        const clickPhoto = [];
        clickPhoto.push(clickPhotoUrl);

        return (
            <div id="chief">
                {/*<div>*/}
                {/*    <input type="text" className="search" onChange={this.handleChange} value={searchValue}/>*/}
                {/*</div>*/}

                <div className="s010">
                    <form>
                        <div className="inner-form">
                            <div className="basic-search">
                                <div className="input-field">
                                    <input id="search" type="text"
                                           placeholder="Type Keywords"
                                           onChange={this.handleChange}
                                           value={searchValue}/>
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="images">
                    {
                        Object.keys(imagesData).map((index, key) =>
                            <img
                                src={`http://farm${imagesData[index]['farm']}.staticflickr.com/${imagesData[index]['server']}/${imagesData[index]['id']}_${imagesData[index]['secret']}.jpg`}
                                key={`${imagesData[index]['id']}`} alt={`${imagesData[index]['title']}`}/>
                        )
                    }
                    <div>
                        {'0' in imagesData ?
                            <button className="nextPage" onClick={this.handleClick}>
                                <p>
                                    >
                                </p>
                            </button>
                            : ''}

                    </div>

                </div>
                <div className="chiefDnD">
                    <div className="Drag">Cat</div>
                    <div className="Drop">Dog</div>
                </div>


                {/*{clickPhoto.map((img)=> (*/}
                {/*<div key={img}>*/}
                {/*    <img src={img} alt="1"*/}
                {/*    onClick={this.handleClickPhoto}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*))}*/}
            </div>
        )
    }
}

export default Search;