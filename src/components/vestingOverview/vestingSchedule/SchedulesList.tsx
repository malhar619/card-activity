import { IVestingSchedule } from '../../../interfaces/vestingSchedule.interface';
import { ScheduleCard } from './ScheduleCard';

interface Props {
    data: IVestingSchedule[];
}

export const SchedulesList = ({ data }: Props) => {
    return (
        <div className="w-full mb-4">
            {data.map((vestingSchedule) => (
                <ScheduleCard vestingSchedule={vestingSchedule} />
            ))}
        </div>
    );
};
