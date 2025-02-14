import { restoreStorage } from '../../../assets/storage';
import Experiences from '../../Elements/Experiences';
import arrDataEx from './professionalData.json';

export default function Professional() {

  const title = 'Professional Experiences';

  const expData = () => restoreStorage('professional') === null ?
                        arrDataEx : restoreStorage(title.split(" ")[0].toLowerCase());

  return (
    <div className="row text-start">
      <Experiences title={title} data={expData} />
    </div>
  )
}