import React from 'react';

class SearchBar extends React.Component {
    state ={
        term : ""
    }
    onInputChange = (event) =>{
        this.setState({
            term:event.target.value
        })
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        //make sure we call callbck from parent component
        //App.js 의 onFormSumit(검색어) 실행
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>            
            </div>
        )
    }
}

export default SearchBar;