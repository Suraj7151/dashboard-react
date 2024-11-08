
import { faArrowTrendUp, faMessage, faUsers, faGear, faInfo, faRightToBracket, faBell, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import sandbox from './assets/codesandbox.png';
import user from './assets/User.png'
import sellerImage from './assets/Rectangle 5973.png';
import social from './assets/Rectangle 6260.png'
const links =[
    { id: 1, icon: sandbox},
    { id: 2, icon: faArrowTrendUp },
    { id: 3, icon: faMessage },
    { id: 4, icon: faUsers },
    { id: 5, icon: faGear },
    { id: 6, icon: faInfo },
    { id: 7, icon: faRightToBracket },
]

const notifications = [
    {id:1, icon: faBell},
    {id:2, icon: faMessage},
    {id:3, icon: user}
]

const tasks = [
    {id:1, heading: "Mobile Account Setting", para:"Lorem ipsum dolor sit amet consectetur. Ac tempus egestas cursus integer amet.", completed:"2/4", messages:3, attachment:3, option:faEllipsisVertical, bgColor:"#0075FF", color: "#FFFFFF"},
    {id:2, heading: "Mobile Account Setting", para:"Lorem ipsum dolor sit amet consectetur. Ac tempus egestas cursus integer amet.", completed:"2/4", messages:3, attachment:3, option:faEllipsisVertical, bgColor:"#F1F1F1", color: "#999EA0", headingColor:"black"},
    {id:3, heading: "Mobile Account Setting", para:"Lorem ipsum dolor sit amet consectetur. Ac tempus egestas cursus integer amet.", completed:"2/4", messages:3, attachment:3, option:faEllipsisVertical, bgColor:"#F1F1F1", color: "#999EA0", headingColor:"black"},
]

const products = [
    { id: 1, name: 'Crop Nutrition', orderTime: '16 Oct, 2023', views: '176.8 K', status: '70%', statusColor: '#FFAE06', image:user, social:social },
    { id: 2, name: 'Crop Protection', orderTime: '16 Oct, 2023', views: '176.8 K', status: '22%', statusColor: 'red', image:user, social:social  },
    { id: 3, name: 'Service', orderTime: '16 Oct, 2023', views: '176.8 K', status: '100%', statusColor: 'green', image:user, social:social  },
  ];

const sellers = [
    { id: 1, name: 'Karman Chair', para: 'Lorem ipsum dolor sit amet cons.', amount: '$19,212', duration: 'Per Month', image:sellerImage },
    { id: 2, name: 'LSM Conference Table', para: 'Lorem ipsum dolor sit amet cons.', amount: '$12,212', duration: 'Per Month', image:sellerImage },
    { id: 3, name: 'JAKU Chair', para: 'Lorem ipsum dolor sit amet cons.', amount: '$10,212', duration: 'Per Month', image:sellerImage },
    { id: 4, name: 'Antenna® Simple Table', para: 'Lorem ipsum dolor sit amet cons.', amount: '$9,212', duration: 'Per Month', image:sellerImage },
    { id: 5, name: 'Aeron Chair', para: 'Lorem ipsum dolor sit amet cons.', amount: '$6,212', duration: 'Per Month', image:sellerImage },
]

export {links, notifications, tasks, products, sellers};