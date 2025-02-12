import { restoreStorage } from '../../../assets/storage';
import Experiences from '../../Elements/Experiences';

export default function Professional() {

  const arrDataEx = [{
    id: crypto.randomUUID(),
    startDate: '03/2007',
    endDate: '05/2010',
    company: 'King Propaganda',
    position: 'Front End Junior',
    desc: 'Desenvolvimento de sites para os clientes da agência de propaganda King Propaganda. Como pontos fortes, desenvolvimento do site do Rivieras Hotel entre outros. Desenvolvia HTML e CSS e pequenos ajustes em javascript com jQuery.'
  }];

  const title = 'Professional Experiences';

  const expData = () => restoreStorage('professional') === null ?
                        arrDataEx : restoreStorage(title.split(" ")[0].toLowerCase());

  return (
    <div className="row text-start">
      <Experiences title={title} data={expData} />
    </div>
  )
}