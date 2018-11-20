import http from '../../api/http';

import { ByTagConfig } from './byTagConfig';

export function getByTag(params = '') {
  const { method, path } = ByTagConfig;

  return http[method](path, params);
}
