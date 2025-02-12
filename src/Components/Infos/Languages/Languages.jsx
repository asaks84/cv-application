import { restoreStorage } from '../../../assets/storage';
import Abilities from '../../Elements/Abilities';

export default function Languages() {

  const dataEx = [
    {id: crypto.randomUUID(), text: 'Inglês Intermediário'}
  ]

  const dataLanguages = () => (restoreStorage('languages') === null) ?
                               dataEx : restoreStorage('languages');

  return (
    <div className="row text-start">
      <Abilities title={'Languages'} listStyle={'grid2'} data={dataLanguages()} />
    </div>
  )
}