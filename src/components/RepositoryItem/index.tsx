import React from 'react';

import { Repository } from '../../store/reducers/repositories/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  console.log("hello there");
  
  return <li>{repository.name}</li>;
}

