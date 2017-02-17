import React from 'react'
import {connect} from 'react-redux'

const TodosCounter = ({todos}) => (
    <p>
        {todos.length}
    </p>
);

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(
    mapStateToProps
)(TodosCounter);