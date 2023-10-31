// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDatabase } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconDatabase
};

const masterData = {
  id: 'masterData',
  title: 'Master Data',
  type: 'group',
  children: [
    {
      id: 'dataMaster',
      title: 'Data Master',
      type: 'collapse',
      icon: icons.IconDatabase,
      children: [
        {
          id: 'dataAdmin',
          title: 'Data Admin',
          type: 'item',
          url: '/masterData/admin',
          breadcrumbs: false
        },
        {
          id: 'dataEmployee',
          title: 'Data Employee',
          type: 'item',
          url: '/masterData/employee',
          breadcrumbs: false
        },
      ]
    }
  ]
};

export default masterData;
