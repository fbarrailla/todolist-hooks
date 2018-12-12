import useStore from '../hooks/useStore';

export default function useSelector(selector) {
  const { state } = useStore();
  return selector(state);
}
