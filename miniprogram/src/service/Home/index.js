import http from '../../api/http';

import { getTabConfig } from './homeConfig';

export function getTabMall(params) {
  const { method, path } = getTabConfig;

  return http[method](path, params);
}
