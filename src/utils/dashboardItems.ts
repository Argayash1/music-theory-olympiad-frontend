
import UserIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import ReportIcon from '@mui/icons-material/Report';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HistoryIcon from '@mui/icons-material/History';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const menuIcons = [NewspaperIcon, UserIcon, AccountTreeIcon, MusicNoteIcon, HeadsetIcon, VideoStableIcon, ReportIcon, ArticleIcon, HistoryIcon]

export const dashboardItems = [
    { name: 'Об олимпиаде', path: '/admin/aboutMusOlymp', icon: menuIcons[5] },
    { name: 'Объявления', path: '/admin/adverts', icon: menuIcons[0] },
    { name: 'Материалы для подготовки', path: '/admin/prepMaterials', icon: menuIcons[1] },
    { name: 'Архив', path: '/admin/archive', icon: menuIcons[2] },
    { name: 'Результты', path: '/admin/scores', icon: menuIcons[3] },
    { name: 'Жюри', path: '/admin/audios', icon: menuIcons[4] },
]