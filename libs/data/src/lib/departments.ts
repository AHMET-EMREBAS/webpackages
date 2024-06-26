import { IDepartment } from '@webpackages/models';

export const getBuiltinDepartments: () => Partial<IDepartment>[] = () => [
  {
    name: 'Human Resources (HR)',
  },
  {
    name: 'Finance and Accounting',
  },
  {
    name: 'Sales and Marketing',
  },
  {
    name: 'Operations',
  },
  {
    name: 'Research and Development (R&D)',
  },

  {
    name: 'Information Technology (IT)',
  },
  {
    name: 'Legal',
  },
  {
    name: 'Quality Assurance (QA)',
  },
  {
    name: 'Business Development',
  },
  {
    name: 'Public Relations (PR)',
  },
  {
    name: 'Supply Chain Management',
  },
];
