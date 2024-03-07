import { ILinkItem } from '@/components/LinkList/types';

const BASEURL: string = 'http://localhost:3000/';

const getLinkList = async (): Promise<ILinkItem[] | []> => {
  let response = await fetch(BASEURL + 'links');
  if (response.ok) {
    return await response.json();
  } else {
    console.error(`status: ${response.status}, response: ${response}`);
    return [];
  }
};

const getLinkById = async (id: number): Promise<ILinkItem | null> => {
  let response: Response = await fetch(BASEURL + `links/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    console.error(`status: ${response.status}, response: ${JSON.stringify(response)}`);
    return null;
  }
};

export const LinkAPI = {
  getLinkList,
  getLinkbyId: getLinkById,
};
