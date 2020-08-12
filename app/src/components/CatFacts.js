import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFacts} from '../store';
import styled from 'styled-components';

const Fact = styled.p`
margin: 2% auto;
padding: 1%;
width: 50%;
background-color: lightpink;
color: white;
border: 2px solid lightblue;
border-radius: 5px;
`;


const CatFacts = props => {
useEffect(() => {
    props.fetchFacts()
}, []);

return (
    <div>
        {props.facts.map(fact => {
            return <Fact>{fact.text}</Fact>
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