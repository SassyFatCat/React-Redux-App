import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFacts} from '../store';

const CatFacts = props => {
useEffect(() => {
    props.fetchFacts()
}, []);

return (
    <div>
        {props.facts.map(fact => {
            return <p>{fact.text}</p>
        })}
    </div>
)
}

export default connect(state => {
    return {
        facts: state.facts,
        error: state.error,
        loading: state.loading
    }
}, {fetchFacts})(CatFacts)