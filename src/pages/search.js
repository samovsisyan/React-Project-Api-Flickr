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









import React, {Component} from 'react';
import axios from 'axios';

// const API_KEY = '6782ed995849dfbda1ce0c35459ef8da'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: {},

        };
    }

    componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6782ed995849dfbda1ce0c35459ef8da&text=cat&format=json&nojsoncallback=1`)
            .then(res => {
                this.setState({persons:res.data.photos.photo})
            });
    }

    render() {
        const data = this.state.persons;
        console.log(data);

        return (
            <div>
                {Object.keys(data).map((index,key) =>
                    <img src={`http://farm${data[index]['farm']}.staticflickr.com/${data[index]['server']}/${data[index]['id']}_${data[index]['secret']}.jpg`}
                         key={`${data[index]['id']}`} alt={`${data[index]['title']}`} width={200} height={200}/>
                )}

            </div>
        );
    }
}

export default Search;