import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
//update and rerender self
class App extends React.Component{
    state = { videos : [] ,selectedVideo:null  };
    componentDidMount(){
        //default search
        this.onTermSubmit('Reactjs')
    }

    onTermSubmit = async term =>{
        //response 에 결과 값이 리턴됨
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        
       this.setState({
           videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video})
    }
    render(){
        return(
          
            <div className="ui container">
                    {/* onTerm이라고 지정 해도됨 */}
              <SearchBar onFormSubmit={this.onTermSubmit}/>   
              <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                    {/*여기서 props준것들이 VideoList의 매개변수에들어감  */}
                    <VideoList onVideoSelect = {this.onVideoSelect} videos ={this.state.videos}/>
                    </div>
                </div>
               </div>
            </div>
        );
    }
}
export default App;