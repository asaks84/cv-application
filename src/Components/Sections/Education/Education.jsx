import { restoreStorage } from '../../../assets/storage';
import Experiences from '../../Elements/Experiences';
import dataEx from './educationData.json'

export default function Education() {

  const dataEducation = () => (restoreStorage('education') === null)  ? dataEx : restoreStorage('education');

  return (
    <div className="row text-start">
      <Experiences title='Education' data={dataEducation} />
    </div>
  )
}