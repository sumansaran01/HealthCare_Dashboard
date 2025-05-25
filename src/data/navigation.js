import { FiGrid, FiClock, FiCalendar, FiBarChart2, FiMessageCircle, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { LuTestTube } from 'react-icons/lu';

const navigationItems = [
  { icon: FiGrid, label: 'Dashboard', active: true },
  { icon: FaHistory, label: 'History' },
  { icon: FiCalendar, label: 'Calendar' },
  { icon: FiClock, label: 'Appointments' },
  { icon: FiBarChart2, label: 'Statistics' },
  { icon: LuTestTube, label: 'Tests' },
  { icon: FiMessageCircle, label: 'Chat' },
  { icon: FiHelpCircle, label: 'Support' },
  { icon: FiSettings, label: 'Setting' }
];

export default navigationItems;
