import { restoreStorage } from '../../../assets/storage';
import Abilities from '../../Elements/Abilities';
import dataEx from './languagesData.json'

export default function Languages() {

  const dataLanguages = () => (restoreStorage('languages') === null) ?
                               dataEx : restoreStorage('languages');

  return (
    <div className="row text-start">
      <Abilities title={'Languages'} listStyle={'grid2'} data={dataLanguages()} />
    </div>
  )
}