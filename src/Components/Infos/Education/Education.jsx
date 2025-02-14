import { restoreStorage } from '../../../assets/storage';
import Experiences from '../../Elements/Experiences';

export default function Education() {

  const dataEx = [
    {
      id: crypto.randomUUID(),
      company: 'UniFEI',
      position: 'Ciências da Computação',
      startDate: '07/2004',
      endDate: '03/2006',
      desc: 'Estudos de lógica e fundamentos de programação em C e C++.'
    },
    {
      id: crypto.randomUUID(),
      company: 'UNIP',
      position: 'Administração de Empresas',
      startDate: '07/2007',
      endDate: '07/2011',
      desc: 'Bacharelado em Administração de Empresas.'
    }
  ]

  const dataEducation = () => (restoreStorage('education') === null)  ? dataEx : restoreStorage('education');

  return (
    <div className="row text-start">
      <Experiences title='Education and Courses' data={dataEducation} />
    </div>
  )
}