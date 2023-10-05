import axios, { AxiosResponse } from 'axios';
import type { VideItem } from '../types';
export async function getAllVideos(): Promise<AxiosResponse<VideItem[]>> {
  return await axios
    .get('http://public.connectnow.org.uk/applicant-test/')
    .then((res) => res);
}
