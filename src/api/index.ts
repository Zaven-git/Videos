import axios, { AxiosResponse } from 'axios';

export async function getAllVideos(): Promise<AxiosResponse<Item[]>> {
  return await axios
    .get('http://public.connectnow.org.uk/applicant-test/')
    .then((res) => res);
}
