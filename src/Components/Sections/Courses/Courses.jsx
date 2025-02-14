import { restoreStorage } from '../../../assets/storage';
import Experiences from '../../Elements/Experiences';
import dataEx from './coursesData.json';

export default function Education() {

  const dataCourses = () => (restoreStorage('courses') === null)  ? dataEx : restoreStorage('courses');

  return (
    <div className="row text-start">
      <Experiences title='Courses' data={dataCourses} />
    </div>
  )
}