import { useAppDispatch, useAppSelector } from '@/Store/hooks';
import { FC, useEffect } from 'react';
import { fetchLinkList } from './LinkListSlice';

export const LinkList: FC = () => {
  const dispatch = useAppDispatch();
  const linkList = useAppSelector((state) => state.linkList);

  // let [tmp, setTmp] = useState<ILinkItem[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getLinkList();
  //     setTmp(response);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchLinkList());
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(linkList, null, 4)}</pre>
    </div>
  );
};
