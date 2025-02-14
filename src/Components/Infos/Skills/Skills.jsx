import { restoreStorage } from '../../../assets/storage';
import Abilities from '../../Elements/Abilities';

const dataEx = [
  { id: crypto.randomUUID(), text: 'HTML5' },
  { id: crypto.randomUUID(), text: 'CSS' },
  { id: crypto.randomUUID(), text: 'SCSS' },
  { id: crypto.randomUUID(), text: 'Javascript' },
  { id: crypto.randomUUID(), text: 'Webpack' },
  { id: crypto.randomUUID(), text: 'Bootstrap' },
  { id: crypto.randomUUID(), text: 'EsLint' },
  { id: crypto.randomUUID(), text: 'Linux' },
]

const dataSkills = () => (restoreStorage('skills') === null) ? 
                          dataEx : restoreStorage('skills');


export default function Skills() {

  return (
    <div className="row text-start">
      <Abilities title={'Skills'} listStyle={'grid2'} data={dataSkills()} />
    </div>
  )
}