import axios, {AxiosResponse} from 'axios';
import {store} from '../../states/store';

// export const baseUrl: string = 'https://incom-api-dev001.incom.id/';
// export const baseUrl: string = 'https://springhill-api.infinitec.id/';
export const baseUrl: string = 'https://prod-api001.incom.id/';
// export const baseUrl: string = 'https://microservices.174nd.xyz/';
// export const baseUrl: string = 'https://service.174nd.xyz/';

type Result = {
  data: any;
  status: number;
};

type Header = {
  Authorization: string;
};

const defaultHeader = (): Object => {
  const token = store.getState().auth.token;
  return {
    Authorization: 'Bearer ' + token,
  };
};

export const request = {
  get: async (prefix: string, header: any = null): Promise<Result> => {
    return axios
      .get(baseUrl + prefix, {
        headers: header !== null ? header : defaultHeader(),
      })
      .then(
        (res: AxiosResponse): Promise<Result> =>
          Promise.resolve({data: res.data, status: res.status}),
      )
      .catch((err: Error) => {
        return Promise.reject(err);
      });
  },
  patch: async (prefix: string, header: any = null): Promise<Result> => {
    return axios
      .patch(baseUrl + prefix, {
        headers: header !== null ? header : defaultHeader(),
      })
      .then(
        (res: AxiosResponse): Promise<Result> =>
          Promise.resolve({data: res.data, status: res.status}),
      )
      .catch((err: Error) => {
        return Promise.reject(err);
      });
  },
  post: async (
    prefix: string,
    body: Object,
    header: any = null,
  ): Promise<Result> => {
    return axios
      .post(baseUrl + prefix, body, {
        headers: header !== null ? header : defaultHeader(),
      })
      .then(
        (res: AxiosResponse): Promise<Result> =>
          Promise.resolve({data: res.data, status: res.status}),
      )
      .catch((err: Error) => {
        return Promise.reject(err);
      });
  },
  put: async (
    prefix: string,
    body: Object,
    header: any = null,
  ): Promise<Result> => {
    return axios
      .put(baseUrl + prefix, body, {
        headers: header !== null ? header : defaultHeader(),
      })
      .then(
        (res: AxiosResponse): Promise<Result> =>
          Promise.resolve({data: res.data, status: res.status}),
      )
      .catch((err: Error) => {
        return Promise.reject(err);
      });
  },
  delete: async (prefix: string, header: any = null): Promise<Result> => {
    return axios
      .delete(baseUrl + prefix, {
        headers: header !== null ? header : defaultHeader(),
      })
      .then(
        (res: AxiosResponse): Promise<Result> =>
          Promise.resolve({data: res.data, status: res.status}),
      )
      .catch((err: Error) => {
        return Promise.reject(err);
      });
  },
};
