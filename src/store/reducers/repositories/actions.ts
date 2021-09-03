import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const auth = (username: string, password: string) => action(RepositoriesTypes.AUTH, {username, password});

export const authSuccess = (token: string) => action(RepositoriesTypes.AUTH_SUCCESS, {token});


