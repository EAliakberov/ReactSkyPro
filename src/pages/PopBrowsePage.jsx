import { useParams } from 'react-router-dom';
import { PopBrowse } from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = ({ userData, setTasks }) => {
    const { id } = useParams();
    return <PopBrowse popBrowseId={id} userData={userData} setTasks={setTasks} />;
};
