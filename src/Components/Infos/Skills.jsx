import { restoreStorage } from '../../assets/storage';
import Abilities from '../Elements/Abilities';

const dataEx = [
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, libero provident rerum quo hic placeat, veritatis soluta suscipit' },
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, libero provident' },
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: crypto.randomUUID(), text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]

const dataSkills = () => (restoreStorage('skills') === null) ? dataEx : JSON.parse(restoreStorage('skills'));


export default function Skills() {

  return (
    <div className="row text-start">
      <Abilities title={'Skills'} listStyle={'grid2'} data={dataSkills()} />
    </div>
  )
}