import {useAppSelector} from '@/Store/hooks';

export const LinkList = () => {
  const linkList = useAppSelector((state) => state.linkList.linkItems);

  return <pre>{JSON.stringify(linkList, null, 2)}</pre>;
};
