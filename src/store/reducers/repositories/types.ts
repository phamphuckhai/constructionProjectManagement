/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  AUTH = '@repositories/AUTH',
  AUTH_SUCCESS= '@repositories/AUTH_SUCCESS',
}

/**
 * Data types
 */
export interface Repository {
  id?: number
  name?: string
  model?: any
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
  readonly token?: string
}

