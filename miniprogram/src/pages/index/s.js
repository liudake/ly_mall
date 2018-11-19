import http from '../../api/http';

import { ByTag } from './ByTag';

export function getByTag(params = '') {
  // const { method, path } = ByTag;

  return http['GET']('/v1/getByTag', params);
}
