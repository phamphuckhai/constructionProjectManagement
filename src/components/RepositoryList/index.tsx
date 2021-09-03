import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/reducers/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/reducers/repositories/actions';

import RepositoryItem from '../RepositoryItem';


interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  auth(username: string, password: string): void
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { auth } = this.props;

    auth("phamphuckhai","khaideptrai");
  }

  render() {

    const { repositories } = this.props;
    return (
      <ul>
        {/* {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))} */}
      </ul>
    );
  }

}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);

