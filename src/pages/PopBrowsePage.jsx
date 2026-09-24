import { useParams } from 'react-router-dom';
import { PopBrowse } from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = () => {
    const { id } = useParams();
    return <PopBrowse popBrowseId={id} />;
};
